
const inputName=document.getElementById("nome");
const inputCognome=document.getElementById("cognome");
const inputColore=document.getElementById("colore");
const outputSpan=document.getElementById("output-span");
const bottoneForm=document.getElementById("bottone-form");
const boxOutput=document.getElementById("box-output");




bottoneForm.addEventListener("click",()=> GeneratorPsw());


 function GeneratorPsw(){
    let outputText=inputName.value+inputCognome.value+inputColore.value;
    outputSpan.innerHTML=` ${outputText}21`;
    boxOutput.style="visibility: visible";


    
    
}