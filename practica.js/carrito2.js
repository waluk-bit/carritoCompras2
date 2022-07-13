const $templateLi = document.getElementById('templateLi');
const $listaUl = document.getElementById('listaUl');
const fragment = document.createDocumentFragment();
const $btnButtons = document.querySelectorAll('.card button');

const carritoObjeto = {};

const agregarAlcarrito = (e)=>{
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    };  
    carritoObjeto[producto.titulo] = producto;
    
    pushCarrito();
};

const pushCarrito = ()=>{

    $listaUl.textContent = "";

    Object.values(carritoObjeto).forEach(item=>{
        const cloneTemplate =  $templateLi.content.firstElementChild.cloneNode(true);
        cloneTemplate.querySelector('.frutaSpan').textContent = item.titulo; //TODO:item igual a las propiedades del objeto
        cloneTemplate.querySelector('.badge').textContent = item.cantidad; 
        fragment.appendChild(cloneTemplate);
    })
    $listaUl.appendChild(fragment);
};

$btnButtons.forEach(btn=>{btn.addEventListener('click', agregarAlcarrito)});


