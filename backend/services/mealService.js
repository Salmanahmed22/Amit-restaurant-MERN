const mealRepo = require('../repos/mealRepo');

const getAllMeals = async () => {
    try{
        return await mealRepo.getAllMeals();
    }catch(err){
        throw new Error(err.message);
    }
}

const getMealsByCategory = async (category) => {
    try{
        return await mealRepo.getMealsByCategory(category);
    }catch(err){
        throw new Error(err.message);
    }
}

const createMeal = async (meal) => {
}

const updateMeal = async (id, meal) => {}

module.exports = { getAllMeals, getMealsByCategory ,createMeal, updateMeal}