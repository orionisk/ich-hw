// Задание 2

export class Library {
  private static totalBooks: number = 0;

  addBook(): void {
    Library.totalBooks++;
  }

  static getTotalBooks(): number {
    return Library.totalBooks;
  }
}
