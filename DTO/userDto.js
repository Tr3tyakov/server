module.exports = class userDto {
  id;
  name;
  secondName;
  avatar;
  bithday;
  gender;
  phone;
  city;
  country;
  email;

  constructor({ _id, name, secondName, avatar, bithday, gender, phone, city, country, email }) {
    (this.id = _id),
      (this.name = name),
      (this.secondName = secondName),
      (this.avatar = avatar),
      (this.bithday = bithday),
      (this.gender = gender),
      (this.phone = phone),
      (this.city = city),
      (this.country = country),
      (this.email = email);
  }
};
