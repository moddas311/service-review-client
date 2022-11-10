export const setUtilitiesToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('https://service-review-assignment11-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('reviewToken')}`
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('reviewToken', data.token);

        })
}

