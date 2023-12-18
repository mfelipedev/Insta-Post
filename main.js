const { app, BrowserWindow, ipcMain } = require('electron');
const { createWindow } = require('./src/Tray.js');

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('fechar-janela', () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

ipcMain.on('minimizar-janela', () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});
