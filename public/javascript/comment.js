async function newFormHandler(event) {
    // Prevents default from happening
    event.preventDefault();
  
    // Sets title to query selector with post-title
    const comment_text = document.querySelector('input[name="comment-text"]').value;
  
    const post_id = 6;
  
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
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
  
  // Event Listener for New Post Form
  document
    .querySelector(".add-comment-form")
    .addEventListener("submit", newFormHandler);
  