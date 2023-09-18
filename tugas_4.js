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

let update_name = "Gusti Muhammad Wardi Wanto";
let update_email = "muhtiwanto@gmail.com";
let hoby = "menulis";

// Menggunakan spread operator untuk membuat objek baru yang telah diperbarui
const updatedData = { ...data, name: update_name, email: update_email };
console.log(updatedData);

// Menambahkan properti hoby ke objek yang baru
updatedData.hoby = hoby;
console.log(updatedData);



//destructuring
let {city, street} = data.address
console.log(city)
console.log(street)