const db = require('../config/conexao');

exports.post = async (request, response) => {
  const { url} = request.body;

   const code = generateCode();

   id = db.query('INSERT INTO link (code, url) VALUES ($1, $2)', [code, url], (error, results) => {
     if (error) {
       throw error
     }

     response.status(201).send({success: true, rota: request.headers.host +'/'+generateCode()})
   });

};

exports.put = async (request, response) => {
   const id = parseInt(request.params.id)
   const { url } = request.body

   const code = generateCode();

   db.query(
     'UPDATE link SET code = $1, url = $2 WHERE id = $3',
     [code, url, id],
     (error, results) => {
       if (error) {
         throw error
       }
       response.status(200).send({'id': id})
     }
   )
};

exports.delete = async (request, response) => {
   const id = parseInt(request.params.id)

   db.query('DELETE FROM link WHERE id = $1', [id], (error, results) => {
      if (error) {
         throw error
      }
      response.status(200).send({'id': id})
   })

};

exports.get = async (request, response) => {
   db.query('SELECT * FROM link ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
};

exports.getById = async (request, response) => {
   const id = parseInt(request.params.id)

   db.query('SELECT * FROM link WHERE id = $1', [id], (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
};

exports.getByCode = async (request, response, next) => {
  const code = request.params.code;

  db.query('SELECT * FROM link WHERE code = $1', [code], (error, results) => {
    if (error) {
      throw error
    }

    returno = results.rows[0];

    response.status(200).json({url: returno.url})
  })

  // res.redirect(returno.url);
};


function generateCode() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}