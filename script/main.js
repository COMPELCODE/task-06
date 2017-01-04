window.onload = function() {
    var JtabNav = document.getElementById('JtabNav');
    var JtabBtn = JtabNav.getElementsByClassName('tab-btn');
    var tabNavActiveBtn = JtabNav.getElementsByClassName('active')[0];
    tabNavActiveBtn.style.left = 'calc(100% / 2)';
    if (tabNavActiveBtn.style.left > 0){
        JtabBtn[0].style.color = '#55a8b3';
        JtabBtn[1].style.color = '#fff';
    } else {
        JtabBtn[1].style.color = '#55a8b3';
        JtabBtn[0].style.color = '#fff';
    }

    for (var i = 0; i < JtabBtn.length; i++){
        JtabBtn[i].i = i;
        JtabBtn[i].addEventListener('click', function() {
            JtabBtn[0].style.color = '#fff';
            JtabBtn[1].style.color = '#fff';
            this.style.color = '#55a8b3';
            if (this.i == 0){
                tabNavActiveBtn.style.left = 0
            } else if (this.i == 1) {
                tabNavActiveBtn.style.left = 'calc(100% / 2)';
            }
        }, false);
    }
    console.log(tabNavActiveBtn.style.left);
};
