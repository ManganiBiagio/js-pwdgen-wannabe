
const inputName=document.getElementById("nome");
const inputCognome=document.getElementById("cognome");
const inputColore=document.getElementById("colore");
const outputSpan=document.getElementById("output-span");
const bottoneForm=document.getElementById("bottone-form");




bottoneForm.addEventListener("click",()=> GeneratorPsw());

 function GeneratorPsw(){
    let outputText=inputName.value+inputCognome.value+inputColore.value;
    console.log(outputSpan);
    outputSpan.innerHTML=` ${outputText}21`;
    
    
}