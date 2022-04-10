import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

/**
 * JWT 토큰 생성
 * @param {any} payload 
 * @returns {string} token
 */
function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn: '7d'
                }, (error, token) => {
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};
exports.generateToken = generateToken;

//토큰은 만들어지고나서 7일동안 유효하도록 설정