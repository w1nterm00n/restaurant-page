const menuCreation = function() {
    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.classList.add('menu');
    ////
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    menu.appendChild(h1);
    
    //creating dishes
    //dish1
    var dish = document.createElement('div');
    menu.appendChild(dish);
    dish.classList.add('dish');
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/menu_soup.jpg');
    dish.appendChild(image);
    var text = document.createElement('div');
    text.classList.add('text');
    dish.appendChild(text);
    var h4 = document.createElement('h4');
    h4.textContent = 'Fish soup with cream';
    text.appendChild(h4);
    var p = document.createElement('p');
    p.textContent = 'Fish soup with cream is a delicious and hearty dish that is perfect for any seafood lover. Made with fresh fish, creamy broth, and a variety of vegetables, this soup is both nutritious and satisfying.';
    text.appendChild(p);
    //dish2
    var dish = document.createElement('div');
    menu.appendChild(dish);
    dish.classList.add('dish');
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/menu_kalitki.jpg');
    dish.appendChild(image);
    var text = document.createElement('div');
    text.classList.add('text');
    dish.appendChild(text);
    var h4 = document.createElement('h4');
    h4.textContent = 'Karjalanpiirakat (pie)';
    text.appendChild(h4);
    var p = document.createElement('p');
    p.textContent = 'These are traditional open pies with various fillings. The most traditional filling is made from barley groats, modern and no less popular is with potatoes. Both are in this recipe. And for dessert - sweet wickets with berries.';
    text.appendChild(p);
    //dish3
    var dish = document.createElement('div');
    menu.appendChild(dish);
    dish.classList.add('dish');
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/menu_fish.jpg');
    dish.appendChild(image);
    var text = document.createElement('div');
    text.classList.add('text');
    dish.appendChild(text);
    var h4 = document.createElement('h4');
    h4.textContent = 'Fish';
    text.appendChild(h4);
    var p = document.createElement('p');
    p.textContent = 'One of the most loved Karelian fish species is the Vendace, also known as the Finnish herring. Vendace is a small, silvery fish with a delicate and tender flesh that melts in your mouth. It is highly sought after for its distinctive flavor and is often used in traditional Karelian cuisine.';
    text.appendChild(p);
    //dish4
    var dish = document.createElement('div');
    menu.appendChild(dish);
    dish.classList.add('dish');
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/menu_brusknika.jpg');
    dish.appendChild(image);
    var text = document.createElement('div');
    text.classList.add('text');
    dish.appendChild(text);
    var h4 = document.createElement('h4');
    h4.textContent = 'Jam';
    text.appendChild(h4);
    var p = document.createElement('p');
    p.textContent = 'Jam is a delicious and versatile spread made from a variety of fruits. It is typically made by boiling fruit with sugar until it reaches a thick, spreadable consistency. Jam can be enjoyed on toast, scones, crackers, or used as a filling for cakes and pastries.';
    text.appendChild(p);
    //creating dishes is done

    return menu;
}

export { menuCreation };