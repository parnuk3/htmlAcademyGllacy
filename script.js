var bg = document.querySelector(".page-background");
var backgrounds = ["cream1-bg", "cream2-bg", "cream3-bg"];


var slider = function () {
    
    var slide = document.querySelector(".slider-btn:checked").dataset.bgs;
    for (var i = 0; i < backgrounds.length; i++) {
        bg.classList.remove(backgrounds[i]);
    }
    bg.classList.add(slide);
}

var dataCard = [
	{
		price: '310Р/кг',
    	description: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    	imgUrl: 'img/card1.jpg'	
	},
	{
		price: '380Р/кг',
    	description: 'Сливочно-кофейное с кусочками шоколада',
    	imgUrl: 'img/card2.jpg'
	},
	{
		price: '355Р/кг',
    	description: 'Сливочно-клубничное с присыпкой из белого шоколада',
    	imgUrl: 'img/card3.jpg'
	},
	{
		price: '415Р/кг',
    	description: 'Сливочное крем-брюле с карамельной подливкой',
    	imgUrl: 'img/card4.jpg'
	}
];



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
for (var i = 0; i < dataCard.length; i++) {
	var currentCard = dataCard[i];
	var cardItem = createCard (currentCard);
	cardList.appendChild(cardItem);
}



