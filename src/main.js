import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero-section">
      <div class="teleportation-demo">
        <div class="drawer-visualization">
          <div class="drawer left-drawer">
            <div class="drawer-handle"></div>
            <div class="drawer-interior">
              <div class="product" id="demo-product">💻</div>
            </div>
          </div>
          <div class="teleport-gate">
            <div class="portal-outer-ring"></div>
            <div class="portal-middle-ring"></div>
            <div class="portal-inner-ring"></div>
            <div class="portal-core"></div>
            <div class="energy-rays" id="energy-rays"></div>
            <div class="swirl-energy" id="swirl-energy"></div>
            <div class="portal-particles" id="portal-particles"></div>
            <div class="geometric-pattern"></div>
          </div>
          <div class="drawer right-drawer">
            <div class="drawer-handle"></div>
            <div class="drawer-interior">
              <div class="product-destination" id="product-destination"></div>
            </div>
          </div>
        </div>
        <p class="demo-text">Watch the laptop teleport through our advanced quantum portal!</p>
      </div>

      <div class="brand-logo">MD</div>
      <h1 class="hero-title">Magic Drawer</h1>
      <p class="hero-subtitle">Instant Physical Teleportation Technology</p>
      <p class="slogan">"Defying Distance, Delivering Dreams"</p>
      <p class="hero-description">Experience the future of logistics! Our revolutionary Magic Drawer uses quantum entanglement technology to instantly teleport physical objects across any distance. Place real items in one drawer and retrieve them from another anywhere on Earth - books, gadgets, documents, even food!</p>
      
      <div class="features-grid">
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h3>Instant Transport</h3>
          <p>Teleport items in under 3 seconds worldwide</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🔒</div>
          <h3>100% Secure</h3>
          <p>Military-grade quantum encryption protects your items</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🌍</div>
          <h3>Global Network</h3>
          <p>Access 50,000+ Magic Drawers in 180 countries</p>
        </div>
        <div class="feature">
          <div class="feature-icon">📏</div>
          <h3>Any Size</h3>
          <p>From microchips to furniture - we teleport it all</p>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="pricing-section">
        <h2 class="pricing-title">Choose Your Quantum Portal</h2>
        <p class="pricing-subtitle">Advanced alien technology for instant matter transportation</p>
        
        <div class="pricing-grid">
          <div class="pricing-card compact-model">
            <div class="card-glow"></div>
            <div class="hologram-effect"></div>
            <h3 class="model-name">MDs</h3>
            <div class="model-specs">
              <div class="dimensions">15×10 cm</div>
              <div class="capacity">Compact Portal</div>
            </div>
            <div class="price-display">
              <div class="currency">$</div>
              <div class="amount">300</div>
            </div>
            <ul class="features-list">
              <li>🛸 Quantum Entanglement Core</li>
              <li>⚛️ Nano-scale Materialization</li>
              <li>🔮 Holographic Interface</li>
              <li>🌌 Personal Item Transport</li>
            </ul>
            <button class="order-button">Acquire Technology</button>
          </div>

          <div class="pricing-card large-model featured">
            <div class="card-glow"></div>
            <div class="hologram-effect"></div>
            <div class="featured-badge">MOST ADVANCED</div>
            <h3 class="model-name">MDl</h3>
            <div class="model-specs">
              <div class="dimensions">30×20 cm</div>
              <div class="capacity">Large Portal</div>
            </div>
            <div class="price-display">
              <div class="currency">$</div>
              <div class="amount">500</div>
            </div>
            <ul class="features-list">
              <li>🛸 Enhanced Quantum Matrix</li>
              <li>⚛️ Multi-object Synchronization</li>
              <li>🔮 Advanced AI Interface</li>
              <li>🌌 Industrial Grade Transport</li>
              <li>🚀 Intergalactic Compatibility</li>
            </ul>
            <button class="order-button premium">Acquire Technology</button>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Fixed Contact Drawer -->
    <div class="contact-drawer" id="contactDrawer">
      <div class="drawer-handle-contact"></div>
      <div class="drawer-interior-contact">
        <div class="contact-icon">📞</div>
      </div>
    </div>
  </div>
`

// Initialize the alien technology interface
initializeAlienTech()
startTeleportationDemo()
initializeContactDrawer()

function initializeAlienTech() {
  const orderButtons = document.querySelectorAll('.order-button')
  
  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.95)'
      button.textContent = 'PROCESSING ORDER...'
      
      setTimeout(() => {
        button.textContent = 'TECHNOLOGY ACQUIRED ✨'
        button.style.background = 'linear-gradient(45deg, rgba(0,255,0,0.3), rgba(0,255,255,0.3))'
        
        setTimeout(() => {
          button.textContent = 'ACQUIRE TECHNOLOGY'
          button.style.background = ''
          button.style.transform = ''
        }, 3000)
      }, 2000)
    })
  })
}

function startTeleportationDemo() {
  const product = document.getElementById('demo-product')
  const destination = document.getElementById('product-destination')
  const energyRays = document.getElementById('energy-rays')
  const swirlEnergy = document.getElementById('swirl-energy')
  const portalParticles = document.getElementById('portal-particles')
  
  function animateTeleportation() {
    // Reset position
    product.style.transform = 'translateX(0) scale(1)'
    destination.innerHTML = ''
    energyRays.style.opacity = '0'
    swirlEnergy.style.opacity = '0'
    portalParticles.style.opacity = '0'
    
    setTimeout(() => {
      // Start portal activation
      energyRays.style.opacity = '1'
      swirlEnergy.style.opacity = '1'
      portalParticles.style.opacity = '1'
      
      // Move and shrink the laptop with rotation
      product.style.transform = 'translateX(200px) scale(0.05) rotateY(720deg)'
      
      setTimeout(() => {
        // Hide original and show at destination
        product.style.opacity = '0'
        destination.innerHTML = '💻'
        destination.style.transform = 'scale(0.05) rotateY(720deg)'
        
        setTimeout(() => {
          // Grow and rotate the destination laptop
          destination.style.transform = 'scale(1) rotateY(0deg)'
          
          setTimeout(() => {
            // Deactivate portal
            energyRays.style.opacity = '0'
            swirlEnergy.style.opacity = '0'
            portalParticles.style.opacity = '0'
            
            setTimeout(() => {
              // Reset for next cycle
              product.style.opacity = '1'
              destination.innerHTML = ''
              animateTeleportation()
            }, 2000)
          }, 500)
        }, 400)
      }, 1200)
    }, 1000)
  }
  
  animateTeleportation()
}

function initializeContactDrawer() {
  const contactDrawer = document.getElementById('contactDrawer')
  let isOpen = false
  
  contactDrawer.addEventListener('click', () => {
    if (isOpen) {
      contactDrawer.classList.remove('open')
      contactDrawer.innerHTML = `
        <div class="drawer-handle-contact"></div>
        <div class="drawer-interior-contact">
          <div class="contact-icon">📞</div>
        </div>
      `
    } else {
      contactDrawer.classList.add('open')
      contactDrawer.innerHTML = `
        <div class="drawer-handle-contact"></div>
        <div class="drawer-interior-contact expanded">
          <div class="contact-header">
            <div class="contact-icon">📞</div>
            <span class="contact-title">QUANTUM SUPPORT</span>
          </div>
          <div class="contact-methods">
            <button class="contact-method">🛸 Telepathic Link</button>
            <button class="contact-method">📡 Subspace Channel</button>
            <button class="contact-method">⚡ Emergency Portal</button>
          </div>
        </div>
      `
      
      // Add click handlers for contact methods
      const methods = contactDrawer.querySelectorAll('.contact-method')
      methods.forEach(method => {
        method.addEventListener('click', (e) => {
          e.stopPropagation()
          method.style.background = 'linear-gradient(45deg, rgba(0,255,0,0.3), rgba(0,255,255,0.3))'
          method.textContent = 'CONNECTING...'
          
          setTimeout(() => {
            method.textContent = 'CONNECTED ✨'
            setTimeout(() => {
              contactDrawer.classList.remove('open')
              isOpen = false
              contactDrawer.innerHTML = `
                <div class="drawer-handle-contact"></div>
                <div class="drawer-interior-contact">
                  <div class="contact-icon">📞</div>
                </div>
              `
            }, 2000)
          }, 1500)
        })
      })
    }
    
    isOpen = !isOpen
  })
}
