document.getElementById("generateJoke").addEventListener("click", function () {
    const emojiElement = document.getElementById("emoji");
    const jokeElement = document.getElementById("joke");
  
    // Make API call using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any?type=singlehttps://v2.jokeapi.dev/joke/Programming,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const joke = response.joke;
        const category = response.category;
  
        // Set emoji based on category
        if (category === "Dark") {
          emojiElement.textContent = ":(";
        } else if (category === "Misc" || category === "Programming") {
          emojiElement.textContent = ":)";
        } else {
          emojiElement.textContent = ":/";
        }
  
        // Display the joke
        jokeElement.textContent = joke;
      } else {
        jokeElement.textContent = "Couldnt load joke. Try again.";
        emojiElement.textContent = ":/ sad";
      }
    };
    xhr.onerror = function () {
      jokeElement.textContent = "connection error hain apke.";
      emojiElement.textContent = ":/";
    };
    xhr.send();
  });