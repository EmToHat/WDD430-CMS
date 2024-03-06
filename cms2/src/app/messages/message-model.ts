// message.model.ts
// Purpose: stores all the data associated with an individual message.

export class Message {
    // Properties representing message information

    // Unique identifier of the message
    public id: string;

    // Name of the message
    public subject: string;

    // Email address of the message
    public msgText: string;

    // Phone number of the message
    public sender: string;

    // Additional properties or methods can be added as needed

    // Constructor to initialize the message with provided data
    constructor(id: string, subject: string, msgText: string, sender: string) {
        // Assigning values to class properties
        this.id = id;
        this.subject = subject;
        this.msgText = msgText;
        this.sender = sender;
    }
}
