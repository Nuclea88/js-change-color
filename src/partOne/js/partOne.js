//I parte, cambiar color y texto a darkblue

function changeColor(){
    let background = document.getElementById("background");
    background.style.backgroundColor = 'darkblue';
    
};

function changeText(){
    let text = document.getElementById("text");
    text.innerHTML = 'darkblue';
    text.style.color ='darkblue';
}; 

function changeStyles(){
   changeColor();
   changeText();
};

export {changeColor, changeText, changeStyles}