# SimpliBill Website

> Healthcare Revenue Cycle Management & Technology Solutions

A modern, responsive landing page built for SimpliBill - a healthcare revenue cycle management and technology consulting company.

![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=flat-square&logo=tailwind-css)

## 🌟 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Modern UI with Tailwind CSS & shadcn/ui
- ✅ TypeScript for type safety
- ✅ SEO optimized
- ✅ Fast performance with Next.js 14

## 📋 Sections

### 🏠 Hero Section

- Eye-catching headline and description
- Call-to-action buttons
- Key statistics (500+ clients, 99.9% accuracy, 24/7 support)

### 💼 Services (5 Cards)

1. Revenue Cycle Management (RCM)
2. Healthcare Consulting
3. Technology Solutions
4. Outsourcing Services
5. Training and Education

### ⚡ Features (7 Items)

1. Secure, Cloud-Based Access
2. Real-Time Dashboard
3. Claims Management
4. Payment Management
5. Analytics and Reporting
6. Customizable Workflows
7. Patient Engagement

### ℹ️ About Us

- Company overview
- Key statistics and achievements
- Mission statement

### 📞 Contact

- Contact form
- Company information
- Social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/simplibill-website.git
   cd simplibill-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| **Next.js 14**    | React framework with App Router |
| **React 18**      | UI library                      |
| **TypeScript**    | Type-safe JavaScript            |
| **Tailwind CSS**  | Utility-first CSS framework     |
| **Framer Motion** | Animation library               |
| **shadcn/ui**     | Reusable component library      |
| **Lucide React**  | Icon library                    |
| **pnpm**          | Fast package manager            |

## 📁 Project Structure

```
simplibill-website/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx      # Marketing layout (Navbar + Footer)
│   │   │   └── page.tsx        # Home page
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── home/
│   │   │   ├── hero.tsx        # Hero section
│   │   │   ├── services.tsx    # Services section
│   │   │   ├── features.tsx    # Features section
│   │   │   ├── about.tsx       # About Us section
│   │   │   └── contact.tsx     # Contact section
│   │   ├── layout/
│   │   │   ├── navbar.tsx      # Navigation bar
│   │   │   └── footer.tsx      # Footer
│   │   └── ui/                 # shadcn/ui components
│   ├── config/
│   │   └── site.ts             # Site configuration
│   └── styles/
│       └── globals.css         # Global CSS with Tailwind
├── public/
│   └── logo.png                # SimpliBill logo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Available Scripts

| Command      | Description                           |
| ------------ | ------------------------------------- |
| `pnpm dev`   | Start development server on port 3000 |
| `pnpm build` | Build for production                  |
| `pnpm start` | Start production server               |
| `pnpm lint`  | Run ESLint                            |

## 🎨 Customization

### Update Colors

Colors are defined in `tailwind.config.ts`. Main brand colors:

- **Primary Blue:** `blue-600` (#0284c7)
- **Secondary Green:** `emerald-600` (#059669)

### Update Content

- **Site metadata:** `src/config/site.ts`
- **Services:** `src/components/home/services.tsx`
- **Features:** `src/components/home/features.tsx`
- **Contact info:** `src/components/home/contact.tsx` & `src/components/layout/footer.tsx`

### Add Logo

Replace `public/logo.png` with your logo (recommended: 150x40px PNG)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New" → "Project"
5. Import your repository
6. Click "Deploy"

**Auto-deployment:** Every push to `main` branch automatically deploys!

### Environment Variables

Create `.env` file for environment-specific settings:

```env
NEXT_PUBLIC_APP_URL=https://www.simplibill.io
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None currently! 🎉

## 📝 License

This project is private and proprietary to SimpliBill.



## 📞 Support

For questions or issues, contact:

- Email: info@simplibill.io
- Repository Issues: [Create an issue](https://github.com/mudassirudd/simplibill-website/issues)

---

**Built with ❤️ for SimpliBill Healthcare**
