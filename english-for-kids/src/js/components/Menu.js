import { categories } from './../data/constants.js';

class Menu {

    createMenu() {
        this.mainMenuElement = document.createElement('nav');
        this.mainMenuElement.classList.add('app_menu');
        
        this.menuList = document.createElement('ul');
        
        categories.forEach(category => {

            const menuItem = document.createElement('li');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
            <div class="menu-item_wrapper">
                <img src="./assets/icons/${category.hash}.png">
                <a href="#${category.hash}">${category.title}</a>
            </div>
            `;

            this.menuList.appendChild(menuItem);
        });

        this.mainMenuElement.appendChild(this.menuList);

        window.addEventListener ('click', (e) => {
            console.dir(e.target.className);
            if (e.target.className === 'app_menu') {
                this.menuList.classList.add('app_menu-opened');
                this.mainMenuElement.classList.add('hide-menu-icon');
                
                this.closeBtn = document.createElement('div');
                this.closeBtn.classList.add('app_menu-close');
                this.menuList.appendChild(this.closeBtn);
            } else if(
                e.target.className !== 'app_menu-opened' && this.menuList.classList.contains('app_menu-opened')) {
                    this.closeBtn.remove();
                    this.menuList.classList.remove('app_menu-opened');
                    this.mainMenuElement.classList.remove('hide-menu-icon');
                }
        });
    }

     initMenu() {
         this.createMenu();
         return this.mainMenuElement;
     }
}

const menu = new Menu().initMenu();

export { menu };