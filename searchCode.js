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
 ||
 card.addrs.toLowerCase().includes(searchValue)
 ; 
})
displaycards(searchallcard)
}