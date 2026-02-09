let playerName = "Adventurer";
let dangerLevel = 0;

function updateStory(text) {
    document.getElementById("story").innerHTML = text;
}

function updateChoices(html) {
    document.getElementById("choices").innerHTML = html;
}

function start() {
    updateStory(
        "<p>You enter a misty forest high in the mountains. Fog curls around ancient pines, and the air hums with distant growls. Your mission: hunt down the beast haunting these woods.</p>" +
        "<img src='https://images.unsplash.com/photo-1501785888041-af3ef285b470' class='scene'>"
    );

    updateChoices(
        "<button onclick='followTracks()'>Follow the clawed tracks</button>" +
        "<button onclick='exploreRuins()'>Investigate the stone ruins</button>" +
        "<button onclick='climbRidge()'>Climb the ridge for a better view</button>"
    );
}

function followTracks() {
    dangerLevel += 2;
    updateStory(
        "<p>You kneel beside the tracks—massive, feline, but wrong. A low growl vibrates through the fog.</p>" +
        "<img src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' class='scene'>"
    );

    updateChoices(
        "<button onclick='prepareAmbush()'>Prepare an ambush</button>" +
        "<button onclick='callOut()'>Call out to the creature</button>"
    );
}

function exploreRuins() {
    dangerLevel += 1;
    updateStory(
        "<p>The ruins whisper of an ancient battle. Claw marks scar the stone. Something powerful lives here still.</p>" +
        "<img src='https://images.unsplash.com/photo-1508264165352-258a6c7b6f62' class='scene'>"
    );

    updateChoices(
        "<button onclick='searchDeeper()'>Search deeper into the ruins</button>" +
        "<button onclick='setCamp()'>Set up a temporary camp</button>"
    );
}

function climbRidge() {
    dangerLevel += 3;
    updateStory(
        "<p>You climb the rocky ridge. The mist parts just enough to reveal a hulking silhouette with a scorpion tail.</p>" +
        "<img src='https://images.unsplash.com/photo-1500048993959-d6b475a115c0' class='scene'>"
    );

    updateChoices(
        "<button onclick='approachBeast()'>Approach the beast</button>" +
        "<button onclick='hideAndWatch()'>Hide and observe</button>"
    );
}

function prepareAmbush() {
    updateStory(
        "<p>You ready your weapon. The fog splits—and the manticore lunges, its lion jaws snarling.</p>"
    );
    finalBattle();
}

function callOut() {
    updateStory(
        "<p>Your voice echoes. The forest falls silent. Then, a deep, intelligent growl responds. The manticore steps forward, curious.</p>"
    );
    finalBattle();
}

function searchDeeper() {
    updateStory(
        "<p>You find ancient carvings depicting a winged lion with a scorpion tail—the manticore. It has been worshipped and feared for centuries.</p>"
    );
    finalBattle();
}

function setCamp() {
    updateStory(
        "<p>You rest briefly, but the ground trembles. The manticore has found you.</p>"
    );
    finalBattle();
}

function approachBeast() {
    updateStory(
        "<p>You step forward. The manticore turns, eyes glowing through the mist.</p>"
    );
    finalBattle();
}

function hideAndWatch() {
    updateStory(
        "<p>You watch from the shadows. The manticore sniffs the air—it knows you're here.</p>"
    );
    finalBattle();
}

function finalBattle() {
    let outcome = "";

    if (dangerLevel <= 2) {
        outcome = "You strike swiftly, catching the manticore off guard. With a final roar, it falls. You have saved the mountain realm.";
    } else if (dangerLevel <= 4) {
        outcome = "The manticore battles fiercely, but your courage holds. After a brutal fight, you emerge victorious.";
    } else {
        outcome = "The manticore is too powerful. Despite your bravery, you are forced to retreat into the mist, vowing to return stronger.";
    }

    updateChoices("");
    updateStory("<p><strong>Final Outcome:</strong> " + outcome + "</p>");
}

start();
