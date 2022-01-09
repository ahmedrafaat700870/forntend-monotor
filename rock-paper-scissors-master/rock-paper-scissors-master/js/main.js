// define ascore 
let scor = 0;
// get num_scor (span) 
let num_scor = document.querySelector('.number-score');
// in the first num_scor will be 0 .
num_scor.innerHTML = `${scor}`;
// get game-content (div)
let el = document.querySelector('.game-content');
// get  choice (div). 
let choice = document.querySelector('.choice');
// get rulse (div)
let rulse = document.querySelector('.rulse');
// get button (button)
let btn = document.querySelector('.button');
// get your_choice img . 
let your_choice = document.getElementById('your-choice');
// get com_choice img .
let com_choice = document.getElementById('com-choice');

btn.onclick = function() {
    rulse.setAttribute('data-open', 'true');
    rulse.style.display = 'flex';
};
let close = document.getElementById('close');
close.onclick = function() {
    rulse.setAttribute('data-open', 'false');
    rulse.style.display = 'none';
}
let allSrc = [
    "images/icon-lizard.svg",
    "images/icon-paper.svg",
    "images/icon-rock.svg",
    "images/icon-scissors.svg",
    "images/icon-spock.svg"
]
let choice_you;
let choice_com;
let results;

let gameContent = Array.from(document.querySelectorAll('.imges div'));

function getchouse(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', function() {
            // console.log(this.getAttribute('data-game'));
            let data_game = this.getAttribute('data-game');
            let src = this.getAttribute('src');
            el.style.display = 'none';
            // add style display to choice div . 
            choice.style.display = 'flex';
            // then we call the create choice funtion and set the attr src . 
            yourChoice(src);
            // call the computer choice function .
            comChoice(allSrc);
            choice_com = choice_com;
            // get data-comper from the elment you clicked .
            choice_you = this.getAttribute('data-comper');
            // then call reslut funtion () . 
            resulte(choice_you, choice_com);
            calcScore(results);
            num_scor.innerHTML = scor;
            console.log(results);
            // console.log(scor);
            // console.log(choice_com);
            // console.log(choice_you);

            removeClass(your_choice);
            addClass(your_choice, choice_you);
            removeClass(com_choice);
            addClass(com_choice, choice_com);
            document.querySelector('.res-res').innerHTML = results;
        });
    };
};


// add img the palyer will choice it . 

getchouse(gameContent);

function yourChoice(src) {
    return your_choice.setAttribute('src', src);
};

choice_com = randomNum(allSrc);
console.log(choice_com);

function comChoice(array) {
    return com_choice.setAttribute('src', array[choice_com]);
}
// function return reandom num from 0 to 4 ;
function randomNum(array) {
    return Math.floor(Math.random() * array.length);
};
// rolse 
// scissors = صابعين  = 3 
// lizard = سحلية = 0
// spock = ايد ناقصة = 4
//rock = قبضة = 2
// paper = ابد مفرودة = 1
// 0 peat 4 and 3
// 1 peat 2 and 4 
// 2 peat 0 and 3
// 3 peat 1 and 0  
// 4 peat 3 and 2


function resulte(y_choice, c_choice) {
    // the reslut you win
    if (y_choice == 0 && c_choice == 4 || y_choice == 0 && c_choice == 3) {
        results = 'you Win';
    } else if (y_choice == 1 && c_choice == 2 || y_choice == 1 && c_choice == 4) {
        results = 'you Win';
    } else if (y_choice == 2 && c_choice == 0 || y_choice == 2 && c_choice == 3) {
        results = 'you Win';
    } else if (y_choice == 3 && c_choice == 1 || y_choice == 3 && c_choice == 0) {
        results = 'you Win';
    } else if (y_choice == 4 && c_choice == 3 || y_choice == 4 && c_choice == 2) {
        return results = 'you Win';
    }
    // the reslut you lose 
    else if (c_choice == 0 && y_choice == 4 || c_choice == 0 && y_choice == 3) {
        results = 'you Lose';
    } else if (c_choice == 1 && y_choice == 2 || c_choice == 1 && y_choice == 4) {
        results = 'you Lose';
    } else if (c_choice == 2 && y_choice == 0 || c_choice == 2 && y_choice == 3) {
        results = 'you Lose';
    } else if (c_choice == 3 && y_choice == 1 || c_choice == 3 && y_choice == 0) {
        results = 'you Lose';
    } else if (c_choice == 4 && y_choice == 3 || c_choice == 4 && y_choice == 2) {
        return results = 'you Lose';
    } else {
        return results = 'no win no lose';
    }
}

function calcScore(res) {
    if (res == 'you Win') {
        scor++;
    } else if (res == 'you Lose') {
        scor--;
    } else {
        // do nothing .
    }
}

// get el(button) res (play-again) . 
let paly_again = document.querySelector('.res button');
console.log(paly_again);
paly_again.addEventListener('click', function() {
    el.style.display = 'block';
    choice.style.display = 'none';
    choice_com = randomNum(allSrc);
});
// get res (button) 
let res_btn = document.querySelector('.res-res');

console.log(num_scor);
// define array containe classes . 
let classes = [
    "lizard",
    "paper",
    "rock",
    "scissors",
    "spock"
];

function addClass(el, pos) {
    if (pos == 0) {
        el.classList.add(classes[0]);
    } else if (pos == 1) {
        el.classList.add(classes[1]);
    } else if (pos == 2) {
        el.classList.add(classes[2]);
    } else if (pos == 3) {
        el.classList.add(classes[3]);
    } else if (pos == 4) {
        el.classList.add(classes[4]);
    }
}

function removeClass(el) {
    for (let i = 0; i < classes.length; i++) {
        if (el.classList.contains(classes[i])) {
            el.classList.remove(classes[i]);
        }
    }
}