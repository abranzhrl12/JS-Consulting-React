// validacion.js

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validarTelefono = (telefono) => {
  const regex = /^[0-9]{9}$/; // Exactamente 9 dígitos
  return regex.test(telefono);
};

export const validarTexto = (texto) => {
  return texto.trim().length > 0; // No vacío
};

export const validarPassword = (password) => {
  const minLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return minLength && hasSpecialChar;
};

export const validarLinkedInURL = (url) => {
  const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/;
  return regex.test(url);
};
