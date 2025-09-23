/**
 * Conversion de unidades de: metros, yardas, pies, pulgadas.
 * @method cambiarUnidades
 * @param {string } id - El id de los puntos de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los puntos de metros, yardas, pies o pulgadas.
 * @return lasUnidades
 */


function cambiarUnidades (id, Valor){
    if (isNaN(Valor)) {
        alert("Se ingreso un valor incorrecto");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id == "metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*Valor;
        document.lasUnidades.unid_pie.value = 3.28084*Valor;
        document.lasUnidades.unid_yarda.value = 1.09361*Valor;
    }else if(id == "pulgada"){
        document.lasUnidades.unid_metro.value = 0.0254*Valor;
        document.lasUnidades.unid_pie.value = 0.0833333*Valor;
        document.lasUnidades.unid_yarda.value = 0.0277778*Valor;
    }else if(id == "yarda"){
        document.lasUnidades.unid_metro.value = 0.9144*Valor;
        document.lasUnidades.unid_pie.value = 3*Valor;
        document.lasUnidades.unid_pulgada.value = 36*Valor;
    }else if(id == "pie"){
        document.lasUnidades.unid_metro.value = 0.3047996952*Valor;
        document.lasUnidades.unid_yarda.value = 0.333333*Valor;
        document.lasUnidades.unid_pulgada.value = 12*Valor;
    }
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

    document.getElementsByName("sum_total")[0].value = num1 + num2;
}

function calcularResta() {
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].value = num1 - num2;
}

function calcularMul() {
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].value = num1*num2;
}

function calcularDiv() {
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].value = num1/num2;
}