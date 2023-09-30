//need jquery

const scrollshowObjs = document.querySelectorAll('.dynamicShow');

function handleScroll() {

    var showPos = window.innerHeight / 10 * 9;
    var hidePos = window.innerHeight / 20;

    scrollshowObjs.forEach(obj => {
        const objPosition = (obj.getBoundingClientRect().top + obj.getBoundingClientRect().bottom) / 2;

        if (objPosition < showPos) {
            if (objPosition < hidePos) {
                obj.classList.add(obj.id + '-hide');
                obj.classList.remove(obj.id + '-show');

            } else {
                obj.classList.add(obj.id + '-show');
                obj.classList.remove(obj.id + '-hide');
            }
        } else {
            obj.classList.add(obj.id + '-hide');
            obj.classList.remove(obj.id + '-show');
        }


    });

    if (window.location.hash) {
        history.replaceState({}, document.title, window.location.pathname);
    }

}

window.addEventListener('scroll', handleScroll);

$(document).ready(function() {
    handleScroll();
});