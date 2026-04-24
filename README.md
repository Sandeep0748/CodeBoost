# CodeBoost Landing Page - React + Vite

A modern, fully responsive landing page for CodeBoost built with React, Vite, and Tailwind CSS.

## 🚀 Features

### Core Sections
- **Hero Section** - Catchy headline with CTA buttons
- **Features Section** - 4 key features with icons and descriptions
- **About Section** - Platform mission with stats
- **Testimonials Section** - 3 user reviews with ratings
- **Pricing Section** - Basic and Premium pricing tiers
- **Footer** - Contact info, social links, and copyright

### Interactive Features
✨ **Sticky Navigation Bar** - Fixed navbar with smooth scrolling
🌙 **Dark Mode Toggle** - Switch between light and dark themes with persistence
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
🎨 **Modern Design** - Clean layout with good typography and spacing
✨ **Smooth Scrolling** - Smooth navigation between sections
🎬 **Scroll Animations** - Fade-in effects on scroll
🔘 **Hover Effects** - Interactive button animations and card hover states

### Technical Stack
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Modern utility-first CSS framework
- **React Router** - Client-side routing for smooth navigation
- **Font Awesome** - Icon library for beautiful icons

## 📁 File Structure

```
CodeBoost/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Features.jsx        # Features section
│   │   ├── About.jsx           # About section
│   │   ├── Testimonials.jsx    # Testimonials section
│   │   ├── Pricing.jsx         # Pricing section
│   │   └── Footer.jsx          # Footer component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind CSS styles
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

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Dark Mode
Dark mode preference is automatically saved to localStorage and persists across sessions.

### Colors & Styling
Edit the Tailwind classes in each component file to customize colors and layout. All components use Tailwind CSS utility classes.

### Content
Update the data in each component to change:
- Feature descriptions in `Features.jsx`
- Testimonial text in `Testimonials.jsx`
- Pricing details in `Pricing.jsx`
- Footer links in `Footer.jsx`

## 🔄 Component Breakdown

### Navbar
- Dark mode toggle button
- Mobile-responsive navigation menu
- Smooth scroll anchors to sections

### Hero
- Eye-catching headline with CTA buttons
- Stats counter display
- Scroll animation effects

### Features
- 4 feature cards with icons
- Hover animations
- Responsive grid layout

### About
- Mission statement
- Company statistics
- Left-right layout with gradient box

### Testimonials
- 3 customer testimonials
- Star ratings
- User avatars and titles

### Pricing
- Two pricing tiers (Starter & Premium)
- Feature comparisons
- CTA buttons with distinct styling

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)  
- Desktop (> 1024px)

## 🎬 Animations

Scroll animations are powered by Intersection Observer API and fade in elements as they come into view.

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

## 🚀 Deployment

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
