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
		controls[i].classList.remove('activeSlide');
	}
	slides[slideIndex-1].style.display = 'block';

	controls[slideIndex-1].classList.add('activeSlide');
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
	if(window.innerWidth > 769){
		if (document.body.scrollTop >= 20 && document.body.scrollTop <= 460) {
			menu.classList.add('colored');
		}else{
			menu.classList.remove('colored');
		}
		scrollSecondMenu(); 
	}else{
		if (document.body.scrollTop >= 20) {
			menu.classList.add('colored');
		}else{
			menu.classList.remove('colored');
		}
	}

};

function scrollSecondMenu(){
	if (document.body.scrollTop > 461){
		menu.style.display = 'none';
		topMenu.classList.add('transformed');
		menu.classList.remove('simple');
		leftImg.style.display = 'inline-block';
		shareSec.style.display = 'inline-block';
		searchSec.style.display = 'inline-block';
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
var menuLi = document.querySelectorAll('.menu ul li'),
	allPrev = document.getElementById('all'),
	dropDown = document.querySelector('#all .dcontent');

window.addEventListener('resize', adaptMenu);

function adaptMenu() {

	if(outerWidth > 769 && outerWidth < 1200) {

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
		this.parentNode.childNodes[3].classList.add('opened');
	});
};

quitBtn.addEventListener('click', function() {
	videoFull.style.display = 'none';
	for(var i = 0; i < playV.length; i++){
	playV[i].style.display = 'block';
};
	for( var i = 0; i < view.length; i++){
	view[i].classList.remove('opened');
};
	for(var i = 0; i < gray.length; i++) {
	gray[i].style.opacity  = '1';
	}

});

playBtn.addEventListener('click', function() {
	if(video.paused) {
		video.play();
		playBtn.style.content = 'url(images/mainnews/pauseBtn.png)';
	}else{
		video.pause();
		playBtn.style.content = 'url(images/mainnews/playBtn.png)';
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
		newImg.setAttribute('src', 'images/mainnews/phg.png');
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


// MOBILE
var btnMobMenu = document.getElementById('iconMob'),
	mobMenu = document.querySelector('.mobMenu'),
	mobCaption = document.querySelectorAll('.caption'),
	mobCapDiv = document.querySelector('.mobSl'),
	banner = document.querySelector('.border'),
	newAside = document.querySelector('.newaside'),
	aside = document.querySelector('aside'),
	moreBtn = document.getElementById('moreBtn'),
	moreNews = document.querySelectorAll('.hideMob');

btnMobMenu.addEventListener('click', openMobMenu);

function openMobMenu() {
	if(mobMenu.style.display == 'none'){
		mobMenu.style.display = 'block';
		btnMobMenu.style.background = 'url(images/header/closePaw.png) no-repeat center center';
	}else{
		mobMenu.style.display = 'none';
		btnMobMenu.style.background = 'url(images/mobile/menu.png) no-repeat center center';
	}
};

function mobCapt() {
	if(window.innerWidth < 768){
			for(var i = 0; i < mobCaption.length; i++){
				mobCaption[i].classList.add('captionMob');
				mobCapDiv.appendChild(mobCaption[i]);
			};

			moveBanner();

			moveAside();

	}else{
		for(var i = 0; i < mobCaption.length; i++){
			mobCaption[i].classList.remove('captionMob');
		};

		 moveBackBanner();

		moveBackAside();
	}
};

window.addEventListener('resize', mobCapt);
window.addEventListener('load', mobCapt);


function moveBanner() {
	document.childNodes[1].childNodes[2].insertBefore(banner, document.childNodes[1].childNodes[2].childNodes[13]);
};

function moveBackBanner() {
	newAside.insertBefore(banner, newAside.childNodes[8]);
};

function moveAside() {
	document.childNodes[1].childNodes[2].insertBefore(aside, document.childNodes[1].childNodes[2].childNodes[14]);
};

function moveBackAside() {
	newAside.parentNode.insertBefore(aside, newAside.parentNode.childNodes[6]);
};

moreBtn.addEventListener('click', openMoreNews);

function openMoreNews() {
	for(var i = 0; i < moreNews.length; i++){
	moreNews[i].style.display = 'block';
};
	moreBtn.style.display = 'none';
};






