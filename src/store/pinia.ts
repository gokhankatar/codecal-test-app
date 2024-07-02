import { defineStore } from "pinia";

const store = defineStore('piniaStore', {
    state() {
        return {
            mode: 'dark',
            isActive: 'front-end',
            frontEndArr: [
                {
                    img_src:
                        "https://cdn.hashnode.com/res/hashnode/image/upload/v1655012205990/SlGwV1aND.png",
                    lang: "Vue",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Developer Meeting",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "18 Jun 2024",
                },
                {
                    img_src:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                    lang: "React",
                    date: "26 Jul to 03 Aug 2024",
                    activitiy: "AMA",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "12 Jun 2024",
                },
                {
                    img_src:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
                    lang: "Vite",
                    date: "26 Jun to 12 Jul 2024",
                    activitiy: "Admin Panel",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "25 Jun 2024",
                },
                {
                    img_src:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Svelte_logo_by_gengns.svg/640px-Svelte_logo_by_gengns.svg.png",
                    lang: "Swelte",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Browser Game",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "02 Oct 2024",
                },
                {
                    img_src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    lang: "Vanillia JS",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Music Player",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "08 Jun 2024",
                },
                {
                    img_src: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
                    lang: "TypeScript",
                    date: "18 Jun to 19 Jul 2024",
                    activitiy: "Quiz App",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "10 Jun 2024",
                },
                {
                    img_src:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                    lang: "React",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Calculator",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "18 Jun 2024",
                },
                {
                    img_src:
                        "https://cdn.hashnode.com/res/hashnode/image/upload/v1655012205990/SlGwV1aND.png",
                    lang: "Vue",
                    date: "11 Feb to 02 Jul 2024",
                    activitiy: "Evan You AMA",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "02 Feb 2024",
                },
            ],
            backEndArr: [
                {
                    img_src:
                        "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
                    lang: "NodeJs",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "AMA",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "18 Jun 2024",
                },
                {
                    img_src:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s",
                    lang: "Java",
                    date: "26 Jul to 03 Aug 2024",
                    activitiy: "E-commerce App",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "12 Jun 2024",
                },
                {
                    img_src: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
                    lang: "TypeScript",
                    date: "26 Jun to 12 Jul 2024",
                    activitiy: "Auth App",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "25 Jun 2024",
                },
                {
                    img_src:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefidKZbbFzBmSDoW-xpPtDKma5xWqn_aZ2Q&s",
                    lang: "Python",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Web Algorthym",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "02 Oct 2024",
                },
                {
                    img_src:
                        "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
                    lang: "NodeJs",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Verification App",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "08 Jun 2024",
                },
                {
                    img_src: "https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png",
                    lang: "C++",
                    date: "18 Jun to 19 Jul 2024",
                    activitiy: "FPS Game",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "10 Jun 2024",
                },
                {
                    img_src:
                        "https://w7.pngwing.com/pngs/452/601/png-transparent-object-database-nosql-nuget-nosql-icon-blue-data-electric-blue.png",
                    lang: "NoSQL",
                    date: "18 Jun to 02 Jul 2024",
                    activitiy: "Twitter Space",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "18 Jun 2024",
                },
                {
                    img_src:
                        "https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png",
                    lang: "C",
                    date: "11 Feb to 02 Jul 2024",
                    activitiy: "AMA",
                    percantage: Math.floor(Math.random() * 100),
                    vote: Math.floor(Math.random() * 10),
                    added_date: "02 Feb 2024",
                },
            ]
        }
    },
    getters: {

    },
    actions: {
        changeIsActive() {
            this.isActive === 'front-end'
                ? this.isActive = 'back-end'
                : this.isActive = 'front-end'
        },
        changeMode() {
            this.mode === 'dark'
                ? this.mode = 'light'
                : this.mode = 'dark'
        }
    },
    persist: true
});

export default store;