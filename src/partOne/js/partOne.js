//I parte, cambiar color y texto a darkblue

function changeColor(){
    let background = document.getElementById("background");
    background.style.backgroundColor = 'darkblue';
};

function changeText(){
    let background = document.getElementById("background");
    background.style.color = 'darkblue'
}; 

function changeStyles(){
   changeColor();
   changeText();
};

export {changeColor, changeText, changeStyles}