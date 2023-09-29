// Menghitung luas dan keliling persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}
function kelilingPersegi(sisi) {
    return 4 * sisi;
}
const sisiPersegi = 20; 
console.log("Luas Persegi:", luasPersegi(sisiPersegi));
console.log("Keliling Persegi:", kelilingPersegi(sisiPersegi));

// Menghitung luas dan keliling persegi panjang 
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}
const panjangPersegiPanjang = 20; 
const lebarPersegiPanjang = 37;   
console.log("Luas Persegi Panjang:", luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log("Keliling Persegi Panjang:", kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));

module.exports = {
    sisiPersegi, panjangPersegiPanjang, lebarPersegiPanjang
}