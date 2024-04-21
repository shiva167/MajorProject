const Order = require("../model/Order");
const stripe = require("stripe")(
  "sk_test_51P7yTaRqAafrtNLPAmTME9fvvUrChxix5BPjk8Qp4dLE4E40RL9qilMwLVDJBAtc7VsT3y7b1uy8t61YfX7cM7xM00LEQvHH69"
);

const createOrder = async (req, res) => {
  try {
    const { user, items, totalAmount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Payment for food order on TasteTracker",
            },
            unit_amount: totalAmount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    if (session.id) {
      const newOrder = new Order({
        user,
        items,
        totalAmount,
      });
      const saveOrder = await newOrder.save();
      await Order.findByIdAndUpdate(saveOrder._id, {
        payment: true,
      });
      res.status(200).json({
        success: true,
        message: "Order created succesfully",
        data: saveOrder,
        sessionId: session.id,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Not Successful",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const markOrderAsDelivered = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);
    order.status = "Delivered"
    await order.save();

    res.status(200).json({
      success: true,
      data: order,
      message: "Delivered",

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.food").populate("user");

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getSingleOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const userOrders = await Order.find({ user: userId })
      .populate("items.food")
      .populate("user");

    res.status(200).json({
      success: true,
      data: userOrders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { createOrder, getAllOrders, getSingleOrder,markOrderAsDelivered };
