(function (root) {
    'use strict';

    // Aliases.
    var doc = root.document;
    var ext = chrome.extension;

    // Find embed icon.
    var faviconEmbed = doc.querySelector('link[rel="shortcut icon"]');

    // Change path to icon.
    faviconEmbed.setAttribute('href', ext.getURL('images/icons/favicon.ico'));

}(this));
