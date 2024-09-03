export default function Button({ children, func }) {
  return (
    <button
      onClick={func}
      className="bg-sky-800 text-sky-50 py-2 px-6 rounded-md font-semibold "
    >
      {children}
    </button>
  );
}
