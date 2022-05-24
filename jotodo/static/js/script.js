function popupBox() {
    const popup = document.getElementById('popup-alert');
    popup.style.opacity = '1';
    popup.style.pointerEvents = 'auto';
}

function closePopup() {
    const popup = document.getElementById('popup-alert');
    popup.style.opacity = '0';
    popup.style.pointerEvents = 'none';
}

const themeMap = {
    dark: "light",
    light: "dark",
};

const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    let svgs = document.querySelectorAll('.svgs');
    svgs.forEach((svg) => {
        if (bodyClass.contains('light')) {
            svg.style.fill = 'rgba(0,0,0,1)';
        } else if (bodyClass.contains('dark')) {
            svg.style.fill = 'rgba(255,255,255,1)';
        }
    });
}

document.getElementById('themeButton').onclick = toggleTheme;
// document.querySelectorAll('.popup-btn').onclick = popupBox;
//document.getElementById('cancel-btn').onclick = closePopup;
//Task detail popup js
let tasks = document.querySelectorAll('.task-list-divs');
let tasksDetail = document.querySelectorAll('.task-details');
tasks.forEach((task, index) => {
   task.addEventListener('click', () => {
       tasksDetail[index - 1].style.opacity = "1";
       tasksDetail[index - 1].style.pointerEvents = "auto";
   })
});

//Close button for task detail popup
let closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach((closeButton, index) => {
   closeButton.addEventListener('click', () => {
       tasksDetail[index].style.opacity = "0";
       tasksDetail[index].style.pointerEvents = "none";
   });
});

$(document).ready(() => {
    let svgs = document.querySelectorAll('.svgs');
    svgs.forEach((svg) => {
        if (bodyClass.contains('light')) {
            svg.style.fill = 'rgba(0,0,0,1)';
        } else if (bodyClass.contains('dark')) {
            svg.style.fill = 'rgba(255,255,255,1)';
        }
    });
});
