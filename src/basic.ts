enum RoleCode {
  ADMIN = 1,
  AUTHOR = 2,
  READ_ONLY = 3,
}

const person: {
  fName: string;
  age: number;
  hobby: string[];
  role: [number, string];
  roleCode: RoleCode.ADMIN;
} = {
  fName: "mahdi",
  age: 19,
  hobby: ["Sports", "cocking"],
  role: [2, "BA"],
  roleCode: RoleCode.ADMIN,
};
console.log(person);
