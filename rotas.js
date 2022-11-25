const { Router } = require('express');

const controleEspecialidades = require('./controladores/especialidades');

const rotas = new Router();

rotas.route('/especialidades')
     .get(controleEspecialidades.getEspecialidades)
     .post(controleEspecialidades.addEspecialidade)
     .put(controleEspecialidades.updateEspecialidade)

rotas.route('/especialidades/:codigo')
     .get(controleEspecialidades.getEspecialidadePorCodigo)
     .delete(controleEspecialidades.deleteEspecialidade)

module.exports = rotas;