import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormUser from '../components/FormUser';

export default function FormPage({ users, setUsers }) {
  const location = useLocation();
  const navigate = useNavigate();
  const editingUser = location.state?.editingUser;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (formData) => {
    setLoading(true);
    setTimeout(() => {
      const updated = editingUser
        ? users.map(u => u.cpf === editingUser.cpf ? formData : u)
        : [...users, formData];
      setUsers(updated);
      setLoading(false);
      navigate('/list');
    }, 1000);
  };

  return (
    <FormUser
      onSubmit={handleSubmit}
      initialData={editingUser}
      isEditing={!!editingUser}
      loading={loading}
    />
  );
}