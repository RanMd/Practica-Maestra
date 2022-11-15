
let dataIconAll = document.querySelectorAll("#dataContaint")
dataIconAll.forEach((span, index)=>{
    let spanChilds = span.children;
    span.children[1].addEventListener("click",()=>{
        alert("hola")
    })
    span.addEventListener("click",(e)=>{
        spanChilds[0].classList.add("activo")
        spanChilds[1].classList.add("activo")
        spanChilds[2].classList.add("activo")
    })
})
// let imagen = document.createElement("IMG")
// imagen.setAttribute("src", "./images/XIcon.svg")
// let fragment = document.createDocumentFragment()
// fragment.appendChild(imagen)
// dataIconAll[0].appendChild(fragment)
// console.log(dataIconAll[0])
// console.log(imagen, fragment)

