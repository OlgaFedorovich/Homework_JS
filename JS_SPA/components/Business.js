const Business = function() {
    const self = this;
    let dataNews = [];
    let dataNewsLocalBusiness;

    this.getData = async function() {
        await fetch('http://api.mediastack.com/v1/news?access_key=209034defb22e3ac64b99ce164b69203&categories=business')
        .then(response => {
            return response.text();
        })
        .then(result => {
            dataNews = JSON.parse(result);
            localStorage.setItem('business-news', result);
            //this.getNews();
           self.getNews();
        });
    };

    this.getNews = function() {
        dataNewsLocalBusiness = JSON.parse(localStorage.getItem('business-news')).data;
    };

    this.create = function() {
        this.getNews();
        //console.log(dataNewsLocalSports);
        this.element = document.createElement('div');
        this.element.classList.add('news_container');
        this.element.innerHTM = ``;

        let newsContent = '';

        dataNewsLocalBusiness.forEach(function(news) {

            newsContent += `
            
                <div class="news_item">
                    <div class="news_item">
                    <h1 class="news_title">${news.title}</h1>
                    <img class="news_img" src="${news.image}">
                    <p class="news_descr">${news.description}</p>
                    <div class="news_link"><span>Source:</span><a href="${news.url}">${news.url}</a></div>
                    <div class="news_source">${news.source}</div>
                    <div class="news_date">${news.published_at.slice(0, 10)}</div>          
                </div>            
            

            `
             
        });

        this.element.innerHTML = `${newsContent}`;
    };

    this.init = function() {

        if(dataNews.length == 0) {
            this.getData();
        }

        this.create();
        return this.element;
    };
    
}

const businessNews = new Business().init();
console.log(businessNews);

export default businessNews;