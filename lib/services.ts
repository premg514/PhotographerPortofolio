export interface Service {
  slug: string
  title: string
  description: string
  events?: string[]
  religions?: {
    slug: string
    title: string
    events: string[]
  }[]
  mediaTypes: string[]
}

export const services: Service[] = [
  {
    slug: "baby-shower",
    title: "Baby Shower",
    description: "Capture beautiful baby memories with creative themes and cinematic storytelling.",
    events: ["Pre Shoot", "Function", "Post Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "Audience Camera"
    ]
  },
  {
    slug: "cradle-ceremony",
    title: "Cradle Ceremony",
    description: "Special coverage for cradle ceremonies with traditional and candid moments.",
    events: ["Pre Shoot", "Function", "Post Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "Audience Camera"
    ]
  },
  {
    slug: "birthday",
    title: "Birthday Shoot",
    description: "Celebrate birthdays with cake smash, themed decor, and cinematic coverage.",
    events: ["Cake Smash", "Birthday Function", "Post Birthday Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "Audience Camera"
    ]
  },
  {
    slug: "half-saree",
    title: "Half Saree",
    description: "Traditional Half Saree ceremonies combined with artistic outdoor portraits.",
    events: ["Outdoor Shoot", "Half Saree Function", "Post Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "Audience Camera"
    ]
  },
  {
    slug: "wedding",
    title: "Wedding",
    description: "Complete wedding coverage with cinematic storytelling and premium albums.",
    religions: [
      {
        slug: "hindu",
        title: "Hindu Wedding",
        events: [
          "Groom Making",
          "Bride Making",
          "Groom Haldi",
          "Bride Haldi",
          "Mehendi",
          "Sangeet",
          "Wedding Ceremony",
          "Reception"
        ]
      },
      {
        slug: "christian",
        title: "Christian Wedding",
        events: [
          "Groom Making",
          "Bride Making",
          "Groom Haldi",
          "Bride Haldi",
          "Mehendi",
          "Sangeet",
          "Wedding Ceremony",
          "Reception"
        ]
      },
      {
        slug: "muslim",
        title: "Muslim Wedding",
        events: [
          "Groom Making",
          "Bride Making",
          "Groom Haldi",
          "Bride Haldi",
          "Mehendi",
          "Sangeet",
          "Wedding Ceremony",
          "Reception"
        ]
      }
    ],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "Audience Camera"
    ]
  },
  {
    slug: "house-warming",
    title: "House Warming Ceremony",
    description: "Capture the joy of your new home with professional coverage of traditional rituals and celebratory moments.",
    events: ["Function", "Interiors Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Traditional Video",
      "Candid Photos",
      "Cinematic Video",
      "Drone"
    ]
  },
  {
    slug: "celebrities-shoots",
    title: "Celebrities Shoots",
    description: "Exclusive and professional celebrity portfolio shoots with high-end lighting and artistic direction.",
    events: ["Portfolio Shoot", "On-location Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Candid Photos",
      "Cinematic Video",
      "Drone",
      "BTS Video"
    ]
  },
  {
    slug: "song-shoots",
    title: "Song Shoots",
    description: "Dynamic and cinematic video coverage for music videos and song sequences with professional equipment.",
    events: ["Main Shoot", "BTS Shoot"],
    mediaTypes: [
      "Traditional Photos",
      "Cinematic Video",
      "Drone",
      "BTS Video"
    ]
  },
  {
    slug: "fashion",
    title: "Fashion Shoot",
    description: "Stunning fashion photography for models, brands, and designers with creative styling and lighting.",
    events: ["Studio Shoot", "Street Style Shoot", "Full Portfolio"],
    mediaTypes: [
      "Traditional Photos",
      "Candid Photos",
      "Cinematic Video",
      "Fashion Film"
    ]
  }
]