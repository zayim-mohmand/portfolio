document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. TRADUCTIONS (DICTIONNAIRE) ---
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-exp": "Experiences",
            "nav-edu": "Education",
            "nav-proj": "Projects",
            "nav-skills": "Skills",
            "nav-ref": "References",
            "nav-contact": "Contact",
            "greeting": "Hello, I am",
            "role": "Computer Science Student",
            "description": "As a dedicated computer science student, I turn data, logic, and clean design into meaningful digital solutions. Driven by curiosity and precision, I build systems that connect ideas, streamline processes, and bring projects to life.",
            "download-cv": "Download my CV",
            "title-exp": "Experiences",
            "exp1-title": "Tutor helping with homework",
            "exp1-date": "November 2025 - Ongoing",
            "exp1-desc": "Providing academic support to middle and high school students within the community. Helping them understand lessons, complete exercises, and strengthen core subjects.",
            "exp2-title": "Delivering meals to elderly residents",
            "exp2-date": "June 2025 - August 2025",
            "exp2-desc": "Ensuring reliable, timely delivery while maintaining a respectful and supportive relationship with recipients. Providing a friendly presence.",
            "exp3-title": "Multi-purpose agent",
            "exp3-date": "June 2024 - August 2024",
            "exp3-desc": "Delivery of fabrics, laundry, and clothing to businesses. Cash handling and register management. Customer reception and assistance.",
            "title-edu": "Education",
            "edu1-title": "BUT Informatique (Technical Bachelor’s Degree)",
            "edu1-date": "2024 - Ongoing",
            "edu1-desc": "Specializing in database administration, management, and operations.",
            "edu2-title": "French Baccalaureate",
            "edu2-desc": "High School diploma specialized in Mathematic and Earth science",
            "title-proj": "Projects",
            "proj1-desc": "A fast-paced 2D platformer where you must collect ingredients to face the final boss: a giant Raclette. AI-controlled enemies included.",
            "proj2-desc": "Construction Vehicle Rental System. Lightweight platform to manage BTP vehicle rentals: availability, scheduling, maintenance.",
            "proj3-desc": "2D Platformer – Coin Dash. Collect 28 coins while dodging spikes and enemies to reach the end without getting hit.",
            "see-github": "See on GitHub",
            "title-skills": "Skills",
            "skill-tech": "Technical Skills",
            "skill-soft": "Soft Skills",
            "skill-lang": "Languages",
            "soft1": "Responsibility/Teamwork",
            "soft2": "Punctuality/Public-Speaking",
            "soft3": "Reliability/Interpersonal",
            "soft4": "Communication",
            "lang-fr": "French (native speaker)",
            "lang-af": "Afghan Persian (native speaker)",
            "lang-en": "English (Intermediate speaker)",
            "title-ref": "References",
            "ref1-role": "Senior Developer @ Company",
            "ref2-role": "Project Manager @ Town Hall",
            "title-contact": "Contact",
            "contact-desc": "An idea? A project? Let's discuss.",
            "lbl-name": "Name",
            "lbl-email": "Email",
            "lbl-message": "Message",
            "btn-send": "Send Message",
            "footer": "All rights reserved"
        },
        fr: {
            "nav-home": "Accueil",
            "nav-exp": "Expériences",
            "nav-edu": "Formation",
            "nav-proj": "Projets",
            "nav-skills": "Compétences",
            "nav-ref": "Références",
            "nav-contact": "Contact",
            "greeting": "Bonjour, je suis",
            "role": "Étudiant en Informatique",
            "description": "En tant qu'étudiant passionné en informatique, je transforme données et logique en solutions numériques concrètes. Motivé par la curiosité et la précision, je conçois des systèmes performants pour donner vie à vos projets.",
            "download-cv": "Télécharger mon CV",
            "title-exp": "Expériences",
            "exp1-title": "Tuteur Aide aux Devoirs",
            "exp1-date": "Novembre 2025 - En cours",
            "exp1-desc": "Soutien scolaire aux collégiens et lycéens. Aide à la compréhension des cours, réalisation d'exercices et renforcement des matières principales.",
            "exp2-title": "Portage de repas aux aînés",
            "exp2-date": "Juin 2025 - Août 2025",
            "exp2-desc": "Livraison fiable et ponctuelle tout en maintenant une relation respectueuse avec les bénéficiaires. Veille au bien-être quotidien.",
            "exp3-title": "Agent Polyvalent",
            "exp3-date": "Juin 2024 - Août 2024",
            "exp3-desc": "Livraison de linge aux entreprises. Gestion de caisse. Accueil et assistance client.",
            "title-edu": "Formation",
            "edu1-title": "BUT Informatique",
            "edu1-date": "2024 - En cours",
            "edu1-desc": "Spécialisation en administration, gestion et exploitation de bases de données.",
            "edu2-title": "Baccalauréat Général",
            "edu2-desc": "Diplôme de lycée spécialisé en Mathématiques et SVT",
            "title-proj": "Projets",
            "proj1-desc": "Jeu de plateforme 2D rapide où vous devez collecter des ingrédients pour affronter le boss final : une Raclette géante.",
            "proj2-desc": "Système de location de véhicules BTP. Gestion des disponibilités, plannings, maintenance et réservations clients.",
            "proj3-desc": "Jeu de plateforme 2D – Coin Dash. Collectez 28 pièces en évitant les pièges et ennemis pour atteindre la fin.",
            "see-github": "Voir sur GitHub",
            "title-skills": "Compétences",
            "skill-tech": "Compétences Techniques",
            "skill-soft": "Savoir-être",
            "skill-lang": "Langues",
            "soft1": "Responsabilité/Travail d'équipe",
            "soft2": "Ponctualité/Prise de parole",
            "soft3": "Fiabilité/Relationnel",
            "soft4": "Communication",
            "lang-fr": "Français (langue maternelle)",
            "lang-af": "Persan Afghan (langue maternelle)",
            "lang-en": "Anglais (intermédiaire)",
            "title-ref": "Références",
            "ref1-role": "Développeur Senior @ Entreprise",
            "ref2-role": "Chef de Projet @ Mairie",
            "title-contact": "Contact",
            "contact-desc": "Une idée ? Un projet ? Discutons-en.",
            "lbl-name": "Nom",
            "lbl-email": "Email",
            "lbl-message": "Message",
            "btn-send": "Envoyer",
            "footer": "Tous droits réservés"
        }
    };

    let currentLang = 'en'; // Langue par défaut
    const langBtn = document.getElementById('lang-switch');

    // Fonction pour changer la langue
    function changeLanguage() {
        // Inverse la langue
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        
        // Change le texte du bouton
        langBtn.innerText = currentLang === 'en' ? 'FR' : 'EN';

        // Applique les traductions
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                // Si c'est un input ou textarea avec placeholder (optionnel, ici on a des labels)
                if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Si tu avais des placeholders à traduire
                } else {
                    // Pour les textes normaux, on garde l'icône si elle existe (pour github link)
                    if(el.querySelector('i')) {
                        const icon = el.querySelector('i').outerHTML;
                        el.innerHTML = translations[currentLang][key] + ' ' + icon;
                    } else {
                        el.innerText = translations[currentLang][key];
                    }
                }
            }
        });
    }

    // Écouteur sur le bouton de langue
    if(langBtn) {
        langBtn.addEventListener('click', changeLanguage);
    }

    /* --- 1. MENU BURGER --- */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a'); // Modifié pour cibler les liens 'a'

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    /* --- 2. ANIMATION SKILLS --- */
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.skill-per');

    function animateSkills() {
        progressBars.forEach(progressBar => {
            const targetWidth = progressBar.getAttribute('per');
            progressBar.style.width = targetWidth;
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills(); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if(skillsSection) {
        observer.observe(skillsSection);
    }

    /* --- 3. ENVOI EMAIL --- */
    const form = document.getElementById('contact-form');
    
    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById("my-form-status");
        const data = new FormData(event.target);
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = currentLang === 'en' ? "Sending..." : "Envoi...";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = currentLang === 'en' ? "Message sent!" : "Message envoyé !";
                status.style.color = "#2ecc71";
                form.reset();
            } else {
                status.innerHTML = "Oops! Error.";
                status.style.color = "red";
            }
        }).catch(error => {
            status.innerHTML = "Oops! Network Error.";
            status.style.color = "red";
        }).finally(() => {
            btn.innerHTML = originalText;
        });
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});