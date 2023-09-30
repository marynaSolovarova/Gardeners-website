<script src = "https://mozilla.github.io/pdf.js/build/pdf.js" >
      
      const pdfContainer = document.getElementById("pdf-container");
      const pdfUrl = "docs/doc.pdf";

 // Load and render the PDF
      pdfjsLib.getDocument(pdfUrl).promise.then((pdfDoc) => {
      const pageNum = 1; // Set the page number you want to display
      pdfDoc.getPage(pageNum).then((page) => {
      const canvas = document.createElement("canvas");
      pdfContainer.appendChild(canvas);
      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1.5 }); // Adjust the scale as needed
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      page.render({ canvasContext: context, viewport: viewport });
   });
 });
    </script>