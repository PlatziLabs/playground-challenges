export function validateForm(formData, registeredUsers) {
  const requiredFields = ["name", "lastname", "email", "password"];

  if (!requiredFields.every((field) => formData[field])) {
    throw new Error(
      `Faltan los siguientes campos requeridos: ${requiredFields
        .filter((field) => !formData[field])
        .join(", ")}`
    );
  }

  const existUser = registeredUsers.find(
    (user) => user.email === formData.email
  );

  if (existUser) {
    throw new Error(`El usuario con el email ${formData.email} ya existe`);
  }

  registeredUsers.push({
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
  });

  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
}
