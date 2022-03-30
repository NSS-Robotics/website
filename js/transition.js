window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    const except = document.getElementById('except')



    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 2900);

    for(let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        if(anchor == except || anchor.classList.contains('except')) {
            continue;
        }
        else {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.target.href;
                transition_el.classList.add('is-active');

                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }
    }
}