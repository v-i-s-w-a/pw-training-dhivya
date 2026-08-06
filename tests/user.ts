export class User {
username: string;
password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    userDetails1() {
        return `Username: ${this.username}, Password: ${this.password}`;
    }
    static userDetails2(username: string) {
        return `Username: ${username}`;
        //console.log(`Calling static method: username: ${username}`);
    }
}