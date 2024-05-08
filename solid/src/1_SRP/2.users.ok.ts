/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/prefer-readonly */

// Alternativa que cumple con el principio de responsabilidad única
{
  class UserRegistry {
    createUser(email: string, password: string) {
      const encryptedPassword = Crypto.hashString(password);
      const user: User = {
        email,
        password: encryptedPassword,
      };
      userRepository.save(user);
    }
  }

  class Crypto {
    static hashString(password: string) {
      return bcrypt.hash(password, Crypto._salt);
    }

    private static _salt = 10;
  }
}
