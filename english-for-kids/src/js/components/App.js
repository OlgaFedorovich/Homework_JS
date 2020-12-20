import { header } from './Header.js';
import { mainPlayingArea } from './Main.js';
import StatisticsTable from './StatisticsTable.js';
import { footer } from './Footer.js';



class App {
    createApp() {
        this.mainElementApp = document.createElement('div');
        this.mainElementApp.classList.add('english-app');

        this.appContainer = document.createElement('div');
        this.appContainer.classList.add('container');

        window.location.hash = '#main';
    }    

    renderApp() {

        this.appContainer.appendChild(header);
        this.appContainer.appendChild(mainPlayingArea);
        this.appContainer.appendChild(footer);
        
        this.mainElementApp.appendChild(this.appContainer);

        document.body.appendChild(this.mainElementApp);
    }

    initApp() {
        new StatisticsTable().placeDataToLocalStorage();
       this.createApp();
       this.renderApp();
    }
}

export default App;