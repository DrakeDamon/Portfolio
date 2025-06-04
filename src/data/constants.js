export const Bio = {
  name: "David Damon",
  roles: [
    "Data Engineer",
    "Python Developer", 
    "Machine Learning Engineer",
    "Full Stack Developer"
  ],
  description: "Medical-trained analytical precision meets cutting-edge data engineering expertise. I'm a Python developer specializing in building sophisticated ETL pipelines, data lakehouse architectures, and machine learning deployments. I transform complex biological and performance datasets into actionable insights through precision-driven development approaches.",
  github: "https://github.com/DrakeDamon",
  linkedin: "https://www.linkedin.com/in/drakedamon",
  resume: "https://your-resume-link.pdf", // Update with actual resume link
  email: "dddamon06@gmail.com",
  phone: "(316) 609-8566",
  facebook: "#",
  twitter: "#",
  insta: "#"
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      }
    ]
  },
  {
    title: "Data Engineering & ETL",
    skills: [
      {
        name: "Apache Spark",
        image: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
      },
      {
        name: "Databricks",
        image: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
      },
      {
        name: "Pandas",
        image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Jupyter",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
      }
    ]
  },
  {
    title: "Cloud & Databases",
    skills: [
      {
        name: "AWS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Docker",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Git",
        image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      }
    ]
  },
  {
    title: "Machine Learning & Web",
    skills: [
      {
        name: "TensorFlow",
        image: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      },
      {
        name: "scikit-learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "Flask",
        image: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      },
      {
        name: "React",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "FastAPI",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
      }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    img: "https://via.placeholder.com/150?text=DevSoft",
    role: "React Engineer (Contract)",
    company: "DevSoft",
    date: "June 2022 - Present",
    desc: "Develop and maintain React-based web applications serving 1000+ users with responsive design and performance optimization. Build reusable component libraries implementing state management solutions using Context API and React hooks. Achieved 40% faster load times through code splitting and lazy loading implementations.",
    skills: [
      "React",
      "TypeScript",
      "REST APIs",
      "Performance Optimization",
      "State Management",
      "Code Splitting"
    ],
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150?text=HCPS",
    role: "Biology Teacher",
    company: "Freedom High School, Hillsborough County Public Schools",
    date: "August 2023 - Present",
    desc: "Analyze student performance data for 150+ biology students implementing data-driven instructional strategies and assessment analytics. Developed Python-based automated grading systems and progress tracking tools reducing administrative workload by 30%. Integrate statistical analysis methods resulting in 15% improvement in student outcomes.",
    skills: [
      "Data Analysis",
      "Python Automation",
      "Statistical Analysis",
      "Performance Tracking",
      "Educational Analytics"
    ],
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150?text=FedEx",
    role: "CDL Driver",
    company: "FedEx Freight",
    date: "2021 - 2023",
    desc: "Managed commercial vehicle operations across city and road routes ensuring 99.9% on-time delivery performance. Optimized complex logistics coordination and real-time route optimization using GPS and fleet management systems. Maintained detailed delivery logs demonstrating precision attention to detail and data accuracy.",
    skills: [
      "Logistics Optimization",
      "Route Planning",
      "Data Documentation",
      "Fleet Management Systems"
    ],
  }
];

export const education = [
  {
    id: 0,
    school: "Flatiron School",
    date: "April 2025",
    grade: "",
    desc: "Intensive full-stack software development program with focus on Python and data applications. Developed proficiency in building data-driven web applications and implementing machine learning models.",
    degree: "Full Stack Web Development Certificate - Python with Flask and JavaScript",
  },
  {
    id: 1,
    school: "Friends University",
    date: "2021",
    grade: "",
    desc: "Comprehensive education in scientific methodology and analytical thinking. Developed strong problem-solving skills essential for data science applications.",
    degree: "Bachelor of Science",
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Sports Analytics Data Lakehouse",
    date: "2024 - Present",
    description: "Enterprise-grade real-time data processing platform with Bronze-Silver-Gold architecture and automated ML model deployment. Engineered Databricks data lakehouse processing NFL Combine datasets with 99.9% uptime. Achieved 80%+ prediction accuracy using clustering and neural networks.",
    image: "https://via.placeholder.com/800x450?text=Sports+Analytics+Lakehouse",
    tags: [
      "Python",
      "Databricks",
      "Apache Spark",
      "AWS",
      "Delta Lake",
      "Machine Learning",
      "FastAPI",
      "PostgreSQL",
      "OpenCV",
      "MediaPipe"
    ],
    category: "Data Engineering",
    github: "https://github.com/DrakeDamon/sports-analytics-lakehouse",
    webapp: "https://sports-analytics-demo.com",
    member: [
      {
        name: "David Damon",
        img: "https://via.placeholder.com/50",
        linkedin: "https://www.linkedin.com/in/drakedamon",
        github: "https://github.com/DrakeDamon",
      }
    ],
    // Data science specific details
    datasetInfo: {
      source: "NFL Combine Performance Dataset",
      size: "10,000+ athlete records",
      features: "40+ performance metrics and biomechanical measurements",
      preprocessing: "Real-time data validation and normalization pipeline"
    },
    modelArchitecture: [
      "Bronze layer: Raw data ingestion with schema validation",
      "Silver layer: Data cleansing and feature engineering",
      "Gold layer: Aggregated metrics and ML-ready datasets",
      "ML Pipeline: Clustering algorithms and neural networks",
      "Computer vision integration for movement analysis"
    ],
    performanceMetrics: {
      accuracy: "80%+",
      uptime: "99.9%",
      querySpeed: "65% faster",
      concurrentUsers: "1000+"
    },
    technicalChallenges: [
      "Real-time streaming data processing",
      "Scalable infrastructure design",
      "Low-latency prediction serving",
      "Computer vision integration"
    ]
  },
  {
    id: 2,
    title: "PaycheckBuddy Financial Data Platform",
    date: "2024",
    description: "Full-stack financial analytics system with time-period based budgeting and real-time expense processing. Built Python Flask API with SQLAlchemy ORM achieving 40% faster query performance. Accelerated financial data processing by 85% through automated validation pipelines.",
    image: "https://via.placeholder.com/800x450?text=PaycheckBuddy",
    tags: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "Chart.js",
      "JWT Auth",
      "REST API"
    ],
    category: "Full Stack",
    github: "https://github.com/DrakeDamon/paycheckbuddy",
    webapp: "https://paycheckbuddy-demo.com",
    member: [
      {
        name: "David Damon",
        img: "https://via.placeholder.com/50",
        linkedin: "https://www.linkedin.com/in/drakedamon",
        github: "https://github.com/DrakeDamon",
      }
    ],
    datasetInfo: {
      source: "User financial transaction data",
      size: "Real-time processing of thousands of transactions",
      features: "Multi-period budgeting with expense categorization",
      preprocessing: "Automated validation and data integrity checks"
    },
    performanceMetrics: {
      querySpeed: "40% faster",
      dataProcessing: "85% faster",
      responseTime: "< 200ms",
      reliability: "99.9%"
    }
  },
  {
    id: 3,
    title: "3DS Sports Group Elite Training Platform",
    date: "2024",
    description: "Modern React-based website for elite athletic training program with performance tracking and athlete management. Built with TypeScript showcasing training programs for elite youth athletes with cross-device accessibility.",
    image: "https://via.placeholder.com/800x450?text=3DS+Sports+Group",
    tags: [
      "React",
      "TypeScript",
      "Context API",
      "Responsive Design",
      "Performance Optimization"
    ],
    category: "Web App",
    github: "https://github.com/DrakeDamon/3ds-sports-group",
    webapp: "https://3ds-sports-group.com",
    member: [
      {
        name: "David Damon",
        img: "https://via.placeholder.com/50",
        linkedin: "https://www.linkedin.com/in/drakedamon",
        github: "https://github.com/DrakeDamon",
      }
    ]
  }
];

// New section for certifications
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Expected 2025",
    icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    credentialUrl: "#"
  },
  {
    id: 2,
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "Expected 2025",
    icon: "https://www.databricks.com/sites/default/files/2022-06/Associate-badge-eng.svg",
    credentialUrl: "#"
  }
];

export const TimeLineData = [
  { year: 2021, text: "Graduated with Bachelor of Science" },
  { year: 2022, text: "Started as React Engineer" },
  { year: 2023, text: "Began teaching and data analysis journey" },
  { year: 2024, text: "Focused on Data Engineering & ML" },
  { year: 2025, text: "Completing Flatiron School Program" },
];