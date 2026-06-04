/**
 * ==========================================
 * SYE SYSTEM INVESTMENT - MAIN APPLICATION
 * ==========================================
 */

/* --- GLOBAL STATE --- */
let currentCourse = "CADRU TEHNIC PSI";
let currentPrice = 850;
let currentStep = 1;

/* --- CACHED DOM ELEMENTS (Code Cleanup) --- */
const UI = {
    detailsDrawer: document.getElementById('details-drawer'),
    bookingModal: document.getElementById('booking-modal'),
    selectedCourseTitle: document.getElementById('selected-course-title'),
    reservationType: document.getElementById('reservation-type'),
    groupSizeContainer: document.getElementById('group-size-container'),
    groupSize: document.getElementById('group-size'),
    groupPromoBanner: document.getElementById('group-promo-banner'),
    stepBarContainer: document.getElementById('step-bar-container'),
    stepBar: document.getElementById('step-bar'),
    stepBadge: document.getElementById('step-badge'),
    priceDisplay: document.getElementById('wizard-price-display'),
    originalPrice: document.getElementById('wizard-original-price'),
    savingsBadge: document.getElementById('wizard-savings-badge'),
    savingsText: document.getElementById('wizard-savings-text'),
    advanceBadge: document.getElementById('wizard-advance-badge'),
    advanceText: document.getElementById('wizard-advance-text'),
    step1: document.getElementById('wizard-step-1'),
    step2: document.getElementById('wizard-step-2'),
    successView: document.getElementById('wizard-success'),
    studentName: document.getElementById('student-name'),
    studentEmail: document.getElementById('student-email'),
    studentPhone: document.getElementById('student-phone'),
    paymentPlan: document.getElementById('course-payment-plan'),
    summaryGroupDetails: document.getElementById('summary-group-details'),
    summaryGroupSize: document.getElementById('summary-group-size'),
    successCourseName: document.getElementById('success-course-name'),
    summaryStudentName: document.getElementById('summary-student-name'),
    summaryStudentPlan: document.getElementById('summary-student-plan'),
    summaryStudentCost: document.getElementById('summary-student-cost'),
    contactForm: document.getElementById('contact-form'),
    contactName: document.getElementById('contact-name'),
    contactPhone: document.getElementById('contact-phone'),
    contactEmail: document.getElementById('contact-email'),
    contactCourse: document.getElementById('contact-course'),
    contactMessage: document.getElementById('contact-message'),
    contactSuccess: document.getElementById('contact-success'),
    coursesGrid: document.getElementById('courses-grid'),
    header: document.querySelector('header'),
    sections: document.querySelectorAll('section[id]'),
    navLinks: document.querySelectorAll('.nav-link'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu')
};

/* --- DYNAMIC COURSE DATA (ARCHITECTURAL OPTIMIZATION) --- */
const coursesCatalog = [
    {
        title: "SSM", hours: "80h", price: 800, icon: "fa-hard-hat",
        badge: "Best Seller",
        desc: "Obține certificarea oficială pentru funcția de Inspector Sănătate și Securitate în Muncă. Învață să previi riscurile, să asiguri normele de protecție și să implementezi corect legislația în vigoare.",
        blob: "M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.5,-40.8C85.9,-26.3,92.5,-11.3,90.3,2.4C88.1,16.1,77,28.5,67.1,41.2C57.2,53.9,48.5,66.9,35.8,74.5C23.1,82.1,6.4,84.3,-8.6,81.1C-23.6,77.9,-36.9,69.3,-49.2,59.9C-61.5,50.5,-72.8,40.3,-80.4,26.9C-88,13.5,-91.9,-3.1,-87.3,-17.5C-82.7,-31.9,-69.6,-44.1,-56.3,-52.7C-43,-61.3,-29.5,-66.3,-15.5,-68.3C-1.5,-70.3,13.1,-69.3,27.5,-73.4C32.1,-74.6,38.9,-79.8,45.7,-76.4Z"
    },
    {
        title: "Cadru Tehnic PSI", hours: "120h", price: 800, icon: "fa-clipboard-check",
        badge: "Popular",
        desc: "Învață să coordonezi și să implementezi activitățile de apărare împotriva incendiilor. Obține certificarea necesară pentru a asigura normele PSI în orice organizație.",
        blob: "M55.8,-63.4C69.6,-53.4,76.2,-33.1,77.7,-12.9C79.2,7.3,75.6,27.4,64.6,43.2C53.6,59,35.2,70.5,14.7,75.2C-5.8,79.9,-28.4,77.8,-46.8,68.4C-65.2,59,-79.4,42.3,-84.3,22.7C-89.2,3.1,-84.8,-19.5,-73.4,-36.8C-62,-54.1,-43.6,-66.5,-25.1,-70.6C-6.6,-74.7,12.3,-70.5,29.2,-64.9Z"
    },
    {
        title: "Instructor Sportiv", hours: "100h", price: 800, icon: "fa-dumbbell",
        desc: "Transformă-ți pasiunea într-o carieră certificată. Învață să coordonezi antrenamente, să concepi planuri de pregătire fizică și să motivezi cursanții pentru performanță.",
        blob: "M47.5,-52.1C59.6,-40.5,66.1,-20.2,66.8,0.6C67.5,21.4,62.4,42.8,50.3,55.4C38.2,68,19.1,71.8,-1.1,72.9C-21.3,74,-42.6,72.4,-56.3,59.8C-70,47.2,-76.1,23.6,-73.4,4.1C-70.7,-15.4,-59.2,-30.8,-45.5,-42.4C-31.8,-54,-15.9,-61.8,2.2,-64C20.3,-66.2,40.6,-62.8,47.5,-52.1Z"
    },
    {
        title: "Responsabil GDPR", hours: "180h", price: 800, icon: "fa-user-shield",
        desc: "Devino specialist autorizat în protecția datelor. Învață să implementezi procedurile de conformitate, să gestionezi riscurile și să asiguri respectarea legislației europene în organizații.",
        blob: "M52.4,-67.2C65.4,-54.6,71.8,-35.1,74.5,-15.3C77.2,4.5,76.2,24.6,67.1,41.2C58,57.8,40.8,70.9,20.8,76.5C0.8,82.1,-22,80.2,-41.4,70.9C-60.8,61.6,-76.8,44.9,-83.4,24.6C-90,4.3,-87.2,-19.6,-75.7,-37.2C-64.2,-54.8,-44,-66.1,-24.8,-70.6C-5.6,-75.1,12.8,-72.8,28.8,-67.5Z"
    },
    {
        title: "Servant Pompier", hours: "180h", price: 800, icon: "fa-fire-extinguisher",
        desc: "Obține certificarea pentru a interveni rapid și eficient în situații de urgență. Învață tehnicile de prevenire, localizare și stingere a incendiilor pentru siguranța organizației.",
        blob: "M39.6,-64.3C52,-56.4,63.1,-45.5,71.5,-32.1C79.9,-18.7,85.6,-2.8,83.4,12.2C81.2,27.2,71.1,41.3,58.3,51.8C45.5,62.3,30,69.2,13.7,73.1C-2.6,77,-19.7,77.9,-34.5,71.4C-49.3,64.9,-61.8,51,-70.5,35.1C-79.2,19.2,-84.1,1.3,-80.6,-14.8C-77.1,-30.9,-65.2,-45.2,-51.1,-52.8C-37,-60.4,-20.8,-61.2,-4.8,-55.6C11.2,-50,27.2,-72.2,39.6,-64.3Z"
    },
    {
        title: "Șef SVSU", hours: "180h", price: 800, icon: "fa-users-gear",
        desc: "Obține certificarea pentru a conduce și coordona Serviciul Voluntar pentru Situații de Urgență. Învață să gestionezi eficient situațiile de criză și să asiguri intervenția promptă a echipajelor.",
        blob: "M41.7,-64.8C54.4,-57.4,65.3,-45.8,71.6,-31.6C77.9,-17.4,79.5,-0.6,75.4,14.6C71.3,29.8,61.5,43.4,48.7,53.4C35.9,63.4,20.1,69.8,3.2,64.9C-13.7,60,-31.5,43.7,-45.1,30.3C-58.7,16.9,-68.1,6.4,-68.7,-4.6C-69.3,-15.6,-61.1,-27.1,-50.7,-35.6C-40.3,-44.1,-27.7,-49.6,-14.7,-54.6C-1.7,-59.6,11.7,-64.1,25.4,-66.6C39.1,-69.1,53.1,-69.6,41.7,-64.8Z"
    },
    {
        title: "Operator Termoprotecție", hours: "120h", price: 2000, icon: "fa-layer-group",
        desc: "Învață să aplici corect vopsele și materiale termoprotectoare pentru structuri. Obține certificarea esențială pentru asigurarea rezistenței la foc a clădirilor.",
        blob: "M44.6,-53.8C57.6,-45.4,67.8,-30.9,73.1,-14.4C78.4,2.1,78.8,20.6,69.5,35C60.2,49.4,41.2,59.7,21.9,64.7C2.6,69.7,-17,69.4,-33.4,62.3C-49.8,55.2,-63,41.3,-71.4,24.4C-79.8,7.5,-83.4,-12.2,-76.3,-27.4C-69.2,-42.6,-51.4,-53.3,-34.5,-59.5C-17.6,-65.7,-1.6,-67.4,13.6,-64C28.8,-60.6,43.2,-52.1,44.6,-53.8Z"
    },
    {
        title: "Doar Examinare", hours: "N/A", price: 200, icon: "fa-file-signature",
        desc: "Ai parcurs deja pregătirea teoretică în altă parte? Înscrie-te strict pentru susținerea examenului și eliberarea diplomei autorizate ANC.",
        blob: "M55.8,-63.4C69.6,-53.4,76.2,-33.1,77.7,-12.9C79.2,7.3,75.6,27.4,64.6,43.2C53.6,59,35.2,70.5,14.7,75.2C-5.8,79.9,-28.4,77.8,-46.8,68.4C-65.2,59,-79.4,42.3,-84.3,22.7C-89.2,3.1,-84.8,-19.5,-73.4,-36.8C-62,-54.1,-43.6,-66.5,-25.1,-70.6C-6.6,-74.7,12.3,-70.5,29.2,-64.9Z"
    }
];

const renderCourses = () => {
    if (!UI.coursesGrid) return;
    
    let html = '';
    coursesCatalog.forEach(course => {
        html += `
        <div class="course-card glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer" onclick="openBookingWizard('${course.title}', ${course.price})">
            <div>
                <div class="relative h-56 bg-[#0a0c10] overflow-hidden flex items-center justify-center group-hover:bg-[#0e1015] group-[.mobile-active]:bg-[#0e1015] transition-colors duration-500">
                    ${course.badge ? `
                    <div class="absolute top-4 left-4 z-20 pointer-events-none">
                        <span class="relative flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 border border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] transform group-hover:scale-110 group-[.mobile-active]:scale-110 transition-transform duration-300">
                            <span class="animate-ping-small absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-40 left-0 top-0"></span>
                            <i class="fa-solid fa-fire text-white text-[10px] mr-1.5 animate-pulse"></i>
                            <span class="relative text-[9px] font-black text-white uppercase tracking-widest drop-shadow-md">${course.badge}</span>
                        </span>
                    </div>` : ''}
                    <svg aria-hidden="true" class="absolute w-64 h-64 text-gold/5 group-hover:text-gold/10 group-[.mobile-active]:text-gold/10 transition-all duration-700 ease-out group-hover:scale-125 group-[.mobile-active]:scale-125 group-hover:rotate-12 group-[.mobile-active]:rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="${course.blob}" transform="translate(100 100)" />
                    </svg>
                    <div class="absolute w-32 h-32 border border-white/5 rounded-full group-hover:scale-110 group-[.mobile-active]:scale-110 transition-transform duration-500"></div>
                    <div class="absolute w-24 h-24 border border-gold/10 border-dashed rounded-full group-hover:rotate-180 group-[.mobile-active]:rotate-180 transition-all duration-1000 ease-in-out"></div>
                    <div class="absolute inset-0 pointer-events-none">
                        <div class="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-gold/40 rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-active]:opacity-100 group-hover:-translate-y-4 group-[.mobile-active]:-translate-y-4 group-hover:-translate-x-4 group-[.mobile-active]:-translate-x-4 transition-all duration-500 delay-75"></div>
                        <div class="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-active]:opacity-100 group-hover:translate-y-4 group-[.mobile-active]:translate-y-4 group-hover:translate-x-4 group-[.mobile-active]:translate-x-4 transition-all duration-500 delay-150"></div>
                        <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-light/50 rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-active]:opacity-100 group-hover:-translate-y-6 group-[.mobile-active]:-translate-y-6 transition-all duration-500 delay-200"></div>
                    </div>
                    <i class="fa-solid ${course.icon} text-6xl text-gray-500 group-hover:text-gold group-[.mobile-active]:text-gold transition-all duration-500 group-hover:scale-110 group-[.mobile-active]:scale-110 group-hover:-translate-y-1 group-[.mobile-active]:-translate-y-1 relative z-10 drop-shadow-lg"></i>
                    <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121418] to-transparent z-10"></div>
                </div>
                
                <div class="p-6 space-y-4 relative z-10 -mt-6">
                    <h3 class="text-xl font-bold text-[#f5f5f5] group-hover:text-gold group-[.mobile-active]:text-gold transition-all duration-300 drop-shadow-md transform origin-left group-hover:scale-110 group-[.mobile-active]:scale-110 inline-block max-w-full break-words">${course.title}</h3>
                    <div class="flex items-center space-x-1.5 -mt-1">
                        <i class="fa-regular fa-clock text-gold text-xs"></i>
                        <span class="text-[11px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-yellow-100 to-gold drop-shadow-[0_0_8px_rgba(214,163,80,0.8)]">Ore de curs: ${course.hours}</span>
                    </div>
                    <p class="text-sm text-gray-400 group-hover:text-gray-300 group-[.mobile-active]:text-gray-300 transition-colors">${course.desc}</p>
                </div>
            </div>
            <div class="p-4 sm:p-6 border-t border-white/5 bg-white/5 flex items-center justify-between gap-3 transition-colors duration-300 group-hover:bg-white/10 group-[.mobile-active]:bg-white/10">
                <div>
                    <p class="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light drop-shadow-[0_0_4px_rgba(214,163,80,0.4)] whitespace-nowrap">${course.price} RON</p>
                </div>
                <button type="button" onclick="event.stopPropagation(); openBookingWizard('${course.title}', ${course.price})" class="touch-manipulation px-4 sm:px-5 py-2 sm:py-2.5 bg-gold md:hover:bg-gold-light text-darkbg font-bold rounded-lg text-xs sm:text-sm transition-all duration-300 md:hover:shadow-lg md:hover:shadow-gold/20 flex items-center space-x-1.5 sm:space-x-2 transform md:active:scale-95 flex-shrink-0">
                    <span>Rezervă Curs</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>`;
    });

    // Add the "Coming Soon" placeholder card at the end
    html += `
    <div class="glass-card rounded-2xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-white/10 hover:border-gold/30 group-[.mobile-active]:border-gold/30 group transition-all duration-500 h-full min-h-[400px]">
        <div class="relative w-20 h-20 mb-6 flex items-center justify-center">
            <div class="absolute inset-0 bg-gold/10 rounded-full animate-ping" style="animation-duration: 3s;"></div>
            <div class="absolute inset-2 bg-gradient-to-tr from-gold-dark to-gold rounded-full opacity-10"></div>
            <i class="fa-solid fa-hourglass-half text-4xl text-gold drop-shadow-[0_0_15px_rgba(214,163,80,0.5)] animate-pulse"></i>
        </div>
        <h3 class="text-xl font-bold text-[#f5f5f5] group-hover:text-gold group-[.mobile-active]:text-gold transition-all duration-300 mb-3 transform group-hover:scale-110 group-[.mobile-active]:scale-110 inline-block">Noi cursuri în curând</h3>
        <p class="text-sm text-gray-400 group-hover:text-gray-300 group-[.mobile-active]:text-gray-300 transition-colors max-w-[250px]">Lucrăm la actualizarea portofoliului nostru. Noi programe de formare profesională vor fi disponibile curând!</p>
        <div class="mt-8 px-5 py-2 bg-darkbg rounded-full border border-gray-800 flex items-center space-x-2 shadow-inner">
            <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">În Așteptare</span>
        </div>
    </div>`;
    
    UI.coursesGrid.innerHTML = html;

    // Mobile scroll-hover effect
    if (window.matchMedia("(hover: none)").matches) {
        const cards = UI.coursesGrid.querySelectorAll('.group');
        const cardOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Trigger later: only when the card hits the exact center of the screen
            threshold: 0
        };
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('mobile-active');
                } else {
                    entry.target.classList.remove('mobile-active');
                }
            });
        }, cardOptions);
        
        cards.forEach(card => cardObserver.observe(card));
    }
};

/* --- INITIALIZATION --- */
window.onload = () => {
    // Render dynamic courses from array
    renderCourses();

    // Close modal with Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBookingWizard();
            toggleDetailsDrawer(false);
        }
    });
};

/* --- SCROLL & MODAL HELPERS --- */
const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const lockScroll = () => {
    if (document.body.classList.contains('overflow-hidden')) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (UI.header) UI.header.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add('overflow-hidden');
};

const unlockScroll = () => {
    document.body.style.paddingRight = '';
    if (UI.header) UI.header.style.paddingRight = '';
    document.body.classList.remove('overflow-hidden');
};

let tickingScroll = false;

window.addEventListener('scroll', () => {
    if (!tickingScroll) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 20) {
                if (UI.header) UI.header.classList.add('shadow-xl', 'border-gold/30');
            } else {
                if (UI.header) UI.header.classList.remove('shadow-xl', 'border-gold/30');
            }
            
            tickingScroll = false;
        });
        tickingScroll = true;
    }
}, { passive: true });

// Trigger initial scroll calculation to set correct nav link on load
window.dispatchEvent(new Event('scroll'));

/* --- INTERSECTION OBSERVER (SCROLL SPY / NAV LINKS) --- */

const navSpyOptions = {
    // This margin triggers the state change when a section crosses the middle of the screen
    rootMargin: "-40% 0px -60% 0px",
    threshold: 0
};

const navSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            // Keep "Despre Noi" lit up if user reaches the FAQ section
            const activeSectionId = sectionId === 'faq' ? 'despre' : sectionId;
            
            if (UI.navLinks) {
                UI.navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${activeSectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        }
    });
}, navSpyOptions);

if (UI.sections) {
    UI.sections.forEach(section => {
        navSpyObserver.observe(section);
    });
}

/* --- MOBILE MENU LOGIC --- */
const toggleMobileMenu = () => {
    if (UI.mobileMenu) {
        UI.mobileMenu.classList.toggle('max-h-0');
        UI.mobileMenu.classList.toggle('opacity-0');
        UI.mobileMenu.classList.toggle('max-h-[400px]');
        UI.mobileMenu.classList.toggle('opacity-100');
    }
};

if (UI.mobileMenuBtn) {
    UI.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile drawer on navigation click
if (UI.mobileMenu) {
    const mobileLinks = UI.mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (UI.mobileMenu.classList.contains('max-h-[400px]')) toggleMobileMenu();
        });
    });
}

/* --- UI COMPONENTS --- */

const toggleAccordion = (id, btnElement) => {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
        if (btnElement) btnElement.setAttribute('aria-expanded', 'true');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
        if (btnElement) btnElement.setAttribute('aria-expanded', 'false');
    }
};

const toggleDetailsDrawer = (isOpen) => {
    if (isOpen) {
        UI.detailsDrawer.classList.remove('translate-x-full');
        lockScroll();
    } else {
        UI.detailsDrawer.classList.add('translate-x-full');
        unlockScroll();
    }
};

/* --- BOOKING WIZARD LOGIC --- */
const openBookingWizard = (courseName, price) => {
    currentCourse = courseName;
    currentPrice = price;
    
    // Set input values & text
    if (UI.selectedCourseTitle) UI.selectedCourseTitle.value = currentCourse;
    
    // Reset wizard states
    if (UI.reservationType) UI.reservationType.value = 'individual';
    if (UI.groupSize) UI.groupSize.value = 2;
    toggleGroupOptions(); // apply default UI logic
    
    // Reset progress bar glow (removed pulsating, replaced with smooth static glow)
    if (UI.stepBarContainer) UI.stepBarContainer.classList.remove('shadow-[0_0_20px_rgba(214,163,80,0.6)]');
    
    // Reset to Step 1
    goToStep(1);
    
    // Un-hide the wizard modal
    if (UI.bookingModal) UI.bookingModal.classList.remove('hidden');
    lockScroll();
};

const closeBookingWizard = () => {
    if (UI.bookingModal) UI.bookingModal.classList.add('hidden');
    unlockScroll();
};

const toggleGroupOptions = () => {
    if (!UI.reservationType || !UI.groupSizeContainer || !UI.groupPromoBanner) return;
    const type = UI.reservationType.value;
    
    if (type === 'grup') {
        UI.groupSizeContainer.classList.remove('hidden');
        UI.groupPromoBanner.classList.remove('hidden');
        UI.groupPromoBanner.classList.add('animate-toast'); 
    } else {
        UI.groupSizeContainer.classList.add('hidden');
        UI.groupPromoBanner.classList.add('hidden');
        UI.groupPromoBanner.classList.remove('animate-toast');
        UI.groupSize.value = 2; // Default reset visually
    }
    calculateWizardPrice();
};

const calculateWizardPrice = () => {
    let multiplier = 1;
    let discountPercent = 0;

    if (UI.reservationType && UI.reservationType.value === 'grup') {
        const size = parseInt(UI.groupSize.value);
        multiplier = isNaN(size) || size < 2 ? 2 : size;

        // Calculate percentage discount based on group thresholds
        if (multiplier >= 30) discountPercent = 0.20;
        else if (multiplier >= 20) discountPercent = 0.15;
        else if (multiplier >= 10) discountPercent = 0.10;
        else if (multiplier >= 3) discountPercent = 0.05;
    }
    
    const baseTotal = currentPrice * multiplier;
    const discountAmount = baseTotal * discountPercent;
    const finalTotal = baseTotal - discountAmount;
    
    if (UI.priceDisplay) UI.priceDisplay.innerText = `${finalTotal} RON`;

    // Handle Savings Badge and Crossed-out price UI
    if (discountAmount > 0) {
        if (UI.originalPrice) {
            UI.originalPrice.innerText = `${baseTotal} RON`;
            UI.originalPrice.classList.remove('hidden');
        }
        if (UI.savingsBadge && UI.savingsText) {
            UI.savingsText.innerText = `Economisești ${discountAmount} RON`;
            UI.savingsBadge.classList.remove('hidden');
        }
    } else {
        if (UI.originalPrice) UI.originalPrice.classList.add('hidden');
        if (UI.savingsBadge) UI.savingsBadge.classList.add('hidden');
    }

    // Handle Advance Payment Display (25% for installments)
    if (UI.paymentPlan && UI.paymentPlan.value === 'rate') {
        const advanceAmount = finalTotal * 0.25;
        if (UI.advanceBadge && UI.advanceText) {
            UI.advanceText.innerText = `Avans necesar: ${advanceAmount} RON`;
            UI.advanceBadge.classList.remove('hidden');
        }
    } else {
        if (UI.advanceBadge) UI.advanceBadge.classList.add('hidden');
    }
};

const goToStep = (step) => {
    currentStep = step;
    if (!UI.step1 || !UI.step2 || !UI.successView || !UI.stepBadge || !UI.stepBar) return;

    if (step === 1) {
        UI.step1.classList.remove('hidden');
        UI.step2.classList.add('hidden');
        UI.successView.classList.add('hidden');
        UI.stepBadge.innerText = "Pasul 1 din 2: Configurare Curs";
        UI.stepBar.style.width = "50%";
    } else if (step === 2) {
        UI.step1.classList.add('hidden');
        UI.step2.classList.remove('hidden');
        UI.successView.classList.add('hidden');
        UI.stepBadge.innerText = "Pasul 2 din 2: Informații Rezervare";
        UI.stepBar.style.width = "100%";
    }
};

const handleWizardSubmit = async (e) => {
    e.preventDefault();

    // 1. Gather all form data to send to Backend (Excel/Email)
    const payload = {
        formType: 'REZERVARE_CURS',
        courseName: currentCourse,
            studentName: UI.studentName.value,
            studentEmail: UI.studentEmail.value,
            studentPhone: UI.studentPhone.value,
            paymentPlan: UI.paymentPlan.value === 'integral' ? "Plată Integrală" : "Plată în rate (25% avans)",
            reservationType: UI.reservationType.value,
            groupSize: UI.reservationType.value === 'grup' ? UI.groupSize.value : 1,
            totalCost: UI.priceDisplay.innerText
    };

    // 2. Disable button and show Loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i><span> SE PROCESEAZĂ...</span>';
    submitBtn.disabled = true;

    try {
        // ==========================================
        // 3. BACKEND INTEGRATION
        // Uncomment the fetch call below and replace the URL with your 
        // Google Apps Script Web App URL or Formspree endpoint!
        // ==========================================
        /*
        const response = await fetch('YOUR_API_ENDPOINT_URL_HERE', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error('Network error');
        */

        // Simulate network delay for testing
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 4. Update Success UI variables
        const name = payload.studentName;
        let plan = payload.paymentPlan;
    const type = UI.reservationType.value;
    
    if (type === 'grup') {
        const size = UI.groupSize.value;
        if (UI.summaryGroupSize) UI.summaryGroupSize.innerText = `${size} persoane`;
        if (UI.summaryGroupDetails) UI.summaryGroupDetails.classList.remove('hidden');
    } else {
        if (UI.summaryGroupDetails) UI.summaryGroupDetails.classList.add('hidden');
    }

    const cost = payload.totalCost;

    // Update success text details
    if (UI.successCourseName) UI.successCourseName.innerText = currentCourse;
    if (UI.summaryStudentName) UI.summaryStudentName.innerText = name;
    if (UI.summaryStudentPlan) UI.summaryStudentPlan.innerText = plan;
    if (UI.summaryStudentCost) UI.summaryStudentCost.innerText = cost;

    // Toggle views within booking modal
    if (UI.step2) UI.step2.classList.add('hidden');
    if (UI.successView) UI.successView.classList.remove('hidden');
    
    // Updated to Rezervare Finalizată and add a constant, elegant completion glow
    if (UI.stepBadge) UI.stepBadge.innerText = "Rezervare Finalizată";
    if (UI.stepBarContainer) UI.stepBarContainer.classList.add('shadow-[0_0_20px_rgba(214,163,80,0.6)]');
        
    } catch (error) {
        console.error("Submission error:", error);
        alert("A apărut o eroare la conexiunea cu serverul. Vă rugăm să ne contactați telefonic.");
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
};

/* --- CONTACT FORM LOGIC --- */
const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    // Gather form data
    const payload = {
        formType: 'MESAJ_CONTACT',
            name: UI.contactName.value,
            phone: UI.contactPhone.value,
            email: UI.contactEmail.value,
            courseInterest: UI.contactCourse.value,
            message: UI.contactMessage.value
    };

    // Show Loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i><span> SE TRIMITE...</span>';
    submitBtn.disabled = true;

    try {
        // Uncomment to send to backend API
        /*
        await fetch('YOUR_API_ENDPOINT_URL_HERE', { ... });
        */
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show custom elegant success overlay
        if (UI.contactSuccess) UI.contactSuccess.classList.remove('hidden');
    } catch (error) {
        alert("Eroare la trimitere. Vă rugăm încercați din nou.");
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
};

const resetContactForm = () => {
    if (UI.contactForm) UI.contactForm.reset();
    if (UI.contactSuccess) {
        UI.contactSuccess.classList.add('hidden');
    }
};

/* --- INTERSECTION OBSERVER (SCROLL REVEAL) --- */

const revealOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px 0px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Oprim observarea pentru a avea animatia o singura data, fluid
            observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal, .reveal-title').forEach(el => {
    revealObserver.observe(el);
});

/* --- AMBIENT BACKGROUND PARALLAX --- */
let tickingMouse = false;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
    
    if (!tickingMouse) {
        window.requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--mouseX', mouseX);
            document.documentElement.style.setProperty('--mouseY', mouseY);
            tickingMouse = false;
        });
        tickingMouse = true;
    }
}, { passive: true });