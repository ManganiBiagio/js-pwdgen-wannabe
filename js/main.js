
const inputName=document.getElementById("nome");
const inputCognome=document.getElementById("cognome");
const inputColore=document.getElementById("colore");
const outputSpan=document.getElementById("output-span");
const bottoneForm=document.getElementById("bottone-form");
const boxOutput=document.getElementById("box-output");
let counter=0;



bottoneForm.addEventListener("click",()=> GeneratorPsw());


 function GeneratorPsw(){
    
    let outputText=inputName.value+inputCognome.value+inputColore.value;
    outputSpan.innerHTML=` ${outputText}21`;
    boxOutput.style="visibility: visible";
    counter++;
    if(counter==2){
        alert("Accidenti hai parecchie cose dal tenere al sicuro");
    }


    
    
}