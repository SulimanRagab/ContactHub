let addContact = document.getElementById("addContact")
let form = document.getElementById("form")
let bllur = document.getElementById("blur")
function display(){
  form.style.display= "block";
  bllur.style.display= "block";
}
addContact.addEventListener("click",display)
bllur.addEventListener("click",display)
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
let valuename = document.getElementById("name")
let valuephone = document.getElementById("phone")
let valueEmail = document.getElementById("email")
let valueAddres = document.getElementById("addres")
let valuegroup = document.getElementById("group")

 let allCards = [];
 if(localStorage.getItem("storageCards")){
   allCards = JSON.parse(localStorage.getItem("storageCards"))
 displaycards()
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
  imag:fileimag.files[0] ? viewimge.src : "",  
  name:valuename.value,
  phonne:valuephone.value,
  email:valueEmail.value,
  addrs:valueAddres.value,
  group:valuegroup.value
 };
 if(!validitiondata1()){
  display()
  return;
}
if(!validitiondata2()){
  display()
  return;
 }
 else{displaynone();
  Swal.fire({
  title: "Added!",
  icon: "success",
  draggable: true
});
}

clearinputapAddcontact()
 allCards.push(newcard);
localStorage.setItem("storageCards",JSON.stringify(allCards));
}
function clearinputapAddcontact(){
  viewimge.src = "imeg/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";
fileimag.value = "";
valuename.value = "";
valuephone.value = "";
valueEmail.value = "";
valueAddres.value = "";
valuegroup.value = "";
}
  function allevents(){
createContact();
displaycards();
}
saveContact.addEventListener("click",allevents)
 function displaycards(){ 
   let htmlMarkupCards = "";
   let numbercards = "";
for(let i = 0; i < allCards.length; i++){
 let imagmarkup = "";
 if(allCards[i].imag){
  imagmarkup = `<img src="${allCards[i].imag}" alt="">`;
 }else{
  imagmarkup = `<div class="elseimage bg-black">${allCards[i].name ? allCards[i].name[0] :"?" }</div>`;
 }
  htmlMarkupCards += `
  <div class="card ms-3 col-md-5">
  <div class="d-flex">
    <div class="icts">
      ${imagmarkup}
    </div>
    <div class="tx">
      <h4 id="neem" style=" color: #000000; font-size: 20px;font-weight: 500;margin-left: 10px">${allCards[i].name}<h4>
          <div class="d-flex">
            <i id="er" class="fa-solid fa-phone"></i>
            <p id="num" style="color: #657186; font-size: medium;font-weight: 500;margin-left: 10px;">${allCards[i].phonne}
            <p>
          </div>
    </div>
  </div>
  <div>
    <div class="emaile">
      <i id="fa-emaile" class="fa-solid fa-envelope"></i>
      <p id="eme" style="color: #657186;" class="txp">${allCards[i].email}</p>
    </div>
    <div class="Addrs">
      <i id="fa-loction" class="fa-solid fa-location-dot"></i>
      <p id="loc" style="color: #657186;" class="txp">${allCards[i].addrs}</p>
    </div>
  </div>
  <div>
    <p class="Group">${allCards[i].group}</p>
  </div>
  <div id="endcard">
    <div class="icons container">
      <div>
        <i id="fa-dd" class="fa-solid fa-phone" style="color: #63E6BE;"></i>
        <i id="fa-dd" class="fa-solid fa-envelope" style="color: #6e36f2;"></i>
      </div>
      <div class="icons-2">
        <i id="fa-dd" class=" fa-solid fa-star" style="color: #657186;"></i>
        <i id="fa-dd" class="fa-solid fa-heart-pulse" style="color: #657186;"></i>
        <i id="fa-dd" class="fa-solid fa-pen" style="color: #657186;"></i>
        <i id="fa-dd" class="fa-solid fa-trash" style="color: #515d70;"></i>
      </div>
    </div>
  </div>

</div>
`;
 numbercards = allCards.length
}
document.getElementById("upcard").innerHTML = htmlMarkupCards;
document.getElementById("cardsNumber").innerHTML =  numbercards;
document.getElementById("numbercard2").innerHTML =  numbercards;
}

