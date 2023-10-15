let ph;
function init() {
    ph=window.innerHeight;
    $(':root').css('--ph',`${ph}px`);
    if(window.innerWidth<550){
        $(':root').addClass('mobile');
    }else{
        $(':root').removeClass('mobile');
    };
}
init();
let pics=document.querySelectorAll('#content>*');
document.addEventListener('scroll',()=>{
    let t=$('html').scrollTop();
    pics.forEach(pic => {
        if($(pic).hasClass('show')){
            if(pic.offsetTop+(pic.offsetHeight * 0.3)<t){
                $(pic).removeClass('show');
                $(pic).addClass('bf');
            }else if(pic.offsetTop+(pic.offsetHeight * 0.7)>t+ph){
                $(pic).removeClass('show');
                $(pic).addClass('af');
            }
        }else{
            // let pct=pic.offsetTop+(pic.offsetHeight * 0.5);
            if(pic.offsetTop+(pic.offsetHeight * 0.3)>=t && pic.offsetTop+(pic.offsetHeight * 0.7)<=t+ph){
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
    if($('#tip').hasClass('show'))$('#tip').removeClass('show');
});
window.onresize=init;
$('body')[0].onload=()=>{
    // $('html')[0].scroll(0,0);
    // setTimeout(() => {
    //     $('html')[0].scroll(0,0);
    // }, 100);()=>{
    $('html,#cover').addClass('load');
};