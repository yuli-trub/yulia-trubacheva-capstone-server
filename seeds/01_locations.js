/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("location").del();
  await knex("location").insert([
    {
      location_id: 1,
      location_name: "Paris",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/08/08/00/57/paris-2608583_1280.jpg",
      country: "France",
    },
    {
      location_id: 2,
      location_name: "Rome",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/02/22/20/02/rome-2090159_1280.jpg",
      country: "Italy",
    },
    {
      location_id: 3,
      location_name: "Cancun",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/09/14/07/56/cancun-2741325_1280.jpg",
      country: "Mexico",
    },
    {
      location_id: 4,
      location_name: "Bangkok",
      location_img_url:
        "https://cdn.pixabay.com/photo/2016/08/11/22/32/bangkok-1583576_1280.jpg",
      country: "Thailand",
    },
    {
      location_id: 5,
      location_name: "Barcelona",
      location_img_url:
        "https://cdn.pixabay.com/photo/2016/06/07/22/15/barcelona-1442247_1280.jpg",
      country: "Spain",
    },
    {
      location_id: 6,
      location_name: "Tokyo",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/01/23/19/32/tokyo-2004195_1280.jpg",
      country: "Japan",
    },
    {
      location_id: 7,
      location_name: "Sydney",
      location_img_url:
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/sydney-opera-house-1209947_1280.jpg",
      country: "Australia",
    },
    {
      location_id: 8,
      location_name: "New York City",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/07/17/16/21/new-york-city-2518167_1280.jpg",
      country: "USA",
    },
    {
      location_id: 9,
      location_name: "Amsterdam",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/08/12/18/51/amsterdam-2637338_1280.jpg",
      country: "Netherlands",
    },
    {
      location_id: 10,
      location_name: "Rio de Janeiro",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/01/21/13/46/rio-de-janeiro-1993682_1280.jpg",
      country: "Brazil",
    },
    {
      location_id: 11,
      location_name: "London",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/03/14/03/20/london-2144804_1280.jpg",
      country: "United Kingdom",
    },
    {
      location_id: 12,
      location_name: "Dubai",
      location_img_url:
        "https://cdn.pixabay.com/photo/2017/03/22/17/19/burj-khalifa-2169199_1280.jpg",
      country: "United Arab Emirates",
    },
    {
      location_id: 13,
      location_name: "Bali",
      location_img_url:
        "https://cdn.pixabay.com/photo/2016/09/05/16/45/bali-1644057_1280.jpg",
      country: "Indonesia",
    },
    {
      location_id: 14,
      location_name: "Marrakech",
      location_img_url:
        "https://cdn.pixabay.com/photo/2016/02/13/16/58/marrakech-1193102_1280.jpg",
      country: "Morocco",
    },
  ]);
};
