export interface Project {
  index: number;
  title: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  tags:string[];
};


export const mainProjects: Project[] = [
  {
    index:1,
    title:"Where in the world",
    description:`A web app that allows you to search for country flags using filters 
                search by name`,
    liveUrl:"https://devnielote.github.io/rest-countries-api/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/rest-countries-api/refs/heads/main/src/assets/images/countries_desktop2.png",
    tags:["javascript", "css", "mobile-first","responsive design"]
  },
  {
    index: 2,
    title: "Quick watch",
    description:`Movie browser web application showing the latest movies,
                top movies and series of all times, it allows you to add movies 
                series to your watchlist`,
    liveUrl:"https://devnielote.github.io/quick-watch/#",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/quick-watch/main/src/images/quick-desktop.png",
    tags:["javascript", "css", "mobile-first","responsive design"]
  },
  {
    index: 3,
    title:"ROCK PAPER SCISSORS",
    description:"Web app of the classic game agaisnt the cpu, made with Typescript",
    liveUrl:"https://devnielote.github.io/rock-paper-scissors/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/rock-paper-scissors/main/src/assets/images/rps-desktop.png",
    tags:["typescript","css","mobile-first", "responsive-design", "poo"]
  },
  {
    index: 4,
    title:"TODO",
    description:"Web app for tracking tasks, it got filters and nigth mode",
    liveUrl:"https://devnielote.github.io/todo-app/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/todo-app/main/src/images/todo-desktop.png",
    tags:["javascript", "css", "mobile-first", "responsive design"],
  }
]

export const allProjects: Project[] = [
   {
    index:1,
    title:"Where in the world",
    description:`A web app that allows you to search for country flags using filters 
                search by name`,
    liveUrl:"https://devnielote.github.io/rest-countries-api/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/rest-countries-api/refs/heads/main/src/assets/images/countries_desktop2.png",
    tags:["javascript", "css", "mobile-first","responsive design"]
  },
  {
    index: 2,
    title: "Quick watch",
    description:`Movie browser web application showing the latest movies,
                top movies and series of all times, it allows you to add movies 
                series to your watchlist`,
    liveUrl:"https://devnielote.github.io/quick-watch/#",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/quick-watch/main/src/images/quick-desktop.png",
    tags:["javascript", "css", "mobile-first","responsive design"]
  },
  {
    index: 3,
    title:"TODO",
    description:"Web app for tracking tasks, it got filters and nigth mode",
    liveUrl:"https://devnielote.github.io/todo-app/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/todo-app/main/src/images/todo-desktop.png",
    tags:["javascript", "css", "mobile-first", "responsive design"],
  },
  {
    index: 4,
    title:"ROCK PAPER SCISSORS",
    description:"Web app of the classic game agaisnt the cpu, made with Typescript",
    liveUrl:"https://devnielote.github.io/rock-paper-scissors/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/rock-paper-scissors/main/src/assets/images/rps-desktop.png",
    tags:["typescript","css","mobile-first", "responsive-design", "poo"]
  },
  {
    index: 5,
    title:"Brand",
    description:"Pet food delivery for your pets",
    liveUrl:"https://devnielote.github.io/pet-food-web/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/pet-food-web/main/assets/brand-desktop.png",
    tags:["css", "semantic-html"],
  },
  {
    index: 6,
    title:"Morrowind Fan Page",
    description:"Blog for bethesda Morrowind game",
    liveUrl:"https://devnielote.github.io/the-morrowind-fan-page/index.html",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/the-morrowind-fan-page/main/assets/morrowind-desktop.png",
    tags:["semantic-html5", "css"]
  },
  {
    index: 7,
    title:"Huddle landing page",
    description:"Landing page for a community management application",
    liveUrl:"https://devnielote.github.io/huddle-landing/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/huddle-landing/main/assets/images/huddle-desktop.png",
    tags:["semantic-html5","css","mobile-first","responsive design"]
  },
  {
    index: 8,
    title:"Sunny side landing page",
    description: "Landing page for marketing agency using a mobile-first aproach",
    liveUrl:"https://devnielote.github.io/sunnyside-landing/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/sunnyside-landing/main/images/sunny-desktop.png",
    tags:["semantic-html5","css","responsive design", "grid", "flexbox"]
  },
  {
    index: 9,
    title:"Snap landing page",
    description:"A landing page por Snap",
    liveUrl:"https://devnielote.github.io/single-section-dropdown/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/single-section-dropdown/main/assets/images/dropdown1.png",
    tags:["semantic-html5", "css", "responsive design", "mobile-first"]
  },
  {
    index: 10,
    title:"Bento grid",
    description:"A bento grid built using grid and flexbox",
    liveUrl:"https://devnielote.github.io/bento-grid/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/bento-grid/main/assets/images/bento-grid-desktop.png",
    tags:["semantic-html5", "css", "mobile-first", "responsive design", "grid", "flexbox"]
  },
  {
    index: 11,
    title: "Tola coffee tavern",
    description:"A demo web for a coffee shop",
    liveUrl:"https://devnielote.github.io/tola-coffee-tavern/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/tola-coffee-tavern/main/assets/images/tola-desktop.png",
    tags:["semantic-html","css","mobile-first","responsive design", "flexbox"]
  }
]
