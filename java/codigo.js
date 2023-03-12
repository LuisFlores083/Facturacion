var conceptos = parseInt(document.getElementById('numConceptos').value);
console.debug('Inicio: ' + conceptos);

function Enviar(){
    const contentConcepto = document.getElementById('concepto');
    conceptos =  parseInt(document.getElementById('numConceptos').value) - 1;
    console.debug('Enviar: ' + conceptos);
    while (contentConcepto.firstChild) 
        contentConcepto.removeChild(contentConcepto.firstChild);
    
    for (var i = 0; i <= conceptos; i++) 
        GenerarElementos(i);
    
    document.getElementById('botonGen').style.display='none';
    document.getElementById('numConceptos').disabled = true;
    document.getElementById('botonGenUno').style.display='block';
    //document.getElementById('recuperarDatos').style.display='inline-block';
}

function GenerarElementos(id){
    const contentConcepto = document.getElementById('concepto');
    var Contenedordiv = document.createElement('div');
    Contenedordiv.setAttribute('id', 'contenedorDiv'+id);
    
    //Crear boton eliminar
    var boton = document.createElement('button');
    boton.setAttribute('id', 'btnEliminar'+id);
    boton.setAttribute('class', 'btnElminar');
    boton.setAttribute('onclick', 'Eliminar('+id+')');
    var img = document.createElement('img');
    img.setAttribute('src', 'img/letter-x.jpg');
    boton.appendChild(img);

    var contentCantidad = document.createElement('div');
    var cantidadP = document.createElement('p'); cantidadP.textContent = "Cantidad";
    var cantidadInput = document.createElement('input');
    cantidadInput.setAttribute('id', 'cantidadInput'+id);
    cantidadInput.setAttribute('placeholder', '0.00');cantidadInput.setAttribute('type', 'number');
    contentCantidad.appendChild(cantidadP);contentCantidad.appendChild(cantidadInput);

    var contentDescri = document.createElement('div');
    var descriP = document.createElement('p'); descriP.textContent = "Descripción";
    var descriInput = document.createElement('input');
    descriInput.setAttribute('id', 'descriInput'+id);
    descriInput.setAttribute('placeholder', 'Descripción');descriInput.setAttribute('type', 'text');
    contentDescri.appendChild(descriP); contentDescri.appendChild(descriInput);
    
    var contentValor = document.createElement('div');
    var valorP = document.createElement('p'); valorP.textContent = "Valor Unitario";
    var valorInput = document.createElement('input');
    valorInput.setAttribute('id', 'valorInput'+id);
    valorInput.setAttribute('placeholder', '0.00');valorInput.setAttribute('type', 'number');
    contentValor.appendChild(valorP); contentValor.appendChild(valorInput);

    var contentImporte = document.createElement('div');
    var importeP = document.createElement('p'); importeP.textContent = "Importe";
    var importeInput = document.createElement('input');
    importeInput.setAttribute('id', 'importeInput'+id);
    importeInput.setAttribute('placeholder', '0.00');importeInput.setAttribute('type', 'number');
    contentImporte.appendChild(importeP); contentImporte.appendChild(importeInput);

    Contenedordiv.appendChild(boton);
    Contenedordiv.appendChild(contentCantidad);
    Contenedordiv.appendChild(contentDescri);
    Contenedordiv.appendChild(contentValor);
    Contenedordiv.appendChild(contentImporte);
    
    contentConcepto.appendChild(Contenedordiv);
}

function GenerarUno(){
    conceptos++;
    console.debug('Generar Uno: ' + conceptos);
    GenerarElementos(conceptos);
}

function Eliminar(id){
    document.getElementById('contenedorDiv' + id).remove();
    console.debug(conceptos);
}

function RecuperarDatos(){
    console.debug('Recuperar Datos: ' + conceptos);
    var cantidad = new Array(conceptos).fill("vacío");
    var descripción = new Array(conceptos).fill("vacío");
    var unitario = new Array(conceptos).fill("vacío");
    var importe = new Array(conceptos).fill("vacío");
    var subtotal = 0;

    for (var i = 0; i <= conceptos; i++) {
        if(document.getElementById('contenedorDiv'+i) !== null){
            cantidad[i] = parseInt(document.getElementById('cantidadInput'+i).value);
            descripción[i] = document.getElementById('descriInput'+i).value;
            unitario[i] = parseInt(document.getElementById('valorInput'+i).value);
            importe[i] = parseInt(document.getElementById('importeInput'+i).value);
            subtotal += (cantidad[i]*unitario[i])+importe[i];
            //console.debug(datos[i]);
        }
        else{
            console.debug('No existe -- ' + i);
        }
    }

    var iva = subtotal - (subtotal/1.16);
    var total = subtotal+ iva;

    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('iva').innerHTML = iva;
    document.getElementById('total').innerHTML = total;

}
