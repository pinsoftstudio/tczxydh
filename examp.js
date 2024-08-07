let pld=false;
try{
    playm;
}catch(e){
    pld=true;
}
let ph,played=false,playm=pld;
if(localStorage.getItem('playm')=='true'){
    //如果是默认播放
    playm=true;
    $('#music>.btn.play').remove();
    $('#music>.tip').text('我们时刻准备趁浏览器不备播放音乐');
}else if(localStorage.getItem('playm')=='false'){
    //如果不是默认播放，就暂停播放
    if(playss){
        document.getElementById('ssaudio').pause();
    }else{
        document.getElementById('audio').pause();
    }
    playm=false;
    $('#music>.btn.noplay').remove();
    $('#music>.tip').text('我们不会播放音乐');
    localStorage.setItem('playm',false);
}
function init() {
    ph=window.innerHeight;
    $(':root').css('--ph',`${ph}px`);
    if(window.innerWidth<550){
        $(':root').addClass('mobile');
    }else{
        $(':root').removeClass('mobile');
    }
}
function start() {
    let pics=document.querySelectorAll('#content>.pic');
    //当用户滑动页面
    document.addEventListener('scroll',()=>{
        //如果需要播放但是还未播放
        if(playm && (!played)){
            //如果需要播放校歌
            if(playss){
                //如果已经开始播放
                if(document.getElementById('ssaudio').played.length>0){
                    played=true;
                    $('#music>.btn').remove();
                    $('#musctrl>.btn').text('暂停');
                    $('#musctrl>.btn').removeClass('play');
                    $('#music>.tip').text('我们已开始播放音乐');
                }else{
                    //没有开始播放就开始播放
                    document.getElementById('ssaudio').play();
                }
                
            }else{
                //如果要播放《运动员进行曲》
                if(document.getElementById('audio').played.length>0){
                    //如果已经开始播放
                    played=true;    //改变状态为已经播放
                    $('#music>.btn').remove();
                    $('#musctrl>.btn').text('暂停');
                    $('#musctrl>.btn').removeClass('play');
                    $('#music>.tip').text('我们已开始播放音乐');
                }else{
                    //没有开始播放就开始播放
                    document.getElementById('audio').play();
                }
                
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
        if(t==0){
            pics.forEach(pic=>{
                $(pic).removeClass('show');
                $(pic).removeClass('bf');
                $(pic).addClass('af');
            });
        }
    });
}
init();
window.onresize=init;
$('body')[0].onload=()=>{
    $('html')[0].scroll(0,0);
    setTimeout(() => {
        $('html')[0].scroll(0,0);
    }, 100);
};