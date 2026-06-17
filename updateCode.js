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
favoritecheck.checked = editingCard.favorite;
emergencycheck.checked = editingCard.Emergency;
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
editingCard.favorite = favoritecheck.checked;
editingCard.Emergency = emergencycheck.checked;

 if(!validitiondata1()){
  display()
   return;
}
 if(!dataUpdateValidition()){
  display()
   return;
}
localStorage.setItem("storageCards",JSON.stringify(allCards));
displaycards(allCards);
displayFavoriteCards();
displayEmergencyCards();
displaynone();
Swal.fire({
  title: "Updated!",
  icon: "success",
  text: "Contact has been updated successfully.",
  draggable: true
});};
saveupdate.addEventListener("click",savecardsafupdate);
editingCard = null;