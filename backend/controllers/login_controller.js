const { login } = require('../models');

exports.login_post = async (req, res) => {
    await login.findOne({
        where: {
            username: req.body.username
        }
    })
        .then((result) => {
            if (result === null) return res.status(400).send('Invalid username and password');
            return login.create({
                username: req.body.email,
                password: password,
                is_logged_in: req.body.is_logged_in
            })
                .then(() => {
                    res.status(200).send({
                        message: 'login successfully'
                    })
                })
                .catch((error) => res.status(400).send({ message: 'Unable to register' }));
        })
        .catch(err => console.error(err))
}


