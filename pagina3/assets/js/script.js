const botonIngresar = document.getElementById("botonIngresar");

botonIngresar.addEventListener("click",
    function() {
        let select1 = document.getElementById("select1").value;
        let select2 = document.getElementById("select2").value;
        let select3 = document.getElementById("select3").value;

        if(select1 == "9" & select2 == "1" & select3 == "1") {
            let texto = document.getElementById("texto");
            texto.innerHTML = "Password 1 correcto.";
            texto.style.color = "Green"
        } else if (select1 == "7" & select2 == "1" & select3 == "4") {
            let texto = document.getElementById("texto");
            texto.innerHTML = "Password 2 correcto.";
            texto.style.color = "Green"
        } else {
            let texto = document.getElementById("texto");
            texto.innerHTML = "Password incorrecto.";
            texto.style.color = "Red"
        }
    }
)