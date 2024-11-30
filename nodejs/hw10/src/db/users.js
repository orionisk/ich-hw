class UsersStore {
  constructor() {
    this.users = [
      {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
        password:
          '$2b$10$lNlKPlQ6y1jmtQU4x4206uuHiPyGJ2dgYLuhQAvVlnCgvkb82F2/e', // "admin123"
        role: 'admin'
      },
      {
        id: 2,
        username: 'user',
        email: 'user@example.com',
        password:
          '$2b$10$lNlKPlQ6y1jmtQU4x4206uuHiPyGJ2dgYLuhQAvVlnCgvkb82F2/e', // "admin123"
        role: 'user'
      }
    ];
  }

  getUsers() {
    return this.users;
  }

  findUserById(id) {
    return this.users.find(user => user.id === id);
  }

  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  updateUser(id, updates) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  deleteUser(id) {
    this.users = this.users.filter(user => user.id !== id);
  }
}

export const usersStore = new UsersStore();

export const getUsers = () => usersStore.getUsers();
export const findUserById = id => usersStore.findUserById(id);
export const findUserByEmail = email => usersStore.findUserByEmail(email);
export const updateUser = (id, updates) => usersStore.updateUser(id, updates);
export const deleteUser = id => usersStore.deleteUser(id);
