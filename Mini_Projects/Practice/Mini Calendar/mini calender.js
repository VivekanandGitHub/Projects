let date = new Date();

document.querySelector('.month').innerHTML = date.toLocaleString('en', {month:'long'});
document.querySelector('.day').innerHTML = date.toLocaleString('en', {weekday:'long'});
document.querySelector('.date').innerHTML = date.toLocaleDateString('en', {day:'numeric'})
document.querySelector('.year').innerHTML = date.toLocaleDateString('en', {year:'long'})

// function month() {

//     let inputMonth = date.getMonth();

//     if(inputMonth === 0){
//         return 'January';
//     }
//     else if (inputMonth === 1){
//         return 'Febraury'; 
//     }
//     else if (inputMonth === 2){
//         return 'Febraury'; 
//     }
//     else if (inputMonth === 3){
//         return 'April'; 
//     }
//     else if (inputMonth === 4){
//         return 'May'; 
//     }
//     else if (inputMonth === 5){
//         return 'June'; 
//     }
//     else if (inputMonth === 6){
//         return 'July'; 
//     }
//     else if (inputMonth === 7){
//         return 'August'; 
//     }
//     else if (inputMonth === 8){
//         return 'September'; 
//     }
//     else if (inputMonth === 9){
//         return 'October'; 
//     }
//     else if (inputMonth === 10){
//         return 'November'; 
//     }
//     else if (inputMonth === 11){
//         return 'December'; 
//     }
// }

// function Day(){

//     let inputDay = date.getDay();

//     if (inputDay === 1) {
//         return 'Monday';
//     }
//     else if (inputDay === 2) {
//         return 'Thuesday';
//     }
//     else if (inputDay === 3) {
//         return 'Wednesday';
//     }
//     else if (inputDay === 4) {
//         return 'Thrusday';
//     }
//     else if (inputDay === 5) {
//         return 'Friday';
//     }
//     else if (inputDay === 6) {
//         return 'Satuarday';
//     }
//     else if (inputDay === 7) {
//         return 'Sunday';
//     }
// }