

const btn = document.getElementById("button-itself");

let counter = 0;

document.getElementById("demo").innerHTML = "Try to click the button. If you can. :)"

function moverandomly(btn) {

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    const RandomColor = getRandomColor();
    
    if (counter < 10) {
        btn.style.top = Math.floor(Math.random() * 86).toString() + "vh"
        btn.style.left = Math.floor(Math.random() * 86).toString() + "vw"
        btn.style.backgroundColor = RandomColor;
        btn.style.borderColor = RandomColor;
        counter = counter + 1;
        console.log(counter);
        
    } else {
        return
    }

    if (counter <= 9 && counter >= 1) {
        document.getElementById("demo").innerHTML = "You failed to click it! Haha!"
    } else if (counter >= 10) {
        document.getElementById("demo").innerHTML = "Okay, fine. The button will stop moving now. Haha."
    }

}



const welldone = () => {
    document.getElementById("root").innerHTML = "Well done! You managed to click the button! Refresh the page to play again."
}

document.getElementById("button-itself").addEventListener("click", welldone);









