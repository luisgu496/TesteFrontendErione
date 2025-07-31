import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getUsers, saveUsers } from './utils/storage';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';
import './styles/global.scss';

const initialUsers = [
  { name: 'Joao da Silva', cpf: '26899337649', phone: '4233335555', email: 'joao@joaosilva.com.br' },
  { name: 'Maria Antonieta', cpf: '65138896180', phone: '1255553333', email: 'maria@mariaantonieta.com.br' },
  { name: 'Luiz Souza', cpf: '32420496329', phone: '1144446666', email: 'luiz@luizsouza.com.br' },
];

function App() {
  const [users, setUsers] = useState(() => {
    const saved = getUsers();
    return saved.length ? saved : initialUsers;
  });

  useEffect(() => {
    saveUsers(users);
  }, [users]);

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Cadastro</Link>
          <Link to="/list">Lista</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FormPage users={users} setUsers={setUsers} />} />
          <Route path="/list" element={<ListPage users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;