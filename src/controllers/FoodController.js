import Food from '../Models/Food';

class  FoodController {
  async getFoods(req, res) {
    try {
      const foods = await Food.find();
      return res.status(200).json(foods);
    } catch (error) {
      console.log(error);
      return res
      .status
      .json({message: 'Nao foi possivel encontrar alimentos'});
    }
  }

  async getFoodById(req, res) {
    try {
      const foodId = req.params.id;

      const food = await Food.findById(foodId);

      if(!food) {
        return res.status(404).json({message: 'Alimento nao encontrado'})
      }

      res.status(200).json(food)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: 'Erro no servidor'})
    }
  }

  async newFood(req,res){
    try {
      const {
        name = '',
        price = '',
        expirationDate = '',
        quantity = '',
        category = ''
      } = req.body;

      if(
        name === '' ||
        price === '' ||
        expirationDate === '' ||
        quantity === '' ||
        category === ''
      ) return res.status(400).json({ message: 'Campos sem conteudo enviados'})

      const food = new Food({
        name,
        price,
        expirationDate: new Date(expirationDate),
        quantity,
        category
      })

      await food.save();

      return res.status(200).json(food);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor'});
    }

  }

  async updateFood(req,res){
    try {
      const foodId = req.params.id

      const food = req.body

      const newFood = await Food.findByIdAndUpdate(foodId, food, {
        new: true,
      })

      if(!newFood) {
        return res.status(404).json({ message: 'Alimento não encontrado' });
      }

      res.status(200).json(newFood);
    } catch (error) {
      res.status(500).json({message: 'erro no servidor'})
    }
  }

  async deleteFood(req,res){
    try {
      const foodId = req.params.id;

      const foodDelete = await Food.findByIdAndDelete(foodId);

      if (!foodDelete) {
        return res.status(404).json({ message: 'Alimento não encontrado' });
      }

      res.status(200).json({ message: 'Alimento deletado com sucesso' });
    } catch (error) {
      console.log(error)
      res.status(500).json({message: 'erro no servidor'})
    }
  }
}

export default new FoodController();
