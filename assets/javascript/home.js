$(function(){
	$.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

    document.addEventListener('contextmenu', event => event.preventDefault());

    $('.group .groupHeader').clickToggle(function(){
        $(this).closest('.group').find('.linkGroup').slideDown('fast');
        $(this).find('i').text('keyboard_arrow_up');
    },
    function(){
        $(this).closest('.group').find('.linkGroup').slideUp('fast');
        $(this).find('i').text('keyboard_arrow_down');
    });

    $('.link.more').mousedown(function(event) {
    switch (event.which) {
        case 1:
            console.log('Left Click');
            break;
        case 2:
            console.log('Middle Click');
            break;
        case 3:
            console.log('Right Click');
            
            $(this).find('.moreLinks').toggleClass('expanded');
            $(this).find('.moreIcon').toggleClass('hidden')
            $(this).find('.linkHeader').toggleClass('showMenu');
            break;
        default:
            alert('You have a strange Mouse!');
        }
    });

    $('#clickMe').click(function(){
        var sub = prompt('Subreddit');
        if (sub === '') {
            return;
        }
        $(this).target = "_blank";
        $(this).attr('href', 'http://www.reddit.com/r/' + sub + '/');
    })
})