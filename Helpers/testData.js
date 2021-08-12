function getRandomPhoneNumber() {
    return ((Math.random() * (9 - 2) + 2).toString()).slice(0,1) + Math.random().toString().slice(2,11)
    }

module.exports = {
    /*levelsleep Urls*/
    levelsleepBaseUrl: 'https://www.levelsleep.com/',
    /*Data*/
    email: 'testsevtest@gmail.com',
    password: '12345678',
    fullName: 'Pavlo Pal',
    address: 'ee',
    country: 'US',
    city: 'lviv',
    state: 'CA',
    zip: '90011',
    phoneNumber: getRandomPhoneNumber(),
    cardNumber: '4242424242424242',
    expirationDate: '0222',
    cvc: '111'
}
