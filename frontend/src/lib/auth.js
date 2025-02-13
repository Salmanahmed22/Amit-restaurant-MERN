import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";

export function isTokenExpired() {
    const token = Cookies.get("token");

    if (!token) {
        console.log("Token is missing!");
        return true;
    }

    try {
        console.log("Decoding token:", token);
        const { exp } = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return exp < currentTime;
    } catch (error) {
        console.error("Token decoding failed!", error);
        return true;
    }
}

export function logoutUser() {
    Cookies.remove("token");
    Cookies.remove("isAdmin");
    Cookies.remove("username");
    Cookies.remove("id");

    
}
