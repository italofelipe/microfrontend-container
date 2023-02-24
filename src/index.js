import("./bootstrap")
  .then(mfe => console.log("O que retorna", mfe))
  .catch(err => console.log("Erro", err));
/* For an unknown reason, this file cannot be .ts. This error happens probably at build
time, since it doesn't crashes webpack, but instead, crashes directly in the browser 
*/
