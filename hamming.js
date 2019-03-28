function checkHammingDistance(firstString, secondString) {
  let count = 0;

  if (firstString.length === 0 || secondString.length === 0){
    alert('You must enter a value into both fields.')
  }

 if (firstString.length != secondString.length) {
    alert('The two strings must have equal length.')
  
  }
  
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] != secondString[i]) { 
      count++;
    }
  }
  
  return count;
}

function runCheck() {
  const firstString = document.getElementById('firstString').value; // This will get the value for the input for the first string which has an id of firstString
  const secondString = document.getElementById('secondString').value;
  
 // call the checkHammingDistance function a
  // and pass in the two variables
  const distance = checkHammingDistance(firstString, secondString);
  const distanceDivElement = document.getElementById('distance'); // Get the div that will hold the result
  distanceDivElement.innerHTML = distance; // Display the result on the page
   
  
  
}





