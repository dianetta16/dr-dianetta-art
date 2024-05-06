const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Reproduction interdite"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tableaux de sables colorés"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Pouring"
	},
	{
		"image":"slide4.jpg",
		"tagLine":"Pas de feuille polyfanée"
	}
	
]

//**récupérer les elements flèches droite et gauches pour les adapter au clique**/
let balisebannerarrow_left = document.querySelector("#banner .arrow_left");
console.log(balisebannerarrow_left);

let balisebannerarrow_right = document.querySelector("#banner .arrow_right");
console.log(balisebannerarrow_right);

let indexslide = 0;
console.log(indexslide);
//**les images et textes des les elements flèches droite et gauches adapter au clique**/
let tagligne = document.querySelector(".tagligne");
let img = document.querySelector(".banner-img");
let dotArray = document.querySelectorAll(".dot");


//**écouter l'évènement du clic sur la flèche droite avec addEventListener ( au clique : 0,1,2,3,0)**/
//**envoyer instruction dans{

document.querySelector("#banner .arrow_right").addEventListener('click', function(){
	dotArray[indexslide].classList.remove("dot_selected");
		if (indexslide < slides.length-1) { //*** slides.length-1 c'est 4 image -1 dont 3eme image*/
			indexslide = indexslide + 1;	
		}
		else {
			indexslide = 0;	  //**retour à la première image  */
		}
		console.log(indexslide);
		tagligne.innerHTML = slides[indexslide].tagLine;
		img.src= "./img-tableaux/slideshow/"+ slides[indexslide].image;
	dotArray[indexslide].classList.add("dot_selected");
})

	//**écouter l'évènement du clic sur la flèche gauche avec addEventListener ( au clique : 0,3,2,1,0)**/ 
//**envoyer instruction dans{

document.querySelector("#banner .arrow_left").addEventListener('click', function(){
	dotArray[indexslide].classList.remove("dot_selected");
		if (indexslide > 0) { //*** indexslide égale à tout ce qui est plus grand que 0*/
			indexslide = indexslide - 1;	
		}
		else {
			indexslide = slides.length - 1;

		}
		console.log(indexslide);
		tagligne.innerHTML = slides[indexslide].tagLine;
		img.src= "./img-tableaux/slideshow/"+ slides[indexslide].image;
	dotArray[indexslide].classList.add("dot_selected");
})

//boucle avec la longueur du tableau*/
for (var i = 0; i < slides.length-1; i++) {

}

//*** longueur du tableau*/
console.log("longueur du tableau :" + slides.length);





