export const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // Variable to hold selected character set
    let charSet = "";

    // TODO: generate the password based on the selected criteria 
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

    if (charSet === "") {
        throw new Error("At least one character type must be selected.");
    }

    let password = "";

    // Pastikan setidaknya satu karakter dari setiap jenis karakter yang dipilih muncul dalam password
    if (options.includeUppercase) password += getRandomChar(uppercase);
    if (options.includeLowercase) password += getRandomChar(lowercase);
    if (options.includeNumbers) password += getRandomChar(numbers);
    if (options.includeSpecialChars) password += getRandomChar(specialChars);

    // Sisa karakter dalam password diisi dengan karakter acak dari charSet
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    // Acak password untuk memastikan karakter tidak muncul dalam urutan yang sama
    password = shuffleString(password);

    return password;
};

// Fungsi untuk mendapatkan karakter acak dari string
function getRandomChar(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

// Fungsi untuk mengacak string
function shuffleString(str) {
    let arr = str.split('');
    let n = arr.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr.join('');
}