var postContainer = document.getElementById("posts");

$(document).ready(function () {
    var requestUrl ="http://localhost:3000/api/posts/"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for(var i =0;i<data.length;i++){
      //Using console.log to examine the data
      console.log(data);
      var locationName = document.createElement("h1");
      var locationAddress = document.createElement("h2");
      var userPost = document.createElement("p");

      //Setting the text of the h3 element and p element.
      locationName.textContent = data[1].content;
      locationAddress.textContent = data[1].title;
      userPost.textContent = data[1].user.username;

      //Appending the dynamically generated html to the div associated with the id="users"
      //Append will attach the element as the bottom most child.
      postContainer.append(locationName);
      postContainer.append(locationAddress);
      postContainer.append(userPost);
      }
    });
})