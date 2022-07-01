const showAllAddNotesButtons = document.getElementById('all-add-notes-buttons')

showAllAddNotesButtons.addEventListener('click', () => {
    anime({
        targets: '.all-note-buttons .note-buttons',
        opacity: [0, 0.9],
        delay: anime.stagger(30, { easing: 'steps(22)' }) // increase delay by 100ms for each elements.
    })
})