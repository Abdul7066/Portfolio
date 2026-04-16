export const projects = [
  {
    id: 1,
    type: 'Production',
    period: '11/2023 – 12/2024',
    name: 'MQSALA',
    subtitle: 'Laundry Service Platform — Multi-platform, International',
    description:
      'Scalable laundry service platform connecting customers with nearest service partners across multiple regions.',
    features: [
      'Architected backend with Node.js MVC — clean separation of concerns at scale',
      'Geolocation-based partner matching to dynamically connect customers with nearest providers',
      'Optimized MongoDB schemas for users, orders, services, and partner management',
      'JWT + RBAC for 3 distinct roles: customer, partner, admin',
      'i18n multi-language support for global accessibility',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'Redis', 'i18n', 'Geolocation'],
  },
  {
    id: 2,
    type: 'Production',
    period: '09/2022 – 06/2023',
    name: 'MMH',
    link: 'https://mmh.tekisky.com/',
    subtitle: 'Medical Management & Hospital Platform',
    description:
      'Full-stack web application streamlining patient care, hospital recommendations, appointment management, and treatment tracking.',
    features: [
      'Backend APIs for patient demographics, medical history, and appointment records',
      'MongoDB schemas optimized for healthcare data relationships and fast retrieval',
      'Multer file upload + Nodemailer automated email notifications',
      'RBAC for Admin and Operator roles — securing sensitive medical data',
      'Helmet security headers against clickjacking and common web attacks',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Multer', 'Nodemailer', 'RBAC', 'Helmet', 'React.js'],
  },
];
