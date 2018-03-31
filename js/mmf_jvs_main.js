var sld = 2;
var def_ind = 0;
var timer = new Timer(function() {change_index(1);}, 10000);
//var mm_wd = window.matchMedia( "(min-width: 800px)" );
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

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

document.getElementById("mmf_body_slide_003").onmousedown = function(){timer.stop()};
document.getElementById("mmf_body_slide_003").onmouseout = function(){timer.start()};

function startup() {
	change_slide(0);
}

function change_index(ind) {
	def_ind += ind;
	if (def_ind<0) {def_ind=sld;}
	if (def_ind>sld) {def_ind=0;}
	change_slide(def_ind);
}

function change_slide(ind) {
	timer.reset(10000);
	slides = document.getElementsByClassName("mmf_body_slide");
	slide_cntrl = document.getElementsByClassName("mmf_body_slide_control");
	for (i = 1; i < slide_cntrl.length-1; i++) {
		slide_cntrl[i].className = "mmf_body_slide_control";
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.opacity = 0;
	}
	slides[ind].style.opacity = 1;
	slide_cntrl[ind+1].className += " mmf_body_slide_active";
	def_ind=ind;
	
}

