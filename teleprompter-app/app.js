const setupPanel = document.getElementById('setup-panel');
const teleprompterPanel = document.getElementById('teleprompter-panel');
const scriptInput = document.getElementById('script-input');
const fileInput = document.getElementById('file-input');
const startBtn = document.getElementById('start-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const speedSlider = document.getElementById('speed-slider');
const exitBtn = document.getElementById('exit-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const scriptDisplay = document.getElementById('script-display');

let isPlaying = false;
let scrollSpeed = 5;
let scrollInterval = null;

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      scriptInput.value = event.target.result;
    };
    reader.readAsText(file);
  }
});

startBtn.addEventListener('click', () => {
  const script = scriptInput.value.trim();
  if (!script) {
    alert('Please enter or upload a script');
    return;
  }
  
  localStorage.setItem('teleprompter-script', script);
  
  scriptDisplay.innerHTML = script.split('\n').map(line => 
    line ? `<p>${line}</p>` : '<p>&nbsp;</p>'
  ).join('');
  
  setupPanel.classList.add('hidden');
  teleprompterPanel.classList.remove('hidden');
});

playPauseBtn.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if (isPlaying) {
    stopAutoScroll();
    playPauseBtn.textContent = 'Play';
  } else {
    startAutoScroll();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}

function startAutoScroll() {
  const baseSpeed = 1;
  const speed = baseSpeed + (scrollSpeed * 0.5);
  scrollInterval = setInterval(() => {
    scriptDisplay.scrollBy({ top: speed, behavior: 'auto' });
  }, 50);
}

function stopAutoScroll() {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
}

speedSlider.addEventListener('input', (e) => {
  scrollSpeed = parseInt(e.target.value);
  if (isPlaying) {
    stopAutoScroll();
    startAutoScroll();
  }
});

exitBtn.addEventListener('click', () => {
  stopAutoScroll();
  isPlaying = false;
  playPauseBtn.textContent = 'Play';
  teleprompterPanel.classList.add('hidden');
  setupPanel.classList.remove('hidden');
});

fullscreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

document.addEventListener('keydown', (e) => {
  if (teleprompterPanel.classList.contains('hidden')) return;
  
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlayPause();
  } else if (e.code === 'ArrowUp') {
    e.preventDefault();
    scriptDisplay.scrollBy({ top: -30, behavior: 'smooth' });
  } else if (e.code === 'ArrowDown') {
    e.preventDefault();
    scriptDisplay.scrollBy({ top: 30, behavior: 'smooth' });
  }
});

scriptDisplay.addEventListener('wheel', (e) => {
  if (teleprompterPanel.classList.contains('hidden')) return;
  stopAutoScroll();
  isPlaying = false;
  playPauseBtn.textContent = 'Play';
});

const savedScript = localStorage.getItem('teleprompter-script');
if (savedScript) {
  scriptInput.value = savedScript;
}
