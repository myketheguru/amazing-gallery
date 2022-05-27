const allTabs = document.querySelectorAll('.tab')
const allScreens = document.querySelectorAll('.screen')

allTabs.forEach(function (tab, index) {
    tab.onclick = function () {
        allScreens.forEach(function (screen) {
            screen.style.setProperty('transform', `translateX(-${index * 100}%)`)
        })
    }
})