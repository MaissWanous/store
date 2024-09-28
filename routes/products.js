const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const productsService = require("../service/productsService");
router.get("/getProducts", async function (req, res) {
    const data = await productsService.getProducts();
    console.log(data);
})
module.exports = router;