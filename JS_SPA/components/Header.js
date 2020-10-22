import {nav} from './Nav.js';

class Header {

    create() {
        this.element = document.createElement('header');
        this.element.classList.add('header');

        this.element.innerHTML = `
        <div class="container">
        
        <div class="header_wrapper">
            <a class="logo" href="#"><img src="./../assets/world.png" alt="#"></a>
            <h1>Read news, learn more about the world!</h1>
        </div>
        
        ${nav.outerHTML}
        </div>`;
    }

    init() {
        this.create();

        return this.element;
    }
}
const header = new Header().init();

export {header};