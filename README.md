# CodeBoost Landing Page - React + Vite

A modern, fully responsive landing page for CodeBoost built with React, Vite, and Tailwind CSS. Features smooth animations, elegant design.

## 🚀 Features

### Core Sections
- **Hero Section** - Catchy headline with CTA buttons and animated background elements
- **Features Section** - 4 key features with icons, hover animations, and descriptions
- **About Section** - Platform mission with stats and decorative gradients
- **Testimonials Section** - 3 user reviews with ratings and avatars
- **Pricing Section** - Two pricing tiers (Starter & Premium) with Rupee pricing
- **Footer** - Contact info, social links, back-to-top button, and copyright

### Interactive Features
✨ **Sticky Navigation Bar** - Fixed navbar with smooth scrolling and underline animations  
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop  
🎨 **Modern Design** - Clean layout with premium typography and spacing  
🎬 **Smooth Animations** - Fade-in, slide, scale, and float animations on scroll  
🔘 **Hover Effects** - Interactive button animations, card elevations, and smooth transitions  
💾 **Light Theme Only** - Clean, professional light mode throughout  
🌐 **Rupee Currency** - Pricing displayed in Indian Rupees (₹)  

### Advanced Animations
- **Fade-in animations** - Smooth entrance effects as elements scroll into view
- **Staggered timing** - Sequential animations for multiple elements
- **Hover state animations** - Cards lift, icons bounce, buttons scale
- **Gradient animations** - Text gradient shifts for visual interest
- **Floating elements** - Subtle floating decorative elements
- **Icon animations** - Bouncing, pulsing, and spinning effects

### Technical Stack
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Modern utility-first CSS framework
- **CSS Animations** - Smooth transitions and keyframe animations
- **Font Awesome** - Comprehensive icon library
- **Intersection Observer API** - Efficient scroll animations

## 📁 File Structure

```
CodeBoost/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with smooth scrolling
│   │   ├── Hero.jsx            # Hero section with stats
│   │   ├── Features.jsx        # 4 feature cards with hover effects
│   │   ├── About.jsx           # About section with mission
│   │   ├── Testimonials.jsx    # Testimonials with star ratings
│   │   ├── Pricing.jsx         # Pricing in Rupees
│   │   └── Footer.jsx          # Footer with back-to-top button
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind CSS + animations
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CodeBoost
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173` (Vite default)

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Colors & Styling
All components use Tailwind CSS utility classes. Edit the `className` attributes in each component to customize:
- Color scheme (primary: blue-600, secondary: indigo-600)
- Spacing and padding
- Border radius and shadows
- Typography (font sizes, weights)

### Content Updates
- **Features**: Edit `Features.jsx` to update feature descriptions
- **Testimonials**: Update `Testimonials.jsx` with real user quotes
- **Pricing**: Modify `Pricing.jsx` for pricing details and currency
- **Footer**: Update `Footer.jsx` with company info and social links
- **Text Content**: Search for specific text in components and update

### Theme Colors
Primary colors used:
- Blue: `#2563eb` (rgb(37, 99, 235))
- Indigo: `#4f46e5` (rgb(79, 70, 229))
- Gray: `#1f2937` to `#f3f4f6` (for text and backgrounds)

### Pricing Currency
The pricing is displayed in Indian Rupees (₹). To change:
1. Open `Pricing.jsx`
2. Replace `₹` with your preferred currency symbol
3. Update the amounts accordingly

## 🔄 Component Breakdown

### Navbar
- Sticky positioning with backdrop blur effect
- Smooth scroll navigation to all sections
- Mobile hamburger menu with slide animation
- Responsive design optimized for all screen sizes

### Hero
- Animated gradient background with floating elements
- Animated headline with text gradient effect
- Two CTA buttons (primary and secondary)
- Stats section with cards and backdrop blur
- Staggered animation delays for entrance effect

### Features
- 4-column grid on desktop, responsive on mobile
- Hover animations: card lift with shadow, icon bounce
- Gradient backgrounds for visual interest
- Icon animations on hover

### About
- Two-column layout with text and visual element
- Mission statement with decorative gradients
- 3 stat cards with individual animations
- Gradient box with code icon background

### Testimonials
- 3-column grid with responsive layout
- Star rating display with real testimonials
- Avatar circles with gradients
- Card hover animations with shadow effects
- Background decoration with subtle gradients

### Pricing
- Two pricing tiers: Starter (Free) and Premium (₹2,399/month)
- Premium card with scale-up effect and "POPULAR" badge
- Feature comparison with checkmarks
- CTA buttons with hover animations
- Fully responsive for mobile devices

### Footer
- 4-column layout with company info, links, and social media
- Smooth link hover animations with translate effect
- Social media icons with scale and shadow effects
- Back-to-top button with smooth scroll functionality
- Gradient background decoration

## 📱 Responsive Design

The website uses Tailwind's responsive utilities with breakpoints:
- **Mobile**: `< 640px` (sm breakpoint)
- **Tablet**: `640px - 1024px` (md breakpoint)
- **Desktop**: `> 1024px` (lg+ breakpoints)

All sections are fully optimized for each screen size with appropriate spacing and layouts.

## 🎬 Animation Details

### Keyframe Animations Included
- `fadeInUp` - Fade in with upward movement
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Fade in with scale effect
- `float` - Subtle floating animation
- `glowPulse` - Pulsing glow effect
- `spin` - Rotating animation
- `pulse` - Opacity pulsing
- `gradientShift` - Animated text gradient

### Animation Features
- Smooth 0.3s - 0.8s transitions on hover
- Staggered timing (0.1s delays) for element sequences
- Intersection Observer for scroll-triggered animations
- Accessibility: Respects `prefers-reduced-motion` setting

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Update vite.config.js with your repo name
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

Dev Dependencies:
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin for vendor prefixes
- `postcss` - CSS transformations

## 🔍 Performance Optimizations

- ✅ Lazy loading with Intersection Observer for animations
- ✅ Optimized images and SVG icons
- ✅ CSS animations instead of JavaScript for better performance
- ✅ Minimal bundle size with Vite
- ✅ Smooth 60fps animations
- ✅ Efficient re-renders with React

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For questions or support, please contact: support@codeboost.io

---

**Built with ❤️ using React & Tailwind CSS**

To deploy:

1. Build the production bundle:
```bash
npm run build
```

2. The `dist/` folder contains your static site ready to be deployed to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

- Use Tailwind CSS DevTools browser extension for easier class debugging
- Components are modular and can be easily extracted for reuse
- All animations are smooth and performant with hardware acceleration
- Dark mode is implemented using Tailwind's `dark:` prefix
open index.html

# On Linux
xdg-open index.html
```

### 2. **Using a Local Server** (Recommended)
For better performance and to avoid CORS issues:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

**Using Live Server Extension (VS Code):**
- Install Live Server extension
- Right-click on `index.html` → "Open with Live Server"

### 3. **Access the Page**
- Open `http://localhost:8000` in your browser
- Or use the Live Server port shown in VS Code

## 🎨 Customization

### Change Colors
Edit the Tailwind color classes in `index.html`:
- Primary: Change `blue-600` to your desired color (e.g., `purple-600`, `green-600`)
- Accent: Change `indigo-600` to your desired accent color

### Modify Content
1. **Hero Section** - Edit headline and description in `index.html` lines ~45-65
2. **Features** - Update feature cards in lines ~140-200
3. **About Section** - Modify content in lines ~220-270
4. **Testimonials** - Change reviews in lines ~280-350
5. **Pricing** - Update plans in lines ~360-450
6. **Footer** - Edit contact and social links in lines ~500-580

### Update Branding
- Replace "CodeBoost" with your product name
- Change logo/icon using different Font Awesome icons
- Update company info and contact details

## 🔧 JavaScript Features

### Dark Mode
- Persists using localStorage
- Keyboard shortcut: `Alt + D`
- Toggle button in navbar

### Smooth Scrolling
- Automatically applied to all anchor links
- Offset for fixed navbar

### Scroll Animations
- Fade-in effect for sections
- Staggered animation timing
- Intersection Observer for performance

### Mobile Menu
- Responsive toggle button
- Auto-close on link click
- Close on Esc key

### Active Nav Links
- Highlights current section
- Updates on scroll

### Button Effects
- Ripple animation on click
- Hover scale effect
- Smooth transitions

## 📱 Responsive Breakpoints

The site is optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

Tailwind CSS breakpoints used:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Focus states for keyboard navigation
- Good color contrast ratios
- Alt text ready for images

## 🚀 Performance

- Optimized for fast loading
- Lazy loading ready for images
- Minimal JavaScript for smooth interactions
- CDN-hosted Tailwind CSS
- No external dependencies required

## 📊 Browser Support

- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Bonus Features Included

✅ Sticky navbar with shadow effect
✅ Dark mode toggle with persistence
✅ Scroll animations with fade-in effects
✅ Hover effects and smooth transitions
✅ Fully responsive design
✅ Keyboard shortcuts (Alt+D, Esc)
✅ Mobile menu with smooth animations
✅ Ripple button effects
✅ Active navigation highlighting

## 📝 Optional Enhancements

Here are some features you could add:

1. **Newsletter Signup**
   - Add email input field
   - Connect to email service (Mailchimp, SendGrid)

2. **FAQ Section**
   - Accordion-style questions and answers
   - Toggle animation

3. **Blog/Resources**
   - Latest articles or tutorials
   - Grid layout with cards

4. **Contact Form**
   - Input validation
   - Connect to backend or email service

5. **Video Section**
   - Embedded demo video
   - Play button overlay

6. **Analytics**
   - Google Analytics integration
   - Conversion tracking

7. **SEO Optimization**
   - Meta tags and descriptions
   - Open Graph tags
   - Schema markup

8. **Multi-language**
   - Language switcher
   - i18n integration

## 🐛 Troubleshooting

### Dark mode not persisting?
- Check if localStorage is enabled
- Check browser privacy/incognito settings

### Smooth scrolling not working?
- Ensure `scroll-behavior: smooth` is supported
- Check browser compatibility

### Icons not showing?
- Verify Font Awesome CDN link is active
- Check internet connection

### Responsiveness issues?
- Add `<meta name="viewport">` tag (already included)
- Check device zoom level (should be 100%)

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Best Practices](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Credits

Built with:
- Tailwind CSS
- Font Awesome
- Vanilla JavaScript

## 📧 Contact & Support

For questions or suggestions:
- Email: support@codeboost.com
- Website: www.codeboost.com
- Social Media: @CodeBoostHQ

---

**Made with ❤️ for aspiring developers**

Happy Coding! 🚀
