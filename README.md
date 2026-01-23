# Bharat Academic Copilot

An **AI-powered exam intelligence system** designed specifically for Indian college students to optimize their exam preparation through pattern recognition and intelligent study planning.


## 
**Video url to the website preview**  - https://vimeo.com/1157274780?share=copy&fl=sv&fe=ci

## 🎯 Features

### 📊 Exam Pattern Intelligence Engine (EPIE)
- **Topic Importance Scoring**: Analyzes past exam papers to identify high-probability topics
- **Probability Predictions**: AI-calculated likelihood of each topic appearing in your exam
- **Marks Distribution Analysis**: Understands expected marks range for each topic
- **Frequency Tracking**: Shows how many times a topic appeared across past papers

### 📝 Exam-Ready Answer Generator
- **Evaluator-Optimized Answers**: Generated answers tailored to Indian university evaluation standards
- **Marking System personalized option**: Students can choose what type of questions they want and for how many marks based on their exam system
- **Structured Formats**: Point-wise answers matching actual exam answer sheet expectations
- **Length Suggestions**: Recommended word count based on marks
- **Common Mistakes Guide**: Tips to avoid typical evaluation pitfalls
- **Batch Generation**: Generate answers for all high-priority topics at once

### 📅 Personalized Study Planner
- **AI-Powered Scheduling**: Creates day-wise study plans optimized for maximum marks
- **Adaptive Planning**: Adjusts based on available days and your pace
- **Priority-Based Distribution**: Allocates more time to high-probability topics
- **Multiple Study Plans**: Choose between Smart, Intensive, or Relaxed plans
- **Daily Schedules**: Sample timetables with break recommendations

### 🎨 Modern, Gen-Z Friendly UI
- **Beautiful Gradients & Animations**: Smooth transitions and visual feedback
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Aware**: Adapts to system preferences
- **Accessible**: WCAG compliant with keyboard navigation support
- **Fast & Smooth**: Optimized performance with zero lag
- **Notification with motivational to keep you mentally sane**

## 🚀 Getting Started

###Clone the repo and run on your system 
```bash

### Use Python Server (Recommended)
```bash
# Navigate to project folder
cd c:\bharat-academic-copilot

# Start Python HTTP server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### With Node.js/npm (For Development)
```bash
cd c:\bharat-academic-copilot
npm install
npm run dev
```

## OpenAI Integration (API Key)
Add your own api key - (with no hustle only go to the app website and then follow the instructions below)
- Why add your own key? You control usage/costs, keep your key private (local browser storage, never in the repo), and can rotate it anytime if you suspect exposure.
- What it enables: Answer generation, study plans, and topic analysis powered by OpenAI on your quota.
- Where to add it: Open the app → Settings → “OpenAI Integration” → paste your key into “API Key”. Stored locally; nothing is hardcoded.
- Get a key: Create one in your OpenAI dashboard → API Keys → copy it and keep it secret.
- Format: Standard secret starting with sk-... (no quotes/spaces).
- Troubleshooting: If calls fail, re-paste the key, confirm your OpenAI credits/access, and rotate the key if you see auth errors.


## 📁 Project Structure

```
bharat-academic-copilot/
├── index.html              # Complete standalone app
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS setup
├── src/                    # React source files (optional)
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css           # Global styles
└── README.md              # This file
```

## 🎓 Core Functionality

### Dashboard
- Overview of analyzed topics
- High-priority topics list with marks distribution
- Quick stats (topics analyzed, high priority count, marks coverage)
- Quick action buttons for common tasks

### Topic Analysis
- Complete breakdown of all identified topics
- Probability scoring for each topic
- Expected marks range
- Frequency in past papers (e.g., 12/15 papers)
- Smart study recommendations

### Answer Generator
- Select topic and marks
- AI generates exam-ready answers
- Evaluator tips and common mistakes
- Copy-to-clipboard functionality
- Batch PDF generation

### Study Planner
- 15-day personalized study schedule
- Multiple plan types (Smart, Intensive, Relaxed)
- Progress tracking
- Daily schedule templates
- Download as PDF

### File Upload (Initial Setup)
- Upload syllabus PDF
- Upload past exam papers (2-3 years)
- Optional notes upload
- Automatic analysis and processing

## 💡 Key Insights

The system uses **Exam Pattern Intelligence** to:
1. **Identify Patterns**: Analyzes questions across 15+ past papers
2. **Calculate Probability**: Uses statistical analysis to predict topic likelihood
3. **Optimize Time**: Allocates study hours based on marks weightage
4. **Guarantee Coverage**: Focuses on topics covering 70-85% of exam marks
5. **Maximize Scores**: Teaches evaluator-friendly answer formats

## 🎨 Design Features

- **Purple & Pink Primary Colors**: Modern, energetic gradient scheme
- **Clean Typography**: Readable fonts with proper hierarchy
- **Smooth Animations**: Fade-in and slide-up effects (no jarring transitions)
- **Mobile-First Design**: Works perfectly on all screen sizes
- **Dark & Light Icons**: Properly contrasted for accessibility
- **Interactive Elements**: Buttons have hover states and visual feedback

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js (ready to integrate)
- **Framework**: React (optional, JSX files included)
- **Build Tool**: Vite
- **Icons**: Custom SVG icons

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Exam Prep Tips (Built-in)

The app includes recommendations for:
- Topic prioritization (60% on High priority)
- Study duration (3.5 hours/day average)
- Answer length matching
- Common evaluation mistakes to avoid
- Daily schedule optimization

## 📊 Analysis Features

Each topic shows:
- **Probability Score**: 45-95% likelihood of appearing
- **Expected Marks**: Range (e.g., 15-20)
- **Question Type**: Define, Explain, Numerical, Derive
- **Frequency**: Papers appeared in (e.g., 12/15)
- **Notes**: Context-specific insights

## 🎓 Perfect For

- **College Students**: Any university student preparing for exams
- **Competitive Exams**: JEE, NEET, UPSC, Bank exams
- **Semester Exams**: Regular university semester/unit tests
- **Any Subject**: Mathematics, Physics, Chemistry, Biology, CS, Humanities

## 📝 Customization

Edit `index.html` to:
- Change subject/topics
- Update exam timeline
- Modify study schedules
- Add your own questions and answers
- Customize colors and branding

## 🌐 Multilingual (Future Scope)

Ready to extend with:
- Hindi/Hinglish explanations
- Regional language support
- Localized study materials

## 💬 Features Coming Soon

- 📱 Mobile app (React Native)
- 📊 Advanced analytics & progress tracking
- 🎓 Peer comparison & leaderboards
- 📹 Integrated video lessons
- 🗣️ Voice-to-text notes

## 📝 License

This project is created for educational purposes. Free to use and modify for personal/institutional use.

## 👨‍💻 Contributing

Found a bug? Have suggestions?
- Report issues and improvements
- Contribute UI/UX enhancements
- Add new features and topics
- Help with translations

## 🎉 Get Started Now!

1. **Open `index.html`** in your browser
2. **Explore the Dashboard**
3. **Check Topic Analysis** to see high-probability topics
4. **Create Your Study Plan** for maximum marks
5. **Generate Exam Answers** ready for your evaluators
6. **Start Studying** with confidence! 💪

---

**Made with ❤️ for Indian students.**

*Study smarter, not harder. Conquer your exams with Bharat Academic Copilot!*
