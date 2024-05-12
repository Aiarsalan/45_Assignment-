"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = ['HiNa', 'AreeBa', 'MuqaddaS', 'ZaRa', 'JoHn'];
var new_users = ['Rani', 'HiNa', 'LaiBa', 'AmishA', 'ZaRa'];
new_users.forEach(function (newuserName) {
    var lowercase = newuserName.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The username ".concat(newuserName, " is not available. Please write a different username"));
    }
    else {
        console.log("The username ".concat(newuserName, " is available"));
    }
});
