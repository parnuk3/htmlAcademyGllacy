var bg = document.querySelector(".contain");
var backgrounds = ["bg1", "bg2", "bg3"];


var slider = function () {
    
    var slide = document.querySelector(".slider-btn:checked").dataset.bgs;
    for (var i = 0; i < backgrounds.length; i++) {
        bg.classList.remove(backgrounds[i]);
    }
    bg.classList.add(slide);
}

var product1 = {
    price: '310Р/кг',
    description: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    imgUrl: 'img/raspberries.jpg'
}

var makeElement = function (tagName, className, textContent) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

var createCard = function (product) {
    var listItem = makeElement ('li', 'hot-offers-item');
    var pictures = makeElement ('img', 'hot-offers-image');
    pictures.src = product.imgUrl;
    pictures.alt =  product.description;
    listItem.appendChild(pictures);
    var hit = makeElement ('img', 'hot-offers-hit');
    hit.src = '#';
    hit.alt =  'Хит';
    listItem.appendChild(hit);
    var description = makeElement ('p', 'hot-offers-description', product.description);
    listItem.appendChild(description);
    var price = makeElement ('span', 'hot-offers-price', product.price);
    listItem.appendChild(price);
    
    return listItem;
}

var cardList = document.querySelector('.hot-offers');
var cardItem = createCard (product1);
cardList.appendChild(cardItem);


