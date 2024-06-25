export const validateLogin = (login) => {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
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

export const validateINN = (inn, error) => {
  let result = false;
  if (typeof inn === "number") {
    inn = inn.toString();
  } else if (typeof inn !== "string") {
    inn = "";
  }
  if (!inn.length) {
    error.code = 1;
    error.message = "ИНН пуст";
  } else if (/[^0-9]/.test(inn)) {
    error.code = 2;
    error.message = "ИНН может состоять только из цифр";
  } else if ([10, 12].indexOf(inn.length) === -1) {
    error.code = 3;
    error.message = "ИНН может состоять только из 10 или 12 цифр";
  } else {
    const checkDigit = (inn, coefficients) => {
      let n = 0;
      for (let i in coefficients) {
        n += coefficients[i] * inn[i];
      }
      return parseInt((n % 11) % 10);
    };
    switch (inn.length) {
      case 10:
        let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n10 === parseInt(inn[9])) {
          result = true;
        }
        break;
      case 12:
        let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
          result = true;
        }
        break;
    }
    if (!result) {
      error.code = 4;
      error.message = "Неправильное контрольное число";
    }
  }
  return result;
};

export const validateDocumentsCount = (value) => {
  if (value.trim() === "")  {
    return false;
  } else {
    return true;
  }
};