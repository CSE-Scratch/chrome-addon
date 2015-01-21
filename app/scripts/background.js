'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "scripts/contentscript.js"});
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
  console.log('\'Allo \'Allo! Event Page for Browser Action');
});
