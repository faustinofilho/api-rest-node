const LinkController = require('../Controllers/LinkController');
module.exports = (app) => {
   app.post('/link', LinkController.post);
   app.put('/link/:id', LinkController.put);
   app.delete('/link/:id', LinkController.delete);
   app.get('/links', LinkController.get);
   app.get('/link/:id', LinkController.getById);
   app.get('/:code', LinkController.getByCode);
}
