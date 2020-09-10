(() => {
    let lastScrollValue = 0;
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    const txtName = document.querySelector('[name="firstName"]');
    const txtSurname = document.querySelector('[name="lastName"]')
    const txtEmail = document.querySelector('[name="email"]')
    const textarea = document.getElementById('textarea');
    const textareaCount = document.getElementById('textareaCount');
    const sendMsgBtn = document.getElementById('send-btn');
    const overlayContainer = document.querySelector('overlay');
    const scrollTrheshold = 24;


    function countWord(val) {
        return val ? val.length : 0;
    }

    function resetForm() {
        txtName.value = "";
        txtSurname.value = "";
        txtEmail.value = "";
        textarea.value = "";
    }

    // Like constructor, although you may have a real constructor if you use a real Class 
    // (and yes, you can in plain JS)
    const init = function () {
        window.scroll({
            top: 0
        });

        resetForm();

        window.addEventListener('scroll', () => {
            // scrolling down
            if (document.body.scrollTop > lastScrollValue || document.documentElement.scrollTop > lastScrollValue) {
                header.classList.add('hidden');
            }
            else {
                header.classList.remove('hidden');
            }

            lastScrollValue = window.scrollY;
        });

        hamburger.addEventListener('click', () => {
            document.body.classList.toggle('hide-overflow');
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('open');
            overlay.classList.toggle('show');
            links.forEach((link) => link.classList.toggle('fade'));
        });

        links.forEach((link) => {
            link.addEventListener('click', () => {
                link.classList.toggle('fade');
                overlay.classList.toggle('show');
                hamburger.classList.toggle('open');
                navLinks.classList.toggle('open');
                document.body.classList.toggle('hide-overflow');
            })
        })

        // if (overlayContainer) {
        //     overlayContainer.addEventListener('click', () => {
        //         console.info("clicked!");
        //         // hamburger.classList.remove('open');
        //     })
        // }


        sendMsgBtn.addEventListener('click', () => {
            if (txtName.value.length > 0 && txtSurname.value.length > 0 && txtEmail.value.length > 0 && textarea.value.length > 0) {
                // resetForm();
            }
        });

        textarea.addEventListener('input', () => {
            var txt = textarea.value;
            var count = countWord(txt);
            textareaCount.innerHTML = (count + '/600');
        })
    };

    init();

})();