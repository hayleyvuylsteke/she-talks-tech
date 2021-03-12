async function editFormHandler(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('input[name="post-content"]').value.trim();

    console.log(post_title + "title")
    console.log(post_content + "postcontent")
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log("can I see this?" + post_title + post_content + id)
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  