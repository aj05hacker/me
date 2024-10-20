function toggleSkillsSection(section) {
    document.getElementById('skills-section-new').classList.add('skills-hidden');
    document.getElementById('tools-section-new').classList.add('skills-hidden');
    document.getElementById('skills-btn-new').classList.remove('active');
    document.getElementById('tools-btn-new').classList.remove('active');
    document.getElementById(section).classList.remove('skills-hidden');
    document.getElementById(section + '-btn-new').classList.add('active');
}
// Custom Navbar JavaScript

// Function to scroll the navbar by a specified distance
function customNavbarScroll(distance) {
    const navbar = document.getElementById('customNavbar');
    navbar.scrollBy({
        top: 0,
        left: distance,
        behavior: 'smooth'
    });
}

// Variables for scroll indicators
const customNavbar = document.getElementById('customNavbar');
const customLeftIndicator = document.querySelector('.custom-navbar-container .custom-navbar-scroll-indicator.left');
const customRightIndicator = document.querySelector('.custom-navbar-container .custom-navbar-scroll-indicator.right');

// Function to update the visibility of scroll indicators based on scroll position
function updateCustomNavbarIndicators() {
    // Show or hide left indicator
    if (customNavbar.scrollLeft > 0) {
        customLeftIndicator.style.display = 'flex';
    } else {
        customLeftIndicator.style.display = 'none';
    }

    // Show or hide right indicator
    if (customNavbar.scrollWidth - customNavbar.clientWidth - customNavbar.scrollLeft > 5) {
        customRightIndicator.style.display = 'flex';
    } else {
        customRightIndicator.style.display = 'none';
    }
}

// Initial check to set the visibility of scroll indicators
updateCustomNavbarIndicators();

// Update indicators on scroll
customNavbar.addEventListener('scroll', updateCustomNavbarIndicators);

// Update indicators on window resize
window.addEventListener('resize', updateCustomNavbarIndicators);



// Certificates--------------

function certificatesAtvImg() {
  var d = document,
    de = d.documentElement,
    bd = d.getElementsByTagName('body')[0],
    htm = d.getElementsByTagName('html')[0],
    win = window,
    imgs = d.querySelectorAll('.certificates-atvImg'),
    totalImgs = imgs.length,
    supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

  if (totalImgs <= 0) {
    return;
  }

  for (var l = 0; l < totalImgs; l++) {
    var thisImg = imgs[l],
      layerElems = thisImg.querySelectorAll('.certificates-atvImg-layer'),
      totalLayerElems = layerElems.length;

    if (totalLayerElems <= 0) {
      continue;
    }

    while (thisImg.firstChild) {
      thisImg.removeChild(thisImg.firstChild);
    }

    var containerHTML = d.createElement('div'),
      shineHTML = d.createElement('div'),
      shadowHTML = d.createElement('div'),
      layersHTML = d.createElement('div'),
      layers = [];

    thisImg.id = 'certificates-atvImg__' + l;
    containerHTML.className = 'certificates-atvImg-container';
    shineHTML.className = 'certificates-atvImg-shine';
    shadowHTML.className = 'certificates-atvImg-shadow';
    layersHTML.className = 'certificates-atvImg-layers';

    for (var i = 0; i < totalLayerElems; i++) {
      var layer = d.createElement('div'),
        imgSrc = layerElems[i].getAttribute('data-img');

      layer.className = 'certificates-atvImg-rendered-layer';
      layer.setAttribute('data-layer', i);
      layer.style.backgroundImage = 'url(' + imgSrc + ')';
      layersHTML.appendChild(layer);

      layers.push(layer);
    }

    containerHTML.appendChild(shadowHTML);
    containerHTML.appendChild(layersHTML);
    containerHTML.appendChild(shineHTML);
    thisImg.appendChild(containerHTML);

    var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
    thisImg.style.transform = 'perspective(' + w * 3 + 'px)';

    if (supportsTouch) {
      win.preventScroll = false;

      (function (_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('touchmove', function (e) {
          if (win.preventScroll) {
            e.preventDefault();
          }
          processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener('touchstart', function (e) {
          win.preventScroll = true;
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('touchend', function (e) {
          win.preventScroll = false;
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    } else {
      (function (_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener('mousemove', function (e) {
          processMovement(e, false, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener('mouseenter', function (e) {
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener('mouseleave', function (e) {
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    }
  }

  function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
    var bdst = bd.scrollTop || htm.scrollTop,
      bdsl = bd.scrollLeft,
      pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
      pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
      offsets = elem.getBoundingClientRect(),
      w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
      h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
      wMultiple = 320 / w,
      offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
    offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
    dy = (pageY - offsets.top - bdst) - h / 2,
    dx = (pageX - offsets.left - bdsl) - w / 2,
    yRotate = (offsetX - dx) * (0.07 * wMultiple),
    xRotate = (dy - offsetY) * (0.1 * wMultiple),
    imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)',
    arad = Math.atan2(dy, dx),
    angle = arad * 180 / Math.PI - 90;

  if (angle < 0) {
    angle = angle + 360;
  }

  if (elem.firstChild.className.indexOf(' over') != -1) {
    imgCSS += ' scale3d(1.07,1.07,1.07)';
  }
  elem.firstChild.style.transform = imgCSS;

  shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';
  shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px)';

  var revNum = totalLayers;
  for (var ly = 0; ly < totalLayers; ly++) {
    layers[ly].style.transform = 'translateX(' + (offsetX * revNum) * ((ly * 2.5) / wMultiple) + 'px) translateY(' + (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) + 'px)';
    revNum--;
  }
}

function processEnter(e, elem) {
  elem.firstChild.className += ' over';
}

function processExit(e, elem, layers, totalLayers, shine) {
  var container = elem.firstChild;

  container.className = container.className.replace(' over', '');
  container.style.transform = '';
  shine.style.cssText = '';

  for (var ly = 0; ly < totalLayers; ly++) {
    layers[ly].style.transform = '';
  }
}
}

certificatesAtvImg();


// Arrow for internship-----------------------


const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor link behavior
  const targetSection = document.querySelector('#target-section'); // ID of the section
  targetSection.scrollIntoView({
    behavior: 'smooth', // Smooth scroll behavior
    block: 'start', // Scroll to the top of the section
  });
});



// ------------------Back to Top


    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');

    window.onscroll = function() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });