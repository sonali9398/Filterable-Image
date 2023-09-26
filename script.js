const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//define filter cards
const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    //console.log(e.target)

    //each filter card
    filterableCards.forEach(card =>{
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
        //card.classList.add("hide")
    });
};

console.log(filterButtons, filterableCards)
//filter button to each button
filterButtons.forEach(button => button.addEventListener("click", filterCards));