export const getDadosUsuario = () =>
  new Promise(resolve => {
    resolve({
      firstName: "Nome",
      lastName: "Sobrenome",
      email: "nome.sobrenome@gmail.com"
    });
  });
