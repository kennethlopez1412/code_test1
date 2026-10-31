const messageText =
    "I am sorry about what happened these past days. For what I have done, for what I have said. I am sorry for hurting you, for making you feel unseen and unheard. I don't want to make you feel that your feelings are being ignored."
const messageText2 =
    "Will you forgive me and accept this flower as a token of my apology?"
function openEnvelope() {
    const envelope = document.getElementById("envelopeWrapper");
    const stage = document.getElementById("flowerStage");

    if (!envelope || !stage || envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    setTimeout(() => {
        stage.classList.add("active");
        startTyping();
    }, 2000);
}

function startTyping() {
    const textElement = document.getElementById("typing-text");
    const apologyImage = document.getElementById("apology-image");
    if (!textElement || !apologyImage) return;

    let index = 0;
    textElement.textContent = "";
    apologyImage.hidden = true;

    function typeNextCharacter() {
        if (index < messageText.length) {
            textElement.textContent += messageText.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 50);
        } else {
            // Start typing the second message after a delay
            setTimeout(() => {
                index = 0;
                textElement.textContent = "";
<<<<<<< Updated upstream
=======
                apologyImage.hidden = false;
>>>>>>> Stashed changes
                function typeNextCharacter2() {
                    if (index < messageText2.length) {
                        textElement.textContent += messageText2.charAt(index);
                        index++;
                        setTimeout(typeNextCharacter2, 50);
<<<<<<< Updated upstream
                    } else {
                        apologyImage.hidden = false;
=======
>>>>>>> Stashed changes
                    }
                }
                typeNextCharacter2();
            }, 6500);
        }
    }

    typeNextCharacter();
}