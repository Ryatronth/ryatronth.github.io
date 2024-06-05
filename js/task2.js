document.addEventListener('DOMContentLoaded', function () {
    const answers = document.querySelectorAll('.answer');

    answers.forEach(answer => {
        answer.addEventListener('click', function () {
            const isAnswer = answer.classList.contains('ans3');

            if (isAnswer) {
                this.classList.add('correct');

                answers.forEach(img => img.style.pointerEvents = 'none');

                setTimeout(() => {
                    window.location.href = "../task3.html";
                }, 1500);
            } else {
                this.classList.add('incorrect');
            }
        });
    });
});