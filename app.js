/**
 * YOR REALTY & PROPERTY MANAGEMENT — MASTER ULTRA-LUXURY CONTROLLER
 * Architecture:
 * - Exclusively Light Mode Design System
 * - Calm Ambient Canvas Engine (Subtle water currents, reduced animation)
 * - Controlled Spotlight Sheen & Micro-Elevations
 * - Curated Property Portfolio Filtering & Search Engine
 * - Interactive Specifications Modal
 * - Home Loan EMI Calculator
 * - Property Valuation Estimator
 * - Architectural FAQ Accordion
 * - Mobile Navigation Drawer
 * - Advisory Form Simulation & Floating Action Buttons
 */

// Curated Portfolio Database
const corporatePortfolio = [
  {
    id: "yor-101",
    title: "Palm Meadows 4BHK Contemporary Villa",
    category: "villas",
    badge: "Verified Title",
    priceFormatted: "₹85.0 Lakhs",
    priceSqft: "₹3,700/sq.ft",
    location: "Kadappakkada, Kollam",
    beds: 4,
    baths: 4,
    sqft: 2300,
    plotArea: "6.5 Cents",
    type: "Independent Villa",
    furnishing: "Semi-Furnished",
    rera: "K-RERA/PRJ/KLM/089",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    features: ["Private Borewell & KWA Water", "Covered Double Car Porch", "Teak Wood Joinery", "Solar Water Heating", "Gated Security Community"],
    description: "Architect-designed contemporary 4BHK Kerala style villa located in the posh residential enclave of Kadappakkada. Features expansive living spaces, interior courtyard, designer modular kitchen, and 100% verified 30-year prior deeds."
  },
  {
    id: "yor-103",
    title: "Skyline Central 2BHK Ready Apartment",
    category: "apartments",
    badge: "Immediate Handover",
    priceFormatted: "₹38.5 Lakhs",
    priceSqft: "₹3,350/sq.ft",
    location: "Asramam, Kollam",
    beds: 2,
    baths: 2,
    sqft: 1150,
    plotArea: "Level 4",
    type: "Residential Apartment",
    furnishing: "Ready to Move",
    rera: "K-RERA/PRJ/KLM/045",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    features: ["Gym & Clubhouse", "Dual High-Speed Lifts", "Lake View Balcony", "100% DG Power Backup", "Dedicated Basement Parking"],
    description: "Centrally positioned in Asramam near prime civic amenities. Ideal for young families or investors seeking high rental yield in prime Kollam city."
  },
  {
    id: "yor-104",
    title: "The Grand Waterfront Luxury Penthouse",
    category: "luxury",
    badge: "Signature Collection",
    priceFormatted: "₹1.95 Crore",
    priceSqft: "₹5,200/sq.ft",
    location: "Kowdiar, Trivandrum",
    beds: 4,
    baths: 5,
    sqft: 3750,
    plotArea: "Duplex Penthouse",
    type: "Luxury Penthouse",
    furnishing: "Designer Furnished",
    rera: "K-RERA/PRJ/TVM/201",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    features: ["Private Rooftop Terrace", "Italian Marble Flooring", "Smart Home Automation", "3 Covered Car Parks", "24/7 Concierge Support"],
    description: "The epitome of high-end living in Kowdiar, Trivandrum. Breathtaking panoramic skyline vistas, soaring ceilings, bespoke Italian finishes, and elite neighbor profile."
  },
  {
    id: "yor-105",
    title: "Golden Crest 15 Cents Residential Land",
    category: "plots",
    badge: "Clear 30-Yr Title",
    priceFormatted: "₹45.0 Lakhs",
    priceSqft: "₹3.0 Lakh/Cent",
    location: "Kottiyam, Kollam",
    beds: 0,
    baths: 0,
    sqft: 6534,
    plotArea: "15 Cents",
    type: "Residential Plot",
    furnishing: "Compound Wall & Gate",
    rera: "Panchayat Sanctioned",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    features: ["Heavy Lorry Access Road", "High Dry Elevated Land", "KSEB Electricity & Water Line", "Clear Boundary Demarcation", "Ready for Immediate Construction"],
    description: "Strategic residential square plot located 900 meters from NH 66 bypass. Ideal for building one or two independent luxury residences."
  },
  {
    id: "yor-106",
    title: "Apex Plaza Commercial Office Floor",
    category: "commercial",
    badge: "High Yield Asset (8.2%)",
    priceFormatted: "₹1.45 Crore",
    priceSqft: "₹5,800/sq.ft",
    location: "Chinnakkada, Kollam",
    beds: 0,
    baths: 2,
    sqft: 2500,
    plotArea: "Commercial Floor",
    type: "Commercial Space",
    furnishing: "Bare Shell with Restrooms",
    rera: "Commercial Permit Approved",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: ["Prime Commercial Corridor", "Passenger & Freight Lifts", "Advanced Fire Suppression", "Underground Parking", "High Footfall Hub"],
    description: "High-exposure commercial floor in the bustling center of Chinnakkada, Kollam. Ideal for financial institutions, diagnostic centers, IT firms, or corporate regional offices."
  },
  {
    id: "yor-107",
    title: "Ashtamudi Lake Heritage Waterfront Villa",
    category: "villas",
    badge: "Exclusive Lakefront",
    priceFormatted: "₹1.15 Crore",
    priceSqft: "₹4,100/sq.ft",
    location: "Thevally, Kollam",
    beds: 4,
    baths: 4,
    sqft: 2800,
    plotArea: "9.0 Cents",
    type: "Waterfront Villa",
    furnishing: "Fully Furnished",
    rera: "K-RERA/PRJ/KLM/148",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: ["Direct Lakefront Access & Private Jetty", "Traditional Kerala Wood Architecture", "Solar Inverter 5kW Backup", "Landscaped Garden with Fruit Trees", "Clear Legal Title & Encumbrance Free"],
    description: "Rare pristine waterfront estate facing the calm backwaters of Ashtamudi Lake in prestigious Thevally. Blends traditional Kerala charm with modern luxury fixtures."
  }
];

let currentFilter = 'all';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initFluidCanvas();
  initLiquidCursorAndSpotlight();
  initNavbar();
  initHeroSlider();
  initSearchDock();
  renderPortfolio();
  initPortfolioFilters();
  initConsultationModal();
  initEMICalculator();
  initValuationWidget();
  initFAQAccordion();
  initMobileNav();
  initContactForm();
  initFloatingTopBtn();
});

/* ==========================================================================
   1. CALM AMBIENT WATER CANVAS (REDUCED ANIMATION)
   Smooth, ultra-slow translucent currents that never distract
   ========================================================================== */
function initFluidCanvas() {
  const canvas = document.getElementById('fluidCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width, height;
  let ripples = [];
  let time = 0;
  let isRunning = true;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Subtle ripple only on deliberate clicks
  window.addEventListener('click', (e) => {
    addRipple(e.clientX, e.clientY, 35, 0.35);
  });

  function addRipple(x, y, maxRadius, strength) {
    if (ripples.length > 8) ripples.shift();
    ripples.push({
      x,
      y,
      radius: 0,
      maxRadius: maxRadius || 35,
      opacity: strength || 0.35,
      speed: 1.2
    });
  }

  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(render);
  });

  // Very slow, soft ambient currents in warm logo gold
  const waves = [
    { wavelength: 0.0012, amplitude: 16, speed: 0.0003, color: 'rgba(197, 155, 39, 0.015)', offset: 0.4 },
    { wavelength: 0.0018, amplitude: 22, speed: 0.0002, color: 'rgba(197, 155, 39, 0.012)', offset: 0.7 }
  ];

  function render() {
    if (!isRunning) return;
    time += 1;
    ctx.clearRect(0, 0, width, height);

    waves.forEach(wave => {
      ctx.beginPath();
      const baseY = height * wave.offset;
      ctx.moveTo(0, height);
      ctx.lineTo(0, baseY);

      for (let x = 0; x <= width; x += 24) {
        const yOffset = Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude;
        ctx.lineTo(x, baseY + yOffset);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    });

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += r.speed;
      r.opacity *= 0.97;

      if (r.opacity < 0.01 || r.radius > width * 0.4) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(197, 155, 39, ${r.opacity * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. LIQUID CURSOR & SUBTLE SPOTLIGHT (CONTROLLED, NO BROWSER WOBBLE)
   ========================================================================== */
function initLiquidCursorAndSpotlight() {
  const cursorGlow = document.getElementById('liquidCursorGlow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    }, { passive: true });
  }

  // Smooth spotlight coordinates without extreme 3D card tilt
  const cards = document.querySelectorAll(
    '.signature-card, .vertical-card, .trust-pill-item, .calculator-card, .testimonial-card, .contact-card-box, .finder-dock-card'
  );

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    }, { passive: true });
  });
}

/* ==========================================================================
   3. STICKY NAVBAR CONTROLLER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3.5 FULL-WIDTH HERO SLIDER CONTROLLER (3 SLIDES)
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('heroPrevSlide');
  const nextBtn = document.getElementById('heroNextSlide');
  const sliderWrap = document.getElementById('hero');

  if (!slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval = null;

  function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      showSlide(idx);
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    if (!slideInterval) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  function pauseAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function resetAutoSlide() {
    pauseAutoSlide();
    startAutoSlide();
  }

  sliderWrap?.addEventListener('mouseenter', pauseAutoSlide);
  sliderWrap?.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

/* ==========================================================================
   4. QUICK SEARCH DOCK & SUPERMARKET FINDER
   ========================================================================== */
function initSearchDock() {
  const btnSearch = document.getElementById('btnDockSearch');
  const typeSelect = document.getElementById('dockType');
  const locationSelect = document.getElementById('dockLocation');
  const purposeTabs = document.querySelectorAll('.finder-tab-btn');

  purposeTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      purposeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const purpose = tab.getAttribute('data-purpose');

      if (purpose === 'nri') {
        window.open('https://wa.me/919196562199?text=Hello%20YOR%20Realty,%20I%20am%20an%20NRI%20looking%20for%20property%20custodianship%20solutions.', '_blank');
      } else if (purpose === 'sell') {
        const valSection = document.getElementById('valuationSection');
        valSection?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  btnSearch?.addEventListener('click', (e) => {
    e.preventDefault();
    const type = typeSelect?.value || 'all';
    const loc = locationSelect?.value || 'all';

    const portfolioSec = document.getElementById('portfolioSection');
    if (portfolioSec) {
      currentFilter = type;
      const filterBtns = document.querySelectorAll('.p-filter-pill');
      filterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === type);
      });

      const searchInput = document.getElementById('portfolioSearchInput');
      if (searchInput) {
        searchInput.value = loc !== 'all' ? loc : '';
      }

      renderPortfolio();
      portfolioSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      let targetUrl = 'properties.html';
      const params = [];
      if (type !== 'all') params.push(`filter=${encodeURIComponent(type)}`);
      if (loc !== 'all') params.push(`loc=${encodeURIComponent(loc)}`);
      if (params.length > 0) targetUrl += `?${params.join('&')}`;
      window.location.href = targetUrl;
    }
  });
}

/* ==========================================================================
   5. CURATED PROPERTY PORTFOLIO & FILTER ENGINE
   ========================================================================== */
function renderPortfolio() {
  const container = document.getElementById('portfolioGrid');
  const resultCount = document.getElementById('portfolioResultCount');
  if (!container) return;

  let items = [...corporatePortfolio];

  // Category Filter
  if (currentFilter !== 'all') {
    items = items.filter(p => p.category === currentFilter);
  }

  // Keyword Search Filter
  const searchInput = document.getElementById('portfolioSearchInput');
  if (searchInput && searchInput.value.trim() !== '') {
    const query = searchInput.value.toLowerCase().trim();
    items = items.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query)
    );
  }

  if (resultCount) {
    resultCount.textContent = `Showing ${items.length} of ${corporatePortfolio.length} verified properties`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #ffffff; border-radius: var(--radius-xl); border: 1px dashed var(--border-card);">
        <i class="fa-solid fa-house-chimney-crack" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.5rem;">No properties found in this category</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try viewing all properties or clear your search term.</p>
        <button onclick="resetPortfolioFilter()" class="btn-sig-specs" style="margin: 0 auto; display: inline-flex; padding: 10px 24px;">View All Properties</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="signature-card" data-id="${p.id}">
      <div class="signature-card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';" />
        <span class="signature-tag-badge">${p.badge}</span>
      </div>

      <div class="signature-card-body">
        <div class="sig-price-row">
          <span class="sig-price-text">${p.priceFormatted}</span>
          <span class="sig-rera-pill"><i class="fa-solid fa-shield-halved"></i> ${p.rera}</span>
        </div>

        <h3 class="sig-card-title">${p.title}</h3>
        <div class="sig-card-loc">
          <i class="fa-solid fa-location-dot"></i>
          <span>${p.location}</span>
        </div>

        <div class="sig-specs-strip">
          <span><i class="fa-solid fa-building"></i> ${p.type}</span>
          <span><i class="fa-solid fa-ruler-combined"></i> ${p.plotArea || p.sqft + ' sq.ft'}</span>
          <span><i class="fa-solid fa-bed"></i> ${p.beds > 0 ? p.beds + ' BHK' : 'Custom'}</span>
        </div>

        <div class="sig-actions-row">
          <a href="https://wa.me/919196562199?text=Hello%20YOR%20Realty,%20I%20would%20like%20details%20for%20${encodeURIComponent(p.title)}%20(${encodeURIComponent(p.location)})" target="_blank" class="btn-sig-wa">
            <i class="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <button class="btn-sig-specs" onclick="openPropertyModal('${p.id}')">
            <span>View Specs</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.resetPortfolioFilter = function() {
  currentFilter = 'all';
  const filterBtns = document.querySelectorAll('.p-filter-pill');
  filterBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all'));
  const searchInput = document.getElementById('portfolioSearchInput');
  if (searchInput) searchInput.value = '';
  renderPortfolio();
};

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.p-filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderPortfolio();
    });
  });

  const searchInput = document.getElementById('portfolioSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderPortfolio();
    });
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter') || urlParams.get('type');
    const locParam = urlParams.get('loc');

    if (filterParam && filterParam !== 'all') {
      currentFilter = filterParam;
      filterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === filterParam);
      });
    }

    if (locParam && locParam !== 'all' && searchInput) {
      searchInput.value = locParam;
    }

    if (filterParam || locParam) {
      renderPortfolio();
    }
  } catch (err) {}
}

/* ==========================================================================
   6. PROPERTY SPECIFICATIONS MODAL
   ========================================================================== */
window.openPropertyModal = function(id) {
  const p = corporatePortfolio.find(item => item.id === id);
  if (!p) return;

  const overlay = document.getElementById('detailsModalOverlay');
  const content = document.getElementById('detailsModalContent');

  if (content) {
    content.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        <img src="${p.image}" alt="${p.title}" style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-lg);" />
        
        <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h2 style="font-family:var(--font-heading); font-size:1.6rem; color:var(--text-primary);">${p.title}</h2>
            <div style="display:flex; align-items:center; gap:6px; color:var(--text-muted); font-size:0.95rem; margin-top:4px;">
              <i class="fa-solid fa-location-dot" style="color:var(--brand-gold);"></i>
              <span>${p.location}</span>
            </div>
          </div>
          <div style="font-family:var(--font-heading); font-size:1.85rem; font-weight:800; color:var(--brand-gold-dark);">${p.priceFormatted}</div>
        </div>

        <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.65;">${p.description}</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; background:var(--bg-elevated); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--border-card);">
          <div><span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Property Type</span><div style="font-weight:700; color:var(--text-primary);">${p.type}</div></div>
          <div><span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Plot Dimension</span><div style="font-weight:700; color:var(--text-primary);">${p.plotArea}</div></div>
          <div><span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Built-up Area</span><div style="font-weight:700; color:var(--text-primary);">${p.sqft ? p.sqft + ' sq.ft' : 'N/A'}</div></div>
          <div><span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Regulatory Approval</span><div style="font-weight:700; color:var(--brand-emerald);">${p.rera}</div></div>
        </div>

        <div>
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; margin-bottom:0.6rem; color:var(--text-primary);">Highlights & Verification</h4>
          <ul style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.6rem; list-style:none;">
            ${p.features.map(f => `<li style="display:flex; align-items:center; gap:8px; font-size:0.875rem; color:var(--text-secondary);"><i class="fa-solid fa-circle-check" style="color:var(--brand-emerald);"></i> ${f}</li>`).join('')}
          </ul>
        </div>

        <div style="display:flex; gap:1rem; margin-top:1rem; flex-wrap:wrap;">
          <a href="tel:+919196562199" style="flex:1; display:flex; align-items:center; justify-content:center; gap:8px; background:var(--bg-elevated); border:1px solid var(--border-card); color:var(--text-primary); padding:14px; border-radius:var(--radius-md); font-weight:700; font-size:0.9rem;">
            <i class="fa-solid fa-phone" style="color:var(--brand-gold);"></i> Call Advisor (+91 91965 62199)
          </a>
          <a href="https://wa.me/919196562199?text=Hello%20YOR%20Realty,%20I%20am%20enquiring%20about%20${encodeURIComponent(p.title)}" target="_blank" style="flex:1; display:flex; align-items:center; justify-content:center; gap:8px; background:#25d366; color:#fff; padding:14px; border-radius:var(--radius-md); font-weight:700; font-size:0.9rem; box-shadow:0 4px 14px rgba(37, 211, 102, 0.35);">
            <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    `;
  }

  overlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function initConsultationModal() {
  const overlay = document.getElementById('detailsModalOverlay');
  const closeBtn = document.getElementById('btnCloseDetailsModal');

  function closeModal() {
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay?.classList.contains('active')) closeModal();
  });
}

/* ==========================================================================
   7. HOME LOAN EMI CALCULATOR
   ========================================================================== */
function initEMICalculator() {
  const loanSlider = document.getElementById('corpEmiLoan');
  const rateSlider = document.getElementById('corpEmiRate');
  const tenureSlider = document.getElementById('corpEmiTenure');

  const loanVal = document.getElementById('corpEmiLoanVal');
  const rateVal = document.getElementById('corpEmiRateVal');
  const tenureVal = document.getElementById('corpEmiTenureVal');
  const emiOutput = document.getElementById('corpEmiOutput');

  function calculate() {
    if (!loanSlider || !rateSlider || !tenureSlider || !emiOutput) return;

    const P = parseFloat(loanSlider.value);
    const R = parseFloat(rateSlider.value) / 12 / 100;
    const N = parseFloat(tenureSlider.value) * 12;

    if (loanVal) loanVal.textContent = P >= 10000000 ? `₹${(P / 10000000).toFixed(2)} Cr` : `₹${(P / 100000).toFixed(0)} Lakhs`;
    if (rateVal) rateVal.textContent = `${rateSlider.value}%`;
    if (tenureVal) tenureVal.textContent = `${tenureSlider.value} Years`;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    emiOutput.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}`;
  }

  loanSlider?.addEventListener('input', calculate);
  rateSlider?.addEventListener('input', calculate);
  tenureSlider?.addEventListener('input', calculate);

  calculate();
}

/* ==========================================================================
   8. PROPERTY VALUATION ESTIMATOR WIDGET
   ========================================================================== */
function initValuationWidget() {
  const btn = document.getElementById('btnCorpValuation');
  const resultBox = document.getElementById('corpValResultBox');
  const priceOutput = document.getElementById('corpValResultPrice');

  btn?.addEventListener('click', (e) => {
    e.preventDefault();
    const type = document.getElementById('corpValType')?.value || 'villa';
    const city = document.getElementById('corpValCity')?.value || 'kollam';
    const area = parseFloat(document.getElementById('corpValArea')?.value || '2000');

    let baseRate = 3500;
    if (city === 'trivandrum') baseRate = 4200;
    if (city === 'kochi') baseRate = 4800;
    if (type === 'apartment') baseRate *= 0.9;
    if (type === 'commercial') baseRate *= 1.4;

    const estLow = Math.round(area * baseRate * 0.95);
    const estHigh = Math.round(area * baseRate * 1.12);

    const formatVal = (val) => val >= 10000000 ? `₹${(val / 10000000).toFixed(2)} Cr` : `₹${(val / 100000).toFixed(1)} Lakhs`;

    if (priceOutput) {
      priceOutput.textContent = `${formatVal(estLow)} — ${formatVal(estHigh)}`;
    }

    resultBox?.classList.add('active');
    resultBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ==========================================================================
   9. ARCHITECTURAL FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger-btn');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-card-item');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-card-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   10. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('btnMobileToggle');
  const closeBtn = document.getElementById('btnMobileNavClose');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const links = drawer?.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  links?.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   11. INSTITUTIONAL CONTACT FORM SIMULATOR
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('prestigeContactForm');
  const banner = document.getElementById('contactSuccessBanner');
  const submitBtn = document.getElementById('btnSubmitContact');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitBtn) return;
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Transmitting Confidential Brief...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Brief Transmitted</span>';
      if (banner) {
        banner.classList.add('active');
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
      }, 3000);
    }, 800);
  });
}

/* ==========================================================================
   12. FLOATING ACTION BUTTON (SCROLL TO TOP)
   ========================================================================== */
function initFloatingTopBtn() {
  const topBtn = document.getElementById('btnScrollTop');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
