$(document).ready(function() {
    $.ajax({
        url: "http://quotes.rest/qod.json",
    }).then(function(data) {
       $('.greeting-id').append(data.contents.quotes[0]);
       $('.greeting-content').append(data.contents.length);
    });
});

