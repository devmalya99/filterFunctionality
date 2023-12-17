// Get the filter input element by its ID
const filter = document.getElementById('filter');

// Add an event listener to the filter input that triggers on the 'keyup' event
filter.addEventListener('keyup', function(event) {
   // Get the text entered in the filter input and convert it to lowercase
   const textEntered = event.target.value.toLowerCase();

   // Get all the fruit items by their class name
   let fruitItems = document.getElementsByClassName('fruit');

   // Loop through each fruit item
   for(let i = 0; i < fruitItems.length; i++) {
       // Get the text of the current fruit item and convert it to lowercase
       const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
     
       // If the text of the current fruit item does not include the text entered in the filter input
       if(!currentFruitText.includes(textEntered)) {
           // Hide the current fruit item
           fruitItems[i].style.display = 'none';
       }
       // If the text of the current fruit item does include the text entered in the filter input
       else {
           // Show the current fruit item
           fruitItems[i].style.display = 'flex';
       }
   }
});
