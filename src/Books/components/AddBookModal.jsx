import { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import styles from "../styles/Upload.module.css";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import Choose from "../../ui/Choose";

const Coureses = [
  { value: "C1", label: "المادة الاولى" },
  { value: "C2", label: "المادة الثانية" },
  { value: "C3", label: "المادة الثالثة" },
  { value: "C4", label: "المادة الرابعة" },
];
const Deps = [
  { value: "D1", label: "القسم الاول" },
  { value: "D2", label: "القسم الثاني" },
  { value: "D3", label: "القسم الثالث" },
  { value: "D4", label: "القسم الرابع" },
];
const Levels = [
  { value: "L1", label: "الفرقة الاولى" },
  { value: "L2", label: "الفرقة الثانية" },
  { value: "L3", label: "الفرقة الثالثة" },
  { value: "L4", label: "الفرقة الرابعة" },
];
const Semesters = [
  { value: "S1", label: "الفصل الاول" },
  { value: "S2", label: "الفصل الثاني" },
  { value: "S3", label: "الفصل الصيفي" },
];

const PopupModal = ({ openModal, setOpenModal, onAddBook }) => {
  const [course, setCourse] = useState("");
  const [dep, setDep] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (setter) => (selectedOption) => {
    setter(selectedOption.value);
  };

  const checkFields = () => {
    if (!(course && dep && level && semester && year && title && files))
      setError(true);
    else {
      setError(false);
      handleSumbit();
    }
  };

  const handleSumbit = () => {
    const newBook = {
      course,
      dep,
      level,
      semester,
      year,
      title,
      link,
    };
    onAddBook((prev) => [...prev, newBook]);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCourse("");
    setDep("");
    setLevel("");
    setSemester("");
    setYear("");
    setTitle("");
    setFiles([]);
    setError(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const pdfFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    const newFiles = pdfFiles.map((file) => ({
      link: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  useEffect(() => {
    setLink(files[0]);
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        className={styles.content}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={false}
      >
        <div className="d-flex justify-content-between">
          <h2
            className={`mb-3`}
            style={{ color: `${error ? "red" : "black"}` }}
          >
            {error ? "برجاء ملئ جميع البيانات" : "اضافة كتاب"}
          </h2>
          <span onClick={handleCloseModal} style={{ cursor: "pointer" }}>
            ❌
          </span>
        </div>
        <div
          style={{
            border: "2px dashed #cccccc",
            padding: "20px",
            textAlign: "center",
            cursor: `${link ? "not-allowed" : "pointer"}`,
          }}
        >
          {link ? (
            "✅ Done"
          ) : (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>
                Drag & drop some PDF files here, or click to select PDF files
              </p>
            </div>
          )}
        </div>
        <div className={styles.selectes}>
          <div className={styles.row}>
            <Select
              options={Coureses}
              value={course.label}
              onChange={handleChange(setCourse)}
              placeholder="المادة"
              menuPortalTarget={document.body}
            />
            <Select
              options={Levels}
              value={level.label}
              onChange={handleChange(setLevel)}
              placeholder="الفرقة"
              menuPortalTarget={document.body}
            />
            <Select
              options={Deps}
              value={dep.label}
              onChange={handleChange(setDep)}
              placeholder="القسم"
              menuPortalTarget={document.body}
            />
            <Select
              options={Semesters}
              value={semester.label}
              onChange={handleChange(setSemester)}
              placeholder="الفصل الدراسي"
              menuPortalTarget={document.body}
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="اسم الكتاب"
            />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="السنه الدراسية"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success mt-3 mx-auto"
          onClick={checkFields}
        >
          اضافة
        </button>
      </Modal>
    </div>
  );
};

export default PopupModal;
