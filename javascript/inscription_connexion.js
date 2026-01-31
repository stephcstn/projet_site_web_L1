function updateUserInfo() {
            var userAgentInfo = navigator.userAgent + " - " + navigator.platform + " - " + navigator.language;
            document.getElementById("userAgentInformations").value = userAgentInfo;
        }

        function validateForm() {
            var nameInput = document.getElementById("name");
            var emailInput = document.getElementById("email");
            var passwordInput = document.getElementById("password");
            
            var nameValue = nameInput.value.trim();
            var emailValue = emailInput.value.trim();
            var passwordValue = passwordInput.value.trim();

            // Vérification du nom
            if (nameValue === "") {
                alert("Veuillez entrer votre nom.");
                nameInput.focus();
                return false;
            }

            // Vérification de l'email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                alert("Veuillez entrer une adresse email valide.");
                emailInput.focus();
                return false;
            }

            // Vérification du mot de passe
            if (passwordValue === "" || passwordValue.length < 8) {
                alert("Veuillez entrer un mot de passe d'au moins 8 caractères.");
                passwordInput.focus();
                return false;
            }

            return true;
        }