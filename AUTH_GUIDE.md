# 🔐 Authentication & Settings System

## Overview

Bharat Academic Copilot now includes a complete authentication system with user registration, login, profile management, and comprehensive settings.

## ✨ Features Added

### 1. **Login/Signup System**
- Beautiful welcome page that shows first when opening the app
- User registration with email, username, and password
- Secure login with remember me option
- Password validation (minimum 6 characters)
- Duplicate email/username detection
- Auto-login after signup

### 2. **Settings Modal** ⚙️
The settings button now works and includes:

#### **Dark Mode** 🌙
- Toggle between light and dark themes
- Preference saved across sessions
- Smooth transition animations
- Optimized for readability

#### **Profile Settings** 👤
- Edit full name
- Update email address
- Change username
- Modify primary subject
- Save changes with validation

#### **Notifications** 🔔
- Enable/disable study reminders
- Toggle saved in localStorage
- Ready for browser notifications API

#### **Language Selection** 🌍
- English (default)
- Hindi (हिंदी)
- Tamil (தமிழ்)
- Telugu (తెలుగు)
- Bengali (বাংলা)

#### **Data Management** 💾
- **Clear Cache**: Free up storage space
- **Export Data**: Download all your data as JSON
- **Privacy Policy**: View privacy terms

#### **About** ℹ️
- Version information
- App description
- Credits

#### **Logout** 🚪
- Secure logout with confirmation
- Returns to login page
- Preserves account data

#### **Delete Account** 🗑️
- Permanently delete account
- Double confirmation required
- Type "DELETE" to confirm
- Removes all user data

## 🗄️ Backend System

### Storage Structure
All data is stored in **localStorage** for now:

```javascript
// Users database
localStorage.users = [
  {
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
    password: "******", // Encoded
    subject: "Mathematics",
    createdAt: "2026-01-20T..."
  }
]

// Current logged-in user
localStorage.currentUser = {
  name: "John Doe",
  email: "john@example.com",
  username: "johndoe",
  subject: "Mathematics"
}

// Settings
localStorage.darkMode = "true/false"
localStorage.notifications = "true/false"
```

### Backend API (backend.js)
A complete backend class is provided with:

- ✅ User management (create, read, update, delete)
- ✅ Authentication
- ✅ Study plan storage
- ✅ Progress tracking
- ✅ Answer generation history
- ✅ Data export
- ✅ Database statistics

## 🚀 How It Works

### First Time User Flow
1. User opens the app → **Login/Signup page appears**
2. User clicks "Sign Up"
3. Fills registration form (name, email, username, password, subject)
4. Accepts terms and conditions
5. Clicks "Create Account"
6. Account created and auto-logged in
7. **Main app appears** with personalized greeting

### Returning User Flow
1. User opens the app
2. If already logged in → **Main app appears directly**
3. If not logged in → **Login page appears**
4. Enter credentials and login
5. Main app loads with saved preferences

### Settings Usage
1. Click **⚙️ Settings** button in sidebar
2. Modal opens with all options
3. Toggle dark mode, notifications, etc.
4. Click profile settings to edit info
5. Logout or delete account from settings

## 🎨 UI/UX Improvements

### Login/Signup Page
- Beautiful gradient background
- Centered modal design
- Smooth transitions between login and signup
- Password visibility toggle ready
- Responsive on all devices

### Settings Modal
- Clean, organized layout
- Section separators
- Color-coded actions (orange for logout, red for delete)
- Toggle switches with smooth animations
- Confirmation dialogs for destructive actions

### Dark Mode
- Applies to entire app
- Header, sidebar, cards all adapt
- Gradient backgrounds adjusted
- Text colors optimized for contrast
- Smooth transition effect

## 🔒 Security Features

### Current Implementation
- Password encoding (basic)
- Duplicate prevention
- Session management
- Data validation
- Confirmation for destructive actions

### Production Recommendations
```javascript
// Replace localStorage with backend API
// Use bcrypt for password hashing
// Implement JWT tokens
// Add CSRF protection
// Enable HTTPS only
// Add rate limiting
// Implement 2FA (optional)
```

## 📱 Responsive Design

All authentication and settings features work perfectly on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

## 🎯 Testing the Features

### Test Signup
1. Open index.html
2. Click "Sign Up"
3. Fill:
   - Name: Test User
   - Email: test@example.com
   - Username: testuser
   - Password: test123
   - Subject: Mathematics
4. Check "I agree to terms"
5. Click "Create Account"
6. ✅ You should see the main app with "Hey, Test!"

### Test Settings
1. Click ⚙️ Settings in sidebar
2. Toggle dark mode → App turns dark
3. Click Profile Settings → Edit modal opens
4. Change name and save → UI updates
5. Click Export Data → JSON file downloads
6. Click Logout → Returns to login

### Test Delete Account
1. Open Settings
2. Click "Delete Account"
3. Confirm first prompt
4. Type "DELETE" in second prompt
5. ✅ Account deleted, back to login

## 🔧 Customization

### Change Default Subject Options
Edit line ~60 in index.html:
```html
<option value="Your Subject">Your Subject</option>
```

### Add More Languages
Edit line ~175 in index.html:
```html
<option value="code">Language Name</option>
```

### Modify Dark Mode Colors
Edit CSS section (lines ~110-125):
```css
body.dark-mode {
    background: your-gradient;
}
```

## 📊 Data Export Format

When clicking "Export Data", you get:
```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "subject": "Mathematics"
  },
  "exportedAt": "2026-01-20T12:00:00.000Z",
  "settings": {
    "darkMode": "true",
    "notifications": "false"
  }
}
```

## 🚀 Future Enhancements

### Phase 1 (Current) ✅
- ✅ Local storage backend
- ✅ Basic authentication
- ✅ Settings modal
- ✅ Dark mode
- ✅ Profile management

### Phase 2 (Planned)
- [ ] Real backend API (Node.js/Express)
- [ ] MongoDB/PostgreSQL database
- [ ] Password reset via email
- [ ] Email verification
- [ ] Profile pictures
- [ ] Social login (Google, Facebook)

### Phase 3 (Advanced)
- [ ] Two-factor authentication
- [ ] Session management
- [ ] Activity logs
- [ ] Admin dashboard
- [ ] Backup/restore functionality
- [ ] Multi-device sync

## 🐛 Known Limitations

1. **localStorage limits**: ~5-10MB max storage
2. **No server sync**: Data only on one device
3. **Basic password encoding**: Not production-secure
4. **No email verification**: Any email works
5. **No forgot password**: Must remember password

## 💡 Tips

- **Data Persistence**: Your data stays even after closing browser
- **Multiple Accounts**: You can create multiple accounts
- **Switching Accounts**: Logout and login with different credentials
- **Backup**: Use "Export Data" regularly
- **Privacy**: All data stays on your device

## 🎓 For Developers

### File Structure
```
bharat-academic-copilot/
├── index.html           # Main app with auth
├── backend.js           # Backend API class
├── AUTH_GUIDE.md        # This file
└── ... other files
```

### Key Functions
```javascript
// Authentication
handleLogin()           // Process login
handleSignup()          // Process signup
handleLogout()          // Logout user
showMainApp(userData)   // Show app after login

// Settings
openSettings()          // Open settings modal
toggleDarkMode()        // Toggle theme
saveProfile()           // Update profile
confirmDeleteAccount()  // Delete account

// Backend (backend.js)
bharatBackend.createUser(userData)
bharatBackend.authenticateUser(email, password)
bharatBackend.updateUser(userId, updates)
bharatBackend.deleteUser(userId)
```

## 📞 Support

If you encounter any issues:
1. Check browser console (F12)
2. Clear browser cache
3. Try incognito mode
4. Check localStorage in DevTools

## ✅ Checklist

Before deploying:
- [ ] Test signup flow
- [ ] Test login flow
- [ ] Test all settings options
- [ ] Test dark mode
- [ ] Test profile editing
- [ ] Test logout
- [ ] Test delete account
- [ ] Test on mobile
- [ ] Verify data persistence
- [ ] Export data successfully

---

**Made with ❤️ for Bharat Academic Copilot**

All authentication features are now live and ready to use! 🎉
