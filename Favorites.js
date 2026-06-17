function staring(id){
  let favcard = allCards.find(function(card){
    return card.id === id;
  });
  favcard.favorite = !favcard.favorite;
  localStorage.setItem(
    "storageCards",
    JSON.stringify(allCards)
  );
  displaycards(allCards);
  displayFavoriteCards();
}
  function displayFavoriteCards(){
let starMarkup = "";
let starNumper = "";
let colors = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#EF4444",
  "#06B6D4",
];
    let favoriteCards = allCards.filter(function(card){
      return card.favorite === true;
    })    
  if(favoriteCards.length === 0){
let htmlstarmarkupmessage = `  <div id="nofav" style="position: relative; width: 400px; height: 100px; background-color: #ffffff;">
              <h1
                style="font-size:medium; color: #818994e4; font-weight: 500; position: absolute; top: 50%; left: 50%; transform: translate(-80%, -50%);">
                No favorites yet</h1>
            </div>`;
document.getElementById("upstar").innerHTML = htmlstarmarkupmessage;
document.getElementById("favoritesNumber").innerHTML = 0;
return;
   
}
  for(let i =0; i < favoriteCards.length ;i++){
let imagmarkup = "";
 if(favoriteCards[i].imag){
  imagmarkup = `<img src="${favoriteCards[i].imag}" alt="">`;
 }else{
  let color = colors[i % colors.length];
  imagmarkup = `<div class="elseimage"  style="background-color:${color}">
  ${favoriteCards[i].name ? favoriteCards[i].name[0] :"?" }</div>`;
 }

 starMarkup += `<div class="cardshortcut" id="star"> 
         <div class="x-2">
           <div class="phototextfavo">
            ${imagmarkup}
           </div>
           <div class="text>
             <h4 style="font-size: large;font-weight: 400;">${favoriteCards[i].name}<h4> 
             <p style="font-size: medium;font-weight: 400;">${favoriteCards[i].phonne}</p>
           </div> 
         </div> 
         <i onclick="callContact('${favoriteCards[i].phonne}')" id="iconfone" class="fa-solid fa-phone"></i>
           </div>`;
           starNumper = favoriteCards.length;
   }       
 document.getElementById("upstar").innerHTML =  starMarkup;
 document.getElementById("favoritesNumber").innerHTML =  starNumper;
 localStorage.setItem("storageCards",JSON.stringify(allCards));
} 