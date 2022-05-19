async function newFormHandler(event) {
    // Prevents default from happening
    event.preventDefault();
  
    // Sets comment to query selector with comment-text
    const comment_text = document.querySelector('input[name="comment-text"]').value;

    // sets post ID for the comment, currently hardcoded to 4
    const post_id = this.id;
  
    // Response for POST
    const response = await fetch(`/api/comments`, {
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
      alert(response.statusText);
    }
  }
  
  // Event Listener for New Post Form
  document
    .querySelector(".add-comment-form")
    .addEventListener("submit", newFormHandler);
  