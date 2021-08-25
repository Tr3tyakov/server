const uuid = require('uuid');
const path = require('path');
class FileService {
  saveFile(avatar) {
    if (avatar === null) {
      return null;
    }
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('static', fileName);
      avatar.avatar.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService();
