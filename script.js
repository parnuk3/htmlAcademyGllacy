var bg = document.querySelector(".page-background");
var backgrounds = ["cream1-bg", "cream2-bg", "cream3-bg"];


var slider = function () {
    
    var slide = document.querySelector(".slider-btn:checked").dataset.bgs;
    for (var i = 0; i < backgrounds.length; i++) {
        bg.classList.remove(backgrounds[i]);
    }
    bg.classList.add(slide);
}

var dataCardHit = [
	{
		price: '310₽',
    	description: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    	imgUrl: 'img/card1.jpg'	
	},
	{
		price: '380₽',
    	description: 'Сливочно-кофейное с кусочками шоколада',
    	imgUrl: 'img/card2.jpg'
	},
	{
		price: '355₽',
    	description: 'Сливочно-клубничное с присыпкой из белого шоколада',
    	imgUrl: 'img/card3.jpg'
	},
	{
		price: '415₽',
    	description: 'Сливочное крем-брюле с карамельной подливкой',
    	imgUrl: 'img/card4.jpg'
	}
    
];

var dataCard = [
	{
		price: '310₽',
    	description: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    	imgUrl: 'img/card1.jpg'	
	},
	{
		price: '380₽',
    	description: 'Сливочно-кофейное с кусочками шоколада',
    	imgUrl: 'img/card2.jpg'
	},
	{
		price: '355₽',
    	description: 'Сливочно-клубничное с присыпкой из белого шоколада',
    	imgUrl: 'img/card3.jpg'
	},
	{
		price: '415₽',
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

var createCard = function (product, isHit) {
    var listItem = makeElement ('li', 'product-item');
    var pictures = makeElement ('img', 'product-image');
    pictures.src = product.imgUrl;
    pictures.alt =  product.description;
    listItem.appendChild(pictures);
    if (isHit) {
        var hit = makeElement ('img', 'product-hit');
        hit.src = 'img/hit.png';
        hit.alt =  'Хит';
        listItem.appendChild(hit);
    }
    var description = makeElement ('p', 'product-description', product.description);
    listItem.appendChild(description);
    var price = makeElement ('span', 'product-price', product.price);
    var priceUnits = makeElement ('span', 'product-price-units', '/кг');
    price.appendChild(priceUnits);
    listItem.appendChild(price);
    
    return listItem;
}

var renderProducts = function (productsArray, parentObject, isHit) {
    
    var cardList = document.querySelector(parentObject);
    for (var i = 0; i < productsArray.length; i++) {
        var currentCard = productsArray[i];
        var cardItem = createCard (currentCard, isHit);
        cardList.appendChild(cardItem);
    }
}





