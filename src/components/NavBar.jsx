import Button from "./Button";
function NavBar({ changeMode, mode }) {
  function handleModeChange() {
    changeMode((val) => !val);
   
  }
  return (
    <nav >
      <Button disabled={true} func={handleModeChange}>
        {mode ? "English" : "العربية"}
      </Button>
    </nav>
  );
}

export default NavBar;
