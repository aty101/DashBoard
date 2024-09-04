import Table from "./Table";
function FilteredStudents({ filteredStudents, reference }) {
  return !!filteredStudents && filteredStudents.length !== 0 ? (
    <Table reference={reference} data={filteredStudents}></Table>
  ) : null;
}

export default FilteredStudents;
