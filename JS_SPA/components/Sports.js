const Sports = function() {
    const self = this;
    let dataNews = [];
    let dataNewsLocalSports;

    this.getData = async function() {
        await fetch('http://api.mediastack.com/v1/news?access_key=209034defb22e3ac64b99ce164b69203&categories=sports')
        .then(response => {
            return response.text();
        })
        .then(result => {
            dataNews = JSON.parse(result);
            localStorage.setItem('sports-news', result);
        });
    };

    this.getNews = function() {
        dataNewsLocalSports = JSON.parse(localStorage.getItem('sports-news')).data;
    };

    this.create = function() {
        this.getNews();
        //console.log(dataNewsLocalSports);
        this.element = document.createElement('div');
        this.element.classList.add('news_container');
        this.element.innerHTM = ``;

        let newsContent = '';

        dataNewsLocalSports.forEach(function(news) {

            newsContent += `
            <div class="news_item">
                <h2>${news.title}</h2>
                <div>${news.author}</div>
                <div>${news.description}</div>
                <div><a href="${news.url}">Source</a></div>
                <div>${news.published_at}</div>            
            </div>
            `
            //console.log(newsItem);
             
        });

        this.element.innerHTML = `${newsContent}`;
    };

    this.init = function() {

        if(dataNews.length == 0) {
            this.getData();
              
        } else {
          this.create(); 
        }

        return this.element;
    };
    
}

const sportNews = new Sports().init().init(); ;
console.log(sportNews);

export default sportNews;