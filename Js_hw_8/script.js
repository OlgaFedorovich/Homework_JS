function checkUrl(urlParametrs) { 
    function message(type, string) {

        if (type == 'error') {
            let errorMessage = document.createElement('div');
            errorMessage.innerHTML = string;
            errorMessage.classList.add('error');
            document.body.appendChild(errorMessage);
        }

        if (type == 'alert') {
            let alertMessage = document.createElement('div');
            alertMessage.innerHTML = string;
            alertMessage.classList.add('alert');
            document.body.appendChild(alertMessage);
        }

        if (type == 'msg') {
            let msgMessage = document.createElement('div');
            msgMessage.innerHTML = string;
            msgMessage.classList.add('msg');
            document.body.appendChild(msgMessage);
        }

        let style = document.createElement('style');
        style.innerHTML = `
        div {
            animation: anim;
            animation-duration: 5s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: 2s
            text-align: center;
            width: 300px;
            position: absolute;
            top: 150px;
            left: 50%;
            transform: translateX(-50%);
            box-sizing: boreder-box;
            padding: 50px;
        }

        @keyframes anim {
            from {opacity: 1;}
            to {opacity: 0;}
        }

        .error {
            background-color: brown;
            color: black;
            font-size: 35px;
            border-radius: 30px;
            box-shadow: 0px 0px 20px #000;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;

        }
        .alert {
        
            text-transform: uppercase;
            text-shadow: #fff 2px 2px 4px;
            background-color: rgb(194, 230, 142);
            color: rgb(59, 6, 97);
            border-radius: 20px;
            font-size: 25px;
            font-family: cursive;
            border: 2px solid #1a0a25;
        }
        .msg {
            background-color: khaki;
            border: 2px dashed rgb(80, 77, 52);
            color: rgb(77, 74, 50);
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-size: 30px;
            border-radius: 10px;
            width: 450px;
        }`;
        document.head.appendChild(style);
    }
        if (urlParametrs == '?alert=form-error') message('error', 'Ошибка ввода');
        else if (urlParametrs == '?alert=form-sent') message('alert', 'Добро пожаловать на наш сайт!');
        else if (urlParametrs == '?alert=hello') message('msg', 'Вы получили новое сообщение! Проверьте Вашу почту!');
}

checkUrl(window.location.search); //один из параметров: ?alert=form-error, ?alert=form-sent, ?alert=hello


