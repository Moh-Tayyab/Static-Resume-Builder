function toggleSkills(): void {
    const skillsContent = document.getElementById("skillsContent") as HTMLElement;
    if (skillsContent.style.display === "none" || skillsContent.style.display === "") {
        skillsContent.style.display = "block";
    } else {
        skillsContent.style.display = "none";
    }
}
