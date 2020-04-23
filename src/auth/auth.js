const jwt = require('jsonwebtoken')

function login(req, res, next) {
    const { user, password } = req.body;

    if (user === 'luiz' && password === '123'){
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300
      });

      return res.status(200).send({ auth: true, token: token });
    }
    
    return res.status(500).send('Login inválido!');
}

function logout(req, res, next) {
  res.status(200).send({ auth: false, token: null });
}

function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token'];
  
    //VERIFICA SE TEM TOKEN
    if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    
    //VALIDA O TOKEN
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      }

      next();
    });
}

module.exports = { verifyJWT, login, logout }