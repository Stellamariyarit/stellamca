const lightbulb=document.getElementById('lightbulb');
const turnonbutton=document.getElementById('turnonbutton');
const turnoffbutton=document.getElementById('turnoffbutton');
turnonbutton.addEventListener('click',() => { 
	lightbulb.src='light-on.jpeg';
});
turnoffbutton.addEventListener('click', () => { 
	lightbulb.src='light-off.jpeg';
});

