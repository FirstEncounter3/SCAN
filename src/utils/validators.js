export const validateLogin = (login) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const usernameRegex = /^[a-zA-Z0-9._-]+$/;
  
    if (login.trim() === "") {
      return "Данное поле не может быть пустым";
    }
  
    if (phoneRegex.test(login)) {
      return true;
    }
  
    if (usernameRegex.test(login)) {
      return true;
    }
  
    return "Введите корректные данные";
  };