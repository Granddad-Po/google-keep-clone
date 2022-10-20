const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')


class UserService {
    async registration(email, password) {
        const candidate = await userModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует]`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()
        
        const user = await userModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, activationLink)
        
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {...tokens, user: userDto}
    }
}

module.exports = new UserService()