// ==UserScript==
// @name        Jira Issue Links
// @namespace   AlexCoding4Fun
// @match       https://kkvideo.atlassian.net/issues/*
// @grant       none
// @version     1.0
// @author      Alex Lin
// @description 12/8/2023, 10:46:25 PM
// ==/UserScript==

window.onload = function () {
  const iterator = document.evaluate(
    '//*[@id="global-issue-navigator-container"]/div[2]/div/div/div/div/div/div/div[1]/div[2]',
    document,
    null,
    XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
    null,
  );
  node = iterator.iterateNext();
  btn = document.createElement('button');
  btn.id = 'btn_all_issue_links';
  btn.innerText = 'All issue links';
  btn.className = 'aui-button';
  btn.onclick = onclick;
  node.prepend(btn);
}


function onclick() {
  myregex = /<a class="issue-link" data-issue-key="ST-\d+" href="(\/browse\/ST-\d+)" original-title="">ST-\d+<\/a>/g
  matches = document.getElementById("issuetable").outerHTML.matchAll(myregex);
  data = '';
  for (const match of matches) {
      url = 'https://kkvideo.atlassian.net' + match[1].toString()
      data += '\n' + url
  }
  console.log(data);
  navigator.clipboard.writeText(data);
}