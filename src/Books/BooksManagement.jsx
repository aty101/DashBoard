import { useState } from "react";
import styles from "./styles/Books.module.css";
import PopUp from "./components/AddBookModal";
const dummyBooks = [
  {
    id: 1,
    title: "كتاب 1",
  },
  {
    id: 2,
    title: "كتاب 2",
  },
  {
    id: 3,
    title: "كتاب 3",
  },
];
const Books = () => {
  const [books, setBooks] = useState([]);
  const [openAddBookModal, setOpenAddBookModal] = useState(false);
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>ادارة الكتب</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setOpenAddBookModal(true)}
          >
            اضافة
          </button>
          <button type="button" className="btn btn-primary">
            تصفية
          </button>
        </div>
      </header>
      <div className={styles.books}>
        <PopUp
          className={styles.ReactModal}
          openModal={openAddBookModal}
          setOpenModal={setOpenAddBookModal}
          onAddBook={setBooks}
        ></PopUp>
      </div>
    </div>
  );
};
export default Books;
