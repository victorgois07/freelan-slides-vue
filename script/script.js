$(document).ready(() => {
    $('section#section-master').height(window.innerHeight);
    $('div.carousel-inner, div.containerData').height(window.innerHeight).width(window.innerWidth);
    console.log(window.innerHeight - $('article.text-info-border').innerHeight());
    $('div.rowEnd, div.rowFirst').height((window.innerHeight - $('article.text-info-border').innerHeight())/2);
    $('div#demo').carousel('pause')
});
