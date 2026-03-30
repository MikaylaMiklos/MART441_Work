
    $(document).ready(function () {
    $("#btnSubmit").click(function () {
    $.getJSON("zodiac.json", function (data) {

        let output = "";

        for (let i = 0; i < data.length; i++) {
            let zodiac = data[i];

            output += `
                <div class="zodiac-card">
                    <h3>${zodiac.name} ${zodiac.symbol}</h3>
                    <p><strong>Element:</strong> ${zodiac.element}</p>
                    <p><strong>Quality:</strong> ${zodiac.quality}</p>
                    <p><strong>Ruling Planet:</strong> ${zodiac.ruling_planet}</p>
                    <p><strong>Dates:</strong> ${zodiac.dates}</p>
                </div>`;
        }

        $("#zodiacInfo").html(output);

        $(".zodiac-card").zodiacCard();

        console.log(data);
    });
});


    $("#btnFire").click(function () {
    $.getJSON("zodiac.json", function (data) {

        let output = "";

        for (let i = 0; i < data.length; i++) {
            if (data[i].element === "Fire") {
                let zodiac = data[i];

                output += `
                    <div class="zodiac-card">
                        <h3>${zodiac.name} ${zodiac.symbol}</h3>
                        <p><strong>Element:</strong> ${zodiac.element}</p>
                        <p><strong>Quality:</strong> ${zodiac.quality}</p>
                        <p><strong>Ruling Planet:</strong> ${zodiac.ruling_planet}</p>
                        <p><strong>Dates:</strong> ${zodiac.dates}</p>
                    </div>`;
            }
        }

        $("#zodiacInfo").html(output);

        $(".zodiac-card").zodiacCard();
    });
});

    $("#btnEarth").click(function () {
    $.getJSON("zodiac.json", function (data) {

        let output = "";

        for (let i = 0; i < data.length; i++) {
            if (data[i].element === "Earth") {
                let zodiac = data[i];

                output += `
                    <div class="zodiac-card">
                        <h3>${zodiac.name} ${zodiac.symbol}</h3>
                        <p><strong>Element:</strong> ${zodiac.element}</p>
                        <p><strong>Quality:</strong> ${zodiac.quality}</p>
                        <p><strong>Ruling Planet:</strong> ${zodiac.ruling_planet}</p>
                        <p><strong>Dates:</strong> ${zodiac.dates}</p>
                    </div>`;
            }
        }

        $("#zodiacInfo").html(output);

        $(".zodiac-card").zodiacCard();
    });
});

$("#btnAir").click(function () {
    $.getJSON("zodiac.json", function (data) {

        let output = "";

        for (let i = 0; i < data.length; i++) {
            if (data[i].element === "Air") {
                let zodiac = data[i];

                output += `
                    <div class="zodiac-card">
                        <h3>${zodiac.name} ${zodiac.symbol}</h3>
                        <p><strong>Element:</strong> ${zodiac.element}</p>
                        <p><strong>Quality:</strong> ${zodiac.quality}</p>
                        <p><strong>Ruling Planet:</strong> ${zodiac.ruling_planet}</p>
                        <p><strong>Dates:</strong> ${zodiac.dates}</p>
                    </div>`;
            }
        }

        $("#zodiacInfo").html(output);

        $(".zodiac-card").zodiacCard();
    });
});

$("#btnWater").click(function () {
    $.getJSON("zodiac.json", function (data) {

        let output = "";

        for (let i = 0; i < data.length; i++) {
            if (data[i].element === "Water") {
                let zodiac = data[i];

                output += `
                    <div class="zodiac-card">
                        <h3>${zodiac.name} ${zodiac.symbol}</h3>
                        <p><strong>Element:</strong> ${zodiac.element}</p>
                        <p><strong>Quality:</strong> ${zodiac.quality}</p>
                        <p><strong>Ruling Planet:</strong> ${zodiac.ruling_planet}</p>
                        <p><strong>Dates:</strong> ${zodiac.dates}</p>
                    </div>`;
            }
        }

        $("#zodiacInfo").html(output);

        $(".zodiac-card").zodiacCard();
    });
});


});
