import Product from "../Model/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const { productName, productPrice, productCategory } = req.body
        const product = await Product.create({ productName, productPrice, productCategory });

        return res.status(200).json({
            message: "product created successfully",
            status: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            status: false
        })
    }
}