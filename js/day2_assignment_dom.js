<!DOCTYPE html>

<head>
    <title>javascript operation</title>
</head>

<body>
    <label>Enter the digit:</label>
    <input type="text" value="" placeholder="enter the digit" id="input"><br>
    <button onclick="check()">CLICK ME</button>
    <span id="result"></span>
    <button onclick="erase()">Erase</button>

    <script>
        function check() {
            var x = Math.random()
            var y = document.getElementById("input").nodeValue
            if (y == x) {
                document.getElementById("result").innerHTML = "YOU WON"
            } else {
                document.getElementById("result").innerHTML = "you lost"
            }

        }

        function erase() {
            document.getElementById("result").innerHTML = " "
            document.getElementById("input").nodeValue = " "
        }
    </script>
</body>

</html>
