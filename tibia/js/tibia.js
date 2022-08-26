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
    let response = await fetch(url);
    if (response.status === 200) {
        let data = await response.text();
        content.innerHTML = JSON.parse(data).online;
    }
}

playersOnline();