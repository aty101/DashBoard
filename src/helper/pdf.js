import html2pdf  from "html2pdf.js";

export function convertToPdf(ref) {
  const content = ref.current;

  const options = {
    filename: "my-document.pdf",
    margin: 1,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(content).save();
}
