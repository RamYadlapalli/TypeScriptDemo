"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Company = (function () {
    function Company(Name, Location, RegdId) {
        this.Name = Name;
        this.RegdId = RegdId;
    }
    Object.defineProperty(Company.prototype, "code", {
        get: function () {
            return this._code.toUpperCase();
        },
        set: function (codeValue) {
            this._code = codeValue;
        },
        enumerable: true,
        configurable: true
    });
    Company.prototype.showCompany = function () {
        console.log("Company name is " + this.Name);
    };
    return Company;
}());
exports.Company = Company;
var Branch = (function (_super) {
    __extends(Branch, _super);
    function Branch(CompanyName, CompanyLocation, regID, location) {
        var _this = _super.call(this, CompanyName, CompanyLocation, regID) || this;
        _this.branchLocation = location;
        return _this;
    }
    return Branch;
}(Company));
exports.Branch = Branch;
//# sourceMappingURL=classes.js.map