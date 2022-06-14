let rand = [Math.floor(Math.random() * 1000)];
console.log(rand);
let up = document.getElementById('give');
let btn = document.getElementById('submit');
let out = document.getElementById('output');

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if(input == rand) {
        out.innerHTML = `Congrats! You guessed right!`
    } else if(input < rand) {
        out.innerHTML = "Go Higher!"
    } if (input > rand){
        out.innerHTML = "Go Lower!"
    }
})

up.addEventListener('click', function() {
    out.innerHTML = `You gave up that easily? you number was ${rand}`
})
