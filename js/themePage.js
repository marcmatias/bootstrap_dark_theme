function elClassList(element) {
    return document.querySelector(element).classList;
}

function switchBtnIcon(hideIcon, showIcon) {
    const hiddenClass = "d-none";
    try {
        elClassList(hideIcon).remove(hiddenClass);
        elClassList(showIcon).add(hiddenClass);
    } catch (error) {
        if (error instanceof TypeError){
            const message = "Button with icons with id #moon and #sun don't exist in document";
            console.log(message);
        } else {
            throw error;
        }
    }
}

function getTheme() {
    return localStorage.getItem('theme');
}

function changeThemeToLight() {
    switchBtnIcon("#moon", "#sun");
    localStorage.setItem("theme", "light");
    elClassList("body").remove("dark");
}

function changeThemeToDark() {
    switchBtnIcon("#sun", "#moon");
    localStorage.setItem("theme", "dark");
    elClassList("body").add("dark");
}

function toggleTheme() {
    const theme = getTheme();
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
}

function showDocContent() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = 1;
}

// Document Load
function setLastTheme() {
    getTheme() === "dark" ?
        changeThemeToDark() :
        changeThemeToLight();

    showDocContent();
}
document.addEventListener("DOMContentLoaded", setLastTheme)