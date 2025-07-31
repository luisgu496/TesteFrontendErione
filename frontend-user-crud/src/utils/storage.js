const STORAGE_KEY = 'users';

export const getUsers = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
