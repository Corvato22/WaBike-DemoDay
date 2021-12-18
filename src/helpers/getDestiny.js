export const getDestiny = () =>{
    if(keyword) {
        // request to nominatim api
        fetch(`https://nominatim.openstreetmap.org/search?q=${keyword}&format=json`)
          .then((response) => {
            return response.json()
          }).then(json => {
           // get response data from nominatim
           console.log("json", json)
            if(json.length > 0) return renderResults(json)
            else alert("Location not found")
        })
      }
}