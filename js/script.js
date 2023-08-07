/**
 * Enters fullscreen mode.
 */
function fullscreen() {
        // Modify DOM elements to reflect fullscreen mode
    let fullscreen = document.getElementById('el-pollo-loco');
    enterFullscreen(fullscreen);
    document.getElementById('leaveFullscreen').classList.remove('d-none');
    document.getElementById('fullscreen').classList.add('d-none');
    document.getElementById('startscreen').classList.add('fullscreen-mode');
    document.getElementById('startscreen').classList.remove('start');
    document.getElementById('leaveFullscreen').classList.add('filter-invert');
    document.getElementById('gameplay').classList.add('filter-invert');
}

/**
 * Requests fullscreen mode for a specified element.
 * @param {HTMLElement} element - The element to be displayed in fullscreen mode.
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * Leaves fullscreen mode.
 */
function leaveFullscreen() {
    let leaveFullscreen = document.getElementById('el-pollo-loco');
    exitFullscreen(leaveFullscreen);
        // Modify DOM elements to exit fullscreen mode
    document.getElementById('leaveFullscreen').classList.add('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('startscreen').classList.remove('fullscreen-mode');
    document.getElementById('startscreen').classList.add('start');
    document.getElementById('leaveFullscreen').classList.remove('filter-invert');
    document.getElementById('gameplay').classList.remove('filter-invert');
}
/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen || world.keyboard.ESC) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
    }
}

/**
 * Displays the gameplay window.
 */
function showGameplay() {
    document.getElementById('gameplayWindow').classList.remove('d-none');
}

/**
 * Displays the gameplay window.
 */
function goBack() {
    document.getElementById('gameplayWindow').classList.add('d-none');
    startIntervals();
}

/**
 * Displays the end screen.
 */
function endscreen() {
    document.getElementById('endscreen').classList.remove('d-none');
    document.getElementById('mobileButtons').classList.add('d-none');
}
/**
 * Restarts the game by reloading the page.
 */
function restartGame() {
    window.location.reload();
    document.getElementById('endscreen').classList.add('d-none');
}