# Event Registration Form

A modern, responsive event registration form built with Angular 21 featuring reactive forms, real-time validation, and a clean UI powered by Tailwind CSS.

## 🎥 Demo Video

[![Watch Demo][https://drive.google.com/file/d/16vj3ya_yop23kehBcRZrSz2jUAsDQwts/view?usp=sharing]


## ✨ Features

- **Reactive Forms**: Built with Angular's reactive forms module for robust form handling
- **Real-time Validation**: Instant feedback with field-level validation
- **Modern UI**: Clean and responsive design using Tailwind CSS 4.x
- **Accessibility**: Semantic HTML with proper labels and ARIA attributes
- **Form Controls**:
  - Full Name (required)
  - Email (required, with email format validation)
  - Phone Number (required, must be exactly 10 digits)
  - Event Selection (dropdown with multiple event options)
  - Event Date (date picker)
  - Terms & Conditions (checkbox with required acceptance)

## 🚀 Technologies

- **Angular 21**: Latest version with standalone components
- **TypeScript 5.9**: Type-safe development
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **Reactive Forms**: Angular's form validation and state management
- **Vitest**: Fast unit testing
- **Angular CLI 21.1.2**: Project scaffolding and tooling

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm 11.6.2 or higher

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event-form
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you modify source files.

## 🏗️ Building for Production

Build the project for production:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance and speed.

## 🧪 Running Tests

Execute unit tests with Vitest:

```bash
npm test
# or
ng test
```

## 📁 Project Structure

```
event-form/
├── src/
│   ├── app/
│   │   ├── event-form/          # Event form component
│   │   │   ├── event-form.ts    # Component logic & validation
│   │   │   ├── event-form.html  # Form template
│   │   │   ├── event-form.css   # Component styles
│   │   │   └── event-form.spec.ts
│   │   ├── app.ts               # Root component
│   │   ├── app.config.ts        # Application configuration
│   │   └── app.routes.ts        # Routing configuration
│   ├── index.html               # Main HTML file
│   ├── main.ts                  # Application entry point
│   └── styles.css               # Global styles
├── public/                      # Static assets
├── angular.json                 # Angular workspace config
├── package.json                 # Dependencies & scripts
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Form Validation Rules

| Field | Validation |
|-------|-----------|
| Full Name | Required |
| Email | Required, Must be valid email format |
| Phone | Required, Must be exactly 10 digits |
| Event Name | Required, Select from dropdown |
| Event Date | Required |
| Terms & Conditions | Must be accepted |

## 🔧 Code Scaffolding

Generate new components using Angular CLI:

```bash
# Generate a new component
ng generate component component-name

# View all available schematics
ng generate --help
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support, please open an issue in the repository or contact the maintainers.

## 🔗 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Forms Guide](https://angular.dev/guide/forms)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using Angular 21**
