# 🎨 Customization Guide - Bharat Academic Copilot

This guide shows you how to customize the project for your specific needs.

---

## 📝 Customizing Content

### 1. Change Subject & Topics

**Location**: In `index.html`, search for the topics data section

**Current Example (Mathematics)**:
```javascript
const subjects = {
  'Mathematics': [
    {
      topic: 'Calculus Integration',
      importance: 'High',
      probability: '95%',
      marks: '15-20',
      frequency: '12/15',
      notes: 'Fundamental concept. Appears in almost every paper.',
      color: '#f5576c',
    },
    // ... more topics
  ],
};
```

**To Change to Physics**:
1. Replace 'Mathematics' with 'Physics'
2. Update topic names (e.g., 'Mechanics', 'Thermodynamics')
3. Update marks and probabilities
4. Update colors if desired

**Example**:
```javascript
const subjects = {
  'Physics': [
    {
      topic: 'Mechanics - Newton\'s Laws',
      importance: 'High',
      probability: '92%',
      marks: '18-25',
      frequency: '14/15',
      notes: 'Foundation of classical physics.',
      color: '#667eea',
    },
    // ... more physics topics
  ],
};
```

### 2. Update Student Information

**Change Default Student Name**:
In `index.html`, find:
```html
<span class="text-green-700">Student</span>
```
Replace with:
```html
<span class="text-green-700">Your Name</span>
```

**Change Subject Name**:
Find:
```html
<p class="text-xs text-gray-500">Mathematics</p>
```
Replace with:
```html
<p class="text-xs text-gray-500">Your Subject</p>
```

**Change Days Left**:
Find:
```html
<span class="text-xs font-semibold text-green-700">15 days left</span>
```
Replace `15` with your actual days.

### 3. Update Exam Answers

**Location**: Search for "Sample Answers" section in `index.html`

**Current Format**:
```javascript
const sampleAnswers = {
  'Topic Name': {
    '5': {
      question: 'Question text',
      answer: 'Full answer text',
      evaluatorTips: 'Tips for evaluators',
      expectedLength: '8-10 lines',
      commonMistakes: 'Common mistakes',
    },
    // ... more mark ranges
  },
};
```

**How to Add Your Answers**:
1. Replace topic names with your subjects
2. Add question and complete answer
3. Provide evaluator-specific tips
4. List common mistakes for students

### 4. Modify Study Plan

**Location**: Study Planner section in `index.html`

**Current Structure**:
```javascript
const studyPlan = [
  {
    day: 'Day 1-2',
    focus: 'Topic Name - Focus Area',
    topics: ['Sub-topic 1', 'Sub-topic 2', 'Sub-topic 3'],
    hours: 6,
    status: 'completed',
    priority: 'High',
  },
  // ... more days
];
```

**How to Customize**:
1. Update day ranges
2. Change focus topics
3. Adjust study hours
4. Update status (completed/in-progress/not-started)
5. Set priority (High/Medium/Low)

### 5. Update Statistics

**Dashboard Stats**:
- Topics Analyzed: Find `24` and change to your number
- High Priority: Find `8` and change
- Marks Coverage: Find `78%` and change
- Study Hours: Find `24h` and change

---

## 🎨 Customizing Design

### 1. Change Color Scheme

**Primary Colors** (Purple → Pink):
Find in `index.html` `<style>` section:
```css
.gradient-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Change to your colors:
```css
.gradient-primary {
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); /* Blue → Purple */
}
```

**Accent Colors** (Red → Pink):
```css
.gradient-accent {
    background: linear-gradient(135deg, #EC4899 0%, #DC2626 100%); /* Pink → Red */
}
```

**Success Colors** (Cyan):
```css
.gradient-success {
    background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%); /* Light Cyan */
}
```

**Color Palette Suggestions**:
- Tech Startup: Indigo/Blue/Teal
- Finance: Green/Gold/Silver
- Creative: Purple/Pink/Orange
- Healthcare: Blue/Green/White

### 2. Change Fonts

**Update Font Family**:
In the `<style>` section:
```css
body {
    font-family: 'Your Font Name', system fonts;
}
```

**Popular Font Choices**:
- Modern: `'Inter', 'Segoe UI'`
- Elegant: `'Poppins', 'Quicksand'`
- Classic: `'Georgia', serif`
- Tech: `'IBM Plex Mono', monospace`

### 3. Change Logo/Icon

**Logo Location**: Replace `🎓` emoji:
```html
<span class="text-white text-lg">🎓</span>
```

With your icon/emoji:
```html
<span class="text-white text-lg">📚</span> <!-- Book icon -->
```

**Other Emojis**:
- 📊 Charts/Analysis
- 📝 Notes/Writing
- 🎯 Target/Goal
- 💡 Light bulb/Idea
- 🚀 Rocket/Launch
- ⭐ Star/Premium
- 🏆 Trophy/Achievement

### 4. Change Spacing & Sizes

**Card Padding**:
Find `.card { padding: 24px; }`
Change to: `padding: 20px;` (smaller) or `padding: 32px;` (larger)

**Border Radius**:
Find `border-radius: 16px;`
Change to: `border-radius: 12px;` (less rounded) or `border-radius: 24px;` (more rounded)

**Text Sizes**:
- Headlines: Change `text-3xl` to `text-2xl` or `text-4xl`
- Body: Change `text-sm` to `text-xs` or `text-base`
- Large: Change `text-xl` to `text-lg` or `text-2xl`

---

## 🔧 Customizing Features

### 1. Add New Pages

**In Navigation Section**:
Add button:
```html
<button onclick="goToPage('newpage')" class="nav-btn ...">
    <span>📌</span>
    <span>New Page</span>
</button>
```

**Create Page Content**:
```html
<div id="newpage" class="page p-6 animate-fade-in">
    <!-- Your content here -->
</div>
```

**Add JavaScript Function**:
```javascript
function goToPage(page) {
    // Already implemented!
}
```

### 2. Add More Topics

In the analysis/dashboard section, duplicate:
```html
<div class="p-4 border border-gray-200 rounded-xl">
    <h3 class="font-semibold">Topic Name</h3>
    <p class="text-sm text-gray-600">Details...</p>
</div>
```

### 3. Add More Answers

Duplicate the answer card section:
```html
<div class="card border-2 border-blue-200">
    <!-- Copy the question/answer structure -->
</div>
```

### 4. Modify Form Fields

**In Upload section**, duplicate:
```html
<div>
    <label>Field Name</label>
    <input type="text" placeholder="Your text">
</div>
```

---

## 📱 Responsive Design Customization

### Adjust Breakpoints

Current breakpoints:
- Mobile: < 640px (`sm`)
- Tablet: 640-1024px (`md`)
- Desktop: > 1024px (`lg`)

**Change Grid Layout**:
```html
<!-- Default: 1 col mobile, 2 col tablet, 4 col desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Change to**:
```html
<!-- New: 1 col mobile, 3 col tablet, 6 col desktop -->
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
```

### Mobile Optimization

Hide on mobile, show on desktop:
```html
<div class="hidden md:block">Desktop only</div>
```

Show on mobile, hide on desktop:
```html
<div class="md:hidden">Mobile only</div>
```

---

## 🔐 Data Management

### Sample Data Structure

**Topics**:
```javascript
{
  topic: 'Name',
  importance: 'High/Medium/Low',
  probability: '50-95%',
  marks: '5-25',
  frequency: '5/15',
  notes: 'Description',
  color: '#hexcolor',
}
```

**Answers**:
```javascript
{
  question: 'Question text',
  answer: 'Full answer',
  evaluatorTips: 'Tips',
  expectedLength: 'Lines/words',
  commonMistakes: 'Mistakes to avoid',
}
```

**Study Plans**:
```javascript
{
  day: 'Day 1-2',
  focus: 'Topic focus',
  topics: ['sub1', 'sub2'],
  hours: 6,
  status: 'completed',
  priority: 'High',
}
```

---

## 🚀 Advanced Customization

### Add Charts

The app is ready for Chart.js integration:

```html
<canvas id="topicChart"></canvas>

<script>
const ctx = document.getElementById('topicChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Topic 1', 'Topic 2', 'Topic 3'],
        datasets: [{
            label: 'Probability %',
            data: [95, 88, 85],
            backgroundColor: '#667eea',
        }],
    },
});
</script>
```

### Add Backend API

Replace sample data with API calls:

```javascript
// Old: Static data
const topics = [...];

// New: API call
fetch('/api/topics')
    .then(res => res.json())
    .then(topics => {
        // Use topics from server
    });
```

### Add User Authentication

```javascript
// Login check
const user = localStorage.getItem('user');
if (!user) {
    window.location.href = '/login';
}
```

### Add Progress Tracking

```javascript
// Save progress
localStorage.setItem('progress', {
    completedTopics: ['topic1', 'topic2'],
    currentDay: 3,
    lastUpdated: new Date(),
});
```

---

## 📋 Customization Checklist

- [ ] Change subject and topics
- [ ] Update student name
- [ ] Update exam timeline
- [ ] Add your exam answers
- [ ] Customize color scheme
- [ ] Update logo/branding
- [ ] Modify study schedule
- [ ] Add your institution name
- [ ] Update contact info
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Deploy to your server

---

## 🎯 Popular Customizations

### For College Professors
- Add multiple subjects
- Include all past papers
- Add sample answers
- Create discussion forums

### For Online Coaching Centers
- Add video lessons
- Track multiple students
- Add assignments
- Create certificates

### For Students
- Add your specific topics
- Update with recent papers
- Personalize study schedule
- Track your progress

### For Institutions
- Add institution branding
- Customize for your curriculum
- Include your exam patterns
- Add faculty profiles

---

## 📚 Resources

**Tailwind CSS Classes**:
Visit: https://tailwindcss.com/docs

**HTML/CSS Colors**:
Visit: https://www.w3schools.com/colors/

**Emoji Picker**:
Visit: https://emojipedia.org/

**Font Resources**:
Visit: https://fonts.google.com/

---

## 💡 Tips

1. **Start Small**: Change one thing at a time
2. **Test Often**: Check changes in browser
3. **Keep Backup**: Save original copy first
4. **Use DevTools**: F12 to inspect elements
5. **Document Changes**: Note what you modified
6. **Mobile Test**: Always check mobile view
7. **Browser Test**: Try multiple browsers

---

## 🆘 Common Issues

**Colors Not Changing?**
- Hard refresh browser (Ctrl+Shift+R)
- Check CSS syntax is correct
- Use `!important` if needed

**Layout Broken?**
- Check grid classes are correct
- Ensure closing tags
- Verify CSS is loaded

**Text Overlapping?**
- Increase padding/margin
- Reduce font size
- Increase container width

**Mobile Not Responsive?**
- Check viewport meta tag
- Use responsive classes correctly
- Test in actual mobile device

---

## 🎉 Ready to Customize!

Your Bharat Academic Copilot is fully customizable. Start with content changes, then move to design. Happy customizing! 

**Need help? Check the main README.md file.**
