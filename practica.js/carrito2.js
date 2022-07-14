const $templateLi = document.getElementById('templateLi');
const $listaUl = document.getElementById('listaUl');
const fragment = document.createDocumentFragment();
const $btnButtons = document.querySelectorAll('.card .btn');

const carrito = [];

const agregarAlcarrito = (e) =>{
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }

    const carritoFind = carrito.findIndex(item => item.id === producto.id);

    carritoFind === -1 ? carrito.push(producto) : carrito[carritoFind].cantidad++;

    pintarCarrito();
};
const pintarCarrito = () =>{
    $listaUl.textContent ="";
    carrito.forEach(item =>{
        const clonTemplateLi = $templateLi.content.cloneNode(true); //.firstElementChild se usa cuando tenes un objeto
        clonTemplateLi.querySelector('.frutaLiSpan').textContent = item.titulo;
        clonTemplateLi.querySelector('.badge').textContent = item.cantidad;
        fragment.appendChild(clonTemplateLi);
    })
    $listaUl.appendChild(fragment);
};

$btnButtons.forEach(btn => btn.addEventListener('click', agregarAlcarrito))












/* const validarBoletos = number => {
    const numBoletos = [321,222,333,182];
    const boletosValidos = numBoletos.find(num => num === number);
    boletosValidos ?  alert(`El numero de boleto: ${number}. Es correcto`) 
    : alert(`El numero de boleto: ${number}. Es incorrecto`); 
    };

const numIngresado = parseInt(prompt("Ingrese su numero de boleto 😎"));

validarBoletos(numIngresado);

 */