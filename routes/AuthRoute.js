const { Router } = require('express');
const router = Router();
const { body, validationResult } = require('express-validator');
const UserModel = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');


// api/auth/login
router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json(
                   { message: "Incorrect login data!" }
                )
            }

            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "User is not registered!" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ message: "Password mismatch!" });
            }

            const token = jwt.sign(
                { userID: user.id },
                config.get('jwtKey'),
                {expiresIn: '1h'}
            );

            res.status(200).json({token, UserID: user.id});

        } catch (err) {
            res.status(500).json({
                message: "Server error during log-in!"
            })
        }
    });

// api/auth/register
router.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        try {
            console.log('req taken', req.body);
            const errors = validationResult(req);
            console.log('Vlidation result:', errors);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: "Incorrect register data!"
                });
            }

            const { email, password } = req.body;

            const candidate = await UserModel.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: "This e-mail has been already registered!" });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            let user = new UserModel({ email, password: hashedPassword });
            await user.save();

            res.status(201).json({ message: "The user has been successfully registered!"});

        } catch (err) {
            console.log('CATCH!', err.message);
            res.status(500).json({
                message: "Server error during registration!"
            })
        }
    });

module.exports = router;