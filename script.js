document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    submitPost()
})

function submitPost() {
    details = {
        title: document.getElementById('title').value,
        avatar_url: document.getElementById('url').value,
        category: document.getElementById('cat').value,
        blog_post: document.getElementById('post').value,
        likes: 0,
        comments: []
    }

    fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(details)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}