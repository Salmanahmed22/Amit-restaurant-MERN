const mealServices = require('../services/mealServices');
const jsend = require('jsend');

const getMeals = async (req, res) => {
    try{
        const meals = await mealServices.getAllMeals();
        res.json(jsend.success({meals}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const getMealsByCategory = async (req, res) => {
    try{
        const category = req.params.category;
        const meals = await mealServices.getMealsByCategory(category);
        res.json(jsend.success({meals}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const addMeal = async (req, res) => {
    try {
        const mealData = req.body;
        
        // If there's an uploaded image, add its path to the meal data
        if (req.file) {
            // Create path for accessing the image
            const imagePath = `/uploads/${req.file.filename}`;
            mealData.image = imagePath;
        }
        
        const newMeal = await mealServices.createMeal(mealData);
        res.json(jsend.success({newMeal}));
    } catch(err) {
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const deleteMeal = async (req, res) => {
    try{
        const id = req.params.id;
        const deletedMeal = await mealServices.deleteMeal(id);
        res.json(jsend.success({deletedMeal}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const updateMeal = async (req, res) => {
    try {
        const id = req.params.id;
        const mealData = req.body;
        
        // If there's an uploaded image, add its path to the meal data
        if (req.file) {
            // Create path for accessing the image
            const imagePath = `../uploads/${req.file.filename}`;
            mealData.image = imagePath;
            
            // Get the current meal to check if we need to delete an old image
            const currentMeal = await mealServices.getMealById(id);
            
            // If current meal has a custom image (not the default), delete it
            if (currentMeal && currentMeal.image && !currentMeal.image.includes('pixabay')) {
                const path = require('path');
                const fs = require('fs');
                const oldImagePath = path.join(__dirname, '..', currentMeal.image);
                
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
        }
        
        const updatedMeal = await mealServices.updateMeal(id, mealData);
        res.json(jsend.success({updatedMeal}));
    } catch(err) {
        res.status(500).json(jsend.error({message: err.message}));
    }
}

module.exports = { getMeals, getMealsByCategory, addMeal, deleteMeal, updateMeal}