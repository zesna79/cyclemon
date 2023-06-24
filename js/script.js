document.onreadystatechange = function(){
	if(document.readyState !== 'complete'){
		document.querySelector('.loader').style.display = 'flex';
	}else{
		document.querySelector('.loader').style.display = 'none';
	}
}

window.addEventListener('scroll' , changeBox);
window.addEventListener('resize' , changeBox);
function changeBox(){
	let heightPage = parseInt(window.innerHeight);
	let boldBox = document.querySelector('#bold-box');
	let currScroll = parseInt(window.scrollY);
	let trailer = document.querySelector('.trailer');
	if(trailer){
		trailer.style.visibility = 'hidden';
	}
	boldBox.removeAttribute('id');

	if(0 <= currScroll && currScroll < heightPage/4){
		let box1 = document.querySelector('.box1');
		box1.setAttribute('id' , 'bold-box');
	}
	else if(heightPage/4 <= currScroll && currScroll < heightPage){
		let box1 = document.querySelector('.box1');
		box1.setAttribute('id' , 'bold-box');
		if(trailer){
		trailer.style.visibility = 'visible';
		}
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*2)){
		let box2 = document.querySelector('.box2');
		box2.setAttribute('id' , 'bold-box');
		if(trailer){
			trailer.style.visibility = 'visible';
		}
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*3)){
		let box3 = document.querySelector('.box3');
		box3.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*4)){
		let box4 = document.querySelector('.box4');
		box4.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*5)){
		let box5 = document.querySelector('.box5');
		box5.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*6)){
		let box6 = document.querySelector('.box6');
		box6.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*7)){
		let box7 = document.querySelector('.box7');
		box7.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*8)){
		let box8 = document.querySelector('.box8');
		box8.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*9)){
		let box9 = document.querySelector('.box9');
		box9.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*10)){
		let box10 = document.querySelector('.box10');
		box10.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*11)){
		let box11 = document.querySelector('.box11');
		box11.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*12)){
		let box12 = document.querySelector('.box12');
		box12.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*13)){
		let box13 = document.querySelector('.box13');
		box13.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*14)){
		let box14 = document.querySelector('.box14');
		box14.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*15)){
		let box15 = document.querySelector('.box15');
		box15.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*16)){
		let box16 = document.querySelector('.box16');
		box16.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*17)){
		let box17 = document.querySelector('.box17');
		box17.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*18)){
		let box18 = document.querySelector('.box18');
		box18.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*19)){
		let box19 = document.querySelector('.box19');
		box19.setAttribute('id' , 'bold-box');
	}
	else if(heightPage <= currScroll && currScroll < (heightPage*20)){
		let box20 = document.querySelector('.box20');
		box20.setAttribute('id' , 'bold-box');
	}
}

let scrollDown = document.querySelector('.fleche');
if(scrollDown){
	scrollDown.addEventListener('click', function() {
		let heightPage = parseInt(window.innerHeight);
		let currScroll = parseInt(window.scrollY);
	
		if(0 <= currScroll && currScroll < heightPage){
			scrollDown.setAttribute('href' , '#part18');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*2)){
			scrollDown.setAttribute('href' , '#part1');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*3)){
			scrollDown.setAttribute('href' , '#part2');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*4)){
			scrollDown.setAttribute('href' , '#part3');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*5)){
			scrollDown.setAttribute('href' , '#part4');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*6)){
			scrollDown.setAttribute('href' , '#part5');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*7)){
			scrollDown.setAttribute('href' , '#part6');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*8)){
			scrollDown.setAttribute('href' , '#part7');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*9)){
			scrollDown.setAttribute('href' , '#part8');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*10)){
			scrollDown.setAttribute('href' , '#part9');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*11)){
			scrollDown.setAttribute('href' , '#part10');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*12)){
			scrollDown.setAttribute('href' , '#part11');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*13)){
			scrollDown.setAttribute('href' , '#part12');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*14)){
			scrollDown.setAttribute('href' , '#part13');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*15)){
			scrollDown.setAttribute('href' , '#part14');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*16)){
			scrollDown.setAttribute('href' , '#part15');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*17)){
			scrollDown.setAttribute('href' , '#part16');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*18)){
			scrollDown.setAttribute('href' , '#part17');
		}
		else if(heightPage <= currScroll && currScroll < (heightPage*19)){
			scrollDown.setAttribute('href' , '#end-part');
		}
	 });
}

const posters = document.querySelectorAll('.example img');
const modal_container = document.querySelector('.modal-container');
const modal_boxs = document.querySelectorAll('.modal')
const closes = document.querySelectorAll('.fa-times');
const forwards = document.querySelectorAll('.fa-forward');
const firs_img = document.querySelectorAll('.modal img');

posters.forEach((poster , index)=>{
	const modal_box = document.querySelector(`.modal-box${index+1}`);
	poster.addEventListener('click' , ()=>{
		modal_boxs.forEach((modal)=>{
			modal.style.display = 'none'
		})
		modal_container.style.display = 'block';
		modal_box.style.display = 'block';
	})
})

window.addEventListener('click' ,(event)=>{
	if(event.target == modal_container && event.target != modal_boxs){
		modal_container.style.display = 'none';
	}
})

closes.forEach((close)=>{
	close.addEventListener('click' , ()=>{
		modal_container.style.display = 'none';
	})
})

forwards.forEach((forward , index)=>{
	forward.addEventListener('click' , ()=>{
		if(forward.classList.contains('fa-forward')){
			forward.classList.remove('fa-forward');
			forward.classList.add('fa-backward');
			firs_img[index].removeAttribute('src');
			switch (index) {
				case 0:
					firs_img[index].setAttribute('src' , './images/tandem1.jpg');
					break;
				case 1:
					firs_img[index].setAttribute('src' , './images/weirdo1.jpg');
					break;
				case 2:
					firs_img[index].setAttribute('src' , './images/hipster1.jpg');
					break;
				case 3:
					firs_img[index].setAttribute('src' , './images/gangsta1.jpg');
			}
		}else{
			forward.classList.remove('fa-backward');
			forward.classList.add('fa-forward');
			firs_img[index].removeAttribute('src');
			switch (index) {
				case 0:
					firs_img[index].setAttribute('src' , './images/tandem.jpg');
					break;
				case 1:
					firs_img[index].setAttribute('src' , './images/weirdo.jpg');
					break;
				case 2:
					firs_img[index].setAttribute('src' , './images/hipster.jpg');
					break;
				case 3:
					firs_img[index].setAttribute('src' , './images/gangsta.jpg');
			}
		}
	})
})
