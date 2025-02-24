"use client"
import React from "react";
import Image from "next/image";

const MenuCard = ({ id, isAdmin, image, price, title, discription, onEdit }) => {
  return (
    <div className="w-full items-center max-w-[280px] h-auto sm:h-[400px] border-2 border-solid border-[#cfcfce] rounded-[12px] flex flex-col">
      <div className="relative w-full aspect-[4/3]">
        <Image src={"/Mask group.svg"} fill alt={title} className="object-cover rounded-t-[10px]"/>
      </div>
      <div className="flex-1 flex flex-col justify-around items-center px-4 sm:px-[10px] py-4 sm:py-[20px] gap-2 sm:gap-3">
        <h2 className="text-[#AD343E] font-bold text-lg sm:text-[20px] font-sans">${price}</h2>
        <h3 className="text-[#2C2F24] font-bold text-lg sm:text-[20px] font-sans">{title}</h3>
        <p className="text-[#414536c8] text-sm sm:text-[16px] text-center">{discription}</p>
        {isAdmin && (
          <button
            onClick={onEdit} 
            className="w-[100px] py-2 bg-[#AD343E] text-white rounded-[12px] hover:bg-[#8B2C34] transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};


export default MenuCard;
