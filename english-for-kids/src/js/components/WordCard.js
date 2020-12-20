//import sound from './../../assets/audio';

class WordCard {
    constructor( { word, translation, image, audioSrc }) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audio = audioSrc;
    }

    rotateCard() {
        
        this.wordCard.classList.add('rotate-card');
        this.wordCard.addEventListener('mouseleave', () => {
            this.wordCard.classList.remove('rotate-card');
        });
    }

    playAudio() {
        console.log(this.audio);
        const audio = new Audio();
        audio.src = `./assets/${this.audio}`;
        audio.load();
        
        audio.currentTime = 0;
        audio.play();
    }

    createWordCard() {
 
        this.wordCard = document.createElement('div');
        this.wordCard.classList.add('word-card-wrapper');
        this.wordCard.dataset.word = this.word;
        this.wordCard.innerHTML = `
            <div class="word-card-inner">
                <div class="word-card-front">
                    <img class="word-card-img" src="./assets/${this.image}" alt="photo">
                    <div class="word-card-descr">${this.word}</div>
                    <button class="rotate-btn"></button>
                </div>
                <div class="word-card-back">
                    <img class="word-card-img" src="./assets/${this.image}" alt="photo">
                    <div class="word-card-descr">${this.translation}</div>
                </div>
            </div>
        `;

        this.wordCard.addEventListener('click', (e) => {
            if (localStorage.getItem('playing-mode') === 'false') {

                let statisticsInfo = JSON.parse(localStorage.getItem('game-statistics'));
                console.log(e.target.closest('.word-card-wrapper').dataset.word);
                console.log(location.hash.slice(1));

                
                statisticsInfo.map(item => {
                    console.log('map');
                    console.log()

                    if(item.word === e.target.closest('.word-card-wrapper').dataset.word && item.hash === location.hash.slice(1)) {
                        
                        item.clicks++;
                    }
                });

                localStorage.setItem('game-statistics', JSON.stringify(statisticsInfo));
                
                if(e.target.className === 'rotate-btn') {
                    this.rotateCard();
                } else if(localStorage.getItem('playing-mode') === 'false') {
                    this.playAudio();
                }
            }
        });

    }

    initWordCard() {
        this.createWordCard();
        return this.wordCard;
    }
}



export default WordCard 