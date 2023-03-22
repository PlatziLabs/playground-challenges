export function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    if (email && subject && body) {
      window.setTimeout(() => {
        const emailInfo = {
          email,
          subject,
          body,
        };

        resolve(emailInfo);
      }, 2000);
    } else {
      reject(new Error("Hacen falta datos para poder enviar el correo"));
    }
  });
}
