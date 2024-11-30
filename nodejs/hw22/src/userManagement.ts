export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        private name: string,
        private email: string,
        private isSuperAdmin: boolean = false
      ) {}

      getName(): string {
        return this.name;
      }

      getEmail(): string {
        return this.email;
      }

      getIsSuperAdmin(): boolean {
        return this.isSuperAdmin;
      }

      setIsSuperAdmin(value: boolean): void {
        this.isSuperAdmin = value;
      }
    }
  }
}
