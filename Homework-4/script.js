//work before referencing github example code

/* function clickChoice(choice) {
    if (choice == "option1") {
        console.log("You have chosen the Silver Ornamental Dagger.");
        document.getElementById("items").innerHTML = "You have chosen the Silver Ornamental Dagger. Continuing on your journey you find a traveling merchant who offers you a red potion or bundle of herbs.";
        document.getElementById("option1").innerHTML = "Red Potion";
        document.getElementById("option2").innerHTML = "Bundle of Herbs";

    }

    if (choice == "option2") {
        document.getElementById("items").innerHTML = "You have chosen the Small Golden Mirror. Continuing on your journey you find a find a small town, a local blacksmith has heard of your mission and is willing to offer you wepons to complete it. Your choices are a large magical staff or a battle axe.";
        document.getElementById("option1").innerHTML = "Magical Staff";
        document.getElementById("option2").innerHTML = "Battle Axe";
    }
}
 */

function clickChoice(choice) {
    var text = document.getElementById("storyPrompt");
    var choice1 = document.getElementById("option1");
    var choice2 = document.getElementById("option2");

    // first choice - dagger or mirror
    if (choice == 1 && choice1.innerHTML == "Dagger") {
    console.log("You have chosen the Silver Ornamental Dagger.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Silver Ornamental Dagger. Continuing on your journey you find a traveling merchant who offers you a red potion or bundle of herbs.";
    document.getElementById("option1").innerHTML = "red potion";
    document.getElementById("option2").innerHTML = "bundle of herbs";
    } 

    else if (choice == 2 && choice2.innerHTML == "Mirror") {
    console.log("You have chosen the Small Golden Mirror.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Small Golden Mirror. Continuing on your journey you find a small town, a local blacksmith has heard of your mission and is willing to offer you wepons to complete it. Your choices are a large magical staff or an epic battle axe.";
    document.getElementById("option1").innerHTML = "Magical Staff";
    document.getElementById("option2").innerHTML = "Battle Axe";
    }

    //second choice dagger

    else if (choice == 1 && choice1.innerHTML == "red potion") {
    console.log("You have chosen the Red Potion.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Red Potion. You drink the potion and gain super strength. continuing on your journey you find an ominous cave. Do you enter the cave or continue on your path where you see the beggining of beast tracks?";
    document.getElementById("option1").innerHTML = "Enter Cave";
    document.getElementById("option2").innerHTML = "Continue Path";
    }

    else if (choice == 2 && choice2.innerHTML == "bundle of herbs") {
    console.log("You have chosen the Bundle of Herbs.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Bundle of Herbs, you mix the herbs into a tea and gain the ability to heal yourself. Continuing on your journey you find an ominous cave. Do you enter the cave or continue on your path where you see the beggining of beast tracks?";
    document.getElementById("option1").innerHTML = "Enter Cave";
    document.getElementById("option2").innerHTML = "Continue Path";
    }

    //second choice mirror

    else if (choice == 1 && choice1.innerHTML == "Magical Staff") {
    console.log("You have chosen the Magical Staff.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Magical Staff. You can now cast powerful spells. Continuing on your journey you find an ominous cave. Do you enter the cave or continue on your path where you see the beggining of beast tracks?";
    document.getElementById("option1").innerHTML = "Enter Cave";
    document.getElementById("option2").innerHTML = "Continue Path";
    }

    else if (choice == 2 && choice2.innerHTML == "Battle Axe") {
    console.log("You have chosen the Battle Axe.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen the Battle Axe. You can now kill the beast in one blow. Continuing on your journey you find an ominous cave. Do you enter the cave or continue on your path where you see the beggining of beast tracks?";
    document.getElementById("option1").innerHTML = "Enter Cave";
    document.getElementById("option2").innerHTML = "Continue Path";
    }

    //third choice 


    else if (choice == 1 && choice1.innerHTML == "Enter Cave") {
    console.log("You have chosen to enter the cave.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen to enter the cave. Inside the cave you find a portal. Do you enter the portal or do you head back towards the beast tracks?";
    document.getElementById("option1").innerHTML = "Enter Portal";
    document.getElementById("option2").innerHTML = "Head Back";
}



    else if (choice == 2 && choice2.innerHTML == "Continue Path") {
    console.log("You have chosen to head towards the beast tracks.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen to head back towards the beast tracks. As you follow the tracks you see the beast in the distance. The beast is a Manticore! Complete your mission!";
    document.getElementById("option1").innerHTML = "Attack Beast";
    }   

    //fourth choice and ending

    else if (choice == 1 && choice1.innerHTML == "Enter Portal") {
    console.log("You have chosen to enter the portal.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen to enter the portal. When you step through the portal you find yourself in a new world, but you cant overcome this feeling of deja vu.";
    document.getElementById("option1").innerHTML = "Explore New World";
    document.getElementById("option2").innerHTML = "restart?";
    }

    else if (choice == 2 && choice2.innerHTML == "Head Back") {
    console.log("You have chosen to head back towards the beast tracks.");
    document.getElementById("storyPrompt").innerHTML = "You have chosen to head back towards the beast tracks. As you follow the tracks you see the beast in the distance. The beast is a Manticore! Complete your mission!";
    document.getElementById("option1").innerHTML = "Attack Beast";
    document.getElementById("option2").innerHTML = "";
    }
    
    else if (choice == 1 && choice1.innerHTML == "Attack Beast") {
    console.log("You have chosen to attack the beast.");
    document.getElementById("storyPrompt").innerHTML = "You charge towards the Manticore and start to fight. Using your weapon you deal a fatal hit to the Manticore and complete your mission!";
    document.getElementById("question").innerHTML = "would you like to restart your mission?";
    document.getElementById("option1").innerHTML = "You have defeated the Manticore! Congratulations on completing your mission!";
    document.getElementById("option2").innerHTML = "restart?";
    }

    //restart

    else if (choice == 1 && choice1.innerHTML == "Explore New World") {
    console.log("You have chosen to explore the new world.");
    document.getElementById("storyPrompt").innerHTML = "You are on a mission to kill a beast in the mountains, you make your way through the cold foggy forest and happen upon a Silver Ornamental Dagger and a Small Golden Mirror." + "You cant help but feel like you have been here before.";
    document.getElementById("option1").innerHTML = "dagger";
    document.getElementById("option2").innerHTML = "mirror";
    }

    else if (choice == 2 && choice2.innerHTML == "restart?") {
    console.log("You have chosen to restart the game.");
    document.getElementById("storyPrompt").innerHTML = "You are on a mission to kill a beast in the mountains, you make your way through the cold foggy forest and happen upon a Silver Ornamental Dagger and a Small Golden Mirror.";
    document.getElementById("question").innerHTML = "Which do you choose?";
    document.getElementById("option1").innerHTML = "Dagger";
    document.getElementById("option2").innerHTML = "Mirror";
    }

}
