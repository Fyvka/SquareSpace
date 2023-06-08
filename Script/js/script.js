/*window.addEventListener("DOMContentLoaded", function () {
    "use strict";
}
*/

//Модальное окно
const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

openBtn.addEventListener("click", function () {
    modal.classList.add("opened")
})

closeBtn.addEventListener("click", function () {
    modal.classList.remove("opened")
})

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("opened")
    }
});


//Табы в модальном окне

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');

        tabsItems.forEach(function (item) {
            item.classList.remove('active');
        })

        currentTab.classList.add('active');
    })
});

//Бургер меню

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", function () {
    menu.classList.add('active');
    document.html.classList.add('lock')
})

menu.addEventListener("click", function (e) {
    if (e.target === menu) {
        menu.classList.remove('active')
        document.html.classList.remove('lock')
    }
});

//Аккордеон
/*
const accIcn = document.querySelectorAll('.acc__icon')
const accCnt = document.querySelectorAll('.acc__content')
const accBtn = document.querySelectorAll('.acc_button')

accBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let curBtn = item;
        let accId = curBtn.getAttribute("data-acc");
        let curAcc = document.querySelector(accId);

        accIcn.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        
        accCnt.forEach(function(item) {
            item.classList.remove('active');
        })

        currentTab.classList.add('active');
    })
})
*/

const acc = document.querySelectorAll(".acc");

acc.forEach(function (e) {
    e.addEventListener('click', function (e) {
        const self = e.currentTarget;
        const control = self.querySelector('.acc__control');
        const content = self.querySelector('.acc__content');

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
            //control.setAttribute('aria-expanded', true);
            //content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            //control.setAttribute('aria-expanded', false);
            //content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
        }
    })
})

//Слайдер

