function changePage(pageNumber) {
    var pages = document.querySelectorAll('.pag');
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === 'pag' + pageNumber) {
            pages[i].style.display = 'block';
        } else {
            pages[i].style.display = 'none';
        }
    }
}
