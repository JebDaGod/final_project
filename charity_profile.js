// Show volunteer form
const volunteerButtons = document.querySelectorAll('button[id^="volunteer-now"]');
volunteerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.style.display = 'block';
        }
    });
});

// Add fun fact based on data-charity
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('#charity-profile');
    if (!section) return;

    const charityType = section.getAttribute('data-charity');

    const facts = {
        HHF: "💡 Did you know? Hope House Foundation has helped over 5,000 families find safe housing since 2010!",
        GEI: "🌿 GreenEarth Initiative has planted over 1 million trees worldwide!",
        BFF: "🎓 Bright Futures Fund has awarded scholarships to over 2,000 students since its founding!"
    };

    if (facts[charityType]) {
        const funFact = document.createElement("div");
        funFact.textContent = facts[charityType];
        funFact.style.padding = "10px";
        funFact.style.backgroundColor = "#eefaf2";
        funFact.style.border = "1px solid #c1e1c1";
        funFact.style.marginTop = "10px";
        funFact.style.display = "none";

        const title = section.querySelector('h2');
        if (title) {
            title.parentNode.insertBefore(funFact, title.nextSibling);

            title.addEventListener("mouseover", function () {
                funFact.style.display = "block";
            });

            title.addEventListener("mouseout", function () {
                funFact.style.display = "none";
            });
        }
    }
});
