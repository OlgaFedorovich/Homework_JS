
let answerQuestions = function() {
    let buttonsOpen = document.querySelectorAll('.question_button'),
        answers = document.querySelectorAll('.question_answer'),
        tabs = document.querySelectorAll('.tab'),
        contentBlocks = document.querySelectorAll('.questions_content');

    if(buttonsOpen.length == 0 || answers.length == 0 || tabs.length == 0 || contentBlocks.length == 0) return;

    for(let i = 0; i < buttonsOpen.length; i++) {
        buttonsOpen[i].addEventListener('click', function() {
            this.classList.toggle('question_button_up');
            answers[i].classList.toggle('question_answer_opened'); 
        });
    }

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            tabs.forEach(function(tab) {
                tab.classList.remove('active_tab');
            });
            this.classList.add('active_tab');
            contentBlocks.forEach(function(content) {
                content.classList.remove('active_content');
            });
            contentBlocks[i].classList.add('active_content');
        }); 
    }
    
};

answerQuestions();



