# JWA - Joe Web & Apps

**Professional Web Development Agency Landing Page**

A modern, responsive business landing page built with React, TypeScript, and Tailwind CSS. Features a stunning neon-themed design with smooth animations, contact form integration, and full routing for legal pages.

��� **Live Demo:** [Add your Netlify URL here]

---

## ��� Screenshots

![Hero Section](./screenshots/hero.png)
![Services Section](./screenshots/services.png)
![Portfolio Section](./screenshots/portfolio.png)

---

## ��� Tech Stack

### **Frontend**
- **React 18.3** - UI library for building user interfaces
- **TypeScript 5.6** - Type-safe JavaScript
- **Vite 6.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11.15** - Production-ready animations
- **React Router DOM 7.1** - Client-side routing
- **React Hook Form 7.54** - Form validation and management

### **Icons & Assets**
- **React Icons 5.4** - Popular icon library
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Lucide React** - Modern icon set

### **Email Integration**
- **EmailJS 4.4** - Client-side email sending service

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic vendor prefixes

---

## ✨ Features

### **��� Design**
- ✅ Modern dark theme with cyan/teal neon accents (#5FFBF1)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Custom Tailwind color palette and design system
- ✅ Professional typography (Playfair Display + Inter)

### **��� Sections**
- ✅ **Hero** - Eye-catching landing with animated CTAs and stats
- ✅ **Services** - 6 service cards with hover effects
- ✅ **Portfolio** - 12 projects with filter functionality
- ✅ **Testimonials** - Carousel with Nigerian and international clients
- ✅ **Contact** - Working form with EmailJS integration
- ✅ **Footer** - Social links and site navigation

### **��� Pages**
- ✅ **Home** - Main landing page with all sections
- ✅ **Privacy Policy** - GDPR-compliant privacy information
- ✅ **Terms of Service** - Legal terms and conditions

### **��� Functionality**
- ✅ Smooth section scrolling from navbar
- ✅ Mobile-friendly hamburger menu
- ✅ Contact form with validation and required agreement checkbox
- ✅ Email notifications via EmailJS
- ✅ Service pre-selection from "Learn More" buttons
- ✅ Working routing between pages
- ✅ Accessible and SEO-friendly

---

## ��� Installation

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Clone Repository**
```bash
git clone https://github.com/YOUR_USERNAME/jwa-landing.git
cd jwa-landing
```

### **Install Dependencies**
```bash
npm install
```

### **Environment Setup**
Create a `.env` file in the root directory (optional, for hiding EmailJS keys):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## ���️ Development

### **Start Dev Server**
```bash
npm run dev
```
Opens at `http://localhost:5173`

### **Build for Production**
```bash
npm run build
```
Creates optimized build in `dist/` folder

### **Preview Production Build**
```bash
npm run preview
```

### **Lint Code**
```bash
npm run lint
```

---

## ��� Customization

### **Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a202c',           // Dark blue-black background
  'primary-dark': '#0f1419',    // Darker variant
  accent: '#5FFBF1',            // Cyan/teal neon (main)
  'accent-dark': '#00D9CC',     // Darker cyan
  'accent-orange': '#FFB84D',   // Orange secondary accent
}
```

### **Fonts**
Update in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
```

### **Contact Info**
Update in `src/components/Contact.tsx`:
```typescript
const contactInfo = [
  { title: 'Email', detail: 'your@email.com', link: 'mailto:your@email.com' },
  { title: 'Phone', detail: '+234 XXX XXX XXXX', link: 'tel:+234XXXXXXXXXX' },
  { title: 'Location', detail: 'Your City, Country', link: '#' },
];
```

### **Social Media**
Update in `src/components/Contact.tsx` and `src/components/Footer.tsx`:
```typescript
const socialLinks = [
  { icon: <FaWhatsapp />, link: 'https://wa.me/YOUR_NUMBER' },
  { icon: <FaInstagram />, link: 'https://instagram.com/YOUR_USERNAME' },
  { icon: <FaTiktok />, link: 'https://tiktok.com/@YOUR_USERNAME' },
];
```

---

## ��� EmailJS Setup

### **1. Create Account**
- Go to https://www.emailjs.com
- Sign up and verify email

### **2. Add Email Service**
- Dashboard → Email Services → Add Service
- Connect your Gmail/Outlook
- Copy **Service ID**

### **3. Create Template**
- Email Templates → Create Template
- Template content:
```
Subject: New Contact from {{from_name}}

Hello,

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
Sent from JWA Website
```

- Copy **Template ID**

### **4. Get Public Key**
- Account → General → Copy **Public Key**

### **5. Update Contact Form**
In `src/components/Contact.tsx`, update:
```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

---

## ��� Deployment

### **Netlify (Recommended)**

#### **Option 1: Drag & Drop**
1. Build project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist/` folder
4. Done! ✅

#### **Option 2: GitHub Integration**
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

#### **Fix Routing (Important!)**
Create `public/_redirects`:
```
/*    /index.html   200
```

Then rebuild and redeploy.

### **Vercel**
```bash
npm install -g vercel
vercel
```

### **GitHub Pages**
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

---

## ��� Project Structure
```
jwa-landing/
├── public/
│   ├── _redirects          # Netlify routing config
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with routing
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Services.tsx    # Services grid
│   │   ├── Portfolio.tsx   # Projects showcase
│   │   ├── Testimonials.tsx # Client reviews
│   │   ├── Contact.tsx     # Contact form with EmailJS
│   │   ├── Footer.tsx      # Site footer
│   │   ├── PrivacyPolicy.tsx # Privacy page
│   │   └── TermsOfService.tsx # Terms page
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles + Tailwind
│   └── vite-env.d.ts       # TypeScript declarations
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS config
├── tailwind.config.js      # Tailwind customization
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

---

## ��� Troubleshooting

### **EmailJS Not Sending**
- ✅ Check Service ID, Template ID, Public Key are correct
- ✅ Verify template variables match: `{{from_name}}`, `{{from_email}}`, etc.
- ✅ Check browser console for errors
- ✅ Test template in EmailJS dashboard

### **Routing Not Working on Netlify**
- ✅ Make sure `public/_redirects` file exists
- ✅ Content should be: `/*    /index.html   200`
- ✅ Rebuild and redeploy

### **Tailwind Styles Not Applying**
- ✅ Check `tailwind.config.js` content paths include all files
- ✅ Restart dev server after config changes
- ✅ Clear browser cache

### **Build Errors**
- ✅ Delete `node_modules/` and `dist/`
- ✅ Run `npm install` again
- ✅ Run `npm run build`

---

## ��� License

This project is open source and available under the [MIT License](LICENSE).

---

## ��� Contact

**JWA - Joe Web & Apps**

- ��� Email: jeowebapp360@gmail.com
- ��� Phone: +234 8161 375 240
- ��� Location: Lagos, Nigeria
- ��� WhatsApp: [Chat with us](https://wa.me/2348161375240)
- ��� Instagram: [@joewebapp](https://www.instagram.com/joewebapp/)
- ��� TikTok: [@joewebapp](https://www.tiktok.com/@joewebapp)

---

## ��� Acknowledgments

- Design inspiration from modern web design trends
- Icons from React Icons and Heroicons
- Fonts from Google Fonts
- Images from Unsplash

---

## ��� Version History

### **v1.0.0** (Current)
- ✅ Initial release
- ✅ Full responsive design
- ✅ EmailJS integration
- ✅ Privacy & Terms pages
- ✅ React Router navigation
- ✅ Contact form validation

---

**Made with ❤️ by JWA - Joe Web & Apps**
