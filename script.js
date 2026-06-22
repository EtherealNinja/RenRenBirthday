const items = document.querySelectorAll(".item");
const dialogue = document.querySelector(".dialogue");
const handle1 = document.getElementById("jsHandleTop");
const handle2 = document.getElementById("jsHandleBottom");
const innerDoorShort = document.querySelector(".innerDoorShort");
const innerDoorLong = document.querySelector(".innerDoorLong");
const stickyNotes = document.querySelector(".sticky-notes");
const clickSfx = document.getElementById("clickSfx");
let typingTimeout;


/* ---------------- ITEM SELECT AND DESELECT LOGIC ---------------- */
items.forEach(item => {

    item.addEventListener("click", () => {

        clickSfx.currentTime = 0;
        clickSfx.volume = 0.4;
        clickSfx.play();

        const alreadySelected =
            item.classList.contains("selected");

        items.forEach(otherItem => {
            otherItem.classList.remove("selected");
            textBubble.classList.remove("show");
        });

        if (!alreadySelected) {
            item.classList.add("selected");
        }

        /* ---------------- DIALOGUES ---------------- */
    if (item.classList.contains("jar") && item.classList.contains("selected"))  {
    
        startDialogue(
            "*Meep meep!* Oh! I have heard of these flowers! ......... Uh, I forgot what they are called! :< ...But why are they inside your refrigerator?!"
        );
        showBubble();
    }
    if (item.classList.contains("dutchmill1") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "Mon cher humain, Might I know what is it you are holding? ...A Blueberry Drink? *Mrrp?* Can I try it?"
        );
    }
    if (item.classList.contains("dutchmill2") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "Dutch Mill? Hmm... \"Dutch\" refers to the Netherlands, does it not? Yet I see neither a windmill nor a Dutchman inside that drink!"
        );
    }
    if (item.classList.contains("dutchmill3") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "*Prrt Meep*! Look! There are more Dutch Mill drinks here! .... Though it's such an unfortunate that I still cannot find the Dutchman!"
        );
    }
    if (item.classList.contains("dutchmill4") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "*Mrrp* Mon cher humain, I'm eager to know what these drinks taste like!"
        );
    }
    if (item.classList.contains("dutchmill5") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "(???): \"Seek the files. Therein thou shalt find a translation of the foreign tongue (otherwise known as his handwriting).\""
        );
    }
    if (item.classList.contains("dutchmill6") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "*MORE BLUEBERRY DUTCHMIIIIILLLLLLLLL!!*"
        );
    }
    if (item.classList.contains("dutchmill7") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "(Rein) *I should take this one. I'm starting to crave.*"
        );
    }
    if (item.classList.contains("orange1") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "An orange? *EEP!* Grand ciel, non! I am a sea otter, not a fruit bat!"
        );
    }
    if (item.classList.contains("strawberry") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "(Rein) *Oh? I still have a strawberry left here. I might as well eat them soon!*"
        );
    }
    if (item.classList.contains("orange3") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "(Rein) *Precious little spheres. They smell delightful, but I do not believe sea otters are meant to eat them.*"
        );
    }
    if (item.classList.contains("blueberry2") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "(Rein) *A Blueberry! Still, I don't think these are meant for sea otters, but they are definitely one of my favorite treats!*"
        );
    }
    if (item.classList.contains("sticky-notes") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
        "(Rein) *What is this? \"To Dearest Friend, Rein\" ...Huh? This writing is unreadable. Who could've wrote this?*"
        );
    }
    if (item.classList.contains("jarBlueberry") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "*Meep Meep!* You, my dear human, have quite a lot of blueberries in your refrigerator! I can sense your great adoration for them!"
        );
    }
    if (item.classList.contains("jarStone") && item.classList.contains("selected"))  {
    
        showBubble();
        startDialogue(
            "*MEEP MEEP!* There you are, my precious rock! At long last, we are reunited! ..... My dearest human, I cannot express how grateful I am to you! You deserve the best this world has to offer! *MEEP MEEP!* Thank you so much !!"
        );
    }

});
});

/* ---------------- DOOR OPEN & CLOSE LOGIC ---------------- */
const shortDoor = document.querySelector(".shelfShortDoor");
handle1.addEventListener("click", () => {

    shortDoor.classList.add("opened");
});
    innerDoorShort.addEventListener("click", () => {
        shortDoor.classList.toggle("opened");
        stickyNotes.classList.remove("selected");

        if (!shortDoor.classList.contains("opened")) {

        items.forEach(item => {
            item.classList.remove("selected");
        });

        textBubble.classList.remove("show");
    }
    });

const longDoor = document.querySelector(".shelfLongDoor");
handle2.addEventListener("click", () => {

    longDoor.classList.add("opened");
});
    innerDoorLong.addEventListener("click", () => {
        longDoor.classList.toggle("opened");
        if (!longDoor.classList.contains("opened")) {

        items.forEach(item => {
            item.classList.remove("selected");
        });

        textBubble.classList.remove("show");
    }
    });


stickyNotes.addEventListener("click", (event) => {
    event.stopPropagation();
});


/* ---------------- TYPE WRITER LOGIC ---------------- */
function startDialogue(newText) {

    clearTimeout(typingTimeout);

    dialogue.textContent = "";

    let index = 0;

    function typeWriter () {

        if (index < newText.length) {

            dialogue.textContent += 
                newText.charAt(index);

            index++;

             typingTimeout =
                setTimeout(typeWriter, 40);
        }
    }

    typeWriter();
}
const textBubble = document.getElementById("textBubble");
function showBubble() {
    textBubble.classList.add("show");
}

/* ---------------- WELCOME MESSAGE TYPEWRITER ---------------- */
const welcomeText = document.getElementById("welcome-text");
const welcomeScreen = document.getElementById("welcome-screen");

const message = 
"*Meep meep!* Bonjour, gente dame! Might this humble little creature ask for your assistance? My favorite rock has gone missing, and I cannot seem to find it...!";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        welcomeText.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    } else {

        setTimeout(() => {

            welcomeScreen.classList.add("hide-welcome");

        }, 1500);

    }

}

typeWriter();

/* ---------------- MUSIC ---------------- */

const bgMusic = document.getElementById("bgMusic");


function startMusic() {
    bgMusic.volume = 0.3; // adjust volume (0.0 to 1.0)
    bgMusic.play();
}

// start after first user interaction (important for browsers)
document.addEventListener("click", startMusic, { once: true });