const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const {createMeal, updateMeal} = require('../validators/mealValidator')
const {authorizeAdmin} = require('../middlewares/authorization');
const upload = require('../middlewares/menuItemImage')
// TODO error in middlewares!!!

// get menu
router.get('/', mealController.getMeals);
// add meal to menu (admin)
router.post('/'
    ,authorizeAdmin,
    upload.single('image'),
    mealController.addMeal);
// delete meal from menu (admin)
router.delete('/:id',authorizeAdmin, mealController.deleteMeal);
// get menu by category
    router.get('/:category', mealController.getMealsByCategory);
// update meal (admin)
router.put('/:id', 
    authorizeAdmin, 
    upload.single('image'), 
    mealController.updateMeal
  );
module.exports = router