
 function displaycards(Cards){
   if(Cards.length === 0){
let htmlmarkupmessage = `<div class="message">
  <i class="fa-solid fa-address-book"></i>
  <p class="nocontacts">No contacts found <br> <span class="addContact">Click "Add Contact" to get started</span></p>
  <button onclick="display(); editButton();" class="addContactButton" <span><i class="fa-solid fa-plus"></i></span>
    Add Contact
  </button>
</div>`;
document.getElementById("upcard").innerHTML = htmlmarkupmessage;
document.getElementById("cardsNumber").innerHTML = 0;
document.getElementById("numbercard2").innerHTML = 0;
return;
} 
   let htmlMarkupCards = "";
   let numbercards = "";
   let colors = [
  "#3b83f6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#EF4444",
  "#06B6D4",
];
let colorsGroup = [
  "#3b83f674",
  "#10b98176",
  "#f59f0b70",
  "#ec489a93",
  "#8a5cf680",
  "#ef444488",
  "#06b5d483",
];
for(let i = 0; i < Cards.length; i++){
  let color = colors[i % colors.length];
 let imagmarkup = "";
 if(Cards[i].imag){
  imagmarkup = `<img src="${Cards[i].imag}" alt="">`;
 }else{
imagmarkup = `
  <div class="elseimage" style="background-color:${color}">
        ${Cards[i].name ? Cards[i].name[0].toUpperCase() : "?"}
</div>`;
 }
  let colorGroup = colorsGroup[i % colorsGroup.length];
  htmlMarkupCards += `
  <div class="card ms-3 col-md-5">
  <div class="allphotoandtext">
    <div class="imag">
      ${imagmarkup}
      <div><i ${Cards[i].favorite ?'class="fa-solid fa-star stylestar"':"n"}></i></div>
      <div><i ${Cards[i].Emergency ?'class="fa-solid fa-heart-pulse styleemer"':"n"}></i></div>
    </div>
    <div class="tx">
      <h4 id="neem" style=" color: #000000; font-size: 20px;font-weight: 500;margin-left: 10px">${Cards[i].name}</h4>
          <div class="d-flex">
            <i onclick="callContact('${Cards[i].phonne}')" class="fa-solid fa-phone"></i>
            <p style="color: #121315; font-size: medium;font-weight: 500;margin-left: 10px;">${Cards[i].phonne}
            </p>
          </div>
    </div>
  </div>
  <div>
    <div class="emaile">
      <i  class="fa-emaile fa-solid fa-envelope"></i>
      <p id="eme" style="color: #121315;" class="txp">${Cards[i].email}</p>
    </div>
    <div class="Addrs">
      <i id="fa-loction" class="fa-solid fa-location-dot"></i>
      <p id="loc" style="color: #121315;" class="txp">${Cards[i].addrs}</p>
    </div>
  </div>
  <div style="display: flex; gap:5px;">
    <p class="Group" style="background-color:${colorGroup}">${Cards[i].group}</p>
   ${Cards[i].Emergency ? '<p class="Group" style="background-color: #eb5b81d4; color: #ffffff; font-weight: 500;">Emergency</p>':" "} 
  </div>
  <div id="endcard">
    <div class="icons container">
      <div>
        <i onclick="callContact('${Cards[i].phonne}')" class="fa-solid fa-phone"></i>
        <i onclick="sendEmail('${Cards[i].email}')" class="fa-solid fa-envelope"></i>
      </div>
      <div class="icons-2">
        <i  onclick="staring(${Cards[i].id})"
class="${Cards[i].favorite ? "starsolid fa-solid fa-star text-warning":"fa-regular fa-star text-secondary"}" 
style=" border-radius: 5px; padding: 8px 8px;cursor: pointer;width: fit-content;transition: all 0.3s ease;"></i>
        <i onclick="emering(${Cards[i].id})" class="${Cards[i].Emergency ? "fa-solid fa-heart-pulse":"fa-regular fa-heart text-secondary"}"
         style=" border-radius: 5px; padding: 8px 8px;cursor: pointer;width: fit-content;transition: all 0.3s ease;"></i>
        <i onclick="cardsUpdate(${Cards[i].id})" class="fa-solid fa-pen"></i>
        <i onclick="validdelete(${Cards[i].id} ,'${Cards[i].name}')" class="fa-solid fa-trash"></i>
      </div>
    </div>
  </div>

</div>
`;
 numbercards = Cards.length
}
document.getElementById("upcard").innerHTML = htmlMarkupCards;
document.getElementById("cardsNumber").innerHTML =  numbercards;
document.getElementById("numbercard2").innerHTML =  numbercards;
}
