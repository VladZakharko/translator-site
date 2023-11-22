let semanticCore = {
    logo: {
        "ua": `Лого`,
        "en": `Logo`,
        "pl": `Logo`,
    },
    home: {
        "ua": `Головна`,
        "en": `Home`,
        "pl": `Strona główna`,
},
    about: {
        "ua": `Про нас`,
        "en":  `About`,
        "pl":  `O nas`,
    },
    contact:{
        "ua": `Контакти`,
        "en": `contact`,
        "pl": `kontakt`,
    },
};

let allLang = ['en', 'ua', 'pl'];
let lang = 'en';

ua.onclick = function () {
    lang = `ua`;
    changeURL();
}
pl.onclick = function () {
    lang = `pl`;
    changeURL();
}
en.onclick = function () {
    lang = `en`;
    changeURL();
}

function changeURL() {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = (window.location.hash).substring(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for(let key in semanticCore){
        document.querySelector(`.language-`+key).innerText = semanticCore[key][hash];
    }
}
changeLanguage();