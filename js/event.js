// option 1 


// <button onclick="document.body.style.backgroundColor='red'"> make red </button>
//  option 2 
function makeyellow() {
    document.body.style.backgroundColor = 'yellow';
}


// option 3
const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option 4 use some time 

const makepurple = document.getElementById('make-purple');

makepurple.onclick = function purplebutton() {

    document.body.style.backgroundColor = 'purple';
}

// option 5
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink);

function makePink() {

    document.body.style.backgroundColor = 'pink';
}

// option 6
const makeBlue = document.getElementById('make-blue');
makeBlue.addEventListener('click', function makeBlue() {
    document.body.style.backgroundColor = 'blue';
})

//ption 5 AND FINAL Option ths is inportant , we will use this some time  

document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
});