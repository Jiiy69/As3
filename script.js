let currentProgress = 0;

function selectAnswer(element, isCorrect) {
    const question = element.closest(".question");
    if (question.classList.contains("answered")) return;

    question.classList.add("answered");
    currentProgress++;
    document.getElementById("progress-bar").value = currentProgress;
    document.getElementById("progress-text").textContent = `${currentProgress} / 5`;

    const options = question.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected', 'correct', 'incorrect'));

    element.classList.add('selected');
    if (isCorrect) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }

    if (currentProgress === 5) {
        showFinalScore();
    }
}

function showFinalScore() {
    const correctAnswers = document.querySelectorAll('.correct').length;
    const resultText = `You scored ${correctAnswers} / 5`;
    document.getElementById("result").textContent = resultText;
}

function submitFeedback() {
    const feedback = document.getElementById("feedback-box").value;
    alert(`Feedback submitted: ${feedback}`);
}
