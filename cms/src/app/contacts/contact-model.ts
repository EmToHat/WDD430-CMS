// contact.model.ts
// Purpose: stores all the data associated with an individual contact.

export class Contact {
    // Properties representing contact information

    // Unique identifier of the contact
    public id: string;

    // Name of the contact
    public name: string;

    // Email address of the contact
    public email: string;

    // Phone number of the contact
    public phone: string;

    // URL of the contact's image
    public imgUrl: string;
    
    // Property representing group contacts
    // ? symbol indicates that the group property is optional.
    public group?: Contact[];

    // Additional properties or methods can be added as needed

    // Constructor to initialize the contact with provided data
    constructor(id: string, name: string, email: string, phone: string, imgUrl: string, group: Contact[] = []) {
        // Assigning values to class properties
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imgUrl = imgUrl;
        this.group = group;
    }
}
