function hello(){
    const show = document.getElementById('Rname');
    console.log(show.style.display);
    if(show.style.display === 'block'){
        show.style.display = 'none'; 
    }
    else{
       show.style.display = 'block'; 
    }
}

function show(){
    const showSkills = document.getElementById('setSkills');
    console.log(showSkills);
    if(showSkills.style.display === 'block'){
        showSkills.style.display = 'none';
    }
    else{
        showSkills.style.display ='block'
    }
}