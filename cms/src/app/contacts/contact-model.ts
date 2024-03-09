// contact.model.ts
// Purpose: stores all the data associated with an individual contact.

export class Contact {
    constructor (
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public imgUrl: string,
        public group: Contact[]
    ) { }
}