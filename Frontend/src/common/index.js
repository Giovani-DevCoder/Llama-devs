// Definir el dominio base para el backend
const backendDomin = 'http://localhost:8080';

// Configuración de las rutas de la API para el registro y login
const SummaryApi = {
  signUP : {
    url : `${backendDomin}/api/signup`,  // URL para la creación de cuenta
    method: 'post'
  },
  login : {
    url : `${backendDomin}/api/login`,  // URL para el login de usuarios
    method  : 'post'
  },
  current_user : {
    url: `${backendDomin}/api/user-details`,
    method  : 'get'
  },
  logout_user : {
    url : `${backendDomin}/api/userLogout`,
    method : 'get'
  },
  allUser : {
    url : `${backendDomin}/api/all-users`,
    method : 'get'
  },
  updateUser : {
    url : `${backendDomin}/api/update-user`,
    method : 'post'
  }
};

export default SummaryApi;
