// contact.model.ts
// Purpose: stores all the data associated with an individual contact.

// public is a property or method, that is accessible from outside the class. Default visibility.
// private is a property or method, that is only accessible within the class that defines it. Instances of this class can't directly access private members.
// protected is a property or method that is accessible within the class and it's subclasses (derived classes).

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
    constructor(id: string, name: string, email: string, phone: string, imageUrl: string, group: Contact[] = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.group = group;
    }
}
