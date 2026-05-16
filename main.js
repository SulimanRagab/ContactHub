let addButton = document.getElementById("addButton")
let form = document.getElementById("form")
let bllur = document.getElementById("blur")
function display(){
  form.style.display= "block";
  bllur.style.display= "block";
}
addButton.addEventListener("click",display)
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
let defultphoto = document.getElementById("defultphoto")
let fileimag = document.getElementById("fileimag")
openphoto.addEventListener("click",function () {
fileimag.click()
})
viewimge.addEventListener("click",function () {
fileimag.click()
})
defultphoto.addEventListener("click",function () {
fileimag.click()
})
viewimge.style.display = "none"
fileimag.addEventListener("change",function () {
  let file = fileimag.files[0];
  if (file) { 
    viewimge.style.display = "block"
    defultphoto.style.display = "none"
    let reader = new FileReader();
    reader.onload = function () {
      viewimge.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});
// ! \\
let addContact = document.getElementById("addContact")
let valuename = document.getElementById("name")
let valuephone = document.getElementById("phone")
let valueEmail = document.getElementById("email")
let valueAddres = document.getElementById("addres")
let valuegroup = document.getElementById("group")
addContact.addEventListener("click",displaynone)
 let allCards = [];
 if(localStorage.getItem("storageCards")){
   allCards = JSON.parse(localStorage.getItem("storageCards"))
 displaycards()
 }

 function createContact(){
if(valuename.value.trim() === ""){
 Swal.fire({icon: "error",
  title: "Missing Name",
  text: "Please enter a name for the contact!",});
  return;
}if(valuephone.value.trim() === ""){
Swal.fire({icon:"error",
  title:"Missing Phone",
  text:"Please enter a phone number!",});
  return;
}else{
Swal.fire({
  title: "Added!",
  icon: "success",
  draggable: true
});
 }
  let newcard = {
  imag:fileimag.files[0] ? viewimge.src : "",  
  name:valuename.value,
  phonne:valuephone.value,
  email:valueEmail.value,
  addrs:valueAddres.value,
  group:valuegroup.value
 };
 allCards.push(newcard);
console.log(allCards);
localStorage.setItem("storageCards",JSON.stringify(allCards));
 }

  function allevents(){
  createContact();
  displaycards();
 }
addContact.addEventListener("click",allevents)
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
