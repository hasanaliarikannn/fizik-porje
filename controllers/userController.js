const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const createToken = (user) => {
	return jwt.sign({ user }, process.env.SECRET, {
		expiresIn: '7d',
	});
};
module.exports.registerValiations = [
	body('name').not().isEmpty().trim().withMessage('Ad gerekli'),
	body('email').not().isEmpty().trim().withMessage('Email gerekli'),
	body('password')
		.isLength({ min: 6 })
		.withMessage('Sifre 6 karakterden uzun olması lazım.'),
];
module.exports.register = async (req, res) => {
	const { name, email, password } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const checkUser = await User.findOne({ email });
		if (checkUser) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'Email önceden alınmış' }] });
		}
		
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		try {
			const user = await User.create({
				name,
				email,
				password: hash,
			});
			const token = createToken(user);
			return res
				.status(200)
				.json({ msg: 'Giris basarılı', token });
		} catch (error) {
			return res.status(500).json({ errors: error });
		}
	} catch (error) {
		return res.status(500).json({ errors: error });
	}
};
module.exports.loginValiations = [
	body('email').not().isEmpty().trim().withMessage('Email gerekli'),
	body('password').not().isEmpty().withMessage('Password gerekli'),
];
module.exports.login = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (user) {
			const matched = await bcrypt.compare(password, user.password);
			if (matched) {
				const token = createToken(user);
				return res
					.status(200)
					.json({ msg: 'basarılı', token });
			} else {
				return res
					.status(401)
					.json({ errors: [{ msg: 'Password yanlış' }] });
			}
		} else {
			return res.status(404).json({ errors: [{ msg: 'Email bulunamadı' }] });
		}
	} catch (error) {
		return res.status(500).json({ errors: error });
	}
};
