// loading a page
window.onload = function() {

    setTimeout(function() {
        document.querySelector('.loader').style.display = "none";
        document.querySelector('body').style.overflow = "scroll";
        // document.querySelector('body').style.position = "scroll";
    }, 1000);
};

//scroll animation

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('header div').forEach(item => {

        if (item.classList == 'burger_wrapper') {

            if (getStyles(item).display == 'none') {
                slowSwitch('header a');
            } else { 
                slowSwitch('.burger_items a'); 
            }
        }
    });

    function slowSwitch(elements) {

        console.log(elements)
        document.querySelectorAll(elements).forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(`${e.target.hash}`).scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
            });
        });
    }

    function getStyles(elem) {
        return window.getComputedStyle(elem, null);
}


//animation button
    const butDrop = document.querySelectorAll('.butDrop button'),
          dropListes = document.querySelectorAll('.dropList');

        butDrop.forEach(item => {

            item.addEventListener('click', () => {
                dropListes.forEach(list => {

                    if (list.getAttribute('atr') == item.getAttribute('atr') && 
                    list.classList.contains('drop_active')) {
                        console.log(list);
                        hideList(dropListes);
                        
                    } else if (list.getAttribute('atr') == item.getAttribute('atr')) {
                        hideList(dropListes);
                        dropList(list);
                    }
                });
            });
        });

    function dropList(list) {

        list.classList.toggle('drop_active');
    }

    function hideList(arr) {

        arr.forEach(item => {

            if (item.classList.contains('drop_active')) {
                item.classList.remove('drop_active');
            }
        });
    }

// burger 
    const burgerBut = document.querySelector('.burger_wrapper'),
          burgerMenu = document.querySelector('.burger_items'),
          burgerMenuitems = document.querySelectorAll('.burger_items a');

        burgerBut.addEventListener('click',() => {
            burgerMenu.classList.toggle('burgerActive');
            burgerBut.classList.toggle('burger_wrapper_active');
        });

        burgerMenuitems.forEach(item => {
            item.addEventListener('click', () => {
                burgerMenu.classList.toggle('burgerActive');
                burgerBut.classList.toggle('burger_wrapper_active');
            });
        });
});
