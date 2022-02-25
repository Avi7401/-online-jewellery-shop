const express=require('express')
const mongoose=require("mongoose")

const sessionController=require('./controller/session-controller')
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller");
const brandController = require("./controller/brand-controller");
const subcategoryController = require("./controller/subcategory-controller");
const stateController = require("./controller/state-controller");
const cityController = require("./controller/city-controller");
const vendorDetailController = require("./controller/vendorDetail-controller");
const cardController = require("./controller/card-controller");
const customerAddressController = require("./controller/customer_address-controller");
const orderDetailController = require("./controller/order_details-controller");
const statusController = require("./controller/status-controller");
const ProductController = require("./controller/product-controller");
const OrderController = require("./controller/order-controller");
const vendorProductController = require("./controller/vendor_product-controller");

//database
mongoose.connect('mongodb://localhost:27017/ecommerce',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.send("welcome buddy...")
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)


//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//category
app.post("/categories", categoryController.addCategories)
app.get("/categories", categoryController.getAllCategories)
app.delete("/categories/:categoryId", categoryController.deleteCategory)
app.put("/categories", categoryController.updateCategory)

//subcategory
app.post("/subcategories", subcategoryController.addSubcategory)
app.get("/subcategories", subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId", subcategoryController.deleteSubcategory)
app.put("/subcategories", subcategoryController.updateSubcategory)

//brand
app.post("/brands", brandController.addBrands)
app.get("/brands", brandController.getAllBrand)
app.delete("/brands/:brandId", brandController.deleteBrand)
app.put("/brands", brandController.updateBrand)

//state
app.post("/states", stateController.addState)
app.get("/states", stateController.getAllStates)
app.delete("/states/:stateId", stateController.deleteStates)
app.put("/states", stateController.updateState)


//city
app.post("/cities", cityController.addCity)
app.get("/cities", cityController.getAllcities)
app.delete("/cities/:cityId", cityController.deleteCity)
app.put("/cities", cityController.updateCity)


//vendorDetail
app.post("/vendordetails", vendorDetailController.addvendorDetail)
app.get("/vendordetails", vendorDetailController.getAllvendorDetails)
app.delete("/vendordetails/:vendorId", vendorDetailController.deletevendorDetail)
app.put("/vendordetails", vendorDetailController.updatevendorDetails)

app.post("/card", cardController.addCard);
app.delete("/card/:cardId", cardController.deleteCard);

app.post("/customerAddress", customerAddressController.addcustomerAddress);
app.get("/customerAddress", customerAddressController.getAllcustomerAddress);
app.delete("/customerAddress/:customerAddressId", customerAddressController.deletecustomerAddress);
app.put("/customerAddress", customerAddressController.updatecustomerAddress)

app.post('/orderDetails', orderDetailController.addOrderDetail);
app.get('/orderDetails', orderDetailController.getAllorderDetails);
app.delete('/orderDetails/:orderId', orderDetailController.deleteorderDetail);
app.put('/orderDetails', orderDetailController.updateorderDetails);

app.post('/status', statusController.addStatus);
app.get('/status', statusController.getAllStatus);
app.delete('/status/:statusId', statusController.deleteStatus);
app.put('/status', statusController.updateStatus);

app.post('/product', ProductController.addProduct);
app.get('/product', ProductController.getAllProduct);
app.delete('/product/:ProductId', ProductController.deleteProduct);
app.put('/product', ProductController.updateProduct);

app.post('/order', OrderController.addOrder);
app.get('/order', OrderController.getAllOrder);
app.delete('/order/:orderId', OrderController.deleteOrder);
app.put('/order', OrderController.updateOrder);

app.post('/vendorProducts', vendorProductController.addvendorProduct);
app.get('/vendorProducts', vendorProductController.getAllvendorProducts);
app.delete('/vendorProduct', vendorProductController.deletevendorProduct);
app.put('/vendorProduct', vendorProductController.updatevendorProduct);



app.listen(9000,function()
{
    console.log("server started on 9000")
})
