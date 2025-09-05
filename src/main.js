import './tokens.css'
import './style.css'

document.querySelector('#app').innerHTML = `
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <div class="page-wrapper">
    <header class="site-header" role="banner">
      <div class="container">
        <nav class="main-nav" role="navigation" aria-label="Main navigation">
          <div class="brand-logo" aria-label="Magic Drawer">MD</div>
          <ul class="nav-links">
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#pricing" class="nav-link">Pricing</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main" class="main-content" role="main">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <h1 id="hero-title" class="hero-title">
                Instant Matter Transport, Reimagined
              </h1>
              <p class="hero-subtitle">
                Teleport small packages globally in seconds via quantum-link portals.
              </p>
              <div class="hero-actions">
                <a href="#pricing" class="btn btn-primary" data-track="hero-cta">
                  Explore Technology
                </a>
                <button class="btn btn-secondary" id="demo-trigger" data-track="demo-play">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div class="hero-visual" role="img" aria-label="Quantum teleportation demonstration">
              <div class="demo-container">
                <div class="drawer-pair">
                  <div class="drawer drawer-left">
                    <div class="drawer-handle" role="presentation"></div>
                    <div class="drawer-interior">
                      <div class="product" id="demo-product" role="presentation">💻</div>
                    </div>
                    <span class="drawer-label">Origin</span>
                  </div>
                  
                  <div class="portal-container">
                    <div class="portal" id="quantum-portal" role="presentation">
                      <div class="portal-ring portal-outer"></div>
                      <div class="portal-ring portal-middle"></div>
                      <div class="portal-ring portal-inner"></div>
                      <div class="portal-core"></div>
                      <div class="portal-effects" id="portal-effects" aria-hidden="true"></div>
                    </div>
                  </div>
                  
                  <div class="drawer drawer-right">
                    <div class="drawer-handle" role="presentation"></div>
                    <div class="drawer-interior">
                      <div class="product-destination" id="product-destination" role="presentation"></div>
                    </div>
                    <span class="drawer-label">Destination</span>
                  </div>
                </div>
                <div class="demo-status" id="demo-status" aria-live="polite" class="sr-only">
                  Teleportation demonstration ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features-section" aria-labelledby="features-title">
        <div class="container">
          <h2 id="features-title" class="section-title">
            Revolutionary Features
          </h2>
          <p class="section-subtitle">
            Advanced quantum technology for instant matter transportation
          </p>
          
          <div class="features-grid">
            <article class="feature-card">
              <div class="feature-icon" role="img" aria-label="Speed icon">
                <span aria-hidden="true">⚡</span>
              </div>
              <h3 class="feature-title">Instant Transport</h3>
              <p class="feature-description">
                Teleport items in under 3 seconds worldwide with 99.9% accuracy
              </p>
            </article>
            
            <article class="feature-card">
              <div class="feature-icon" role="img" aria-label="Security icon">
                <span aria-hidden="true">🔒</span>
              </div>
              <h3 class="feature-title">Military-Grade Security</h3>
              <p class="feature-description">
                Quantum encryption protects your items during transport
              </p>
            </article>
            
            <article class="feature-card">
              <div class="feature-icon" role="img" aria-label="Global network icon">
                <span aria-hidden="true">🌍</span>
              </div>
              <h3 class="feature-title">Global Network</h3>
              <p class="feature-description">
                Access 50,000+ Magic Drawers in 180 countries worldwide
              </p>
            </article>
            
            <article class="feature-card">
              <div class="feature-icon" role="img" aria-label="Versatility icon">
                <span aria-hidden="true">📏</span>
              </div>
              <h3 class="feature-title">Any Size</h3>
              <p class="feature-description">
                From microchips to furniture - we teleport it all safely
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" class="pricing-section" aria-labelledby="pricing-title">
        <div class="container">
          <h2 id="pricing-title" class="section-title">
            Choose Your Quantum Portal
          </h2>
          <p class="section-subtitle">
            Professional teleportation solutions for every need
          </p>
          
          <div class="pricing-grid">
            <article class="pricing-card">
              <div class="card-header">
                <h3 class="plan-name">MD-S Portal</h3>
                <div class="plan-specs">
                  <span class="dimensions">15×10 cm</span>
                  <span class="capacity">Compact Portal</span>
                </div>
              </div>
              
              <div class="price-display">
                <span class="currency" aria-hidden="true">$</span>
                <span class="amount">300</span>
                <span class="period">/unit</span>
              </div>
              
              <ul class="features-list">
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Quantum Entanglement Core
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Nano-scale Materialization
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Holographic Interface
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Personal Item Transport
                </li>
              </ul>
              
              <button class="btn btn-primary pricing-cta" data-track="pricing-md-s">
                Get MD-S Portal
              </button>
            </article>

            <article class="pricing-card pricing-featured">
              <span class="featured-badge" role="status" aria-label="Most advanced plan">
                Most Advanced
              </span>
              
              <div class="card-header">
                <h3 class="plan-name">MD-L Portal</h3>
                <div class="plan-specs">
                  <span class="dimensions">30×20 cm</span>
                  <span class="capacity">Large Portal</span>
                </div>
              </div>
              
              <div class="price-display">
                <span class="currency" aria-hidden="true">$</span>
                <span class="amount">500</span>
                <span class="period">/unit</span>
              </div>
              
              <ul class="features-list">
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Enhanced Quantum Matrix
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Multi-object Synchronization
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Advanced AI Interface
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Industrial Grade Transport
                </li>
                <li class="feature-item">
                  <span class="check-icon" aria-hidden="true">✓</span>
                  Intergalactic Compatibility
                </li>
              </ul>
              
              <button class="btn btn-primary pricing-cta" data-track="pricing-md-l">
                Get MD-L Portal
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Magic Drawer</h3>
            <p class="footer-description">
              Revolutionizing transportation through quantum technology
            </p>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Product</h4>
            <ul class="footer-links">
              <li><a href="#features" class="footer-link">Features</a></li>
              <li><a href="#pricing" class="footer-link">Pricing</a></li>
              <li><a href="#" class="footer-link">Documentation</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Support</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Help Center</a></li>
              <li><a href="#" class="footer-link">Contact Support</a></li>
              <li><a href="#" class="footer-link">System Status</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-heading">Connect</h4>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Twitter">
                <span aria-hidden="true">𝕏</span>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <span aria-hidden="true">in</span>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <span aria-hidden="true">⚡</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">
            © 2025 Magic Drawer Inc. All rights reserved.
          </p>
          <div class="legal-links">
            <a href="#" class="legal-link">Privacy Policy</a>
            <a href="#" class="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`

// Initialize application
initializeApp()

function initializeApp() {
  setupDemo()
  setupInteractions()
  setupNavigation()
}

function setupDemo() {
  const demoTrigger = document.getElementById('demo-trigger')
  const portal = document.getElementById('quantum-portal')
  const product = document.getElementById('demo-product')
  const destination = document.getElementById('product-destination')
  const effects = document.getElementById('portal-effects')
  const status = document.getElementById('demo-status')
  
  let isAnimating = false
  
  function runTeleportDemo() {
    if (isAnimating) return
    
    isAnimating = true
    status.textContent = 'Teleportation in progress'
    
    // Reset state
    product.style.transform = 'translateX(0) scale(1)'
    product.style.opacity = '1'
    destination.innerHTML = ''
    
    // Activate portal
    portal.classList.add('active')
    effects.style.opacity = '1'
    
    setTimeout(() => {
      // Move product through portal
      product.style.transform = 'translateX(200px) scale(0.1) rotateY(360deg)'
      
      setTimeout(() => {
        // Hide original, show destination
        product.style.opacity = '0'
        destination.innerHTML = '💻'
        destination.style.transform = 'scale(0.1)'
        
        setTimeout(() => {
          // Materialize at destination
          destination.style.transform = 'scale(1)'
          
          setTimeout(() => {
            // Deactivate portal
            portal.classList.remove('active')
            effects.style.opacity = '0'
            status.textContent = 'Teleportation complete'
            
            setTimeout(() => {
              // Reset for next demo
              product.style.opacity = '1'
              destination.innerHTML = ''
              status.textContent = 'Teleportation demonstration ready'
              isAnimating = false
            }, 2000)
          }, 500)
        }, 400)
      }, 800)
    }, 500)
  }
  
  // Auto-run demo on load
  setTimeout(runTeleportDemo, 1000)
  
  // Manual trigger
  demoTrigger?.addEventListener('click', runTeleportDemo)
}

function setupInteractions() {
  // Pricing button interactions
  const pricingButtons = document.querySelectorAll('.pricing-cta')
  
  pricingButtons.forEach(button => {
    button.addEventListener('click', handlePricingClick)
  })
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll)
  })
}

function handlePricingClick(event) {
  const button = event.target
  const originalText = button.textContent
  
  button.style.transform = 'scale(0.95)'
  button.textContent = 'Processing...'
  button.disabled = true
  
  setTimeout(() => {
    button.textContent = 'Success! Check email ✓'
    button.style.background = 'var(--color-success)'
    
    setTimeout(() => {
      button.textContent = originalText
      button.style.background = ''
      button.style.transform = ''
      button.disabled = false
    }, 3000)
  }, 1500)
}

function handleSmoothScroll(event) {
  const href = event.target.getAttribute('href')
  if (href.startsWith('#')) {
    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerHeight = 80
      const targetPosition = target.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }
}

function setupNavigation() {
  // Mobile menu toggle (if needed)
  const nav = document.querySelector('.main-nav')
  
  // Keyboard navigation improvements
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  )
  
  // Ensure proper focus order
  focusableElements.forEach((element, index) => {
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '0')
    }
  })
}