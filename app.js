// YogaHub Application JavaScript

class YogaHubApp {
    constructor() {
        // Application data
        this.data = {
            yogaClasses: [
                {
                    id: "1",
                    title: "Morning Vinyasa Flow",
                    instructor: {
                        id: "inst1",
                        name: "Sarah Johnson",
                        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                        rating: 4.9,
                        certifications: ["RYT-500", "Yin Yoga Certified"]
                    },
                    style: "Vinyasa",
                    level: "intermediate",
                    schedule: "2024-09-24T07:00:00.000Z",
                    duration: 60,
                    price: 25,
                    maxStudents: 15,
                    enrolledStudents: ["user1", "user2", "user3"],
                    description: "Start your day with an energizing vinyasa flow that combines breath and movement.",
                    meetingUrl: "https://meet.jit.si/yogahub-morning-flow-924",
                    status: "scheduled",
                    tags: ["energizing", "breath-work", "flow"]
                },
                {
                    id: "2", 
                    title: "Gentle Yin Yoga",
                    instructor: {
                        id: "inst2",
                        name: "Michael Chen",
                        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                        rating: 4.8,
                        certifications: ["RYT-200", "Yin Yoga Specialist"]
                    },
                    style: "Yin",
                    level: "beginner",
                    schedule: "2024-09-24T19:00:00.000Z",
                    duration: 75,
                    price: 20,
                    maxStudents: 20,
                    enrolledStudents: ["user4", "user5"],
                    description: "A restorative practice focusing on deep stretches and mindfulness.",
                    meetingUrl: "https://meet.jit.si/yogahub-yin-924",
                    status: "scheduled",
                    tags: ["restorative", "mindfulness", "deep-stretch"]
                },
                {
                    id: "3",
                    title: "Power Yoga Bootcamp",
                    instructor: {
                        id: "inst3",
                        name: "Emma Rodriguez",
                        avatar: "https://images.unsplash.com/photo-1494790108755-2616b332bd24?w=150&h=150&fit=crop&crop=face",
                        rating: 4.7,
                        certifications: ["RYT-500", "Power Yoga Specialist"]
                    },
                    style: "Power",
                    level: "advanced",
                    schedule: "2024-09-25T18:30:00.000Z",
                    duration: 90,
                    price: 35,
                    maxStudents: 12,
                    enrolledStudents: ["user1", "user6"],
                    description: "High-intensity yoga workout combining strength, flexibility, and cardio.",
                    meetingUrl: "https://meet.jit.si/yogahub-power-925",
                    status: "scheduled",
                    tags: ["high-intensity", "strength", "cardio"]
                },
                {
                    id: "4",
                    title: "Beginner Hatha Basics",
                    instructor: {
                        id: "inst1",
                        name: "Sarah Johnson", 
                        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                        rating: 4.9,
                        certifications: ["RYT-500", "Yin Yoga Certified"]
                    },
                    style: "Hatha",
                    level: "beginner",
                    schedule: "2024-09-26T10:00:00.000Z",
                    duration: 60,
                    price: 18,
                    maxStudents: 25,
                    enrolledStudents: ["user7", "user8", "user9"],
                    description: "Perfect introduction to yoga with basic poses and breathing techniques.",
                    meetingUrl: "https://meet.jit.si/yogahub-hatha-926",
                    status: "scheduled",
                    tags: ["basics", "breathing", "gentle"]
                }
            ],
            users: [
                {
                    id: "user1",
                    name: "Alex Thompson",
                    email: "alex@example.com",
                    role: "student",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    profile: {
                        experienceLevel: "intermediate",
                        favoriteStyles: ["Vinyasa", "Power"],
                        goals: ["flexibility", "strength"],
                        memberSince: "2024-01-15"
                    },
                    subscription: {
                        plan: "premium",
                        expiresAt: "2025-12-15"
                    },
                    bookings: ["1", "3"]
                },
                {
                    id: "inst1",
                    name: "Sarah Johnson",
                    email: "sarah@yogahub.com",
                    role: "instructor",
                    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                    profile: {
                        bio: "Certified yoga instructor with 8+ years of experience. Passionate about helping students find balance and strength.",
                        specialties: ["Vinyasa", "Hatha", "Yin"],
                        certifications: ["RYT-500", "Yin Yoga Certified"],
                        experience: "8 years",
                        rating: 4.9,
                        totalClasses: 847
                    },
                    earnings: {
                        thisMonth: 2850,
                        lastMonth: 3200,
                        total: 28500
                    }
                }
            ],
            subscriptionPlans: [
                {
                    id: "free",
                    name: "Free",
                    price: 0,
                    features: ["Access to 2 classes per month", "Basic profile", "Community access"],
                    classLimit: 2
                },
                {
                    id: "basic",
                    name: "Basic",
                    price: 29,
                    features: ["Unlimited classes", "HD streaming", "Class recordings", "Priority booking"],
                    classLimit: -1
                },
                {
                    id: "premium",
                    name: "Premium", 
                    price: 49,
                    features: ["Everything in Basic", "1-on-1 sessions", "Personalized plans", "Advanced analytics", "Early access to workshops"],
                    classLimit: -1
                }
            ],
            notifications: [
                {
                    id: "notif1",
                    type: "booking_confirmation",
                    title: "Class Booked Successfully",
                    message: "You're registered for Morning Vinyasa Flow on September 24th",
                    timestamp: "2024-09-23T20:30:00.000Z",
                    read: false
                },
                {
                    id: "notif2", 
                    type: "class_reminder",
                    title: "Class Starting Soon", 
                    message: "Your Gentle Yin Yoga class starts in 1 hour",
                    timestamp: "2024-09-23T18:00:00.000Z",
                    read: true
                }
            ]
        };

        // Application state
        this.currentUser = null;
        this.currentView = 'home';
        this.selectedClass = null;
        this.filteredClasses = [...this.data.yogaClasses];
        this.searchQuery = '';
        this.filters = {
            style: '',
            level: '',
            price: '',
            sort: 'date'
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderFeaturedClasses();
        this.checkAuthState();
        this.setupMobileMenu();
    }

    setupEventListeners() {
        // Navigation with ARIA improvements for accessibility
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-view]')) {
                e.preventDefault();
                const view = e.target.dataset.view;
                this.navigateToView(view);
            }
        });

        // Auth modals
        document.getElementById('signInBtn').addEventListener('click', () => this.openAuthModal('signin'));
        document.getElementById('getStartedBtn').addEventListener('click', () => this.openAuthModal('signup'));
        document.getElementById('heroSignUpBtn').addEventListener('click', () => this.openAuthModal('signup'));
        document.getElementById('authModalClose').addEventListener('click', () => this.closeModal('authModal'));
        document.getElementById('switchToRegister').addEventListener('click', (e) => {
            e.preventDefault();
            this.switchAuthMode('signup');
        });
        document.getElementById('switchToLogin').addEventListener('click', (e) => {
            e.preventDefault();
            this.switchAuthMode('signin');
        });

        // Auth form
        document.getElementById('authForm').addEventListener('submit', (e) => this.handleAuth(e));

        // Search and filters
        document.getElementById('classSearch').addEventListener('input', (e) => this.handleSearch(e.target.value));
        document.getElementById('styleFilter').addEventListener('change', (e) => this.handleFilter('style', e.target.value));
        document.getElementById('levelFilter').addEventListener('change', (e) => this.handleFilter('level', e.target.value));
        document.getElementById('priceFilter').addEventListener('change', (e) => this.handleFilter('price', e.target.value));
        document.getElementById('sortFilter').addEventListener('change', (e) => this.handleFilter('sort', e.target.value));
        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());

        // Booking modal
        document.getElementById('bookingModalClose').addEventListener('click', () => this.closeModal('bookingModal'));
        document.getElementById('paymentModalClose').addEventListener('click', () => this.closeModal('paymentModal'));
        document.getElementById('createClassModalClose').addEventListener('click', () => this.closeModal('createClassModal'));

        // Payment form
        document.getElementById('paymentForm').addEventListener('submit', (e) => this.handlePayment(e));

        // Create class form
        document.getElementById('createClassForm').addEventListener('submit', (e) => this.handleCreateClass(e));

        // Back button
        document.getElementById('backToClasses').addEventListener('click', () => this.navigateToView('classes'));

        // User menu
        document.getElementById('userAvatar').addEventListener('click', () => this.toggleUserDropdown());
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.user-menu')) {
                document.getElementById('userDropdown').classList.add('hidden');
            }
        });

        // Close modals when clicking overlay
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                e.target.parentElement.classList.add('hidden');
            }
        });
    }

    setupMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('nav');

        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close mobile menu when clicking nav links
        nav.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                nav.classList.remove('active');
            }
        });
    }

    checkAuthState() {
        // Simulate checking for existing auth
        const savedUser = localStorage.getItem('yogahub-user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.updateAuthState();
        }
    }

    openAuthModal(mode) {
        const modal = document.getElementById('authModal');
        const title = document.getElementById('authModalTitle');
        const nameGroup = document.getElementById('nameGroup');
        const roleGroup = document.getElementById('roleGroup');
        const submitBtn = document.getElementById('authSubmit');
        const switchText = document.getElementById('switchToRegister');
        const switchTextLogin = document.getElementById('switchToLogin');

        if (mode === 'signup') {
            title.textContent = 'Sign Up';
            nameGroup.style.display = 'block';
            roleGroup.style.display = 'block';
            submitBtn.textContent = 'Sign Up';
            switchText.style.display = 'none';
            switchTextLogin.style.display = 'block';
        } else {
            title.textContent = 'Sign In';
            nameGroup.style.display = 'none';
            roleGroup.style.display = 'none';
            submitBtn.textContent = 'Sign In';
            switchText.style.display = 'block';
            switchTextLogin.style.display = 'none';
        }

        modal.classList.remove('hidden');
        modal.classList.add('fade-in');
    }

    switchAuthMode(mode) {
        this.openAuthModal(mode);
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    handleAuth(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;
        const name = document.getElementById('authName').value;
        const role = document.getElementById('authRole').value || 'student';

        if (document.getElementById('authModalTitle').textContent === 'Sign Up') {
            // Simulate registration
            this.register(name, email, role);
        } else {
            // Simulate login
            this.login(email);
        }
    }

    register(name, email, role) {
        const newUser = {
            id: 'user' + Date.now(),
            name: name,
            email: email,
            role: role,
            avatar: role === 'instructor' 
                ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            profile: role === 'student' ? {
                experienceLevel: "beginner",
                favoriteStyles: [],
                goals: [],
                memberSince: new Date().toISOString().split('T')[0]
            } : {
                bio: "",
                specialties: [],
                certifications: [],
                experience: "0 years",
                rating: 0,
                totalClasses: 0
            },
            subscription: role === 'student' ? {
                plan: "free",
                expiresAt: new Date(Date.now() + 30*24*60*60*1000).toISOString()
            } : null,
            bookings: [],
            earnings: role === 'instructor' ? {
                thisMonth: 0,
                lastMonth: 0,
                total: 0
            } : null
        };

        this.data.users.push(newUser);
        this.currentUser = newUser;
        this.updateAuthState();
        this.closeModal('authModal');
        this.showToast('Account created successfully!', 'success');
        this.navigateToView('dashboard');
    }

    login(email) {
        // Find user by email or use demo user
        let user = this.data.users.find(u => u.email === email);
        if (!user) {
            user = this.data.users[0]; // Use demo student account
        }

        this.currentUser = user;
        localStorage.setItem('yogahub-user', JSON.stringify(user));
        this.updateAuthState();
        this.closeModal('authModal');
        this.showToast('Welcome back!', 'success');
        this.navigateToView('dashboard');
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('yogahub-user');
        this.updateAuthState();
        this.navigateToView('home');
        this.showToast('Logged out successfully', 'success');
    }

    updateAuthState() {
        const signInBtn = document.getElementById('signInBtn');
        const getStartedBtn = document.getElementById('getStartedBtn');
        const userMenu = document.getElementById('userMenu');
        const userAvatar = document.getElementById('userAvatar');

        if (this.currentUser) {
            signInBtn.style.display = 'none';
            getStartedBtn.style.display = 'none';
            userMenu.classList.remove('hidden');
            userAvatar.style.backgroundImage = `url(${this.currentUser.avatar})`;
        } else {
            signInBtn.style.display = 'inline-flex';
            getStartedBtn.style.display = 'inline-flex';
            userMenu.classList.add('hidden');
        }

        // Update navigation visibility
        const dashboardLink = document.querySelector('[data-view="dashboard"]');
        const profileLink = document.querySelector('[data-view="profile"]');
        
        if (this.currentUser) {
            dashboardLink.style.display = 'block';
            profileLink.style.display = 'block';
        } else {
            dashboardLink.style.display = 'none';
            profileLink.style.display = 'none';
        }
    }

    toggleUserDropdown() {
        const dropdown = document.getElementById('userDropdown');
        dropdown.classList.toggle('hidden');
    }

    navigateToView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Show selected view
        const targetView = document.getElementById(viewName + 'View');
        if (targetView) {
            targetView.classList.add('active');
            targetView.classList.add('fade-in');
        }

        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-view="${viewName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        this.currentView = viewName;

        // Load view-specific content
        switch (viewName) {
            case 'classes':
                this.renderAllClasses();
                break;
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'profile':
                this.renderProfile();
                break;
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    renderFeaturedClasses() {
        const container = document.getElementById('featuredClassesGrid');
        const featuredClasses = this.data.yogaClasses.slice(0, 3);
        
        container.innerHTML = featuredClasses.map(cls => this.createClassCard(cls)).join('');
    }

    renderAllClasses() {
        const container = document.getElementById('allClassesGrid');
        container.innerHTML = this.filteredClasses.map(cls => this.createClassCard(cls)).join('');
    }

    createClassCard(cls) {
        const scheduleDate = new Date(cls.schedule);
        const enrolledCount = cls.enrolledStudents.length;
        const spotsLeft = cls.maxStudents - enrolledCount;
        const isEnrolled = this.currentUser && cls.enrolledStudents.includes(this.currentUser.id);

        return `
            <div class="class-card" data-class-id="${cls.id}" tabindex="0" aria-label="Class card for ${cls.title}">
                <div class="class-card-image">🧘‍♀️</div>
                <div class="class-card-content">
                    <div class="class-header">
                        <h3 class="class-title">${cls.title}</h3>
                        <span class="class-price">₹${cls.price}</span>
                    </div>
                    
                    <div class="instructor-info">
                        <div class="instructor-avatar" style="background-image: url(${cls.instructor.avatar})"></div>
                        <div class="instructor-details">
                            <h4>${cls.instructor.name}</h4>
                            <div class="instructor-rating">
                                <span>⭐ ${cls.instructor.rating}</span>
                            </div>
                        </div>
                    </div>

                    <div class="class-meta">
                        <span class="class-tag">${cls.style}</span>
                        <span class="class-tag">${cls.level}</span>
                        <span class="class-tag">${cls.duration} min</span>
                    </div>

                    <div class="class-schedule">
                        <span>${scheduleDate.toLocaleDateString()}</span>
                        <span>${scheduleDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>

                    <div class="class-actions">
                        ${isEnrolled 
                            ? '<button class="btn btn--secondary btn--sm" disabled>Enrolled ✓</button>'
                            : spotsLeft > 0 
                                ? `<button class="btn btn--primary btn--sm book-class-btn" data-class-id="${cls.id}">Book Now</button>`
                                : '<button class="btn btn--outline btn--sm" disabled>Full</button>'
                        }
                        <button class="btn btn--outline btn--sm view-details-btn" data-class-id="${cls.id}">Details</button>
                    </div>

                    <div class="class-enrollment">
                        ${enrolledCount}/${cls.maxStudents} spots filled
                    </div>
                </div>
            </div>
        `;
    }

    handleSearch(query) {
        this.searchQuery = query.toLowerCase();
        this.applyFilters();
    }

    handleFilter(filterType, value) {
        this.filters[filterType] = value;
        this.applyFilters();
    }

    clearFilters() {
        this.filters = {
            style: '',
            level: '',
            price: '',
            sort: 'date'
        };
        
        document.getElementById('styleFilter').value = '';
        document.getElementById('levelFilter').value = '';
        document.getElementById('priceFilter').value = '';
        document.getElementById('sortFilter').value = 'date';
        document.getElementById('classSearch').value = '';
        
        this.searchQuery = '';
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...this.data.yogaClasses];

        // Apply search
        if (this.searchQuery) {
            filtered = filtered.filter(cls => 
                cls.title.toLowerCase().includes(this.searchQuery) ||
                cls.instructor.name.toLowerCase().includes(this.searchQuery) ||
                cls.style.toLowerCase().includes(this.searchQuery) ||
                cls.description.toLowerCase().includes(this.searchQuery)
            );
        }

        // Apply filters
        if (this.filters.style) {
            filtered = filtered.filter(cls => cls.style.toLowerCase() === this.filters.style);
        }

        if (this.filters.level) {
            filtered = filtered.filter(cls => cls.level === this.filters.level);
        }

        if (this.filters.price) {
            const [min, max] = this.filters.price.split('-').map(p => p.replace('+', ''));
            filtered = filtered.filter(cls => {
                if (max) {
                    return cls.price >= parseInt(min) && cls.price <= parseInt(max);
                } else {
                    return cls.price >= parseInt(min);
                }
            });
        }

        // Apply sorting
        switch (this.filters.sort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.instructor.rating - a.instructor.rating);
                break;
            case 'date':
            default:
                filtered.sort((a, b) => new Date(a.schedule) - new Date(b.schedule));
                break;
        }

        this.filteredClasses = filtered;
        
        if (this.currentView === 'classes') {
            this.renderAllClasses();
        }
    }

    showClassDetail(classId) {
        const cls = this.data.yogaClasses.find(c => c.id === classId);
        if (!cls) return;

        this.selectedClass = cls;
        const container = document.getElementById('classDetailContent');
        const scheduleDate = new Date(cls.schedule);
        const enrolledCount = cls.enrolledStudents.length;
        const spotsLeft = cls.maxStudents - enrolledCount;
        const isEnrolled = this.currentUser && cls.enrolledStudents.includes(this.currentUser.id);

        container.innerHTML = `
            <div class="class-detail-main">
                <h1>${cls.title}</h1>
                <div class="instructor-bio">
                    <div class="instructor-bio-avatar" style="background-image: url(${cls.instructor.avatar})"></div>
                    <div class="instructor-bio-content">
                        <h4>${cls.instructor.name}</h4>
                        <div class="instructor-rating">⭐ ${cls.instructor.rating} rating</div>
                        <div class="certifications">
                            ${cls.instructor.certifications.map(cert => `<span class="certification">${cert}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>About This Class</h3>
                    <p>${cls.description}</p>
                </div>

                <div class="detail-section">
                    <h3>Class Details</h3>
                    <div class="class-meta">
                        <span class="class-tag">${cls.style}</span>
                        <span class="class-tag">${cls.level}</span>
                        <span class="class-tag">${cls.duration} minutes</span>
                    </div>
                </div>

                <div class="detail-section">
                    <h3>Schedule</h3>
                    <p><strong>Date:</strong> ${scheduleDate.toLocaleDateString()}</p>
                    <p><strong>Time:</strong> ${scheduleDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p><strong>Duration:</strong> ${cls.duration} minutes</p>
                </div>
            </div>

            <div class="class-detail-sidebar">
                <div class="class-detail-price">₹${cls.price}</div>
                
                <div class="detail-section">
                    <h3>Availability</h3>
                    <p>${enrolledCount}/${cls.maxStudents} spots filled</p>
                    <p>${spotsLeft} spots remaining</p>
                </div>

                <div class="class-actions">
                    ${isEnrolled 
                        ? `
                            <button class="btn btn--secondary btn--full-width" disabled>Enrolled ✓</button>
                            <a href="${cls.meetingUrl}" target="_blank" class="btn btn--primary btn--full-width">Join Class</a>
                        `
                        : spotsLeft > 0 
                            ? `<button class="btn btn--primary btn--full-width book-class-btn" data-class-id="${cls.id}">Book Now - ₹${cls.price}</button>`
                            : '<button class="btn btn--outline btn--full-width" disabled>Class Full</button>'
                    }
                </div>
            </div>
        `;

        this.navigateToView('classDetail');
    }

    openBookingModal(classId) {
        if (!this.currentUser) {
            this.openAuthModal('signin');
            return;
        }

        const cls = this.data.yogaClasses.find(c => c.id === classId);
        if (!cls) return;

        const modal = document.getElementById('bookingModal');
        const body = document.getElementById('bookingModalBody');

        body.innerHTML = `
            <div class="booking-summary">
                <h3>${cls.title}</h3>
                <p><strong>Instructor:</strong> ${cls.instructor.name}</p>
                <p><strong>Date:</strong> ${new Date(cls.schedule).toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${new Date(cls.schedule).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                <p><strong>Duration:</strong> ${cls.duration} minutes</p>
                <p><strong>Price:</strong> ₹${cls.price}</p>
            </div>
            
            <div class="booking-actions">
                <button class="btn btn--primary btn--full-width" onclick="app.proceedToPayment('${cls.id}')">
                    Proceed to Payment
                </button>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    proceedToPayment(classId) {
        const cls = this.data.yogaClasses.find(c => c.id === classId);
        if (!cls) return;

        this.closeModal('bookingModal');
        
        const modal = document.getElementById('paymentModal');
        const summary = document.getElementById('paymentSummary');

        summary.innerHTML = `
            <div class="payment-item">
                <span>${cls.title}</span>
                <span>₹${cls.price}</span>
            </div>
            <div class="payment-item">
                <span>Processing Fee</span>
                <span>₹2.50</span>
            </div>
            <div class="payment-item payment-total">
                <span><strong>Total</strong></span>
                <span><strong>₹${cls.price + 2.50}</strong></span>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.dataset.classId = classId;
    }

    handlePayment(e) {
        e.preventDefault();
        
        const classId = document.getElementById('paymentModal').dataset.classId;
        const cls = this.data.yogaClasses.find(c => c.id === classId);
        
        if (!cls || !this.currentUser) return;

        // Simulate payment processing
        this.showLoading();

        setTimeout(() => {
            // Add user to enrolled students
            cls.enrolledStudents.push(this.currentUser.id);
            this.currentUser.bookings.push(classId);

            // Update user data
            localStorage.setItem('yogahub-user', JSON.stringify(this.currentUser));

            this.hideLoading();
            this.closeModal('paymentModal');
            this.showToast('Class booked successfully!', 'success');
            
            // Add notification
            this.addNotification({
                type: 'booking_confirmation',
                title: 'Class Booked Successfully',
                message: `You're registered for ${cls.title}`,
                timestamp: new Date().toISOString()
            });

            // Refresh current view
            if (this.currentView === 'classes') {
                this.renderAllClasses();
            } else if (this.currentView === 'classDetail') {
                this.showClassDetail(classId);
            }
        }, 2000);
    }

    renderDashboard() {
        if (!this.currentUser) {
            this.navigateToView('home');
            return;
        }

        const title = document.getElementById('dashboardTitle');
        const stats = document.getElementById('dashboardStats');
        const content = document.getElementById('dashboardContent');

        if (this.currentUser.role === 'student') {
            this.renderStudentDashboard(title, stats, content);
        } else {
            this.renderInstructorDashboard(title, stats, content);
        }
    }

    renderStudentDashboard(title, stats, content) {
        title.textContent = `Welcome back, ${this.currentUser.name}!`;

        const bookedClasses = this.data.yogaClasses.filter(cls => 
            this.currentUser.bookings.includes(cls.id)
        );

        stats.innerHTML = `
            <div class="dashboard-stat-card">
                <h3>${bookedClasses.length}</h3>
                <p>Booked Classes</p>
            </div>
            <div class="dashboard-stat-card">
                <h3>${this.currentUser.subscription.plan}</h3>
                <p>Current Plan</p>
            </div>
            <div class="dashboard-stat-card">
                <h3>${this.currentUser.profile.experienceLevel}</h3>
                <p>Experience Level</p>
            </div>
        `;

        const upcomingClasses = bookedClasses.filter(cls => new Date(cls.schedule) > new Date());

        content.innerHTML = `
            <div class="dashboard-section">
                <h2>
                    Upcoming Classes
                    <button class="btn btn--primary" data-view="classes">Browse More</button>
                </h2>
                <div class="upcoming-classes">
                    ${upcomingClasses.length > 0 
                        ? upcomingClasses.map(cls => this.createUpcomingClassItem(cls)).join('')
                        : '<p>No upcoming classes. <a href="#" data-view="classes">Book your first class!</a></p>'
                    }
                </div>
            </div>

            <div class="dashboard-section">
                <h2>Subscription</h2>
                <div class="subscription-plans">
                    ${this.data.subscriptionPlans.map(plan => this.createSubscriptionPlan(plan)).join('')}
                </div>
            </div>
        `;
    }

    renderInstructorDashboard(title, stats, content) {
        title.textContent = `Instructor Dashboard - ${this.currentUser.name}`;

        const instructorClasses = this.data.yogaClasses.filter(cls => cls.instructor.id === this.currentUser.id);
        const totalStudents = instructorClasses.reduce((sum, cls) => sum + cls.enrolledStudents.length, 0);

        stats.innerHTML = `
            <div class="dashboard-stat-card">
                <h3>₹${this.currentUser.earnings.thisMonth}</h3>
                <p>This Month</p>
            </div>
            <div class="dashboard-stat-card">
                <h3>${instructorClasses.length}</h3>
                <p>Active Classes</p>
            </div>
            <div class="dashboard-stat-card">
                <h3>${totalStudents}</h3>
                <p>Total Students</p>
            </div>
            <div class="dashboard-stat-card">
                <h3>${this.currentUser.profile.rating}</h3>
                <p>Average Rating</p>
            </div>
        `;

        content.innerHTML = `
            <div class="dashboard-section">
                <h2>
                    Your Classes
                    <button class="btn btn--primary" onclick="app.openCreateClassModal()">Create New Class</button>
                </h2>
                <div class="upcoming-classes">
                    ${instructorClasses.length > 0 
                        ? instructorClasses.map(cls => this.createInstructorClassItem(cls)).join('')
                        : '<p>No classes created yet. Create your first class to start earning!</p>'
                    }
                </div>
            </div>

            <div class="dashboard-section">
                <h2>Earnings Overview</h2>
                <div class="chart-container" style="position: relative; height: 300px;">
                    <canvas id="earningsChart" aria-label="Earnings chart" role="img"></canvas>
                </div>
            </div>
        `;

        // Load Chart.js and render earnings chart
        this.loadEarningsChart();
    }

    createUpcomingClassItem(cls) {
        const scheduleDate = new Date(cls.schedule);
        return `
            <div class="upcoming-class">
                <div class="class-info">
                    <h4>${cls.title}</h4>
                    <p>${scheduleDate.toLocaleDateString()} at ${scheduleDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
                <div class="class-actions">
                    <a href="${cls.meetingUrl}" target="_blank" class="btn btn--primary btn--sm">Join Class</a>
                </div>
            </div>
        `;
    }

    createInstructorClassItem(cls) {
        const scheduleDate = new Date(cls.schedule);
        return `
            <div class="upcoming-class">
                <div class="class-info">
                    <h4>${cls.title}</h4>
                    <p>${scheduleDate.toLocaleDateString()} at ${scheduleDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p>${cls.enrolledStudents.length}/${cls.maxStudents} students enrolled</p>
                </div>
                <div class="class-actions">
                    <a href="${cls.meetingUrl}" target="_blank" class="btn btn--primary btn--sm">Start Class</a>
                    <button class="btn btn--outline btn--sm view-details-btn" data-class-id="${cls.id}">View Details</button>
                </div>
            </div>
        `;
    }

    createSubscriptionPlan(plan) {
        const isCurrentPlan = this.currentUser && this.currentUser.subscription.plan === plan.id;
        const recommended = plan.id === 'basic';

        return `
            <div class="subscription-plan ${recommended ? 'recommended' : ''} ${isCurrentPlan ? 'current' : ''}">
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-price">
                    ₹${plan.price}
                    <span>/month</span>
                </div>
                <ul class="plan-features">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                ${isCurrentPlan 
                    ? '<button class="btn btn--secondary btn--full-width" disabled>Current Plan</button>'
                    : `<button class="btn btn--primary btn--full-width" onclick="app.upgradePlan('${plan.id}')">
                        ${this.currentUser && this.currentUser.subscription.plan !== 'free' ? 'Switch Plan' : 'Upgrade'}
                      </button>`
                }
            </div>
        `;
    }

    loadEarningsChart() {
        // Load Chart.js from CDN
        if (typeof Chart === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = () => this.renderEarningsChart();
            document.head.appendChild(script);
        } else {
            this.renderEarningsChart();
        }
    }

    renderEarningsChart() {
        const ctx = document.getElementById('earningsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [{
                    label: 'Monthly Earnings',
                    data: [1200, 1500, 1800, 2200, 2800, 3200, 2900, 3100, 2850],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value;
                            }
                        }
                    }
                }
            }
        });
    }

    openCreateClassModal() {
        document.getElementById('createClassModal').classList.remove('hidden');
    }

    handleCreateClass(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const newClass = {
            id: 'class' + Date.now(),
            title: document.getElementById('classTitle').value,
            description: document.getElementById('classDescription').value,
            style: document.getElementById('classStyle').value,
            level: document.getElementById('classLevel').value,
            schedule: document.getElementById('classSchedule').value,
            duration: parseInt(document.getElementById('classDuration').value),
            price: parseInt(document.getElementById('classPrice').value),
            maxStudents: parseInt(document.getElementById('classMaxStudents').value),
            instructor: {
                id: this.currentUser.id,
                name: this.currentUser.name,
                avatar: this.currentUser.avatar,
                rating: this.currentUser.profile.rating || 4.5,
                certifications: this.currentUser.profile.certifications || []
            },
            enrolledStudents: [],
            meetingUrl: `https://meet.jit.si/yogahub-${Date.now()}`,
            status: 'scheduled',
            tags: []
        };

        this.data.yogaClasses.push(newClass);
        this.closeModal('createClassModal');
        this.showToast('Class created successfully!', 'success');
        
        // Reset form
        document.getElementById('createClassForm').reset();
        
        // Refresh dashboard
        if (this.currentView === 'dashboard') {
            this.renderDashboard();
        }
    }

    upgradePlan(planId) {
        if (!this.currentUser) return;

        this.currentUser.subscription.plan = planId;
        localStorage.setItem('yogahub-user', JSON.stringify(this.currentUser));
        
        this.showToast('Subscription updated successfully!', 'success');
        
        if (this.currentView === 'dashboard') {
            this.renderDashboard();
        }
    }

    renderProfile() {
        if (!this.currentUser) {
            this.navigateToView('home');
            return;
        }

        const container = document.getElementById('profileForm');
        
        container.innerHTML = `
            <div class="profile-avatar-section">
                <div class="profile-avatar" style="background-image: url(${this.currentUser.avatar})"></div>
                <button class="btn btn--outline">Change Photo</button>
            </div>

            <form id="profileUpdateForm">
                <div class="profile-section">
                    <h3>Personal Information</h3>
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" value="${this.currentUser.name}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" value="${this.currentUser.email}" required>
                    </div>
                </div>

                ${this.currentUser.role === 'student' ? `
                    <div class="profile-section">
                        <h3>Yoga Preferences</h3>
                        <div class="form-group">
                            <label class="form-label">Experience Level</label>
                            <select class="form-control">
                                <option value="beginner" ${this.currentUser.profile.experienceLevel === 'beginner' ? 'selected' : ''}>Beginner</option>
                                <option value="intermediate" ${this.currentUser.profile.experienceLevel === 'intermediate' ? 'selected' : ''}>Intermediate</option>
                                <option value="advanced" ${this.currentUser.profile.experienceLevel === 'advanced' ? 'selected' : ''}>Advanced</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Favorite Styles</label>
                            <div class="checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" ${this.currentUser.profile.favoriteStyles.includes('Vinyasa') ? 'checked' : ''}> Vinyasa
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" ${this.currentUser.profile.favoriteStyles.includes('Hatha') ? 'checked' : ''}> Hatha
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" ${this.currentUser.profile.favoriteStyles.includes('Yin') ? 'checked' : ''}> Yin
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" ${this.currentUser.profile.favoriteStyles.includes('Power') ? 'checked' : ''}> Power
                                </label>
                            </div>
                        </div>
                    </div>
                ` : `
                    <div class="profile-section">
                        <h3>Instructor Information</h3>
                        <div class="form-group">
                            <label class="form-label">Bio</label>
                            <textarea class="form-control" rows="4" placeholder="Tell students about yourself...">${this.currentUser.profile.bio || ''}</textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Years of Experience</label>
                            <input type="text" class="form-control" value="${this.currentUser.profile.experience}" placeholder="e.g. 5 years">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Certifications</label>
                            <input type="text" class="form-control" value="${this.currentUser.profile.certifications.join(', ')}" placeholder="e.g. RYT-200, RYT-500">
                        </div>
                    </div>
                `}

                <div class="profile-section">
                    <button type="submit" class="btn btn--primary">Save Changes</button>
                    <button type="button" class="btn btn--outline" onclick="app.navigateToView('dashboard')">Cancel</button>
                </div>
            </form>
        `;

        // Add form submit handler
        document.getElementById('profileUpdateForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.showToast('Profile updated successfully!', 'success');
        });
    }

    addNotification(notification) {
        const newNotification = {
            id: 'notif' + Date.now(),
            ...notification,
            read: false
        };
        
        this.data.notifications.unshift(newNotification);
        this.renderNotifications();
    }

    renderNotifications() {
        // Implement notifications render logic as needed
    }

    showLoading() {
        document.getElementById('loadingOverlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById(type === 'success' ? 'successToast' : 'errorToast');
        const messageEl = document.getElementById(type === 'success' ? 'successMessage' : 'errorMessage');
        
        messageEl.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 300);
        }, 3000);
    }
}

// Initialize the app
const app = new YogaHubApp();

// Event delegation for dynamic content
document.addEventListener('click', (e) => {
    if (e.target.matches('.book-class-btn')) {
        e.stopPropagation();
        const classId = e.target.dataset.classId;
        app.openBookingModal(classId);
    }
    
    if (e.target.matches('.view-details-btn')) {
        e.stopPropagation();
        const classId = e.target.dataset.classId;
        app.showClassDetail(classId);
    }
    
    if (e.target.matches('.class-card')) {
        const classId = e.target.dataset.classId;
        if (classId) {
            app.showClassDetail(classId);
        }
    }
});

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    const view = e.state?.view || 'home';
    app.navigateToView(view);
});

// Add some initial browser history
history.replaceState({ view: 'home' }, '', '#home');
