async function newFormHandler(event) {
  // Prevents default from happening
  event.preventDefault();

  // Sets title to query selector with post-title
  const title = document.querySelector("").value;

  // Sets post_url to query selector with post-url
  const post_data = document.querySelector("").value;

  // Response for POST
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      // Add in the user_id - we need something in our database table
      user_id,
      post_data,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // If Response is OK - do the following
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// Event Listener for New Post Form
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
