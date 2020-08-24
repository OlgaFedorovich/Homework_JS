
 

 function message(type, string) {
            
                let block = document.createElement('div');
                block.innerHTML = string;
                document.body.appendChild(block);
                block.className = type;
                setTimeout(() => block.remove(), 5000);
            }

    
        if (window.location.search == '?alert=form-error') message('error', 'Ошибка ввода');
        if (window.location.search == '?alert=form-sent') message('alert', 'Добро пожаловать!')
        if (window.location.search == '?alert=hello') message('msg', 'Вы получили новое сообщение! Проверьте Вашу почту!');





