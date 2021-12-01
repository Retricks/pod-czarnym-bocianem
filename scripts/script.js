var clicked = false;
function burgerbox(){
	let burger = document.querySelector(".burger");
	let nav = document.querySelector(".nav");
	let logo__image = document.getElementById("logo__image");
	let logo = document.getElementById("logo");
	if (burger.classList.contains("burger--ch")){
		nav.classList.remove("nav--clicked");
		burger.classList.remove("burger--ch");
		clicked = false;
		if (window.scrollY < 100){
			logo__image.style.height = "10rem";
			logo.style.padding = "1em";
			logo.style.borderRadius = "0.3125rem";
		}
	}
	else{
		logo__image.style.height = "6rem";
		logo.style.padding = "0";
		logo.style.borderRadius = "0";
		nav.classList.add("nav--clicked");
		burger.classList.add("burger--ch");
		clicked = true;
	}
}


window.addEventListener('scroll', function(){
	let logo__image = document.getElementById("logo__image");
	let logo = document.getElementById("logo");
	if (window.innerWidth > 500 && window.innerWidth <= 1000 && clicked == false){
		if (window.scrollY > 100){
			logo__image.style.height = "6rem";
			logo.style.padding = "0";
			logo.style.borderRadius = "0";
		}
		if (window.scrollY < 100){
			logo__image.style.height = "10rem";
			logo.style.padding = "1em";
			logo.style.borderRadius = "0.3125rem";
		}
	}
	else if (window.innerWidth > 1000){
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
	}
	else{	}
})