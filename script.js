function calcular(operacion) {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');
    const log = document.getElementById('log');
    
    // Validar campos vacios
    if (num1 === '' || num2 === '') {
        resultado.innerHTML = '<span style="color: red;">Error: Ambos campos deben estar llenos</span>';
        return;
    }
    
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let res;
    let operacionTexto;
    
    // Realizar operacion
    switch(operacion) {
        case 'suma':
            res = redondear(numero1 + numero2);
            operacionTexto = `${numero1} + ${numero2} = ${res}`;
            break;
        case 'resta':
            res = numero1 - numero2;
            operacionTexto = `${numero1} - ${numero2} = ${res}`;
            break;
        case 'multiplicacion':
            res = numero1 * numero2;
            operacionTexto = `${numero1} × ${numero2} = ${res}`;
            break;
        case 'division':
            if (numero2 === 0) {
                resultado.innerHTML = '<span style="color: red;">Error: No se puede dividir entre cero</span>';
                return;
            }
            res = redondear(numero1 / numero2);
            operacionTexto = `${numero1} ÷ ${numero2} = ${res}`;
            break;
    }
    
    // Mostrar resultado
    resultado.innerHTML = `Resultado: ${res}`;
    
    // Agregar al historial
    const li = document.createElement('li');
    li.textContent = operacionTexto;
    log.insertBefore(li, log.firstChild);
}

function redondear(numero) {
    return parseFloat(numero.toFixed(2));
}