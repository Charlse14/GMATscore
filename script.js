

let btn = document.querySelector(".btn");
let display = document.querySelectorAll(".active");
let item = document.querySelectorAll(".input input");


const changer = (ind, curr, tar, base, str, any) => {

	let heading =    display[ind].children[0].children[1];              // heading
	let yellow =     display[ind].children[0].children[2].children[0]; // yellow
	let yellow_num = display[ind].children[0].children[2].children[0].children[1];   // yellow pointer number
	let inside_num = display[ind].children[0].children[2].children[0].children[2];   // inside number
	let blue =       display[ind].children[0].children[2].children[1];   // blue
	let blue_num =   display[ind].children[0].children[2].children[1].children[1];  // blue pointer num
	let para =       display[ind].children[0].children[3].children[0];               // para to change
	let yellow_arrow = display[ind].children[0].children[2].children[0].children[0]; // yellow arrow
	let blue_arrow =   display[ind].children[0].children[2].children[1].children[0];   // blue arrow


	heading.textContent = str + curr;
	yellow.style.width =  (tar/base)*100 + "%";
	yellow_num.textContent = tar; 
	blue.style.width =  (curr/base)*100 + "%";
	blue_num.textContent = curr;

	if(tar - curr >= 0){

		inside_num.innerHTML = "+" + (tar - curr);
		if(tar - curr === 0 ) inside_num.innerHTML = "";

		if(tar - curr <= any && tar - curr >= 0){

			if(tar !== curr) inside_num.style.right = "-10px";

			yellow_num.style.top = "24px";
			yellow_arrow.style.transform = "rotate(180deg)";
			yellow_arrow.style.top = "15px";

		}else{

			inside_num.style.right = "10px";
			yellow_num.style.top = "-24px";
			yellow_arrow.style.transform = "rotate(0deg)";
			yellow_arrow.style.top = "-10px";
		}

		if(tar - curr === 1){

			para.innerHTML =  str+curr +  ", which is " + "<strong>1 point</strong> lower than your target GMAT score of " +str+tar+".";

		}else if(tar === curr){

			para.innerHTML = str+curr +  ", which is " + "equal to your target GMAT score.";
		}
		else{
			para.innerHTML =  str+curr +  ", which is <strong>" + (tar - curr) + " points </strong> lower than your target GMAT score of " +str+tar+".";
		}
		
	}else {

		if(curr - tar <= any){

			yellow_num.style.top = "24px";
			yellow_arrow.style.transform = "rotate(180deg)";
			yellow_arrow.style.top = "15px";
		}else {

			inside_num.style.right = "10px";
			yellow_num.style.top = "-24px";
			yellow_arrow.style.transform = "rotate(0deg)";
			yellow_arrow.style.top = "-10px";
		}

		if(curr - tar === 1){

			para.innerHTML = str+curr +  ", which is " +  "<strong>1 point </strong> higher than your target GMAT score of " +str+tar+".";

		}else{
			para.innerHTML = str+curr +  ", which is <strong>" +  (curr - tar) + " points </strong> higher than your target GMAT score of " + str+tar+".";
		}
	}

}


let counter = 0;



const onclick = () => {

	let quant_curr = parseInt(item[0].value);
	let quant_tar = parseInt(item[1].value);
	let verbal_curr = parseInt(item[2].value);
	let verbal_tar = parseInt(item[3].value);

	if((quant_curr <= 60 && quant_curr >= 1) && 
	   (quant_tar <= 60 && quant_tar >= 1) && 
	   (verbal_curr <= 60 && verbal_curr >= 1) && 
	   (verbal_tar <= 60 && verbal_tar >= 1) && counter === 0) {
        

		let tc_score = 200 + (verbal_curr + quant_curr)*5;
		let tt_score = 200 + (verbal_tar + quant_tar)*5;


		// contet changer funtion

		for(let i = 0; i < 3; i++){
			if(i === 0){changer(i, tc_score, tt_score, 800, "", 15);}
			else if(i === 1){changer(i, quant_curr, quant_tar, 60, "Q", 4);}
			else {changer(i, verbal_curr, verbal_tar, 60, "V", 4);}	
		}


		// displaying things

		display.forEach(i => {
			i.classList.remove("active");
		})

	    counter = 1;

	}else if (counter === 1){

		counter = 0;

		display.forEach(i => {
			i.classList.add("active");
		})

		item.forEach(i => {
			i.value = "";
		})

	}
}



btn.addEventListener("click", onclick);
