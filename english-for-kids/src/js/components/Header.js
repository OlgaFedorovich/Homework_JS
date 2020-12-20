import {menu} from './Menu.js';
import {toggleButton} from './Toggle.js';

class Header {

    createHeader() {
        this.element = document.createElement('div');
        this.element.classList.add('app_header');

        this.element.appendChild(menu);

        const appTitle = document.createElement('h1');
        appTitle.classList.add('app-title');
        appTitle.textContent = 'English for Kids';
        this.element.appendChild(appTitle);
        this.element.appendChild(toggleButton);
        
    }

     initHeader() {
         this.createHeader();

         return this.element;
     }
}

const header = new Header().initHeader();

export { header };