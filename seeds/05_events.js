/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("event").del();
  await knex("event").insert([
    {
      id: 1,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Dinner Cruise on the Seine River",
      description:
        "A cozy evening aboard a Seine River cruise ship with a gourmet dinner and live music.",
      location_id: 1,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 2,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Spa Day at the Four Seasons George V",
      description:
        "A luxurious day spent relaxing at the Four Seasons George V spa, complete with massages, facials, and access to the indoor pool and steam room",
      location_id: 1,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 3,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Wine Tasting in Montmartre",
      description:
        "A guided tour of the charming Montmartre neighborhood, with stops at local wine bars and tastings of some of the best French wines.",
      location_id: 1,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 4,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Rooftop Bars and Nightlife Tour",
      description:
        "A tour of the city's best rooftop bars and nightlife spots, with stops at local pubs and clubs.",
      location_id: 2,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 5,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Thermal Baths at the Stufe di Nerone",
      description:
        "A relaxing day spent at the Stufe di Nerone thermal baths, with access to the hot springs, saunas, and steam rooms.",
      location_id: 2,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 6,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Pizza Making Class",
      description:
        "A hands-on pizza making class with a local chef, where you'll learn how to make traditional Italian pizza with fresh ingredients.",
      location_id: 2,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 7,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Coco Bongo Nightclub",
      description:
        "A high-energy night spent at the famous Coco Bongo nightclub, with live performances and non-stop dancing.",
      location_id: 3,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 8,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Beach Day at Isla Mujeres",
      description:
        "A relaxing day spent lounging on the beautiful beaches of Isla Mujeres, with opportunities for snorkeling and swimming in the crystal-clear waters.",
      location_id: 3,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 9,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Authentic Mexican Cooking Class",
      description:
        " A hands-on cooking class with a local chef, where you'll learn how to make traditional Mexican dishes like tamales, mole, and guacamole.",
      location_id: 3,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 10,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Rooftop Bars and Nightlife Tour",
      description:
        "A tour of the city's best rooftop bars and nightlife spots, with stops at local pubs and clubs.",
      location_id: 4,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 11,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Thai Massage and Spa",
      description:
        "A relaxing day spent at a traditional Thai spa, with access to massages, facials, and body treatments.",
      location_id: 4,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 12,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Street Food Tour",
      description:
        "A walking tour of the city's famous street food stalls, including Pad Thai, mango sticky rice, and other local delicacies.",
      location_id: 4,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 13,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Flamenco Show",
      description:
        "A night spent watching a traditional Flamenco show with live music and dance.",
      location_id: 5,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 14,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Beach Day at Barceloneta",
      description:
        "A day spent relaxing on the beaches of Barceloneta, with opportunities for swimming, sunbathing, and beach volleyball.",
      location_id: 5,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 15,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Paella Cooking Class",
      description:
        "A hands-on cooking class where you'll learn how to make traditional Spanish paella, followed by a lunch where you can enjoy your creation.",
      location_id: 5,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 16,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Karaoke Night",
      description:
        "A night spent singing karaoke at a local bar, with private rooms and a huge selection of Japanese and international songs.",
      location_id: 6,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 17,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Hot Springs and Onsen",
      description:
        "A relaxing day spent at a traditional Japanese hot spring or onsen, with access to the hot springs, saunas, and steam rooms.",
      location_id: 6,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 18,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Sushi Making Class",
      description:
        " A hands-on sushi making class with a local chef, where you'll learn how to make traditional Japanese sushi with fresh ingredients.",
      location_id: 6,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 19,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Opera House Tour",
      description:
        "A guided tour of the iconic Sydney Opera House, including backstage access and a chance to see the famous sails up close.",
      location_id: 7,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 20,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Beach Day at Bondi",
      description:
        "A day spent lounging on the beautiful beaches of Bondi, with opportunities for surfing and swimming in the ocean.",
      location_id: 7,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 21,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Wine Tasting in the Hunter Valley",
      description:
        "A day trip to the Hunter Valley wine region, with tastings of some of Australia's best wines and a chance to see the beautiful vineyards.",
      location_id: 7,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 22,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Broadway Show",
      description: " A night spent watching a Broadway show",
      location_id: 8,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 23,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Central Park Picnic:",
      description:
        "A relaxing day spent in Central Park, with a picnic basket filled with local artisanal foods and drinks.",
      location_id: 8,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 24,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Cocktail and Speakeasy Tour",
      description:
        "A tour of the city's best hidden speakeasies and cocktail bars, with opportunities to taste unique and creative drinks.",
      location_id: 8,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 25,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Pizza Tour of Brooklyn",
      description:
        " A walking tour of Brooklyn's best pizza places, with stops at local pizzerias and tastings of New York-style pizza.",
      location_id: 8,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 26,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Canal Cruise",
      description:
        "A relaxing boat tour through Amsterdam's beautiful canals, with stunning views of the city's historic architecture.",
      location_id: 9,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 27,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Van Gogh Museum",
      description:
        "A visit to the Van Gogh Museum, with a guided tour of the works of the famous Dutch artist.",
      location_id: 9,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 28,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Cheese Tasting",
      description:
        "A tasting of some of the Netherlands' best cheeses, including Gouda, Edam, and Leerdammer.",
      location_id: 9,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 29,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Samba Show",
      description:
        "A night spent watching a traditional samba show, with live music and dance.",
      location_id: 10,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 30,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Beach Day at Ipanema",
      description:
        "A day spent lounging on the beautiful beaches of Ipanema, with opportunities for swimming, sunbathing, and beach volleyball.",
      location_id: 10,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 31,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Churrasco Dinner:",
      description:
        "A traditional Brazilian barbecue dinner, with all-you-can-eat meat served table-side.",
      location_id: 10,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 32,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "West End Show",
      description:
        "A night spent watching a show in London's West End theater district.",
      location_id: 11,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 33,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Afternoon Tea",
      description:
        "A classic English tradition, enjoy a selection of sandwiches, scones, and pastries with a pot of tea.",
      location_id: 11,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 34,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Gin Distillery Tour",
      description:
        "A tour of a local gin distillery, with tastings of gin and a chance to see the distilling process.",
      location_id: 11,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 35,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Desert Safari",
      description:
        "A thrilling ride through the sand dunes in a 4x4, followed by a traditional Bedouin-style dinner and cultural performance.",
      location_id: 12,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 36,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Burj Khalifa Observation Deck",
      description:
        "A visit to the observation deck of the tallest building in the world, with stunning views of Dubai's skyline.",
      location_id: 12,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 37,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Brunch at the Burj Al Arab",
      description:
        "A luxurious brunch at the Burj Al Arab, one of the most iconic hotels in the world, with a wide selection of international cuisine.",
      location_id: 12,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 38,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Ubud Art Market",
      description:
        "A visit to the Ubud Art Market, with opportunities to shop for local handicrafts and artwork.",
      location_id: 13,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 39,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Balinese Cooking Class",
      description:
        "A hands-on cooking class where you'll learn how to make traditional Balinese dishes with fresh ingredients.",
      location_id: 13,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 40,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Yoga Retreat",
      description:
        " A relaxing retreat at a local yoga studio, with daily yoga classes, meditation, and spa treatments.",
      location_id: 13,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 41,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Jemaa el-Fnaa Night Market",
      description:
        "A visit to the famous night market in Marrakech, with opportunities to shop for souvenirs and try local street food.",
      location_id: 14,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 42,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Hammam and Spa",
      description:
        "A relaxing day spent at a traditional Moroccan hammam and spa, with access to steam rooms, saunas, and massages.",
      location_id: 14,
      date: "2023-06-18",
      isSaved: false,
    },
    {
      id: 43,
      event_img_url: "https://source.unsplash.com/featured/300x300",
      name: "Moroccan Cooking Class",
      description:
        "A hands-on cooking class where you'll learn how to make traditional Moroccan dishes like tagine and couscous, with a chance to enjoy your creations for lunch.",
      location_id: 14,
      date: "2023-06-18",
      isSaved: false,
    },
  ]);
};
