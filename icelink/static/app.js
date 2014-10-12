
;(function(window, document, $, _) {
    'use strict';

    var doc = $(document);
    var globalData = [];

    function render(items) {
        var html = _.template($('#itemTemplate').html(), {items: items});
        $('#content').append(html);

    }

    function loadData(callback) {
        $.get('./data/2014.json', function(data) {

            for (var a in data) {
                if (data.hasOwnProperty(a)) {
                    data[a].color = window.randomColor();
                    globalData.push(data[a])
                }
            }

            return callback();
        });
    }

    function loadItems() {

        if (!$('#loader').hasClass('hide')) {
            $('#loader').addClass('hide');
        }

        var loaded = $('#content .item').length;

        var items = [];

        for (var a = loaded; a < (loaded+10); a++) {
            if (globalData.hasOwnProperty(a)) {
                items.push(globalData[a]);
            }
        }
        
        render(items);

        if ($('#content .item').length === globalData.length) {
            return $('#loadMore').addClass('hide');
        }

        return $('#loadMore').removeClass('hide');
    }

    doc.on('ready', function() {
        loadData(function() {
            loadItems();
        });

        $('#loadMore span').on('click', loadItems);
    });

})(window, window.document, jQuery, _);