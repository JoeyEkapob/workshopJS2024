const apikey ="14ee611023e2e1c092cc31a06daef477";
let years = "2020";
  const url =`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;   
/*  const url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&year=${years}`;   */

const content =document.getElementById('content')
const dropdown =document.getElementById('years')
const urlPoster=`https://image.tmdb.org/t/p/w500/`;

async function  displaymovie(url) {
 
    const res = await fetch(url);
    const movie = await res.json()
  /*   console.log(movie) */

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    movie.results.forEach(data=>{
        const movieel = document.createElement('div')
        movieel.classList.add('movie');
        const title = document.createElement('h2')
        const imgel = document.createElement('img')
        title.innerHTML=`${data.title.substring(0,24)}`
        imgel.src=`${urlPoster}${data.poster_path}`
        movieel.appendChild(imgel);
        movieel.appendChild(title);
        content.appendChild(movieel)
    });
}
dropdown.addEventListener('change',()=>{

    years=dropdown.value
    const updateurl =`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;
    displaymovie(updateurl);
})

displaymovie(url);