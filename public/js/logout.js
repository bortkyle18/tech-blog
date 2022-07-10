const logoutHandler = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
        alert('Your are logged out!')
    } else {
        alert('Failed to log out');
    }
};

document.querySelector('#logout-link').addEventListener('click', logoutHandler);