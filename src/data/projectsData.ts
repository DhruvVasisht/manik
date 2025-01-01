export const projectsData: ProjectDataType[] = [
  {
    title: "JobQuest",
    description:
      "Built a responsive job platform with React.js, Shadcn, Node.js, Express.js, and MongoDB. Integrated Cloudinary for secure resume storage and implemented JWT-based role-based authentication for seamless student and recruiter interactions.",
    date: "24-10-2024 - Present",
    images: ["/projects/ssa-1.png"],
    isFeatured: true,
    techStack: ["React","Node.js", "Express.js", "MongoDB", "Redux"],
    link: "https://jobquest-2sez.onrender.com/",
  },
  {
    title: "Omegle",
    description:
      "Created an online chat platform enabling real-time interactions without registration, using Socket.IO and Express.js for 1ms latency. Integrated WebRTC for high-quality video conferencing, ensuring a smooth and interactive user experience.",
    date: "24-07-2023",
    link: "https://omegle-3nne.onrender.com/",
    images: ["/projects/omegle.png"],
    isFeatured: true,
    techStack: ["Ejs", "Express.js", "Node.js", "Socket.io", "WebRTC"],
  },
  {
    title: "Blinkit",
    description:
      "Directed the creation of a full-stack quick commerce platform focused on user engagement and a seamless shopping experience, with deliveries within 10 minutes. Engineered a robust backend with Node.js, Express.js, and MongoDB, utilizing aggregate functions for product categorization and Joi for schema validation. Designed an intuitive user interface and an admin panel for managing products and operations. Integrated secure Google OAuth authentication for users and JWT for admin login, ensuring both security and ease of acce",
    date: "29-06-2024",
    link: "https://github.com/Manik072/Blinkit",
    images: ["/projects/bright-pathways.png"],
    isFeatured: false,
    techStack: ["Ejs", "Express.js", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Refokus Ui",
    description:
      "Crafted a visually captivating landing page, replicating Refokus’s iconic design for a seamless user experience. Achieved significant engagement with over 2000 unique views on LinkedIn through a custom design.",
    date: "14-07-2024",
    link: "https://github.com/Manik072/Refokus",
    images: [],
    isFeatured: false,
    techStack: ["React", "TailwindCSS", "FramerMotion", "Lenis"],
  }, 
  {
    title: "Obys Agency Ui",
    description:
      "Cloned the award-winning OBYS Agency website, recreating its sleek design and interactive features using HTML, CSS, JavaScript, Three.js, and GSAP. Focused on delivering a visually stunning and highly engaging user experience with smooth animations and 3D effects, capturing the essence of the original site while ensuring responsiveness and performance across devices.",
    date: "14-08-2023",
    link: "https://github.com/Manik072/Obys-Agency-Clone",
    images: ["/projects/aslyf.png"],
    isFeatured: false,
    techStack: ["HTML5", "Vanilla CSS", "JavaScript", "Three.js", "GSAP", "LocomotiveJs"],
  },
  // {
  //   title: "Cricbuzz Web Scraper",
  //   description:
  //     "The Cricbuzz Web Scraper is a tool designed to scrape comprehensive cricket data from Cricbuzz. It can retrieve live, upcoming, and past matches, series details, team information, and player stats. Built with ease of use in mind, this scraper allows users to access detailed cricket data programmatically.",
  //   date: "10-07-2023",
  //   link: "https://github.com/mukund1606/cricbuzz-scraper",
  //   images: [],
  //   isFeatured: false,
  //   techStack: ["Python", "BeautifulSoup"],
  // },
  // {
  //   title: "AlternativeTo Scraper",
  //   description:
  //     "The AlternativeTo Scraper is a powerful tool for scraping the latest apps from AlternativeTo. It provides search functionality, allows users to scrape app details, and find alternatives with various filters. Supporting Chrome, Edge, and Firefox, this scraper enables easy access to new, trending, most viewed, and crew-picked apps, as well as discontinued ones.",
  //   date: "10-07-2023",
  //   link: "https://github.com/mukund1606/alternativeto-scraper",
  //   images: [],
  //   isFeatured: false,
  //   techStack: ["Python", "BeautifulSoup", "Selenium"],
  // },
  // {
  //   title: "AWC Website",
  //   description:
  //     "AcchaWalaCollege is a platform for students to find the best colleges in India, offering reviews, rankings, and admission guidance. I developed the initial basic, responsive frontend for their website, enhancing user experience and accessibility.",
  //   date: "15-05-2023",
  //   link: "https://github.com/mukund1606/awc-website",
  //   images: [],
  //   isFeatured: false,
  //   techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  // },
];

export type ProjectDataType = {
  title: string;
  description: string;
  date: string;
  link?: string;
  images: string[];
  youtubeVideo?: string;
  isFeatured: boolean;
  techStack: string[];
};
