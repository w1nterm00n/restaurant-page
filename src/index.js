const content = document.getElementById('content');

const header = document.createElement('div');
content.appendChild(header);
header.classList.add('header');
//по дефолту загружается главная страница
import { homepageCreation } from './homepage.js';
import { menuCreation } from './menu.js';
import { contactsCreation } from './contacts.js';
let homepage = homepageCreation();
let menu;
let contacts;

//создание меню
const menuHomepage = document.createElement('a');
menuHomepage.textContent = 'Home Page';
header.appendChild(menuHomepage);
menuHomepage.setAttribute('href', '#');
menuHomepage.addEventListener("click", function(){
    cleaning();
    homepage = homepageCreation();
})

const menuMenu = document.createElement('a');
menuMenu.textContent = 'Menu';
header.appendChild(menuMenu);
menuMenu.setAttribute('href', '#');
menuMenu.addEventListener("click", function(){
    cleaning();
    menu = menuCreation();
})

const menuContacts = document.createElement('a');
menuContacts.textContent = 'Contacts';
header.appendChild(menuContacts);
menuContacts.setAttribute('href', '#');
menuContacts.addEventListener("click", function(){
    cleaning();
    contacts = contactsCreation();
})
///создание меню закончилось



function cleaning () {

    if (content.contains(homepage) == true) {
        content.removeChild(homepage);
    } else if (content.contains(menu) == true) {
        content.removeChild(menu);
    } else if (content.contains(contacts) == true) {
        content.removeChild(contacts);
    }
}

///
const footer = document.createElement('footer');
footer.textContent = '© All rights reserved';
content.appendChild(footer);


import '/home/daria/repos/restaurant-page/src/styles/style.css'
