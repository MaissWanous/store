const productsService = require("../service/productsService");
router.get("/getProducts",async function(req,res){
    const data=await productsService.getProducts();
    console.log(data);
})