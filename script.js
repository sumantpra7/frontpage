function generatePreview() {
    const universityName = document.getElementById("universityInput").value;
    const semester = document.getElementById("semesterInput").value;
    const subjectCode = document.getElementById("subjectCodeInput").value;
    const topic = document.getElementById("topicInput").value;
    const name = document.getElementById("nameInput").value;
    const rollNo = document.getElementById("rollNoInput").value;
    const regNo = document.getElementById("regNoInput").value;
    const session = document.getElementById("sessionInput").value;

    // Update the preview section
    document.getElementById("universityName").innerText = universityName;
    document.getElementById("semester").innerText = `Semester: ${semester}`;
    document.getElementById("subjectCode").innerText = `Subject Code: ${subjectCode}`;
    document.getElementById("topic").innerText = `Topic: ${topic}`;

    // Update bottom section fields
    document.getElementById("studentName").innerText = `Name: ${name}`;
    document.getElementById("studentClass").innerText = `Class: BCACS`;
    document.getElementById("studentRoll").innerText = `Roll No: ${rollNo}`;
    document.getElementById("studentReg").innerText = `Reg No: ${regNo}`;
    document.getElementById("studentSession").innerText = `Session: ${session}`;

    // Display the logo
    const logoInput = document.getElementById("logoInput");
    if (logoInput.files && logoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("logoPreview").src = e.target.result;
        };
        reader.readAsDataURL(logoInput.files[0]);
    }
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const universityName = document.getElementById("universityName").innerText;
    const logo = document.getElementById("logoPreview").src;
    const semester = document.getElementById("semester").innerText;
    const subjectCode = document.getElementById("subjectCode").innerText;
    const topic = document.getElementById("topic").innerText;
    const studentName = document.getElementById("studentName").innerText;
    const studentClass = document.getElementById("studentClass").innerText;
    const studentRoll = document.getElementById("studentRoll").innerText;
    const studentReg = document.getElementById("studentReg").innerText;
    const studentSession = document.getElementById("studentSession").innerText;

    pdf.setFontSize(22);
    pdf.text(universityName, 105, 20, null, null, "center");

    if (logo) {
        pdf.addImage(logo, "JPEG", 80, 30, 50, 50);
    }

    pdf.setFontSize(16);
    pdf.text(semester, 105, 100, null, null, "center");
    pdf.text(subjectCode, 105, 115, null, null, "center");
    pdf.text(topic, 105, 140, null, null, "center");

    pdf.setFontSize(14);
    pdf.text(studentName, 105, 180, null, null, "center");
    pdf.text(studentClass, 105, 190, null, null, "center");
    pdf.text(studentRoll, 105, 200, null, null, "center");
    pdf.text(studentReg, 105, 210, null, null, "center");
    pdf.text(studentSession, 105, 220, null, null, "center");

    pdf.save("FrontPage.pdf");
}