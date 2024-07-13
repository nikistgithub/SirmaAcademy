function highlightBoldWords() {
    const boldWords = document.getElementsByTagName('b');
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.add('highlight');
    }
}

function removeHighlightBoldWords() {
    const boldWords = document.getElementsByTagName('b');
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.remove('highlight');
    }
}