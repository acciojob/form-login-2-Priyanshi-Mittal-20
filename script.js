//your JS code here. If required.
let btn= document.getElementById("submit")
btn.addEventListener("click",()=>displayData(e))

function displayData(e)
{
	e.preventDefault()
	let fName= document.getElementById("fName").value
	let lName= document.getElementById("lName").value
	let phone= document.getElementById("phone").value
	let email= document.getElementById("email").value
 alert(`First Name: ${fName} Last Name: ${lName} Phone Number: ${phone} Email ID: ${email}`)
}