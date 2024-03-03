// contact.model.ts
// Purpose: stores all the data associated with an individual contact.

export class Contact {
    // Properties representing contact information
    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public imageUrl: string;
    
    // Property representing group contacts
    // ? symbol indicates that the group property is optional.
    public group?: Contact[];

    // Additional properties or methods can be added as needed

    // Constructor to initialize the contact with provided data
    constructor(id: string, name: string, email: string, phone: string, group: Contact[] = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.group = group;
    }
}
