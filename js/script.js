// SLIDES
var slideIndex = 1;

showSl(slideIndex);

function currentSl(n) {
	showSl(slideIndex = n);
};

function showSl(n) {
	var i;
	var slides   = document.querySelectorAll('#slides .slide');
	var controls = document.querySelectorAll('.controls');
	var img      = document.querySelectorAll('.controls img');
	
	if (n > slides.length) {slideIndex = 1};

	if (n < 1) {slideIndex = slides.length};
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < controls.length; i++) {
		img[i].src = 'images/slider/sl.png';
	}
	slides[slideIndex-1].style.display = 'block';

	img[slideIndex-1].src = 'images/slider/sl_arr.png';
};

// SEARCH
var button      = document.querySelectorAll('.search'),
	fullSearch  = document.getElementById('searchFull'),
	searchTransf = document.getElementById('searchFullTransf');

	for(var i = 0; i < button.length; i++){
		button[i].addEventListener('click', searchIt);
	};

	fullSearch.addEventListener('focusout', closeSearch);
	searchTransf.addEventListener('focusout', closeSearch);

	function searchIt() {
		this.style.display = 'none';
		this.parentNode.children[this.parentNode.children.length - 1].style.display = 'block';
	};

	function closeSearch(){
		this.style.display = 'none';
		for (var i = 0; i < this.parentNode.childNodes.length; i++){
			if(this.parentNode.childNodes[i].className == 'right search' || this.parentNode.childNodes[i].className == 'right search searchSec' ){
				this.parentNode.childNodes[i].style.display = 'block';
			}
		}
	};

// SHARE
var shrBut   = document.querySelectorAll('.share'),
	sharePaw = document.getElementById('sharePaw'),
	closePaw = document.getElementById('closePaw');

	for( var i = 0; i < shrBut.length; i++){
		shrBut[i].addEventListener('click', function() {
		sharePaw.classList.remove('shareClose');
		sharePaw.classList.add('sharePaw');
	});
	};
	

	closePaw.addEventListener('click', function() {
		sharePaw.classList.remove('sharePaw');
		sharePaw.classList.add('shareClose');
	})


// MENU
var menu = document.querySelector('header'),
	nav = document.querySelector('header nav');
	nav2 = document.querySelectorAll('header nav ul'),
	topMenu = document.querySelector('.menu'),
	ulMenu = document.querySelector('.menu ul'),
	shareSec = document.querySelector('.shareSec'),
	searchSec = document.querySelector('.searchSec'),
	leftImg = document.querySelector('.menu .left');

function scrollMenu() {
	if (document.body.scrollTop >= 20 && document.body.scrollTop <= 460) {
		menu.classList.add('colored');
	}else{
		menu.classList.remove('colored');
	}

	scrollSecondMenu();
};

function scrollSecondMenu(){
	if (document.body.scrollTop > 461){
		menu.style.display = 'none';
		topMenu.classList.add('transformed');
		menu.classList.remove('simple');
		leftImg.style.display = 'inline-block';
		shareSec.style.display = 'block';
		searchSec.style.display = 'block';


	}else{
		menu.style.display = 'block';
		menu.classList.add('simple');
		topMenu.classList.remove('transformed');
		shareSec.style.display = 'none';
		searchSec.style.display = 'none';
		leftImg.style.display = 'none';
	}
};

window.onscroll = scrollMenu;


// ADAPTIVE MENU
//topMenu - .menu, ulMenu - .menu ul,
var menuLi = document.querySelectorAll('.menu ul li'),
	allPrev = document.getElementById('all'),
	dropDown = document.querySelector('#all .dcontent');

window.addEventListener('resize', adaptMenu);

function adaptMenu() {

	if(outerWidth < 1200) {

		var sum = 0;

		for(var i = 0; i < menuLi.length; i++){
			sum += menuLi[i].offsetWidth;
		};
		
		if(sum > ulMenu.offsetWidth){
			var aForLi = document.createElement('a');
			aForLi.appendChild(allPrev.previousElementSibling);
			dropDown.appendChild(aForLi);
		}else{
			outIt();
			
		}
	}
};

function outIt() {
	var dChild = dropDown.childNodes;
	for(var i = 0; i < dChild.length; i++){
		if(dChild[i].textContent == 'Спецпроекти' || dChild[i].textContent == 'Цікавинки' || 
			dChild[i].textContent == 'Леді' || dChild[i].textContent == 'Гламур' || dChild[i].textContent == 'Проспорт' ||
			dChild[i].textContent == 'Блоги' || dChild[i].textContent == 'Випуски ТСН')
	ulMenu.insertBefore(dropDown.lastChild, allPrev);
};
	// for(var i = 0; i < ulMenu.childNodes.length; i++){
	// 		if(ulMenu.childNodes[i].className == 'dropDown'){
	// 		ulMenu.insertBefore(dropDown.lastChild, ulMenu.childNodes[i]);
	// 		console.log(ulMenu.childNodes[i]);
	// 		}
	// 	}
}

window.addEventListener('load', adaptMenu);

// NEWS COLOR
var nameNew = document.querySelectorAll('p.date span');

for (var i = 0; i < nameNew.length; i++) {
	if (nameNew[i].textContent === 'Світ') {
		nameNew[i].style.color = '#028fbd';
	}else if (nameNew[i].textContent === 'Україна') {
		nameNew[i].style.color = '#ffd400';
	}else if (nameNew[i].textContent === 'Гламур') {
		nameNew[i].style.color = '#ba39e6';
	}else{
		nameNew[i].style.color = '#1bb367';
	}
} ;

// NEWS VIDEO
var playV     = document.querySelectorAll('.p'),
	view      = document.querySelectorAll('.v'),
	videoFull = document.getElementById('videoFull'),
	quitBtn   = document.getElementById('quit'),
	playBtn   = document.getElementById('play'),
	video     = document.querySelector('#videoFull video'),
	gray      = document.querySelectorAll('.videoImg img');

for(var i = 0; i < playV.length; i++){
	playV[i].addEventListener('click', function() {
		videoFull.style.display = 'block';
		this.style.display = 'none';
		this.parentNode.childNodes[1].style.opacity = '.3';
		this.parentNode.childNodes[3].style.background = 'url(../www/images/mainnews/icon.png) no-repeat';
	});
};

quitBtn.addEventListener('click', function() {
	videoFull.style.display = 'none';
	for(var i = 0; i < playV.length; i++){
	playV[i].style.display = 'block';
};
	for( var i = 0; i < view.length; i++){
	view[i].style.background = 'url(../www/images/mainnews/video.png) no-repeat';
};
	for(var i = 0; i < gray.length; i++) {
		gray[i].style.opacity  = '1';
	}

});

playBtn.addEventListener('click', function() {
	if(video.paused) {
		video.play();
		playBtn.style.content = 'url(../www/images/mainnews/pauseBtn.png)';
	}else{
		video.pause();
		playBtn.style.content = 'url(../www/images/mainnews/playBtn.png)';
	}
});


// PHOTO GALLERY
var openGallery = document.querySelector('.iconv'),
	gallery = document.getElementById('gallery'),
	displayedImg = document.querySelector('.displayedImg'),
	thumbBar = document.querySelector('.thumb');

	openGallery.addEventListener('click', function() {
		gallery.style.display = 'block';
	});

	for(var i = 1; i <= 13; i++) {
		var newImg = document.createElement('img');
		newImg.setAttribute('src', '../www/images/mainnews/phg.png');
		thumbBar.appendChild(newImg);

		newImg.onclick = function(e) {
			var imgSrc = e.target.getAttribute('src');
			displayImg(imgSrc);

			var images = document.querySelectorAll('.thumb img');
			for( var i = 0; i < images.length; i++){

				images[i].classList.remove('thumbActive');
				images[i].style.opacity = '.4';
				e.target.classList.add('thumbActive');
				e.target.style.opacity = '1';
			}
		}
			
	};

	function displayImg(imgSrc) {
		displayedImg.setAttribute('src', imgSrc);
	};

var quitG = document.querySelector('.quit'),
	gallery = document.getElementById('gallery');
quitG.addEventListener('click', function() {
	gallery.style.display = 'none';
});





