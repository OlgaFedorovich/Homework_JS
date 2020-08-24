let Holiday = function() {
    this.getInfo = function() {
        this.travellersName = prompt('Как вас зовут?', 'Сергей');
        alert(this.travellersName + ' , добро пожаловать в наше агентсво по подбору и расчету цены туристической путевки!');
        this.age = +prompt('Введите Ваш возраст');
        this.holidayPlace = prompt('Введите название страны, куда Вы хотите поехать в путешествие', 'Турция');
        this.travelAlone = confirm('Вы поедете в отпуск один?');
        if (this.travelAlone == false) {
            this.numOfTravellers = +prompt('Сколько человек поедет в путешествие (введите число}');
        } else this.numOfTravellers = 1;
        if (isNaN(this.numOfTravellers)) alert('Число введено неверно!');
         else this.calcHolidayPrice();
    };

    this.calcHolidayPrice = function () {
        this.flightPrice = 400;
        this.holidayDaysNum = +prompt('На сколько дней вы хотите отправиться в путешествие? (Введите число)');
        if (isNaN(this.holidayDaysNum)) alert('Число введено неверно!');
        let answer = prompt('Если Вы предпочитаете бюджетный отдых без питания, то введите 1.\nЕсли вы предпочитаете отдых в 5-ти звездочном отеле с системой "ВСЕ ВКЛЮЧЕНО", то введите 2. ');
        if (answer == 1) {
            this.HolidayType = 'Budget tourist';
            this.priceForDay = 30;
        } else if (answer == 2) {
            this.HolidayType = 'All inslusive';
            this.priceForDay = 70;
        } else alert('Ошибка ввода');
        this.holidayPrice = (this.numOfTravellers * this.holidayDaysNum * this.priceForDay) + this.flightPrice;
        this.showFinalResult();
    };

    this.showFinalResult = function() {
        if (this.age < 18 && this.numOfTravellers == 1) {
            alert('Ты еще слишком молод, чтобы путешествовать один! Возьми с собой взрослого или приходи, когда повзрослеешь!');
        } else {
            alert('Мы рассчитали стоимость Вашей путевки с учетом авиаперелета и она составляет: ' + this.holidayPrice + 'долларов.' );
            console.log('Вас зовут ' +  this.travellersName + '. Вам ' + this.age + ' лет. Вы хотите поехать в страну: ' + this.holidayPlace);
            console.log('В путешествие поедет ' + this.numOfTravellers + ' человек на ' + this.holidayDaysNum + ' дней. Ваш тип отдыха: ' + this.HolidayType);
            console.log('Мы рассчитали стоимость Вашей путевки с учетом авиаперелета и она составляет: ' + this.holidayPrice + 'долларов.' );
        }
    };
};


let NewHoliday = function() {
    Holiday.apply(this);
    let parentShowFinalResult = this.showFinalResult;
    document.body.classList.add('body');

    this.showFinalResult = function() {
        parentShowFinalResult.call(this);
        let message = document.createElement('div');
        message.classList.add('message');
        if (this.age < 18 && this.numOfTravellers == 1) {
            message.innerHTML = 'Ты еще слишком молод, чтобы путешествовать один! Возьми с собой взрослого или приходи, когда повзрослеешь!';
            document.body.appendChild(message); }
            else {  
                message.innerHTML = ` Вас зовут ${this.travellersName}.
                 Вам ${this.age} лет. Вы хотите поехать в страну: ${this.holidayPlace}. 
                 В путешествие c Вами поедет ${this.numOfTravellers} человек на ${this.holidayDaysNum} дней. 
                 Ваш тип отдыха: ${this.HolidayType}. 
                 Мы рассчитали стоимость Вашей путевки с учетом авиаперелета и она составляет: <strong>${this.holidayPrice}</strong> долларов. `; 
                document.body.appendChild(message);
            }
            this.addButtons();
    };

    this.addButtons = function() {
        if(document.body.querySelector('.message')) {

            let button = document.createElement('button');
            button.classList.add('button');
            button.innerHTML = 'Вы подтверждаете введенные данные?';
            document.body.appendChild(button);

            let button2 = document.createElement('button');
            button2.classList.add('button2');
            button2.innerHTML = 'Вы НЕ подтверждаете введенные данные?';
            document.body.appendChild(button2);

            button.addEventListener('click', function() {
               document.body.innerHTML = '';
               document.body.classList.add('body2');
               let message2 = document.createElement('div');
               message2.innerHTML = 'Приятного путешествия!';
               message2.classList.add('message2');
               document.body.appendChild(message2);
            });
            
            button2.addEventListener('click', function() {
                document.body.innerHTML = '';
                alert('Перезагрузите страницу!');
             });
        }
    };

};

let yourHoliday = new NewHoliday();
yourHoliday.getInfo();
