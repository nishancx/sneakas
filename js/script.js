let nike = [{
    "name": "Nike Air Max 270",
    "price": "$149.99",
    "imgUrl": "img/nikeAirMax270.jpg"
}, {
    "name": "Nike Air Max 270 React",
    "price": "$179.99",
    "imgUrl": "img/nikeAirMax270React.jpg"
}, {
    "name": "Nike Air Zoom Pegasus",
    "price": "$199.99",
    "imgUrl": "img/nikeAirZoomPegasus.jpg"
}, {
    "name": "Nike Air Zoom Pegasus 36",
    "price": "$209.99",
    "imgUrl": "img/nikeAirZoomPegasus36.jpg"
}, {
    "name": "Nike Daybreak",
    "price": "$249.99",
    "imgUrl": "img/nikeDaybreak.jpg"
}];

function leftNavScrollUp() {
    let offset = document.querySelector('#leftNav').getBoundingClientRect().top;
    if (offset > -400 && offset < 200) {
        scrollLeftNav(0);
        return;
    }
    let translationValue = ((document.querySelector('#leftNav').style.transform).replace('translateY(', '')).replace('px)', '');
    translationValue = parseInt(translationValue);
    translationValue += (2 * getItemLength());
    scrollLeftNav(translationValue);
}

function leftNavScrollDown() {
    let bottom = document.querySelector('#leftNav').getBoundingClientRect().bottom;
    let bodyHeight = parseInt(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'));
    if ((bodyHeight < bottom) && (bottom < (bodyHeight + (3 * getItemLength())))) {
        scrollToBottom();
    } else if (bodyHeight < bottom) {
        let translationValue = ((document.querySelector('#leftNav').style.transform).replace('translateY(', '')).replace('px)', '');
        translationValue = parseInt(translationValue);
        if (translationValue) {
            translationValue -= (2 * getItemLength());
            scrollLeftNav(translationValue);
        } else {
            scrollLeftNav(-Math.abs(2 * getItemLength()));
        }
    }
}

function scrollToBottom() {
    let bodyHeight = parseInt(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'));
    let navHeight = parseInt(window.getComputedStyle(document.querySelector('#leftNav')).getPropertyValue('height'));
    let visible = bodyHeight - 140;
    let translationValue = navHeight - visible;
    document.querySelector('#leftNav').style.transform = `translateY(${-Math.abs(translationValue)}px)`;
}

function getItemLength() {
    let itemLength = window.getComputedStyle(document.querySelector('#leftNavItem1')).getPropertyValue('height');
    itemLength = (parseInt(itemLength) + 20);
    return itemLength;
}

function scrollLeftNav(scrollLength) {
    document.querySelector('#leftNav').style.transform = `translateY(${scrollLength}px)`;
}

function setSize(elem) {
    document.querySelector('.sizeActive').classList.remove('sizeActive');
    elem.classList.add('sizeActive');
    let bgSize = 56 + parseInt(elem.innerHTML);
    document.querySelector('#main').style.backgroundSize = bgSize + '%';
}

function selectShoe(elem, index) {
    document.querySelector('.itemActive').classList.remove('itemActive');
    elem.classList.add('itemActive');
    // console.log(elem.childNodes[1].src);
    document.querySelector('#main').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('#main').style.backgroundImage = `url(${elem.childNodes[1].src})`;
        document.querySelector('#main').style.opacity = 1;

        // document.querySelector('#main').style.backgroundImage = `url(${nike[index].imgUrl})`;

        document.querySelector('#shoeNameMain').innerHTML = nike[index].name;
        document.querySelector('#shoePriceMain').innerHTML = nike[index].price;
        setTimeout(() => {

            document.querySelector('#main').style.opacity = 1;
        }, 300);
    }, 200);
}

function changeQuantity(x){
    let quantityDisplay = document.querySelector('#quantityDisplay');
    let quantity = quantityDisplay.value;
    quantity = parseInt(quantity);
    if(quantity == 1 && x == -1){
        return;
    }
    quantityDisplay.value = (quantity + x);

}