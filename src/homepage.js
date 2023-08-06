const homepageCreation = function() {
    const homepage = document.createElement('div');
    content.appendChild(homepage);
    homepage.classList.add('homepage');
    ////
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Karelian Cuisine';
    homepage.appendChild(h1);
    
    //section1
    var section = document.createElement('section');
    homepage.appendChild(section);
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/homepage_food.jpg');
    section.appendChild(image);
    var p = document.createElement('p');
    p.textContent = "The Karelian cuisine is a unique and flavorful culinary tradition that originates from the Karelia regionKarelian cuisine is a treasure trove of unique and mouthwatering dishes that showcase the region's history, culture, and natural resources. Whether you're a fan of pastries, fish, soups, or desserts, Karelian cuisine has something to offer for everyone.";
    section.appendChild(p);
    //section2
    var section = document.createElement('section');
    homepage.appendChild(section);
    var p = document.createElement('p');
    p.textContent = "The restaurant has 20 spacious tables, a varied menu and a beautiful view from the window. You can call by phone to book a table";
    section.appendChild(p);
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/homepage_restaurant.jpg');
    section.appendChild(image);
    //section3
    var section = document.createElement('section');
    homepage.appendChild(section);
    var image = document.createElement('img');
    image.setAttribute('src', 'pics/homepage_soup.jpg');
    section.appendChild(image);
    var p = document.createElement('p');
    p.textContent = "This cuisine combines simple ingredients with traditional cooking techniques to create dishes that are both comforting and satisfying. Whether you're a fan of hearty pies, flavorful soups, or rustic ingredients, Karelian cuisine is sure to tantalize your taste buds and leave you craving for more.";
    section.appendChild(p);

    return homepage;
};

export { homepageCreation};