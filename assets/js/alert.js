var prompt = function (message, style, time)
{
    style = (style === undefined) ? 'alert-success' : style;
    time = (time === undefined) ? 1200 : time;
    $('<div>')
        .appendTo('body')
        .addClass('alert ' + style)
        .html(message)
        .show()
        .delay(time)
        .fadeOut();
};

var success_prompt = function(message, time)
{
    prompt(message, 'alert-success', time);
};

var fail_prompt = function(message, time)
{
    prompt(message, 'alert-danger', time);
};

var warning_prompt = function(message, time)
{
    prompt(message, 'alert-warning', time);
};

var info_prompt = function(message, time)
{
    prompt(message, 'alert-info', time);
};

var timeInterval=5000; 
setInterval(success_prompt("提示"),timeInterval);