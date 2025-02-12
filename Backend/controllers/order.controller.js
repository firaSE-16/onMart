import Order from "../models/Order.model.js";
import Cart from "../models/Cart.model.js";
import Wishlist from "../models/Wishlist.model.js";

export const addOrder = async (req, res) => {
    try {
        const { products, totalAmount, paymentStatus } = req.body;
        const buyerId = req.user._id; 

   
        if (!products || products.length === 0) {
            return res.status(400).json({ message: "Products are required." });
        }

        const newOrder = new Order({
            buyerId,
            products,
            totalAmount,
            paymentStatus
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("buyerId").populate("products.productId");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const updateOrder = async (req, res) => {
    try {
        const { status, paymentStatus } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: { status, paymentStatus } },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order updated successfully!", order: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

    



export const addCart = async (req, res) => {
    try {
        const { productId, variation, attributes, quantity, price } = req.body;
        const userId = req.user._id; 

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [], totalAmount: 0 });
        }

        
        const existingProduct = cart.products.find(p => p.productId.toString() === productId);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ productId, variation, attributes, quantity, price });
        }

      
        cart.totalAmount = cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);

        await cart.save();
        res.status(201).json({ message: "Product added to cart!", cart });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");

        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const updateCart = async (req, res) => {
    try {
        const { productId, quantity, attributes } = req.body;
        const userId = req.user._id;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        if (quantity !== undefined) {
            cart.products[productIndex].quantity = quantity;
        }
        if (attributes) {
            cart.products[productIndex].attributes = attributes;
        }

  
        cart.totalAmount = cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);

        await cart.save();
        res.status(200).json({ message: "Cart updated successfully!", cart });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const deleteCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.products = cart.products.filter(p => p.productId.toString() !== productId);

      
        cart.totalAmount = cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);

        await cart.save();
        res.status(200).json({ message: "Product removed from cart", cart });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};






export const addWishlist = async (req, res) => {
    try {
        const { productId, variation, attributes } = req.body;
        const userId = req.user._id; 

        let wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            wishlist = new Wishlist({ userId, products: [] });
        }

     
        const existingProduct = wishlist.products.find(p => p.productId.toString() === productId);

        if (existingProduct) {
            return res.status(400).json({ message: "Product already in wishlist" });
        }

        wishlist.products.push({ productId, variation, attributes });

        await wishlist.save();
        res.status(201).json({ message: "Product added to wishlist!", wishlist });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: req.user._id }).populate("products.productId");

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist is empty" });
        }

        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const updateWishlist = async (req, res) => {
    try {
        const { productId, attributes } = req.body;
        const userId = req.user._id;

        let wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        const productIndex = wishlist.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in wishlist" });
        }

        if (attributes) {
            wishlist.products[productIndex].attributes = attributes;
        }

        await wishlist.save();
        res.status(200).json({ message: "Wishlist updated successfully!", wishlist });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export const deleteWishlist = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        let wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        wishlist.products = wishlist.products.filter(p => p.productId.toString() !== productId);

        await wishlist.save();
        res.status(200).json({ message: "Product removed from wishlist", wishlist });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
