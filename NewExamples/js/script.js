function byId(id) {
    return typeof (id)==="string"?document.getElementById(id):id;
}
//全局变量
var  index=0,
    timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId('prev'),
    next=byId('next'),
    len=pics.length;
function slideImg() {
    var main=byId("main");
    //划过清除定时器，离开继续
    main.onmouseover=function () {
        //划过清除定时器
        if (timer) clearInterval(timer);
    }
    main.onmouseout=function () {
        timer=setInterval(function () {
            // console.log(index);
            index++;
            if (index>=len) index=0;
            changeImg();
        },3000)
    }
    main.onmouseout();
    //遍历所有点击，且绑定点击事件，，点击原点切换图片
    for (var i = 0; i < len; i++) {
        //给所有的span添加一个is的属性，值为d，作为当前span的索引
        dots[i].id=i;
        dots[i].onclick=function () {
            //改变index为当前span的索引
            index=this.id;
            changeImg();
        }
    }
    //下一张
    next.onclick=function () {
        index++;
        if (index>=len) index=0;
        changeImg();
    }
    prev.onclick=function () {
        index--;
        if (index<0) index=len-1;
        changeImg();
    }
}
function changeImg() {
    //遍历banner下的所有div，及所有dots下的span
    for (var i = 0; i < len; i++) {
        pics[i].style.display='none';
        dots[i].className="";
    }
    pics[index].style.display='block';
    console.log(index);
    dots[index].className='dots-active';
}
slideImg();