let warmUp = document.querySelector('.warm-up');
let mainTable = document.querySelector('.main_table');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

function btnController(elem){
    console.log(elem.target);

    
    console.log(elem.target.innerText);
    
    if(elem.target.innerText == 'Show warm-up') {
        elem.target.innerText = 'Hide warm-up';
        warmUp.classList.toggle('active');
        console.log(elem.target.innerText);
    } else if (elem.target.innerText == 'Hide warm-up') {
        elem.target.innerText = 'Show warm-up';
        warmUp.classList.toggle('active');
        console.log(elem.target.innerText);
    } else if (elem.target.innerText == 'Show main part') {
        elem.target.innerText = 'Hide main part';
        mainTable.classList.toggle('active');
    } else if (elem.target.innerText == 'Hide main part') {
        elem.target.innerText = 'Show main part';
        mainTable.classList.toggle('active');
    }


}
btn1.addEventListener('click', btnController);
btn2.addEventListener('click', btnController);

// btn.forEach((elem) =>
// elem.addEventListener('click', btnController));



// function warmUpShower(){
//     warmUp.forEach((item) =>
//     item.classList.remove('active'));
    
// }

// warmUp.forEach((item))