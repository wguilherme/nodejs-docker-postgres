const db = require('../config/database')
exports.createProduct = async(req,res)=>{
  const {product_name, quantity, price}=req.body
  const {rows}= await db.query
}