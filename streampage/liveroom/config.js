   /* 以下将定义视频插件常用的几个控件 */
    // 实例化一个“下一个”按钮控件
    var nextControl = new Super.NextControl()
    // 刷新
    // var nextControl = new Super.RefreshControl()
    // 实例化一个倍速控件
    var Dbspeen = new Super.DbspeenControl()
    // 实例化一个弹幕输入框控件
    var BarrageControl = new Super.BarrageControl()
    // 实例化一个全屏按钮控件
    var fullScreenControl = new Super.FullScreenControl()
    // 实例化视频播放资源
    function getString(name){
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r!=null) return r[2]; return '';
    }
    var videosrc = 'http://stream.wenqi.ml:8880/live/'+getString('room')+'.flv';
    // alert(videosrc);
    var source = new Super.VideoSource({
      // type: 视频类型 mp4:可播放浏览器支持的常见格式的视频文件(mp4/ogg/webm) m3u8: 可播放Hls形式推流直播视频(***.m3u8) flv: 可播放flv视频
      // src: 视频路径，可以是本地路径亦可是网络路径
      type: 'flv',
      src: videosrc
    })

    /* 插件的常用配置参数 */
    var config = {
      // 是否自动播放（该功能受限于浏览器安全策略，可能会失效，解决思路为初始化时设置为静音，加载完毕后取消静音）
      autoplay: true,
      currentTime: 0, // 设置视频初始播放时间，单位为秒
      loop: false, // 是否循环播放
      muted: true, // 是否默认静音
      playbackRate: 1, // 视频默认播放速度
      poster: '', // 视频首帧图片路径
      volume: 0.5, // 视频默认音量 0-1
      showPictureInPicture: true, // 是否启用画中画模式按钮（>=Chrome10有效）
      source: source, // 为视频插件设置资源
      // leftControls: [nextControl], // 在底部控件栏左侧插入 “下一个”按钮控件
      rightControls: [Dbspeen, fullScreenControl], // 在底部控件栏左侧插入 “倍速” 控件和 “全屏” 控件
      // centerControls: [BarrageControl] // 在底部控件栏中间插入 “弹幕输入控件”
    }

    //初始化插件superVideo('videoContainer')请对应好html中的插件容器id.
    var video = new Super.Svideo('videoContainer', config)

    /* 以下是控件类常用的监听事件 */

    // 监听“下一个”按钮控件点击事件
    nextControl.addEventListener('click', function(event) {
      alert('click next menu !!!')
    })
    // 监听进入全屏模式后触发（点击进入全屏按钮）
    fullScreenControl.addEventListener('fullscreen', function(event) {
      console.log('is fullscreen !!!')
    })
    // 监听退出全屏模式后触发（点击退出全屏按钮）
    fullScreenControl.addEventListener('cancelfullscreen', function(event) {
      console.log('cancel fullscreen !!!')
    })
    // 监听发送弹幕输入框输入并发送弹幕后触发
    BarrageControl.addEventListener('send', function(event) {
      var value = event.target.option.value
      console.log('send ' + value)
    })

    /* 以下是video类常用的监听事件 */
    // 视频准备就绪
    video.addEventListener('ready', function() {
      console.log('is ready!')
    })
    // 开始播放
    video.addEventListener('play', function() {
      console.log('is play!')
    })
    // 暂停播放
    video.addEventListener('pause', function() {
      console.log('is pause!')
    })
    // 监听进入全屏模式后触发
    video.addEventListener('fullscreen', function(event) {
      console.log('is fullscreen !!!')
    })
    // 监听退出全屏模式后触发
    video.addEventListener('cancelfullscreen', function(event) {
      console.log('cancel fullscreen !!!')
    })