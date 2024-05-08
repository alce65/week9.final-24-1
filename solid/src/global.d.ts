declare type User = Record<string, unknown>;
declare const bcrypt: {
  hash(password: string, salt: number): string;
};
declare const userRepository: {
  save(user: User): User;
};

declare class SqlConnection {
  get(query: string): { data: string };
}
