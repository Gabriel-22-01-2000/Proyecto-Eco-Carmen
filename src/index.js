const express = require('express');
const app = express();
const path = require('path');//Nos ayuda a unir las ruta juntos con el dirname


app.listen(process.env.PORT || 3000,() => { //server funcionando
    console.log('Listening Server on port',app.get('port'));
});



//Ajustes
app.set('port', process.env.PORT || 3000);// Establecemos el server
app.set('views',path.join(__dirname, 'views')); // Configuro la carpeta vistas 
app.set('view engine','html');// integracion natural no es necesario requerirlo
app.engine('html',require('ejs').renderFile);// Nos permite conservar la extensión y al mismo tiempo introducir codigo embebido de javascript

    // Enlaces entre el server y las vistas


    // Configuración de las rutas

    app.use(require('./routers/route')); //Llama a nuestras rutas, esto para mantener ordenado el código

   // Archivos estaticos

   app.use(express.static(__dirname + '/public')); //Gracias a esto accedemos a nuetros archivos publicos e estaticos
