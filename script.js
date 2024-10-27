function toggle(){
    let headerlinks=document.getElementById('header-links');
    headerlinks.classList.toggle('active');
    icontoggle()

}

function icontoggle(){
    let menu=document.getElementById('menu');
    if(menu.innerText=='menu'){
        menu.innerText='close';
    }else{
        menu.innerText='menu';
    }
}
const links=document.querySelectorAll('.header-sm-links')
for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', () =>{
        let headerlinks=document.getElementById('header-links');
        headerlinks.classList.remove('active');
        icontoggle();
    })
}
function popup(){
    document.querySelector('#modal-container').style.display='flex';

 }
 document.querySelector('#close').addEventListener('click',close);

    function close(){
        document.querySelector('#modal-container').style.display='none';
        console.log('clicked')
    }



