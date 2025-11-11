# SA Digital License & Fine Tracker

<div align="center">
  <h3>A comprehensive mobile-first web application for South African drivers</h3>
  <p>Manage your digital driver's license, track traffic fines, and access settings in any of the 11 official South African languages</p>
</div>

## 🌟 Features

### 📱 Core Functionality
- **Profile Management**: View and manage personal driver information
- **Digital License**: Display digital driver's license with all relevant details
- **Fine Tracker**: Track and manage traffic fines with filtering and sorting capabilities
- **Settings**: Customize language preferences and appearance (dark/light mode)

### 🌍 Language Support
- **Complete translations** for all 11 official South African languages:
  - Afrikaans
  - English
  - isiNdebele
  - isiXhosa
  - isiZulu
  - Sepedi
  - Sesotho
  - Setswana
  - siSwati
  - Tshivenda
  - Xitsonga
- **Native script language names** in language selector
- **Instant language switching** without page reload
- **Persistent language preference** across sessions

### 🎨 User Experience
- **Mobile-first responsive design** optimized for all screen sizes
- **Smooth animated page transitions** using Framer Motion
- **Dark mode support** with theme persistence
- **Accessible UI** with proper ARIA labels and semantic HTML
- **Error boundary** for graceful error handling

## 🛠️ Technologies

- **React** 19.2.0 - UI framework
- **TypeScript** 5.8.2 - Type-safe development
- **Vite** 6.2.0 - Build tool and dev server
- **Framer Motion** 12.23.24 - Smooth animations
- **Tailwind CSS** - Utility-first styling (via CDN in dev)

## 📋 Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd demo-digital-liscense
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be available at `http://localhost:3000`
   - The development server supports hot module replacement (HMR)

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
demo-digital-liscense/
├── components/          # Reusable UI components
│   ├── BottomNav.tsx   # Bottom navigation bar
│   ├── ErrorBoundary.tsx  # Error boundary component
│   └── icons.tsx       # Icon components
├── context/            # React context providers
│   └── AppContext.tsx  # App state (language, theme)
├── data/               # Static data
│   ├── mockData.ts     # Demo user, license, and fines data
│   └── translations.ts # Translation keys for all languages
├── hooks/              # Custom React hooks
│   └── useTranslations.ts  # Translation hook
├── pages/              # Page components
│   ├── Profile.tsx     # User profile page
│   ├── License.tsx     # Digital license page
│   ├── FineTracker.tsx # Fines tracking page
│   └── Settings.tsx    # Settings page
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
└── index.tsx           # Application entry point
```

## 🎯 Key Features Breakdown

### Profile Page
- Display user information (name, ID number, address, phone, email)
- Profile photo display
- Clean, organized layout

### License Page
- Digital driver's license display
- License number, class, and validity dates
- License restrictions information
- Professional card-style layout

### Fine Tracker
- List of all traffic fines
- Filter by status (All, Paid, Unpaid, Disputed)
- Sort by date or amount
- Fine details (date, description, amount, location, status)
- Total and outstanding fines summary

### Settings Page
- Language selection with native script names
- Dark/light mode toggle
- App version and build information
- Organized into sections with clear headings

## 🌐 Language Support Details

The application supports all 11 official South African languages with:
- **44 translation keys** per language
- **Complete UI coverage** (navigation, labels, buttons, messages)
- **Automatic fallback** to English for missing translations
- **Immediate language switching** with smooth transitions
- **LocalStorage persistence** of language preference

## 🎨 Theming

- **Light mode**: Default theme with light backgrounds
- **Dark mode**: Dark theme with improved contrast
- **Theme persistence**: Preference saved in localStorage
- **Smooth transitions**: Theme changes are animated

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for mobile devices
- **Responsive breakpoints**: Adapts to tablet and desktop screens
- **Touch-friendly**: Large tap targets and swipe gestures
- **Maximum width constraint**: Prevents excessive stretching on large screens

## 🔧 Development

### Code Style
- TypeScript for type safety
- React functional components with hooks
- Component-driven architecture
- Clear separation of concerns

### State Management
- React Context API for global state (language, theme)
- Local component state for UI interactions
- LocalStorage for persistence

### Animation
- Framer Motion for page transitions
- Spring-based animations for smooth feel
- Direction-aware transitions (left/right swipe)

## 📝 Demo Data

The application includes realistic demo data:
- **User profile**: South African format (ID number, phone, address)
- **License**: Valid South African license format with restrictions
- **Fines**: Multiple fine records with varying statuses, amounts, and locations
- **South African locations**: Realistic cities, highways, and streets

## 🚨 Error Handling

- **Error Boundary**: Catches and displays React errors gracefully
- **Fallback UI**: User-friendly error messages
- **Console logging**: Detailed error information for debugging

## 📄 License

This project is a demonstration application and is provided as-is for educational and portfolio purposes.

## 🤝 Contributing

This is a demo project showcasing modern web development practices. Feel free to explore the codebase and learn from the implementation.

## 📞 Support

For questions or issues, please refer to the project documentation or create an issue in the repository.

---

**Built with ❤️ for South African drivers**
