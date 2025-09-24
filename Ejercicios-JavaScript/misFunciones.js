/**
 * Conversion de unidades de: metros, yardas, pies, pulgadas.
 * @method cambiarUnidades
 * @param {string } id - El id de los puntos de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los puntos de metros, yardas, pies o pulgadas.
 * @return lasUnidades
 */


function cambiarUnidades(id, Valor) {
    // Convertir a número por si viene como string
    Valor = Number(Valor);

    let metro, pulgada, pie, yarda;
    if (valor.includes(",")) {
        valor = valor.replace(",",".");
    }

    if (isNaN(Valor)) {
        alert("Se ingresó un valor incorrecto en " + id);
        metro = pulgada = pie = yarda = "";
    } else if (id === "metro") {
        metro   = Valor;
        pulgada = 39.3701  * Valor;
        pie     = 3.28084  * Valor;
        yarda   = 1.09361  * Valor;
    } else if (id === "pulgada") {
        pulgada = Valor;
        metro   = 0.0254   * Valor;
        pie     = 0.0833333* Valor;
        yarda   = 0.0277778* Valor;
    } else if (id === "yarda") {
        yarda   = Valor;
        metro   = 0.9144   * Valor;
        pie     = 3        * Valor;
        pulgada = 36       * Valor;
    } else if (id === "pie") {
        pie     = Valor;
        metro   = 0.3048   * Valor;
        yarda   = 0.333333 * Valor;
        pulgada = 12       * Valor;
    }

    // Actualizar los campos del formulario
    document.lasUnidades.unid_metro.value   = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value     = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value   = Math.round(yarda*100)/100;
}


function convertirGR(id) {
    let grad, rad;

    if (id === "grados") {
        grad = Number(document.getElementById("grados").value);
        rad  = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad  = Number(document.getElementById("radianes").value);
        grad = (rad * 180) / Math.PI;
    }

    document.getElementById("grados").value   = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    const div = document.getElementById("valorMO");
    if (!div) {
        console.error('Elemento con id "valorMO" no encontrado');
        return;
    }

    if (valorMO === "val_mostrar") {
        div.style.display = "block";
    } else if (valorMO === "val_ocultar") {
        div.style.display = "none";
    }
}

function calcularSuma() {
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

function calcularResta() {
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function calcularMul() {
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].innerHTML = num1*num2;
}

function calcularDiv() {
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].innerHTML = num1/num2;
}