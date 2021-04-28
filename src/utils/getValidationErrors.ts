import { ValidationError } from 'yup';

interface Errors {
  /* Passando entre colchetes quer dizer que o objeto pode ser qualquer coisa, porém tem que ser string */
  [key: string]: string;
}

export function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
