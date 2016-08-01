window.onload=function(){
	//轮播一号
	var lunbo = document.getElementById("lunbo");
	var pic   = document.getElementById("lunbo_pic");
	var btn   = document.getElementById("lunbo_btn").getElementsByTagName("span");
	var left  = document.getElementById("left");
	var right = document.getElementById("right");
	var index =  1 ;
	var timer  ;
	var animated = false;
	var len = 5;
	var interval = 3000;

           function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(pic.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(pic.style.left) < left) || (speed < 0 && parseInt(pic.style.left) > left)) {
                        pic.style.left = parseInt(pic.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        pic.style.left = left + 'px';
                        if(left>-0 ){
                            pic.style.left = -550 * len + 'px';
                        }
                        if(left<(-550 * len)) {
                            pic.style.left = '-550px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < btn.length ; i++) {
                    if( btn[i].className == 'on'){
                        btn[i].className = '';
                        break;
                    }
                }
                btn[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                	right.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }
            
            right.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-550);
                showButton();
            }
           	left.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(550);
                showButton();
            }
            

            for (var i = 0; i < btn.length; i++) {
                btn[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -600 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

             lunbo.onmouseover = stop;
          	 lunbo.onmouseout = play;

            play();


}	