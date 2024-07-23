import { useDropzone } from "react-dropzone";
import styles from "./styles/ReadExcelFile.module.css";
function ReadExcel() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ],
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });
 

  return (
    <div className={styles.readBox}>
      <section className={styles.dropFile}>
        <div
        
        {...getRootProps({
            className: `${styles.dropFile}  }`,
          })}
        >
          <input {...getInputProps()} />
          <p>
            اضغظ لأضافة ملف او قم بسحب الملف هنا
          </p>
        </div>
      </section>
    </div>
  );
}
export default ReadExcel;
