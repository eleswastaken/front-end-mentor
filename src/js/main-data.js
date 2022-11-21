
let cardsData = [
    {
        imgURL: "./assets/screenshots/4.png",
        imgAltText: "REST Countries API",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/41%20Countries/react",
        livePreviewURL: "https://eleswastaken-front-end-countries-api-gui.netlify.app/",
        title: "REST Countries API",
        descriptionTitle: "",
        descriptionText: ["First time using react.", "It was pretty tough, but I loved it. Once you get the hang of it, it is hard to do things the other way."],
        tags: ["react js", "tailwind css", "react-router"],
        dateStr: "Decemeber 11th, 2021",
        date: new Date("2021-12-11"),
    },
    {
        imgURL: "./assets/screenshots/3.png",
        imgAltText: "Blockchain-bitcoin currency price",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/43%20NFT%20Card",
        livePreviewURL: "/43%20NFT%20Card/index.html",
        title: "NTF Card",
        descriptionTitle: "",
        descriptionText: ["The real challenge was animating the eye on hover.", "I didn't want to clutter markup with 'meaningless' elements, plus I probably would've had to use js. So I went for pseudo elements instead.", "Pseudo elements of a link are still a part of the link, meaning they would still work even though on top of the link."],
        tags: ["animation", "html", "css"],
        dateStr: "Decemeber 3rd, 2021",
        date: new Date("2021-12-03"),
    },
    {
        imgURL: "./assets/screenshots/1.png",
        imgAltText: "Room - Furniture Company Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/31%20Room%20LP",
        livePreviewURL: "/31%20Room%20LP/index.html",
        title: "Room Landing Page",
        descriptionTitle: "",
        descriptionText: ["This challenge I used the power of the flexbox to line out everthing.", "This was my first challenge using Tailwind CSS."],
        tags: ["mobile-first", "tailwind css", "vanilla js", "html", "css"],
        dateStr: "November 16th, 2021",
        date: new Date("2021-11-16"),
    },
    {
        imgURL: "./assets/screenshots/2.png",
        imgAltText: "Sneakers landing page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/42%20E-commerce%20product%20page",
        livePreviewURL: "/42%20E-commerce%20product%20page/index.html",
        title: "Sneakers Product Page",
        descriptionTitle: "",
        descriptionText: ["Almost all of my focus was directed to accessibility and markup.", "The cart is an array of objects that each represents an item in the cart. When array changes the cart is rerendered.", "Made use of local storage to save and render cart items."],
        tags: ["vanilla js", "scss", "html", "css"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    },
    {
        imgURL: "./assets/screenshots/rock-paper-scissors-preview.png",
        imgAltText: "Rock Paper Scissors Game",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/40%20RockPaperScissors",
        livePreviewURL: "40%20RockPaperScissors/index.html",
        title: "Rock Paper Scissors",
        descriptionTitle: "",
        descriptionText: ["The challenge was making the animations. The score is recorded in the local storage."],
        tags: ["vanilla js", "scss", "html", "css", "frontendmentor"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    },
    {
        imgURL: "./assets/screenshots/bookmark-landing-page-preview.png",
        imgAltText: "Bookmark Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/39%20Bookmark%20LP",
        livePreviewURL: "/39%20Bookmark%20LP/index.html",
        title: "Bookmark Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really tried to make it look good)'],
        tags: ["vanilla js", "scss", "html", "css", "frontendmentor"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    },
    {
        imgURL: "./assets/screenshots/manage-landing-page-preview.png",
        imgAltText: "Manage Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/37 Manage LP",
        livePreviewURL: "/37 Manage LP/index.html",
        title: "Manage Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["vanilla js", "scss", "html", "css", "frontendmentor", 'slider'],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 
    {
        imgURL: "./assets/screenshots/easybank-landing-page-preview.png",
        imgAltText: "Easybank Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/36 Easybank LP",
        livePreviewURL: "/36 Easybank LP/index.html",
        title: "Easybank Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 
    {
        imgURL: "./assets/screenshots/job-listing-preview.png",
        imgAltText: "Job Listing",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/35 Job Listing",
        livePreviewURL: "/35 Job Listing/index.html",
        title: "Job Listing",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 

    {
        imgURL: "./assets/screenshots/ip-adress-tracker-preview.png",
        imgAltText: "IP Adress Tracker",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/33 IP Map",
        livePreviewURL: "/33 IP Map/index.html",
        title: "IP Adress Tracker",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 

    {
        imgURL: "./assets/screenshots/calculator-preview.png",
        imgAltText: "Calculator",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/28 Calculator",
        livePreviewURL: "/28 Calculator/index.html",
        title: "Calculator",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 

    {
        imgURL: "./assets/screenshots/huddle-landing-page-preview.png",
        imgAltText: "Huddle Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/27 Huddle LP",
        livePreviewURL: "/27 Huddle LP/index.html",
        title: "Huddle Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 

    {
        imgURL: "./assets/screenshots/clipboard-landing-page-preview.png",
        imgAltText: "Clipboard Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/23 Copy LP",
        livePreviewURL: "/23 Copy LP/index.html",
        title: "Clipboard Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 

    {
        imgURL: "./assets/screenshots/fylo-landing-page-preview.png",
        imgAltText: "Fylo Landing Page",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/25 Fylo LP",
        livePreviewURL: "/25 Fylo LP/index.html",
        title: "Fylo Landing Page",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 


    {
        imgURL: "./assets/screenshots/social-media-dashboard-preview.png",
        imgAltText: "Social Media Dashboard",
        githubRepoURL: "https://github.com/eleswastaken/front-end/tree/main/19 SocialMedia Dashboard",
        livePreviewURL: "/19 SocialMedia Dashboard/index.html",
        title: "Social Media Dashboard",
        descriptionTitle: "",
        descriptionText: ['Really like how it came out.', 'The slider is a flickity library.'],
        tags: ["scss", "html", "css", "frontendmentor", "dynamic"],
        dateStr: "November 14th, 2021",
        date: new Date("2021-11-14"),
    }, 
];

// Sat Dec 11 08:58:59 2021 +0600
