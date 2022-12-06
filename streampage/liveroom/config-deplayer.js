const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    live: true,
    danmaku: false,
    autoplay: true,
    pluginOptions: {
        flv: {
            // refer to https://github.com/bilibili/flv.js/blob/master/docs/api.md#flvjscreateplayer
            mediaDataSource: {
                // mediaDataSource config
            },
            config: {
                // config
            },
        },
    },
    video: {
        url: 'https://stream.wenqi.ml:8881/live/livetest.flv',
        type: 'flv',
    },
});
console.log(dp.plugins.flv); // flv 实例
