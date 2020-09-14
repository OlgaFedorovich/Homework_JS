const playGameFindPairs = function() {

    const buttonStart = document.querySelector('.button_start');
    
    buttonStart.addEventListener('click', function(){
        this.style.display = 'none';
        createGame();
        playGame();
    });

    const createGame = function() {
        let playingSpace  = document.createElement('div');
        playingSpace.classList.add('playing_space');
        document.querySelector('.container').appendChild(playingSpace);

        let cardsArray = ['cherry', 'koala', 'oranges', 'pear', 'rabbit', 'sakura', 'dog', 'squirell', 'rose', 'cherry', 'koala', 'oranges', 'pear', 'rabbit', 'sakura', 'dog', 'squirell', 'rose'];
 
        let cardsArrayLength = cardsArray.length;

        const createCard = function(cardIndex) {
            let imageName = cardsArray[cardIndex];

            let card = document.createElement('div');

            card.classList.add('card');
            card.dataset.name = imageName;

            card.innerHTML = `
                <div class="card_item card_upper_side" style="background: url(img/upper-card.jpg); background-size: 100% auto; background-position-y: 50%" ></div>
                <div class = "card_item card_down_side" style="background: url(img/${imageName}.jpg); background-size: auto 100%; background-position-x: 50%"></div>
            `;

            playingSpace.appendChild(card);

            
        };

        for(let i = 1; i <= 18; i++) {

            const getRandomCard = function(min, max) {
                return Math.random() * (max - min) + min;
            };

            let cardIndex = parseInt(getRandomCard(0, cardsArrayLength-1));
            
            createCard(cardIndex);

            cardsArray.splice(cardIndex, 1);
            cardsArrayLength = cardsArray.length;
        }
            
    };

    const playGame = function() {
        
        let cards = document.querySelectorAll('.card');
        let openCards;

        for(let i = 0; i <= (cards.length - 1); i++) {
                   
            cards[i].addEventListener('click', function() {

                openCards = document.querySelectorAll('.flip');
                  
                if(openCards.length < 2 && this.dataset.status != 'opened') {

                    this.classList.add('flip'); 
                    
                    openCards = document.querySelectorAll('.flip');

                    if(openCards[0].dataset.name == openCards[1].dataset.name) {
                        openCards.forEach(function(opencard) {
                            opencard.dataset.status = 'opened';
                            opencard.classList.add('opened');
                            setTimeout(function() {
                                opencard.classList.remove('flip');  
                            }, 1000);                        
                        });
                    }

                    if(openCards[0].dataset.name !== openCards[1].dataset.name) {
                        openCards.forEach(function(opencard) {
                            setTimeout(function() {
                                opencard.classList.remove('flip');  
                            }, 1000);
                        });
                    }                       
                }
                                                        
                let openedCardsArray = document.querySelectorAll('.opened');

                if(openedCardsArray.length == cards.length) {
                    setTimeout(function() {
                       showCongratulations(); 
                    }, 1000);
                }
            });

            const showCongratulations = function() {
                let overlay = document.createElement('div');
                overlay.classList.add('congratulations_overlay');

                overlay.innerHTML = `
                <div class="congratulations_text">
                    Поздравляем! </br>
                    Вы победили!!!
                </div>
                <button class="button_play-again">
                    Играть еще раз
                </button>`;

                document.body.appendChild(overlay);

                let buttonPlayAgain = document.querySelector('.button_play-again');
                buttonPlayAgain.addEventListener('click', function() {
                    document.location.reload();
                });
            };
        }
    };
};

playGameFindPairs();