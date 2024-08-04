const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const moiveselect = document.getElementById("movie");

let price = +moiveselect.value;

container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&!e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("select");
        updateselected();
    }
});


moiveselect.addEventListener("change", (e) => {
    price = +e.target.value;
    setmoviedata(e.target.selectedIndex, e.target.value);
    updateselected();
});


function updateselected() {
    const selectedseat = document.querySelectorAll(".row .seat.select");
    const countseat = selectedseat.length;
    const seatindex = [...selectedseat].map((seat) => [...seats].indexOf(seat));
    /* const seatindex=[...selectedseat].map(seat=>[...seats].indexOf(seat)); */
    localStorage.setItem("selectedseat", JSON.stringify(seatindex));

    /*   console.log(seatindex) */
    count.innerText = countseat;
    total.innerText = countseat * price;
}

function setmoviedata(movieindex, moiveprice) {
    localStorage.setItem("movieIndex", movieindex);
    localStorage.setItem("moviePrice", moiveprice);
}


function showdatatoui() {
    const selectseat = JSON.parse(localStorage.getItem("selectedseat"));
    const movieindex = localStorage.getItem("movieIndex");
    const moviePrice = localStorage.getItem("moviePrice");
       
    seats.forEach((seat, index) => {
        if (selectseat.indexOf(index) > -1) {
            seat.classList.add("select");
        }
        if (movieindex > 0) {
            moiveselect.selectedIndex = movieindex;
        
        }
        price = moviePrice

    });
}

showdatatoui();
updateselected();
