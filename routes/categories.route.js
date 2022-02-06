
const express = require('express');
const router = express.Router();
const { Category } = require("../models/categories.model");

router.route("/")
.get(async(req, res) => {
  try {
    const categories = await Category.find({})
    return res.status(200).json({
      categories,
      success: true,
      message: "Categories retreived successfully"
    })
  } catch(error){
    res.status(404).json({
      success: false,
      message: "Error while retrieving categories",
      errorMessage: error.message
    })
  }
})
.post(async (req, res) => {
  try {
    const category = req.body
    const NewCategory = new Category(category);
    const savedCategory = await NewCategory.save();
    res.status(201).json({ success: true, category: savedCategory })
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to add category", errMessage: err.message})
  }
})

module.exports = router;