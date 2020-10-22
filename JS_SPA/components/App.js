import {header} from './Header.js';
import {main} from './Main.js';
import {footer} from './Footer.js';

class App {

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('app');

    }

    render() {
        
        this.element.appendChild(header);
        this.element.appendChild(main);
        this.element.appendChild(footer);
        document.body.appendChild(this.element);
    }

    init() {
        const self = this;
        import('./Head.js')
        .then(function(module) {
            module.title.innerHTML = 'SPA';

            import('./Data.js')
            .then(function(result) {
                
                self.create();
                self.render();
            });

        })
        .catch(function() {
            //errors
        })
    }
}

export default new App().init();