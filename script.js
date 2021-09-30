// Baseado no vídeo do Filipe Deschamps: https://www.youtube.com/watch?v=dW08ABBu2SY
var imgBlack = document.createElement('img');
imgBlack.src = 'https://sportbuzz.uol.com.br/media/_versions/douglascosta_82934045_116411013185365_8270789263511275541_n_widexl.jpg';
document.body.appendChild(imgBlack)
// ===
imgBlack.style.width = '100px';
imgBlack.style.height = '100px';
imgBlack.style.borderRadius = '50%';
// ===
imgBlack.style.position = 'absolute';
imgBlack.style.top = '50%';
imgBlack.style.marginTop = '-50px';
// ===
var x = 0;
var xDirection = 1;
var xSpeed = 10;
function animateImgBlack() {
    x += xDirection * xSpeed;
    if (x > window.innerWidth - 100) {
        xDirection = -1;
    }
    if (x <= 0) {
        xDirection = 1;
    }
    imgBlack.style.left = x + 'px';

    window.requestAnimationFrame(animateImgBlack);
}
animateImgBlack();
// ===
document.body.style.overflow = 'hidden';
// ===
document.body.style.backgroundColor = 'aquamarine';
// ===
var imgRed = document.createElement('img');
imgRed.src = 'https://st.depositphotos.com/1011767/1748/i/600/depositphotos_17486139-stock-photo-red-background.jpg';
document.body.appendChild(imgRed);
// ===
imgRed.style.width = '80px';
imgRed.style.height = '80px';
imgRed.style.borderRadius = '50%';
// ===
imgRed.style.position = 'absolute';
// ===
var redX = Math.random() * (window.innerWidth - imgRed.offsetWidth);
var redY = Math.random() * (window.innerHeight - imgRed.offsetHeight);
var redXdirection = 1;
var redYdirection = 1;
var redXspeed = xSpeed * 1.1;
var redYspeed = xSpeed * 1.1;
function animateImgRed() {
    redX += redXdirection * redXspeed;
    redY += redYdirection * redYspeed;
    if (redX > window.innerWidth - imgRed.offsetWidth) {
        redXdirection = -1;
    }
    if (redX < 0) {
        redXdirection = 1;
    }
    if (redY > window.innerHeight - imgRed.offsetHeight) {
        redYdirection = -1;
    }
    if (redY < 0) {
        redYdirection = 1;
    }
    imgRed.style.left = redX + 'px';
    imgRed.style.top = redY + 'px';

    window.requestAnimationFrame(animateImgRed);
}
animateImgRed();
