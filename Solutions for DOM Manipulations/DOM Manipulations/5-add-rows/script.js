function insertRow(){
    const tableElement = document.getElementById('sampleTable');
    
    const firstTdElement = document.createElement('td');
    firstTdElement.textContent = 'Row3 cell1';

    const secondTdElement = document.createElement('td');
    secondTdElement.textContent = 'Row3 cell2';

    const rowElement = document.createElement('tr');
    rowElement.appendChild(firstTdElement);
    rowElement.appendChild(secondTdElement);

    tableElement.appendChild(rowElement);
}