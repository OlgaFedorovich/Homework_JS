//import businessNews from './Business.js'
const data = JSON.parse(localStorage.getItem('data')) || [];

class Main{

    create() {
        this.element = document.createElement('main');
        this.element.classList.add('main');

        this.render();
        window.addEventListener('hashchange', _ => {
            this.render();
        });
    }

    render() {

        const self = this;
        
        let hash = location.hash.slice(1) || 'general';
        console.log(hash);
        data.forEach(page => {
            console.log(page.slug);

            if(page.slug == hash) {
                this.element.innerHTML = `
                <div class="container">                
                    <div class="news_item">
                    <h1 class="news_title">${page.title}</h1>
                    <img class="news_img" src="${page.image}">
                    <p class="news_descr">${page.description}</p>
                    <div class="news_link"><span>Source:</span><a href="${page.url}">${page.url}</a></div>
                    <div class="news_source">${page.source}</div>
                    <div class="news_date">${page.published_at.slice(0, 10)}</div>
                </div>
                </div>
                `
            }
            
            if(page.slug == hash && hash == 'business') {

                import('./Business.js')
                .then(function(result) {
                    const resdef = result.default;

                    self.element.appendChild(resdef);
                })    
            }

            if(page.slug == hash && hash == 'sports') {
                
                import('./Sports.js')
                .then(function(result) {
                    const resdef = result.default;
                    
                    self.element.appendChild(resdef);
                })
                .then(function(result) {
                    const resdef = result.default;
                    
                    self.element.appendChild(resdef);
                })
                
            }
        });
    }

    init() {
        this.create();

        return this.element;
    }
}
const main = new Main().init();

export {main};