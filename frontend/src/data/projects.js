// src/data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "Gemstone Price Prediction",
    shortDescription: "MLOps pipeline for gemstone price prediction with CI/CD deployment on AWS",
    fullDescription: "Built a complete MLOps pipeline for gemstone price prediction featuring web scraping, data validation with pytest and flake8, model training on high-dimensional data, and automated deployment on AWS EC2. Implemented MLflow for experiment tracking, DVC for data versioning, and Docker for containerization.",
    image: 'images/Gemstone-UI.png',
    technologies: ["Python", "MLflow", "DVC", "AWS S3", "AWS EC2", "Docker", "Pytest", "Flake8", "Scikit-learn", "CI/CD", "GitHub Actions"],
    category: "Machine Learning",
    status: "completed",
    featured: true,
    links: {
      live: "https://gemstone-price-prediction-zenu.onrender.com/",
      github: "https://github.com/Anisshaikh27/Gemstone-price-prediction"
    },
    metrics: {
      performance: 94,
      accuracy: "92%",
      deployment: "Render"
    },
    date: "2024-06"
  },
  {
    id: 2,
    title: "RASA Intelligent Chatbot",
    shortDescription: "AI-powered chatbot using RASA framework with LLM integration",
    fullDescription: "Created an intelligent web chatbot using RASA Open Source with LLM integration to handle both in-scope and out-of-scope queries. Features include natural language understanding, rule-based responses, custom actions, and a responsive Bootstrap frontend interface.",
    image: "/images/chatbot-UI.png",
    technologies: ["RASA NLU", "Python", "LLM", "Bootstrap", "Natural Language Processing", "Custom Actions", "Rule-Based System"],
    category: "ai",
    status: "completed",
    featured: true,
    links: {
      live: "https://your-rasa-chatbot-demo.com",
      github: "https://github.com/Anisshaikh27/Chatbot-using-Rasa"
    },
    metrics: {
      performance: 96,
      accuracy: "89%",
      responseTime: "<500ms"
    },
    date: "2024-05"
  },
  {
    id: 3,
    title: "Homestay Booking Platform",
    shortDescription: "Full-stack MERN application for homestay bookings with authentication",
    fullDescription: "Built a comprehensive homestay booking platform using the MERN stack with RESTful APIs. Features include user authentication & authorization, property listings, booking management, user profiles, and secure payment integration. Implemented JWT authentication and MongoDB for data storage.",
    image: "/images/homestay-UI.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT", "Authentication", "Authorization", "CSS"],
    category: "web",
    status: "completed",
    featured: true,
    links: {
      live: "https://homestay-pb5r.onrender.com",
      github: "https://github.com/Anisshaikh27/homestay-website-"
    },
    metrics: {
      performance: 91,
      lighthouse: 94,
      users: "200+"
    },
    date: "2024-03"
  },
  {
    id: 4,
    title: "MBTI Personality Recognition",
    shortDescription: "NLP-based personality classifier for predicting MBTI types from text",
    fullDescription: "Developed a personality classifier to predict MBTI personality types from textual data using advanced NLP techniques. Implemented Bag-of-Words, word embeddings, and various machine learning algorithms to analyze writing patterns and personality traits.",
    image: "../assets/images/",
    technologies: ["Python", "NLP", "Scikit-learn", "Bag-of-Words", "Word2Vec", "Pandas", "NumPy", "NLTK", "Data Visualization"],
    category: "ml",
    status: "completed",
    featured: false,
    links: {
      live: "https://personality-recognition-demo.com",
      github: "https://github.com/Anisshaikh27/personality-recognition"
    },
    metrics: {
      performance: 88,
      accuracy: "84%",
      dataPoints: "8000+"
    },
    date: "2024-02"
  },
  {
    id: 5,
    title: "YourKabaadiwaala Platform",
    shortDescription: "Online scrap dealer platform revolutionizing waste management industry",
    fullDescription: "A cutting-edge scrap dealing web application designed to revolutionize the scrap dealing industry by streamlining and modernizing operations for scrap dealers, recyclers, and their customers. Features include online booking, price estimation, pickup scheduling, and dealer network management.",
    image: "../assets/images/",
    technologies: ["WIX Website Builder", "Business Logic", "User Experience Design", "Payment Integration", "Booking System"],
    category: "web",
    status: "completed",
    featured: false,
    links: {
      live: "https://yourkabaadiwaala.com",
      github: null, // WIX project, no GitHub repo
      case_study: "/case-studies/kabaadiwaala-platform"
    },
    metrics: {
      performance: 92,
      lighthouse: 89,
      users: "500+"
    },
    date: "2024-01"
  },
  {
    id: 6,
    title: "Credit Card Fraud Detection",
    shortDescription: "Award-winning ML model for detecting fraudulent credit card transactions",
    fullDescription: "Runner-up project at GEEK-vishwa Hackathon focusing on credit card fraud detection using machine learning algorithms. Implemented advanced feature engineering, anomaly detection techniques, and real-time prediction capabilities to identify fraudulent transactions with high accuracy.",
    image: "../assets/images/",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Anomaly Detection", "Data Preprocessing", "Feature Engineering"],
    category: "ml",
    status: "completed",
    featured: false,
    links: {
      live: "https://fraud-detection-demo.com",
      github: "https://github.com/Anisshaikh27/credit-card-fraud-detection",
      case_study: "/case-studies/fraud-detection"
    },
    metrics: {
      performance: 97,
      accuracy: "96%",
      precision: "94%"
    },
    date: "2024-04"
  },
  {
    id: 7,
    title: "AI-Powered Chatbots Research",
    shortDescription: "IEEE conference research paper on AI-powered chatbot technologies",
    fullDescription: "Comprehensive research paper on AI-Powered Chatbots submitted to IEEE Conference 2025 (under review). The research explores advanced conversational AI techniques, natural language processing improvements, and the integration of large language models in chatbot systems.",
    image: "../assets/images/",
    technologies: ["Research", "AI", "Natural Language Processing", "Chatbot Technology", "Academic Writing", "Literature Review"],
    category: "research",
    status: "in-progress",
    featured: false,
    links: {
      live: "https://research-paper-preview.com",
      github: 'https://github.com/Anisshaikh27/Certifications/blob/main/ResearchPaperFinal.pdf',
      case_study: "/research/ai-chatbots-paper"
    },
    metrics: {
      performance: null,
      citations: "Under Review",
      conference: "IEEE 2025"
    },
    date: "2024-07"
  }
];

export const projectCategories = [
  { 
    id: 'all', 
    label: 'All Projects', 
    count: projectsData.length 
  },
  { 
    id: 'web', 
    label: 'Web Development', 
    count: projectsData.filter(p => p.category === 'web').length 
  },
  { 
    id: 'ml', 
    label: 'Machine Learning', 
    count: projectsData.filter(p => p.category === 'ml').length 
  },
  { 
    id: 'ai', 
    label: 'AI & NLP', 
    count: projectsData.filter(p => p.category === 'ai').length 
  },
  { 
    id: 'research', 
    label: 'Research', 
    count: projectsData.filter(p => p.category === 'research').length 
  },
  { 
    id: 'featured', 
    label: 'Featured', 
    count: projectsData.filter(p => p.featured).length 
  }
];

// Additional data for skills showcase
export const technicalSkills = {
  programmingLanguages: ["Python", "Java", "JavaScript", "C++"],
  dataScience: {
    visualization: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Microsoft PowerBI"],
    mlDl: ["NumPy", "Pandas", "SciPy", "Scikit-learn", "TensorFlow", "Keras", "CNN", "ANN", "RNN"],
    nlp: ["NLTK", "SpaCy", "BOW", "Word2Vec", "Doc2Vec", "GloVe", "Transformers", "BERT", "Llama", "RASA"],
    statistics: ["PCA", "LDA", "Hypothesis Testing", "ANOVA", "Clustering"]
  },
  mlops: ["MLflow", "DVC", "Docker", "AWS S3", "AWS ECR", "CI/CD", "GitHub Actions", "Flask", "Conda", "Pytest", "Flake8", "mypy"],
  webDevelopment: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Firebase", "Git", "GitHub"]
};

// Professional experience
export const experience = [
  {
    title: "Machine Learning Intern",
    company: "AI Adventures LLP",
    period: "July 2024 - Aug 2024",
    description: "Built and deployed ML pipelines with web scraping, data validation (pytest, flake), and model training on high-dimensional data, deployed on AWS EC2."
  }
];

// Education background
export const education = [
  {
    degree: "BTech in AIDS",
    institution: "AISSMS's Institute of Information Technology, Pune",
    cgpa: "8.1",
    period: "2022-26"
  },
  {
    degree: "XII (Maharashtra State Board)",
    institution: "MHTCET 94%ile | JEE 85%ile | STATE BOARD 75%",
    period: "2020-22"
  }
];

// Achievements and certifications
export const achievements = [
  {
    title: "Runner-up – GEEK-vishwa Hackathon",
    description: "Credit Card Fraud Detection",
    type: "hackathon"
  },
  {
    title: "Research Paper – AI-Powered Chatbots",
    description: "IEEE Conference 2025 – under review",
    type: "research"
  },
  {
    title: "NPTEL course by IIT Kharagpur",
    description: "Ethical Hacking (Elite + Silver)",
    type: "certification"
  }
];
