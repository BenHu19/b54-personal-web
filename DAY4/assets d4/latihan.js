const user = {
    name: "benjamin",
    age: 21,
    status: false,
    address: {
        city: "Tangerang Selatan",
        country: "Indonesia"
    }
}

console.log(user)

console.log(user["address"])
console.log(user.address)
console.log(user.address.city)

var mahasiswa = [
    {
        nama: "benjamin",
        umur: 21,
        alamat: {
            kota: "Tangerang",
            negara: "Indonesia"
        }
    },
    {
        nama: "John",
        umur: 22,
        alamat: {
            kota: "Ottawa",
            negara: "Canada"
        }
    }
]

console.log(mahasiswa)
console.log(mahasiswa[0].alamat.kota)

mahasiswa[1].status = true
mahasiswa[0].alamat.kecamatan = "Ciputat"

console.log(mahasiswa[1])
console.log(mahasiswa[0])
