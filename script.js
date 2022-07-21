


(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 100;
    var NxtMsgDelay = 1000;
    var MsgIndex = 0;
    var delay;
    var MsgArray = ["Hi! I'm Elijah a web developer"];

    function StartTyping() {
        var id = document.getElementById("typing-text");
        if (CharacterPos != MsgArray[MsgIndex].length) {
            MsgBuffer = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
            id.value = MsgBuffer + "_";
            delay = TypeDelay;
            id.scrollTop = id.scrollHeight;
        } else {
            delay = NxtMsgDelay;
            MsgBuffer = "";
            CharacterPos = -1;
            if (MsgIndex != MsgArray.length - 1) {
                MsgIndex++;
            } else {
                MsgIndex = 0;
            }
        }
        CharacterPos++;
        setTimeout(StartTyping, delay);
    }
    StartTyping();
})();

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'index.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}