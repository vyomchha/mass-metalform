var mm_wd = window.matchMedia( "(min-width: 800px)" );
var menu = false;

mm_wd.addListener(function(mmwd) {
	if(mmwd.matches) {
		// Changed to width<800px
		var mmf_menu = document.getElementsByClassName("mmf_menu_bar");
		mmf_menu[0].style.left = '0vw';menu = true;
	}
	else {
		// Changed to width>=800px
		var mmf_menu = document.getElementsByClassName("mmf_menu_bar");
		mmf_menu[0].style.left = '-100vw';menu = false;
	}
});

//Work page show column 2
function change_col2(n) {
	var bd_mmf_image = document.getElementsByClassName("mmf_bc_col_002_dat");
	for (i = 0; i < bd_mmf_image.length; i++) {
	  	bd_mmf_image[i].style.display = "none";
	}
	bd_mmf_image[n-1].style.display = "block";
	change_col3(0);
}

//Work page show column 3
function change_col3(n) {
	var bd_mmf_image = document.getElementsByClassName("mmf_bc_col_003_dat");
	for (i = 0; i < bd_mmf_image.length; i++) {
	  	bd_mmf_image[i].style.display = "none";
	}
	bd_mmf_image[n-1].style.display = "block";
}

//Show Menu when width<800px
function mmf_pot_menu() {
	var mmf_menu = document.getElementsByClassName("mmf_menu_bar");
	if (menu==false) {
		menu=true;
		mmf_menu[0].style.left = '0vw';
	}
	else {
		menu=false;
		mmf_menu[0].style.left = '-100vw';
	}
}

//Change Home Page text data
function mmf_bc_btn_001() {
	document.getElementById("mmf_bc_data").innerHTML = "</p>Mass Metalform is a leading supplier of closed die forgings with its roots established in 1992. Mass Metalform along with the help of its sister companies can achieve a total production of 18000 MT. Due to its vast expertise and long-standing experience in the market, Mass Metalform is a preferred partner for forged and engineering components.</p>";
}	
function mmf_bc_btn_002() {
	document.getElementById("mmf_bc_data").innerHTML = "<p>Mass Metalform has a total of five manufacturing units in and around Delhi NCR, with every location fully equipped to handle its specialization that ranges from closed die forging, CNC components, bright drawn steel bars, and engineering solutions.</p>";
}	
function mmf_bc_btn_003() {
	document.getElementById("mmf_bc_data").innerHTML = "<p>Mass Metalform has always emphasized on customer satisfaction and has constantly achieved this through excellence in product process development followed by a rigorous quality check. To ensure quality is maintained throughout the process Mass Metalform has inhouse bright steel bars and machining facilities which provides the edge in quality and customer satisfaction. Mass Metalform is a one stop solution for agriculture, automotive, and general engineering products.</p>";
}