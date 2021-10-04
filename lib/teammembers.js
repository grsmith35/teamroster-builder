class Teammembers {
    constructor(user) {
        console.log(user);
        this.name = user.managername;
        console.log(this.name);
        this.id = user.managerid;
        this.email = user.manageremail;
        this.role = user.role;
    }
}

module.exports = Teammembers;