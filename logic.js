var value = document.getElementById('zero');
window.scrollBy(0,1e10);
var maxi= window.pageYOffset;
window.scrollBy(0,-1e10);
document.addEventListener('scroll',function(){
    console.log('scrolled');
    var cur = window.pageYOffset;
    var per = (cur/maxi)*100;
    per = Math.floor(per);
    value.innerHTML = per + "";
})