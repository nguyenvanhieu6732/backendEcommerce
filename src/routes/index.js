const UserRouter = require("./UserRouter")
const ProductRouter = require("./ProductRouter")
<<<<<<< HEAD
const CheckOutRouter = require("./CheckOutRouter")
=======
const OrderRouter = require("./OrderRouter")
>>>>>>> 971581d4f4b83c90cdd255b8d512f163224d3ea1

const routes = (app) => {
    app.use("/api/user", UserRouter)
    app.use("/api/product", ProductRouter)
<<<<<<< HEAD
    app.use("/checkout", CheckOutRouter)
=======
    app.use("/api/order", OrderRouter)
>>>>>>> 971581d4f4b83c90cdd255b8d512f163224d3ea1
}

module.exports = routes