export class User {
  constructor(id, sdk) {
    this._id = id;
    this._sdk = sdk;
  }

  fullName() {
    // TODO: Localization
    return this._firstName + ' ' + this._lastName;
  }
}
