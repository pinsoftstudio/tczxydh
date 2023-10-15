let pld=false;
try{
    playm;
}catch(e){
    pld=true;
}
let ph,played=false,playm=pld;
if(localStorage.getItem('playm')=='true'){
    playm=true;
    $('#music>.btn.play').remove();
    $('#music>.tip').text('我们时刻准备趁浏览器不备播放音乐');
}else if(localStorage.getItem('playm')=='false'){
    document.getElementById('audio').pause();
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
    document.addEventListener('scroll',()=>{
        if(playm && (!played)){
            if(document.getElementById('audio').played.length>0){
                played=true;
                $('#music>.btn').remove();
                $('#musctrl>.btn').text('暂停');
                $('#musctrl>.btn').removeClass('play');
                $('#music>.tip').text('我们已开始播放音乐');
            }else
            document.getElementById('audio').play();
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