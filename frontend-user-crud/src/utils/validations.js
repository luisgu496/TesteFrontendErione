export const validateFields = ({ name, cpf, phone, email }) => {
  const errs = {};
  if (!name) errs.name = true;
  if (!/^\d{11}$/.test(cpf)) errs.cpf = true;
  if (!/^\d{10,11}$/.test(phone)) errs.phone = true;
  if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = true;
  return errs;
};