const div = document.querySelectorAll("div");

div.forEach((item) => {
  item.style.outline = "2px yellow solid";
});
let imgs = ["./imgs/007.png",
            "./imgs/010.png",
            "./imgs/025.png",
            "./imgs/048.png",
            "./imgs/144.png",
            "./imgs/150.png"
        ];
let cards = document.querySelectorAll(".card");


cards.forEach((pokeCard)=>{
    pokeCard.addEventListener("click", ()=> {
        console.log(pokeCard);  
    })
//   card.style.backgroundImage = "url(" + imgs[0] + ")";
 });
