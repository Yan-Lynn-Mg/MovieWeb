const checkBox = document.getElementById("checkbox");
const resCheckBox = document.getElementById("res-checkbox");
const movieContainer = document.querySelector(".movie-container");
const actionMovies = document.querySelector(".action-movies");
const comedyMovies = document.querySelector(".comedy-movies");
const dramaMovies = document.querySelector(".drama-movies");

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
            img: "../images/Batman.jpg",
            title: "Batman-The Dark Knight",
            duration: "2hr 30min",
            rating: "3.5"
        },

        {
            img: "../images/Jamesbond.jpg",
            title: "James Bond-No Time To Die",
            duration: "3hr",
            rating: "4.3"
        },

        {
            img: "../images/Johnwick 4.jpg",
            title: "John Wick 4",
            duration: "3hr 40min",
            rating: "4.7"
        },

        {
            img: "../images/Mission Impossible.jpg",
            title: "Mission Impossible 6-Fallout",
            duration: "2hr 50min",
            rating: "4.5"
        },

        {
            img: "../images/Spiderman.jpg",
            title: "Spiderman-No Way Home",
            duration: "3hr 30min",
            rating: "4.9"
        },

        {
            img: "../images/Uncharted.jpg",
            title: "Uncharted",
            duration: "2hr 20min",
            rating: "4"
        },

        {
            img: "../images/Wakanda.jpg",
            title: "Wakanda",
            duration: "2hr 50min",
            rating: "4.3"
        },

        {
            img: "../images/../images/The Mummy.jpg",
            title: "The Mummy",
            duration: "2hr 38min",
            rating: "4.2"
        }
    ],

    comedy = [
        {
            img: "../images/Baywatch.jpg",
            title: "Baywatch",
            duration: "2hr 40min",
            rating: "4.5"
        },

        {
            img: "../images/Good Boys.jpg",
            title: "Good Boys",
            duration: "2hr 20min",
            rating: "4.5"
        },

        {
            img: "../images/Madagascar.jpg",
            title: "Madagascar 3-Europe's Most Wanted",
            duration: "2hr 30min",
            rating: "4.7"
        },

        {
            img: "../images/Sausage Party.jpg",
            title: "Sausage Party",
            duration: "2hr 56min",
            rating: "4.5"
        },

        {
            img: "../images/Shaolin Soccer.jpg",
            title: "Shaolin Soccer",
            duration: "2hr 40min",
            rating: "4.9"
        },

        {
            img: "../images/Ghostbuster.jpg",
            title: "The Ghostbuster-AfterLife",
            duration: "2hr 50min",
            rating: "4.5"
        },

        {
            img: "../images/The Mitchells.jpg",
            title: "The Mitchells Vs The Machines",
            duration: "2hr 40min",
            rating: "4.6"
        },

        {
            img: "../images/The Man From Toronto.jpg",
            title: "The Man From Toronto",
            duration: "2hr 45min",
            rating: "3.9"
        }
    ],

    drama = [
        {
            img: "../images/Kingdom.jpg",
            title: "Kingdom-Ashin of The North",
            duration: "2hr 50min",
            rating: "4.6"
        },

        {
            img: "../images/Megan.jpg",
            title: "Megan",
            duration: "2hr 47min",
            rating: "4"
        },

        {
            img: "../images/Oppenheimer.jpg",
            title: "Oppenheimer",
            duration: "3hr",
            rating: "4.2"
        },

        {
            img: "../images/Peaky Blinders.jpg",
            title: "Peaky Blinders",
            duration: "2hr 55min",
            rating: "5"
        },

        {
            img: "../images/The Final Tease.jpg",
            title: "The Final Tease",
            duration: "2hr 33min",
            rating: "4"
        },

        {
            img: "../images/The Last Of Us.jpg",
            title: "The Last Of Us",
            duration: "2hr 30min",
            rating: "4.8"
        },

        {
            img: "../images/The Watcher.jpg",
            title: "The Watcher",
            duration: "3hr 10min",
            rating: "4.7"
        },

        {
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
                                <h4 class="movieTitle">${comedy[j].title}}</h4>
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