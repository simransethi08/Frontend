// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
    players: [
        { number: 1, name: "Sachin Tendulkar", position: "Opener" },
        { number: 2, name: "Saurav Ganguly", position: "Opener" },
        { number: 3, name: "Rahul Dravid", position: "One Down" },
        { number: 4, name: "MahindraSingh Dhoni", position: "Keeper" },
        { number: 5, name: "Kapil Dev", position: "Fast Bowler" },
        { number: 6, name: "Anil Kumbale", position: "Spinner" }
    ],
    all: function () { return this.players },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI;
