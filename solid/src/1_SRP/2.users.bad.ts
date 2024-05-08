// Ejemplo de clase que no cumple con el principio de responsabilidad única
{
  class UserRegistry {
    createUser(email: string, password: string) {
      const salt = 10;
      const encryptedPassword = bcrypt.hash(password, salt);
      const user: User = {
        email,
        password: encryptedPassword,
      };
      userRepository.save(user);
    }
  }
}
