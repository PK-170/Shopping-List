const User = {
    nameFirst: "John",
    nameLast: "Hunter",
    age: 40,
    region: "NSW",
    get displayName(){console.log(this.nameFirst + " " + this.nameLast);},
    set setRegion(newRegion){this.region = newRegion},
    laptop: {
        brand: "Lenovo",
        ram: 8,
        storage: 256,
    },
    mobile_phone: {
        brand: "Samsung",
        model: "A52",
        ram: 4,
        storage: 128
    }
}

User.displayName;
User.setRegion = "QLD";
User.age = 20;
console.log(User.region);
console.log(User.laptop.brand);
console.log(User.mobile_phone.brand);