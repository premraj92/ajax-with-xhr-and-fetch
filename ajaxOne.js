const ajaxBtn = document.querySelector('#btn')

ajaxBtn.addEventListener('click', makeXHRReq)

function makeXHRReq() {
    console.log(`Ajax btn is clicked`)

    // create a XHR object
    const xhr = new XMLHttpRequest()

    console.dir(xhr)


    console.log(`On Ready State Change before Connection opened`, xhr.readyState)

    // use XHR api's open method to trigger a new response
    // open accepts 3 arguments - http method type, url/file, asyncFlag 
    xhr.open('GET', 'lorem.txt', true)


    // optional used for loader
    xhr.onprogress = function() {
        console.log(`In progress ...`)
    }


    // use onload() method XHR to check whether response is ready
    // unlike onReadyStateChange onload don't track the 4 stages of ready it cares only about the last stage 4 - i.e. response received & checks for it
    // we don't need an additional check for readyState but just for response status codes like - 200, 400, 500 series 
    xhr.onload = function () {
        // this will print 4 because that is the only state the onload method tracks
        console.log(`On Ready State Change `, this.readyState)
        if(this.status === 200) {
            console.log(`The Response is `, this.responseText)
            document.getElementById('text').innerText = this.responseText
        }
    }

    xhr.onerror = function () {
        console.error(`Error happened with xhr request`)
        document.getElementById('text').innerText = "Text not found"
    }


        // method used to trigger actual request
        xhr.send()


    // OLD WAY - to use this method instaed of onload - - you don't wan't use this unless you need to need to track 4 stages
    // // use onreadyStateChange() method XHR to check whether onReadyState is 4 & response is returned
    // xhr.onreadystatechange = function () {
    //     console.log(`On Ready State Change `, this.readyState)
    //     if(this.readyState === 4 && this.status === 200) {
    //         console.log(`The Response is `, this.responseText)
    //     }
    // }


    // the 4 states that onReadyStateChange track/listensTo are
    // readyState values
    // 0 - request not initailized
    // 1 - server connection established
    // 2 - request received
    // 3 - processing request
    // 4 - request finished & response is ready
    
}