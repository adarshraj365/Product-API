const Product = require('../models/Product');
const fs = require('fs');

function productController(){
    return {
        add : (req,res) => {
            console.log(req.file);
            const {title , price , description_short , description_long } =  req.body ; 
            console.log(req.body);
            let img = fs.readFileSync(req.file.path);
            let encoded_image = img.toString('base64');

            const product = new Product ({
                title,
                price,
                description_short,
                description_long,
                image : encoded_image
            });

            product.save().then(result => {
                return res.send({msg : 'Product Added succesfully..'});
            }).catch(err => {
                return res.send({err});
            })
        },

        get : async (req,res) => {
            const products = await Product.find() ;
            return res.send({products});
        },

        getOne : async (req,res) => {
            const id = req.params.id ;
            const product = await Product.find({_id : id});
            return res.send({product});
        }
    }
}

module.exports = productController ;