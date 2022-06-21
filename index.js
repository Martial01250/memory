const div = document.querySelectorAll("div");
let clickCountPoke = 0 ;

let scor = 0;

score.textContent = scor ;

// div.forEach((item) => {
//   item.style.outline = "2px yellow solid";
// });
let imgs = ["./imgs/007.png",
            "./imgs/010.png",
            "./imgs/025.png",
            "./imgs/048.png",
            "./imgs/144.png",
            "./imgs/150.png"
        ];

let imgsDouble = imgs;

let imgFinal = imgsDouble.concat(imgs);

console.log(imgFinal);

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
    return inputArray ;
};

let imgRandom = shuffleArray(imgFinal);

console.log(imgRandom);

let cards = document.querySelectorAll(".card");

let card1;
let card2;
let cardDiv1;
let cardDiv2;



cardOk = [];

cards.forEach((pokeCard,index)=>{
   
    pokeCard.addEventListener("click", function cardClick() {
        if(pokeCard == cardDiv1 || pokeCard == cardDiv2 || cardOk.includes(pokeCard)) {
            return
        }

        card = pokeCard.style.backgroundImage = "url(" + imgRandom[index] + ")";
        clickCountPoke ++;
        if(clickCountPoke == 1){
            card1 = card;
            cardDiv1 = pokeCard;
        }  
        if(clickCountPoke == 2){
            card2 = card;
            cardDiv2 = pokeCard;                       
            setTimeout(()=>{
                if (card1 == card2) {
                    scor ++;
                    score.textContent = scor;
                    cardOk.push(cardDiv1);
                    cardOk.push(cardDiv2); 
                    cardDiv1 = null;
                    cardDiv2 = null;   
                   
                    clickCountPoke = 0;
                    if(cardOk.length == 12){
                        alert('Vous êtes un dieu, bravo.')
                    }  
                } else {
                    cardDiv1.style.backgroundImage = 'none';
                    cardDiv2.style.backgroundImage = 'none';
                    clickCountPoke = 0;
                    cardDiv1 = null;
                    cardDiv2 = null;  
                  
                }
            },300)


           
        } 
    })

 });

 

 