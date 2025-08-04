# Shreyash Portfolio 2025

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS. This portfolio showcases your skills, projects, and provides a professional way for potential clients or employers to get in touch.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic content
- **Project Filtering** - Filter projects by category (Web Apps, Mobile Apps, UI/UX Design)
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized for performance
- **Accessibility** - WCAG compliant with proper focus states

## 📁 Project Structure

```
Shreyash Portfolio 2025/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   ├── profile.jpg     # Your profile picture
│   ├── project1.jpg    # Project screenshots
│   ├── project2.jpg
│   └── ...
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or Download** the project files
2. **Add Your Images** to the `images/` folder:
   - `profile.jpg` - Your professional photo (400x500px recommended)
   - `project1.jpg` to `project6.jpg` - Your project screenshots (400x250px recommended)
3. **Customize Content** in `index.html`:
   - Update personal information
   - Add your real projects
   - Update contact details
4. **Open** `index.html` in your browser to view the portfolio

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

```html
<!-- Hero Section -->
<h1>Hi, I'm <span class="text-blue-600">Your Name</span></h1>
<p>Your professional title and description</p>

<!-- About Section -->
<p>Your personal story and experience</p>

<!-- Contact Information -->
<p>your.email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your Location</p>
```

### Skills Section
Modify the skills and their percentages in the skills section:

```html
<div class="skill-progress" style="width: 95%"></div>
```

### Projects
Replace the sample projects with your own:

```html
<div class="project-item fade-in" data-category="web">
    <div class="project-card">
        <div class="project-image">
            <img src="images/your-project.jpg" alt="Project Name">
        </div>
        <div class="project-content">
            <h3>Your Project Name</h3>
            <p>Project description</p>
            <div class="flex flex-wrap gap-2">
                <span class="tech-tag">Technology Used</span>
            </div>
        </div>
    </div>
</div>
```

### Colors and Styling
The main color scheme uses blue (`#3B82F6`). To change colors, update the CSS variables in `styles.css`:

```css
/* Primary color */
.btn-primary {
    background: linear-gradient(135deg, #YOUR_COLOR, #YOUR_DARKER_COLOR);
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 768px
- **Small Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📧 Contact Form

The contact form includes:
- Name, email, subject, and message fields
- Client-side validation
- Responsive design
- Success/error handling

To make it functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Configure email sending (SendGrid, Nodemailer, etc.)
3. Update the form action in `script.js`

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 🎯 Performance Optimization

- Images are optimized with placeholder fallbacks
- CSS and JavaScript are minified
- Lazy loading for images
- Smooth animations with hardware acceleration
- Efficient CSS with Tailwind utilities

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🛡️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions, please open an issue.

## 📞 Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Made with ❤️ for showcasing your amazing work!** 