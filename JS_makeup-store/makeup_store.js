const createStore = function() {

    let brand, type, minPrice, maxPrice, rating;

    const collectSearchInfo = function() {
        if(document.querySelector('[name="brand"]').value !== "All brands") {
            brand = document.querySelector('[name="brand"]').value ;  
          } else brand = false;

        if(document.querySelector('[name="type"]').value !== "All types") {
          type = document.querySelector('[name="type"]').value ;  
        } else type = false;

        minPrice = document.querySelector('[name="min-price"]').value;
        maxPrice = document.querySelector('[name="max-price"]').value;
        rating = document.querySelector('[name="rating"]').value;
        getProductsInfo();
    };


    const getProductsInfo = async function() {

        let url = 'http://makeup-api.herokuapp.com/api/v1/products.json?';

        if(brand) url += `brand=${brand}&`;
        if(type) url += `product_type=${type}&`;
        if(minPrice) url += `price_greater_than=${minPrice}&`;
        if(maxPrice) url += `price_less_than=${maxPrice}&`;
        if(rating>=0) url += `rating_greater_than=${rating}`;

        await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            showProductsInfo(result);
        });
    };

    const getProductsTagInfo = async function() {

        let url = 'http://makeup-api.herokuapp.com/api/v1/products.json?';

        if(tagName) url += `product_tags=${tagName}`;

        await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            showProductsInfo(result);
        });
    };

    const showProductsInfo = function(products) {

        const productsArea = document.querySelector('.products-wrapper');
        productsArea.innerHTML ='';

        if(products.length == 0) {
           const message = document.createElement('div');
           message.classList.add('message');
           message.innerHTML = "There is no products that match your search. Try again!";
           productsArea.appendChild(message);
        }

        products.forEach(product => {

            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
            <img class="product-img" src="${product.image_link}">
            <div class="product-name">${product.name}</div>
            <hr class="line">
            <div class="product-price"><span>Price:</span>   <span class="price-item">${product.price} </span><strong>$</strong></div>
            <div class="product-category"><span>Category: </span>${product.category}</div>
            <div class="product-rating"><span>Rating: </span>${product.rating} &#9733;</div>
            `;

            if(product.product_colors.length >  0) {
                const colors = document.createElement('div');
                colors.classList.add('colors-wrapper');
                productItem.appendChild(colors);
                product.product_colors.forEach(color => {
                    const colorItem = document.createElement('div');
                    colorItem.classList.add('color-item');
                    colorItem.style.background = color.hex_value;
                    colors.appendChild(colorItem);
                });
            }

            const description = document.createElement('div');
            description.classList.add('product-descr');
            description.innerHTML = `Learn more &#8592;`;

            const descriptionHidden = document.createElement('div');
            descriptionHidden.classList.add('hidden_descr');

            descriptionHidden.innerHTML = product.description;

            const close = document.createElement('div');
            close.classList.add('close');
            close.innerHTML = `&#10006;`;

            descriptionHidden.appendChild(close);
            description.appendChild(descriptionHidden);

            productItem.appendChild(description);

            productsArea.appendChild(productItem);
        });

        showPopUp();

    };

    const closePopUp = function() {
        const closeBtns = document.querySelectorAll('.close');
        const hiddenDescr = document.querySelectorAll('.hidden_descr');
        console.log(closeBtns);
        console.log(hiddenDescr);

        closeBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {   
                console.log(index);         
                hiddenDescr[index].classList.toggle('active');
            });
        });   
    };

    const showPopUp = function() {
        const learnMoreBtns = document.querySelectorAll('.product-descr');
        const hiddenDescr = document.querySelectorAll('.hidden_descr');
        
        learnMoreBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                
                hiddenDescr[index].classList.toggle('active');
            });
        });
    };

    const searchBtn = document.querySelector('.submit-button');
    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        collectSearchInfo();
    });

    const tagBtns = document.querySelectorAll('.tag');
    let tagName;

    tagBtns.forEach(tag => {
        tag.addEventListener('click', function() {
            tagName = this.innerHTML;
            getProductsTagInfo();
        });
    });
    
};