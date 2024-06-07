abstract class camera {
    constructor(
        public frontCam:string,
        public backCam:string
    ){}

     abstract getbothCam():void
}

class samsung extends camera {
    constructor(
        public frontCam:string,
        public backCam:string,
        public focus:string
    ){
        super(frontCam,backCam)
    }

    getbothCam(): string {
        return `Front camera is ${this.frontCam} and Back camera is ${this.backCam} `
    }
}


const iphone = new samsung ("12mp","22mp","acha he focus bhi") 

console.log(iphone.getbothCam())
