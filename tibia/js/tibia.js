function submit_form() {
    level = document.getElementById("level").value;
    content = document.getElementById("expresults");
    content.innerHTML = "";
    lower_range = Math.round(level/1.5);
    upper_range = Math.round(level*1.5);
    content.innerHTML = content.innerHTML + "A character with level <b>" + level +"</b> can share experience with levels <b>" + lower_range + "</b> to <b>" + upper_range +"</b><br>";
}

async function playersOnline() {
    content = document.getElementById("pagoderaPlayersOnline");
    content.innerHTML = "?";
    url = "https://api.pagodera.com/api/v1/online"
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then((response) => response.json())
    .then((data) => {
        content.innerHTML = JSON.parse(data.contents).online;;
    })
    .catch((error) => {
        content.innerHTML = error;
    });
}

playersOnline();
