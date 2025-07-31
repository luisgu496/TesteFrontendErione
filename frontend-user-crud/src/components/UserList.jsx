import UserCard from './UserCard';
import styles from '../styles/list.module.scss';

export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div className={styles.list}>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map(user => (
          <UserCard
            key={user.cpf}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}