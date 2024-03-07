// document.model.ts
// Purpose: stores all the data associated with an individual document.

export class Document {
    // Properties representing document information

    // Unique identifier of the document
    public id: string;

    // Name of the document
    public name: string;

    // brief description of the document
    public description: string;

    // url where the document is located
    public url: string;
    
    // list of related document objects.
    public children?: Document[];

    // Additional properties or methods can be added as needed

    // Constructor to initialize the document with provided data
    constructor(id: string, name: string, description: string, url: string, children: Document[] = []) {
        // Assigning values to class properties
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.children = children;
    }
}
