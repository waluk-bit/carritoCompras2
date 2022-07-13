const validarBoletos = number => {
    const numBoletos = [321,222,333,182];
    const boletosValidos = numBoletos.find(num => num === number);
    boletosValidos ?  alert(`El numero de boleto: ${number}. Es correcto`) 
    : alert(`El numero de boleto: ${number}. Es incorrecto`); 
    };

const numIngresado = parseInt(prompt("Ingrese su numero de boleto 😎"));

validarBoletos(numIngresado);

