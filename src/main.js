import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero-section">
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

      <div class="teleportation-demo">
        <div class="drawer-visualization">
          <div class="drawer left-drawer">
            <div class="drawer-handle"></div>
            <div class="drawer-interior">
              <div class="product" id="demo-product">📱</div>
            </div>
          </div>
          <div class="teleport-gate">
            <div class="portal-ring"></div>
            <div class="energy-beam" id="energy-beam"></div>
            <div class="particles" id="particles"></div>
          </div>
          <div class="drawer right-drawer">
            <div class="drawer-handle"></div>
            <div class="drawer-interior">
              <div class="product-destination" id="product-destination"></div>
            </div>
          </div>
        </div>
        <p class="demo-text">Watch as items magically teleport through our quantum gateway!</p>
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
  </div>
`

// Initialize the alien technology interface
initializeAlienTech()
startTeleportationDemo()

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
  const energyBeam = document.getElementById('energy-beam')
  const particles = document.getElementById('particles')
  
  function animateTeleportation() {
    // Reset position
    product.style.transform = 'translateX(0) scale(1)'
    destination.innerHTML = ''
    energyBeam.style.opacity = '0'
    particles.style.opacity = '0'
    
    setTimeout(() => {
      // Start teleportation animation
      energyBeam.style.opacity = '1'
      particles.style.opacity = '1'
      
      // Move and shrink the product
      product.style.transform = 'translateX(150px) scale(0.1)'
      
      setTimeout(() => {
        // Hide original and show at destination
        product.style.opacity = '0'
        destination.innerHTML = '📱'
        destination.style.transform = 'scale(0.1)'
        
        setTimeout(() => {
          // Grow the destination product
          destination.style.transform = 'scale(1)'
          energyBeam.style.opacity = '0'
          particles.style.opacity = '0'
          
          setTimeout(() => {
            // Reset for next cycle
            product.style.opacity = '1'
            destination.innerHTML = ''
            animateTeleportation()
          }, 2000)
        }, 300)
      }, 800)
    }, 1000)
  }
  
  animateTeleportation()
}
