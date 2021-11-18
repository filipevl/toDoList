const { validationResult } = require('express-validator');

const verify = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ errors: errors.array() });
    }else{
        next();
    }
}

module.exports = verify;