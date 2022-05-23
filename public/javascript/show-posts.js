// Functions used in the main page
function getPosts() {
    var postContainer = document.querySelector(".posts");
    console.log(postContainer)
    fetch(`/api/posts`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var dateParts = data[i].created_at.split("-");
                var jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
                var month = jsDate.getUTCMonth() + 1;
                var day = dateParts[2].substr(0, 2);
                var year = jsDate.getFullYear();

                var newDate = year + "/" + month + "/" + day;
                //Using console.log to examine the data
                var postDate = document.createElement("p")
                var userPost = document.createElement("h2");
                var userNamePost = document.createElement("p");
                var description = document.createElement("h1");
                var userNameComment = document.createElement("p");
                var comments = document.createElement("p");
                var commentInput = document.createElement("input");
                var commentButton = document.createElement("button");
                comments.classList.add('comments', "ml-10", "text-base");
                userNameComment.classList.add('userNameComments', 'ml-10', "text-lg",);
                userNamePost.classList.add("font-semibold", "text-base", "text-lg", "bold")
                userPost.classList.add("underline", "font-bold", "text-xl", "text-base", "py-2")
                postDate.classList.add('text-neutral-500', 'text-md')

                //Setting the text of the h3 element and p element.
                description.textContent = data[i].content;
                userPost.textContent = data[i].title;
                userNamePost.textContent = data[i].user.username;
                postDate.textContent = newDate;


                //Appending the dynamically generated html
                //Append will attach the element as the bottom most child.
                postContainer.append(userPost);
                postContainer.append(userNamePost);
                postContainer.append(postDate);
                postContainer.append(description);
                //Appends an input field and a button for comments on each post and dynamically grabs each id indvidual to each post id
                //Appends all comments using innerHtml
                for (var x = 0; x < data[i].comments.length; x++) {
                    userNameComment.textContent = data[i].comments[x].user.username;
                    comments.textContent = data[i].comments[x].comment_text;

                    var dateParts = data[i].comments[x].created_at.split("-");
                    var jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
                    var month = jsDate.getUTCMonth() + 1;
                    var day = dateParts[2].substr(0, 2);
                    var year = jsDate.getFullYear();

                    var newDate = year + "/" + month + "/" + day;

                    postContainer.innerHTML += "<p class='ml-10 text-lg font-medium'>" + userNameComment.textContent + "</p><p class='ml-10 text-sm text-neutral-500'>" + newDate + "</p>";
                    postContainer.innerHTML += "<p class='ml-10 mb-1 text-base'>" + comments.textContent + "</p>";
                }
                postContainer.innerHTML += "<input type='text' id=" + data[i].id + "comment" + " name='comment-text' class=' border-black mb-2 form-control block h-half w-full px-3py-1.5 text-basefont-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>" + "<button onclick='addComment()''  id=" + data[i].id + "  type='submit' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>" + "Add Comment" + "</button>";
            }
        });
}
getPosts();


function addComment() {
    // Sets comment to query selector with comment-text
    const comment_text = document.getElementById(event.srcElement.id + "comment").value;


    // sets post ID for the comment, currently hardcoded to 4
    const post_id = event.srcElement.id;

    // Response for POST
    const response = fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
            comment_text,
            post_id
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // If Response is OK - do the following
    if (response.ok) {
        document.location.replace("/");
    } else {
        //returns error for no reason still working on it, even though it works
        //!!!!!!!!!!!!!!!!!!
        document.location.replace("/");
    }
}

