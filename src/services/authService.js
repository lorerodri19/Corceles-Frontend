export const login = (username, password) => {
  if (username === "empleado" && password === "1234") {
    return { username, role: "employee" };
  }
  if (username === "admin" && password === "admin123") {
    return { username, role: "admin" };
  }
  return null;
};