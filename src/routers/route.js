const express = require('express');
router = express.Router();


router.get('/',(req,res) => {

    res.render('index.html',{title: 'Eco Carmen'});
//    console.log(__dirname);
//    res.sendFile(path.join(__dirname, 'views/index.html'));
//    console.log(path.join(__dirname, 'views/index.html')); //Nos ayuda a unir la carpeta raiz con las vistas..
});



router.get('/contact',(req,res) => {

    res.render('contact.html',{title: 'Contactanos'});
//    console.log(__dirname);
//    res.sendFile(path.join(__dirname, 'views/index.html'));
//    console.log(path.join(__dirname, 'views/index.html')); //Nos ayuda a unir la carpeta raiz con las vistas..
});



router.get('/articles',(req,res) => {

    res.render('articles.html',{title: 'Articulos'});
//    console.log(__dirname);
//    res.sendFile(path.join(__dirname, 'views/index.html'));
//    console.log(path.join(__dirname, 'views/index.html')); //Nos ayuda a unir la carpeta raiz con las vistas..
});


// Articulos

router.get('/articles/article1',(req,res) => {// Configuro la ruta
    res.render('articles/article.html',{title: 'Articulos'}); // Accedo a la carpeta
});

router.get('/articles/article2',(req,res) => {// Configuro la ruta
    res.render('articles/article2.html',{title: 'Articulos'}); // Accedo a la carpeta
});


router.get('/articles/article3',(req,res) => {// Configuro la ruta
    res.render('articles/article3.html',{title: 'Articulos'}); // Accedo a la carpeta
});

router.get('/articles/article4',(req,res) => {// Configuro la ruta
    res.render('articles/article4.html',{title: 'Articulos'}); // Accedo a la carpeta
});



// Contactanos

router.post('/contact',(req,res) => {
    res.render('contact.html',{title: 'Contactanos'});
});// Peticion POST 

module.exports = router;