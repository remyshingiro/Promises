const legacyAPI = {
    login: (username, callback) => {
        console.log("🔑 Logging in...");
        setTimeout(() => callback(null, { userId: 42, user: username }), 1000);
    },
    getMovies: (userId, callback) => {
        console.log(`📂 Fetching movies for User ID: ${userId}...`);
        setTimeout(() => callback(null, ["Inception", "The Matrix", "Interstellar"]), 1000);
    },
    getShowtimes: (movieName, callback) => {
        console.log(`🕒 Getting showtimes for: ${movieName}...`);
        setTimeout(() => callback(null, ["7:00 PM", "9:30 PM", "11:00 PM"]), 1000);
    },
    bookTicket: (time, callback) => {
        console.log(`🎟️ Booking ticket for ${time}...`);
        setTimeout(() => callback(null, { success: true, seat: "F-14" }), 1000);
    }
};

legacyAPI.login("username", (error, loginData) => {
    if(error){
        console.error("Error:", error);
        return;
    }
    console.log("User logging:", loginData);

    legacyAPI.getMovies(loginData.userId, (error, movies)=> {
        if(error){
            console.error("failed to fetch movie:", error);
        }
        console.log("fetching the movies:",movies );
        const firstMovie = movies[0];
        legacyAPI.getShowtimes(firstMovie, (error, showtimes)=>{
            if(error){
                console.error("no showtimes found:", error);
            }
             console.log(`🕒 Showtimes for "${firstMovie}":`, showtimes);

             const firstShowtime = showtimes[0];
             
             legacyAPI.bookTicket()
        })
    })

})