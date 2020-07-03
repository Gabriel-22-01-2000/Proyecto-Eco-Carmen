function navBar() {
    console.info("El Div funciona");
    var btn = document.getElementsByClassName('nav-enlace');
    for(var i = 0;i < btn.length;i++)
    {
       btn[i].classList.toggle('close');
    }
} 