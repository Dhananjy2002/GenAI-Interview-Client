# Interview Master - Client

This is the frontend application for **Interview Master**, an AI-powered platform designed to provide personalized interview preparation based on a user's resume and a target job description. The application is built with **React**, **Vite**, and styled extensively using **Tailwind CSS**.

## ✨ Features
- **User Authentication:** Secure JWT-based authentication (Login, Register flows).
- **Dashboard & Upload:** A premium UI where users can seamlessly upload their resumes (PDFs) and paste job requirements.
- **AI Report Dashboard:** A comprehensive, interactive dashboard explaining technical/behavioral questions, providing a day-by-day roadmap, and analyzing skill gaps with a custom SVG match score ring.
- **Reports History:** A unified view showing past generated reports with quick accessibility.

## 📁 Folder Structure & File Architecture

The codebase is organized adopting a clean **Feature-Based Architecture**, keeping components, services, and hooks encapsulated by domain.

```
client/
├── package.json                    # Project dependencies and npm scripts
├── package-lock.json               # Locked versions of dependencies
├── vite.config.js                  # Vite configuration for dev server and build
├── eslint.config.js                # ESLint configuration for code quality
├── index.css                       # Tailwind CSS entry directives and global styles
│
├── src/
│   ├── main.jsx                    # Application entry point, renders App into DOM
│   ├── App.jsx                     # Root component wrapping RouterProvider
│   ├── app.routes.jsx              # React Router v7 route definitions (all pages mapped)
│   │
│   ├── pages/
│   │   └── Home.jsx                # Main landing/dashboard page with resume upload form
│   │
│   ├── utils/
│   │   └── constants.js            # Global static variables (API_BASE_URL)
│   │
│   └── features/                   # Domain-specific feature modules
│       ├── auth/                   # Authentication module
│       │   ├── auth.context.jsx    # React Context provider managing authentication state
│       │   ├── components/
│       │   │   ├── Protected.jsx   # Route guard component for protected pages
│       │   │   └── Loader.jsx      # Full-screen loading spinner component
│       │   ├── hooks/
│       │   │   └── useAuth.js      # Custom hook for authentication actions
│       │   ├── pages/
│       │   │   ├── Login.jsx       # User login page with form validation
│       │   │   └── Register.jsx    # User registration page with form validation
│       │   └── services/
│       │       └── auth.api.js     # Axios API calls for auth endpoints
│       │
│       └── ai/                     # Interview Master AI report module
│           ├── interview.context.jsx # Context for managing interview state
│           ├── components/
│           │   ├── InterviewReport.jsx    # Main report dashboard orchestrator
│           │   ├── NavigationBar.jsx      # Top navigation bar for report pages
│           │   ├── SectionsNav.jsx        # Left sidebar navigation (Technical/Behavioral/etc)
│           │   ├── ContentHeader.jsx      # Header section of report content
│           │   ├── QuestionsSection.jsx   # Displays interview questions (technical/behavioral)
│           │   ├── RoadmapSection.jsx     # Day-by-day preparation roadmap
│           │   ├── MatchScore.jsx         # SVG-based match score visualization (0-100)
│           │   ├── SkillGaps.jsx          # Lists skill gaps with severity levels
│           │   ├── AccordionItem.jsx      # Reusable accordion component for Q&A
│           │   ├── CircularProgress.jsx   # Circular progress indicator component
│           │   ├── LoadingState.jsx       # Loading skeleton/spinner UI
│           │   ├── ErrorState.jsx         # Error message display component
│           │   └── ReportsList.jsx        # Historical reports listing page
│           ├── hooks/
│           │   └── useInterview.js        # Custom hook for interview report logic
│           └── services/
│               └── interview.api.js       # Axios API calls for interview endpoints
│
└── public/                          # Static assets (if any)
```

## 📄 Detailed File Descriptions

### Root Configuration Files

#### `package.json`
- **Purpose:** Defines project metadata, dependencies, and npm scripts
- **Key Scripts:**
  - `npm run dev` - Start Vite dev server (port 5173)
  - `npm run build` - Build for production
  - `npm run lint` - Run ESLint checks
  - `npm run preview` - Preview production build
- **Dependencies:**
  - `react`, `react-dom` - UI framework
  - `react-router` - Client-side routing (v7)
  - `axios` - HTTP client
  - `tailwindcss`, `@tailwindcss/vite` - Styling
  - `react-toastify` - Toast notifications

#### `vite.config.js`
- **Purpose:** Configuration for Vite bundler and dev server
- **Configures:** Development server port, React plugin, build options

#### `eslint.config.js`
- **Purpose:** Code quality rules and linting standards
- **Includes:** React, React Hooks, and React Refresh rules

#### `index.css`
- **Purpose:** Tailwind CSS directives and global styles
- **Contains:** `@tailwind` directives for utilities, components, and base styles

### Entry Points

#### `src/main.jsx`
- **Purpose:** Application entry point
- **Functions:**
  - Renders `App` component into DOM
  - Wraps app with AuthContext provider
  - Sets up Toastify for notifications

#### `src/App.jsx`
- **Purpose:** Root component wrapper
- **Functions:**
  - Renders `RouterProvider` with defined routes
  - Applies global layout

#### `src/app.routes.jsx`
- **Purpose:** Centralized React Router configuration
- **Routes:**
  - `/` → Home (protected) - Main dashboard
  - `/report` → InterviewReport (protected) - New report view
  - `/report/:id` → InterviewReport (protected) - Specific report view
  - `/reports` → ReportsList (protected) - All reports view
  - `/login` → Login (public)
  - `/register` → Register (public)

### Pages

#### `src/pages/Home.jsx`
- **Purpose:** Main landing/dashboard page
- **Functions:**
  - Resume file upload form (PDF)
  - Job description input field
  - Self-description input field
  - Calls interview API to generate report
  - Displays loading/error states
  - Navigates to report on success

### Utilities

#### `src/utils/constants.js`
- **Purpose:** Global constants and configuration
- **Contains:**
  - `API_BASE_URL` - Backend API URL (default: `http://localhost:7611/api/v1`)

### Features: Authentication Module

#### `src/features/auth/auth.context.jsx`
- **Purpose:** React Context for global authentication state
- **State Management:**
  - User object (id, username, email, etc.)
  - Authentication status
  - Loading state
- **Methods:**
  - `login()` - Authenticate user
  - `register()` - Create new account
  - `logout()` - Clear session
  - `getMe()` - Fetch current user
- **Features:**
  - Persistent rehydration from localStorage
  - Cookie-based token handling
  - Auto-login on page refresh if session exists

#### `src/features/auth/components/Protected.jsx`
- **Purpose:** Route guard wrapper component
- **Functions:**
  - Checks if user is authenticated
  - Shows loader while auth state is being determined
  - Redirects to `/login` if not authenticated
  - Renders children if authenticated

#### `src/features/auth/components/Loader.jsx`
- **Purpose:** Full-screen loading spinner
- **Functions:**
  - Displays centered, animated loading state
  - Used during authentication checks

#### `src/features/auth/hooks/useAuth.js`
- **Purpose:** Custom hook for authentication logic
- **Exports:**
  - `login(email, password)` - Login user
  - `register(username, email, password)` - Register new user
  - `logout()` - Logout and clear session
  - `getMe()` - Fetch authenticated user details
  - State: `user`, `loading`, `error`, `isAuthenticated`

#### `src/features/auth/pages/Login.jsx`
- **Purpose:** User login page
- **Features:**
  - Email and password input fields
  - Form validation
  - Error message display
  - Link to registration page
  - Redirects to home on successful login

#### `src/features/auth/pages/Register.jsx`
- **Purpose:** User registration page
- **Features:**
  - Username, email, password input fields
  - Form validation (password confirmation)
  - Error message display
  - Link to login page
  - Creates new user account

#### `src/features/auth/services/auth.api.js`
- **Purpose:** Axios HTTP client for auth endpoints
- **Exports:**
  - `loginUser(email, password)` - POST /auth/login
  - `registerUser(username, email, password)` - POST /auth/register
  - `logoutUser()` - POST /auth/logout
  - `getAuthenticatedUser()` - GET /auth/me
- **Configuration:** withCredentials enabled for cookies

### Features: Interview AI Module

#### `src/features/ai/interview.context.jsx`
- **Purpose:** React Context for interview report state
- **State:**
  - `currentReport` - Currently displayed report
  - `reports` - List of all user reports
  - `loading` - Loading state
  - `error` - Error messages
- **Methods:**
  - `generateReport(resume, jobDescription, selfDescription)` - Create new report
  - `getAllReports()` - Fetch user's all reports
  - `fetchReportById(id)` - Fetch specific report
  - `deleteReport(id)` - Remove a report

#### `src/features/ai/components/InterviewReport.jsx`
- **Purpose:** Main orchestrator component for report dashboard
- **Functions:**
  - Fetches report by ID from URL params or location state
  - Manages active section state (Technical, Behavioral, Roadmap, etc.)
  - Renders all sub-components
  - Handles loading and error states
  - Displays: Match score, questions, roadmap, skill gaps

#### `src/features/ai/components/NavigationBar.jsx`
- **Purpose:** Top navigation for report pages
- **Features:**
  - Job title display
  - Back button to reports list
  - User profile/logout button

#### `src/features/ai/components/SectionsNav.jsx`
- **Purpose:** Left sidebar navigation menu
- **Sections:**
  - Technical Questions
  - Behavioral Questions
  - Preparation Roadmap
  - Skill Gaps
  - Match Score
- **Features:** Click to navigate between sections, active state highlighting

#### `src/features/ai/components/ContentHeader.jsx`
- **Purpose:** Header section for report content
- **Displays:**
  - Job title
  - Company info (if available)
  - Report generation date

#### `src/features/ai/components/QuestionsSection.jsx`
- **Purpose:** Displays interview questions (technical and behavioral)
- **Features:**
  - Maps through questions array
  - Shows question, intention, and suggested answer
  - Accordion-style expandable Q&A
  - Uses AccordionItem component

#### `src/features/ai/components/RoadmapSection.jsx`
- **Purpose:** Day-by-day preparation roadmap
- **Features:**
  - Displays structured preparation plan
  - Shows daily tasks and learning objectives
  - Progress tracking visualization

#### `src/features/ai/components/MatchScore.jsx`
- **Purpose:** Visual match score indicator
- **Features:**
  - SVG circular progress ring (0-100 scale)
  - Color-coded (red/yellow/green based on score)
  - Shows percentage and match quality text
  - Custom animation

#### `src/features/ai/components/SkillGaps.jsx`
- **Purpose:** Lists candidate's skill gaps
- **Features:**
  - Skill name display
  - Severity indicator (Low, Medium, High)
  - Color-coded severity badges
  - Suggested learning resources

#### `src/features/ai/components/AccordionItem.jsx`
- **Purpose:** Reusable accordion component
- **Features:**
  - Click to expand/collapse
  - Smooth animations
  - Customizable header and content
  - Used for Q&A, skill gaps, roadmap items

#### `src/features/ai/components/CircularProgress.jsx`
- **Purpose:** Circular progress indicator
- **Features:**
  - SVG-based circular progress ring
  - Customizable percentage
  - Color customization
  - Used in MatchScore component

#### `src/features/ai/components/LoadingState.jsx`
- **Purpose:** Loading skeleton during report fetch
- **Features:**
  - Animated skeleton loaders
  - Matches report layout structure
  - Better UX than blank state

#### `src/features/ai/components/ErrorState.jsx`
- **Purpose:** Error message display
- **Features:**
  - Shows error message
  - Retry button
  - Back to reports link

#### `src/features/ai/components/ReportsList.jsx`
- **Purpose:** Displays all user-generated reports
- **Features:**
  - List of all reports with job titles
  - Generation date display
  - Quick access to view full report
  - Delete report option
  - Pagination (if many reports)

#### `src/features/ai/hooks/useInterview.js`
- **Purpose:** Custom hook for interview logic
- **Exports:**
  - `generateReport(resume, jobDescription, selfDescription)` - Generate new report
  - `getAllReports()` - Get all reports
  - `fetchReportById(id)` - Get specific report
  - State: `currentReport`, `reports`, `loading`, `error`

#### `src/features/ai/services/interview.api.js`
- **Purpose:** Axios HTTP client for interview endpoints
- **Exports:**
  - `generateReport({ resume, jobDescription, selfDescription })` - POST /interview/generate-report (multipart/form-data)
  - `getAllReports()` - GET /interview/get-all-reports
  - `getReportById(id)` - GET /interview/get-report/:id
- **Configuration:** withCredentials enabled, handles file uploads

## 🛠 Tech Stack
* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS v4 (Glassmorphism, gradients, modern utility classes)
* **Routing:** React Router DOM v7
* **HTTP Client:** Axios (configured with interceptors and cross-origin cookies)
* **Notifications:** React Toastify
* **Code Quality:** ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed
- Backend server running on port 7611

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables (optional, defaults to localhost):
   ```bash
   # .env.local or .env.development
   VITE_API_BASE_URL=http://localhost:7611/api/v1
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## 🔐 Authentication Flow

1. User visits app → Protected route checks auth context
2. If not authenticated → Redirected to `/login`
3. User enters credentials → Calls `auth.api.js` login endpoint
4. Backend returns JWT token in HttpOnly cookie
5. Token stored in context state and localStorage
6. User redirected to home page
7. Subsequent requests include cookie automatically (withCredentials: true)
8. Protected routes verify token before rendering

## 📊 Interview Report Flow

1. User uploads resume PDF + enters job description
2. Home.jsx calls `generateReport()` from useInterview hook
3. Interview API sends multipart form data to backend
4. Backend processes with Google Generative AI
5. Returns structured report with questions, roadmap, skill gaps, match score
6. Report displayed in InterviewReport component
7. User can navigate between sections using SectionsNav
8. Can view historical reports in ReportsList

## 🎨 Styling Guidelines

- **Framework:** Tailwind CSS v4
- **Colors:** Blue/Indigo/Slate palette for professional look
- **Spacing:** 8px base unit (p-2 = 8px, p-4 = 16px, etc.)
- **Components:** Glass morphism effects with backdrop blur
- **Responsive:** Mobile-first approach with sm:, md:, lg:, xl: breakpoints

## 📱 Key Components Hierarchy

```
App
├── Router (React Router)
│   ├── /login → Login
│   ├── /register → Register
│   ├── / → Protected → Home
│   ├── /report → Protected → InterviewReport
│   ├── /report/:id → Protected → InterviewReport
│   └── /reports → Protected → ReportsList
│
AuthContext
├── Provides: user, isAuthenticated, loading, login, register, logout
└── Wraps: Entire app (in main.jsx)

InterviewContext
├── Provides: currentReport, reports, loading, error
└── Wraps: App components needing interview data
```

## 🐛 Debugging Tips

1. **Authentication Issues:** Check browser DevTools → Application → Cookies for `token` cookie
2. **API Calls Failing:** Ensure backend is running on port 7611 and VITE_API_BASE_URL is correct
3. **Routes Not Working:** Check app.routes.jsx for correct path definitions
4. **Styling Issues:** Check if Tailwind CSS is properly imported in index.css

## 📝 Notes

- The app uses React Router v7 with the new data-fetching patterns
- All API calls include `withCredentials: true` for cookie-based authentication
- Context API used for state management (no Redux)
- Components follow functional component pattern with hooks
- PDF upload is handled via FormData multipart encoding
