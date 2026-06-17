
function validitiondata1(){
  if(valuename.value.trim() === ""){
 Swal.fire({icon: "error",
  title: "Missing Name",
  text: "Please enter a name for the contact!",});
  return false;
}if(valuephone.value.trim() === ""){
Swal.fire({icon:"error",
  title:"Missing Phone",
  text:"Please enter a phone number!",});
  return false;
}if(!regex.test(valuephone.value)){
  Swal.fire({icon:"error",
  title:"Invalid Phone",
  text:"Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)",});
  return false;
}if(!regexemail.test(valueEmail.value)){
  Swal.fire({icon:"error",
  title:"Invalid Emaile",
  text:"Please enter a valid email address"});
  return false;
}return true;
 }
function validitiondata2(){
 let isphone = false;
 let isemaile = false;
  for(let i = 0; i < allCards.length; i++){
 if(allCards[i].phonne ===  valuephone.value){
  isphone = true;
 }if(allCards[i].email.trim() === valueEmail.value.trim()){
    isemaile = true;
  }}
  if(isphone){Swal.fire({icon:"error",
  title:"الرقم موجود بالفعل",
  text:"Please enter a phone number!",});
  return false;
}
  if(isemaile){
    Swal.fire({icon:"error",
  title:"الأيميل موجود بالفعل",
  text:"Please enter a different email address !",});
  return false;
  }
  return true;
}
//validUbdate
function dataUpdateValidition(){
 let isphone = false;
 let isemaile = false;
  for(let i = 0; i < allCards.length; i++){
 
 if(allCards[i].id !== editingCard.id &&
  allCards[i].phonne === valuephone.value){
  isphone = true;
 }if(allCards[i].id !== editingCard.id &&
  allCards[i].email === valueEmail.value){
    isemaile = true;
  }}
  if(isphone){Swal.fire({icon:"error",
  title:"الرقم موجود بالفعل",
  text:"Please enter a phone number!",});
  return false;
}
  if(isemaile){
    Swal.fire({icon:"error",
  title:"الأيميل موجود بالفعل",
  text:"Please enter a different email address !",});
  return false;
  }
  return true;
}
//validDelete
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