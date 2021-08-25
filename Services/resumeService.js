const resumeModel = require('../models/resumeModel');
const tokenService = require('./tokenService');

class ResumeService {
  async createResume(refreshToken, newVacancy, mainInfo) {
    const tokenData = await tokenService.checkRefreshToken(refreshToken);
    const resume = await resumeModel.create({
      mainInfo,
      languages: newVacancy.languages ? newVacancy.languages : '',
      skills: newVacancy.skills ? newVacancy.skills : '',
      typeLicense: {
        haveCar: newVacancy.typeLicense.haveCar ? true : false,
        typeCategory: newVacancy.typeLicense.typeCategory,
      },

      education: newVacancy.education,
      specializations: newVacancy.specializations,
      desiredPosition: newVacancy.desiredPosition,
      desiredPay: newVacancy.desiredPay,
      aboutMe: newVacancy.aboutMe,
    });
    return resume;
  }
  async getResume(page) {
    if (!page) {
      page = 1;
    }
    const count = await resumeModel.countDocuments({});
    const resumeData = await resumeModel
      .find()
      .skip(page * 4 - 4)
      .limit(4);
    return { resumeData, count };
  }
  async getCurrentResume(id) {
    const resumeData = await resumeModel.findOne({ _id: id });
    return resumeData;
  }
}
module.exports = new ResumeService();
