const botonVerificar = document.getElementById("btnVerificar");

botonVerificar.addEventListener("click",
    function() {
        let input1 = Number(document.getElementById("input1").value);
        let input2 = Number(document.getElementById("input2").value);
        let input3 = Number(document.getElementById("input3").value);
        let total = input1 + input2 + input3;
        if (total <= 10) {
            let text = document.getElementById("texto");
            text.innerHTML = "Llevas " + total + " stickers."
            texto.style.color = "green";
        } else {
            let texto = document.getElementById("texto");
            texto.style.color = "red";
            texto.innerHTML = "Llevas demasiados stickers.";
        }
    }
)