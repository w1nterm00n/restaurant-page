const contactsCreation = function() {
    const contacts = document.createElement('div');
    content.appendChild(contacts);
    contacts.classList.add('contacts');
    ////
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Contacts';
    contacts.appendChild(h1);
    
    var p = document.createElement('p');
    p.textContent = 'We are glad to see you every day';
    contacts.appendChild(p);
    var p = document.createElement('p');
    p.textContent = '11.00 - 22.00';
    contacts.appendChild(p);
    var p = document.createElement('p');
    p.textContent = 'Adress:';
    contacts.appendChild(p);
    var p = document.createElement('p');
    p.textContent = '2nd km of Priozerskoe highway';
    contacts.appendChild(p);
    var p = document.createElement('p');
    p.textContent = 'Phone:';
    contacts.appendChild(p);
    var p = document.createElement('p');
    p.textContent = '+79816 66 66 66';
    contacts.appendChild(p);

    return contacts;
};
export { contactsCreation };