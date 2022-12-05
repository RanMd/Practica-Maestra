
function compararNum(num1, num2, contenedor) {
    let numb1 = parseInt(num1.value)
    let numb2 = parseInt(num2.value)
    contenedor.setAttribute("id", "resultComp")
    contenedor.setAttribute("class", "result resultComp")
    
    if (numb1 > numb2) {
        let pData = document.createElement("P");
        pData.textContent = `${numb1} > ${numb2}`;
        contenedor.appendChild(pData);
        fragment.appendChild(contenedor);
        formCont[0].appendChild(fragment)
    } else if (numb2 > numb1) {
        let pData = document.createElement("P");
        pData.textContent = `${numb2} > ${numb1}`;
        contenedor.appendChild(pData);
        fragment.appendChild(contenedor);
        formCont[0].appendChild(fragment)
    } else if (numb1 == numb2) {
        let pData = document.createElement("P");
        pData.textContent = `${numb1} = ${numb2}`;
        contenedor.appendChild(pData);
        fragment.appendChild(contenedor);
        formCont[0].appendChild(fragment)
    }
}

function comprobarDatos(dato, valor) {
    let inputData = parseInt(dato.value)
    if (inputData == 0) {
        if (valor >= 5) {
            alert("Escribe algo diferente a cero, pendejo")
        }
    } else if(isNaN(inputData)){
        if (valor >= 5) {
            alert("Escribe algo, pendejo")
        }
    }
}

function tableNumbers(contenedor, value, multiplos, divisores) {
    contenedor.setAttribute("id", "resultMult")
    contenedor.setAttribute("class", "result resultMult")
    let contentDiv = document.createElement("DIV")
    let h4 = document.createElement("P")
    let pDeTonto = document.createElement("P")
    if (multiplos) {
        if ((value % 2) == 0) {
            h4.textContent = `El numero ${value} es par`
            fragment.appendChild(h4)
            contenedor.appendChild(fragment)
        } else if((value % 2) != 0 && value > 1){
            h4.textContent = `El numero ${value} es impar`
            fragment.appendChild(h4)
            contenedor.appendChild(fragment)
        } else {
            h4.innerHTML = `El numero ${value} es impar` + "<br>" + "<br>"
            fragment.appendChild(h4)
            contenedor.appendChild(fragment)
        }
        if (value == 1) {
            pDeTonto.innerHTML = "Todo numero multiplicado por 1 es igual al numero multiplicado." + "<br>" + "<br>" + "genio."
            fragment.appendChild(pDeTonto)
            contenedor.appendChild(fragment)
        }       
        for (let i = 2; i <= 12 && value > 1; i++) {
            let itemP = document.createElement("P")
            let resultado = value * i;
            itemP.textContent = `${value} x ${i}: ${resultado}`
            contentDiv.appendChild(itemP)
        }
        fragment.appendChild(contentDiv)
        contenedor.appendChild(fragment)
        formCont[2].appendChild(contenedor)

    } else if (divisores) {
        if (value == 1) {
            pDeTonto.innerHTML = "● 1" + "<br>" + "<br>" + "Qué esperabas?"
            fragment.appendChild(pDeTonto)
            contenedor.appendChild(fragment)
        }

        for ( let divisor = 0; divisor <= value && value > 1; divisor++) {
            if ((value % divisor) == 0) {
                let itemP = document.createElement("P")
                itemP.textContent = `● ${divisor}`
                contentDiv.appendChild(itemP)
            }
        }
        fragment.appendChild(contentDiv)
        contenedor.appendChild(fragment)
        formCont[2].appendChild(contenedor)
    }
}