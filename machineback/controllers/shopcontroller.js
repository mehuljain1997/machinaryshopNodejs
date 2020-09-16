const Shop = require('../models/Shop.model.js');

exports.Register = function(req,res){
    console.log('contro')
    res.send('register routes')
}

exports.Login = function(req,res){
    console.log('contro')
    res.send('Login routes')
}

exports.RegisterDetail = function(req,res){
    console.log('body in registerdetail',req.body)

    const NewBody = new Shop({
        ShopId: req.body.ShopId,
         ShopType: req.body.ShopType || "Untitled Note", 
         ShopName: req.body.ShopName,
         OwnerName: req.body.OwnerName,
         ShopAddress: req.body.ShopAddress,
         OwnerContactNo: req.body.OwnerContactNo
     });

    NewBody.save().then((body) =>{
        res.send(body)

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the shop."
        });

    })

    
}

// Find a single note with a noteId
exports.fetchByShopId = (req, res) => {
    console.log('inside fetch',req.params.ShopId)
    Shop.find({"ShopId": Number(req.params.ShopId)})
    .then(data => {
       // console.log('inside then',data);
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.ShopId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.ShopId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.ShopId
        });
    });

    

};



// Find a single note with a noteId
exports.AllShop = (req, res) => {
    console.log('inside all')
    Shop.find()
    .then(data => {
       // console.log('inside then',data);
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.ShopId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.ShopId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.ShopId
        });
    });

}


exports.delete = (req,res)=>{
    console.log('inside delete fu')

    Shop.deleteMany({'ShopId': req.params.ShopId})
    .then((sh) => {
        console.log('delete shop',sh)
        res.send({'message':'delete successfully'})

    }).catch((err) =>
    {
        res.send({'err' :err})
    })
}


exports.update = (req,res) =>{
    console.log('shopId',req.params.ShopId)

Shop.update({"ShopId": Number(req.params.ShopId)},  {$set:{
    ShopId: req.body.ShopId || "Untitled Note",
    ShopType: req.body.ShopType,
    ShopName: req.body.ShopName
}}, {new: true})
.then(shop => {
    if(!shop) {
        return res.status(404).send({
            message: "Shop not found with id " + req.params.ShopId
        });
    }
    res.send(shop);
}).catch(err => {
    console.log('catch');
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Note not found with id " + req.params.ShopId
        });                
    }
    return res.status(500).send({
        message: "Error updating note with id " + req.params.ShopId
    });
});

res.send({
    message: "Product Update Successfully"
});

}