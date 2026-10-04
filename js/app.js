const IM = {
    project2: "assets/img/project2.jpg",
    project3: "assets/img/project3.jpg",
    project4: "assets/img/project4.jpg",
    project8: "assets/img/project8.jpg",
    project6: "assets/img/project6.jpg",
    project10: "assets/img/project10.jpg",
  },
  VID = {
    Video1: "assets/video/Video1.mp4",
    Video2: "assets/video/Video2.mp4",
    Video3: "assets/video/Video3.mp4",
  },
  CERTS = [
    {
      t: "Video Editing & Animations",
      o: "NextGen Digital University",
      d: "",
      s: "assets/img/cert-13.jpg",
    },
    {
      t: "Web Development Internship",
      o: "Devixo Solutions",
      d: "",
      s: "assets/img/cert-14.jpg",
    },
    {
      t: "Virtual Internship",
      o: "DecodeLabs",
      d: "",
      s: "assets/img/cert-15.jpg",
    },
    {
      t: "Intro to Web Dev: HTML, CSS, JS",
      o: "IBM Skills Network / Coursera",
      d: "Oct 2026",
      s: "assets/img/cert-16.jpg",
    },
    {
      t: "Web Development Course",
      o: "PFSkillBuilders",
      d: "Sep 2026",
      s: "assets/img/cert-17.jpg",
    },
    {
      t: "AI Fundamentals",
      o: "Google / Coursera",
      d: "Sep 2026",
      s: "assets/img/cert-18.jpg",
    },
    {
      t: "Machine Learning Specialization",
      o: "Stanford Online / DeepLearning.AI",
      d: "Sep 2026",
      s: "assets/img/cert-19.jpg",
    },
    {
      t: "Azure Machine Learning",
      o: "Microsoft / Coursera",
      d: "Sep 2026",
      s: "assets/img/cert-20.jpg",
    },
    {
      t: "WordPress Web Development Professional",
      o: "DEXA",
      d: "",
      s: "assets/img/cert-21.jpg",
    },
    {
      t: "Machine Learning Specialization",
      o: "PalTech",
      d: "",
      s: "assets/img/cert-22.jpg",
    },
    {
      t: "Supervised ML: Regression & Classification",
      o: "DeepLearning.AI / Stanford",
      d: "Mar 2026",
      s: "assets/img/cert-23.jpg",
    },
    {
      t: "Advanced Learning Algorithms",
      o: "DeepLearning.AI / Stanford",
      d: "May 2026",
      s: "assets/img/cert-24.jpg",
    },
  ],
  CODE = {
    "index.html":
      '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Eman Fatima - Portfolio</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n\n<body>\n    <header class="header">\n        <nav class="navbar">\n            <div class="nav-container">\n                <div class="logo">\n                    <h2 class="logo-text">Eman<span class="logo-accent">.</span></h2>\n                </div>\n                <ul class="nav-menu">\n                    <li><a href="#hero" class="nav-link">Home</a></li>\n                    <li><a href="#about" class="nav-link">About</a></li>\n                    <li><a href="#skills" class="nav-link">Skills</a></li>\n                    <li><a href="#projects" class="nav-link">Projects</a></li>\n                    <li><a href="#videos" class="nav-link">Videos</a></li>\n                </ul>\n                <div class="hamburger">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </div>\n\n        </nav>\n    </header>\n\n\n\u2026',
    "style.css":
      "\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #2563eb;\n    --primary-dark: #1e40af;\n    --primary-light: #3b82f6;\n    --text-dark: #1f2937;\n    --text-light: #6b7280;\n    --text-lighter: #9ca3af;\n    --bg-white: #ffffff;\n    --bg-light: #f9fafb;\n    --bg-lighter: #f3f4f6;\n    --border-color: #e5e7eb;\n    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n    --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.12);\n    --shadow-xl: 0 20px 48px rgba(0, 0, 0, 0.15);\n}\n\nhtml {\n    scroll-behavior: smooth;\n    font-size: 16px;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n    color: var(--text-dark);\n    background-color: var(--bg-white);\n    line-height: 1.6;\n    overflow-x: hidden;\n}\n\n\n@keyframes fadeInUp {\n    from {\n\n\u2026",
    "script.js":
      '\nconst hamburger = document.querySelector(".hamburger");\nconst navMenu = document.querySelector(".nav-menu");\n\nhamburger.addEventListener("click", () => {\n    hamburger.classList.toggle("active");\n    navMenu.classList.toggle("active");\n});\n\ndocument.querySelectorAll(".nav-link").forEach(link => {\n    link.addEventListener("click", () => {\n        hamburger.classList.remove("active");\n        navMenu.classList.remove("active");\n    });\n});\n\ndocument.querySelectorAll(\'a[href^="#"]\').forEach(anchor => {\n    anchor.addEventListener("click", function(e) {\n        e.preventDefault();\n        const target = document.querySelector(this.getAttribute("href"));\n        target.scrollIntoView({ behavior: "smooth" });\n    });\n});\n\nconst faders = document.querySelectorAll(".fade-in-up, .slide-in-left, .card-animate");\n\nconst observer = new IntersectionObserver((entries, obs) => {\n    entries.forEach(entry => {\n        if (!entry.isIntersecting) return;\n        entry.target.classList.add("show");\n        obs.unobserve(entry.target);\n    });\n}, { threshold: 0.2 });\n\nfaders.forEach(el => observer.observe(el));\n\nconst sections = document.querySelectorAll("section");\nconst navLinks = document.querySelectorAll(".nav-link");\n\nwindow.addEventListener("scroll", () => {\n\n\u2026',
  },
  CVURL = "assets/cv/Eman-Fatima-CV.pdf",
  AV = "assets/img/avatar.jpg";

/* =====================================================
   SETTINGS: edit these numbers to update the GitHub stats
   ===================================================== */
const GH_STATS = { repos: 100, followers: 100, contributions: 88 };
const GH = "https://github.com/Eman-fatima-web/",
  LI = "https://www.linkedin.com/in/eman-fatima-web/";
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const ic = (n) =>
  `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["services", "Services"],
  ["design", "Graphic Design"],
  ["web", "Web"],
  ["devwork", "Dev Work"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["certificates", "Certificates"],
  ["github", "GitHub"],
  ["contact", "Contact"],
];
$("#links").innerHTML = NAV.map(
  (n) => `<li><a href="#${n[0]}" data-r="${n[0]}">${n[1]}</a></li>`,
).join("");
$("#fl").innerHTML = NAV.slice(1, 8)
  .map((n) => `<a href="#${n[0]}">${n[1]}</a>`)
  .join("");
const PR = [
  {
    id: "ecommerce",
    t: "E-Commerce Platform",
    c: "Web Development",
    d: "Full-stack solution with payment integration.",
    img: "project2",
    vid: "Video1",
    tags: ["Full-Stack", "Responsive", "Payments"],
    role: "Design and development",
  },
  {
    id: "online-store",
    t: "Online Store",
    c: "Web Development",
    d: "Responsive online store with a modern UI.",
    img: "project3",
    tags: ["Responsive", "UI Implementation"],
    role: "Design and development",
  },
  {
    id: "restaurant",
    t: "Restaurant Website",
    c: "Web Development",
    d: "Restaurant website with a booking system and menu management.",
    img: "project8",
    vid: "Video2",
    tags: ["Booking System", "Menu Management", "Responsive"],
    role: "Design and development",
  },
  {
    id: "food-delivery",
    t: "Food Delivery App",
    c: "Web Development",
    d: "Mobile-responsive food ordering platform.",
    img: "project6",
    tags: ["Mobile-First", "Ordering"],
    role: "Design and development",
  },
  {
    id: "modern-ui",
    t: "Modern UI Design",
    c: "UI / Design",
    d: "Creative and interactive interface design.",
    img: "project4",
    vid: "Video3",
    tags: ["UI/UX", "Figma", "Interface"],
    role: "UI design",
  },
  {
    id: "creative-portfolio",
    t: "Creative Portfolio",
    c: "UI / Design",
    d: "Portfolio concept showcasing design and development skills.",
    img: "project10",
    tags: ["Portfolio", "Visual Design"],
    role: "Design and development",
  },
];
const REPOS = [
  [
    "Digital-Khata",
    "TypeScript",
    "Digital bookkeeping for small shopkeepers.",
    GH + "Digital-Khata",
    "https://digital-khata-tau.vercel.app",
  ],
  [
    "Eman-fatima-portfolio",
    "CSS",
    "Earlier personal portfolio.",
    GH + "Eman-fatima-portfolio",
    "https://eman-fatima-portfolio.netlify.app",
  ],
  [
    "code-core-learning",
    "HTML",
    "Web development learning repository.",
    GH + "code-core-learning",
  ],
  [
    "NovaEdge-Solutions-",
    "HTML",
    "Business website project.",
    GH + "NovaEdge-Solutions-",
  ],
  [
    "AdminPro-Dashboard",
    "HTML",
    "Admin dashboard interface.",
    GH + "AdminPro-Dashboard",
  ],
  ["NeoVibe-Agency", "HTML", "Agency website project.", GH + "NeoVibe-Agency"],
  [
    "Eman-fatima-web",
    "Markdown",
    "My GitHub profile README.",
    GH + "Eman-fatima-web",
  ],
];
const JOBS = [
  [
    "GAO RFID Inc.",
    "Web Development Intern & Squad Leader",
    "July 2026 – Present",
    "Manhattan, New York",
    "Developing responsive websites on real-world projects while leading a team of interns: daily task management, meetings and on-time delivery.",
    ["Responsive UI", "Leadership", "Teamwork"],
  ],
  [
    "Devixo Solutions",
    "Web Development Intern",
    "July 2026 – Present",
    "Lahore",
    "Developed and customized a responsive website: front-end development, layouts, UI improvements and content integration.",
    ["HTML/CSS", "JavaScript", "Responsive"],
  ],
  [
    "Decodelabs",
    "Web Development Intern",
    "July 2026 – Present",
    "Pune & Gurugram (Code Decode Labs)",
    "Developed and customized a responsive website with front-end work, UI improvements and an optimized user experience.",
    ["Front-end", "UI", "Customization"],
  ],
  [
    "Qamsoft Technologies",
    "Full Stack Web Developer",
    "2025",
    "",
    "Built and maintained dynamic web applications, integrated UI with server-side functionality, and took part in debugging, optimization and deployment.",
    ["Full-Stack", "Debugging", "Deployment"],
  ],
];
const OTHER = [
  [
    "Noon Digital",
    "Business Development & Lead Generation Specialist",
    "July 2025 – Present",
    "Islamabad",
    "B2B prospect research, LinkedIn outreach, structured follow-ups and CRM lead tracking.",
  ],
  [
    "Route Global LLC",
    "Call Center Sales Representative",
    "May 2026 – Sept 2026",
    "New York, United States",
    "",
  ],
  [
    "Limo Rental Car Service",
    "Content Writer",
    "2024 – 2025",
    "",
    "Marketing content, market research and content strategy aligned with business goals.",
  ],
  [
    "Qutor",
    "Quran Tutor",
    "2023 – 2025",
    "",
    "Taught recitation with Tajweed and memorization using customized lesson plans.",
  ],
];
const SK = [
  [
    "Frontend",
    [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "WordPress",
    ],
  ],
  [
    "Backend & Database",
    ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "PHP", "DBMS"],
  ],
  [
    "Design",
    [
      "UI/UX Design",
      "Figma",
      "Photoshop",
      "Responsive Design",
      "Video Editing & Animation",
    ],
  ],
  ["Languages", ["C", "C++", "Java", "Python", "Kotlin", "TypeScript", "SQL"]],
  [
    "Tools",
    [
      "Git & GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Postman",
      "Android Studio",
    ],
  ],
  [
    "Professional",
    [
      "Team Leadership",
      "B2B Lead Generation",
      "LinkedIn Outreach",
      "Machine Learning",
      "AI Integration",
    ],
  ],
];

const cat = (t) =>
  /Intern|Devixo|DecodeLabs/.test(t)
    ? "Internship"
    : /Video|NextGen/.test(t)
      ? "Design & Media"
      : /Machine|AI|Azure|Supervised|Advanced/.test(t)
        ? "AI & ML"
        : "Web Development";
CERTS.forEach(
  (c) => (c.k = c.o.includes("NextGen") ? "Design & Media" : cat(c.t + c.o)),
);

const tg = (a) =>
  `<div class="pills">${a.map((x) => `<span>${x}</span>`).join("")}</div>`;
const pimg = (p) =>
  p.img
    ? `<div class="im"><img class="pi" loading="lazy" src="${IM[p.img]}" alt="${p.t} preview"></div>`
    : `<div class="pv">${p.t
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)}</div>`;
const jcard = (j, i) =>
  `<div class="ti rv"><div class="card"><small>${j[2]}</small><h3>${j[1]}</h3><em>${j[0]}${j[3] ? " · " + j[3] : ""}</em>${j[4] ? `<p>${j[4]}</p>` : ""}${j[5] ? tg(j[5]) : ""}</div></div>`;
const stats = `<div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))"><div class="card stat rv"><b data-n="15" data-s="+">0</b><span>Internships</span></div><div class="card stat rv" style="--d:.1s"><b data-n="${CERTS.length}">0</b><span>Certificates</span></div><div class="card stat rv" style="--d:.2s"><b data-n="${GH_STATS.repos}" data-s="+">0</b><span>GitHub repositories</span></div><div class="card stat rv" style="--d:.3s"><b>BSCS</b><span>5th Semester · 2026</span></div><div class="card stat rv" style="--d:.4s"><b data-n="${SK.reduce((a, s) => a + s[1].length, 0)}" data-s="+">0</b><span>Technical skills</span></div></div>`;

let SN = 0;
const hd = (t, h, s) =>
  `<header class="pgh sh"><div class="wrap"><span class="tag">${String(++SN).padStart(2, "0")} — ${t}</span><h2 class="sec-h rv">${h}</h2><p class="sub">${s || ""}</p></div></header>`;
const pcard = (p, i) =>
  `<article class="card pr rv" style="--d:${(i % 3) * 0.1}s" tabindex="0" data-go="${p.id}">${pimg(p)}<span class="badge" style="align-self:flex-start">${p.c}</span><h3>${p.t}</h3><p style="color:var(--mut);font-size:15px">${p.d}</p>${tg(p.tags)}<div class="acts"><button class="btn p" data-go="${p.id}">View Project</button>${p.gh ? `<a class="btn o" href="${p.gh}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}</div></article>`;
const soc = `<div class="soc" aria-label="Social links"><a href="${GH.slice(0, -1)}" target="_blank" rel="noopener" aria-label="GitHub">${ic("github")}</a><a href="${LI}" target="_blank" rel="noopener" aria-label="LinkedIn">${ic("linkedin")}</a><a href="https://x.com/EmanFatiamweb" target="_blank" rel="noopener" aria-label="X">${ic("xs")}</a><a href="https://www.facebook.com/share/1HxTVPQXF5/" target="_blank" rel="noopener" aria-label="Facebook">${ic("fb")}</a><a href="mailto:emanfatima13308@gmail.com" aria-label="Email">${ic("mail")}</a></div>`;
/* =====================================================
   SECTION TEMPLATES (one function per section)
   ===================================================== */
const PG = {
  home: () => `<section id="home" style="min-height:100vh;display:flex;align-items:center;padding-top:110px;background:radial-gradient(1000px 600px at 85% 20%,var(--gl),transparent 60%),linear-gradient(180deg,var(--bg),var(--bg2));overflow:hidden;position:relative"><canvas id="cv" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none"></canvas><div class="blob b1"></div><div class="blob b2"></div>
<div class="wrap hero"><div><div class="hi"><span class="dot"></span>15+ internships · Open to freelance & remote work</div>
<h1><span class="ln"><span>Eman</span></span><span class="ln"><span><em>Fatima</em></span></span></h1><div class="role"><span id="typed"></span><span class="caret"></span></div>
<p class="lead">Full-Stack Web Developer and Graphic Designer from Lahore, studying BS Computer Science at Virtual University of Pakistan. I turn ideas into beautiful, responsive digital experiences.</p>
<div class="cta"><a class="btn p" href="#/projects">View My Work →</a><a class="btn o" href="#/contact">Let's Connect</a><button class="btn o cv">⬇ Download CV</button></div>${soc}</div>
<div class="pic" id="pic"><div class="aura"></div><div class="frame" id="frame"><img src="${AV}" alt="Illustrated portrait of Eman Fatima in a green blazer" width="480" height="480"></div><span class="chip c1">⚛ React.js</span><span class="chip c2">🎨 Figma · Photoshop</span><span class="chip c3">🎓 BSCS · VU</span></div></div></section>
<section><div class="wrap"><span class="tag">By the numbers</span><h2 class="sec-h">Experience that <b>shows</b></h2><p class="sub">Verified from my profile, certificates and GitHub.</p>${stats}</div></section>
<section style="background:var(--bg2)"><div class="wrap"><span class="tag">Featured</span><h2 class="sec-h">Selected <b>projects</b></h2><div class="grid3 mt">${PR.slice(0, 3).map(pcard).join("")}</div><p class="mt"><a class="btn o" href="#/projects">All projects →</a></p></div></section>
<section><div class="wrap"><div class="card rv" style="text-align:center;padding:50px 26px"><h2 class="sec-h">15+ internships. <b>Real</b> teams. Real delivery.</h2><p class="sub" style="margin:0 auto 24px">Web development internships at GAO RFID, Devixo Solutions and Decodelabs, plus full-stack work at Qamsoft Technologies.</p><a class="btn p" href="#/experience">See internships & experience</a></div></div></section>`,
  about: () =>
    hd(
      "About",
      "Hi, I'm <b>Eman</b>",
      "Full-Stack Web Developer | React.js & Modern Websites | Responsive UI/UX",
    ) +
    `<section class="pad"><div class="wrap ab"><div class="rv l"><div class="about"><p>I focus on building modern, responsive, user-friendly websites and web applications designed around real business needs — from landing pages and business sites to interactive web apps and portfolios.</p><p>I'm studying BS Computer Science at Virtual University of Pakistan (5th semester), exploring the MERN stack, AI integration and machine learning, and I design as well as I code. My goal is to become a top freelance developer.</p></div><div class="cta"><button class="btn p cv">⬇ Download CV</button><a class="btn o" href="${LI}" target="_blank" rel="noopener">LinkedIn ↗</a></div>${soc}</div><div class="rv r pic"><div class="aura"></div><div class="frame"><img src="${AV}" alt="Eman Fatima portrait" loading="lazy"></div></div></div></section>
<section style="background:var(--bg2)" class="pad"><div class="wrap"><h2 class="sec-h">I can <b>help with</b></h2><div class="pills mt">${["Business & Corporate Websites", "Landing Pages", "Portfolio Websites", "React.js Websites", "Responsive Development", "WordPress Websites", "UI/UX Web Design", "Redesigns & Improvements"].map((x) => `<span>${x}</span>`).join("")}</div><h2 class="sec-h mt" style="margin-top:50px">Achievements</h2><div class="grid3"><div class="card rv"><h3>🏆 Alibaba Cloud AI Hackathon</h3><p style="color:var(--mut)">Participated in the Alibaba Cloud AI Hackathon Pakistan 2026.</p></div><div class="card rv"><h3>🌱 Squad Leader</h3><p style="color:var(--mut)">Leading a team of interns at GAO RFID Inc.</p></div><div class="card rv"><h3>🎓 ${CERTS.length} Certificates</h3><p style="color:var(--mut)">Web development, AI, machine learning and design.</p></div></div></div></section>
<section class="pad"><div class="wrap">${stats}</div></section>`,
  experience: () =>
    hd(
      "Internships & Experience",
      "15+ <b>internships</b>",
      "Substantial hands-on experience across web development, software and business development.",
    ) +
    `<section class="pad"><div class="wrap"><div class="card rv" style="text-align:center;margin-bottom:40px"><b style="font:700 56px Georgia,serif;color:var(--g)">15+</b><p style="color:var(--mut)">internships completed — highlights below, with certificates on the <a href="#/certificates" style="color:var(--g);font-weight:700">Certificates</a> page.</p></div><h2 class="sec-h">Development <b>internships & roles</b></h2><div class="tl mt">${JOBS.map(jcard).join("")}</div><h2 class="sec-h" style="margin-top:50px">Other <b>professional experience</b></h2><div class="tl mt">${OTHER.map((o) => jcard([o[0], o[1], o[2], o[3], o[4]])).join("")}</div><p class="mt"><a class="btn p" href="${LI}" target="_blank" rel="noopener">Full profile on LinkedIn ↗</a></p></div></section>`,
  education: () =>
    hd("Education", "Academic <b>journey</b>", "") +
    `<section class="pad"><div class="wrap"><div class="tl"><div class="ti rv"><div class="card"><div class="vu"><div class="logo2" aria-label="Virtual University of Pakistan">VU</div><div><span class="badge">Current</span><h3 style="margin-top:8px">BS Computer Science (BSCS)</h3><em>Virtual University of Pakistan</em><p style="font-weight:700;color:var(--g)">5th Semester · 2026 — Present</p></div></div></div></div>
<div class="ti rv"><div class="card"><small>Earlier</small><h3>Computer Science</h3><em>University of Central Punjab (UCP)</em></div></div>
<div class="ti rv"><div class="card"><small>Aug 2023 — Sep 2025</small><h3>ICS — Statistics, Computer Science</h3><em>Punjab Group of Colleges</em></div></div></div></div></section>`,
  skills: () =>
    hd(
      "Skills",
      "My <b>toolbox</b>",
      "Technical and professional skills from my profile, GitHub and projects.",
    ) +
    `<section class="pad"><div class="wrap grid3">${SK.map((s, i) => `<div class="card rv" style="--d:${i * 0.08}s"><h3>${s[0]}</h3>${tg(s[1])}</div>`).join("")}</div></section>`,
  projects: () =>
    hd(
      "Projects",
      "Selected <b>work</b>",
      "Web development, UI / design and software engineering projects.",
    ) +
    `<section class="pad"><div class="wrap"><div class="f" id="pf">${["All", "Web Development", "UI / Design"].map((c, i) => `<button class="${i ? "" : "on"}">${c}</button>`).join("")}</div><div class="grid3" id="pgrid">${PR.map(pcard).join("")}</div></div></section>`,
  project: (id) => {
    const p = PR.find((x) => x.id === id) || PR[0],
      rel = PR.filter((x) => x.id !== p.id && x.c === p.c).slice(0, 3);
    return (
      hd(p.c, p.t, p.d) +
      `<section class="pad"><div class="wrap two"><div>${p.img ? `<img class="big rv" src="${IM[p.img]}" alt="${p.t} screenshot" data-lb="${p.img}" style="cursor:zoom-in">` : `<div class="card rv"><div class="pv" style="height:240px;font-size:70px">${p.t[0]}K</div></div>`}${p.vid ? `<video class="vid mt" src="${VID[p.vid]}" controls muted loop playsinline preload="metadata" aria-label="${p.t} demo"></video>` : ""}</div><div class="card rv"><h3>Overview</h3><p style="color:var(--mut)">${p.d}</p><h3 class="mt">My role</h3><p style="color:var(--mut)">${p.role}</p><h3 class="mt">Highlights</h3>${tg(p.tags)}<div class="acts mt">${p.live ? `<a class="btn p" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ""}${p.gh ? `<a class="btn o" href="${p.gh}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}<a class="btn o" href="#/projects">← All projects</a></div></div></div></section>${rel.length ? `<section style="background:var(--bg2)" class="pad"><div class="wrap"><h2 class="sec-h">Related <b>projects</b></h2><div class="grid3 mt">${rel.map(pcard).join("")}</div></div></section>` : ""}`
    );
  },
  devwork: () =>
    hd(
      "Software Engineering & Code",
      "Development <b>work</b>",
      "Real code from my portfolio project, plus the engineering practice behind it.",
    ) +
    `<section class="pad"><div class="wrap"><div class="code rv"><div class="tb"><i></i><i></i><i></i>${Object.keys(
      CODE,
    )
      .map(
        (k, i) =>
          `<button class="${i ? "" : "on"}" data-f="${k}">${k}</button>`,
      )
      .join(
        "",
      )}</div><pre id="cpre"></pre></div><p class="mt" style="color:var(--mut)">Excerpts of my portfolio source. Full code on <a href="${GH}Eman-fatima-portfolio" target="_blank" rel="noopener" style="color:var(--g);font-weight:700">GitHub ↗</a></p></div></section>
<section style="background:var(--bg2)" class="pad"><div class="wrap"><h2 class="sec-h">Software engineering <b>experience</b></h2><div class="xc mt">${[
      [
        "Full-stack development",
        "Dynamic web applications at Qamsoft Technologies, integrating UI with server-side logic.",
      ],
      [
        "Debugging & deployment",
        "Debugging, optimization and deployment of web applications; projects shipped on Vercel and Netlify.",
      ],
      [
        "Version control",
        `Git & GitHub: ${GH_STATS.repos}+ repositories and ${GH_STATS.contributions} contributions in the last year.`,
      ],
      [
        "AI-powered products",
        "Offline-first AI tools built during the Alibaba Cloud AI Hackathon Pakistan 2026.",
      ],
      [
        "Databases & backend",
        "DBMS, MongoDB, MySQL, Node.js, Express and REST APIs; API testing with Postman.",
      ],
      [
        "Team delivery",
        "Squad Leader coordinating interns, daily tasks and meetings at GAO RFID Inc.",
      ],
    ]
      .map(
        (x, i) =>
          `<div class="card rv" style="--d:${i * 0.08}s"><h3>${x[0]}</h3><p style="color:var(--mut)">${x[1]}</p></div>`,
      )
      .join("")}</div></div></section>`,
  certificates: () =>
    hd(
      "Certificates",
      "Verified <b>learning</b>",
      "Tap a certificate to view it full size.",
    ) +
    `<section class="pad"><div class="wrap"><div class="f" id="cf">${["All", "Web Development", "AI & ML", "Internship", "Design & Media"].map((c, i) => `<button class="${i ? "" : "on"}">${c}</button>`).join("")}</div><div class="cg" id="cg"></div></div></section>`,
  github: () =>
    hd("GitHub", "Real <b>repositories</b>", "github.com/Eman-fatima-web") +
    `<section class="pad"><div class="wrap"><div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:34px"><div class="card stat"><b>${GH_STATS.repos}+</b><span>Repositories</span></div><div class="card stat"><b>${GH_STATS.contributions}</b><span>Contributions in the last year</span></div><div class="card stat"><b>${GH_STATS.followers}K</b><span>Followers</span></div></div><div class="grid3">${REPOS.map((r, i) => `<div class="card rv" style="--d:${(i % 3) * 0.1}s"><span class="badge">${r[1]}</span><h3 style="margin-top:10px">${r[0]}</h3><p style="color:var(--mut);font-size:15px;margin-bottom:14px">${r[2]}</p><div class="acts"><a class="btn o" href="${r[3]}" target="_blank" rel="noopener">GitHub ↗</a>${r[4] ? `<a class="btn p" href="${r[4]}" target="_blank" rel="noopener">Live Demo</a>` : ""}</div></div>`).join("")}</div><p class="mt"><a class="btn p" href="${GH.slice(0, -1)}?tab=repositories" target="_blank" rel="noopener">All repositories ↗</a></p></div></section>`,
  contact: () =>
    hd(
      "Contact",
      "Let's build something <b>together</b>",
      "Have a website idea or want to improve an existing one? Send a message.",
    ) +
    `<section class="pad"><div class="wrap cn"><div class="ci rv l"><a href="mailto:emanfatima13308@gmail.com"><b>✉</b>emanfatima13308@gmail.com</a><a href="tel:+923270218838"><b>☎</b>+92 327 0218838</a><a href="#/contact"><b>⌖</b>Lahore, Punjab, Pakistan</a><a href="${LI}" target="_blank" rel="noopener"><b>in</b>linkedin.com/in/eman-fatima-web</a><a href="${GH}" target="_blank" rel="noopener"><b>GH</b>github.com/Eman-fatima-web</a><a href="https://x.com/EmanFatiamweb" target="_blank" rel="noopener"><b>X</b>@EmanFatiamweb</a><a href="https://www.facebook.com/share/1HxTVPQXF5/" target="_blank" rel="noopener"><b>f</b>Facebook</a><p class="mt"><button class="btn p cv">⬇ Download CV</button></p></div>
<form class="card rv r" id="form" method="POST" novalidate><p class="hp"><label>Leave empty <input name="_honey" tabindex="-1" autocomplete="off"></label></p><div class="fld"><label for="n">Name</label><input id="n" name="name" autocomplete="name"><span class="err" id="en"></span></div><div class="fld"><label for="e">Email</label><input id="e" name="email" type="email" autocomplete="email"><span class="err" id="ee"></span></div><div class="fld"><label for="s">Subject</label><input id="s" name="subject"><span class="err" id="es"></span></div><div class="fld"><label for="m">Message</label><textarea id="m" name="message" rows="5"></textarea><span class="err" id="em"></span></div><button class="btn p" id="sb" type="submit"><span class="sp"></span><span id="sl">Send message</span></button><div class="msg" id="msg" role="status" aria-live="polite"></div></form></div></section>`,
};

const E = (h) =>
  h
    .replace(/href="#\/(\w+)/g, 'href="#$1')
    .replace('href="#projects"', 'href="#web"')
    .replace(/⬇ /g, ic("download") + " ")
    .replace(/⚛ /g, ic("code") + " ")
    .replace(/🎨 /g, ic("palette") + " ")
    .replace(/🎓 /g, ic("grad") + " ")
    .replace(/🏆 /g, ic("award") + " ")
    .replace(/🌱 /g, ic("users") + " ")
    .replace("<b>✉</b>", "<b>" + ic("mail") + "</b>")
    .replace("<b>☎</b>", "<b>" + ic("call") + "</b>")
    .replace("<b>⌖</b>", "<b>" + ic("pin") + "</b>")
    .replace("<b>in</b>", "<b>" + ic("linkedin") + "</b>")
    .replace("<b>GH</b>", "<b>" + ic("github") + "</b>")
    .replace("<b>X</b>", "<b>" + ic("xs") + "</b>")
    .replace("<b>f</b>", "<b>" + ic("fb") + "</b>");
/* ---- new sections ---- */
PG.skills = () =>
  hd(
    "Skills",
    "Two disciplines, <b>one toolkit</b>.",
    "The tools I use every day for design and development.",
  ) +
  `<section class="pad"><div class="wrap grid3">${SK.map((s, i) => `<div class="card rv" style="--d:${i * 0.08}s"><h3>${s[0]}</h3>${tg(s[1])}</div>`).join("")}</div></section>`;
const MARQUEE = [
  "UI / UX",
  "Responsive Websites",
  "Full-Stack Apps",
  "Logo Design",
  "Brand Identity",
  "Social Media Design",
  "Posters & Print",
  "YouTube Thumbnails",
  "WordPress",
];
const SV = [
  [
    "Logo &amp; Brand Identity",
    "Logos and brand guides that make a business look consistent and memorable.",
    "pen",
  ],
  [
    "Social Media Design",
    "Scroll-stopping posts and campaign visuals built around your message.",
    "image",
  ],
  [
    "YouTube Thumbnails",
    "High-contrast, click-worthy thumbnails with strong typography and clear focus.",
    "zap",
  ],
  [
    "Posters &amp; Print",
    "Posters, menus and flyers designed for impact on screen and on paper.",
    "layers",
  ],
  [
    "Website Development",
    "Responsive front-end and full-stack websites, from landing pages to web apps.",
    "code",
  ],
  [
    "UI/UX &amp; Redesign",
    "Clean, intuitive interfaces and refreshed layouts for existing websites.",
    "layout",
  ],
];
PG.services = () =>
  hd(
    "Services",
    "What I can <b>do for you</b>.",
    "Design and development services, delivered remotely.",
  ) +
  `<section class="pad"><div class="wrap grid3">${SV.map((s, i) => `<div class="card rv" style="--d:${(i % 3) * 0.1}s"><div class="num">${ic(s[2])}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></section>`;
const dcard = (d, cls) =>
  `<button class="dgi ${cls || ""}" data-d="${d.id}" aria-label="View ${d.t}"><img loading="lazy" src="${d.sm}" alt="${d.c}: ${d.t}"><span class="ov"><small>${d.c}</small><b>${d.t}</b></span></button>`;
PG.featured = () =>
  hd(
    "Featured Work",
    "Selected work across <b>design &amp; development</b>.",
    "A few highlights. Tap to view full size.",
  ) +
  `<section class="pad"><div class="wrap"><div class="feat">${FEATURED.map(
    (id, i) =>
      dcard(
        DESIGNS.find((x) => x.id === id),
        "rv",
      ),
  ).join("")}${["ecommerce", "restaurant"]
    .map((id) => {
      const p = PR.find((x) => x.id === id);
      return `<button class="dgi rv" data-go="${p.id}" aria-label="View ${p.t}"><img loading="lazy" src="${IM[p.img]}" alt="${p.t} preview"><span class="ov"><small>${p.c}</small><b>${p.t}</b></span></button>`;
    })
    .join("")}</div></div></section>`;
PG.design = () =>
  hd(
    "Graphic Design",
    "The design <b>gallery</b>.",
    "Social media posts, ads, print and creative typography. Tap any piece to view it full size, then swipe or use the arrows.",
  ) +
  `<section class="pad"><div class="wrap"><div class="f" id="df" role="group" aria-label="Filter designs"></div><div class="dg" id="dg"></div></div></section>`;
PG.web = () =>
  hd(
    "Web Design &amp; Development",
    "Websites &amp; apps, <b>built to perform</b>.",
    "Responsive builds covering e-commerce, restaurants, landing pages and interface design.",
  ) +
  `<section class="pad"><div class="wrap"><div class="f" id="pf">${["All", "Web Development", "UI / Design"].map((c, i) => `<button class="${i ? "" : "on"}">${c}</button>`).join("")}</div><div class="grid3" id="pgrid">${PR.map(pcard).join("")}</div></div></section>`;
PG.process = () =>
  hd(
    "Process",
    "How a project <b>runs</b>.",
    "A simple, transparent flow from brief to delivery.",
  ) +
  `<section class="pad"><div class="wrap steps">${[
    [
      "Discover",
      "We talk about your goals, audience and references so the work starts from the right place.",
    ],
    [
      "Design",
      "Concepts, layouts and visuals take shape, with your feedback guiding each round.",
    ],
    [
      "Build",
      "Designs become polished graphics or a clean, responsive, working website.",
    ],
    [
      "Deliver",
      "Final files or a live site, with refinements until everything feels right.",
    ],
  ]
    .map(
      (s, i) =>
        `<div class="card rv" style="--d:${i * 0.1}s"><h3>${s[0]}</h3><p>${s[1]}</p></div>`,
    )
    .join("")}</div></section>`;
PG.faq = () =>
  hd("FAQ", "Quick <b>answers</b>.", "") +
  `<section class="pad"><div class="wrap"><div class="faq rv">${[
    [
      "Do you work on-site or remotely?",
      "I work remotely and collaborate with clients by email, WhatsApp and video calls. I am open to freelance and remote work.",
    ],
    [
      "What kind of work do you take on?",
      "Graphic design (branding, logos, social media, thumbnails, posters) and web development (responsive websites, front-end and full-stack builds, redesigns).",
    ],
    [
      "How do I start a project?",
      "Send a short brief through the contact form or by email. Include what you need, any references, and your timeline.",
    ],
    [
      "Can you handle both the branding and the website?",
      "Yes, that is the advantage of working with me. Your visuals and your website are designed to match from the start.",
    ],
  ]
    .map(
      (q) =>
        `<details><summary>${q[0]}${ic("down")}</summary><p>${q[1]}</p></details>`,
    )
    .join("")}</div></div></section>`;
PG.marquee = () =>
  `<div class="marquee" aria-label="Services and specialties"><div class="mq-track">${[0, 1].map(() => MARQUEE.map((t) => `<span class="mq-item">${t}</span>`).join("")).join("")}</div></div>`;
const ORDER = [
  "about",
  "marquee",
  "skills",
  "services",
  "featured",
  "design",
  "web",
  "devwork",
  "experience",
  "education",
  "certificates",
  "github",
  "process",
  "faq",
  "contact",
];
let anim = 0;
/* =====================================================
   PAGE RENDER (order of sections is set in ORDER)
   ===================================================== */
function render() {
  SN = 0;
  const hp = PG.home().split("\n<section");
  let h = hp[0] + "<section" + hp[1] + "</section>";
  let alt = 0;
  ORDER.forEach((k) => {
    if (k === "marquee") {
      h += `<div id="${k}">${PG[k]()}</div>`;
      return;
    }
    h += `<div id="${k}" class="blk ${alt++ % 2 ? "" : "alt"}">${PG[k]()}</div>`;
  });
  $("#app").innerHTML = E(h);
  $$(".rv").forEach((e) => io.observe(e));
  ["home", "projects", "certificates", "devwork"].forEach(init);
  initDesign();
  form();
  addEventListener("load", spyInit);
}
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
        const n = e.target.querySelector("[data-n]");
        if (n) {
          const to = +n.dataset.n,
            s = performance.now(),
            sf = n.dataset.s || "";
          (function f(x) {
            const k = Math.min((x - s) / 1400, 1);
            n.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + sf;
            k < 1 && requestAnimationFrame(f);
          })(s);
        }
      }
    }),
  { threshold: 0.12 },
);
function init(r) {
  const fl = (sel, fn) =>
    $$(sel + " button").forEach(
      (b) =>
        (b.onclick = () => {
          $$(sel + " button").forEach((x) => x.classList.remove("on"));
          b.classList.add("on");
          fn(b.textContent);
        }),
    );
  if (r === "home") {
    const R = [
      "Full-Stack Web Developer",
      "React.js Developer",
      "Graphic Designer",
      "BSCS Student",
    ];
    let ri = 0,
      ci = 0,
      del = 0;
    const ty = $("#typed"),
      my = ++anim;
    (function t() {
      if (my !== anim || !ty.isConnected) return;
      const w = R[ri];
      ty.textContent = w.slice(0, ci);
      if (!del && ci++ === w.length) {
        del = 1;
        return setTimeout(t, 1600);
      }
      if (del && ci-- === 0) {
        del = 0;
        ri = (ri + 1) % R.length;
      }
      setTimeout(t, del ? 35 : 75);
    })();
    const pic = $("#pic"),
      fr = $("#frame");
    pic.onmousemove = (e) => {
      const b = pic.getBoundingClientRect(),
        x = (e.clientX - b.left) / b.width - 0.5,
        y = (e.clientY - b.top) / b.height - 0.5;
      fr.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    };
    pic.onmouseleave = () => (fr.style.transform = "");
    const c = $("#cv"),
      x = c.getContext("2d");
    if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
      let w = (c.width = c.offsetWidth),
        h = (c.height = c.offsetHeight);
      const ps = Array.from({ length: Math.min(46, w / 28) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 1,
        v: Math.random() * 0.4 + 0.15,
        a: Math.random() * 6,
      }));
      (function f() {
        if (!c.isConnected) return;
        x.clearRect(0, 0, w, h);
        ps.forEach((p) => {
          p.y -= p.v;
          p.a += 0.02;
          p.x += Math.sin(p.a) * 0.4;
          if (p.y < -5) {
            p.y = h + 5;
            p.x = Math.random() * w;
          }
          x.beginPath();
          x.arc(p.x, p.y, p.r, 0, 7);
          x.fillStyle = "rgba(34,197,94," + (0.25 + Math.sin(p.a) * 0.15) + ")";
          x.fill();
        });
        requestAnimationFrame(f);
      })();
    }
  }
  if (r === "projects")
    fl("#pf", (c) => {
      $("#pgrid").innerHTML = PR.filter((p) => c === "All" || p.c === c)
        .map(pcard)
        .join("");
      $$("#pgrid .rv").forEach((e) => io.observe(e));
    });
  if (r === "certificates") {
    const d = (c) => {
      $("#cg").innerHTML = CERTS.filter((x) => c === "All" || x.k === c)
        .map(
          (c, i) =>
            `<button class="card ct rv" style="--d:${(i % 4) * 0.08}s" data-c="${CERTS.indexOf(c)}" aria-label="View ${c.t}"><div class="im"><img loading="lazy" src="${c.s}" alt="${c.t} certificate"></div><span class="badge" style="margin:10px 4px 0">${c.k}</span><h3>${c.t}</h3><p>${c.o}${c.d ? " · " + c.d : ""}</p></button>`,
        )
        .join("");
      $$("#cg .rv").forEach((e) => io.observe(e));
    };
    d("All");
    fl("#cf", d);
  }
  if (r === "devwork") {
    const sh = (k) => {
      $("#cpre").textContent = CODE[k];
    };
    sh(Object.keys(CODE)[0]);
    $$(".code .tb button").forEach(
      (b) =>
        (b.onclick = () => {
          $$(".code .tb button").forEach((x) => x.classList.remove("on"));
          b.classList.add("on");
          sh(b.dataset.f);
        }),
    );
  }
  if (r === "contact") form();
}

function initDesign() {
  let cur = "All",
    list = DESIGNS;
  const f = $("#df");
  f.innerHTML = ["All", ...DCATS]
    .map(
      (c, i) =>
        `<button class="${i ? "" : "on"}">${c}<em>${c === "All" ? DESIGNS.length : DESIGNS.filter((d) => d.c === c).length}</em></button>`,
    )
    .join("");
  const draw = () => {
    list = DESIGNS.filter((d) => cur === "All" || d.c === cur);
    $("#dg").innerHTML = list
      .map((d, i) =>
        dcard(d).replace(
          'class="dgi "',
          `class="dgi" style="animation-delay:${Math.min(i, 12) * 0.04}s"`,
        ),
      )
      .join("");
    window.DLIST = list;
  };
  f.onclick = (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#df button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    cur = b.firstChild.textContent;
    draw();
  };
  draw();
}
/* =====================================================
   CONTACT FORM: sends the message to Gmail via FormSubmit
   ===================================================== */
function form() {
  const F = $("#form"),
    MAIL = "emanfatima13308@gmail.com",
    ENDPOINT = "https://formsubmit.co/ajax/" + MAIL;
  const M = {
    n: "Please enter your name.",
    e: "Please enter a valid email address.",
    s: "Please add a subject.",
    m: "Please write a message (10+ characters).",
  };
  F.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const box = $("#msg");
    box.className = "msg";
    let ok = 1;
    for (const k of ["n", "e", "s", "m"]) {
      const v = $("#" + k).value.trim();
      const bad =
        !v ||
        (k === "e" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) ||
        (k === "m" && v.length < 10);
      $("#e" + k).textContent = bad ? M[k] : "";
      $("#" + k).setAttribute("aria-invalid", bad);
      if (bad) ok = 0;
    }
    if (!ok || F.elements["_honey"].value) return;
    F.classList.add("ld");
    $("#sl").textContent = "Sending…";
    $("#sb").disabled = true;
    const d = Object.fromEntries(new FormData(F));
    const payload = {
      name: d.name,
      email: d.email,
      message: d.message,
      _subject: "Portfolio: " + d.subject,
      _template: "table",
      _captcha: "false",
      _honey: d._honey || "",
    };
    try {
      const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) === "false")
        throw new Error(j.message || r.status);
      box.className = "msg ok";
      box.textContent =
        "Thank you! Your message was sent. I will reply by email soon.";
      F.reset();
    } catch (_) {
      box.className = "msg bad";
      box.innerHTML =
        'The message could not be sent. Please email <a href="mailto:' +
        MAIL +
        '" style="text-decoration:underline">' +
        MAIL +
        "</a> directly.";
    }
    F.classList.remove("ld");
    $("#sl").textContent = "Send message";
    $("#sb").disabled = false;
  });
}
/* lightbox + project modal */
const lb = $("#lb");
let LBI = [],
  LBK = 0;
function showLb(k) {
  LBK = k;
  const x = LBI[k];
  $("#li").src = x.img;
  $("#li").alt = x.t || "";
  $("#lt").textContent = x.t || "";
  lb.classList.add("on");
  $("#lx").focus();
  $$(".lbn").forEach(
    (b) => (b.style.display = LBI.length > 1 ? "grid" : "none"),
  );
}
const openLb = (a, k) => {
    LBI = a;
    showLb(k);
  },
  stepLb = (n) => showLb((LBK + n + LBI.length) % LBI.length);
function openProject(id) {
  const p = PR.find((x) => x.id === id);
  if (!p) return;
  $("#pmb").innerHTML =
    `<span class="badge">${p.c}</span><h2 style="margin-top:10px">${p.t}</h2><p class="sub" style="margin-bottom:22px">${p.d}</p><div class="two"><div>${
      p.img
        ? `<img class="big" src="${IM[p.img]}" alt="${p.t} screenshot" data-lb="${p.img}" style="cursor:zoom-in">`
        : `<div class="card"><div class="pv" style="height:240px;font-size:70px">${p.t
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}</div></div>`
    }${p.vid ? `<video class="vid mt" src="${VID[p.vid]}" controls muted loop playsinline preload="metadata" aria-label="${p.t} demo"></video>` : ""}</div><div class="card"><h3>My role</h3><p>${p.role}</p><h3 class="mt">Highlights</h3>${tg(p.tags)}<div class="acts mt">${p.live ? `<a class="btn p" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ""}${p.gh ? `<a class="btn o" href="${p.gh}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}</div></div></div>`;
  $("#pm").classList.add("on");
  $("#pm").scrollTop = 0;
  document.body.style.overflow = "hidden";
  $("#pmx").focus();
}
const closePm = () => {
  $("#pm").classList.remove("on");
  document.body.style.overflow = "";
};
document.addEventListener("click", (e) => {
  const cvb = e.target.closest(".cv");
  if (cvb) {
    const a = document.createElement("a");
    a.href = CVURL;
    a.download = "Eman-Fatima-CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return;
  }
  const d = e.target.closest("[data-d]");
  if (d) {
    const arr = d.closest("#dg") ? window.DLIST : DESIGNS;
    openLb(
      arr.map((x) => ({ img: x.img, t: x.c + " — " + x.t })),
      arr.findIndex((x) => x.id === d.dataset.d),
    );
    return;
  }
  const c = e.target.closest(".ct");
  if (c) {
    openLb(
      CERTS.map((x) => ({ img: x.s, t: x.t + " — " + x.o })),
      +c.dataset.c,
    );
    return;
  }
  const l = e.target.closest("[data-lb]");
  if (l) {
    openLb([{ img: IM[l.dataset.lb], t: "" }], 0);
    return;
  }
  if (e.target.closest("#lp")) {
    stepLb(-1);
    return;
  }
  if (e.target.closest("#ln")) {
    stepLb(1);
    return;
  }
  if (e.target === lb || e.target.closest("#lx")) {
    lb.classList.remove("on");
    return;
  }
  const g = e.target.closest("[data-go]");
  if (g && !e.target.closest("a")) {
    openProject(g.dataset.go);
    return;
  }
  if (e.target.id === "pm" || e.target.closest("#pmx")) closePm();
});
addEventListener("keydown", (e) => {
  if (lb.classList.contains("on")) {
    if (e.key === "Escape") lb.classList.remove("on");
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
    return;
  }
  if (e.key === "Escape") closePm();
  if (
    e.key === "Enter" &&
    e.target.dataset &&
    e.target.dataset.go &&
    e.target.tagName === "ARTICLE"
  )
    openProject(e.target.dataset.go);
});
let tx = 0;
lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), {
  passive: true,
});
lb.addEventListener("touchend", (e) => {
  const d = e.changedTouches[0].clientX - tx;
  if (Math.abs(d) > 50 && LBI.length > 1) stepLb(d < 0 ? 1 : -1);
});
/* nav */
/* =====================================================
   NAVBAR / MOBILE SIDEBAR
   ===================================================== */
const nav = $("#nav"),
  ham = $("#ham"),
  links = $("#links"),
  navBg = $("#navbg");
function setMenu(open) {
  links.classList.toggle("on", open);
  navBg.classList.toggle("on", open);
  ham.classList.toggle("x", open);
  ham.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
}
ham.onclick = () => setMenu(!links.classList.contains("on"));
navBg.onclick = () => setMenu(false);
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
addEventListener("resize", () => {
  if (innerWidth > 1320) setMenu(false);
});
addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("sc", scrollY > 30);
    const h = document.documentElement.scrollHeight - innerHeight;
    $("#prog").style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    $("#top").classList.toggle("on", scrollY > 700);
  },
  { passive: true },
);
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
function spyInit() {
  const sp = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          $$(".links a").forEach((a) =>
            a.classList.toggle("act", a.dataset.r === e.target.id),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  NAV.forEach((n) => {
    const el = document.getElementById(n[0]);
    el && sp.observe(el);
  });
}
render();

/* =====================================================
   LIGHT / DARK THEME TOGGLE (saved in localStorage)
   ===================================================== */
(function themeToggle() {
  const root = document.documentElement,
    btn = $("#theme"),
    mq = window.matchMedia("(prefers-color-scheme: dark)");
  const saved = () => {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  };
  function apply(t) {
    root.setAttribute("data-theme", t);
    const next = t === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", "Switch to " + next + " mode");
    btn.setAttribute("title", "Switch to " + next + " mode");
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = t === "dark" ? "#07140d" : "#fbfefb";
  }
  apply(root.getAttribute("data-theme") || "light");
  btn.addEventListener("click", () => {
    const t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(t);
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
  });
  mq.addEventListener &&
    mq.addEventListener("change", (e) => {
      if (!saved()) apply(e.matches ? "dark" : "light");
    });
})();
