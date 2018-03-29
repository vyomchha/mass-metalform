//Change Home Page text datavar sld = 2;
var def_ind = 0;
var timer = new Timer(function() {change_index(1);}, 5000);

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
	timer.reset(5000);
}

function change_index(ind) {
	def_ind += ind;
	if (def_ind<0) {def_ind=sld;}
	if (def_ind>sld) {def_ind=0;}
	change_slide(def_ind);
}

function change_slide(ind) {
	timer.reset(5000);
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

