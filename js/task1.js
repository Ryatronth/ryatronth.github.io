document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.option');
    let currentQuestionIndex = 0;
    const questions = document.querySelectorAll('.question-container');

    const correctOptions = [0, 2];

    images.forEach(image => {
        image.addEventListener('click', function () {
            const selectedOption = parseInt(this.getAttribute('data-option'));

            if (selectedOption === correctOptions[currentQuestionIndex]) {
                this.classList.add('correct');

                images.forEach(img => img.style.pointerEvents = 'none');

                setTimeout(() => {
                    questions[currentQuestionIndex].classList.add('fade-out');

                    const nextIndex = currentQuestionIndex + 1;
                    if (nextIndex == questions.length) {
                        window.location.href = "../task1.2.html";
                    }

                    setTimeout(() => {
                        questions[currentQuestionIndex].classList.add('hidden');
                        questions[currentQuestionIndex].classList.remove('fade-out');
                        currentQuestionIndex++;

                        if (currentQuestionIndex < questions.length) {
                            questions[currentQuestionIndex].classList.add('fade-in');
                            questions[currentQuestionIndex].classList.remove('hidden');

                            setTimeout(() => {
                                questions[currentQuestionIndex].classList.remove('fade-in');
                                images.forEach(img => {
                                    img.classList.remove('correct', 'incorrect');
                                    img.style.pointerEvents = 'auto';
                                });
                            }, 1000);
                        }
                    }, 1000); // Время анимации fadeOut должно совпадать с временем в CSS
                }, 1000);
            } else {
                this.classList.add('incorrect');
            }
        });
    });
});