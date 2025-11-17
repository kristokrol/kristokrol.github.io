window.onload = function () {
    const saveButton = document.getElementById('save-pdf');

    if (saveButton) {
        saveButton.addEventListener('click', () => {
            // The PDF is in the public folder, so it's at the root path
            const pdfUrl = '/CV_Khrystyna_Orobets.pdf';

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = 'CV_Khrystyna_Orobets.pdf'; // This is the name the user will see

            // Append to the body, click, and then remove
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
};
