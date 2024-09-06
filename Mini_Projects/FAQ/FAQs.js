const quetions = document.querySelectorAll('.quetion');

quetions.forEach(faq_Quetion => {

    const icon = document.querySelector('.icon');
    const answer = document.querySelector('.answer');

    faq_Quetion.addEventListener('click', () => {
        icon.classList.toggle("active");
        answer.classList.toggle("active")
    });
});

