//слайдер

var slider = document.querySelector(".promo-slider");
var sliderItem = document.querySelectorAll(".promo-item");
var bg = document.querySelector(".common-bg");
var backgrounds = ["cream1-bg", "cream2-bg", "cream3-bg"];
var promoSliderBtns = document.createElement("div");



var sliderChange = function () {
    
}

promoSliderBtns.classList.add("promo-slider-btns"); //создание контейнера для кнопок слайдера

slider.classList.remove("not-js"); //включение стилей js
slider.classList.add("js-ok");
for (var i = 1; i < sliderItem.length; i++) {
	sliderItem[i].classList.add("visually-hidden")
}

var makeRadioButton = function (name, id, isChecked) {
	var button = document.createElement('input');
	button.setAttribute('type', 'radio');
	button.setAttribute('name', name);
	button.setAttribute('id', id);
	if (isChecked) {
		button.checked = true;
	}
	return button;
};

var makeRadioLabel = function (forId, text) {
	var label = document.createElement('label');
	var span = document.createElement('span')
	label.setAttribute('for', forId);
	
	span.textContent = text;
	span.classList.add('visually-hidden');
	label.appendChild(span);
	
	return label;
}

var sliderButton1 = makeRadioButton("sliderButton", "sliderButton1", true);
var sliderButtonLabel1 = makeRadioLabel("sliderButton1", "1");
var sliderButton2 = makeRadioButton("sliderButton", "sliderButton2", false);
var sliderButtonLabel2 = makeRadioLabel("sliderButton2", "2");
var sliderButton3 = makeRadioButton("sliderButton", "sliderButton3", false);
var sliderButtonLabel3 = makeRadioLabel("sliderButton3", "3");

slider.appendChild(promoSliderBtns);

promoSliderBtns.appendChild(sliderButton1);
promoSliderBtns.appendChild(sliderButtonLabel1);
promoSliderBtns.appendChild(sliderButton2);
promoSliderBtns.appendChild(sliderButtonLabel2);
promoSliderBtns.appendChild(sliderButton3);
promoSliderBtns.appendChild(sliderButtonLabel3);


/*

var makeElement = function (tagName, className, textContent) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

var dataCard = [
];

var createCard = function (product, isHit) {
    var listItem = makeElement ('li', 'product-item');
    var pictures = makeElement ('img', 'product-image');
    pictures.src = product.imgUrl;
    pictures.alt =  product.description;
    listItem.appendChild(pictures);
	listItem.classList.remove("product-hit");
    if (product.isHit) {
        listItem.classList.add("product-hit");
    }
    var description = makeElement ('p', 'product-description', product.description);
    listItem.appendChild(description);
    var price = makeElement ('span', 'product-price', product.price);
    var priceUnits = makeElement ('span', 'product-price-units', '/кг');
    price.appendChild(priceUnits);
    listItem.appendChild(price);
    
    return listItem;
}

var renderProducts = function (productsArray, parentObject) {
    
    var cardList = document.querySelector(parentObject);
    for (var i = 0; i < productsArray.length; i++) {
        var currentCard = productsArray[i];
        var cardItem = createCard (currentCard);
        cardList.appendChild(cardItem);
    }
}

var hitList = document.querySelector('.hot-offers');
if (hitList) {
	var dataCardHit = [];
	for (var i = 0; i < dataCard.length; i++) {
		if(dataCard[i].isHit) {
			dataCardHit.push(dataCard[i]);
		}
	}
	renderProducts(dataCardHit, '.hot-offers');
}

var productList = document.querySelector('.catalog-products');
if (productList) {
	renderProducts(dataCard, '.catalog-products');
}
*/
/*модальное окно поиска*/
/*
var search = document.querySelector(".main-search");
var searchPopup = document.querySelector(".modal-search");
var searchField = searchPopup.querySelector("input");



search.addEventListener('click', function(event) {
	event.preventDefault();
	searchPopup.classList.toggle("modal-show");
	search.classList.toggle("active");
	searchField.focus();
});



var login = document.querySelector(".header-login");
var loginPopup = document.querySelector(".modal-login");
var loginField = loginPopup.querySelector('[name="login"]');
var passwordField = loginPopup.querySelector('[name="password"]');
var userLogin = localStorage.getItem("userLogin");
var loginForm = loginPopup.querySelector('form');

login.addEventListener('click', function(event) {
	event.preventDefault();
	loginPopup.classList.remove("modal-error");
	loginPopup.classList.toggle("modal-show");
	login.classList.toggle("active");
	if(userLogin) {
		loginField.value = userLogin;
		passwordField.focus();
	} else {
		loginField.focus();
	}
});

loginForm.addEventListener("submit", function(event) {
	
	if (!loginField.value || !passwordField.value) {
		event.preventDefault();
		loginPopup.classList.add("modal-error");
		
	} else {
		localStorage.setItem("userLogin", loginField.value);
	}
});







window.addEventListener("keydown", function(event){
	if(event.keyCode === 27) {
		if (searchPopup.classList.contains("modal-show")) {
			searchPopup.classList.remove("modal-show");
			search.classList.remove("active");
		} else if (loginPopup.classList.contains("modal-show")) {
			loginPopup.classList.remove("modal-show");
			login.classList.remove("active");
		}
	}
});
*/