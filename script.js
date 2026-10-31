const messageText =
    "I am sorry about what happened these past days. For what I have done, for what I have said. I am sorry for hurting you, for making you feel unseen and unheard. I don't want to make you feel that your feelings are being ignored."
const messageText2 =
    "I want to be that person who supports and always listens to you. I want you to be able to share anything with me, without the fear of being dismissed. i want to make you happy and see you smile."
const messageText3 =
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

    const messages = [messageText, messageText2, messageText3];
    let messageIndex = 0;
    textElement.textContent = "";
    apologyImage.hidden = true;

    function typeNextMessage() {
        const message = messages[messageIndex];
        let characterIndex = 0;

        function typeNextCharacter() {
            if (characterIndex < message.length) {
                textElement.textContent += message.charAt(characterIndex);
                characterIndex++;
                setTimeout(typeNextCharacter, 50);
                return;
            }

            messageIndex++;
            if (messageIndex < messages.length) {
                setTimeout(() => {
                    textElement.textContent = "";
                    typeNextMessage();
                }, 6500);
            } else {
                apologyImage.hidden = false;
            }
        }

        typeNextCharacter();
    }

    typeNextMessage();
}