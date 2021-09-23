export class Contact {
    constructor(
        public id : number,
        public phoneNumbers : PhoneNumber[],
        public emails : Email[]
    ) { }
}

export class Email {
    constructor(
        public id : number,
        public contactId : number,
        public text : string
    ) { }
}

export class PhoneNumber {
    constructor(
        public id : number,
        public contactId : number,
        public text : string

    ) { }
}