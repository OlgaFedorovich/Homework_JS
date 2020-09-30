
const englishApp = function() {

    const dictionary = document.querySelector('.dictionary');
    const inputWordRu = document.querySelector('input[name="word_ru"]');
    const inputWordEn = document.querySelector('input[name="word_en"]');

    const getLocalStorage = _ => {
        const words = JSON.parse(window.localStorage.getItem('dictionary_words'));
        console.log(words);
        if(words != null) return words;
        return false;
    };

    const updateLocalStorage = _ => {
            const wordsJson = JSON.stringify(words);
            window.localStorage.setItem('dictionary_words', wordsJson);
    };

    const updateList = _ => {

        const list = dictionary.querySelector('.dictionary_list ul');
        list.innerHTML = "";

        words.forEach((word, index) => {

            const li = document.createElement('li');
            const wordElem = document.createElement('div');
            const wordBtns = document.createElement('div');
            const wordBtnVoice = document.createElement('button');
            const wordBtnDelete = document.createElement('button');
            const wordBtnEdit = document.createElement('button');
    
            wordElem.classList.add('word');
            wordBtns.classList.add('word_buttons');
            wordBtnVoice.classList.add('word_btn', 'word_btn_voice');
            wordBtnDelete.classList.add('word_btn', 'word_btn_delete');
            wordBtnEdit.classList.add('word_btn', 'word_btn_edit');

    
            li.appendChild(wordElem);
            li.appendChild(wordBtns);
    
            wordBtns.appendChild(wordBtnVoice);
            wordBtns.appendChild(wordBtnDelete);
            wordBtns.appendChild(wordBtnEdit);

            li.id = index;
            wordElem.innerHTML = `
            <div class="word_ru">${word.ru}</div>
            <div class="word_en">${word.en}</div>`;

            list.appendChild(li);

            wordBtnDelete.addEventListener('click', deleteWord);
            wordBtnVoice.addEventListener('click', voice);
            wordBtnEdit.addEventListener('click', edit);
        });
        
    };    

    const deleteWord = event => {
        const id = parseInt(event.target.closest('li').id);

        words.splice(id, 1);
        updateLocalStorage();
        updateList();

    }; 

    const voice = event => {
        const id = parseInt(event.target.closest('li').id);
        const word = words[id];

        let speech = new SpeechSynthesisUtterance(word.en);
        speech.voice = window.speechSynthesis.getVoices()[0];
        window.speechSynthesis.speak(speech);
    }; 

    const edit = event => {

        const id = parseInt(event.target.closest('li').id);
        const word = words[id];

        inputWordRu.value = word.ru;
        inputWordEn.value = word.en;

        const form = document.querySelector('form[name="word_add"]');

        let wordBtnSave = document.querySelector('.word_btn_save');

        if(!wordBtnSave) {
            wordBtnSave = document.createElement('button');
            wordBtnSave.classList.add('word_btn_save');
            wordBtnSave.innerHTML = "Save changes";
            form.appendChild(wordBtnSave);
        }

        wordBtnSave.dataset.id = id;

        wordBtnSave.addEventListener('click', function(event) {
            const id = event.target.dataset.id;
            console.log(words[id]);
            words[id].ru = inputWordRu.value;
            words[id].en = inputWordEn.value;

            updateLocalStorage();
        
            updateList();
        });
    };


    const add = event => {
        event.preventDefault();
        console.log('yes');

        const word = {
            ru: inputWordRu.value,
            en: inputWordEn.value,
        };

        words.push(word);

        updateLocalStorage();
        
        updateList();
    };

    const words = getLocalStorage() || [];

    if(words.length > 0) updateList();    

    dictionary.querySelector('.add').addEventListener('click', add);
    
};


window.addEventListener('load', function() {

    englishApp();

});