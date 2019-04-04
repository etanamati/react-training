export const getDadosUsuario = () =>
  new Promise(resolve => {
    resolve({
      nome: "Nome",
      sobrenome: "Sobrenome",
      email: "nome.sobrenome@gmail.com"
    });
  });
