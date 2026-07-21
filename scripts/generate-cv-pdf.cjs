const fs = require('fs');
const path = require('path');

function escapePdfString(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(text, maxLength) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxLength) {
      current = (current + ' ' + word).trim();
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function buildTextStream(lines, options = {}) {
  const { fontSize = 12, x = 50, yStart = 820, lineHeight = 18, titleSize = 18, titleSpacing = 24 } = options;
  let text = 'BT\n/F1 ' + fontSize + ' Tf\n';
  let y = yStart;

  for (const line of lines) {
    if (line.type === 'title') {
      text += '/F1 ' + titleSize + ' Tf\n';
      text += `${x} ${y} Td\n(${escapePdfString(line.text)}) Tj\n`;
      y -= titleSpacing;
      text += '/F1 ' + fontSize + ' Tf\n';
    } else if (line.type === 'section') {
      text += '/F1 14 Tf\n';
      text += `${x} ${y} Td\n(${escapePdfString(line.text)}) Tj\n`;
      y -= 22;
      text += '/F1 ' + fontSize + ' Tf\n';
    } else if (line.type === 'blank') {
      y -= lineHeight;
    } else {
      const wrapped = wrapText(line.text, 90);
      for (const wrappedLine of wrapped) {
        text += `${x} ${y} Td\n(${escapePdfString(wrappedLine)}) Tj\n`;
        y -= lineHeight;
      }
    }
  }

  text += 'ET\n';
  return text;
}

function makeStreamObject(id, content) {
  const length = Buffer.byteLength(content, 'utf8');
  return `${id} 0 obj\n<< /Length ${length} >>\nstream\n${content}endstream\nendobj\n`;
}

function buildPdf(filename) {
  const outputDir = path.dirname(filename);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const sections = [
    { type: 'title', text: 'Dasuni Wijesuriya' },
    { text: 'IT Undergraduate · Software Engineer · Data & AI' },
    { type: 'blank' },
    { type: 'section', text: 'Contact' },
    { text: 'your.email@example.com | github.com/yourusername | linkedin.com/in/yourprofile | Sri Lanka' },
    { type: 'blank' },
    { type: 'section', text: 'Profile' },
    { text: 'A curious, detail-oriented IT undergraduate with a dual-degree background spanning software engineering, mathematics, and applied science.' },
    { text: 'Experienced in data systems, business intelligence, and API testing through an enterprise internship, with strong interest and hands-on project work in AI, machine learning, and full-stack development.' },
    { type: 'blank' },
    { type: 'section', text: 'Education' },
    { text: 'BSc (Hons) Information Technology — Specialized in IT | Expected 2026 | Sri Lanka Institute of Information Technology (SLIIT)' },
    { type: 'blank' },
    { text: 'BSc Physical Science — Mathematics, Applied Science, Computer Science | Expected 2026 | University of Ruhuna' },
    { type: 'blank' },
    { type: 'section', text: 'Experience' },
    { text: 'IT Intern — Data & Digital Systems | Internship | SriLankan Airlines' },
    { text: '• Developed Power BI dashboards and automated recurring reports' },
    { text: '• Wrote and optimized SQL queries for data validation and integration' },
    { text: '• Performed API testing using Postman and validated REST API endpoints' },
    { text: '• Collaborated cross-functionally on requirement gathering and technical documentation' },
    { text: '• Supported enterprise data pipelines and business intelligence workflows' },
    { type: 'blank' },
    { type: 'section', text: 'Projects' },
    { text: 'AI-Powered Learning Analytics Platform — Final-Year Research Project' },
    { text: 'AI-driven platform delivering learning analytics, caregiver dashboards, and personalized recommendations using machine learning models. Built with Flutter, Firebase, Python, and Power BI.' },
    { type: 'blank' },
    { text: 'Online Garbage Management System' },
    { text: 'Full-stack MERN application with REST API, CRUD functionality, and Postman-tested endpoints.' },
    { type: 'blank' },
    { text: 'Android Note Application' },
    { text: 'Kotlin-based Android app with Material Design UI, CRUD notes, and local storage.' },
    { type: 'blank' },
    { text: 'Online Teacher Training System' },
    { text: 'PHP and MySQL web system with user authentication, course management, and admin CRUD workflows.' },
  ];

  const secondPage = [
    { type: 'section', text: 'Skills' },
    { text: 'Languages: Python, Java, JavaScript, PHP, Kotlin, SQL, R' },
    { text: 'Frontend: React, HTML5, CSS3, Tailwind CSS, Flutter' },
    { text: 'Backend: Node.js, Express.js, Firebase, REST APIs' },
    { text: 'Databases: MySQL, MongoDB, SQL Server, Firebase' },
    { text: 'Data & Analytics: Power BI, Data Visualization, Data Modeling, ETL Concepts' },
    { text: 'Testing: Postman, API Testing, Software Testing, Playwright (basic)' },
    { type: 'blank' },
    { type: 'section', text: 'Tools' },
    { text: 'Git, GitHub, VS Code, Android Studio, Figma, MySQL Workbench' },
    { type: 'blank' },
    { type: 'section', text: 'Certifications' },
    { text: 'AWS Machine Learning Essentials for Business and Technical Decision Makers' },
    { text: 'AWS Introduction to Generative AI — Art of the Possible' },
    { text: 'Microsoft Learn — Azure Identity, Access and Security' },
    { type: 'blank' },
    { type: 'section', text: 'Achievements' },
    { text: '🏆 1st Place — PearlHack 3.0 International Women\'s Hackathon' },
    { text: '🥉 2nd Runner-up — Road to Rush Coder 3.0 Hackathon' },
  ];

  const content1 = buildTextStream(sections, { yStart: 780 });
  const content2 = buildTextStream(secondPage, { yStart: 820 });

  const objects = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>\nendobj\n');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 7 0 R >> >> /Contents 4 0 R >>\nendobj\n');
  objects.push(makeStreamObject(4, content1));
  objects.push('5 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 7 0 R >> >> /Contents 6 0 R >>\nendobj\n');
  objects.push(makeStreamObject(6, content2));
  objects.push('7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n');

  let fileContent = '%PDF-1.4\n';
  const offsets = [];
  let position = Buffer.byteLength(fileContent, 'utf8');

  for (const object of objects) {
    offsets.push(position);
    fileContent += object;
    position += Buffer.byteLength(object, 'utf8');
  }

  const xrefStart = position;
  fileContent += 'xref\n0 ' + (objects.length + 1) + '\n0000000000 65535 f \n';
  for (const offset of offsets) {
    fileContent += offset.toString().padStart(10, '0') + ' 00000 n \n';
  }
  fileContent += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xrefStart + '\n%%EOF';

  fs.writeFileSync(filename, Buffer.from(fileContent, 'binary'));
  console.log('Wrote', filename);
}

buildPdf(path.join(__dirname, '..', 'public', 'cv.pdf'));
