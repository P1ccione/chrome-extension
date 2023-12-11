// content.js

// Add a click event listener to the element with ID "test
document.getElementById("test").addEventListener("click", function () {
  console.log("clicked content.js");
  if (confirm("Are you sure you want to get the data?")) {
    // Make an API request
    fetch("https://reqres.in/api/users/2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("Hello World! API Response: " + JSON.stringify(data));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:");
      });
  } else {
    alert("NO DATA FOR YOU <3");
  }
});
