const body=document.body;
const changebackgroundcolorbutton=document.getElementById("changebackgroundcolorbutton");
changebackgroundcolorbutton.addEventListener('click', () => { 
	body.style.backgroundColor='red';
});

changebackgroundcolorbutton.addEventListener('dblclick', () => { 
	body.style.backgroundColor= 'green';
});

 
