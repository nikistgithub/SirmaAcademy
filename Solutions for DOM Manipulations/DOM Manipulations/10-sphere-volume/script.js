function calculateSphere(){
    const radiusInput = document.querySelector('input[name=radius]');
    const volumeInput = document.querySelector('input[name=volume]');

    const radius = Number(radiusInput.value);
       
    const calcSphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    volumeInput.value = calcSphere.toFixed(2);
}