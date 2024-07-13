function getOptions(){
    const optionElements = document.querySelectorAll('#mySelect > option');

    const optionElementArray = Array.from(optionElements);
    
    const options = optionElementArray.map(option => option.textContent).join(', ');

    alert(options);
}