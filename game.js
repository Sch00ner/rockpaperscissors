function computerPlay() {
    let item = ["rock", "paper", "scissors"];
    return item[Math.floor(Math.random() * (item.length - 1))]
}