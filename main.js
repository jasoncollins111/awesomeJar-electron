var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start({
	companyName: 'Good-Jar',
	submitURL: 'localhost:8080/error'
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1360, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
