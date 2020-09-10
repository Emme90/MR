(() => {
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
    let scrollValue = 0;

    window.scroll({
        top: 0
    });

    window.addEventListener('scrollY', () => {
        headerOnScroll();
    })

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
        links.forEach(link => link.classList.toggle('fade'));
    });

    textarea.addEventListener('input', () => {
        var txt = textarea.value;
        var count = countWord(txt);
        textareaCount.innerHTML = (count + '/600');
    })

    sendMsgBtn.addEventListener('click', () => {
        if (txtName.value.length > 0 && txtSurname.value.length > 0 && txtEmail.value.length > 0 && textarea.value.length > 0) {
            // resetForm();
        }
    });

    function headerOnScroll() {
        if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
            header.classList.remove('opening');
            header.classList.add('closing');
            scrollValue = window.scrollY;
        } else {
            header.classList.remove('closing');
            header.classList.add('opening');
            scrollValue = window.scrollY;
        }
    }

    function countWord(val) {
        return val ? val.length : 0;
    }

    function resetForm() {
        txtName.value = "";
        txtSurname.value = "";
        txtEmail.value = "";
        textarea.value = "";
    }
})();