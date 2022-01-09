let choice_com = randomNum();
// function return reandom num from 0 to 4 ;
function randomNum() {
    return Math.floor(Math.random() * allSrc.length);
}
console.log(randomNum());