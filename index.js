require('aws-lambda-web')(exports, function handler(event) {
    return fetch('https://www.google.com/search?q=' + encodeURIComponent(event.search)).then(function(response) {
        return response.text();
    }).then(function(text) {
        var rx = /<h3 class="r"><a href="(?:\/url\?q=)?([^&>"]+)[^>]*>(.*?)<\/a><\/h3>/;
        var match = text.match(rx);
        if (match) {
            return {
                link: match[1],
                // remove tags, replace numeric entities with Unicode
                text: match[2].replace(/<(?:.|\n)*?>/gm, '').replace(/&#([0-9]+);/gm, function(_, digits) {
                    return String.fromCharCode(digits);
                })
            };
        }
    });
});
