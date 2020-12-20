

class ToggleButton{
    constructor() {
        this.playingMode = false;

        localStorage.setItem('playing-mode', this.playingMode);
    }

    changePlayingMode() {
        
        if (!this.playingMode) {
            this.toggleContainer.classList.add('train-mode');
            this.toggleContainer.classList.remove('play-mode');

        } else {
            this.toggleContainer.classList.add('play-mode');
            this.toggleContainer.classList.remove('train-mode');
        }

        this.playingMode = !this.playingMode;
        localStorage.setItem('playing-mode', this.playingMode);
        console.log(this.playingMode);
        
    }

    createToggleButton() {

        this.toggleButtonElement = document.createElement('div');
        this.toggleButtonElement.classList.add('toggle-wrapper');

        this.toggleButtonElement.innerHTML = `
        <div class="inner-container">
            <div class="toggle">
                <p class="toggle-text">Play</p>
            </div>
            <div class="toggle">
                <p class="toggle-text">Train</p>
            </div>
        </div>
        `;

        this.toggleContainer = document.createElement('div');
        this.toggleContainer.classList.add('toggle-container', 'inner-container');
        this.toggleContainer.innerHTML = `
        <div class="toggle">
                    <p class="toggle-text">Play</p>
                </div>
                <div class="toggle">
                    <p class="toggle-text">Train</p>
                </div>
        `;

        this.toggleButtonElement.addEventListener('click', () => {
            this.changePlayingMode();
        });


        this.toggleButtonElement.appendChild(this.toggleContainer);
    }

    initToggleButton() {
        this.createToggleButton();
        return this.toggleButtonElement;
    }
}

const toggleButton = new ToggleButton().initToggleButton();

export { toggleButton };