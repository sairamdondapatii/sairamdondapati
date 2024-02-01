function toggle(){
    let icon=document.getElementById('icon');
    let headerlinks=document.getElementById('header-links');
    headerlinks.classList.toggle('active');
    icon.classList.toggle('active');

}


const li= document.querySelectorAll('li');

for(let i=0; i<li.length; i++){
    li[i].addEventListener('click',()=>{
        let headerlinks=document.getElementById('header-links');
        headerlinks.classList.remove('active');
        icon.classList.remove('active');

    })
}




