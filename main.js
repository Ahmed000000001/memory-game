document.querySelector(".control span").onclick  = function(){
    let name = prompt("Whats Your Name?")
    if(name == "" || name==null){
        document.querySelector(".name span").innerHTML= "Unknown"
    }else{
        document.querySelector(".name span").innerHTML= name
    }
    document.querySelector(".control ").remove()
}

let duration =1000

let game =document.querySelector(".game")
let blocks = Array.from(game.children)
let orderRange=[... Array(blocks.length).keys()]
shuffle(orderRange)
blocks.forEach((block, index)=>{
    block.style.order = orderRange[index]
    block.addEventListener("click", function(){
        flipp(block)
    })
})


function flipp(block){

    block.classList.add("flipped")
    
    let flippBlock = blocks.filter( flippBlock => flippBlock.classList.contains("flipped"))
    if(flippBlock.length === 2){
    stopClicking()
    match(flippBlock[0], flippBlock[1])

    }


}


function shuffle (array){
    let curnt = array.length,
    temp,
    rand

    while (curnt> 0) {
        rand=Math.floor(Math.random() * curnt)
        curnt--

        temp=array[curnt]
        array[curnt]=array[rand]
        array[rand]=temp
    }
    return array
}

function stopClicking() {
    game.classList.add("stop-clicking")
    setTimeout(()=>{
        game.classList.remove("stop-clicking")
    },duration)
    
}

function match(firstBlock, secondBlock){
    let tries = document.querySelector(".tries span")
    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
        firstBlock.classList.remove("flipped")
        secondBlock.classList.remove("flipped")
        firstBlock.classList.add("match")
        secondBlock.classList.add("match")
    }else{
        tries.innerHTML = parseInt(tries.innerHTML)+1
        setTimeout(()=>{
            firstBlock.classList.remove("flipped")
            secondBlock.classList.remove("flipped")
        },duration)
    }
    
}
