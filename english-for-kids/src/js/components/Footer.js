class Footer {

    createFooter() {
        this.footer = document.createElement('div');
        this.footer.classList.add('app_footer');

        this.footer.innerHTML = `
        <div class="footer_year">&copy;2020</div>
        <a class="footer_link" href="https://github.com/OlgaFedorovich">Authors Github Account</a>
        <a class="footer_logo" href="https://rs.school/js/"></a>
        `;
    }

     initFooter() {
         this.createFooter();

         return this.footer;
     }
}

const footer = new Footer().initFooter();

export { footer };