const Plant = require("../models/plant");

const getAllPlants = async (req, res) => {
    try {
        const { search, category } = req.query;

        let query = {};

        if(search){
            query.$or = [
                { name : {$regex: search, $options: "i"}},
                {categories: {$regex: search, $options: "i"}}
            ];
        }

        if(category){
            query.categories = {$regex: category, $options: "i"}
        }
    
        const plants = await Plant.find(query);
        res.json(plants);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server Error" });
      }
};

const addNewPlant = async (req, res) => {
    try {
        console.log(req.body);
        const { name, price, categories, available } = req.body;
    
        if (!name || !price || !categories) {
          return res.status(400).json({ error: "Name, price & categories are required" });
        }
    
        const newPlant = new Plant({
          name,
          price,
          categories,
          available
        });
    
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server Error" });
      }
}
module.exports = {
    getAllPlants,
    addNewPlant,
};