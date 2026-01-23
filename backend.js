// Simple Backend for Bharat Academic Copilot
// This file provides a localStorage-based backend simulation
// In production, replace with actual server-side code

class BharatBackend {
    constructor() {
        this.initializeDatabase();
    }

    // Initialize database structure
    initializeDatabase() {
        if (!localStorage.getItem('bharat_db_initialized')) {
            localStorage.setItem('users', JSON.stringify([]));
            localStorage.setItem('study_plans', JSON.stringify({}));
            localStorage.setItem('user_progress', JSON.stringify({}));
            localStorage.setItem('exam_answers', JSON.stringify({}));
            localStorage.setItem('bharat_db_initialized', 'true');
        }
    }

    // ==================== USER MANAGEMENT ====================

    // Create new user
    createUser(userData) {
        const users = this.getUsers();
        
        // Check if user exists
        const exists = users.find(u => 
            u.email === userData.email || u.username === userData.username
        );
        
        if (exists) {
            return { success: false, error: 'User already exists' };
        }

        // Hash password (in production, use proper encryption)
        const newUser = {
            id: this.generateId(),
            ...userData,
            password: btoa(userData.password), // Basic encoding (use bcrypt in production)
            createdAt: new Date().toISOString(),
            lastLogin: null
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        return { success: true, user: this.sanitizeUser(newUser) };
    }

    // Authenticate user
    authenticateUser(identifier, password) {
        const users = this.getUsers();
        const user = users.find(u => 
            (u.email === identifier || u.username === identifier) && 
            u.password === btoa(password)
        );

        if (!user) {
            return { success: false, error: 'Invalid credentials' };
        }

        // Update last login
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));

        return { success: true, user: this.sanitizeUser(user) };
    }

    // Get all users (admin only)
    getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    // Get user by ID
    getUserById(userId) {
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        return user ? this.sanitizeUser(user) : null;
    }

    // Update user profile
    updateUser(userId, updates) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            return { success: false, error: 'User not found' };
        }

        // Don't allow certain fields to be updated
        delete updates.id;
        delete updates.createdAt;

        users[userIndex] = { ...users[userIndex], ...updates };
        localStorage.setItem('users', JSON.stringify(users));

        return { success: true, user: this.sanitizeUser(users[userIndex]) };
    }

    // Delete user
    deleteUser(userId) {
        const users = this.getUsers();
        const filteredUsers = users.filter(u => u.id !== userId);
        
        localStorage.setItem('users', JSON.stringify(filteredUsers));
        
        // Also delete user's related data
        this.deleteUserData(userId);
        
        return { success: true };
    }

    // Remove sensitive data from user object
    sanitizeUser(user) {
        const { password, ...sanitized } = user;
        return sanitized;
    }

    // ==================== STUDY PLANS ====================

    // Save study plan for user
    saveStudyPlan(userId, plan) {
        const plans = JSON.parse(localStorage.getItem('study_plans') || '{}');
        plans[userId] = {
            ...plan,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem('study_plans', JSON.stringify(plans));
        return { success: true, plan: plans[userId] };
    }

    // Get study plan for user
    getStudyPlan(userId) {
        const plans = JSON.parse(localStorage.getItem('study_plans') || '{}');
        return plans[userId] || null;
    }

    // ==================== USER PROGRESS ====================

    // Save user progress
    saveProgress(userId, progress) {
        const allProgress = JSON.parse(localStorage.getItem('user_progress') || '{}');
        
        if (!allProgress[userId]) {
            allProgress[userId] = [];
        }

        allProgress[userId].push({
            ...progress,
            timestamp: new Date().toISOString()
        });

        localStorage.setItem('user_progress', JSON.stringify(allProgress));
        return { success: true };
    }

    // Get user progress
    getProgress(userId) {
        const allProgress = JSON.parse(localStorage.getItem('user_progress') || '{}');
        return allProgress[userId] || [];
    }

    // ==================== EXAM ANSWERS ====================

    // Save generated answers
    saveAnswer(userId, topic, marks, answer) {
        const answers = JSON.parse(localStorage.getItem('exam_answers') || '{}');
        
        if (!answers[userId]) {
            answers[userId] = {};
        }

        const key = `${topic}_${marks}`;
        answers[userId][key] = {
            topic,
            marks,
            answer,
            generatedAt: new Date().toISOString()
        };

        localStorage.setItem('exam_answers', JSON.stringify(answers));
        return { success: true };
    }

    // Get user's saved answers
    getAnswers(userId) {
        const answers = JSON.parse(localStorage.getItem('exam_answers') || '{}');
        return answers[userId] || {};
    }

    // ==================== UTILITIES ====================

    // Generate unique ID
    generateId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Delete all user data
    deleteUserData(userId) {
        // Delete study plans
        const plans = JSON.parse(localStorage.getItem('study_plans') || '{}');
        delete plans[userId];
        localStorage.setItem('study_plans', JSON.stringify(plans));

        // Delete progress
        const progress = JSON.parse(localStorage.getItem('user_progress') || '{}');
        delete progress[userId];
        localStorage.setItem('user_progress', JSON.stringify(progress));

        // Delete answers
        const answers = JSON.parse(localStorage.getItem('exam_answers') || '{}');
        delete answers[userId];
        localStorage.setItem('exam_answers', JSON.stringify(answers));
    }

    // Export user data
    exportUserData(userId) {
        return {
            user: this.getUserById(userId),
            studyPlan: this.getStudyPlan(userId),
            progress: this.getProgress(userId),
            answers: this.getAnswers(userId),
            exportedAt: new Date().toISOString()
        };
    }

    // Get database statistics
    getStats() {
        const users = this.getUsers();
        const plans = JSON.parse(localStorage.getItem('study_plans') || '{}');
        const progress = JSON.parse(localStorage.getItem('user_progress') || '{}');
        const answers = JSON.parse(localStorage.getItem('exam_answers') || '{}');

        return {
            totalUsers: users.length,
            totalPlans: Object.keys(plans).length,
            totalProgress: Object.values(progress).reduce((sum, arr) => sum + arr.length, 0),
            totalAnswers: Object.values(answers).reduce((sum, obj) => sum + Object.keys(obj).length, 0),
            storageUsed: new Blob([localStorage.getItem('users') || '']).size + 
                         new Blob([localStorage.getItem('study_plans') || '']).size +
                         new Blob([localStorage.getItem('user_progress') || '']).size +
                         new Blob([localStorage.getItem('exam_answers') || '']).size
        };
    }

    // Clear all data (for testing)
    clearAllData() {
        localStorage.removeItem('users');
        localStorage.removeItem('study_plans');
        localStorage.removeItem('user_progress');
        localStorage.removeItem('exam_answers');
        localStorage.removeItem('bharat_db_initialized');
        this.initializeDatabase();
    }
}

// Initialize backend
const bharatBackend = new BharatBackend();

// For testing purposes - you can remove this in production
console.log('🎓 Bharat Academic Copilot Backend Initialized');
console.log('Database Stats:', bharatBackend.getStats());
