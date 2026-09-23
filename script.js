//your JS code here. If required.

//Step 1: Target the elements in the DOM
const removeBtn = document.querySelector("input[type="button"]");
const colorDropDown = document.getElementById("colorSelect");

//Step 2 & 3: Define the removal logic func
function removeSelectedColor() {
	
	//check if a valid item is actually selected
	if(colorDropDown.selectedIndex !== -1) {
		//remove the item
		colorDropDown.options[colorDropDown.selectedIndex].remove();
	}
}

//Step 4: Bind the func to execute on a click event 
removeBtn.addEventListener("click", removeSelectedColor);

