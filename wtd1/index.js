let ph,playm=true,played=false;
function init() {
    ph=window.innerHeight;
    $(':root').css('--ph',`${ph}px`);
    if(window.innerWidth<500){
        $(':root').addClass('mobile');
    }else{
        $(':root').removeClass('mobile');
    }
}
init();
let pics=document.querySelectorAll('#content>.pic');
document.addEventListener('scroll',()=>{
    if(playm && (!played)){
        document.getElementById('audio').play();
        if(document.getElementById('audio').played.length>0){
            played=true;
            $('#musctrl>.btn').text('暂停');
            $('#musctrl>.btn').removeClass('play');
            $('#music>.tip').text('我们已开始播放音乐');
            $('#music>.btn').remove();
        }
    }
    let t=$('html').scrollTop();
    pics.forEach(pic => {
        let pct=pic.offsetTop+(pic.offsetHeight * 0.5);
        if($(pic).hasClass('show')){
            if(pct<t){
                $(pic).removeClass('show');
                $(pic).addClass('bf');
            }else if(pct>t+ph){
                $(pic).removeClass('show');
                $(pic).addClass('af');
            }
        }else{
            if(pct>=t && pct<=t+ph){
                $(pic).addClass('show');
                $(pic).removeClass('bf');
                $(pic).removeClass('af');
            }
        }
    });
});
window.onresize=init;
$('html')[0].scroll(0,0);