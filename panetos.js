let articulos = [
    {
        imagen:"./Cookies/cookies.jpeg ",
        nombre:" Galletas con trozos de chocolate ",
        // descripcion:"Tejido en fibras de oro traidas del pasado tayrona",
        precio: 5.000
    },
    {
        imagen:"./Blondies/blondies.jpeg  ",
        nombre:" Blondies ",
        descripcion:"Tejido en fibras por las ultimas guerreras amazonicas",
         // descripcion:"Tejido en fibras de oro traidas del pasado tayrona",
        precio: 5.000
    }, 
    {
        imagen:"./Brownies/brwonies.jpeg ",
        nombre:" Brownies ",
        // descripcion:"Tejido en fibras de oro traidas del pasado tayrona",
        precio: 5.000
    },
    
    {
        imagen:"./MiniCakes/mini_cakes.jpeg  ",
        nombre:" Mini Cakes ",
        // descripcion:"Tejido en fibras de oro traidas del pasado tayrona",
        precio: 5.000
    }
]

document.addEventListener("DOMContentLoaded",()=>{
    pintar()
})

function pintar(){
    articulos.forEach((item, i)=>{
        let div = document.createElement("div")
        div.setAttribute("id","card")
        let imagen = document.createElement("div")
        imagen.setAttribute("id","imagen")
        let img = document.createElement("img")
        img.src=item.imagen
        imagen.appendChild(img)
        let titulo = document.createElement("div")
        titulo.setAttribute("id","titulo")
        titulo.textContent=item.nombre

        div.appendChild(imagen)
        div.appendChild(titulo)

        document.getElementById("contenedor").appendChild(div)
    })
}