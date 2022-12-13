// The "public" modifier allows access from any location.
class DataPublic {

    // public attribute
    public name: string;

    // public method
    public getFullName(): string {
        return `Your fullname is : ${this.name}`
    }
}