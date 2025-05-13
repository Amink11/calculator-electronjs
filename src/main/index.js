const { app, BrowserWindow } = require("electron");
const path = require("path");

const createwindow = () => {
    const window = new BrowserWindow({
        width: 300,
        height: 550,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        resizable: false,
    })

    window.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.whenReady().then(() => {
    createwindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createwindow()
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})