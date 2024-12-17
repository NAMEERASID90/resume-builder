interface Resume {
    name: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
  }
  
  // Function to generate and display the resume
  function generateResume(event: Event): void {
    event.preventDefault();
  
    // Retrieve form values
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const emailInput = (document.getElementById("email") as HTMLInputElement).value;
    const phoneInput = (document.getElementById("phone") as HTMLInputElement).value;
    const summaryInput = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;
  
    // Convert skills to array
    const skillsArray: string[] = skillsInput.split(",").map(skill => skill.trim());
  
    // Create a Resume object
    const resume: Resume = {
      name: nameInput,
      email: emailInput,
      phone: phoneInput,
      summary: summaryInput,
      skills: skillsArray,
    };
  
    // Display the resume
    displayResume(resume);
  }
  
  function displayResume(resume: Resume): void {
    const outputDiv = document.getElementById("output") as HTMLDivElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
  
    // Populate the resume output
    outputDiv.innerHTML = `
      <p><strong>Name:</strong> ${resume.name}</p>
      <p><strong>Email:</strong> ${resume.email}</p>
      <p><strong>Phone:</strong> ${resume.phone}</p>
      <p><strong>Summary:</strong> ${resume.summary}</p>
      <p><strong>Skills:</strong> ${resume.skills.join(", ")}</p>
    `;
  
    // Show the display area
    resumeDisplay.classList.remove("hidden");
  }
  
  // Attach form submit event listener
  const form = document.getElementById("resume-form") as HTMLFormElement;
  form.addEventListener("submit", generateResume);
  