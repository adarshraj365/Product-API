const productController = require('../controllers/productController');
const imageUpload = require('../middleware/multer');


function initRoute(app){
    app.get('/' , (req,res) => {res.send('All Good !')});

    app.post('/product/add', imageUpload.single('image') ,productController().add );

    app.get('/product/get' , productController().get);

    app.get('/product/:id' , productController().getOne);
}

module.exports = initRoute;