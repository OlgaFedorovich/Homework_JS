
class CategoryCard {
    constructor( { title, image, hash }) {
        this.title = title;
        this.image = image;
        this.hash = hash;
    }

    createCategoryCard() {
        this.categoryCard = document.createElement('div');
        this.categoryCard.classList.add('category-card-wrapper');
        this.categoryCard.dataset.hash = this.hash;
        this.categoryCard.innerHTML = `
        <div class="cards-top-part">
        </div>
        <div class="cards-bottom-part">
            <h3>${this.title}</h3>
        </div>

        <img class="category-card-img" src="./assets/${this.image}" alt="category-photo">

        `;
    }

    changePlayingMode() {
        this.categoryCard.classList.toggle('category-card-train');
    }

     initCategoryCard() {
         this.createCategoryCard();

         return this.categoryCard;
     }
}



export default CategoryCard 