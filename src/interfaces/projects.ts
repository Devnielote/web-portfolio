export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  tags:string[];
};


export const projects: Project[] = [
  {
    title:"Where in the world",
    description:`A web app that allows you to search for country flags using filters 
                search by name`,
    liveUrl:"https://devnielote.github.io/region/America",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/rest-countries-api/refs/heads/main/src/assets/images/countries_desktop2.png",
    tags:["javascript, css, mobile-first, responsive design"]
  },
  {
    title: "Quick watch",
    description:`Movie browser web application showing the latest movies,
                top movies and series of all times, it allows you to add movies 
                series to your watchlist`,
    liveUrl:"https://devnielote.github.io/quick-watch/#",
    imageUrl:"no-url",
    tags:["javascript, css, mobile-first,responsive design"]
  },
  {
    title:"TODO",
    description:"Web app for tracking tasks, it got filters and nigth mode",
    liveUrl:"https://devnielote.github.io/todo-app/",
    imageUrl:"no-url",
    tags:["javascript, css, mobile-first, responsive design"],
  },
  {
    title:"ROCK PAPER SCISSORS",
    description:"Web app of the classic game agaisnt the cpu, made with Typescript",
    liveUrl:"https://devnielote.github.io/rock-paper-scissors/",
    imageUrl:"no-url",
    tags:["typescript","css","mobile-first", "responsive-design", "poo"]
  },
  {
    title:"Brand",
    description:"Pet food delivery for your pets",
    liveUrl:"https://devnielote.github.io/pet-food-web/",
    imageUrl:"no-url",
    tags:["css, semantic-html"],
  },
  {
    title:"Morrowind Fan Page",
    description:"Blog for bethesda Morrowind game",
    liveUrl:"https://devnielote.github.io/the-morrowind-fan-page/index.html",
    imageUrl:"no-url",
    tags:["semantic-html5", "css"]
  },
  {
    title:"Huddle landing page",
    description:"Landing page for a community management application",
    liveUrl:"https://devnielote.github.io/huddle-landing/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/huddle-landing/main/assets/images/desktop_view.png",
    tags:["semantic-html5","css","mobile-first","responsive design"]
  },
  {
    title:"Sunny side landing page",
    description: "Landing page for marketing agency using a mobile-first aproach",
    liveUrl:"https://devnielote.github.io/sunnyside-landing/",
    imageUrl:"no-url",
    tags:["semantic-html5","css","responsive design", "grid", "flexbox"]
  },
  {
    title:"Snap landing page",
    description:"A landing page por Snap",
    liveUrl:"https://devnielote.github.io/single-section-dropdown/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/single-section-dropdown/main/assets/images/dropdown1.png",
    tags:["semantic-html5", "css", "responsive design", "mobile-first"]
  },
  {
    title:"Bento grid",
    description:"A bento grid built using grid and flexbox",
    liveUrl:"https://devnielote.github.io/bento-grid/",
    imageUrl:"https://raw.githubusercontent.com/Devnielote/bento-grid/main/assets/images/bento-grid-desktop.png",
    tags:["semantic-html5", "css", "mobile-first", "responsive design", "grid", "flexbox"]
  }
]
