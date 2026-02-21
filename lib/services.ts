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
      "Album Cover"
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
      "Drone"
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
      "Drone"
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
      "Album Cover"
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
          "Bride Preparation",
          "Groom Preparation",
          "Wedding Ceremony",
          "Reception"
        ]
      },
      {
        slug: "muslim",
        title: "Muslim Wedding",
        events: [
          "Nikah",
          "Mehendi",
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
      "Album"
    ]
  }
]