window.onload = function () {
  //Değişkenler
  var min = 0;
  var max = 10;
  var level = 1;
  var remainingGuess = 5;
  var correctNumber = GenerateRandomNumber(min, max);
  var guessedNumber = 0;
  console.log(correctNumber);

  //Rastgele sayı oluştur
  function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Tahmin edilen sayıyı al
  function GetGuessedNumber() {
    return document.getElementById("InputTahmin").value;
  }

  //Tahmin edilen sayıyla dogru sayıyı karşılaştır
  function CheckGuessedNumber(guessedNum, correctNum) {
    if (guessedNum > correctNum) {
      document.getElementById("Ipucu").innerHTML =
        "Lütfen daha <strong>küçük</strong> bir sayı girin";
      document.getElementById("Ipucu").style.display = "block";
      document.getElementById("Ipucu").className= "alert alert-warning"
      remainingGuess--;
    } else if (guessedNum < correctNum) {
      document.getElementById("Ipucu").innerHTML =
        "Lütfen daha <strong>büyük</strong> bir sayı girin";
      document.getElementById("Ipucu").style.display = "block";
      document.getElementById("Ipucu").className= "alert alert-warning"
      remainingGuess--;
    } else {
      document.getElementById("Ipucu").className = "alert alert-success";
      document.getElementById("Ipucu").innerHTML =
        "<strong>Tebrikler, bir sonraki seviyeye geçtiniz!</strong>";
      document.getElementById("Ipucu").style.display = "block";
      document.getElementById("Table").innerHTML += `<tr>
      <td>${correctNum}</td>
      <td>${level}</td>
      <td>${remainingGuess}</td>
    </tr>`;
      level++;
      remainingGuess = 5;
      max = level * 10;
      correctNumber = GenerateRandomNumber(min, max);
    }
    if (remainingGuess == 0) {
      document.getElementById("Ipucu").className = "alert alert-danger";
      document.getElementById("Ipucu").innerHTML =
        "<strong>Game over!</strong>";
      level = 1;
      remainingGuess = 5;
      max = level * 10;
      correctNumber = GenerateRandomNumber(min, max);
    }
    console.log("Dogru sayi: " + correctNumber);
  }

  //Seviye ve kalan hak bilgilerini güncelle,
  function UpdateGameInfos() {
    document.getElementById("Seviye").innerText = level.toString();
    document.getElementById("KalanHak").innerText = remainingGuess.toString();
  }

  //Butona tıklandığında yapılacaklar
  document.getElementById("ButonTahminEt").onclick = function () {
    guessedNumber = GetGuessedNumber();
    CheckGuessedNumber(guessedNumber, correctNumber);
    UpdateGameInfos();
  };
};
