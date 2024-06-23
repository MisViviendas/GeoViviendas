//function btnRegistrarse(){
    //window.location.assign('formRegistro.html'); //redirige pero no carga
    //console.log("Redirigiendo a formRegistro.html");
//    window.open("http://www.google.com/","_self");
    //window.open("formRegistro.html","_self");
//}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var width = sidebar.style.width;
    sidebar.style.width = width === "250px" ? "0" : "250px"; // Cambia el ancho para mostrar/ocultar
}

// Opcional: Cerrar la barra lateral al hacer clic fuera de ella
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    var isClickInsideSidebar = sidebar.contains(event.target);
    var isSidebarOpen = sidebar.style.width === "250px";

    if (!isClickInsideSidebar && isSidebarOpen) {
        toggleSidebar(); // Cierra la barra lateral si está abierta y el clic fue fuera
    }
}, true);