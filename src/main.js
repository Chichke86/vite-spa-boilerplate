import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero-section">
      <h1 class="hero-title">Magic Drawer</h1>
      <p class="hero-subtitle">Send anything, anywhere, instantly</p>
      <p class="hero-description">Put something in your Magic Drawer and someone else with a Magic Drawer can retrieve it anywhere in the world within seconds.</p>
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
