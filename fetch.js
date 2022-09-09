const fetchRemoteAPI = document.getElementById('fetchRemoteAPI')
const postRemoteAPI = document.getElementById('postRemoteAPI')

fetchRemoteAPI.addEventListener('click', () => {
    fetch('https://reqres.in/api/users/')
        .then(res => {
            // we need this ok status check because fetch always succeeds even with most error codes like 404 and it does not throw an error or at least it does not Trigger the Reject State of Promise & this in turn prevents the catch block from executed
            // But here with our check we are manually triggering that catch block by throwing the Error  
            if(res.ok) {
            return res.json()
            }
            else {
                throw Error('Fetch APi failed')
            }
        })
        .then(data => {
            console.log(`Users data fetched from Request Response API is `, data)
            document.getElementById('fetch-data').innerText = JSON.stringify(data)
        })
        .catch(err => console.error(err))
})

postRemoteAPI.addEventListener('click', () => {
    fetch('https://reqres.in/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: 'Sample User One'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(`We have posted a new User to server via the Fetch API `, data)
            document.getElementById('fetch-data').innerText = `Our Newly Created User with Fetch POST call is ${JSON.stringify(data)}`
        })
})