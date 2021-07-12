export const request = async (url, data) => {

  try {
        const headers = {}
        let body
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body
        })

        return await response.json()
    } catch (e) {
        console.warn('Error: ', e.message)
    }
};
