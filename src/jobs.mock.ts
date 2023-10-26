import { JobFragment } from "@components/organisms/JobCard";

export const mockJobs: JobFragment[] = [
  {
    __typename: "JobModel",
    id: "job1",
    title: "Software Developer",
    description: `As an engineer working on our security products, you will be a key contributor to our Cloud Security Platform, delivering modern security solutions to companies all over the globe. You will build powerful user experiences to deliver key security insights, while enabling exploration of millions of security data points, empowering security experts and democratizing it for all our customers.

What You’ll Do: 

- Transform large and complex datasets to beautiful visualizations
- Implement compelling, usable UIs; contribute to their design; and engineer them with React and Redux
- Join a tightly knit team solving hard problems the right way
- Improve performance and address scalability limits
- Own meaningful parts of our service, have an impact, grow with the company

Who You Are: 

- You have been designing and engineering UIs for several years
- You’re a master of Javascript / Typescript, HTML, and CSS and you’re aware of the latest trends with frontend technologies
- You know how to use design patterns to create simple and reusable components for complex UIs
- You are familiar with data structures and algorithms, profiling and optimization
- You value code simplicity, performance and details
- You are an accountable team player that likes to get things done
- You want to work in a fast, high growth startup environment that respects its engineers and customers

Benefits and Growth: 

- Product training to develop an in-depth understanding of our product and space
- Continuous career development and pathing opportunities for internal mobility 
- Intra-departmental mentor and buddy program for in-house networking 
- An inclusive company culture, ability to join our Community Guilds
- New hire stock equity (RSUs) and employee stock purchase plan
- Free global mental health benefit through Spring Health 
- Generous global benefits
`,
    creator: {
      __typename: "BasicUserModel",
      firstName: "Alice",
      lastName: "Johnson",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=alice-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "San Francisco",
      country: "USA",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "JavaScript",
        id: "skill1_1",
      },
      {
        __typename: "Skill",
        name: "React",
        id: "skill2_1",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Health Insurance",
        id: "benefit1_1",
      },
      {
        __typename: "Benefit",
        name: "Flexible Work Hours",
        id: "benefit2_1",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job2",
    title: "Data Scientist",
    description:
      "We are looking for a data scientist to analyze and visualize data.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "David",
      lastName: "Brown",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=david-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "New York",
      country: "USA",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Python",
        id: "skill1_2",
      },
      {
        __typename: "Skill",
        name: "Machine Learning",
        id: "skill2_2",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Health Insurance",
        id: "benefit1_2",
      },
      {
        __typename: "Benefit",
        name: "Remote Work",
        id: "benefit2_2",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job3",
    title: "Graphic Designer",
    description:
      "Join our creative team to design stunning graphics and visuals.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Sarah",
      lastName: "Smith",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=sarah-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Los Angeles",
      country: "USA",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Adobe Illustrator",
        id: "skill1_3",
      },
      {
        __typename: "Skill",
        name: "Photoshop",
        id: "skill2_3",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Creative Freedom",
        id: "benefit1_3",
      },
      {
        __typename: "Benefit",
        name: "Competitive Salary",
        id: "benefit2_3",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job4",
    title: "Marketing Manager",
    description:
      "We are hiring a Marketing Manager to lead our marketing campaigns.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Michael",
      lastName: "Jones",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=michael-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Chicago",
      country: "USA",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Marketing Strategy",
        id: "skill1_4",
      },
      {
        __typename: "Skill",
        name: "Social Media Marketing",
        id: "skill2_4",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "401(k) Plan",
        id: "benefit1_4",
      },
      {
        __typename: "Benefit",
        name: "Paid Time Off",
        id: "benefit2_4",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job5",
    title: "UX/UI Designer",
    description:
      "We're seeking a UX/UI Designer to create engaging user experiences.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Emma",
      lastName: "Wilson",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=emma-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "London",
      country: "UK",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "User Research",
        id: "skill1_5",
      },
      {
        __typename: "Skill",
        name: "UI Prototyping",
        id: "skill2_5",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Creative Environment",
        id: "benefit1_5",
      },
      {
        __typename: "Benefit",
        name: "Professional Development",
        id: "benefit2_5",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job6",
    title: "Project Manager",
    description:
      "Join our team as a Project Manager to oversee complex projects.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "William",
      lastName: "Smith",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=william-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Toronto",
      country: "Canada",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Project Planning",
        id: "skill1_6",
      },
      {
        __typename: "Skill",
        name: "Team Leadership",
        id: "skill2_6",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Competitive Salary",
        id: "benefit1_6",
      },
      {
        __typename: "Benefit",
        name: "Work-Life Balance",
        id: "benefit2_6",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job7",
    title: "Customer Support Specialist",
    description:
      "We are hiring a Customer Support Specialist to assist our customers.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Olivia",
      lastName: "Miller",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=olivia-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Sydney",
      country: "Australia",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Customer Service",
        id: "skill1_7",
      },
      {
        __typename: "Skill",
        name: "Problem Solving",
        id: "skill2_7",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Flexible Work Hours",
        id: "benefit1_7",
      },
      {
        __typename: "Benefit",
        name: "Healthcare Benefits",
        id: "benefit2_7",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job8",
    title: "Financial Analyst",
    description:
      "Join our finance team as a Financial Analyst to analyze financial data.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "James",
      lastName: "Roberts",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=james-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Berlin",
      country: "Germany",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Financial Modeling",
        id: "skill1_8",
      },
      {
        __typename: "Skill",
        name: "Data Analysis",
        id: "skill2_8",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Pension Plan",
        id: "benefit1_8",
      },
      {
        __typename: "Benefit",
        name: "Career Growth Opportunities",
        id: "benefit2_8",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job9",
    title: "HR Manager",
    description:
      "We are seeking an HR Manager to lead our human resources department.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Sophia",
      lastName: "Davis",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=sophia-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Paris",
      country: "France",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Employee Relations",
        id: "skill1_9",
      },
      {
        __typename: "Skill",
        name: "Talent Acquisition",
        id: "skill2_9",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Employee Development Programs",
        id: "benefit1_9",
      },
      {
        __typename: "Benefit",
        name: "Generous Benefits Package",
        id: "benefit2_9",
      },
    ],
  },
  {
    __typename: "JobModel",
    id: "job10",
    title: "Sales Representative",
    description:
      "Join our sales team as a Sales Representative to drive sales growth.",
    creator: {
      __typename: "BasicUserModel",
      firstName: "Liam",
      lastName: "Anderson",
      profileImage:
        "https://api.dicebear.com/7.x/personas/svg?seed=liam-profile&backgroundType=gradientLinear,solid",
    },
    address: {
      __typename: "Address",
      city: "Tokyo",
      country: "Japan",
    },
    skillsNeeded: [
      {
        __typename: "Skill",
        name: "Sales Strategies",
        id: "skill1_10",
      },
      {
        __typename: "Skill",
        name: "Negotiation",
        id: "skill2_10",
      },
    ],
    benefits: [
      {
        __typename: "Benefit",
        name: "Uncapped Commission",
        id: "benefit1_10",
      },
      {
        __typename: "Benefit",
        name: "International Travel Opportunities",
        id: "benefit2_10",
      },
    ],
  },
];
