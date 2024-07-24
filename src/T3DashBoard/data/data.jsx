export const cities = ["القاهرة", "القليوبية", "الاسكندرية"];
export const schoolsData = [
  {
    name: "أ",
    ID: 1,
    city: "القاهرة",
    address: "1",
    departments: ["1", "2", "3"],
    studentsNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    teachersNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    totalStudents: 190,
    totalTeachers: 190,
  },
  {
    name: "ب",
    ID: 2,
    address: "2",
    city: "القليوبية",
    departments: ["1", "2", "3"],
    studentsNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    teachersNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    totalStudents: 190,
    totalTeachers: 190,
  },
  {
    name: "ث",
    ID: 3,
    address: "3",
    city: "الاسكندرية",
    departments: ["1", "2", "3"],
    studentsNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    teachersNumber: ["لم يتم التحديد", "لم يتم التحديد", "لم يتم التحديد"],
    totalStudents: 190,
    totalTeachers: 190,
  },
];
export const citiesOptions = [
  {
    label: "الكل",
    value: "الكل",
  },
  ...cities.map((ele) => {
    return {
      label: `${ele}`,
      value: `${ele}`,
    };
  }),
];

export const schoolNamesOptions = schoolsData.map((ele) => {
  return {
    label: `${ele.name}`,
    value: `${ele.name}`,
  };
});
