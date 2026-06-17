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
// جزء اخفاء الفورم والبللور
let canclebutton = document.getElementById("cancle-button")
let buttonX = document.getElementById("X")
 function displaynone(){
  form.style.display= "none";
  bllur.style.display= "none";
  clearinputapAddcontact()
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
let favoritecheck = document.getElementById("favoritecheck")
let emergencycheck = document.getElementById("emergencycheck")
// search
let search = document.getElementById("search")
//
 let allCards = []; 
 if(localStorage.getItem("storageCards")){
   allCards = JSON.parse(localStorage.getItem("storageCards"))
 displaycards(allCards);
 displayFavoriteCards();
 displayEmergencyCards()
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
  group:valuegroup.value,
  favorite:favoritecheck.checked,
  Emergency:emergencycheck.checked,
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
clearinputapAddcontact()
return true;
}
function allevents(){
 let success = createContact()
if(success){
   displaycards(allCards);
   displayFavoriteCards();
   displayEmergencyCards();
}}
function clearinputapAddcontact(){
  viewimge.src = "imeg/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
fileimag.value = "";
valuename.value = "";
valuephone.value = "";
valueEmail.value = "";
valueAddres.value = "";
valuegroup.value = "";
favoritecheck.checked = false;
emergencycheck.checked = false;
} 
displaycards(allCards);
saveContact.addEventListener("click",allevents)

let iconDelete = document.getElementById("iconDelete");
function deletecards(id){
allCards = allCards.filter(function (card){
  return card.id !== id;
})
localStorage.setItem("storageCards",JSON.stringify(allCards));
displaycards(allCards);
displayFavoriteCards();
displayEmergencyCards();
}
  function callContact(phone){    
  window.location.href = `tel:${phone}`;
}
function sendEmail(email){
  window.location.href = `mailto:${email}`;
}