function generateResume(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var summaryInput = document.getElementById("summary").value;
    var skillsInput = document.getElementById("skills").value;
    var skillsArray = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    var resume = {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        summary: summaryInput,
        skills: skillsArray
    };
    displayResume(resume);
}
function displayResume(resume) {
    var outputDiv = document.getElementById("output");
    var resumeDisplay = document.getElementById("resume-display");
    outputDiv.innerHTML = "\n    <p><strong>Name:</strong> ".concat(resume.name, "</p>\n    <p><strong>Email:</strong> ").concat(resume.email, "</p>\n    <p><strong>Phone:</strong> ").concat(resume.phone, "</p>\n    <p><strong>Summary:</strong> ").concat(resume.summary, "</p>\n    <p><strong>Skills:</strong> ").concat(resume.skills.join(", "), "</p>\n  ");
    resumeDisplay.classList.remove("hidden");
}
var form = document.getElementById("resume-form");
form.addEventListener("submit", generateResume);
