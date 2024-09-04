import Table from "./Table";
function FilteredStudents({ filteredStudents, reference,mode }) {
  return !!filteredStudents && filteredStudents.length !== 0 ? (
    <Table mode={mode} reference={reference} data={filteredStudents}></Table>
  ) : null;
}

export default FilteredStudents;
