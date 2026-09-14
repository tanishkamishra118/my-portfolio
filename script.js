
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

        if (nav.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    // Menu link click ke baad mobile menu close

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        formMessage.textContent =
            `Thank you, ${name}! Your message is ready to be sent.`;

        contactForm.reset();

    });

}


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".intro-card, .education-item, .skill-card, .project-card, .contact-form-box"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ================= CURRENT YEAR =================

// Agar future mein footer ko automatically
// current year dikhana ho to ye useful rahega.

const currentYear = new Date().getFullYear();

console.log(
    `Tanishaka Mishra Portfolio — ${currentYear}`
);


// ================= PROJECT BUTTON =================

// Filhaal '#' wale project links ko click karne par
// page ke top par jump hone se rok raha hai.

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Project link will be added when the project is uploaded to GitHub."
            );

        }

    });

});