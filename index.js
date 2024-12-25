let profileMenu = document.getElementById('profileMenu')

function toggleMenu(){
    profileMenu.classList.toggle('open-menu')
}


let sidebarActivity = document.getElementById('sidebarActivity');
let moreLink  = document.getElementById('showMoreLink');


function toggleActivity (){
    sidebarActivity.classList.toggle('open-activity')

    if(sidebarActivity.classList.contains('open-activity')){
        moreLink.innerHTML ='show less <b>-<b/>'
    }
    else{
        moreLink.innerHTML ='show more <b>+<b/>';
    }
}


