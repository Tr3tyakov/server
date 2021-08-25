const ApiError = require('../middleware/apiError');
const ResumeService = require('../Services/resumeService');

class ResumeController {
  async createResume(req, res, next) {
    const { refreshToken } = req.cookies;
    const { newResume, mainInfo } = req.body;
    try {
      const resumeData = await ResumeService.createResume(refreshToken, newResume, mainInfo);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
  async getResume(req, res, next) {
    const { page } = req.query;
    try {
      const resumeData = await ResumeService.getResume(page);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
  async getCurrentResume(req, res, next) {
    try {
      const { id } = req.params;
      const resumeData = await ResumeService.getCurrentResume(id);
      res.json(resumeData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ResumeController();
