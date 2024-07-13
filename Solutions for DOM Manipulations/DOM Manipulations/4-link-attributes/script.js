function getAttributes(){
    const linkElement = document.getElementById('someId');

    console.log('href = '  + linkElement.getAttribute('href'));
    console.log('target = ' + linkElement.getAttribute('target'));
    console.log('rel = ' + linkElement.getAttribute('rel'));
    console.log('hreflang = ' + linkElement.getAttribute('hreflang'));
    console.log('type = ' + linkElement.getAttribute('type'));
}

