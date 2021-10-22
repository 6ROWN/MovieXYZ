const search = document.getElementById("form")

search.addEventListener("submit", (e)=>{
    let input = document.querySelector(".search-input")
    e.preventDefault()   
    if(input.value && input.value!==""){
        //Instantiate movie App
        const movie = new movieApi()
        //Instantiate ui
        const ui = new UI()

        movie.searchMovies(input.value)
        .then(data=> {
            console.log(data.data.results.length)
            //Display search results
            if(data.data.results.length>0){
                ui.displaySearch(data.data.results)
            }else{

                ui.displayLoadingMessage(`THe movie ${input.value} is not available at the moment. Try searching another movie`)
            }        
        })
        .catch(error=>{
            ui.displayLoadingMessage("Problem loading data. Check internet connection and retry.")
        })

        //clear Input value
        //Display loading message
        ui.displayLoadingMessage("Fetching data. This would take a few seconds ...")
        
    }else{
        document.location.reload()
        
    }

})

document.addEventListener("DOMContentLoaded", ()=>{
    
    //Instantiating movie Ap 
    const movie = new movieApi()
    //Instantiating ui
    const ui = new UI()
    movie.getMovies()
    .then(data=>{
        ui.displayMovie(data.data.results)
    })
    .catch(error=>{
        ui.displayLoadingMessage("Problem loading data. Check internet connection and retry.")
    })
})
