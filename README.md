# Bravo.Ai - Next.js + TypeScript Conversion

This is the converted Bravo.Ai marketplace website built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bravo-ai/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Header.module.css    # Header styles
│   ├── Footer.tsx           # Footer with links
│   ├── Footer.module.css    # Footer styles
│   ├── HomePage.tsx         # Main page component
│   ├── BackgroundAnimation.tsx  # Background effects
│   ├── WaitlistModal.tsx    # Waitlist form modal
│   ├── WaitlistModal.module.css
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── Showcase.tsx     # Value proposition cards
│       ├── FeatureStrip.tsx # Feature highlights
│       ├── CTA.tsx          # Call-to-action section
│       └── [name].module.css # Section-specific styles
├── lib/
│   └── interactions.ts      # Client-side interactions
├── public/
│   └── favicon.svg          # Bravo.Ai logo
├── package.json
├── tsconfig.json
├── next.config.ts
└── .gitignore
```

## 🎨 Features

✅ **Server-Side Rendering (SSR)** - Next.js App Router  
✅ **TypeScript** - Full type safety across codebase  
✅ **CSS Modules** - Scoped, maintainable styles  
✅ **Responsive Design** - Mobile-first approach  
✅ **Animations** - Smooth scroll reveals and transitions  
✅ **Modal Form** - Waitlist signup with validation  
✅ **SEO Ready** - Metadata and Open Graph tags  
✅ **Vercel Optimized** - Deploy with `vercel deploy`  

## 🔧 Development

### Add New Page

```bash
# Create app/new-page/page.tsx
mkdir -p app/new-page
cat > app/new-page/page.tsx << 'EOF'
export default function NewPage() {
  return <h1>New Page</h1>;
}
EOF
```

### Add New Component

```bash
# Create components/MyComponent.tsx
cat > components/MyComponent.tsx << 'EOF'
import styles from './MyComponent.module.css';

export default function MyComponent() {
  return <div className={styles.container}>My Component</div>;
}
EOF

# Create styles file
touch components/MyComponent.module.css
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Other Platforms

**AWS Amplify:**
```bash
amplify init
amplify publish
```

**Netlify:**
```bash
ntl deploy
```

**Docker:**
```bash
docker build -t bravo-ai .
docker run -p 3000:3000 bravo-ai
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔐 Security Features

✅ No hardcoded secrets  
✅ Secure form validation  
✅ Content Security Policy ready  
✅ TypeScript prevents type errors  
✅ Next.js built-in security headers  

## 🎯 Performance

- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic per-page bundles
- **Fast Refresh** - Instant feedback during development
- **CSS Modules** - Minimal CSS shipped
- **SWC Compiler** - Fast JavaScript transformation

## 📚 Dependencies

### Production
- `react@18.3+` - UI library
- `react-dom@18.3+` - React DOM bindings
- `next@14+` - React framework

### Development
- `typescript@5.3+` - Type safety
- `@types/react@18.2+` - React types
- `@types/node@20+` - Node.js types

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 License

© 2026 Bravo.Ai. All rights reserved.

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@bravo.ai
- Discord: [Join our community](#)

---

**Built with ❤️ using Next.js + TypeScript**
