function toggle(){
    let icon=document.getElementById('icon');
    let headerlinks=document.getElementById('header-links');
    headerlinks.classList.toggle('active');
    icon.classList.toggle('active');

}



const links=document.querySelectorAll('.header-sm-links')
for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', () =>{
        let headerlinks=document.getElementById('header-links');
        headerlinks.classList.remove('active');
        icon.classList.remove('active');
    })
}

let form=document.getElementById('form');
form.addEventListener('submit', ()=>{
    alert(' Submitted Sucessfully')
})




