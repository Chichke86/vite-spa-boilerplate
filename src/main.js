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
      <div class="drawer-interface">
        <div class="drawer-section send-section">
          <h2>Send</h2>
          <div class="drawer-box">
            <div class="drop-zone" id="dropZone">
              <div class="drop-content">
                <div class="drop-icon">📦</div>
                <p>Drop files here or click to select</p>
                <input type="file" id="fileInput" multiple hidden>
              </div>
            </div>
            <button class="action-button send-button" id="sendButton" disabled>Send to Magic Drawer</button>
          </div>
        </div>

        <div class="drawer-section receive-section">
          <h2>Receive</h2>
          <div class="drawer-box">
            <div class="receive-area" id="receiveArea">
              <div class="empty-state">
                <div class="empty-icon">✨</div>
                <p>Waiting for magic...</p>
              </div>
            </div>
            <button class="action-button receive-button" id="receiveButton">Check for Items</button>
          </div>
        </div>
      </div>
    </main>
  </div>
`

// Initialize the Magic Drawer functionality
initializeMagicDrawer()
startTeleportationDemo()

function initializeMagicDrawer() {
  const dropZone = document.getElementById('dropZone')
  const fileInput = document.getElementById('fileInput')
  const sendButton = document.getElementById('sendButton')
  const receiveButton = document.getElementById('receiveButton')
  const receiveArea = document.getElementById('receiveArea')
  
  let selectedFiles = []

  // File drop functionality
  dropZone.addEventListener('click', () => fileInput.click())
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drag-over')
  })
  
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over')
  })
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drag-over')
    handleFiles(e.dataTransfer.files)
  })
  
  fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files)
  })

  function handleFiles(files) {
    selectedFiles = Array.from(files)
    updateDropZone()
    sendButton.disabled = selectedFiles.length === 0
  }

  function updateDropZone() {
    if (selectedFiles.length > 0) {
      dropZone.innerHTML = `
        <div class="file-list">
          ${selectedFiles.map(file => `
            <div class="file-item">
              <span class="file-name">${file.name}</span>
              <span class="file-size">${formatFileSize(file.size)}</span>
            </div>
          `).join('')}
        </div>
      `
    }
  }

  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Send functionality
  sendButton.addEventListener('click', () => {
    if (selectedFiles.length > 0) {
      simulateSend()
    }
  })

  function simulateSend() {
    sendButton.textContent = 'Sending...'
    sendButton.disabled = true
    
    setTimeout(() => {
      sendButton.textContent = 'Sent! ✨'
      selectedFiles = []
      dropZone.innerHTML = `
        <div class="drop-content">
          <div class="drop-icon">📦</div>
          <p>Drop files here or click to select</p>
        </div>
      `
      
      setTimeout(() => {
        sendButton.textContent = 'Send to Magic Drawer'
        sendButton.disabled = true
      }, 2000)
    }, 1500)
  }

  // Receive functionality
  receiveButton.addEventListener('click', () => {
    simulateReceive()
  })

  function simulateReceive() {
    receiveButton.textContent = 'Checking...'
    receiveButton.disabled = true
    
    setTimeout(() => {
      const hasItems = Math.random() > 0.5
      
      if (hasItems) {
        receiveArea.innerHTML = `
          <div class="received-items">
            <div class="received-item">
              <div class="item-icon">📄</div>
              <div class="item-info">
                <span class="item-name">Document.pdf</span>
                <span class="item-sender">From: Someone across the world</span>
              </div>
              <button class="download-button">Download</button>
            </div>
          </div>
        `
      } else {
        receiveArea.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">✨</div>
            <p>No items found. The magic drawer is empty.</p>
          </div>
        `
      }
      
      receiveButton.textContent = 'Check for Items'
      receiveButton.disabled = false
    }, 1500)
  }
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
