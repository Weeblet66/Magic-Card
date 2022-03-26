let texts = [
    {
        Text: "Magic",
    },
    {
        Text: "Choose the Card in your Mind",
    },
    {
        Text: "Tap the card to see",
    },
]
let currentItem = 0;
const img0 = document.getElementById("img0")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const text = document.getElementById("text")
const btn = document.getElementById("btn")
const cardId1 = document.getElementById("cardId1")
const cardId = document.getElementById("cardId")
const cardId2 = document.getElementById("cardId2")
const cardId3 = document.getElementById("cardId3")
const cardId22 = document.getElementById("cardId")

btn.addEventListener("click",()=>{
    currentItem++;
    if (currentItem > texts.length - 1) {
        currentItem = 0; 
    }
    showItem(currentItem);
    magic()
  
  
    // cardId1.style.transform = "rotateY(180deg)"
    // cardId.style.transform = "rotateY(180deg)"
})
function showItem(){
    const item = texts[currentItem];
    text.innerHTML = item.Text
}
function cardPosition(){
    cardId.classList.add("card-1")
    cardId1.classList.add("card-2")
    cardId2.classList.add("card-3")
    cardId3.classList.add("card-4")
    cardId22.classList.add("card-22")
    // cardId.style.marginLeft = "63vw"
    // cardId1.style.marginLeft = "27vw"
    // cardId2.style.marginLeft = "-9vw"
    // cardId3.style.marginLeft = "-45vw"
    
}
function cardPosition1(){
    cardId.classList.remove("card-1")
    cardId1.classList.remove("card-2")
    cardId2.classList.remove("card-3")
    cardId3.classList.remove("card-4")
    // cardId.style.marginLeft = "vw"
    // cardId1.style.marginLeft = "vw"
    // cardId2.style.marginLeft = "vw"
    // cardId3.style.marginLeft = "-vw"
    
}
function cardFlip(){
    setInterval(()=>{
        cardId.classList.add("flip")
    cardId1.classList.add("flip")
    cardId2.classList.add("flip")
    cardId3.classList.add("flip")
    },1000)
}
function cardFlip1(){
    setInterval(()=>{
        cardId.classList.add("flip1")
    cardId1.classList.add("flip1")
    cardId2.classList.add("flip1")
    cardId3.classList.add("flip1")
    },1000)
}

function magic(){
    if (text.innerHTML ===  "Choose the Card in your Mind"){
        btn.innerHTML = "Done"
        cardPosition() 
        cardFlip()
    }
    if (text.innerHTML === "Tap the card to see"){
        cardPosition1()
        cardFlip1()
        setInterval(()=>{
            cardPosition() 
            cardFlip()
        },1000)
        setInterval(()=>{
            img0.src = "qs.png"
            img1.src = "jd.png"
            img2.src = "js.png"
            img3.src = "qh.png"
        },2000)
        cardId.addEventListener("click",()=>{
            cardId.style.transform = "rotateY(180deg)"
            img0.classList.add("glow")
        })
        cardId1.addEventListener("click",()=>{
            cardId1.style.transform = "rotateY(180deg)"
            img1.classList.add("glow")
        })
        cardId2.addEventListener("click",()=>{
            cardId2.classList.add("vanish")
            img2.classList.add("glow")
            text.innerHTML = "Your Card has been Vanished"
            btn.innerHTML = "Restart"
        })
        cardId3.addEventListener("click",()=>{
            cardId3.style.transform = "rotateY(180deg)"
            img3.classList.add("glow")
        })        
    }
    if (text.innerHTML === "Magic"){
        location.reload()   
    };
    
}
