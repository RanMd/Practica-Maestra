let fragment = document.createDocumentFragment()
let formAll = document.querySelectorAll("#form")
let submitButton = document.querySelectorAll("#submit");
let resetIcon = document.querySelectorAll(".resetIcon");
let contentResult = document.querySelectorAll("#result");
let oButtonAll = document.querySelectorAll("#otherButton");
let formCont = document.querySelectorAll("#form-container");
let calcButton = document.querySelectorAll(".calcFunc")
let palancaComp, palancaMedia, palancaMult, palancaForm, palancaOr, palacaCalc;
let contador = 0;
console.log(calcButton)
//--------------- Funciones del menu ----------------//

let dataAll = document.querySelectorAll(".menu")

dataAll.forEach((element)=>{
    let elementsChilds = element.children;
    elementsChilds[0].addEventListener("click", ()=>{
        elementsChilds[0].children[0].classList.toggle("inactivo")
        elementsChilds[1].children[0].classList.toggle("inactivo")
        elementsChilds[1].children[1].classList.remove("activo")
        element.nextElementSibling.classList.add("inactivo")
    })
    elementsChilds[1].children[0].addEventListener("click", ()=>{
        element.nextElementSibling.classList.remove("inactivo")
        elementsChilds[1].children[1].classList.add("activo")
    })
})

//------------Funciones de cada elemento del menu--------------- //

//---------Proyecto1- Comparar --------//
submitButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    if (!palancaComp && formAll[0][0].value != 0 && formAll[0][1].value != 0) {
        palancaComp = true;
        let divResult = document.createElement("DIV")
        let input1 = formAll[0][0]
        let input2 = formAll[0][1]
        formAll[0][0].setAttribute("disabled", "")
        formAll[0][1].setAttribute("disabled", "")
        compararNum(input1, input2, divResult)
    } else if (formAll[0][0].value == 0) {
        contador++
        comprobarDatos(formAll[0][0], contador)
    } else if (formAll[0][1].value == 0) {
        contador++
        comprobarDatos(formAll[0][1], contador)
    } 
})

resetIcon[0].addEventListener("click", ()=>{
    form[0][0].value = null;
    form[0][1].value = null;
    formCont[0].removeChild(resultComp)
    form[0][0].removeAttribute("disabled")
    form[0][1].removeAttribute("disabled")
    palancaComp = false;
    
})

//-------------------------------------------------------//

//------------ Proyecto2 -Media -----------//
let datos = []; 
submitButton[1].addEventListener("click", (e)=>{
    e.preventDefault()
    let inputData = parseInt(formAll[1][0].value)
    if (inputData != 0 && !isNaN(inputData)) {
        datos.push(inputData)
        formAll[1][0].value = null;
        console.log(datos)
    } else if (inputData == 0 || isNaN(inputData)) {
        contador++
        comprobarDatos(formAll[1][0], contador)
    }
})

oButtonAll[0].addEventListener("click", ()=>{
    if (!palancaMedia && datos[0] != undefined) {
        palancaMedia = true;
        formAll[1][0].setAttribute("disabled", "")
        submitButton[1].setAttribute("disabled", "")
        let resultado = 0
        let divResult = document.createElement("DIV")
        divResult.setAttribute("class", "result resultMedia")
        divResult.setAttribute("id", "resultMedia")
        let paragraphSum = document.createElement("P")
        let paragraphMedia = document.createElement("P")
        for (const dato of datos) {
            resultado += dato
        }
        paragraphSum.textContent = `La suma de tus numeros es: ${resultado}`
        paragraphMedia.textContent = `La media de tus numeros es: ${(resultado / datos.length).toFixed(2)}`
        divResult.appendChild(paragraphSum)
        divResult.appendChild(paragraphMedia)
        fragment.appendChild(divResult)
        formCont[1].appendChild(fragment)
    }
})

resetIcon[1].addEventListener("click", ()=>{
    datos = []
    formAll[1][0].removeAttribute("disabled")
    submitButton[1].removeAttribute("disabled")
    formCont[1].removeChild(resultMedia)
    palancaMedia = false 
})

//-------------------------------------------------------//
//------------ Proyecto3 -Multiplos -----------//

oButtonAll[1].addEventListener("click", (e)=>{
    e.preventDefault()
    let inputData = parseInt(formAll[2][0].value)
    let divResult = document.createElement("DIV")
    contador++
    comprobarDatos(formAll[2][0], contador)
    if (!isNaN(inputData) && inputData != 0 && !palancaMult) {
        palancaMult = true;
        formAll[2][0].setAttribute("disabled", "")
        tableNumbers(divResult, inputData, true)
    }
})

oButtonAll[2].addEventListener("click", (e)=>{
    e.preventDefault()
    let inputData = parseInt(formAll[2][0].value)
    let divResult = document.createElement("DIV")
    contador++
    comprobarDatos(formAll[2][0], contador)
    if (!isNaN(inputData) && inputData != 0 && !palancaMult) {
        palancaMult = true;
        formAll[2][0].setAttribute("disabled", "")
        tableNumbers(divResult, inputData, false, true)
    }
})

resetIcon[2].addEventListener("click", ()=>{
    formAll[2][0].removeAttribute("disabled")
    formAll[2][0].value = null;
    formCont[2].removeChild(resultMult)
    palancaMult = false 
})

//-------------------------------------------------------//
//------------ Proyecto4 -Formulario-----------//

submitButton[2].addEventListener("click", (e)=>{
    e.preventDefault()
    if(formAll[3][0].checkValidity() && formAll[3][1].checkValidity() && formAll[3][2].checkValidity() && !palancaForm){
        palancaForm = true;
        let divResult = document.createElement("DIV")
        divResult.setAttribute("class", "result resultForm")
        divResult.setAttribute("id", "resultForm")
        let pData = document.createElement("P")
        let inputData = formAll[3][0].value
        let inputData2 = formAll[3][1].value
        let inputDate = formAll[3][2].value
        formAll[3][0].setAttribute("disabled", "")
        formAll[3][1].setAttribute("disabled", "")
        formAll[3][2].setAttribute("disabled", "")

        pData.innerHTML = `TU NOMBRE ES: &nbsp${inputData}` + "<br>" + `TU APELLIDO ES: &nbsp ${inputData2}` + "<br>" + `TU EDAD ES: &nbsp ${inputDate}` + "<br>" + "<br>" + `AHORA VETE HIJO DE ODIN`
        divResult.appendChild(pData)
        fragment.appendChild(divResult)
        formCont[3].appendChild(fragment)
    } else if (formAll[3][0].value.length < 4 || formAll[3][1].value.length < 4) {
        alert("Alguno de los datos ingresados es erroneo o esta incompleto")
    } else if (!formAll[3][2].checkValidity()) {
        alert("Debes ser mayor de edad para conocer al dios Barbakhan")
    }
})

resetIcon[3].addEventListener("click", ()=>{
    formAll[3][0].removeAttribute("disabled")
    formAll[3][1].removeAttribute("disabled")
    formAll[3][2].removeAttribute("disabled")
    formAll[3][0].value = null;
    formAll[3][1].value = null;
    formAll[3][2].value = null;
    formCont[3].removeChild(resultForm)
    palancaForm = false 
})

//-------------------------------------------------------//
//------------ Proyecto5 -Ordenar -----------//

let datosOr = []; 
submitButton[3].addEventListener("click", (e)=>{
    e.preventDefault()
    let inputData = parseInt(formAll[4][0].value)
    if (inputData != 0 && !isNaN(inputData)) {
        datosOr.push(inputData)
        formAll[4][0].value = null;
    } else if (inputData == 0 || isNaN(inputData)) {
        contador++
        comprobarDatos(formAll[4][0], contador)
    }
})

oButtonAll[3].addEventListener("click", ()=>{
    if (!palancaOr && datosOr[0] != undefined) {
        palancaOr = true;
        formAll[4][0].setAttribute("disabled", "")
        submitButton[3].setAttribute("disabled", "")
        let divResult = document.createElement("DIV")
        divResult.setAttribute("class", "result resultOr")
        divResult.setAttribute("id", "resultOr")
        let paragOri = document.createElement("P")
        let paragOr = document.createElement("P")
        let paragOrInv = document.createElement("P")
        let paragLong = document.createElement("P")
        let paragAzar = document.createElement("P")
        paragOri.textContent = `Array original : ${datosOr}`
        datosOr.sort((a,b)=> a < b ? -1 : 1)
        paragOr.textContent = `Array arreglado : ${datosOr}`
        datosOr.sort((a,b)=> a > b ? -1 : 1)
        paragOrInv.textContent = `Array arreglado inversamente : ${datosOr}`
        paragLong.textContent = `La longitud de tu array es: ${datosOr.length}`
        paragAzar.textContent = `Un numero al azar : ${datosOr[Math.floor( Math.random() * datosOr.length)]}`
        divResult.appendChild(paragOri)
        divResult.appendChild(paragOr)
        divResult.appendChild(paragOrInv)
        divResult.appendChild(paragLong)
        divResult.appendChild(paragAzar)
        fragment.appendChild(divResult)
        formCont[4].appendChild(fragment)
    }
})

resetIcon[4].addEventListener("click", ()=>{
    datosOr = []
    formAll[4][0].removeAttribute("disabled")
    submitButton[3].removeAttribute("disabled")
    formCont[4].removeChild(resultOr)
    palancaOr = false 
})

//-------------------------------------------------------//
//------------ Proyecto6 -Calculadora -----------//
let calcCont = document.getElementById("calcBody");
let calcDisp = document.getElementById("calcDisp");
let spanCalc = document.createElement("SPAN");

calcCont.addEventListener("click", (e)=>{
    let number = e.target.textContent
    if (number != "C" && number != "=" && e.target.tagName != "DIV" ){
        calcDisp.value += number
    }
})

calcButton[1].addEventListener("click", ()=>{
    if (calcDisp.value != "") {
        calcDisp.value = eval(calcDisp.value)
        palacaCalc = true;
    }
})

//------------------Codigo Desechado------------------//

// let dataIconAll = document.querySelectorAll("#dataContaint")
// dataIconAll.forEach((span, index)=>{
//     let spanChilds = span.children;
//     span.children[1].addEventListener("click",()=>{
//         alert("hola")
//     })
//     span.addEventListener("click",(e)=>{
//         spanChilds[0].classList.add("activo")
//         spanChilds[1].classList.add("activo")
//         spanChilds[2].classList.add("activo")
//     })
// })


// let imagen = document.createElement("IMG")
// imagen.setAttribute("src", "./images/XIcon.svg")
// let fragment = document.createDocumentFragment()
// fragment.appendChild(imagen)
// dataIconAll[0].appendChild(fragment)
// console.log(dataIconAll[0])
// console.log(imagen, fragment)

