export default function Button({ children, func, disabled }) {
  return (
    <button
      disabled={!disabled}
      onClick={func}
      className="bg-sky-800 text-sky-50 py-2 px-6 rounded-md font-semibold disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
