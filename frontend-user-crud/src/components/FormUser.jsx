import { useState, useEffect } from 'react';
import styles from '../styles/form.module.scss';
import { validateFields } from '../utils/validations';

export default function FormUser({ onSubmit, initialData = {}, isEditing, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    ...initialData
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateFields(formData);
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Editar Usuário' : 'Cadastro de Usuário'}</h2>
      {['name', 'cpf', 'phone', 'email'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.toUpperCase()}
          value={formData[field]}
          className={errors[field] ? styles.invalid : ''}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        disabled={loading}
        className={loading ? styles.loading : ''}
      >
        {loading ? <span className={styles.loader} /> : 'Salvar'}
      </button>
    </form>
  );
} 
