const allTabs = document.querySelectorAll('.tab')
const allScreens = document.querySelectorAll('.screen')
let currentScreenIndex = 0

const next = () => {
    currentScreenIndex += 1
    if (currentScreenIndex === allScreens.length) currentScreenIndex = 0
}

const slide = (index) => {
    // Translate the position of the screens when a tab is clicked
    allScreens.forEach(function (screen) {
        screen.style.setProperty('transform', `translateX(-${index * 100}%)`)
    })
}

allTabs.forEach(function (tab, index) {
    tab.onclick = function () {
        // Remove all .active from other tabs
        allTabs.forEach(tab => tab.classList.remove('active'));

        // Add .active to the tab that was clicked
        tab.classList.add('active')
        
        // Call the slide function
        slide(index)
    }
})

// Slide the screens automatically
let interval = setInterval(() => {
    next()
    allTabs[currentScreenIndex].click()
}, 5000)