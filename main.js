let addContact = document.getElementById("addContact")
let form = document.getElementById("form")
let bllur = document.getElementById("blur")
function display(){ 
  form.style.display= "block";
  bllur.style.display= "block";
}
function editButton(){
 saveContact.style.display = "block"; 
 saveupdate.style.display = "none";
}
function editButtonupdate(){
 saveContact.style.display = "none"; 
 saveupdate.style.display = "block";
}
addContact.addEventListener("click",display)
addContact.addEventListener("click",editButton)
// جزء اخفاء الفورم والبلور
let canclebutton = document.getElementById("cancle-button")
let buttonX = document.getElementById("X")
 function displaynone(){
  form.style.display= "none";
  bllur.style.display= "none";
}
buttonX.addEventListener("click",displaynone)
canclebutton.addEventListener("click",displaynone)
bllur.addEventListener("click",displaynone)
// ! جزء الصوره
let openphoto = document.getElementById("openphoto")
let viewimge = document.getElementById("viewimge")
let fileimag = document.getElementById("fileimag")
openphoto.addEventListener("click",function () {
fileimag.click()
})
viewimge.addEventListener("click",function () {
fileimag.click()
})
fileimag.addEventListener("change",function () {
  let file = fileimag.files[0];
  if (file) { 
    let reader = new FileReader();
    reader.onload = function () {
      viewimge.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});
// ! \\
let saveContact = document.getElementById("saveContact")
let saveupdate = document.getElementById("saveupdate")
let valuename = document.getElementById("name")
let valuephone = document.getElementById("phone")
let valueEmail = document.getElementById("email")
let valueAddres = document.getElementById("addres")
let valuegroup = document.getElementById("group")
// search
let search = document.getElementById("search")
//
 let allCards = [];
 if(localStorage.getItem("storageCards")){
   allCards = JSON.parse(localStorage.getItem("storageCards"))
 displaycards(allCards);
 } let regex = /^01[0125]\d{8}$/;
function validatephone() {
   if(regex.test(valuephone.value)) {
      phoneMessage.innerHTML ="";
   } else {
      phoneMessage.innerHTML = "Please enter a valid Egyptian phone number !";
   }
}valuephone.addEventListener("input",validatephone);
let regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i;
function validateemaile(){
if(regexemail.test(valueEmail.value)){
  emailMessage.innerHTML ="";
} else{
  emailMessage.innerHTML = "Please enter a valid email address!";
}
}valueEmail.addEventListener("input",validateemaile);

 function createContact(){
  let newcard = {
  id:Date.now(),
  imag:fileimag.files[0] ? viewimge.src : "",  
  name:valuename.value,
  phonne:valuephone.value,
  email:valueEmail.value,
  addrs:valueAddres.value,
  group:valuegroup.value
 };
 if(!validitiondata1()){
  display()
   return false;
}
if(!validitiondata2()){
  display()
   return false;
 }

 allCards.push(newcard);
localStorage.setItem("storageCards",JSON.stringify(allCards));
displaynone();
Swal.fire({
  title: "Added!",
  icon: "success",
  draggable: true
});
return true;
}
function allevents(){
 let success = createContact()
if(success){
   displaycards(allCards);
}}
function clearinputapAddcontact(){
  viewimge.src = "imeg/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
fileimag.value = "";
valuename.value = "";
valuephone.value = "";
valueEmail.value = "";
valueAddres.value = "";
valuegroup.value = "";
} 
displaycards(allCards);
saveContact.addEventListener("click",allevents)
 function displaycards(Cards){ 
   let htmlMarkupCards = "";
   let numbercards = "";
for(let i = 0; i < Cards.length; i++){
 let imagmarkup = "";
 if(Cards[i].imag){
  imagmarkup = `<img src="${Cards[i].imag}" alt="">`;
 }else{
  imagmarkup = `<div class="elseimage bg-black">${Cards[i].name ? Cards[i].name[0] :"?" }</div>`;
 }
  htmlMarkupCards += `
  <div class="card ms-3 col-md-5">
  <div class="d-flex">
    <div class="icts">
      ${imagmarkup}
    </div>
    <div class="tx">
      <h4 id="neem" style=" color: #000000; font-size: 20px;font-weight: 500;margin-left: 10px">${Cards[i].name}</h4>
          <div class="d-flex">
            <i id="er" class="fa-solid fa-phone"></i>
            <p id="num" style="color: #657186; font-size: medium;font-weight: 500;margin-left: 10px;">${Cards[i].phonne}
            </p>
          </div>
    </div>
  </div>
  <div>
    <div class="emaile">
      <i id="fa-emaile" class="fa-solid fa-envelope"></i>
      <p id="eme" style="color: #657186;" class="txp">${Cards[i].email}</p>
    </div>
    <div class="Addrs">
      <i id="fa-loction" class="fa-solid fa-location-dot"></i>
      <p id="loc" style="color: #657186;" class="txp">${Cards[i].addrs}</p>
    </div>
  </div>
  <div>
    <p class="Group">${Cards[i].group}</p>
  </div>
  <div id="endcard">
    <div class="icons container">
      <div>
        <i id="fa-dd" class="fa-solid fa-phone" style="color: #63E6BE;"></i>
        <i id="fa-dd" class="fa-solid fa-envelope" style="color: #6e36f2;"></i>
      </div>
      <div class="icons-2">
        <i class=" fa-solid fa-star" style="color: #657186;"></i>
        <i class="fa-solid fa-heart-pulse" style="color: #657186;"></i>
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
let iconDelete = document.getElementById("iconDelete");
function deletecards(id){
allCards = allCards.filter(function (card){
  return card.id !== id;
})
localStorage.setItem("storageCards",JSON.stringify(allCards));
displaycards(allCards);
}
function validdelete(id,name){
  Swal.fire({
  title: "Delete Contact?",
  text: `Are you sure you want to delete "${name}" ? This action cannot be undone.`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#3085d6",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed){
    deletecards(id);
  Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success",
  }); };
  
});
}
let editingCard;
function cardsUpdate(id){  
editingCard = allCards.find(function (card){
  return card.id === id;
})
 if(!editingCard){
    return;
  }
if(editingCard.imag){
viewimge.src = editingCard.imag; 
}else{
viewimge.src = "imeg/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
}
valuename.value =  editingCard.name;
valuephone.value = editingCard.phonne;
valueEmail.value = editingCard.email;
valueAddres.value= editingCard.addrs;
valuegroup.value = editingCard.group;
display()
editButtonupdate()
}
function savecardsafupdate(){
   if(!editingCard){
    return;
  }
  
  if(fileimag.files[0]){
  editingCard.imag = viewimge.src;  
  }
editingCard.name = valuename.value; 
editingCard.phonne = valuephone.value;
editingCard.email = valueEmail.value;
editingCard.addrs = valueAddres.value;
editingCard.group = valuegroup.value;
 if(!validitiondata1()){
  display()
   return;
}
 if(!dataUpdateValidition()){
  display()
   return;
}
localStorage.setItem("storageCards",JSON.stringify(allCards));
displaycards(allCards);;
clearinputapAddcontact();
displaynone();
Swal.fire({
  title: "Updated!",
  icon: "success",
  text: "Contact has been updated successfully.",
  draggable: true
});};
saveupdate.addEventListener("click",savecardsafupdate);
editingCard = null;

//searchcard
search.addEventListener("input",searchcard)
function searchcard(){
let searchValue = search.value.toLowerCase().trim();
let searchallcard = allCards.filter(function (card){
 return card.name.toLowerCase().includes(searchValue)
 ||
 card.email.toLowerCase().includes(searchValue)
 ||
 card.phonne.includes(searchValue)
 ||
 card.group.toLowerCase().includes(searchValue)
 ; 
})
displaycards(searchallcard)
}