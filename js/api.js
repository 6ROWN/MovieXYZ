
class movieApi{
    constructor(){
        this.API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5e89e874fc271db15c4f4604c8f05594&page=1"
        this.IMG_PATH = "https://image.tmdb.org/t/p/w1280"
        this.SEARCH_URL ='https://api.themoviedb.org/3/search/movie?api_key=5e89e874fc271db15c4f4604c8f05594&query='
    }

    async getMovies(){
        const response = await fetch(this.API_URL)
        const data = await response.json()
        return{
            data
        }
    }

    async searchMovies(item){
        const response = await fetch(this.SEARCH_URL + item)
        const data = await response.json()
        return{
            data
        }

    }
}

// const newMOv = new movieApi()

// newMOv.searchMovies("hard")
// .then(data=>console.log(data))