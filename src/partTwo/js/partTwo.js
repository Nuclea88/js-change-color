//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
     let background = document.getElementById("background");
     if(background.style.backgroundColor === 'rgb(255, 0, 0)'| background.style.backgroundColor === 'red'){
    background.style.backgroundColor = 'darkblue';
    }
    else if (background.style.backgroundColor === 'rgb(0, 0, 139)'| background.style.backgroundColor === 'darkblue'){
       
    background.style.backgroundColor = 'red';
    }
};

function changeText(){
    let text = document.getElementById("text");
    if(text.textContent === "red"){
    text.innerHTML = 'darkblue';
    text.style.color ='darkblue';
    }
    else{
        text.innerHTML = 'red';
    text.style.color ='red';
    }
};

function changeStyles(){
     changeColor();
       changeText();
};

export {changeColor, changeText, changeStyles}