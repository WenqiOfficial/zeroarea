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
            let iconUrl = `https://tablad.ml/favicon.ico`
            // 动态修改网站图标
            changeFavicon(iconUrl); 
        }