function navWriter(){
    document.writeln('<nav>');
    document.writeln('<div id="navLogoTitle">');
    document.writeln('<img src="img/logo.png" alt="Chef Logo" id="navLogo">');
    document.writeln('<h1 id="navTitle">CHEF RECEIPES</h1>');
    document.writeln('</div>');
    document.writeln('<div id="navLinks">');
    document.writeln('<a href="index.html" class="navLink" id="homeLink">');
    document.writeln('<span class="subNavLink">HOME</span>');
    document.writeln('</a>');
    document.writeln('<a href="about.html" class="navLink" id="aboutLink">');
    document.writeln('<span class="subNavLink">ABOUT</span>');
    document.writeln('</a>');
    document.writeln('<a href="recipes.html" class="navLink" id="recipesLink">');
    document.writeln('<span class="subNavLink">RECEIPES</span>');
    document.writeln('</a>');
    document.writeln('<a href="" class="navLink">');
    document.writeln('<span class="subNavLink">CONTACT</span>');
    document.writeln('</a>');
    document.writeln('</div>');
    document.writeln('</nav>');
}

function hoverOnFoodAboutPage(){
    if(screen.width >= 769){
        document.querySelectorAll('.foodImg').forEach((img, i) => {
            const foodDetails = document.querySelectorAll('.foodDetail');
            const foodHearts = document.querySelectorAll('.foodHeart');
            img.addEventListener('mouseover', () => {
                //img
                img.style.transform = 'scale(1.3)';
                img.style.transitionDuration = '0.5s';
                //food heart
                foodHearts[i].style.transform = 'translate(18vw, -16vw)';
                foodHearts[i].style.transitionDuration = '0.5s';
                //food detail div
                foodDetails[i].style.display = 'flex';
            });
            //reset style
            img.addEventListener('mouseout', () => {
                //img
                img.style.transform = '';
                img.style.transitionDuration = '';
                //food heart
                foodHearts[i].style.transform = '';
                foodHearts[i].style.transitionDuration = '';
                //food detail div
                foodDetails[i].style.display = 'none';
            });
        });
    }
}