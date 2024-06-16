
console.log('May the force be with me and my code')

const button = document.querySelector('.saberme')
const display = document.querySelector('.results')

button.addEventListener('click', function(){
    getFromApi()
})

async function getFromApi() {
    try {
            let response = await fetch('https://swapi.dev/api/people/10/')
            let data = await response.json()
        
            response = await fetch(data.homeworld)
            let homeworldData = await response.json()

            response = await fetch(data.vehicles)
            let vehiclesData = await response.json()
                
            display.textContent =`Name: ${data.name},
            Homeworld: ${homeworldData.name},
            Gender: ${data.gender},
            Height: ${data.height} cm,
            Weight: ${data.mass} kg,
            Hair color: ${data.hair_color},
            Eye color: ${data.eye_color},
            Birth year: ${data.birth_year},
            Vehicle: ${vehiclesData.name}`
        
        } catch (error) {
            console.error('Error:', error);
            }
}
