const checkBox = document.getElementById("checkbox");
const resCheckBox = document.getElementById("res-checkbox");
const movieContainer = document.querySelector(".movie-container");
const actionMovies = document.querySelector(".action-movies");
const comedyMovies = document.querySelector(".comedy-movies");
const dramaMovies = document.querySelector(".drama-movies");
const searchBox = document.getElementById("searchBox");
const resultContainer = document.getElementById("resultContainer");
const resSearchBar = document.getElementById("resSearchBar");
const resContainer = document.getElementById("responsiveContainer");

checkBox.addEventListener("change", () => {
    darkModeFunc();
});

resCheckBox.addEventListener("change", () => {
    darkModeFunc();
});

const darkModeFunc = () => {
    document.body.classList.toggle("dark");
};

const movieArr = [
    action = [
        {
            id: 1,
            img: "../images/Batman.jpg",
            title: "Batman-The Dark Knight",
            duration: "2hr 30min",
            rating: "3.5"
        },

        {
            id: 2,
            img: "../images/Jamesbond.jpg",
            title: "James Bond-No Time To Die",
            duration: "3hr",
            rating: "4.3"
        },

        {
            id: 3,
            img: "../images/Johnwick 4.jpg",
            title: "John Wick 4",
            duration: "3hr 40min",
            rating: "4.7"
        },

        {
            id: 4,
            img: "../images/Mission Impossible.jpg",
            title: "Mission Impossible 6-Fallout",
            duration: "2hr 50min",
            rating: "4.5"
        },

        {
            id: 5,
            img: "../images/Spiderman.jpg",
            title: "Spiderman-No Way Home",
            duration: "3hr 30min",
            rating: "4.9"
        },

        {
            id: 6,
            img: "../images/Uncharted.jpg",
            title: "Uncharted",
            duration: "2hr 20min",
            rating: "4"
        },

        {
            id: 7,
            img: "../images/Wakanda.jpg",
            title: "Wakanda",
            duration: "2hr 50min",
            rating: "4.3"
        },

        {
            id: 8,
            img: "../images/../images/The Mummy.jpg",
            title: "The Mummy",
            duration: "2hr 38min",
            rating: "4.2"
        }
    ],

    comedy = [
        {
            id: 9,
            img: "../images/Baywatch.jpg",
            title: "Baywatch",
            duration: "2hr 40min",
            rating: "4.5"
        },

        {
            id: 10,
            img: "../images/Good Boys.jpg",
            title: "Good Boys",
            duration: "2hr 20min",
            rating: "4.5"
        },

        {
            id: 11,
            img: "../images/Madagascar.jpg",
            title: "Madagascar 3-Europe's Most Wanted",
            duration: "2hr 30min",
            rating: "4.7"
        },

        {
            id: 12,
            img: "../images/Sausage Party.jpg",
            title: "Sausage Party",
            duration: "2hr 56min",
            rating: "4.5"
        },

        {
            id: 13,
            img: "../images/Shaolin Soccer.jpg",
            title: "Shaolin Soccer",
            duration: "2hr 40min",
            rating: "4.9"
        },

        {
            id: 14,
            img: "../images/Ghostbuster.jpg",
            title: "The Ghostbuster-AfterLife",
            duration: "2hr 50min",
            rating: "4.5"
        },

        {
            id: 15,
            img: "../images/The Mitchells.jpg",
            title: "The Mitchells Vs The Machines",
            duration: "2hr 40min",
            rating: "4.6"
        },

        {
            id: 16,
            img: "../images/The Man From Toronto.jpg",
            title: "The Man From Toronto",
            duration: "2hr 45min",
            rating: "3.9"
        }
    ],

    drama = [
        {
            id: 17,
            img: "../images/Kingdom.jpg",
            title: "Kingdom-Ashin of The North",
            duration: "2hr 50min",
            rating: "4.6"
        },

        {
            id: 18,
            img: "../images/Megan.jpg",
            title: "Megan",
            duration: "2hr 47min",
            rating: "4"
        },

        {
            id: 19,
            img: "../images/Oppenheimer.jpg",
            title: "Oppenheimer",
            duration: "3hr",
            rating: "4.2"
        },

        {
            id: 20,
            img: "../images/Peaky Blinders.jpg",
            title: "Peaky Blinders",
            duration: "2hr 55min",
            rating: "5"
        },

        {
            id: 21,
            img: "../images/The Final Tease.jpg",
            title: "The Final Tease",
            duration: "2hr 33min",
            rating: "4"
        },

        {
            id: 22,
            img: "../images/The Last Of Us.jpg",
            title: "The Last Of Us",
            duration: "2hr 30min",
            rating: "4.8"
        },

        {
            id: 23,
            img: "../images/The Watcher.jpg",
            title: "The Watcher",
            duration: "3hr 10min",
            rating: "4.7"
        },

        {
            id: 24,
            img: "../images/Train To Busan.jpg",
            title: "Train To Busan",
            duration: "3hr 38min",
            rating: "4.5"
        }
    ]
];

const slicedActionMovies = movieArr.slice(0, 1);
slicedActionMovies.forEach((action) => {
    for (let i = 0; i < action.length; i++) {
        actionMovies.innerHTML += `
            <div class="boxes">
                <div class="image-container">
                    <img src="${action[i].img}">
                    <h4 class="movieTitle">${action[i].title}</h4>
                </div>
                <div class="aboutMovie">
                    <p class="duration">${action[i].duration}</p>
                    <p class="rating">${action[i].rating}</p>
                </div>
            </div> `
    }
});

const slicedComedyMovies = movieArr.slice(1, 2);
slicedComedyMovies.forEach((comedy) => {
    for (let j = 0; j < comedy.length; j++) {
        comedyMovies.innerHTML += `
        <div class="boxes-2">
                            <div class="image-container">
                                <img src="${comedy[j].img}">
                                <h4 class="movieTitle">${comedy[j].title}</h4>
                            </div>
                            <div class="aboutMovie">
                                <p class="duration">${comedy[j].duration}</p>
                                <p class="rating">${comedy[j].rating}</p>
                            </div>
                        </div> `
    }
});

const slicedDramaMovies = movieArr.slice(2, 3);
slicedDramaMovies.forEach((drama) => {
    for (let h = 0; h < drama.length; h++) {
        dramaMovies.innerHTML += `
        <div class="boxes-3">
                            <div class="image-container">
                                <img src="${drama[h].img}">
                                <h4 class="movieTitle">${drama[h].title}</h4>
                            </div>
                            <div class="aboutMovie">
                                <p class="duration">${drama[h].duration}</p>
                                <p class="rating">${drama[h].rating}</p>
                            </div>
                        </div> `
    }
});

let spreadMovieArr = [...action, ...comedy, ...drama];
// console.log(spreadMovieArr);

let filteredMovies = [];

const searchedMovie = (event) => {

    const searchedValue = event.target.value.toLowerCase();


    filteredMovies = spreadMovieArr.filter((movie) => {
        return movie.title.toLowerCase().includes(searchedValue);
    });

    resultContainer.style.display = "block";

    if (searchedValue.length === 0) {
        resultContainer.innerHTML = "";
        resultContainer.style.display = "none";
    }
    const hasToShow = filteredMovies.length > 0;
    if (hasToShow) {
        for (let i = 0; i < filteredMovies.length; i++) {
            resultContainer.innerHTML += `
        <a href="#" class="linkMovies">
        <div class="movie-div" id="${filteredMovies[i].id}">
                    <div class="movie-title">${filteredMovies[i].title}</div>
                    <div class="movie-image"><img src="${filteredMovies[i].img}" alt="movies' image"></div>
        </div></a>
        `
        };
    };

};


const autoCom = (event) => {
    const userInput = event.target.value.toLowerCase();

    filteredMovies = spreadMovieArr.filter((item) => {
        return item.title.toLowerCase().includes(userInput);
    });

    resContainer.style.display = "block";
    if (userInput.length === 0) {
        resContainer.innerHTML = "";
        resContainer.style.display = "none";
    }
    const movieToShow = filteredMovies.length > 0;
    if (movieToShow) {
        for (let i = 0; i < filteredMovies.length; i++) {
            console.log(filteredMovies[i]);
            resContainer.innerHTML += `
             <a href="#" class="linkMovies">
                                        <div class="res-movie-div" id="${filteredMovies[i].id}">
                                        <div class="res-movie-title">${filteredMovies[i].title}</div>
                                        <div class="res-movie-image"><img src="${filteredMovies[i].img}" alt="movies' image"></div>
                                        </div></a>
            `
        };
    };
};

// const aboutPage = document.getElementById("aboutUs");
// aboutPage.addEventListener("click", (event) => {
//     event.preventDefault();
//     const url = aboutPage.getAttribute(href);
//     location.href = url;
// });

searchBox.addEventListener("keyup", searchedMovie);
resSearchBar.addEventListener("keyup", autoCom);

