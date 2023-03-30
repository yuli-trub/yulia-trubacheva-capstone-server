// List of random names to choose from
const names = [
  "Emma",
  "Noah",
  "Olivia",
  "Liam",
  "Ava",
  "William",
  "Sophia",
  "Mason",
  "Isabella",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Jacob",
  "Amelia",
  "Michael",
  "Harper",
  "Elijah",
  "Evelyn",
  "Ethan",
  "Abigail",
  "Alexander",
  "Emily",
  "Oliver",
  "Elizabeth",
  "Daniel",
  "Mila",
  "Lucas",
  "Ella",
  "Matthew",
  "Avery",
  "Logan",
  "Sofia",
  "Jackson",
  "Camila",
  "David",
  "Aria",
  "Joseph",
  "Scarlett",
  "Samuel",
  "Victoria",
  "Henry",
  "Madison",
  "Owen",
  "Luna",
  "Sebastian",
  "Chloe",
  "Aiden",
  "Penelope",
  "Jackson",
  "Riley",
  "Nathan",
  "Lila",
];

// List of random travel bios to choose from
const travelBios = [
  "I love exploring new cities and trying new foods. My favorite place so far has been Tokyo!",
  "I enjoy hiking and camping in national parks. Yellowstone was an amazing experience!",
  "I am a beach bum at heart and love spending my time swimming and surfing. Bali is my favorite place to travel to!",
  "I am a history buff and enjoy visiting museums and historical sites. My favorite trip so far has been to Rome!",
  "I love going on road trips and discovering hidden gems. My favorite drive was along the California coast!",
  "I am an adrenaline junkie and love trying extreme sports. My favorite adventure was bungee jumping in New Zealand!",
];

// List of image URLs for male and female names
const maleImageUrls = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
];
const femaleImageUrls = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

// Function to generate a random date in dd.mm.yyyy format
function randomDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date(2023, 11, 31);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// Function to generate a random number between min and max (inclusive)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random travel bio
function randomTravelBio() {
  return travelBios[Math.floor(Math.random() * travelBios.length)];
}

// Function to generate a random image URL based on
// the gender of the name
function randomImageUrl(name) {
  const gender = name.endsWith("a") ? "female" : "male";
  const imageUrls = gender === "female" ? femaleImageUrls : maleImageUrls;
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// Function to generate a random object with the specified key-value pairs
function generateRandomObject() {
  const name = names[Math.floor(Math.random() * names.length)];
  const age = randomNumber(18, 65);
  const bio = randomTravelBio();
  const location = randomNumber(1, 14);
  const startDate = randomDate();
  const endDate = randomDate();
  const imageUrl = randomImageUrl(name);
  return {
    name,
    age,
    bio,
    location,
    "start-date": startDate,
    "end-date": endDate,
    image: imageUrl,
  };
}

// Create an array of 50 random objects
const randomArray = Array.from({ length: 50 }, generateRandomObject);

// Log the array to the console
console.log(randomArray);
