// Ejemplo del principio de Open/Closed Principle
// En este caso, en base a funciones:
// Al poder añadir valores al array, podemos añadir nuevos
// roles sin tener que modificar la función

type Employee = {
  role: string;
};

const roles = ['ceo', 'cto', 'admin', 'user', 'guest'];

const checkPrivileges = (employee: Employee) => {
  if (roles.includes(employee.role)) {
    console.log('You have access');
    return true;
  }

  console.log('You do not have access');
  return false;
};

const addRoles = (role: string) => {
  roles.push(role);
};
