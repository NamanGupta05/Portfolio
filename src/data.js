import {
  SiCplusplus, SiC, SiJavascript, SiReact, SiTailwindcss,
  SiGit, SiMysql, SiLeetcode, SiGeeksforgeeks, SiGithub,
} from 'react-icons/si';
import {
  FaCode, FaDatabase, FaTools, FaLaptopCode, FaServer,
  FaHtml5, FaCss3Alt, FaLinkedin,
} from 'react-icons/fa';

export const profile = {
  name: 'Naman Gupta',
  role: 'Software Engineer',
  tagline: 'DSA Enthusiast | Frontend Developer',
  email: 'namangupta.tech9@gmail.com',
  phone: '+91-9024584691',
  location: 'Mohali, Punjab, India',
  about:
    'Software Engineering Intern at EPAM Systems with strong expertise in Modern C++, OOP, and Data Structures & Algorithms. Solved 1600+ problems across coding platforms. Passionate about building scalable applications and optimizing performance.',
  shortBio:
    'I build scalable, responsive web applications and solve complex algorithmic problems with strong fundamentals in C++ and frontend development.',
  socials: {
    github: 'https://github.com/NamanGupta05',
    linkedin: 'https://www.linkedin.com/in/naman-gupta-112818251/',
    leetcode: 'https://leetcode.com/u/namangupta_20/',
    gfg: 'https://www.geeksforgeeks.org/user/namangupta_05/',
  },
};

export const roles = ['Software Engineer', 'DSA Problem Solver', 'Frontend Developer', 'Aspiring SDE'];

export const skills = [
  {
    title: 'Languages',
    icon: FaCode,
    items: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    items: [
      { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    title: 'Core CS',
    icon: FaServer,
    items: [
      { name: 'DSA', color: '#a78bfa' },
      { name: 'OOP', color: '#22d3ee' },
      { name: 'DBMS', color: '#f472b6' },
      { name: 'Operating Systems', color: '#facc15' },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', color: '#007ACC' },
      { name: 'STL', color: '#a78bfa' },
      { name: 'Recharts', color: '#22d3ee' },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQL', color: '#22d3ee' },
    ],
  },
];

export const experience = [
  {
    company: 'EPAM Systems',
    role: 'Junior Software Engineering Intern',
    period: 'Jan 2026 — Present',
    points: [
      'Completed structured training in Modern C++ covering memory management, OOP, STL, templates, and exception handling.',
      'Practiced RAII, Move Semantics, and Rule of 0/3/5 in modular programming assignments.',
      'Implemented smart pointers (unique_ptr, shared_ptr, weak_ptr) for safe memory management.',
      'Strengthened OOP design using encapsulation, inheritance, and polymorphism.',
    ],
    tech: ['Modern C++', 'STL', 'OOP', 'RAII', 'Smart Pointers'],
  },
  {
    company: 'IT Waves',
    role: 'React Developer Intern',
    period: 'June 2024 — July 2024',
    points: [
      'Built a real-time cryptocurrency dashboard using ReactJS and Tailwind CSS with reusable components.',
      'Integrated REST APIs for live market data and implemented dynamic visualizations using Recharts.',
      'Optimized state-driven UI features including price toggling and currency selection.',
    ],
    tech: ['React', 'Tailwind CSS', 'REST API', 'Recharts'],
  },
];

export const projects = [
  {
    title: 'Wheels on Rent',
    subtitle: 'Car Rental Platform',
    description:
      'A modern car rental platform with reusable React components, dynamic booking workflows, and interactive UI that improved user engagement by 40%.',
    tech: ['React', 'Reactstrap', 'CSS', 'JavaScript'],
    github: 'https://github.com/NamanGupta05/Cars_Rental',
    demo: 'https://cars-rental-ten.vercel.app/home',
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    title: 'Crypto-Visionary',
    subtitle: 'Real-time Crypto Dashboard',
    description:
      'A live cryptocurrency dashboard built during my internship at IT Waves. Fetches real-time data via REST APIs and visualizes it with Recharts.',
    tech: ['React', 'Tailwind CSS', 'REST API', 'Recharts'],
    github: 'https://github.com/NamanGupta05/cryptovisionary',
    demo: 'https://cryptovisionary-namangupta05s-projects.vercel.app/',
    accent: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Finance Dashboard',
    subtitle: 'Personal Finance Tracker',
    description:
      'An interactive finance dashboard for tracking budgets, expenses, and visualizing spending patterns with rich, responsive charts.',
    tech: ['React', 'Recharts', 'JavaScript'],
    github: 'https://github.com/NamanGupta05/Finance_Dashboard',
    demo: 'https://finance-dashboard-phi-five-22.vercel.app/',
    accent: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Railway Announcement System',
    subtitle: 'Smart Station Announcer · Patent Filed',
    description:
      'Developed a responsive, real-time railway announcement system that automates station announcements for improved passenger information delivery. Collaborated with a 5-member team and co-filed a patent for improved accuracy and efficiency.',
    tech: ['React', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/NamanGupta05/Railway_Announcement_System',
    demo: 'https://railway-announcement-system.vercel.app/',
    accent: 'from-sky-500 to-indigo-500',
  },
];

export const achievements = [
  { label: 'Problems Solved', value: 1600, suffix: '+' },
  { label: 'LeetCode Rating', value: 1814, suffix: '' },
  { label: 'GFG Rating', value: 1747, suffix: '' },
  { label: 'Competitions Won', value: 2, suffix: '+' },
];

export const honors = [
  { title: 'Patent Filed — Railway Announcement System', desc: 'Co-filed a patent with a 5-member team for improving real-time announcement accuracy and efficiency.' },
  { title: '1st Place — Coding-bytes', desc: 'Winner of CSE Department coding competition.' },
  { title: '1st Place — Brainly Bunch', desc: 'Winner of TPP Department technical contest.' },
  { title: 'Smart India Hackathon 2023', desc: 'Qualified for top teams by clearing two internal rounds.' },
];

export const timeline = [
  { year: '2022', title: 'Started B.Tech CSE', desc: 'Joined Chandigarh Engineering College, Mohali.' },
  { year: '2023', title: 'Smart India Hackathon', desc: 'Qualified through internal rounds with a top team.' },
  { year: '2023', title: 'Core Member — Fusion Club', desc: 'Joined the technical club, contributed to events & competitions.' },
  { year: '2024', title: 'Frontend Developer Intern', desc: 'Built Crypto-Visionary at IT Waves.' },
  { year: '2024', title: 'President — Fusion Club', desc: 'Elevated to President; led 100+ participant technical events.' },
  { year: '2025', title: '1600+ DSA Problems Solved', desc: 'Across LeetCode (1814) & GFG (1747).' },
  { year: '2026', title: 'EPAM Systems Intern', desc: 'Junior Software Engineering Intern — Modern C++.' },
];

export const education = [
  {
    school: 'Chandigarh Engineering College, Mohali, Punjab',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2022 — 2026',
    grade: 'SGPA: 8.80',
    icon: 'college',
  },
  {
    school: 'Good Shepherd Public School',
    degree: 'Senior Secondary (XII)',
    period: '2021 — 2022',
    grade: '87.4%',
    icon: 'school',
  },
  {
    school: 'Good Shepherd Public School',
    degree: 'Secondary (X)',
    period: '2019 — 2020',
    grade: '90.8%',
    icon: 'school',
  },
];

export const leadership = [
  {
    title: 'Fusion Club — President',
    org: 'Technical Club of CEC',
    period: 'July 2024 — July 2025',
    points: [
      'Led planning and execution of technical coding competitions & development events for 100+ participants.',
      'Designed problem statements and structured programming rounds to assess DSA & problem-solving skills.',
      'Mentored junior members in Data Structures, algorithms, and frontend development practices.',
    ],
  },
  {
    title: 'Fusion Club — Core Member',
    org: 'Technical Club of CEC',
    period: 'Nov 2023 — July 2024',
    points: [
      'Actively contributed to organising technical events and coding competitions.',
      'Assisted in designing problem sets and evaluating participants\' solutions.',
      'Collaborated with team to build a strong developer community within the college.',
    ],
  },
];

export const socialIcons = { SiGithub, FaLinkedin, SiLeetcode, SiGeeksforgeeks };
