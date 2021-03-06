const postId = document.querySelector('input[name="post-id"]').value;


const editHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;

    // edit post
    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
        postTitle,
        postContent,
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update your post');
    }
    document.location.replace('/dashboard');
};

// delete post
const deleteHandler = async () => {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};


// edit on submit
document.querySelector('#edit-post-form').addEventListener('submit', editHandler);
// delete on click
document.querySelector('#delete-btn').addEventListener('click', deleteHandler);
