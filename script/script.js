

document.addEventListener("DOMContentLoaded", () => {

	// Управляем менюшкой при скролле
	window.addEventListener('scroll', function() {
		if(pageYOffset > 100)
		{
			document.getElementById('navbar').classList.add('navbar_scrolled');
		}
		else
		{
			document.getElementById('navbar').classList.remove('navbar_scrolled');
		}
	});

	// Управлем состоянием нашей иконки меню
	document.getElementById('toggle_menu').onclick = function() {
		this.classList.toggle('navbar__toggler_active');
	};

	toggle_menu.onclick = function myFunction(){
		var y = document.getElementById("MobileWarp")
	
		if(y.className === "mobile_wrap"){
			y.className += " mobile_wrap_show"
		}else{
			y.className = "mobile_wrap"
		}
	};

});