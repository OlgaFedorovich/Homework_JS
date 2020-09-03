let House = function() {

    let housetype,
        rooms,
        floors,
        bathroom,
        balcony,
        parking;
    let self = this;
    
    this.collectInfo = function() {
        let buttonConfirm = document.querySelector('.button_confirm');
        buttonConfirm.addEventListener('click', function(event) {
            event.preventDefault();
            housetype = document.querySelector('#house').value;
            rooms =  document.querySelector('#rooms').value;
            floors = document.querySelector('#floors').value;
            bathroom = document.querySelector('#bathroom').value;
            balcony = document.querySelector('#balcony').value;
            parking = document.querySelector('#parking').value;

            self.showInfo(housetype, rooms, floors, bathroom, balcony, parking);
        });
    };

    this.showInfo = function(housetype, rooms, floors, bathroom, balcony, parking) {

        let houseDescr = document.querySelector('.house_description'),
            houseSection = document.querySelector('.dream_house .container');
        if (!houseDescr) { 
            houseDescr = document.createElement('div');
            houseDescr.classList.add('house_description');
            houseDescr.innerHTML = 'Тип Вашего жилья: ' + housetype +  '.<br /> В вашем жилье ' + rooms + ' комнаты и ' + floors + ' этажа. <br /> В вашем жилье есть ' + bathroom + '.<br />'  + (balcony == true ? ' Балкон есть.<br />' : ' Балкона нет.<br />') + (parking == true ? ' Парковка есть.<br />' : ' Парковки нет.<br />');
        
            houseSection.appendChild(houseDescr); }   
   };
};

let NewHouse = function() {
    House.apply(this, arguments);

    this.addQuestion = function() {

        let countryQuestion = document.createElement('div');
        countryQuestion.classList.add('question');
        countryQuestion.innerHTML =`
        <label for="country">В какой стране Вы бы хотели иметь собственое жилье? </label>
        <select id="country" name="country" required>
            <option value="Беларусь">Беларусь</option>
            <option value="Польша">Польша</option>
            <option value="США">США</option>
            <option value="Норвегия">Норвегия</option>
            <option value="Турция">Турция</option>
            <option value="Китай">Китай</option>
        </select>`;

        let form = document.querySelector('form');
        form.insertBefore(countryQuestion, document.querySelector('.button_confirm') );
    };

    let parentCollectInfo = this.collectInfo;
    this.collectInfo = function() {
        parentCollectInfo.call(this);
        this.addQuestion();
        parentCollectInfo();
        addCountryDescr(); 
    };

    let addCountryDescr = function(){
            document.querySelector('.button_confirm').addEventListener('click', function(event) {
                event.preventDefault();
                let country = document.querySelector('#country').value;
                let countryDescr = document.querySelector('.country_description');
                if (!countryDescr) { 
                    countryDescr = document.createElement('div');
                    countryDescr.classList.add('country_description');
                    countryDescr.innerHTML = 'Ваше жилье находится в стране: ' + country;
                
                    document.querySelector('.dream_house .container').appendChild(countryDescr);}
                   
            });
    };
            
};

let myhouse = new NewHouse();
myhouse.collectInfo();




