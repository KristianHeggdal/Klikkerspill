let totalmoney = 0
var a1=1
let a2=0
let a3=0
let kioskNavn = "kiosk "
let klesNavn = "Klesbutikk "
let itNavn = "IT firma "
let fotballNavn = "Fotballstadion "
let konsulentNavn = "Konsulentfirma "
let bankNavn = "Bank "
let cryptoNavn = "Cryptoscam "
let oljeNavn = "Oljefelt "
let n1 = 1
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
let n6 = 0
let n7 = 0
let n8 = 0



updateView();
function updateView(){
  document.getElementById("app").innerHTML = /*HTML*/
  `
  <div id="app" class="container">
  <div class="main">
    <div class="foretak">
    <button onclick="addKiosk()">${kioskNavn + n1}</button>
    <button onclick="addKlesbutikk()">${klesNavn + n2}</button>
    <button onclick="additFirma()">${itNavn + n3}</button>
    <button onclick="addFotballstadion()">${fotballNavn + n4}</button>
    </div>
    <div class="foretak">
    <button onclick="addKonsulentFirma()()">${konsulentNavn + n5}</button>
    <button onclick="addBank()">${bankNavn + n6}</button>
    <button onclick="addBitcoinMiner()">${cryptoNavn + n7}</button>
    <button onclick="addOljefelt()">${oljeNavn + n8}</button>
    </div>
    <div>Bank account</div>
    <div id="totalMoney">${totalmoney}</div>
    
    <div class="buttons">
    <button id="upgrKiosk" onclick="upgradeKiosk()"><img style= "width:20px;" src="img/last ned (1).png">kiosk</button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    
    </div>
    </div>
    </div>


    ` 
 ;} 

 function addKiosk(){
   totalmoney = totalmoney += a1;
  
   updateView();
 }
 function addKlesbutikk(){
   totalmoney += 5;
   updateView();
 }
 function additFirma(){
   totalmoney += 10;
   updateView();
 }
 function addFotballstadion(){
   totalmoney += 100;
   updateView();
 }
 function addKonsulentFirma(){
   totalmoney += 500;
   updateView();
 }
 function addBank(){
   totalmoney += 1000;
   updateView();
 }
 function addBitcoinMiner(){
   totalmoney += 5000;
   updateView();
 }
 function addOljefelt(){
   totalmoney += 10000;
   updateView();
 }

 function upgradeKiosk(){
if (totalmoney>=10 && a1===1){
       a1=2; 
       totalmoney=totalmoney-10;
      n1++
      
} else if (a1===2 && totalmoney >=100){
  a1=10;
  totalmoney=totalmoney-100;
  n1++
}
updateView();
 }