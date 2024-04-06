// Create an array of 22 players
const players = [
  "Ruturaj Gaikwad(c)",
  "Rachin Ravindra",
  "Ajinkya Rahane",
  "Moeen Ali",
  "Daryl Mitchell",
  "Shivam Dube",
  "Ravindra Jadeja",
  "MS Dhoni(w)",
  "Deepak Chahar",
  "Tushar Deshpande",
  "Maheesh Theekshana",
  "Abhishek Sharma",
  "Aiden Markram",
  "Heinrich Klaasen(w)",
  "Abdul Samad",
  "Nitish Reddy",
  "Shahbaz Ahmed",
  "Pat Cummins(c)",
  "Jaydev Unadkat",
  "Bhuvneshwar Kumar",
  "Mayank Markande",
  "T Natarajan"
];

// Create an empty array to store the selected players
const selectedPlayers = [];

// Function to select 11 players randomly
function select11Players() {
  while (selectedPlayers.length < 11) {
    const randomIndex = Math.floor(Math.random() * players.length);
    const selectedPlayer = players.splice(randomIndex, 1)[0];
    selectedPlayers.push(selectedPlayer);
  }
  console.log("Selected 11 Players:", selectedPlayers);
}

// Function to select a captain and vice-captain
function selectCaptainAndViceCaptain() {
  const randomIndex = Math.floor(Math.random() * selectedPlayers.length);
  const captain = selectedPlayers[randomIndex];
  const remainingPlayers = selectedPlayers.slice(0, randomIndex).concat(selectedPlayers.slice(randomIndex + 1));
  const viceCaptain = remainingPlayers[Math.floor(Math.random() * remainingPlayers.length)];
  console.log("Captain:", captain);
  console.log("Vice Captain:", viceCaptain);
}

// Call the functions to select players and captain/vice-captain
select11Players();
selectCaptainAndViceCaptain();