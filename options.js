
function saveOptions() {
    const mutedSubreddits = document.getElementById("mutedSubreddits").value.split(",").map(entry => entry.trim());

    chrome.storage.sync.set({
        mutedSubreddits: mutedSubreddits
    })

    let status = document.getElementById("status")
    status.textContent = "Options have been saved!"

    setTimeout(() => status.textContent = "", 750)
}

function getSavedOptions() {
    chrome.storage.sync.get({
        mutedSubreddits: []
    }, (items) => {
        document.getElementById("mutedSubreddits").value = items.mutedSubreddits
    })
}

document.addEventListener("DOMContentLoaded", getSavedOptions)
document.getElementById("save_button").addEventListener("click", saveOptions)
