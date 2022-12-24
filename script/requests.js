class Requests {
    async getRequest (url, callback) {
        const response = await fetch (url)

        if (response.status === 200) {
            const data = await response.json()

            if (callback !== undefined) {
                callback(data)
            } 
        }
    }

    async postRequest (url, object, callback) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }

        const response = await fetch(url, requestOptions)

        if (response.status === 200) {
            const data = await response.json()

            if (callback !== undefined) {
                callback(data)
            } 
        }
    }
}

const requests = new Requests()