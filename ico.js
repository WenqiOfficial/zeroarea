setTimeout(change_icon,500)
setTimeout(change_icon,1000)
setTimeout(change_icon,1500)
function change_icon() {
            const changeFavicon = link => {
                let $favicon = document.querySelector('link[rel="icon"]');
                if ($favicon !== null) {
                    $favicon.href = link;
                } else {
                    $favicon = document.createElement("link");
                    $favicon.rel = "icon";
                    $favicon.href = link;
                    document.head.appendChild($favicon);
                }
            };
            // 设置图标地址
            let iconUrl = `https://cloud.zeroarea.ml:5221/api/v3/file/get/542/%E9%9B%B6%E6%AC%A1%E5%85%83_%E5%8E%9F%E5%83%8F%E7%B4%A0_%E5%B8%A6%E8%83%8C%E6%99%AF%20%5B64x64%5D.ico?sign=dzibl3qjei-n1-2xRjKIDkY_tjfw9EI_AnaD5utYzm4%3D%3A0`
            // 动态修改网站图标
            changeFavicon(iconUrl); 
        }