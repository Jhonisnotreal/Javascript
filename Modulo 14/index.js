const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("click en el boton")
    console.log("Hola, estoy utilizando jQuery")
})

$(() => {
    $(".ocultar").click(() => {
        $("h1").fadeOut()
    })
})