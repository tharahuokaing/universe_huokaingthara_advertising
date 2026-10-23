document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const adInquiryForm = document.getElementById("adInquiryForm");
    const htmlRoot = document.documentElement;

    let currentLang = "both"; // 'km', 'en', or 'both'

    // Language Toggle Event Handler
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            if (currentLang === "both") {
                currentLang = "km";
                document.querySelectorAll(".km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en").forEach(el => el.style.display = "none");
                langToggleBtn.innerText = "🇰🇭 ភាសាខ្មែរ";
            } else if (currentLang === "km") {
                currentLang = "en";
                document.querySelectorAll(".km").forEach(el => el.style.display = "none");
                document.querySelectorAll(".en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇬🇧 English";
            } else {
                currentLang = "both";
                document.querySelectorAll(".km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇰🇭 / EN";
            }
        });
    }

    // Theme Toggle Handler (Dark / Light)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlRoot.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlRoot.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                htmlRoot.setAttribute("data-theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    // Form Submission Handling
    if (adInquiryForm) {
        adInquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("សូមអរគុណ! សំណើផ្សព្វផ្សាយពាណិជ្ជកម្មរបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។ ក្រុមការងារ UNIVERSE HUOKAING THARA នឹងទាក់ទងទៅវិញក្នុងពេលឆាប់ៗ។\n\nThank you! Your advertising inquiry has been submitted successfully.");
            adInquiryForm.reset();
        });
    }

    console.log("UNIVERSE HUOKAING THARA Advertising Platform loaded successfully.");
});
