//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const browserInfoDiv = document.createElement("div");
    browserInfoDiv.id = "browser-info";
    
    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;
    
    const browserInfo = `You are using ${appName} version ${appVersion}`;
    
    browserInfoDiv.textContent = browserInfo;
    document.body.appendChild(browserInfoDiv);
});
