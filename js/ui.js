
class UI{
    constructor(){
        this.movieContainer = document.querySelector(".container")
        this.IMG_PATH = "https://image.tmdb.org/t/p/w1280"
    }

    displayMovie(data){
        data.forEach(item => {
            //this.addMovies(item);
            //console.log(item)
        this.movieContainer.innerHTML += `
        <div class="movie">
            <img src=${this.IMG_PATH+item.poster_path} alt="${item.title}" loading="lazy">
            <div class="movie-info">
                <h4 class="title">
                    ${item.title}
                </h4>
                <span class=${this.getClassbyRating(item.vote_average)}>
                    ${item.vote_average}
                </span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${item.overview}</p>
            </div>
        <div>
        `
        })
    }

    //Get clases
    getClassbyRating(vote){
        if(vote> 8){
            return "green"
        } else if (vote < 8 && vote > 6){
            return "orange"
        } else{
            return "red"
        }
    }

    displaySearch(data){

        this.movieContainer.innerHTML = ""
        data.forEach(item => {
            
        this.movieContainer.innerHTML += `
        <div class="movie">
            <img src=${this.IMG_PATH+item.poster_path} alt="${item.title}" loading="lazy">
            <div class="movie-info">
                <h4 class="title">
                    ${item.title}
                </h4>
                <span class=${this.getClassbyRating(item.vote_average)}>
                    ${item.vote_average}
                </span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${item.overview}</p>
            </div>
        <div>
        `
        })
    }

    displayLoadingMessage(msg = ""){
        if(document.querySelector(".loading")){
            document.querySelector(".loading").remove()
        }else{
            const loadingMessage = document.createElement("div")
            //Add class
            loadingMessage.classList.add("loading")
            //Add text node
            loadingMessage.appendChild(document.createTextNode(msg))
            
            const movie = document.querySelector(".movie")
            const container = document.querySelector(".container")

            container.insertBefore(loadingMessage, movie)
        }    
    }
}