const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const btn = document.querySelector(".accept")
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

function obCallback(payLoad) {
    if(payLoad[0].intersectionRatio === 1) {
        btn.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

ob.observe(terms.lastElementChild);