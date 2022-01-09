let result = document.getElementById("result") ;
let res_Attr = result.getAttribute('data') ;
let calc_numeic = Array.from(document.querySelectorAll('.footer div')) ;
let screen  = '';
let num ;
let res ;
for(let i = 0 ; i < calc_numeic.length ; i++ ) {
    calc_numeic[i].onclick = function () {
        num = this.getAttribute('data');
        num==null ? "" : num ;
        screen = screen + "" + num ;
        res = checksingel(screen) ;
        if (res == undefined) {
            // no nothing
        } else {
            screen = res ;
        }
        screen = checkbuttonTybe(screen) ;
        // console.log(typeof(screen)) ;
        screen = lastcheck(screen) ;
        result.innerHTML = screen ;
    }
}
function lastcheck (data) {
    if (data == 'del' || data == 'de' || data == 'd' || data == undefined ) {
        return "Check Your Entery" ;
    } else {
        return data ;
    }
}
function checkbuttonTybe (data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'd') {
            // console.log('del') ;
            if (data.length == 3) { // check if he clecked in the first on del button then show Eroor massge .
                // console.log('Eroor') ;
            } 
            data = data.slice(0, data.length-4) ;
            // console.log(data) ;
            return data ;
        } else if (data[i] == 'r') {
            // console.log('reset') ;
            return '' ;
        } else if (data[i] == '=') {
            data = data.slice(0,data.length-1) ;
            let n = seperate(data) ;
            data = clac(n.firstNumber,n.lastNumber,n.singersin) ;
            return data ;
        }
        else {
            // do noting
        }
    }
    return data ;
}
// function take the data entery and seperated the numbers from math sin . 
// then call the function that clacolated the numbers . 
// then returned the resulte . 
function checksingel (data){
    let first = [] ; 
    let last = [] ;
    let singel = '' ; 
    let j  ;
    for (let i = 0; i < data.length; i++) {
        if (singel == '') {
            if (data[i] == '+' || data[i] == '*' || data[i] == '/' || data[i] == '-') {
                singel = data[i] ;
                j = i +1;
                // console.log("singel"+singel) ;
            } else {
                first[i] = data[i] ;
                // console.log("first"+first) ;
            }
        } else {
            if (data[i] == '+' || data[i] == '*' || data[i] == '/' || data[i] == '-') { 
                // console.log(j +''+ i) ; 
                first = clac(first,last,singel) ;
                singel = data[i] ;
                return first+singel; 
            } else { 
                last[i-j] = data[i] ;
                // console.log("last"+last) ;
            }
        }
    }
}
// funtion take tow number and singel and reutern the result of tow numbers .
function clac (first , last , singel) {
    let a = '' ;
    let b = '' ;
    let cal ;
    for (let i = 0; i < first.length; i++) {
        a = a + '' + first[i] ; 
    }
    for (let j = 0; j < last.length; j++) {
        b = b + '' + last[j] ;
    }
    if (singel == '+') {
        cal = +a + +b ; 
        return cal ;
    } else if (singel == '-'){
        cal = +a - +b ; 
        return cal ;
    } else if (singel == '*'){
        cal = +a * +b ;
        return cal ;
    } else if (singel == '/'){
        cal = +a / +b ;
        return cal ;
    } else {
        // console.log('eroor') ;
    }
}
function seperate (data) {
    let first = [] ; 
    let last = [] ;
    let singel = '' ; 
    let j  ;
    for (let i = 0; i < data.length; i++) {
        if (singel == '') {
            if (data[i] == '+' || data[i] == '*' || data[i] == '/' || data[i] == '-') {
                singel = data[i] ;
                j = i +1;
                // console.log("singel"+singel) ;
            } else {
                first[i] = data[i] ;
                // console.log("first"+first) ;
            }
        } else {
            if (data[i] == '=' || data[i] == '*' || data[i] == '/' || data[i] == '-') { 
                // console.log(j +''+ i) ; 
                // console.log("Eroor") ;
            } else { 
                last[i-j] = data[i] ;
                // console.log("last"+last) ;
            }
        }
    }
    return {
        firstNumber : first ,
        lastNumber : last , 
        singersin : singel 
    }
}
// section desging whith js . 
// first we will get the Elemnts in variables . 
let getContnet = document.querySelector('.contnet') ;
let getCalc = document.querySelector('.head .titel') ;
let getThemep = document.querySelector('.themes p') ;
let themesNumbers = document.querySelector('.themes-content .themes-numbers') ;
let themesCircle = document.querySelector('.themes-circle') ;
let themesCircleSpans = Array.from(document.querySelectorAll('.themes-circle span')) ;
let themesCircleFirstSpan = themesCircleSpans[0] ;
let themesCircleThcndSpan = themesCircleSpans[1] ;
let themesCirclethirdSpan = themesCircleSpans[2] ;
let getBodycontent = document.querySelector('.body-content') ;
let getBodycontentSpan = document.querySelector('.body-content span') ;
let getFooter = document.querySelector('.footer') ;
let getFooterDiv = Array.from( document.querySelectorAll('.footer div')) ;
let getBtnDel = getFooterDiv[3] ;
let getBtnReset = getFooterDiv[16] ;
let getBtnEqual = getFooterDiv[17] ;
// let's say the defult themes will be first theme .
remove() ;
changeThemes(1) ; 
for (let i = 0; i < themesCircleSpans.length; i++) {
    themesCircleSpans[i].onclick = function () {
        if (i == 0 ) {
            console.log(i) ;
            remove() ;
            changeThemes(1) ;
        } else if (i == 1) {
            console.log(i) ;
            remove() ;
            changeThemes(2) ;
        } else if (i == 2) {
            console.log(i) ;
            remove() ;
            changeThemes(3) ;
        }
    }
    
}
function changeThemes (number) {
    if (number == 1) {
        console.log('first') ;
        getContnet.classList.add('firsThemes') ;
        getCalc.classList.add('firstThemes') ;
        getThemep.classList.add('themes-titel-first') ;
        themesNumbers.classList.add('themes-numbers-first') ;
        themesCircle.classList.add('themes-circle-first') ;
        themesCircleFirstSpan.classList.add('show') ;
        getBodycontent.classList.add('body-content-first') ;
        getBodycontentSpan.classList.add('first-result') ;
        getFooter.classList.add('footer-first') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.add('first') ;
        }
        getBtnDel.classList.add('first-btn') ;
        getBtnReset.classList.add('first-res') ;
        getBtnEqual.classList.add('first') ;
    } else if (number == 2 ) {
        console.log('thcand') ;
        getContnet.classList.add('thcandThemes') ;
        getCalc.classList.add('thcandThemes') ;
        getThemep.classList.add('themes-titel-thcand') ;
        themesNumbers.classList.add('themes-numbers-thcand') ;
        themesCircle.classList.add('themes-circle-thcand') ;
        themesCircleThcndSpan.classList.add('show') ;
        getBodycontent.classList.add('body-content-thcand') ;
        getBodycontentSpan.classList.add('thcand-result') ;
        getFooter.classList.add('footer-thcand') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.add('thcand') ;
        }
        getBtnDel.classList.add('thcand-btn') ;
        getBtnReset.classList.add('thcand-res') ;
        getBtnEqual.classList.add('thcand') ;
    } else if (number == 3) {
        console.log('third') ;
        getContnet.classList.add('thirdThemes') ;
        getCalc.classList.add('thirdThemes') ;
        getThemep.classList.add('themes-titel-third') ;
        themesNumbers.classList.add('themes-numbers-third') ;
        themesCircle.classList.add('themes-circle-third') ;
        themesCircleSpans[2].classList.add('show') ;
        getBodycontent.classList.add('body-content-third') ;
        getBodycontentSpan.classList.add('third-result') ;
        getFooter.classList.add('footer-third') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.add('third') ;
        }
        getBtnDel.classList.add('third-btn') ;
        getBtnReset.classList.add('third-res') ;
        getBtnEqual.classList.add('third') ;
    }
}
function remove () {
    if (getContnet.classList.contains('firsThemes')) {
        getContnet.classList.remove('firsThemes') ;
        getCalc.classList.remove('firstThemes') ;
        getThemep.classList.remove('themes-titel-first') ;
        themesNumbers.classList.remove('themes-numbers-first') ;
        themesCircle.classList.remove('themes-circle-first') ;
        themesCircleFirstSpan.classList.remove('show') ;
        getBodycontent.classList.remove('body-content-first') ;
        getBodycontentSpan.classList.remove('first-result') ;
        getFooter.classList.remove('footer-first') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.remove('first') ;
        }
        getBtnDel.classList.remove('first-btn') ;
        getBtnReset.classList.remove('first-res') ;
        getBtnEqual.classList.remove('first') ;
    }
    else if (getContnet.classList.contains('thcandThemes')) {
        getContnet.classList.remove('thcandThemes') ;
        getCalc.classList.remove('thcandThemes') ;
        getThemep.classList.remove('themes-titel-thcand') ;
        themesNumbers.classList.remove('themes-numbers-thcand') ;
        themesCircle.classList.remove('themes-circle-thcand') ;
        themesCircleThcndSpan.classList.remove('show') ;
        getBodycontent.classList.remove('body-content-thcand') ;
        getBodycontentSpan.classList.remove('thcand-result') ;
        getFooter.classList.remove('footer-thcand') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.remove('thcand') ;
        }
        getBtnDel.classList.remove('thcand-btn') ;
        getBtnReset.classList.remove('thcand-res') ;
        getBtnEqual.classList.remove('thcand') ; 
    }
    /////////////////////////////////////////
    else if (getContnet.classList.contains('thirdThemes')) {
        getContnet.classList.remove('thirdThemes') ;
        getCalc.classList.remove('thirdThemes') ;
        getThemep.classList.remove('themes-titel-third') ;
        themesNumbers.classList.remove('themes-numbers-third') ;
        themesCircle.classList.remove('themes-circle-third') ;
        themesCirclethirdSpan.classList.remove('show') ;
        getBodycontent.classList.remove('body-content-third') ;
        getBodycontentSpan.classList.remove('third-result') ;
        getFooter.classList.remove('footer-third') ;
        for (let i = 0; i < getFooterDiv.length; i++) {
            getFooterDiv[i].classList.remove('third') ;
        }
        getBtnDel.classList.remove('third-btn') ;
        getBtnReset.classList.remove('third-res') ;
        getBtnEqual.classList.remove('third') ;
    }
    ///////////////////////////////////////////
}
