function moveToNext(current, direction) {
    if (current.value.length == current.maxLength) {
        let nextElement = current.nextElementSibling;
        if (nextElement && nextElement.classList.contains('code')) {
            nextElement.focus();
        }
    } else if (current.value.length == 0 && direction === 'prev') {
        let prevElement = current.previousElementSibling;
        if (prevElement && prevElement.classList.contains('code')) {
            prevElement.focus();
        }
    }
}

function moveToPrev(event) {
    if (event.key === 'Backspace') {
        let current = event.target;
        if (current.value.length == 0) {
            let prevElement = current.previousElementSibling;
            if (prevElement && prevElement.classList.contains('code')) {
                prevElement.focus();
            }
        }
    }
}

document.querySelectorAll('.code').forEach((input, index, inputs) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
        moveToNext(e.target, 'next');
    });

    input.addEventListener('keydown', (e) => {
        moveToPrev(e);
    });

    input.addEventListener('focus', (e) => {
        e.target.select();
    });
});
