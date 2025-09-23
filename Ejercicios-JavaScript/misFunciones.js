/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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