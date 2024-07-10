const User = {
    nameFirst: "John",
    nameLast: "Hunter",
    age: 40,
    region: "NSW",
    get displayName(){console.log(this.nameFirst + " " + this.nameLast);},
    set setRegion(newRegion){this.region = newRegion}
}

User.displayName;
User.setRegion = "QLD";
User.age = 20;
console.log(User.region);