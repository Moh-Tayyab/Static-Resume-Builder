function toggleSkills() {
    var skillsContent = document.getElementById("skillsContent");
    if (skillsContent.style.display === "none" || skillsContent.style.display === "") {
        skillsContent.style.display = "block";
    }
    else {
        skillsContent.style.display = "none";
    }
}
