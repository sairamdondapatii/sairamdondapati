function toggle(){
    let icon=document.getElementById('icon');
    let headerlinks=document.getElementById('header-links');
    let fa=document.getElementById('fa');
    headerlinks.classList.toggle('active');
    if(fa.classList=='fa fa-bars'){
        fa.classList.remove('fa-bars');
        fa.classList.add('fa-close');
    }else{
        fa.classList.remove('fa-close');
        fa.classList.add('fa-bars');
    }

}



const links=document.querySelectorAll('.header-sm-links')
for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', () =>{
        let headerlinks=document.getElementById('header-links');
        headerlinks.classList.remove('active');
        
    })
}

/*let form=document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert('Submitted sucessfully')
})*/




