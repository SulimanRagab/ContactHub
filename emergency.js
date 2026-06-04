function emering(id){
  let emercard = allCards.find(function(card){
    return card.id === id;
  });
  emercard.Emergency = !emercard.Emergency;
  localStorage.setItem(
    "storageCards",
    JSON.stringify(allCards)
  );
  displaycards(allCards);
  displayEmergencyCards();
}
  function displayEmergencyCards(){
let emerMarkup = "";
let emerNumper = "";
let colors = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#EF4444",
  "#06B6D4",
];
 let emergencyCards = allCards.filter(function(card){
      return card.Emergency === true;
    })    
  if(emergencyCards.length === 0){
let htmlemermarkupmessage = `  <div id="nofav" style="position: relative; width: 400px; height: 100px; background-color: #ffffff;">
              <h1
                style="font-size:medium; color: #818994e4; font-weight: 500; position: absolute; top: 50%; left: 50%; transform: translate(-90%, -50%);">
                No favorites yet</h1>
            </div>`;
document.getElementById("upemer").innerHTML = htmlemermarkupmessage;
document.getElementById("emergencyNumber").innerHTML = 0;
return;
} 

for(let i =0; i < emergencyCards.length ;i++){
let imagmarkup = "";
 if(emergencyCards[i].imag){
  imagmarkup = `<img src="${emergencyCards[i].imag}" alt="">`;
 }else{
  let color = colors[i % colors.length];
  imagmarkup = `<div class="elseimage"  style="background-color:${color}">
  ${emergencyCards[i].name ? emergencyCards[i].name[0] :"?" }</div>`;
 }

 emerMarkup += `<div class="cardshortcutemer" id="emer"> 
         <div class="x-2">
           <div class="phototextfavo">
            ${imagmarkup}
           </div>
           <div class="text>
             <h4 style="font-size: large;font-weight: 400;">${emergencyCards[i].name}<h4> 
             <p style="font-size: medium;font-weight: 400;">${emergencyCards[i].phonne}</p>
           </div> 
         </div> 
         <i onclick="callContact('${emergencyCards[i].phonne}')" id="iconfone" class="fa-solid fa-phone"></i>
           </div>`;
           emerNumper = emergencyCards.length;
   }       
 document.getElementById("upemer").innerHTML =  emerMarkup;
 document.getElementById("emergencyNumber").innerHTML =  emerNumper;
 localStorage.setItem("storageCards",JSON.stringify(allCards));
}