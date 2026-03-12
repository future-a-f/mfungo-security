# MFUNGO SECURITY Website

A modern, responsive marketing website for **MFUNGO SECURITY SERVICE COMPANY LIMITED** – a BRELA‑registered private security company based in Mwanza, Tanzania.  
The site is designed to clearly communicate services (manned guarding, patrol & response, security systems, risk assessment), build trust with local businesses and residents, and make it easy to request a quote or get in touch.

## 🚀 Core Features

- **Security‑focused design**: Premium navy + gold theme tailored to a security brand
- **Fully responsive**: Works across mobile, tablet, and desktop
- **Hero-driven home page**: Full‑screen hero with strong CTAs (“Request a Quote”, “View Services”)
- **Trust sections**: BRELA registration, region coverage, stats, and key differentiators
- **Services breakdown**: Clear explanation of core services and how the engagement process works
- **Industries served**: Mining, logistics, retail, and residential coverage
- **Careers flow**: Open positions list and modal application form
- **Contact page**: Call/WhatsApp/Email quick actions plus a focused enquiry form
- **Accessibility + UX**: Keyboard navigation, focus styles, readable typography
- **Lightweight interactivity**: Vanilla JS for navigation, validation, animations, and language switching

## 🌐 Languages (English & Swahili)

English is the **primary** language of the site, with Swahili as a **secondary** language for local users.

- A language toggle (`EN / SW`) is available in the navbar on the home page.
- Text strings that can be translated are marked with `data-i18n` attributes and handled by a small translation map in `assets/js/main.js`.
- The selected language is remembered in `localStorage` so returning users see the site in their last chosen language.

More pages can be localized over time by:

- Adding `data-i18n="key"` attributes to elements.
- Extending the `translations` object in `main.js` for those keys.

## 📁 Project Structure

mfungo/
├── index.html              # Main homepage
├── README.md               # Project documentation
├── assets/                 # Static assets
│   ├── css/
│   │   ├── main.css        # Main stylesheet (imports all modules)
│   │   ├── responsive.css  # Responsive utilities
│   │   ├── settings/       # CSS variables and settings
│   │   ├── tools/          # Mixins and utilities
│   │   ├── generic/        # Reset and base styles
│   │   ├── elements/       # HTML element styles
│   │   ├── objects/        # Layout objects
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page-specific styles
│   │   └── utilities/      # Helper classes
│   ├── js/
│   │   └── main.js         # Main JavaScript file (nav, validation, animations, i18n)
│   ├── images/             # Image assets
│   ├── fonts/              # Font files
│   └── videos/             # Video files
├── components/             # Reusable HTML components
│   ├── navbar.html         # Navigation component
│   ├── hero.html           # Hero section component
│   └── footer.html         # Footer component
├── pages/                  # Site pages
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── careers.html        # Careers page
│   └── contact.html        # Contact page
├── forms/                  # Form templates
├── data/                   # Data files
├── docs/                   # Documentation
└── seo/                    # SEO assets

## 🎨 CSS Architecture

The project follows a structured CSS architecture inspired by ITCSS (Inverted Triangle CSS):

- **Settings**: CSS variables and configuration
- **Tools**: Mixins and functions
- **Generic**: Reset and normalize styles
- **Elements**: Base HTML element styling
- **Objects**: Layout patterns (grids, containers)
- **Components**: UI components (buttons, cards, navigation)
- **Utilities**: Helper classes for spacing, typography, etc.

## 🛠 Technologies Used

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Modern JavaScript for interactivity
- **Google Fonts**: Inter and JetBrains Mono for typography
- **SVG Icons**: Scalable vector icons for UI elements

## 📱 Responsive Breakpoints

- **Small**: 640px and below
- **Medium**: 641px - 768px
- **Large**: 769px - 1024px
- **Extra Large**: 1025px and above

## 🎯 Page‑by‑Page Overview

### Home (`index.html`)

- Full‑screen hero with background imagery, clear headline, and dual CTAs:
  - **Request a Quote** → `pages/contact.html`
  - **View Services** → `pages/services.html`
- Trust section with BRELA registration, 24/7 coverage, and regional focus
- Highlight cards for **Manned Guarding**, **Patrol & Response**, and **Security Systems**
- “Why MFUNGO” section explaining key differentiators (trained personnel, rapid response, clear reporting, tailored plans)
- Strong gradient CTA card encouraging visitors to request a quote

### About (`pages/about.html`)

- Hero explaining who MFUNGO SECURITY is and where they operate
- Company profile with BRELA registration details and business activities
- Mission and Vision cards
- Values grid (Professionalism, Reliability, Compliance, Trust)
- Company registration details (directors, share capital)
- Impact stats and a final CTA to request a quote or view services

### Services (`pages/services.html`)

- Hero describing the overall security offering
- Overview of how services are tailored to site risk and operations
- Core services:
  - Manned Guarding
  - Patrol & Rapid Response
  - Security Systems (CCTV & Access Control)
  - Risk Assessment
  - Escort & Logistics Security
  - Residential & Commercial Coverage
- “How it works” 4‑step process (Site Review → Coverage Plan → Deployment → Reporting)
- **Industries Served** section (Mining, Logistics, Retail, Residential)
- FAQ section for common client questions
- CTA card to start a conversation about coverage

### Careers (`pages/careers.html`)

- Hero inviting candidates to join the security team
- “Why work at MFUNGO SECURITY?” section
- Benefits & Perks adapted to a security company context (safety, shifts, allowances, training)
- Open Positions list with **Apply Now** buttons which open a modal application form
- Culture section explaining values in action and life at MFUNGO SECURITY
- CTA card for speculative applications and more information

### Contact (`pages/contact.html`)

- Hero explaining how to get in touch
- Left side: contact form optimized for enquiries:
  - Name, Email, Phone
  - Service Needed (select with security‑specific options)
  - Message
- Quick action buttons for:
  - **Call Now** (tel link)
  - **Email Us**
  - **WhatsApp**
- Right side: cards with:
  - Address and location details
  - Phone information (main and emergency)
  - Email addresses for different purposes
  - Business hours

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` in your preferred web browser
3. Navigate through the pages using the navigation menu

## 📧 Contact

- **Email**: <mfungoacre@ymail.com>
- **Phone**: +255 743 995 011
- **Address**: Plot 25, Block G, House 25, Ibungilo A, Airport Road, Ilemela, Mwanza, Tanzania

## 📄 License

This project is proprietary and owned by Mfungo. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For contributions or modifications, please contact the Mfungo team.

---

Built with ❤️ for MFUNGO SECURITY
