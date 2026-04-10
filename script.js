// ============================================
// Bravo.Ai - Enhanced Interactive Marketplace
// ============================================

// ============================================
// Header Scroll Effect
// ============================================

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  }, { passive: true });
}

// ============================================
// Parallax Effect for Orbs
// ============================================

function initParallax() {
  const orbs = document.querySelectorAll('.glow-orb');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, i) => {
      const speed = 0.08 + (i * 0.04);
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, { passive: true });
}

// ============================================
// Scroll Reveal
// ============================================

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ============================================
// Button Ripple Effect
// ============================================

function initRippleEffect() {
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.55s linear;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
      `;

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ============================================
// Typing Effect for Hero
// ============================================

function initTypingEffect() {
  const title = document.querySelector('.hero-title');
  if (!title) return;

  // Get the two lines
  const html = title.innerHTML;
  const lines = html.split('<br>');
  if (lines.length < 2) {
    // Fallback: single line
    const text = title.textContent;
    title.textContent = '';
    title.style.paddingRight = '6px';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i++);
        setTimeout(type, 28);
      } else {
        title.style.paddingRight = '0';
      }
    };
    setTimeout(type, 500);
    return;
  }

  // Type both lines preserving the <br>
  const line1 = lines[0].replace(/<[^>]+>/g, '');
  const line2 = lines[1].replace(/<[^>]+>/g, '');
  title.innerHTML = '';

  const span1 = document.createElement('span');
  const br = document.createElement('br');
  const span2 = document.createElement('span');
  title.appendChild(span1);
  title.appendChild(br);
  title.appendChild(span2);

  let i = 0;
  const typeAll = (text, el, cb) => {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      setTimeout(() => typeAll(text, el, cb), 28);
    } else {
      i = 0;
      if (cb) setTimeout(cb, 60);
    }
  };

  setTimeout(() => {
    typeAll(line1, span1, () => {
      typeAll(line2, span2, null);
    });
  }, 400);
}

// ============================================
// Stat counter animation
// ============================================

function initCounters() {
  const stats = document.querySelectorAll('.stat-value');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      // Only animate numeric values
      const match = raw.match(/^(\d+)(\D*)$/);
      if (!match) return;

      const target = parseInt(match[1]);
      const suffix = match[2];
      let current = 0;
      const duration = 1200;
      const step = duration / target;
      const increment = Math.max(1, Math.ceil(target / 60));

      const tick = () => {
        current = Math.min(current + increment, target);
        el.textContent = current + suffix;
        if (current < target) setTimeout(tick, step);
      };
      setTimeout(tick, 300);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

// ============================================
// Clean Navigation (no hash or filename in URL)
// ============================================

function initCleanNavigation() {
  // Clean URL on page load if it contains .html
  const currentPath = window.location.pathname;
  if (currentPath.includes('.html')) {
    const cleanPath = currentPath.replace('.html', '');
    window.history.replaceState({}, '', cleanPath);
  }

  // Intercept ALL anchor clicks on the page
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Handle local anchors (#...)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);
      
      // Remove filename and hash from URL - show just domain and port
      window.history.replaceState({}, '', '/');
      
      // Smooth scroll to target
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } 
    // Handle navigation to index.html
    else if (href === 'index.html' || href.includes('index.html')) {
      e.preventDefault();
      window.history.replaceState({}, '', '/');
      window.location.href = '/';
    }
    // Handle navigation to other .html files in main directory
    else if (href.endsWith('.html')) {
      e.preventDefault();
      
      // Extract the filename without .html
      const fileName = href.split('/').pop().replace('.html', '');
      
      // Update URL to show filename without .html
      window.history.replaceState({}, '', '/' + fileName);
      window.location.href = href;
    }
  }, true); // Use capture phase to intercept before other handlers
}

// ============================================
// Waitlist Modal
// ============================================

function initWaitlistModal() {
  const modal = document.getElementById('waitlistModal');
  const modalClose = document.getElementById('modalClose');
  const waitlistForm = document.getElementById('waitlistForm');

  // Open modal on button click (but NOT on form submit)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn && btn.textContent.includes('Join Waitlist')) {
      // Skip if this button is inside the waitlist form
      if (waitlistForm.contains(btn)) {
        return;
      }
      
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form submission
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = waitlistForm.querySelector('input[type="text"]').value;
    const email = waitlistForm.querySelector('input[type="email"]').value;
    const interest = waitlistForm.querySelector('select').value;

    // Simple validation
    if (name && email && interest) {
      // Hide form and show success message
      waitlistForm.style.display = 'none';
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.add('show');

      // Close modal after 3 seconds
      setTimeout(() => {
        waitlistForm.style.display = '';
        successMessage.classList.remove('show');
        waitlistForm.reset();
        closeModal();
      }, 3000);
    }
  });
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initParallax();
  initScrollReveal();
  initRippleEffect();
  initTypingEffect();
  initCounters();
  initCleanNavigation();
  initWaitlistModal();

  console.log('Bravo.Ai Marketplace initialized');
});