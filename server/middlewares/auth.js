const jwt = require('jsonwebtoken');
const jwtkey = require('../configs/jwtkey.js');
const secretKey = jwtkey.secretKey;

exports.authenToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Missing token' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.userName = decoded.userName;
        req.id = decoded.id;
        next();
    });
};