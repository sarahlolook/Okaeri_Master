const rolePreview = document.getElementById("role-preview");

// Get all role radio buttons
const roleOptions = document.querySelectorAll('input[name="role"]');

roleOptions.forEach(role => {

    role.addEventListener("change", function() {

        if (this.value === "master") {
            rolePreview.src = "../images/master.png";
        }

        else if (this.value === "maid") {
            rolePreview.src = "../images/maid.png";
        }

    });

});