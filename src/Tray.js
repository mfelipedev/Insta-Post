const { app, Tray, Menu, BrowserWindow } = require('electron');
const path = require('path');

let tray = null;
let mainWindow = null;

function createWindow() {
  console.log('Window created');
  mainWindow = new BrowserWindow({
    width: 450,
    height: 400,
    frame: false,
    resizable: false,
    fullscreenable: false,
    show: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../index.html'));

  mainWindow.on('closed', () => {
    //console.log('Fechando APP');
    mainWindow = null;
  });

  mainWindow.on('minimize', (event) => {
    //console.log('Minimizando APP');
    event.preventDefault();
    mainWindow.hide();
  });
}

app.whenReady().then(() => {
  const trayIconPath = path.join(__dirname, '../', 'assets', 'icon_instapost.png');
  tray = new Tray(trayIconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Abrir',
      type: 'normal',
      click: () => {
        if (!mainWindow) {
          createWindow();
        } else {
          mainWindow.show();
        }
      },
    },
    {
      label: 'Minimizar',
      type: 'normal',
      click: () => {
        if (mainWindow) {
          mainWindow.minimize();
        }
      },
    },
    {
      label: 'Fechar',
      type: 'normal',
      click: () => {
        //console.log('Fechando APP');
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip('Insta Post');

  tray.on('click', () => {
    if (!mainWindow) {
      createWindow();
    } else {
      mainWindow.show();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

module.exports = { createWindow };
