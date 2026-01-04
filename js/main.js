// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const backToTopBtn = document.querySelector('.back-to-top');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');
const admissionForm = document.getElementById('admissionForm');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    // Navbar background change on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }

    // Active nav link on scroll
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your admission form submission logic here
        alert('Thank you for your application! We will review it and get back to you soon.');
        admissionForm.reset();
    });
}

// Testimonials data
const testimonials = [
    {
        quote: "The faculty at CampusVerse is exceptional. They genuinely care about student success.",
        name: "Sarah Johnson",
        role: "Computer Science, 2023",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        quote: "The industry-relevant curriculum helped me land my dream job right after graduation.",
        name: "Michael Chen",
        role: "Business Administration, 2022",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        quote: "The campus facilities are top-notch and the learning environment is very supportive.",
        name: "Emily Rodriguez",
        role: "Engineering, 2023",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        quote: "The placement cell did an amazing job helping me prepare for interviews and get placed.",
        name: "David Kim",
        role: "Computer Science, 2022",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

// Events data
const events = [
    {
        title: "Tech Symposium 2023",
        date: "15 DEC",
        description: "Join us for a day of technology and innovation."
    },
    {
        title: "Career Fair",
        date: "22 JAN",
        description: "Connect with top employers and explore career opportunities."
    },
    {
        title: "Alumni Meet",
        date: "05 FEB",
        description: "Network with our successful alumni and gain valuable insights."
    },
    {
        title: "Cultural Fest",
        date: "18 MAR",
        description: "Experience the vibrant cultural diversity of our campus."
    }
];

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Slick Slider for Testimonials
    if (document.querySelector('.testimonial-slider')) {
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    }

    // Populate testimonials
    const testimonialContainer = document.querySelector('.testimonial-slider');
    if (testimonialContainer) {
        testimonialContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"${testimonial.quote}"</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div>
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Populate events
    const eventsContainer = document.querySelector('.event-slider');
    if (eventsContainer) {
        eventsContainer.innerHTML = events.map(event => `
            <div class="event-card" data-aos="fade-up">
                <div class="event-date">
                    <span class="day">${event.date.split(' ')[0]}</span>
                    <span class="month">${event.date.split(' ')[1]}</span>
                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
    }

    // Auto-scrolling notice board
    const noticeBoard = document.createElement('div');
    noticeBoard.className = 'notice-board';
    noticeBoard.innerHTML = `
        <div class="notice-container">
            <div class="notice-item">Admissions open for 2023-24 session. <a href="#admission">Apply Now</a></div>
            <div class="notice-item">Last date to submit scholarship applications: December 31, 2023</div>
            <div class="notice-item">Campus tour available every Friday at 2 PM</div>
        </div>
    `;
    
    // Add notice board after the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.insertAdjacentElement('afterend', noticeBoard);
    }

    // Add styles for notice board
    const style = document.createElement('style');
    style.textContent = `
        .notice-board {
            background: var(--primary-color);
            color: white;
            padding: 15px 0;
            overflow: hidden;
            position: relative;
        }
        .notice-container {
            display: flex;
            white-space: nowrap;
            animation: scroll 30s linear infinite;
        }
        .notice-item {
            display: inline-block;
            margin-right: 50px;
            font-size: 1rem;
        }
        .notice-item a {
            color: white;
            text-decoration: underline;
            font-weight: 600;
            margin-left: 10px;
        }
        @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
    `;
    document.head.appendChild(style);

    // Add chatbot UI
    const chatButton = document.createElement('div');
    chatButton.className = 'chatbot-button';
    chatButton.innerHTML = '<i class="fas fa-robot"></i>';
    document.body.appendChild(chatButton);

    const chatWindow = document.createElement('div');
    chatWindow.className = 'chatbot-window';
    chatWindow.innerHTML = `
        <div class="chat-header">
            <h4>CampusVerse Assistant</h4>
            <button class="close-chat"><i class="fas fa-times"></i></button>
        </div>
        <div class="chat-messages">
            <div class="message bot">
                <div class="message-content">
                    <p>Hello! I'm your virtual assistant. How can I help you today?</p>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Type your message...">
            <button class="send-message"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;
    document.body.appendChild(chatWindow);

    // Chatbot functionality
    const chatButtonEl = document.querySelector('.chatbot-button');
    const chatWindowEl = document.querySelector('.chatbot-window');
    const closeChat = document.querySelector('.close-chat');
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-message');
    const chatMessages = document.querySelector('.chat-messages');

    chatButtonEl.addEventListener('click', () => {
        chatWindowEl.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatWindowEl.classList.remove('active');
    });

    function addMessage(message, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isBot ? 'bot' : 'user'}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        addMessage(message, false);
        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "I'm here to help! Could you please provide more details?",
                "That's a great question! Let me find that information for you.",
                "Thanks for your message! Our team will get back to you shortly.",
                "I can help with admissions, courses, and campus facilities. What would you like to know?",
                "For immediate assistance, please call our helpdesk at +1 (555) 123-4567"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, true);
        }, 1000);
    }

    sendButton.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    // Add styles for chatbot
    const chatStyle = document.createElement('style');
    chatStyle.textContent = `
        .chatbot-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: var(--gradient);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: all 0.3s ease;
        }
        .chatbot-button:hover {
            transform: scale(1.1);
        }
        .chatbot-window {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 350px;
            height: 500px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            z-index: 1001;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        .chatbot-window.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .chat-header {
            padding: 15px 20px;
            background: var(--gradient);
            color: white;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .chat-header h4 {
            margin: 0;
            font-size: 1rem;
            color: white;
        }
        .close-chat {
            background: none;
            border: none;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            padding: 5px;
        }
        .chat-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
        .message {
            margin-bottom: 15px;
            display: flex;
        }
        .message.user {
            justify-content: flex-end;
        }
        .message.bot {
            justify-content: flex-start;
        }
        .message-content {
            max-width: 80%;
            padding: 10px 15px;
            border-radius: 15px;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        .user .message-content {
            background: #f1f1f1;
            border-top-right-radius: 0;
        }
        .bot .message-content {
            background: var(--gradient);
            color: white;
            border-top-left-radius: 0;
        }
        .chat-input {
            display: flex;
            padding: 15px;
            border-top: 1px solid #eee;
        }
        .chat-input input {
            flex: 1;
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 25px;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }
        .send-message {
            background: var(--gradient);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media (max-width: 576px) {
            .chatbot-button {
                width: 50px;
                height: 50px;
                font-size: 20px;
                bottom: 20px;
                right: 20px;
            }
            .chatbot-window {
                width: calc(100% - 40px);
                right: 20px;
                bottom: 80px;
                height: 60vh;
            }
        }
    `;
    document.head.appendChild(chatStyle);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add preloader HTML and CSS
const preloader = document.createElement('div');
preloader.className = 'preloader';
preloader.innerHTML = `
    <div class="preloader-content">
        <div class="spinner"></div>
        <h3>Welcome to CampusVerse</h3>
    </div>
`;
document.body.prepend(preloader);

const preloaderStyle = document.createElement('style');
preloaderStyle.textContent = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    .preloader-content {
        text-align: center;
    }
    .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }
    .preloader h3 {
        color: var(--dark-color);
        font-size: 1.5rem;
        margin-top: 20px;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(preloaderStyle);
