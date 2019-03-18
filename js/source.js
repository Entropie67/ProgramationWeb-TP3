

nombre1 = Math.ceil(90 * Math.random()+10);
nombre2 = Math.ceil(90 * Math.random()+10);
var operation=document.getElementById("operation");
operation.innerHTML= nombre1;
operation.innerHTML+= "<br/>";
operation.innerHTML+= nombre2;


function f() {
    alert('cliqué');
    if(reponse===nombre1){
        alert('bravo');
    }
    else{
        alert("dommage");
    }
}
var input=document.getElementById('input');
var output=document.querySelector('#output');
var validation= document.getElementById("validation");
reponse = input.value;

output.innerText+=input.value;
validation.addEventListener("click",f);
