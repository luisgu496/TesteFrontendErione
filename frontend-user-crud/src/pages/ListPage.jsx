import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

export default function ListPage({ users, setUsers }) {
  const navigate = useNavigate();

  const handleEdit = (user) => navigate('/', { state: { editingUser: user } });
  const handleDelete = (cpf) => setUsers(users.filter(u => u.cpf !== cpf));

  return (
    <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
  );
}