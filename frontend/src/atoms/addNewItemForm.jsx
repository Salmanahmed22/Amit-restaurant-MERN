"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast'
const AddNewItemForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: ""
      });

    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(`http://localhost:5000/api/menu/`, formData,{
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
              "Content-Type": "application/json",
            },
          });
          console.log(response);
          
          if (response.data.status === "success") {
            toast.success("Menu item added successfully!");
            setTimeout(() => {
              window.location.reload();
            },1000)
          } else {
            toast.error("Failed to add menu item.");
          }
        } catch (error) {
          console.error("Error adding menu item:", error);
          toast.error("An error occurred while adding the menu item.");
        }
      };
  return (
    <div className="h-screen shadow-lg flex items-center justify-center">
        <Toaster position='top-right'/>
      <div className="flex flex-col justify-center items-center bg-white rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 text-center">Add Menu Item</h1>    
        <form onSubmit={handleSubmit} className='shadow-lg p-4 w-[600px] flex flex-col justify-center items-center'>
          <div className="space-y-4 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            
            <div className="w-full">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                >
                <option value="">Select a category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Main Dishes">Main Dishes</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                id="image"
                name="image"
                type="text"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
          </div>
          
        <button
            type="submit"
            className="w-[200px] px-4 py-2 bg-[#AD343E] text-white rounded-md hover:bg-[#8B2C34] disabled:opacity-50"
            >
            Add Item
        </button>
        </form>
      </div>
    </div>
  )
}

export default AddNewItemForm