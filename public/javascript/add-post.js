async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    console.log(title, content)
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);