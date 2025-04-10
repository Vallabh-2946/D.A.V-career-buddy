
export interface Resource {
  title: string;
  type: 'free' | 'paid';
  url: string;
  provider: string;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
  level?: number; // 0-100 for progress tracking
}

export interface WeeklyGoal {
  id: number;
  description: string;
  completed: boolean;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  match?: number; // 0-100 match percentage
  whyMatch?: string[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  demand: 'high' | 'medium' | 'low';
  skills: Skill[];
  learningPath: {
    month: number;
    focus: string;
    resources: Resource[];
  }[];
  weeklyGoals: WeeklyGoal[];
}

export const careerPaths: CareerPath[] = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Build user interfaces and create engaging web experiences using HTML, CSS, and JavaScript frameworks.",
    salary: {
      entry: "$60,000 - $80,000",
      mid: "$80,000 - $120,000",
      senior: "$120,000 - $160,000+"
    },
    demand: "high",
    skills: [
      {
        name: "HTML/CSS",
        description: "Structure and style web pages",
        level: 20
      },
      {
        name: "JavaScript",
        description: "Add interactivity to websites",
        level: 15
      },
      {
        name: "React",
        description: "Build component-based UIs",
        level: 5
      },
      {
        name: "Responsive Design",
        description: "Create sites that work on all devices",
        level: 10
      },
      {
        name: "Version Control (Git)",
        description: "Track and manage code changes",
        level: 25
      }
    ],
    learningPath: [
      {
        month: 1,
        focus: "HTML/CSS Fundamentals",
        resources: [
          {
            title: "Introduction to HTML5",
            type: "free",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/",
            provider: "freeCodeCamp",
            description: "Learn the basics of HTML structure and tags"
          },
          {
            title: "CSS Crash Course",
            type: "free",
            url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
            provider: "YouTube - Traversy Media",
            description: "Quick introduction to styling web pages with CSS"
          },
          {
            title: "The Complete Web Developer in 2023",
            type: "paid",
            url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
            provider: "Udemy",
            description: "Comprehensive course covering HTML/CSS fundamentals"
          }
        ]
      },
      {
        month: 2,
        focus: "JavaScript Basics",
        resources: [
          {
            title: "JavaScript Fundamentals",
            type: "free",
            url: "https://javascript.info/",
            provider: "JavaScript.info",
            description: "Modern JavaScript tutorial from basics to advanced"
          },
          {
            title: "JavaScript30",
            type: "free",
            url: "https://javascript30.com/",
            provider: "Wes Bos",
            description: "Build 30 things in 30 days with vanilla JavaScript"
          },
          {
            title: "Modern JavaScript From The Beginning",
            type: "paid",
            url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
            provider: "Udemy",
            description: "Learn modern JavaScript from the ground up"
          }
        ]
      },
      {
        month: 3,
        focus: "React Framework",
        resources: [
          {
            title: "React Official Tutorial",
            type: "free",
            url: "https://reactjs.org/tutorial/tutorial.html",
            provider: "React Docs",
            description: "Build a simple game with React"
          },
          {
            title: "Building React Apps",
            type: "free",
            url: "https://scrimba.com/learn/learnreact",
            provider: "Scrimba",
            description: "Interactive course on React fundamentals"
          },
          {
            title: "React - The Complete Guide",
            type: "paid",
            url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
            provider: "Udemy",
            description: "Comprehensive React course including Hooks, Redux, and more"
          }
        ]
      }
    ],
    weeklyGoals: [
      {
        id: 1,
        description: "Complete HTML basics section on freeCodeCamp",
        completed: false
      },
      {
        id: 2,
        description: "Build a simple personal webpage",
        completed: false
      },
      {
        id: 3,
        description: "Watch 2 CSS tutorial videos",
        completed: false
      },
      {
        id: 4,
        description: "Complete 1 coding challenge on JavaScript arrays",
        completed: false
      }
    ],
    whyMatch: [
      "You enjoy visual design and creating user experiences",
      "You're interested in coding but also want creative expression",
      "You like seeing immediate results from your work"
    ]
  },
  {
    id: "data-science",
    title: "Data Scientist",
    description: "Analyze complex data sets to find insights and solve business problems using statistics, programming, and machine learning.",
    salary: {
      entry: "$70,000 - $90,000",
      mid: "$90,000 - $130,000",
      senior: "$130,000 - $180,000+"
    },
    demand: "high",
    skills: [
      {
        name: "Python",
        description: "Programming language for data analysis",
        level: 10
      },
      {
        name: "Statistics",
        description: "Mathematical analysis of data",
        level: 5
      },
      {
        name: "Machine Learning",
        description: "Algorithms that learn from data",
        level: 0
      },
      {
        name: "Data Visualization",
        description: "Creating visual representations of data",
        level: 15
      },
      {
        name: "SQL",
        description: "Database query language",
        level: 20
      }
    ],
    learningPath: [
      {
        month: 1,
        focus: "Python Fundamentals for Data Science",
        resources: [
          {
            title: "Python for Everybody",
            type: "free",
            url: "https://www.py4e.com/",
            provider: "Dr. Charles Severance",
            description: "Introduction to Python programming"
          },
          {
            title: "Data Analysis with Python",
            type: "free",
            url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
            provider: "freeCodeCamp",
            description: "Learn data analysis libraries in Python"
          },
          {
            title: "Python for Data Science and Machine Learning Bootcamp",
            type: "paid",
            url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
            provider: "Udemy",
            description: "Comprehensive Python course for data science"
          }
        ]
      },
      {
        month: 2,
        focus: "Statistics and Data Analysis",
        resources: [
          {
            title: "Statistics and Probability",
            type: "free",
            url: "https://www.khanacademy.org/math/statistics-probability",
            provider: "Khan Academy",
            description: "Fundamentals of statistics and probability"
          },
          {
            title: "Data Analysis with Pandas",
            type: "free",
            url: "https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/",
            provider: "Pandas Documentation",
            description: "Learn the popular data analysis library"
          },
          {
            title: "Statistics for Data Science",
            type: "paid",
            url: "https://www.coursera.org/learn/statistics-for-data-science-python",
            provider: "Coursera",
            description: "Statistical methods for data analysis"
          }
        ]
      },
      {
        month: 3,
        focus: "Machine Learning Basics",
        resources: [
          {
            title: "Machine Learning Crash Course",
            type: "free",
            url: "https://developers.google.com/machine-learning/crash-course",
            provider: "Google",
            description: "Introduction to machine learning concepts"
          },
          {
            title: "Scikit-Learn Tutorials",
            type: "free",
            url: "https://scikit-learn.org/stable/tutorial/",
            provider: "Scikit-Learn",
            description: "Learn the popular machine learning library"
          },
          {
            title: "Machine Learning A-Z",
            type: "paid",
            url: "https://www.udemy.com/course/machinelearning/",
            provider: "Udemy",
            description: "Hands-on Python & R In Data Science"
          }
        ]
      }
    ],
    weeklyGoals: [
      {
        id: 1,
        description: "Install Python and Jupyter Notebooks",
        completed: false
      },
      {
        id: 2,
        description: "Complete 3 Python exercises on lists and dictionaries",
        completed: false
      },
      {
        id: 3,
        description: "Watch introduction to Pandas video tutorial",
        completed: false
      },
      {
        id: 4,
        description: "Analyze a small dataset using Python",
        completed: false
      }
    ],
    whyMatch: [
      "You enjoy solving complex problems with data",
      "You're interested in finding patterns and drawing insights",
      "You have strong analytical and logical reasoning skills"
    ]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create user-centered designs for products and services focusing on intuitive, accessible, and enjoyable user experiences.",
    salary: {
      entry: "$55,000 - $75,000",
      mid: "$75,000 - $110,000",
      senior: "$110,000 - $150,000+"
    },
    demand: "medium",
    skills: [
      {
        name: "User Research",
        description: "Understanding user needs and behaviors",
        level: 15
      },
      {
        name: "Wireframing",
        description: "Creating basic layouts and interfaces",
        level: 20
      },
      {
        name: "Prototyping",
        description: "Building interactive mockups",
        level: 10
      },
      {
        name: "UI Design",
        description: "Creating visual elements of interfaces",
        level: 25
      },
      {
        name: "Usability Testing",
        description: "Evaluating designs with users",
        level: 5
      }
    ],
    learningPath: [
      {
        month: 1,
        focus: "UX Fundamentals and Design Thinking",
        resources: [
          {
            title: "UX Design Fundamentals",
            type: "free",
            url: "https://www.interaction-design.org/literature/topics/ux-design",
            provider: "Interaction Design Foundation",
            description: "Introduction to UX concepts"
          },
          {
            title: "Design Thinking 101",
            type: "free",
            url: "https://www.nngroup.com/articles/design-thinking/",
            provider: "Nielsen Norman Group",
            description: "Understanding design thinking methodology"
          },
          {
            title: "Google UX Design Professional Certificate",
            type: "paid",
            url: "https://www.coursera.org/professional-certificates/google-ux-design",
            provider: "Coursera",
            description: "Comprehensive UX design program"
          }
        ]
      },
      {
        month: 2,
        focus: "User Research and Wireframing",
        resources: [
          {
            title: "User Research Methods",
            type: "free",
            url: "https://www.usability.gov/how-to-and-tools/methods/index.html",
            provider: "Usability.gov",
            description: "Overview of different user research methods"
          },
          {
            title: "Wireframing Basics",
            type: "free",
            url: "https://www.youtube.com/watch?v=qpH7-KFWZRI",
            provider: "YouTube - AJ&Smart",
            description: "Learn the basics of wireframing interfaces"
          },
          {
            title: "User Experience Research and Design",
            type: "paid",
            url: "https://www.coursera.org/specializations/michiganux",
            provider: "Coursera",
            description: "Comprehensive user research and design course"
          }
        ]
      },
      {
        month: 3,
        focus: "Prototyping and UI Design",
        resources: [
          {
            title: "Figma Tutorial",
            type: "free",
            url: "https://www.figma.com/resources/learn-design/",
            provider: "Figma",
            description: "Learn the popular UI design tool"
          },
          {
            title: "Prototyping in Figma",
            type: "free",
            url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
            provider: "YouTube - Figma",
            description: "Create interactive prototypes in Figma"
          },
          {
            title: "UI/UX Design Bootcamp",
            type: "paid",
            url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
            provider: "Udemy",
            description: "Comprehensive UI/UX design course"
          }
        ]
      }
    ],
    weeklyGoals: [
      {
        id: 1,
        description: "Complete a UX design article and take notes",
        completed: false
      },
      {
        id: 2,
        description: "Create a simple wireframe for a mobile app",
        completed: false
      },
      {
        id: 3,
        description: "Interview a friend about a website they use",
        completed: false
      },
      {
        id: 4,
        description: "Watch Figma basics tutorial",
        completed: false
      }
    ],
    whyMatch: [
      "You have a strong eye for design and usability",
      "You enjoy understanding people's needs and behaviors",
      "You like combining creativity with problem-solving"
    ]
  }
];
