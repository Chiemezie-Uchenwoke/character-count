const textarea = document.getElementById('word-count');
let updateCharacterCount = document.getElementById("update-char");
const maximumChar = 100;
const close = document.getElementById("close");
const post = document.getElementById("post");
const postElement = document.getElementById("parent");

textarea.addEventListener("input", () => {
    let numberOfCharacters = textarea.value.length;    

    if (numberOfCharacters > 100){
        updateCharacterCount.textContent = "You have exceeded by " + (maximumChar - numberOfCharacters);
        updateCharacterCount.style.color = "#ff2424";
    } 

    else if (numberOfCharacters === 200){
        textarea.value = textarea.value.slice(201, textarea.value.length);
    }

    else if (numberOfCharacters === 0){
        updateCharacterCount.textContent = "";
    }
    
    else {
        updateCharacterCount.textContent = (maximumChar - numberOfCharacters) + " Characters left";
        updateCharacterCount.style.color = "#1fb7f3";
    }
    

  textarea.style.height = "6rem";  // Reset the height
//   textarea.style.height = textarea.scrollHeight + "px"; 

});

// Close and Post Events
close.addEventListener("click", () => {
    postElement.style.display = "none";
    post.style.display = "block";
    textarea.value = "";
});

post.addEventListener("click", () => {
    let numberOfCharacters = textarea.value.length; 

    post.style.display = "none";
    postElement.style.display = "block";
    
    if (numberOfCharacters === 0){
        updateCharacterCount.textContent = "";
    } else {
        updateCharacterCount.textContent = (maximumChar - numberOfCharacters) + " Characters left";
        updateCharacterCount.style.color = "#1fb7f3";
    }
});