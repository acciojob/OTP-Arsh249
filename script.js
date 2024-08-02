function moveToNext() {
    let current = document.activeElement;
    if (current.value.length == current.maxLength) {
        let nextElement = current.nextElementSibling;
        if (nextElement && nextElement.classList.contains('code')) {
            nextElement.focus();
        }
    }
}

function moveToPrev(event) {
    if (event.key === 'Backspace') {
        let current = document.activeElement;
        if (current.value.length == 0) {
            let prevElement = current.previousElementSibling;
            if (prevElement && prevElement.classList.contains('code')) {
                prevElement.focus();
            }
        }
    }
}

document.querySelectorAll('.code').forEach((input) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
        moveToNext();
    });

    input.addEventListener('keydown', (e) => {
        moveToPrev(e);
    });

    input.addEventListener('focus', (e) => {
        e.target.select();
    });
});
