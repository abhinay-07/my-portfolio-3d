import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  python,
  nextjs,
  prisma,
  mysql,
  firebase,
  Hibernate,
  spring,
  springboot,
  

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web & Java Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Optimization & Design",
    icon: mobile,
  },
  {
    title: "Digital Content Strategy & Communications",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "mysql",
    icon: mysql,
  },
  
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "Java",
    icon: java,
  },

  {
    name: "springboot",
    icon: springboot,
  },

  {
    name: "python",
    icon: python,
  },

  {
    name: "nextjs",
    icon: nextjs,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "prisma",
    icon: prisma,
  },
  
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "Hibernate",
    icon: Hibernate,
  },

  {
    name: "spring",
    icon: spring,
  },

  {
    name: "figma",
    icon: figma,
  },
  

];

const experiences = [
  {
    title: "Full-Stack Developer Intern → Development Lead",
    company_name: "Prayana Electric",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - April 2025",
   points: [
  "Built and maintained scalable web apps with React.js, Node.js, and MongoDB.",
  "Synced hardware updates with web features via close IoT and other team collaboration.",
  "Optimized UI with Tailwind CSS for responsive, cross-device experience.",
  "Managed GitHub and MongoDB workflows, cutting deployment bugs by 25–30%.",
]
  },
  {
    title: "React.js Developer (Frontend Focus)",
    company_name: "Shiksha Sathi",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2025 – May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student Coordinator(Head) → Intern",
    company_name: "VIT-AP University",
    icon: shopify,
    iconBg: "#383E56",
    date: " September 2022 – July 2025",
   points: [
  "Led a 90-member student team overseeing VIT-AP’s official social media presence, driving content strategy and audience engagement.",
  "Independently managed platforms like LinkedIn, Instagram, and others, growing total followers by over 150% during my tenure.",
  "Formulated and executed marketing campaigns to enhance brand visibility, increase reach, and boost user interaction.",
  "Directed event coverage and produced branded media content, ensuring timely delivery aligned with the university’s voice and goals.",
]
  },
  {
    title:" Freelance Full-Stack Developer",
    company_name: "Cyrisq UK Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Present",
    points: [
  "Developed and maintained full-stack client platforms using React.js, Node.js, and MongoDB, ensuring responsive and high-performance web solutions.",
  "Managed multiple freelance projects, architecting scalable systems and integrating APIs and databases to enhance functionality and reliability.",
  "Delivered production-ready code with consistent, on-time deployments, resulting in strong client satisfaction and repeat collaborations.",
]
  },
];

const activities = [
  {
    role: "President",
    organization: "Kalki Personality Development Club",
    points: [
  "Led a 200+ member club, organizing 15+ events to boost student confidence and communication.",
  "Launched Mirror Hour and SpeakUp Arena to promote self-expression across campus.",
  "Built a leadership model and represented the club at university forums for recognition and growth.",
]
  },
  {
    role: "Club Manager",
    organization: "Photography Club & Chaitra Telugu Association",
    points: [
  "Managed 10+ major events per club, ensuring flawless execution, logistics, and media coordination.",
  "Led creative direction for themed visuals and storytelling, enhancing audience engagement.",
  "Preserved cultural identity and built a media archive by mentoring juniors and collaborating on heritage events.",
],
  },
   {
    role: "Core Organizer",
    organization: "VTAPP (Technical Fest) & VITOPIA (Cultural Fest)",
    points: [
  "Led 30-member teams for 2 years to deliver high-impact university fests.",
  "Handled full-scale planning and logistics for seamless large events.",
  "Acted as a key organizing bridge, aligning student-led creativity with faculty objectives for cohesive and outcome-driven events.",
],
   }
];

const projects = [
  {
    name: "Park Plaza",
    description: 
  "Smart parking platform that enables users to view, reserve, and manage parking spots in real time using IoT and machine learning technologies, offering a seamless and efficient urban mobility solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhinay-07/Park-Plaza",
  },
  {
    name: "Tour Tuct",
    description:
"Web platform built for the VIT University community, offering a localized guide to nearby attractions, businesses, and services. Features include categorized listings, reviews, trip cost estimates, map navigation, and event alerts—all designed for responsive access and secure, scalable use by students, locals, and tourists alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhinay-07/TourTact",
  },
  {
    name: "PlanIt",
    description:
"Web platform designed for the VIT University community, delivering a trusted guide to nearby attractions, businesses, and essential services. With categorized listings, trip cost estimates, real-time navigation, and event alerts, the platform offers responsive, secure access across devices. Each listing features genuine, peer-verified reviews from VIT students—ensuring authenticity, relevance, and trust for students, locals, and tourists alike.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhinay-07/PlanIT/tree/main",
  },
];

export { services, technologies, experiences, activities, projects };
