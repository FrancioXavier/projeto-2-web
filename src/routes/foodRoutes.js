import { Router } from 'express';
import foodController from '../controllers/FoodController';

const router = new Router();

router.get('/', foodController.getFoods);

router.get('/:id', foodController.getFoodById);

router.post('/', foodController.newFood);

router.put('/:id', foodController.updateFood);

router.delete('/:id', foodController.deleteFood);

export default router;
