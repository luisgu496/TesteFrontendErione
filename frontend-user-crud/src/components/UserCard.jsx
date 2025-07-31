export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <li>
      <span>{user.name} - {user.cpf}</span>
      <button onClick={() => onEdit(user)}>Editar</button>
      <button onClick={() => onDelete(user.cpf)}>Excluir</button>
    </li>
  );
}