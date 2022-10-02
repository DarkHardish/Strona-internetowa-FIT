
        function obliczBMI() {
            var strText = document.getElementById("waga").value;
            var strText1 = document.getElementById("wzrost").value;
            var zamiana = strText1 / 100;
            var result = strText / (zamiana * zamiana);
            const rounded = Math.round(result * 100) / 100;
            document.getElementById('spanResult').textContent = rounded;


            if (rounded < 16 && rounded > 0) {
                document.getElementById("spanResult").style.color = '#800F00';
                document.getElementById('spanwskaz').textContent = "wygłodzenie";
                document.getElementById('spanwskaz').style.color = '#800F00';

            }
            else if (rounded > 16 && rounded < 16.99) {
                document.getElementById("spanResult").style.color = '#FF0000';
                document.getElementById('spanwskaz').textContent = "wychudzenie";
                document.getElementById('spanwskaz').style.color = '#FF0000';

            }
            else if (rounded > 17 && rounded < 18.49) {
                document.getElementById("spanResult").style.color = '#FF4C00';
                document.getElementById('spanwskaz').textContent = "niedowaga";
                document.getElementById('spanwskaz').style.color = '#FF4C00';

            }

            else if (rounded > 18.5 && rounded < 24.99) {
                document.getElementById("spanResult").style.color = '#00c800';
                document.getElementById('spanwskaz').textContent = "wartość prawidłowa";
                document.getElementById('spanwskaz').style.color = '#00c800';

            }

            else if (rounded > 25 && rounded < 29.99) {
                document.getElementById("spanResult").style.color = '#FE5000';
                document.getElementById('spanwskaz').textContent = "nadwaga";
                document.getElementById('spanwskaz').style.color = '#FE5000';

            }

            else if (rounded > 30 && rounded < 34.99) {
                document.getElementById("spanResult").style.color = '#FF2D00';
                document.getElementById('spanwskaz').textContent = "I stopień otyłości";
                document.getElementById('spanwskaz').style.color = '#FF2D00';
            }

            else if (rounded > 35 && rounded < 39.99) {
                document.getElementById("spanResult").style.color = '#FE2000';
                document.getElementById('spanwskaz').textContent = "II stopień otyłości";
                document.getElementById('spanwskaz').style.color = '#FE2000';

            }

            else if (rounded > 40) {
                document.getElementById("spanResult").style.color = '#800F00';
                document.getElementById('spanwskaz').textContent = "otyłość skrajna";
                document.getElementById('spanwskaz').style.color = '#800F00';

            }
            function start(){
                document.getElementById('serce').className='serce';
            }
        }