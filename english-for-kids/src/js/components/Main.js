import {categories, formDataForCategoriesCard } from './../data/constants.js';
import CategoryCard from './CategoryCard.js';
import WordCard from './WordCard.js';
import StatisticsTable from './StatisticsTable.js';

class MainPlayingArea {

    playAudio(source) {
        const audio = new Audio();
        audio.src = `./assets/${source}`;
        audio.load();
        audio.currentTime = 0;
        audio.play();
    }

    correctAnswer() {
        console.log('right answer!');
                this.playAudio('audio/correct.mp3');
                this.correctMark = document.createElement('div');
                this.correctMark.classList.add('correct-answer');
                this.answersWrapper.appendChild(this.correctMark);
                this.correctAnswersCount++;
    }

    wrongAnswer() {
        console.log('wrong answer!');
        this.playAudio('audio/error.mp3');

        this.wrongMark = document.createElement('div');
        this.wrongMark.classList.add('wrong-answer');
        this.answersWrapper.appendChild(this.wrongMark);

        this.wrongAnswersCount++;

    }

    finishGame(wordsLength) {
        console.log('finished game')
        this.gameResultPopup = document.createElement('div');
        this.gameResultPopup.classList.add('game-result-popup');
        this.gameFinalPicture = document.createElement('div');
        if(this.correctAnswersCount === wordsLength && this.wrongAnswersCount === 0) {
            this.playAudio('audio/success.mp3');
            this.gameResultPopup.innerHTML= `<div class="game-message">Good job!</div>`;     
            this.gameFinalPicture.classList.add('result-success');
        } else {
            this.playAudio('audio/failure.mp3');
            this.gameResultPopup.innerHTML= `<div class="game-message">It's a failure!</div>
            <div class="game-message">You have done <span>${this.wrongAnswersCount}</span> mistakes!</div>`;
            this.gameFinalPicture.classList.add('result-failure');
        }
        this.mainWrapper.innerHTML = ``;
        this.gameResultPopup.appendChild(this.gameFinalPicture);
        this.mainWrapper.appendChild(this.gameResultPopup);
        setTimeout(() => {
            this.gameResultPopup.remove();
            window.location.hash = '#main';
        }, 3000);
    }

    changeWordsStatistics(cardsWord, isRightAnswer) {
        console.log('stat');

        let statistics = JSON.parse(localStorage.getItem('game-statistics'));

                statistics.map(item => {
                    
                    if(item.word === cardsWord && item.hash === location.hash.slice(1)) {

                        if(isRightAnswer) {
                            item.correct++;
                        } else {
                            item.wrong++;
                        }

                        item.percentMistakes = Math.floor((100 * item.wrong) / (item.correct + item.wrong));
                    }
                });

                localStorage.setItem('game-statistics', JSON.stringify(statistics));
    }

    playWords(words) {
        
        this.gameIsFinished = false;
        this.correctAnswersCount = 0;
        this.wrongAnswersCount = 0;

        this.playAudio(words[0].audioSrc);

        let wordId = 0;

        this.startGameBtn.addEventListener('click', () => {
            if(this.startGameBtn.innerHTML === 'Repeat') {
                this.playAudio(words[wordId].audioSrc);
            }
        });

        this.answersWrapper = document.createElement('div');
        this.answersWrapper.innerHTML = `<div class="answers-descr">Answers:</div>`
        this.answersWrapper.classList.add('answers-wrapper');
        this.mainWrapper.insertBefore(this.answersWrapper, this.cardsWrapper);

        const cardsToClick = this.cardsWrapper.querySelectorAll('.word-card-wrapper');

        cardsToClick.forEach(card => {
            card.addEventListener('click', (e)=> {
                let clickedCard = e.target.closest('.word-card-wrapper');

                if (localStorage.getItem('playing-mode') === 'true' && !clickedCard.classList.contains('frozen-card')) {
                    if (clickedCard.dataset.word === words[wordId].word ) {
                        clickedCard.classList.add('frozen-card');
                        this.changeWordsStatistics(clickedCard.dataset.word, true);
                        this.correctAnswer();
                        
                        if (this.correctAnswersCount === words.length) {
                            this.finishGame(words.length);
                        }
    
                        if (wordId < words.length - 1) {
                          wordId++;
                       
                         setTimeout(this.playAudio(words[wordId].audioSrc), 1000);  
                        }
                        
                    } else {
                       
                        this.changeWordsStatistics(clickedCard.dataset.word, false);
                        this.wrongAnswer();
                        console.log(this.wrongAnswersCount, 'wrong');
                    }
                }       
            });
        });

        if(this.gameIsFinished) return;
    }

    startGame() {

        this.startGameBtn.classList.add('repeat-word');
        this.startGameBtn.innerHTML = 'Repeat';

        let thisPageCategory;
        if(window.location.hash === '#learn') {
            thisPageCategory = JSON.parse(localStorage.getItem('difficult-words'));
        } else {
            thisPageCategory = categories.filter(category => category.hash === location.hash.slice(1))[0].cards;
        }
         
        const wordsMixedArray = thisPageCategory.sort(() => Math.random() - 0.5);
        console.log(wordsMixedArray);

        this.playWords(wordsMixedArray);
    }

    playGame() {
        
        this.startGameBtn = document.createElement('div');
        this.startGameBtn.classList.add('start-game-btn');
        this.startGameBtn.innerHTML = 'Start Game';
        this.mainWrapper.appendChild(this.startGameBtn);
        setTimeout(() => {this.startGameBtn.classList.add('btn-appear');}, 1000);

        this.startGameBtn.addEventListener('click', () => {
            if(this.startGameBtn.innerHTML === 'Start Game') {
               this.startGame();  
            }
        });
    }

    checkPlayingMode() {
        document.querySelector('.english-app').classList.toggle('app-train-mode');
        
        if(window.location.hash === '#main') {     
            const categoryCards = this.mainWrapper.querySelectorAll('.category-card-wrapper');
            
            categoryCards.forEach(card => {
                card.classList.toggle('category-card-train');
            });
        } 

        if(window.location.hash !== '#main' && window.location.hash !== '#statistics') {     
            const wordCards = this.mainWrapper.querySelectorAll('.word-card-wrapper');
            
            wordCards.forEach(card => {
                if(card.classList.contains('frozen-card')) {
                    card.classList.remove('frozen-card');
                }
                card.classList.toggle('word-card-train');
            });

            if(this.startGameBtn) {
                    this.startGameBtn.remove();
            }

            if(this.answersWrapper) {
                this.answersWrapper.remove();
            }

            if(localStorage.getItem('playing-mode') === 'true') {
               
                this.renderPlayingArea(location.hash.slice(1));
            } 
        } 
    }

    changeActiveLink() {
        const menuLinks = document.querySelectorAll('.menu-item_wrapper a');
        menuLinks.forEach(item => {
            item.classList.remove('active-link');
            if(window.location.hash === item.hash) {
                item.classList.add('active-link');
            }
        });
    }

    createMainPlayingArea() {
        this.mainWrapper = document.createElement('div');
        this.mainWrapper.classList.add('main-wrapper');

        this.renderPlayingArea('main');
        window.addEventListener('hashchange', () => {
            if(this.gameIsFinished === false) {
                this.gameIsFinished = true;
            }
            this.changeActiveLink();
            this.renderPlayingArea(location.hash.slice(1));
            
        });

        window.addEventListener('click', (e) => {
            
            if(e.target.className === 'toggle' || e.target.className === 'toggle-text') { 

                this.gameIsFinished = true;

                this.checkPlayingMode();
            }
        });
    }

    renderPlayingArea(pageHash) {

        if(this.mainWrapper) {
            this.mainWrapper.innerHTML = '';
        }

        let hash = pageHash;
        console.log(hash);

        categories.forEach(category => {

            if(category.hash === hash) {

                const pageTitle = document.createElement('h2');
                pageTitle.classList.add('page-title');
                pageTitle.textContent = category.title;
                this.mainWrapper.appendChild(pageTitle);

                if(category.hash !== 'statistics') {
                    this.cardsWrapper = document.createElement('div');
                    this.cardsWrapper.classList.add('cards-wrapper');
    
                    this.mainWrapper.appendChild(this.cardsWrapper);
                }
            }

            if(category.hash === hash && hash !== 'main' && hash !== 'statistics') {
                let wordsCardsInfo = [];

                if(hash === 'learn') {
                    (JSON.parse(localStorage.getItem('game-statistics'))).sort((a, b) => (b.wrong - a.wrong)).splice(0, 8).forEach(item => {
                        if(item.wrong !== 0) {
                            wordsCardsInfo.push(
                                {word: item.word,
                                translation: item.translation,
                                image: item.image,
                                audioSrc: item.audio});                            
                        }
                    });

                    console.log(wordsCardsInfo);
                    if(wordsCardsInfo.length === 0) {
                        this.cardsWrapper.remove();
                        const messageNoWords = document.createElement('div');
                        messageNoWords.classList.add('message-no-words');
                        messageNoWords.innerHTML = "You don't have any word to train!";
                        this.mainWrapper.appendChild(messageNoWords);
                    }
                    localStorage.setItem('difficult-words', JSON.stringify(wordsCardsInfo));
                } else {
                    wordsCardsInfo = category.cards;
                }

                wordsCardsInfo.forEach(wordCardInfo => {
                    this.wordCard = new WordCard(wordCardInfo).initWordCard();

                    if(localStorage.getItem('playing-mode') === 'true') {
                        this.wordCard.classList.add('word-card-train');
                    } 
                    this.cardsWrapper.appendChild(this.wordCard);
                });

                if(localStorage.getItem('playing-mode') === 'true' && wordsCardsInfo.length !== 0 ) {
                    this.playGame();
                } 
            }

            if(category.hash === hash && hash === 'main') {
                const categoriesArrayInfo = formDataForCategoriesCard();

                categoriesArrayInfo.forEach(categoryInfo => {

                    this.categoryCard = new CategoryCard(categoryInfo).initCategoryCard();

                    if(localStorage.getItem('playing-mode') === 'true') {
                        this.categoryCard.classList.add('category-card-train');
                    } 

                    this.categoryCard.addEventListener('click', (event) => {
                        const categoryHash = event.target.offsetParent.dataset.hash;

                        window.location.hash = categoryHash;
                    });
                    
                    this.cardsWrapper.appendChild(this.categoryCard);
                });
            }

            if(category.hash === hash && hash === 'statistics') {
                this.repeatWordsBtn = document.createElement('div');
                this.repeatWordsBtn.classList.add('repeat-words-btn');
                this.repeatWordsBtn.textContent = 'Repeat difficult words';

                this.resetResultsBtn = document.createElement('div');
                this.resetResultsBtn.classList.add('reset-results-btn');
                this.resetResultsBtn.textContent = 'Reset Results';

                this.mainWrapper.appendChild(this.repeatWordsBtn);
                this.mainWrapper.appendChild(this.resetResultsBtn);

                const statisticTable = new StatisticsTable().initStatisticsTable();

                this.mainWrapper.appendChild(statisticTable);

                this.resetResultsBtn.addEventListener('click', () => {
                    localStorage.removeItem('game-statistics');
                    this.renderPlayingArea('statistics');
                });

                this.repeatWordsBtn.addEventListener('click', () => {
                    window.location.hash = '#learn';
                });
            }
        });


    }

     initMainPlayingArea() {
         this.createMainPlayingArea();
         this.changeActiveLink();

         return this.mainWrapper;
     }
}

const mainPlayingArea = new MainPlayingArea().initMainPlayingArea();

export { mainPlayingArea };