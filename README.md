# Zero Analytics - Landing Page

**Marketing website with email capture for Zero Analytics**

Built with Next.js, TypeScript, and Tailwind CSS. Optimized for static export and deployment to Vercel/Netlify.

## 🚀 Features

- **Email Capture**: Collect early access signups
- **Responsive Design**: Works on all devices
- **Static Export**: Can be deployed anywhere
- **SEO Optimized**: Meta tags, structured data
- **Performance**: Minimal bundle size, fast loading

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## 📁 Structure

```
src/
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── components/         # React components
    ├── Header.tsx      # Navigation header
    ├── Hero.tsx        # Hero section
    ├── Features.tsx    # Features showcase
    ├── EmailCapture.tsx # Email signup form
    └── Footer.tsx      # Site footer
```

## 🎨 Customization

**Colors**: Edit `tailwind.config.js` to change the color scheme
**Content**: Update component files for messaging
**Email Service**: Replace TODO in `EmailCapture.tsx` with your service

## 📊 Email Integration

Currently shows a mock success message. To integrate with real email services:

**Mailchimp**:
```javascript
const response = await fetch('/api/mailchimp', {
  method: 'POST',
  body: JSON.stringify({ email })
})
```

**ConvertKit**:
```javascript
const response = await fetch('https://api.convertkit.com/v3/forms/{form_id}/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, api_key: process.env.CONVERTKIT_API_KEY })
})
```

## 🚀 Deployment

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Upload dist/ folder to Netlify
```

**Static Hosting**:
```bash
npm run build
# Upload out/ folder to any static host
```

## 📈 Analytics

The site uses Zero Analytics for tracking (when available). The tracking script is minimal and privacy-focused.

## 🔧 Configuration

- **Domain**: Update in `next.config.js` and metadata
- **Social Links**: Update in `Footer.tsx`
- **Contact Info**: Update throughout components
- **Branding**: Replace logo and colors

---

Built with ❤️ for the Zero Analytics community