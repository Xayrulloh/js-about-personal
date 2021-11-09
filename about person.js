/*const firstname = ['Xayrulloh', 'Abror', 'Diyor', 'Xasan', 'Abbos', 'Nodir', 'MuhammadAbdulloh', 'Muhammad', 'Saidazim', 'Sirojiddin']
const email = ['Xayrulloh.com', 'Abror.com', 'Diyor.com', 'Xasan.com', 'Abbos.com', 'Nodir.com', 'MuhammadAbdulloh.com', 'Muhammad.com', 'Saidazim.com', 'Sirojiddin.com']
const password = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009']
let lastname = ['Alisherov', 'Abduvohidov', "Doe", "Sadullayev","Khodjayev", "Ermamatov", "Ikromov", "Yoldasheva", "Sidiqov", "Sametov"]
let phone = ["998330060523","998995685689","111111111","22222222222","123456789","987654321","789456123","321654987","654987321","123987654"]
const date = Date()
function factoryCreatUser(firstname, lastname, phone, email, password, date) {
    obj1 = {
        firstname,
        lastname,
        phone,
        email,
        password,
        date
    }
    return obj1
}
function Construktorcreatuser(firstname, lastname, phone, email, password, date) {
    this.firstname = firstname
    this.lastname = lastname
    this.phone = phone
    this.email = email
    this.password = password
    this.date = date
}
let FactoryUsers = []
let ConstruktorUser = []

for (let i = 0; i < 10; i++){
    let r = Math.round(Math.random()*9)
    FactoryUsers.push(factoryCreatUser(firstname[r], lastname[r], email[r], password[r], phone[r], date))
    ConstruktorUser.push(new Construktorcreatuser(firstname[r], lastname[r], email[r], password[r], phone[r], date))
}
console.log(FactoryUsers);
console.log(ConstruktorUser);*/














