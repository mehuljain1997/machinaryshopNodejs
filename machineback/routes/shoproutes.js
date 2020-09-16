module.exports = app => {
    var shop = require('../controllers/shopcontroller')
   
    app.get('/home',function(req,res){
        res.send('home routes')
        
    })

    app.get('/login',shop.Login)

    app.get('/Register',shop.Register)

    app.post('/createshop',shop.RegisterDetail)

    app.get('/fetchAllShop',shop.AllShop)

    app.get('/fetchShopById/:ShopId',shop.fetchByShopId)

    app.delete('/deleteshop/:ShopId',shop.delete)

    app.put('/updateshop/:ShopId',shop.update)

}
