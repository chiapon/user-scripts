// ==UserScript==
// @name        Jira Helper
// @namespace   AlexCoding4Fun
// @match       https://kkvideo.atlassian.net/issues/*
// @downloadURL https://raw.githubusercontent.com/chiapon/user-scripts/main/jira-helper.js
// @updateURL   https://raw.githubusercontent.com/chiapon/user-scripts/main/jira-helper.js
// @grant       none
// @version     1.02
// @author      Alex Lin
// @description 12/8/2023, 10:46:25 PM
// ==/UserScript==


function onclick() {
  myregex = /<a data-component-selector="jira-native-issue-table-issue-key" class="[_\d\w]+" href="(\/browse\/\w+-\d+)" target="_self">(\w+-\d+)<\/a>/g
  matches = document.getElementsByTagName("tbody")[0].outerHTML.matchAll(myregex);
  data = '';
  for (const match of matches) {
      url = 'https://kkvideo.atlassian.net' + match[1].toString()
      data += '\n' + url
  }
  console.log(data);
  navigator.clipboard.writeText(data);
}

setInterval(() => {
  btn = document.getElementById('btn_all_issue_links');
  if(!btn) {
    const iterator = document.evaluate(
      '//*[@id="ak-main-content"]/div/div[3]',
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
},3000);
