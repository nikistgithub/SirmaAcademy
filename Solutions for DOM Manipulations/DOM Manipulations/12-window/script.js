function updateWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    document.getElementById('windowWidth').textContent = width;
    document.getElementById('windowHeight').textContent = height;
}

updateWindowDimensions();

window.onresize = updateWindowDimensions;