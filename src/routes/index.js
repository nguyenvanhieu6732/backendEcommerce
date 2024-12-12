const UserRouter = require("./UserRouter")
const ProductRouter = require("./ProductRouter")
const CheckOutRouter = require("./CheckOutRouter")

const routes = (app) => {
    app.use("/api/user", UserRouter)
    app.use("/api/product", ProductRouter)
    app.use("/checkout", CheckOutRouter)
}

module.exports = routes