//banka...jautājumu kopums
const jautajumi=[
  {
    jautajums:"Kas ir galvenais Zemes pavadonis?",
    atbilde:"Mēness"
  },
  {
    jautajums:"Cik ir 2+3?",
    atbilde:"5"
  },
  {
    jautajums:"Kā sauc lielāko okeānu?",
    atbilde:"Klusais okeāns"
  }
];

//mainīgie js...HTML
const jautajumaElements=document.getElementById("jautajums");
const atbildeInput=document.getElementById("atbilde");
const iesniegtButton=document.getElementById("iesniegt");

let esosaisJautajumsIndex=0;
//funkcija, kas parāda jautājumu
function paradiJautajumu(){
  jautajumaElements.textContent=jautajumi[esosaisJautajumsIndex].jautajums
}

//funkcija, kas pārbauda atbildi
function parbauditAtbildi(){
  const lietotajaAtbilde=atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde=jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();

  if(lietotajaAtbilde===pareizaAtbilde){
    alert("Pareizi!");
  }else{
    alert("Nepareizi!");
  }
  esosaisJautajumsIndex++;
  if(esosaisJautajumsIndex<jautajumi.length){
    paradiJautajumu();
    atbildeInput.value="";
  }else{
    jautajumaElements.textContent="Spēle beigusies!";
    atbildeInput.disabled=true;
    iesniegtButton.disabled=true;
  }
}

//klausītājs, kas klauīsies, kad jāsāk strādāt
paradiJautajumu();
iesniegtButton.addEventListener("click",parbauditAtbildi);