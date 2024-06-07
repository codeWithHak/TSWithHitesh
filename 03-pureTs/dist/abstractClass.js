"use strict";
class camera {
    constructor(frontCam, backCam) {
        this.frontCam = frontCam;
        this.backCam = backCam;
    }
}
class samsung extends camera {
    constructor(frontCam, backCam, focus) {
        super(frontCam, backCam);
        this.frontCam = frontCam;
        this.backCam = backCam;
        this.focus = focus;
    }
    getbothCam() {
        return `Front camera is ${this.frontCam} and Back camera is ${this.backCam} `;
    }
}
const iphone = new samsung("12mp", "22mp", "acha he focus bhi");
console.log(iphone.getbothCam());
