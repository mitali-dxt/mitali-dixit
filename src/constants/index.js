import {
    mobile,
    backend,
    creator,
    web,
    desco,
    gdsc,
    headstarter,
    nft,
    echodetect,
    weather,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "UI-UX Designer",
      icon: backend,
    },
    {
      title: "Data Structures and Algorithms",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "UI-UX Designer",
      company_name: "Design Company",
      icon: desco,
      iconBg: "#FE3D4D",
      date: "April 2023 - April 2024",
      points: [
        "Designing beautiful and functional user interfaces for various startups and club websites.",
"Collaborating with cross-functional teams, including designers and developers, to create seamless user experiences.",
"Conducting hands-on workshops on UI-UX design, sharing best practices and industry insights.",
"Organizing various events and workshops for students on campus to enhance their understanding of UI-UX design.",
      ],
    },
    {
      title: "Blockchain Team Coordinator",
      company_name: "Google Developer Students Club, NIT Patna",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - May 2023",
      points: [
        "Developing and maintaining web3 applications using Ethereum, Solidity, and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Organized a National level Hackathon in collaboration with other clubs",
        "Organized various workshops and events to educate students about blockchain technology.",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter  AI",
      icon: headstarter,
      iconBg: "#090e12",
      date: "July 2024 - Present",
      points: [
        "Building 5+ AI apps and APIs using Next.JS, OpenAI, and other related technologies.",
        "Coached by industry professionals and senior developers to improve technical skills.",
        "Participating in hackathons and coding challenges to enhance problem-solving abilities.",
      ],
    },
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NFTify",
      description:
        "An AI powered NFT minting application that leverages AI models capable of generating unique digital images based on user-descriptions",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "ethereum",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image:nft,
      source_code_link: "https://github.com/srivas-divyansh/Blockchain-Lab",
    },
    {
      name: "EchoDetect.AI",
      description:
        "A web application that uses AI and LLMs to detect fraudulent product ratings and reviews on Amazon, aiming to analyze sentiment, identify patterns, and protect customer trust.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "beautiful soup",
          color: "pink-text-gradient",
        },
      ],
      image: echodetect,
      source_code_link: "https://github.com/mitali-dxt/EchoDetect.ai",
    },
    {
      name: "WeatherReady",
      description:
        "WeatheReady offers a comprehensive solution by integrating weather-based clothing recommendations, food suggestions, and a health chatbot into a single platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "weather-api",
          color: "green-text-gradient",
        },
        {
          name: "gemini-api",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/mitali-dxt/WeatheReady",
    },
  ];
  
  export { services, experiences, testimonials, projects };