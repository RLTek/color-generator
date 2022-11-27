const colorBtn = document.getElementById('colorBtn');

//Changes the background color to a random color when clicked.
colorBtn.onclick = function (){

    //Gets 3 random numbers to represent the rgb values.
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${num1}, ${num2},${num3})`;

    document.body.style.backgroundColor = randomColor;

    //Sets the values of the random background color to text.
    let colorValues = document.getElementById('colorValues');

    colorValues.innerHTML = randomColor;
}



