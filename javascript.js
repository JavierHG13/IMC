var altura, peso, resultado, Estado, cajaIMC, CajaEstado;

//cajaIMC = document.getElementById("IMC").value
//CajaEstado = document.getElementById("Estado").value

function CalcularIMC()
{
    altura = parseFloat(document.getElementById("Altura").value)
    peso = parseFloat(document.getElementById("Peso").value)

    resultado = peso / (altura * altura)
    
    if (resultado < 18.5)
    {
        Estado = " Bajo";
    }
    else if (resultado <= 24.9)
    {
         Estado = " Normal";
    }
    else if (resultado <= 29.9)
    {
        Estado = " Sobrepeso";
    }
    else
    {
        Estado = " Obeso";
    }

    IMC.value=resultado
    Estado_IMC.value=Estado
}