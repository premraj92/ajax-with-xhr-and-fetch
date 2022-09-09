const getUserBtn = document.getElementById('getUserBtn')
const getUsersBtn = document.getElementById('getUsersBtn')
const getRemoteUsersBtn = document.getElementById('getRemoteUsersBtn')


getUserBtn.addEventListener('click', fetchUsers.bind(null, 'user.json', false))
getUsersBtn.addEventListener('click', fetchUsers.bind(null, 'users.json', false))
getRemoteUsersBtn.addEventListener('click', fetchUsers.bind(null, 'https://jsonplaceholder.typicode.com/users', true))


function fetchUsers(url, ...flags) {
    console.log(`Get User Clicked`)
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function () {
        if(this.status === 200) {
            console.log(`user data is `, this.response)

           if(flags[0] === false) {
            document.querySelector('#user-data').innerText = this.response
            return
           }

           document.querySelector('#remote-user-data').innerText = this.response
        }
    }

    xhr.send()
}