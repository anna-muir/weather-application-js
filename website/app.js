

async function performAction() {
    const enteredZip = document.getElementById('zip').value

    if (enteredZip === '') {
        alert('Please enter a zipcode.')
    } else {

        try {

            const api_url = `/weather/${enteredZip}`
            const response = await fetch(api_url)
            const newData = await response.json()
            console.log(newData)

            console.log(newData.name, newData.weather[0].description, newData.main.temp)

            const tempContainer = document.getElementById('temp')
            const dateContainer = document.getElementById('date')
            const feelingContainer = document.getElementById('content')
            const date = new Date();
            dateContainer.innerHTML = `Date  - ${date}`
            tempContainer.innerHTML = `Temperature - ${newData.main.temp}`
            feelingContainer.innerHTML = `You are feeling ${document.getElementById('feelings').value}`
            document.getElementById('entry-appear').classList.add('active')
        } catch (error) {
            console.log(error)
            alert('There has been an error. Please try again.')
        }
    }
}

// Add event listener of click to generate button
document.getElementById('generate').addEventListener('click', performAction)

