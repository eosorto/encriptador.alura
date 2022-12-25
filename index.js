// variables

const textArea1=document.querySelector('.textA1')
const textArea2=document.querySelector('.textA2')

const imagen=document.querySelector('.img-m')

const encriptar=document.querySelector('.encriptar')
const desencriptar=document.querySelector('.desencriptar')
const copiar=document.querySelector('.btn-copiar')


//eventos de onclick


encriptar.addEventListener('click',fbiencriptar)
desencriptar.addEventListener('click',fbidesencriptar)
copiar.addEventListener('click',copiarPortapapeles)
textArea1.focus()


//funciones

function  fbiencriptar(){
  let dat=textArea1.value
  if(textArea1.value==''){
     alert('ingrese un dato')
     if(textArea2.classList.contains('mostrar')){
           mostrar()

     }else{
      return
     }
     textArea2.value=''
  }else{
    if(textArea2.classList.contains('mostrar')){
      textArea2.value=''
      var frase =textArea1.value.toLowerCase()


  //i = es para tomar mauscula y minuscula , m=toma en cuenta multiple lineas, g=toma en cuenta toda la linea de la oracion//
        var textoEncriptado=frase.replace(/e/img,"enter")
        var textoEncriptado=textoEncriptado.replace(/i/img,"imes")
        var textoEncriptado=textoEncriptado.replace(/a/img,"ai")
        var textoEncriptado=textoEncriptado.replace(/o/img,"ober")
        var textoEncriptado=textoEncriptado.replace(/u/img,"ufat")
        
        textArea2.value=textoEncriptado
     }else{
      
   mostrar()
  var frase =textArea1.value.toLowerCase()


  //i = es para tomar mauscula y minuscula , m=toma en cuenta multiple lineas, g=toma en cuenta toda la linea de la oracion//
  var textoEncriptado=frase.replace(/e/img,"enter")
  var textoEncriptado=textoEncriptado.replace(/i/img,"imes")
  var textoEncriptado=textoEncriptado.replace(/a/img,"ai")
  var textoEncriptado=textoEncriptado.replace(/o/img,"ober")
  var textoEncriptado=textoEncriptado.replace(/u/img,"ufat")
  
  textArea2.value=textoEncriptado
  
  }
  textArea1.value=''
 }
}

function  fbidesencriptar(){
  if(textArea1.value==''){
    alert('ingrese un dato')
    if(textArea2.classList.contains('mostrar')){
      mostrar()

    }else{
    return
    }
    textArea2.value=''
 }else{
  if(textArea2.classList.contains('mostrar')){
    textArea2.value=''
    var frase =textArea1.value.toLowerCase()

    var textoEncriptado=frase.replace(/enter/img,"e")
    var textoEncriptado=textoEncriptado.replace(/imes/img,'i')
    var textoEncriptado=textoEncriptado.replace(/ai/img,'a')
    var textoEncriptado=textoEncriptado.replace(/ober/img,"o")
    var textoEncriptado=textoEncriptado.replace(/ufat/img,"u")
    
  
    textArea2.value=textoEncriptado
  }else{
    mostrar()
   textArea1.value-''
  var frase =textArea1.value.toLowerCase()

  var textoEncriptado=frase.replace(/enter/img,"e")
  var textoEncriptado=textoEncriptado.replace(/imes/img,'i')
  var textoEncriptado=textoEncriptado.replace(/ai/img,'a')
  var textoEncriptado=textoEncriptado.replace(/ober/img,"o")
  var textoEncriptado=textoEncriptado.replace(/ufat/img,"u")
  

  textArea2.value=textoEncriptado
  }
  textArea1.value=''

  }
}

function mostrar(){
  

  imagen.classList.toggle('ocultar')
  textArea2.classList.toggle('mostrar')
  textArea1.focus()
 
}
function copiarPortapapeles(){

    textArea2.select();
    textArea2.setSelectionRange(0,99999);
    document.execCommand('copy')
    textArea1.value=''
    textArea2.value=''
    mostrar()
}