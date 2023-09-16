let data = {
    id:1,
    name:"Budiarto",
    username:"Budi",
    email:"budibudi@example.com",
    address:
        {
            street:"Jln.Tembus",
            suite:"66184",
            city:"Wlingi",
            zipcode:"54321-1234"
        },
    phone:"088297983679",
    website:"karyasederhanamandiri.blogspot.com"
}

let update_name = "Gusti Muhammad Wardi Wanto"
let update_email = "muhtiwanto@gmail.com"
let hoby = "menulis"
console.log({...data, name : update_name, email : update_email})
console.log({...data, hoby : hoby})

console.log(data.address.city)
console.log(data.address.street)