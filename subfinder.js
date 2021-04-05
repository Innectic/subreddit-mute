
// ¯\_(ツ)_/¯
const isElementHidden = (element) => element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style === "display: none"
const hideSubreddit = (element) => element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none"

function filterVisibleSubreddits(hiddenSubreddits) {
    const elements = document.querySelectorAll("a[data-click-id=subreddit]")
    elements.forEach(element => {
        if (isElementHidden(element)) return

        const urlParts = element.href.split("/")
        const subredditName = urlParts[urlParts.length - 2].toLowerCase()
    
        if (hiddenSubreddits.indexOf(subredditName) != -1) hideSubreddit(element)
    })
}


chrome.storage.sync.get({
    mutedSubreddits: []
}, (items) => {
    const { mutedSubreddits } = items

    filterVisibleSubreddits(mutedSubreddits)
    window.addEventListener("DOMSubtreeModified", (_, __, ___) => filterVisibleSubreddits(mutedSubreddits))
})
