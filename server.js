const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');


// above HTML requests
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//classes 
class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.city = faker.address.city();
        this.streetName = faker.address.streetName();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}



//requests
app.get("/api", (req, res) => {
    res.json({ message: "Thank you for flying with Faker Api"})
});

app.get("/api/users/new", (req, res)=>{
    //return one new user
    res.json({
        status: "OK",
        user: new User()
    })
})

app.get("/api/companies/new", (req, res)=>{
    //return one new company
    res.json({
        status: "OK",
        company: new Company()
    })
})


app.get("/api/user/company", (req, res)=>{
    //return one new user and one new company
    res.json({
        status: "OK",
        user: new User(),
        company: new Company()
    })
})


// below HTML requests
app.listen( port, () => console.log(`Listening on port: ${port}`) );
