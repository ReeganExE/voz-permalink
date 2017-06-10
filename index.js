// ==UserScript==
// @name         Voz Permalink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easy to copy links to comments
// @author       ReeganExE
// @match        https://vozforums.com/showthread.php*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const { origin, pathname, search } = location;
  const root = [origin, pathname, search].join('');

  document.querySelectorAll('.thead a:not([href])').forEach(a => {
    a.href = root + '#' + a.name;
    if (a.nextSibling) {
      a.appendChild(a.nextSibling);
    }
  });
})();