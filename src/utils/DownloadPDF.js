import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'

const printPDF = () => {
  const domElement = document.querySelector('.page');
  let i;
  html2canvas(domElement, {
    onclone: document => {
      for (i = 0; i < document.querySelectorAll('.react-resizable-handle').length; i++) {
        document.querySelectorAll('.react-resizable-handle')[i].style.visibility = "hidden";
      }
      for (i = 0; i < document.querySelectorAll('.removeItem').length; i++) {
        document.querySelectorAll('.removeItem')[i].style.visibility = "hidden";
      }
      for (i = 0; i < document.querySelectorAll('.delete-button').length; i++) {
        document.querySelectorAll('.delete-button')[i].style.visibility = "hidden";
      }
      for (i = 0; i < document.querySelectorAll('.timeline-item-title').length; i++) {
        document.querySelectorAll('.timeline-item-title')[i].classList.remove('active');
      }
      for (i = 0; i < document.querySelectorAll('.timeline-vertical-circle').length; i++) {
        document.querySelectorAll('.timeline-vertical-circle')[i].childNodes.classList.remove('active');
      }
    }
  }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const pageHeight = 297;
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    const pdf = new jsPdf('p', 'mm', "a4");
    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 10);
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 10);
      heightLeft -= pageHeight;
    }
    pdf.save(`CV-${new Date().toLocaleString('vi')}.pdf`);
  });
};

export default printPDF