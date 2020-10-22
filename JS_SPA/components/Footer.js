class Footer {

    create() {
        this.element = document.createElement('footer');
        this.element.classList.add('footer');
        this.element.classList.add('nav');

        this.element.innerHTML = `
        <div class="container">
            <ul>
                <li><a href="#general">general</a></li>
                <li><a href="#business">business</a></li>
                <li><a href="#entertainment">entertainment</a></li>
                <li><a href="#health">health</a></li>
                <li><a href="#science">science</a></li>
                <li><a href="#sports">sports</a></li>
                <li><a href="#technology">technology</a></li>
            </ul>        
        </div>
        `;
    }

    init() {
        this.create();

        return this.element;
    }
}
const footer = new Footer().init();

export {footer};