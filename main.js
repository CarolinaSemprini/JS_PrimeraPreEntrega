

/*let nombre= prompt("Ingrese su Nombre");
    alert("Bienvenid@"  + " " + nombre + " " + "a nuestro E-commerce de Zapatillas");
let carro= prompt("Que producto desea comprar?" + productos + "zapatillas deportias; zapatillas de cuero; zapatillas de lona; zapatillas exclusivas");
    alert( "desea comprar" + carro )
let stock=5
if(cantidad<=stock)
    alert("Disponemos de Stock, continue al sitio para comprar");
else{
    alert("No disponemos de Stock, solo contamos con 5 unidades")
}*/


const productos=[
    {nombre:"zapatillas de cuero", precio: 50000},
    {nombre:"zapatillas de lona", precio: 20000},
    {nombre:"zapatillas de diseño exclusivo", precio: 80000},
    {nombre:"zapatillas deportivas", precio: 60000},
];

let carro=[]

const formaPago=[
    {credito:"Naraja", cuotas: 6},
    {credito:"Visa", cuotas: 12},
    {credito:"Patagonia", cuotas: 18},
]

let seleccionPago=[]


let seleccion =prompt("Desea comprar zapatillas: si o no")
while(seleccion!="si" && seleccion !="no"){
    alert("por favor ingresa si o no")
    seleccion=prompt("hola desea comprar algo si o no");
}

if(seleccion =="si"){
    alert("a continuación nuestra lista de productos")
    let todoslosProductos= productos.map((producto)=>producto.nombre + " " + producto.precio +"$");
    alert(todoslosProductos.join(" - "))
}else if(seleccion=="no"){
    alert("gracias por tu visita, hasta pronto")
}
while(seleccion == "si"){
    let producto=prompt("agrega un producto a tu carrito")
    let precio=0

    //validacion de lo que ingresa el usuario con mi lista de productos

    if(producto=="zapatillas de cuero" || producto=="zapatillas de lona" || producto=="zapatillas de diseño exclusivo" || producto=="zapatillas deportivas"){
        switch(producto){
            case "zapatillas de cuero":
            precio=50000
            break;

            case "zapatillas de lona":
            precio=20000
            break;

            case "zapatillas de diseño exclusivo":
            precio=80000
            break;

            case "zapatillas deportivas":
            precio=60000
            break;
            default:
                break;
        }
        let unidades= parseInt(prompt("cuantas unidades quiere llevar"))

        carro.push({producto, unidades, precio})
        console.log(carro)  
    }else{
        alert("no tenemos su producto")
    }
    
    seleccion= prompt("desea seguir comprando??")
    while(seleccion === "no"){
        alert("gracias por la compra, hasta pronto")
        carro.forEach((carroFinal)=>{
           console.log(`su carrito tiene los siguientes productos: producto:${carroFinal.producto}, unidades: ${carroFinal.unidades}, total a pagar ${carroFinal.unidades * carroFinal.precio}`)
        
        })
        break;
    }
    const totalCompra= carro.reduce((acc,carro)=>acc +carro.precio * carro.unidades,0)
    alert(`el total a pagar de su carrito es:${totalCompra}`)

    let seleccionOpt
    let menu=alert("seleccione una opcion de pago")
    function tipopago(){
    
    menu+="1. Tarjeta\n";
    menu+="2. Efectivo\n";
    menu+="3. Salir\n";
    seleccionOpt= prompt(menu);
    }

    tipopago();



    while(menu!="1-Credito" || menu!="2-Efectivo" || menu!="3-Salir"){
   alert("su opcion de pago fue" + seleccionOpt)
    break;
    }

    if(seleccionOpt== "1"){
    alert("a continuacion nuestros planes de pago")
    let planespagos= formaPago.map((creditos)=> creditos.credito + " " + creditos.cuotas);
    alert(planespagos.join(" - "))

    }else if(seleccionOpt== "2"){
    alert("comuniquese con nosotros para realizar su pago")
    }
    while(seleccionOpt=== "1"){
    let credito=prompt("con qué tarjeta desea pagar: Naranja, Visa, Patagonia")
    let cuotas=0

    //validacion de lo que ingresa el usuario con mi lista de productos

    if(credito=="Naranja" || credito=="Visa" || credito=="Patagonia"){
        switch(credito){
            case "Naranja":
            cuotas=6
            break;

            case "Visa":
            cuotas=12
            break;

            case "Patagonia":
            cuotas=18
            break;

            default:
                break;
        }

        seleccionPago.push({credito, cuotas})
        console.log(seleccionPago)  
    }else{
        alert("no tenemos esa tarjeta")
    }

    seleccionOpt= prompt("desea finalizar la compra: si o no??")
    if(seleccionOpt === "si"){
        alert("gracias por su compra")
        seleccionPago.forEach((pagofinal)=>{
           alert(`su pago sera en : tarjeta:${pagofinal.credito}, cuotas: ${pagofinal.cuotas}`)
        });
        
    }else{
        alert("hasta pronto");
    }
    }


}








//cambio de numero aumentar o disminuir cantidad de producto
let menosBtn =document.querySelector('.input_menos');
let masBtn=document.querySelector('.input_mas');
let UserBtn=document.querySelector('.input_number');

let userBtnNumero=0;
masBtn.addEventListener('click', ()=>{
    userBtnNumero++;
    UserBtn.value=userBtnNumero;
    console.log('userBtnNumero');

});


menosBtn.addEventListener('click', ()=>{
    userBtnNumero--;
    if(userBtnNumero<=0){
        userBtnNumero=0;
    }
    UserBtn.value=userBtnNumero;
    console.log('userBtnNumero');
});

//agregar o quitar al carrito
const addToCarBtn= document.querySelector('.detalles_boton');
let cartNotificacion = document.querySelector('.header_cart--notificacion');
let lastvalue = parseInt(cartNotificacion.innerText);


addToCarBtn.addEventListener('click',()=>{

    if(userBtnNumero>stock){
        alert("Sin Stock");
    }else{
        lastvalue=lastvalue + userBtnNumero;

    cartNotificacion.innerText = lastvalue;
    cartNotificacion.style.display = 'block';
    drawProductInModal();
    
    }


});




//mostrar modal del carrito con el detalle

const cartIconBtn = document.querySelector('.header_cart');
const cartModal = document.querySelector('.cart-modal');
const productContenedor = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click',()=>{
    cartModal.classList.toggle('mostrar');
    
    if(lastvalue==0){
        productContenedor.innerHTML='<p class="carrito-vacio">Tu carrito esta vacio</p>';

    } if(lastvalue>stock){
        productContenedor.innerHTML='<p class="carrito-vacio">Sin Stock</p>';
    }
    else{
        drawProductInModal();
    }
    
});

//borrar los detalles del contenido del carrito del modal

function deleteProduct(){
    const cartDeleteBtn= document.querySelector('.cart_modal__delete');
    const productoContenedor = document.querySelector('.cart-modal__chekout-container');

    cartDeleteBtn.addEventListener('click', ()=>{
        productContenedor.innerHTML='<p class="carrito-vacio">Tu carrito esta vacio</p>';
        lastvalue=0;
        cartNotificacion.innerText = lastvalue;
    });
}




//modificar las imagenes cuando se presionan las flechas
const imageContainer=document.querySelector('.galeria_imagen-conteiner');
const flechaPreviustBtn=document.querySelector('.galeria_izquierda');
const flechaNextBtn=document.querySelector('.galeria_derecha');
let imgIndex=1;

const imagesUrls=[
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
   
]

flechaNextBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer);
});

flechaPreviustBtn.addEventListener('click',()=>{
    changePreviuseImage(imageContainer);
});

//mostrar el modal fondo negro de imagenes cuando hago clic en la foto principal
const imagesModal = document.querySelector('.galeria_modal_fondo_negro');
const closeModalBtn= document.querySelector('.galeria_modal_cerrar');

imageContainer.addEventListener('click',()=>{
    imagesModal.style.display='grid';
});

closeModalBtn.addEventListener('click',()=>{
    imagesModal.style.display='none';
});


//cambiar las imagenes principal desde las imagenes miniaturas
let galeriaMiniaturas=document.querySelectorAll('.galeria_miniatura');
galeriaMiniaturas= [...galeriaMiniaturas]

galeriaMiniaturas.forEach(galeriaMiniaturas =>{
    galeriaMiniaturas.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage=`url('./images/image-product-${event.target.id}.jpg')`

    });
});

//cambiar las imagenes principal desde las imagenes miniaturas en el modal
let modalMiniaturas=document.querySelectorAll('.galeria_modal_producto');
const modalImageContainer=document.querySelector('.galeria_modal_imagen-conteiner');

modalMiniaturas=[...modalMiniaturas]

modalMiniaturas.forEach(modalMiniaturas=>{
    modalMiniaturas.addEventListener('click',event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage=`url('./images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});

//cambiar imagens usando flechas desde modal fondo negro
const previusModalBtn=document.querySelector('.galeria_modal_izquierda');
const nextModalBtn=document.querySelector('.galeria_modal_derecha');

nextModalBtn.addEventListener('click',()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click',()=>{
    changePreviuseImage(modalImageContainer);
});

//mostrar el navbar cuando presiono el menu hambuerguesa



//funciones
function drawProductInModal(){
    productContenedor.innerHTML=`
    <div class="cart-modal__details-container">
        <img class="cart-modal_imagen" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
        <p class="cart-modal__product">Zapatillas Edicion Limitada</p>
        <p class="cart-modal__precio">$125 x 3 <span>$375.00</span></p>
        </div>
        <img class="cart_modal__delete" src="./images/icon-delete.svg" alt="">
    </div>
    <button class="cart_modal__checkeout">Checkeout</button>`
    deleteProduct()
    let precio = document.querySelector('.cart-modal__precio');
    precio.innerHTML=`'$125 x ${lastvalue} <span>$${lastvalue*125}.00</span>'`;
}

function changeNextImage(imgContainer){
    

    if(imgIndex==4){
        imgIndex= 1;
    }else{
        imgIndex++;
    }
    
    imgContainer.style.backgroundImage=`url('./images/image-product-${imgIndex}.jpg')`
}

function changePreviuseImage(imgContainer){
    if(imgIndex==1){
        imgIndex= 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage=`url('./images/image-product-${imgIndex}.jpg')`
}


//formas de pago
//1) defino las variables correspondientes
let opt_1=new Array("-","6","9","12","...");
let opt_2=new Array("-","Visa","Cabal","Patagonia","...");
let opt_3=new Array("-","mercado pago","...");
//2) se crea una funcion que permite ejecutar el cambio dinamico

function cambia(){
    let cosa;
    //se toma el valor de la forma de pago
    cosa=document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
    //se verifica si forma_pago esta definida
    if(cosa!=0){
        //selecciona una forma_pago correcta
        mis_opts=eval("opt_" +cosa);
        //se calcula el numero de forma_pago
        num_opts=mis_opts.length;
        //marco el numero de opciones en el select
        document.formulario1.opt.length=num_opts;
        //para cada opcion del array, la coloco en el select
        for(i=0; i<num_opts;i++){
            document.formulario1.opt.options[i].value=mis_opts[i];
            document.formulario1.opt.options[i].text=mis_opts[i];
        }
    }
        else{
            document.formulario1.opt.length=1;
            document.formulario1.opt.options[0].value="-";
            document.formulario1.opt.options[0].text="-";

        }

        document.formulario1.opt.options[0].selected=true;
    }





