// exports.validarTokenIntegracao = async (token, app) => {
//   const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

//   if (!decodedToken) {
//     throw new UnauthorizedError('Token com formato ou assinatura inválida inválido');
//   }

//   if (decodedToken.iat) {
//     delete decodedToken.iat;
//   }

//   const { error } = await schema.validateAsync(decodedToken);

//   if (error) {
//     throw new UnauthorizedError(`Acesso não autorizado. ${error.message}`);
//   }

//   const empresa = await app.services.sistema.empresas.findAll(decodedToken.key);
//   if (!empresa || empresa.length !== 1) {
//     throw new UnauthorizedError('Token não contém referência ao sistema');
//   }

//   if (empresa[0].EMP_TOKENINTEGRACAO !== token) {
//     throw new UnauthorizedError('Token difere do gravado no banco de dados');
//   }

//   return { razao: empresa[0].EMP_RAZAO, cnpjCpf: empresa[0].EMP_CNPJCPF };
// };
