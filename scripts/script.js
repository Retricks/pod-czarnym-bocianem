function responsive(){
	let root = document.querySelector(":root");
	let font = 16*window.innerWidth/1920;

	
	root.style.fontSize = font + "px";
}
responsive();

window.addEventListener('resize', responsive);


window.addEventListener('scroll', function(){
	let logo__image = document.getElementById("logo__image");
	let logo = document.getElementById("logo");
	let header = document.getElementById("header__container");
	if (window.scrollY > 100){
		logo__image.style.height = "4rem";
		logo.style.padding = "0";
		logo.style.borderRadius = "0";
	}
	if (window.scrollY < 100){
		logo__image.style.height = "12.5rem";
		logo.style.padding = "1em";
		logo.style.borderRadius = "0.3125rem";
	}
})