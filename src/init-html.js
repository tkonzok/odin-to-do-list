const initHtml = () => {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    const headerDiv = document.createElement('div');
    headerDiv.classList.add("header");
    header.appendChild(headerDiv)
    
    const home = document.createElement('button');
    home.textContent = "Home";
    home.id = "home";
    headerDiv.appendChild(home);
    const menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.id = "menu";
    headerDiv.appendChild(menu);
    const contact = document.createElement('button');
    contact.textContent = "Contact";
    contact.id = "contact";
    headerDiv.appendChild(contact);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('content');
    mainDiv.id = "content";
    main.appendChild(mainDiv);

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    footerDiv.id = "footer";
    footer.appendChild(footerDiv);
}

export { initHtml };
