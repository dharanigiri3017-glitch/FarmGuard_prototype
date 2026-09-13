function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email) {
        localStorage.setItem("agroguardUser", email);
        window.location.href = "dashboard.html";
    }
}

function register(event) {
    event.preventDefault();

    alert("Account created successfully! 🌱");

    window.location.href = "login.html";
}

function analyzeCrop() {

    const image = document.getElementById("imageInput").files[0];

    if (!image) {
        alert("Please upload a crop image first 🌿");
        return;
    }

    localStorage.setItem("lastScan", image.name);

    window.location.href = "result.html";
}


document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("imageInput");
    const preview = document.getElementById("preview");

    if (input) {

        input.addEventListener("change", function () {

            const file = this.files[0];

            if (file) {

                const reader = new FileReader();

                reader.onload = function (event) {

                    preview.innerHTML =
                        `<img src="${event.target.result}" class="preview-img">`;

                };

                reader.readAsDataURL(file);
            }

        });

    }

});