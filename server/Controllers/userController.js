const UserService = require('../Services/userService');
const { validationResult } = require('express-validator');
const ApiError = require('../middleware/apiError');
class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }
      const { email, password } = req.body;
      const userData = await UserService.registration(email, password);
      if (userData) {
        return res.json('Пользователь успешно зарегистрирован');
      }
      next(ApiError.BadRequest('Ошибка при регистрации пользователя'));
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.json('Вы успешно вышли');
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 1000,
        httpOnly: true,
        secure: false,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    try {
      const { link } = req.params;
      console.log(link);
      const userData = await UserService.activate(link);
      res.redirect(`${process.env.SERVER}/Account`);
    } catch (e) {
      next(e);
    }
  }

  async confirmEmail(req, res, next) {
    try {
      const { email } = req.body;
      const userData = await UserService.confirmEmail(email);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async changePassword(req, res, next) {
    try {
      const { link, newPassword } = req.body;
      console.log(link, newPassword);
      const userData = await UserService.changePassword(link, newPassword);
      res.json(userData.message);
    } catch (e) {
      next(e);
    }
  }
  async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const userData = await UserService.forgotPassword(email);
      res.json(userData.message);
    } catch (e) {
      next(e);
    }
  }
  async getUser(req, res, next) {
    const refreshToken = req.headers.refreshtoken;
    try {
      const userData = await UserService.getUser(refreshToken);
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async getMainInfo(req, res, next) {
    const refreshToken = req.headers.refreshtoken;
    try {
      const userData = await UserService.getMainInfo(refreshToken);
      console.log(userData);
      res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }
  //update
  async updateSkills(req, res, next) {
    const { refreshToken } = req.cookies;
    const { skills } = req.body;
    try {
      const userData = await UserService.updateSkills(refreshToken, skills);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async updateMainInfo(req, res, next) {
    const { refreshToken } = req.cookies;
    const newUserData = req.body;
    const avatar = req.files;
    try {
      const userData = await UserService.updateMainInfo(refreshToken, newUserData, avatar);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async updatePosition(req, res, next) {
    const { refreshToken } = req.cookies;
    const newUserData = req.body;
    try {
      const userData = await UserService.updatePosition(refreshToken, newUserData);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
