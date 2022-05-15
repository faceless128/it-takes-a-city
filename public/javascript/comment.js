// function for submission of a new comment
// capture the form content
  async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector("").value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // defining the method as a POST
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// this is event listener for submission of a new comment
document.querySelector("").addEventListener("submit", commentFormHandler);
