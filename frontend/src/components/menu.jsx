"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import MenuCategoryButton from "@/atoms/menuCategoryButton";
import MenuCard from "@/atoms/menuCard";
import Loading from "@/app/loading";
import { DialogDemo } from "@/atoms/DialogDemo";

const ITEMS_PER_PAGE = 8;

const Menu = () => {
  const [isActive, setIsActive] = useState(1);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenuItems(response.data.data.meals);
        setFilteredItems(response.data.data.meals);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    fetchMenuItems();
  }, []);

  const handleActive = (category) => {
    setIsActive(category);
    setCurrentPage(1);

    if (category === 1) {
      setFilteredItems(menuItems);
    } else {
      const categoryMap = {
        2: "Breakfast",
        3: "Main Dishes",
        4: "Drinks",
        5: "Desserts",
      };
      setFilteredItems(menuItems.filter((item) => item.category === categoryMap[category]));
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item); // Set the selected item for the modal
  };

  const isAdmin = Cookies.get("isAdmin");

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[180px] overflow-hidden">
      <div className="w-full flex flex-col items-center gap-10 py-6 sm:py-8 md:py-10">
        <h1 className="text-[#2C2F24] font-sans text-3xl sm:text-[40px] md:text-[60px] lg:text-[80px] text-center">
          Our Menu
        </h1>
        <p className="text-[#495460] text-base sm:text-[18px] md:text-[20px] lg:text-[24px] text-center px-4">
          We consider all the drivers of change gives you the components
          <br className="hidden sm:block" />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="w-full max-w-[850px] flex flex-wrap items-center justify-center gap-2 sm:gap-[15px] px-4">
        {[
          { id: 1, label: "All" },
          { id: 2, label: "Breakfast" },
          { id: 3, label: "Main Dishes" },
          { id: 4, label: "Drinks" },
          { id: 5, label: "Desserts" },
        ].map((category) => (
          <MenuCategoryButton
            key={category.id}
            isAdmin
            onClick={() => handleActive(category.id)}
            className={`text-sm sm:text-base ${
              isActive === category.id
                ? "border-[#ad343e] text-white bg-[#ad343e]"
                : "border-[#2c2f2449] text-[#2C2F24] bg-white"
            }`}
          >
            {category.label}
          </MenuCategoryButton>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-[20px] mt-6 sm:mt-8 lg:mt-10 px-4">
        {filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item) => (
          <MenuCard
            id={item._id}
            isAdmin={isAdmin}
            key={item._id}
            image={item.image}
            price={item.price}
            title={item.name}
            discription={item.description}
            onEdit={() => handleEdit(item)} // Pass selected item to edit
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 pb-[50px]">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#ad343e] text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg">
          Page {filteredItems.length > 0 ? currentPage : 0} of {Math.ceil(filteredItems.length / ITEMS_PER_PAGE)}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => (prev * ITEMS_PER_PAGE < filteredItems.length ? prev + 1 : prev))}
          disabled={currentPage * ITEMS_PER_PAGE >= filteredItems.length}
          className="px-4 py-2 bg-[#ad343e] text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {selectedItem && (
        <DialogDemo
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Menu;
