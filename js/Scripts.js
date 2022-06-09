// side navmenu

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



// Function to modify title ine vertical left bar when user scroll page
 
function update()
{
  
  const elem1 = document.getElementById("stylistes");
  const rect1 = elem1.getBoundingClientRect();
  const elem2 = document.getElementById("extraordinaire");
  const rect2 = elem2.getBoundingClientRect();
  const elem3 = document.getElementById("projet");
  const rect3 = elem3.getBoundingClientRect();

  let toprect1 = rect1.top;
  let toprect2 = rect2.top;
  let toprect3 = rect3.top;
  let hauteur = window.innerHeight;

    if (toprect1 >= 0 && toprect1 < hauteur)
        {
          document.getElementById("verticaltext").innerHTML = "OBTENEZ DES CONSEILS GRATUITS SUR MESURE";
        }

    if (toprect2 >= 0 && toprect2 < hauteur)
        {
          document.getElementById("verticaltext").innerHTML = "VOTRE MAISON EST EXTRAORDINAIRE";
        }

    if (toprect3 >= 0 && toprect3 < hauteur)
        {
          document.getElementById("verticaltext").innerHTML = "PARLONS ENSEMBLE DE VOS PROJETS";
        }
}

document.addEventListener('scroll', update);
update();



