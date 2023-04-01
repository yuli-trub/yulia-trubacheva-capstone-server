function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumbers = () => {
  const profile_id = randomNumber(1, 33);
  const interest_id = randomNumber(1, 6);

  return {
    profile_id,
    interest_id,
  };
};

const profileInterestArray = Array.from({ length: 100 }, generateRandomNumbers);

console.log(profileInterestArray);
