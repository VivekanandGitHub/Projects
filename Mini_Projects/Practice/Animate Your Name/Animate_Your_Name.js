const container1 = document.querySelector('#divContainer');

const careerList = ['Programmer', 'YouTuber', 'Web Developer', 'Software Engineer '];

let careerIndex = 0;
let charIndex = 0;

function updateCareer(){
    container1.innerHTML = `<h1>I am 
    ${careerList[careerIndex].slice(0,charIndex)}</h1>`;
    charIndex++;
    if (charIndex === careerList[careerIndex].length){
        careerIndex++;
        charIndex=0;
    }
    if(careerIndex > (careerList.length-1)){
        careerIndex=0;
        charIndex=0
    }

    setTimeout(updateCareer, 200);
}

updateCareer();


