function hitungBMI() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var beratBadan = parseFloat(document.getElementById("weightInput").value);
    var tinggiBadan = parseFloat(document.getElementById("heightInput").value) / 100; // Konversi tinggi ke meter
    var usia = parseFloat(document.getElementById("ageInput").value);

    var bmi = beratBadan / (tinggiBadan * tinggiBadan);
    var hasil = "";

    if (gender === "male") {
        if (bmi < 18.5) {
            hasil = "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            hasil = "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            hasil = "Kelebihan berat badan";
        } else {
            hasil = "Kegemukan";
        }
    } else if (gender === "female") {
        if (bmi < 18.5) {
            hasil = "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            hasil = "Normal (ideal)";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            hasil = "Kelebihan berat badan";
        } else {
            hasil = "Kegemukan (obesitas)";
        }
    }

    document.getElementById("bmiResult").textContent = "BMI Anda: " + bmi.toFixed(2) + " - " + hasil;
}