var nav = document.getElementById('main-nav')
var logo = document.getElementById('logo-main')
var logoImg = document.getElementById('logoImg')
var main = document.getElementsByTagName('main')[0]


function openNav() {
   nav.classList.toggle('open')
}
document.onscroll = function() {
   var rect = logo.getBoundingClientRect();
   if (rect.bottom < 0) {
      nav.classList.add('sticky')
      main.classList.add('mt')

   } else {
      nav.classList.remove('sticky')
      main.classList.remove('mt')

   }
}

nav.onclick = function() {
   logoImg.style.width = "100%"
   logo.style.height = "15.25vw"
}


var imagesShow = document.getElementsByClassName('images-show')
var toggleNext = document.getElementById('nextImg')
var togglePrev = document.getElementById('prevImg')




for (var i = 0; i < imagesShow.length; i++) {
console.log(imagesShow[i].getElementsByClassName('images').length)
var allImages = imagesShow[i].getElementsByClassName('images')

for (var j = 0; j < allImages.length; j++) {
   var nrField = allImages[j].getElementsByClassName('number')[0]
   nrField.innerHTML = (j + 1) + "/" + allImages.length
}

   if (imagesShow[i].getElementsByClassName('images').length > 1) {
      imagesShow[i].children[2].classList.add('show')
      toggleNext.onclick = function() {
         var visibleImg = document.getElementsByClassName('show')[0]
         if (visibleImg.nextElementSibling == null) {
            imagesShow[i].children[2].classList.add('show')
            visibleImg.classList.remove('show')

         } else {
            var nextFigure = visibleImg.nextElementSibling
            visibleImg.classList.remove('show')
            nextFigure.classList.add('show')
         }
      }
      togglePrev.onclick = function() {
         var visibleImg = document.getElementsByClassName('show')[0]
         if (visibleImg.previousElementSibling.classList.contains('images')) {
            var prevFigure = visibleImg.previousElementSibling
            visibleImg.classList.remove('show')
            prevFigure.classList.add('show')
         } else {
            imagesShow[i].lastElementChild.classList.add('show')
            visibleImg.classList.remove('show')
         }
      }
   } else {
   	console.log(imagesShow[i])

   imagesShow[i].getElementsByClassName('images')[0].classList.add('show')
	}
}