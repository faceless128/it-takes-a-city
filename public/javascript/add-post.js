async function newFormHandler(event) {
  // Prevents default from happening
  event.preventDefault();

  // Sets title to query selector with post-title
  const title = document.querySelector('input[name="post-title"]').value;

  // Sets post_url to query selector with post-url
  const post_content = document.querySelector('textarea[name="post-data"]').value;

  // Response for POST
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content
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
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
