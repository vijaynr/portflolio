document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize education section
  renderEducation();
  
  // Initialize experience section
  renderExperience();
  
  // Initialize projects
  renderProjects();
  
  // Initialize skills
  renderSkills();
  
  // Initialize stats
  renderStats();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize scroll animations
  initScrollAnimations();
});

// Theme Management
function initTheme() {
  const themeSwitches = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitches.forEach(toggle => toggle.checked = true);
  }
  
  // Theme switch event listeners
  themeSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeSwitches.forEach(t => t.checked = true);
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeSwitches.forEach(t => t.checked = false);
      }
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
}

// Scroll Animations
function initScrollAnimations() {
  const experienceItems = document.querySelectorAll('.experience-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once the item is visible, unobserve it for performance
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  experienceItems.forEach(item => observer.observe(item));
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  if (projectsGrid && projects) {
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'pixel-card project-item';
      
      projectCard.innerHTML = `
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-category">${project.category ? project.category.join(', ') : ''}</span>
        </div>
        </div>
        <div class="project-details-wrapper">
          <p class="project-description">${project.description}</p>
          <div class="project-tech-stack">
            <span class="tech">${project.techStack ? project.techStack.join(', ') : ''}</span>
          </div>
          <a href="${project.link}" class="pixel-button sm">VIEW PROJECT</a>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }
}

// Render Skills
function renderSkills() {
  const skillsGrid = document.querySelector('.skills-grid');
  
  if (skillsGrid && skills) {
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      
      skillItem.innerHTML = `
        <div class="skill-name">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-level" data-level="${skill.level}"></div>
        </div>
      `;
      
      skillsGrid.appendChild(skillItem);
    });
    
    // Animate skill bars when visible
    setTimeout(() => {
      document.querySelectorAll('.skill-level').forEach(level => {
        level.style.width = `${level.getAttribute('data-level')}%`;
      });
    }, 500);
  }
}

// Render Education (Alma Mater)
function renderEducation() {
  const educationGrid = document.querySelector('.education-grid');
  
  if (educationGrid && education) {
    education.forEach(edu => {
      const educationItem = document.createElement('div');
      educationItem.className = 'education-item';
      
      educationItem.innerHTML = `
        <div class="education-period">${edu.period}</div>
        <h3 class="education-degree">${edu.degree}</h3>
        <div class="education-school">${edu.school}</div>
        <div class="education-location">${edu.location}</div>
        <p class="education-description">${edu.description}</p>
      `;
      
      educationGrid.appendChild(educationItem);
    });
  }
}

function renderExperience() {
  const experienceGrid = document.querySelector('.experience-grid');
  
  if (experienceGrid && experiences) {
    experiences.forEach(exp => {
      const experienceItem = document.createElement('div');
      experienceItem.className = 'experience-item';
      
      experienceItem.innerHTML = `
        <div class="experience-summary">
          <div class="experience-period">${exp.period}</div>
          <h3 class="experience-title">${exp.title}</h3>
          <div class="experience-company-details">
            <div class="experience-company">${exp.company}</div>
            <div class="experience-location">${exp.location}</div>
          </div
        </div>
        <div class="experience-details">
          <p class="experience-description">${exp.description}</p>
        </div>
      `;
      
      experienceGrid.appendChild(experienceItem);
    });
  }
}

// Render Stats
function renderStats() {
  const statsGrid = document.querySelector('.stats-grid');
  
  if (statsGrid && stats) {
    stats.forEach(stat => {
      const statItem = document.createElement('div');
      statItem.className = 'stat-item';
      
      statItem.innerHTML = `
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      `;
      
      statsGrid.appendChild(statItem);
    });
  }
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      
      window.location.href = `mailto:vj.co.dev@gmail.com?cc=${email}&subject=Website Contact by ${name}&body=${message}`;
      contactForm.reset();
    });
  }
}