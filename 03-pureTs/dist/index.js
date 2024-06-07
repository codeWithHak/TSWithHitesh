"use strict";
class Teacher {
    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }
}
class Student {
    constructor(name, experience, age) {
        this.name = name;
        this.experience = experience;
        this.age = age;
    }
}
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.country = "khi";
        this.tokens = 1;
    }
    get userName() {
        return `Name is ${this.name}`;
    }
    get tokenCount() {
        return `Total tokens: ${this.tokens}`;
    }
    set checkToken(newToken) {
        if (newToken <= 1) {
            throw new Error("Token limit exceeded");
        }
        this.tokens = newToken;
    }
}
let huz = new User("huzair", 17, "huz@h.com");
class Data {
    constructor(country, city) {
        this.country = country;
        this.city = city;
    }
    get address() {
        return `City: ${this.city} Country: ${this.country}`;
    }
    set address(val) {
        const value = val.split(' ');
        this.country = value[0];
        this.city = value[1];
    }
}
let destination = new Data("Pakistan", "Karachi");
destination.address = "Kuwait Oman";
console.log(destination.address);
