let number = document.getElementById("counter");

let count = 0


function display(){
    number.textContent = count
    if(count > 0){
        number.style.color = 'green'
    }else if(count < 0){
        number.style.color= "red";

    }else{
        number.style.color = 'black'
    }
}


function minus(){
    count--
    display()
}



function plus(){
    count++
    display()

}


function reset(){
    count = 0
    display()
}



