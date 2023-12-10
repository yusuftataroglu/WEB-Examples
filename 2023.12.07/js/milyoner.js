window.onload = function () {
    var index = 0;
    var mainRow = document.getElementById("MainRow");
    var Soru = document.getElementById("Soru");
    var BtnA = document.getElementById("A");
    var BtnB = document.getElementById("B");
    var BtnC = document.getElementById("C");
    var BtnD = document.getElementById("D");

    var questionAnswerArray = [
        [
            { soru: "Nobel Fizik Ödülü'nü kazanan ilk kadın kimdir?" },
            { cevap: "Marie Curie", dogru: true },
            { cevap: "Dorothy Crowfoot Hodgkin", dogru: false },
            { cevap: "Rosalind Franklin", dogru: false },
            { cevap: "Barbara McClintock", dogru: false },
        ],
        [
            { soru: "Hangi gezegenin en büyük uydusu Ganymede'dir?" },
            { cevap: "Jüpiter", dogru: true },
            { cevap: "Mars", dogru: false },
            { cevap: "Uranüs", dogru: false },
            { cevap: "Neptün", dogru: false },
        ],
        [
            { soru: "'Carmen' operasının bestecisi kimdir?" },
            { cevap: "Wolfgang Amadeus Mozart", dogru: false },
            { cevap: "Giuseppe Verdi", dogru: false },
            { cevap: "Georges Bizet", dogru: true },
            { cevap: "Richard Wagner", dogru: false },
        ],
        [
            { soru: "Hangi element gaz halinde bir madde değildir?" },
            { cevap: "Hidrojen", dogru: false },
            { cevap: "Neon", dogru: false },
            { cevap: "Klor", dogru: false },
            { cevap: "Cıva", dogru: true },
        ],
        [
            { soru: "Nobel Barış Ödülü'nü kazanan ilk Afrikalı lider kimdir?" },
            { cevap: "Nelson Mandela", dogru: false },
            { cevap: "Anwar Sadat", dogru: false },
            { cevap: "Kofi Annan", dogru: false },
            { cevap: "Albert Luthuli", dogru: true },
        ],
    ];

    //Soruları yazdır
    function getQuestion() {
        Soru.innerText = questionAnswerArray[index][0].soru;
    }

    //Seçenekleri yazdır yazdır.
    function getAnswers() {
        BtnA.innerText = "A) " + questionAnswerArray[index][1].cevap;
        BtnB.innerText = "B) " + questionAnswerArray[index][2].cevap;
        BtnC.innerText = "C) " + questionAnswerArray[index][3].cevap;
        BtnD.innerText = "D) " + questionAnswerArray[index][4].cevap;
    }

    //İlk soru ve cevaplarını ekrana getir. 
    getQuestion();
    getAnswers();

    //Cevabı al
    mainRow.addEventListener("click", function (val) {
        if (val.target.localName == "button") {
            BtnA.disabled = true;
            BtnB.disabled = true;
            BtnC.disabled = true;
            BtnD.disabled = true;
            val.target.className = "btn btn-warning w-100 text-start";
            setTimeout(function () {
                checkAnswer(val);
            }, 2000);
        }
    });

    //Cevabı kontrol et
    function checkAnswer(value) {
        for (let i = 0; i < questionAnswerArray[i].length; i++) {
            if (questionAnswerArray[index][i].cevap == value.target.innerText.slice(3)) {
                if (questionAnswerArray[index][i].dogru == true) {
                    document.getElementById(index).className = "card text-center p-3 bg-success text-bg-primary";
                    value.target.className = "btn btn-success w-100 text-start";
                    index++;
                    setTimeout(function () {
                        value.target.className = "btn btn-primary w-100 text-start";
                        getQuestion();
                        getAnswers();
                        BtnA.disabled = false;
                        BtnB.disabled = false;
                        BtnC.disabled = false;
                        BtnD.disabled = false;
                    }, 1500);
                    checkQuestionNumber();
                    break;
                } else {
                    value.target.className = "btn btn-danger w-100 text-start";
                    index = 0;
                    setTimeout(function () {
                        value.target.className = "btn btn-primary w-100 text-start";
                        resetPrizeInfos();
                        getQuestion();
                        getAnswers();
                        BtnA.disabled = false;
                        BtnB.disabled = false;
                        BtnC.disabled = false;
                        BtnD.disabled = false;
                    }, 1500);
                    break;
                }
            }
        }
    }

    //Kaçıncı soruda olunduğu bilgisini al
    function checkQuestionNumber() {
        if (index == 5) {
            BtnA.disabled = true;
            BtnB.disabled = true;
            BtnC.disabled = true;
            BtnD.disabled = true;
            setTimeout(() => {
                alert("Congratulations!!!");
            }, 10);
        }
    }
    //Ödül bilgi kartlarını sıfırla
    function resetPrizeInfos() {
        for (let i = 0; i < questionAnswerArray.length; i++) {
            document.getElementById(i).className = "card text-center p-3 bg-secondary text-bg-primary";
        }
    }

};
