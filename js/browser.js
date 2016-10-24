if (BrowserDetect.browser.indexOf("chrome")>-1) {
document.write('<'+'link rel="stylesheet" href="../css/chrome.css" />');
} else if (BrowserDetect.browser.indexOf("mozilla")>-1) {
    document.write('<'+'link rel="stylesheet" href="../css/firefox.css" />');
} else if (BrowserDetect.browser.indexOf("explorer")>-1) {
    document.write('<'+'link rel="stylesheet" href="css/explorerStyles.css" />');
}