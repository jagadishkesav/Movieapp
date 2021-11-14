const { login } = require('../models');

exports.login_post = async (req, res) => {
    const { username, password, is_logged_in } = req.body
    await login.findOne({
        where: {
            username: req.body.username
        }
    })
        .then((result) => {
            if (result === null) return res.status(400).send('Invalid username and password');
            return login.create({
                username: username,
                password: password,
                is_logged_in: is_logged_in
            })
                .then(() => {
                    res.status(200).send({
                        message: 'login successfully'
                    })
                })
                .catch(() => res.status(400).send({ message: 'Unable to login' }));
        })
        .catch(err => console.error("something went wrong"))
}


