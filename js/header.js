;(function () {
    var target = $('.m-container');
    //var target = $('#bodyContainer');
    var html = '<div class="header">'
        + '<div class="container">'
        + '<div class="top-bar clearfix">'
        + '<a href="index.html"><h2 class="web-name"><span class="logo"></span>监利市公益性服务网</h2></a>'
        + '<div class="search-bar">'
        + '<input type="text" placeholder="请输入查找关键词..." class="search-input" />'
        + '<div class="search-colour"><span class="search-confirm"></span></div>'
        + '</div>'
        + '<div class="header-login"><a class="tc" id="tc" href="login.html">登录</a>&nbsp;&nbsp;<i class="separate">|</i>&nbsp;&nbsp;<a id="td" href="register.html">注册</a></div>'
        + '</div></div>'
        + '<div class="nav-boxbg">'
        + '<div class="row">'
        + '<div class="nav-bg">'
        + '<ul class="menu clearfix" id="menuList">'
        + '<li class="active"><a href="index.html">首页</a></li>'
        + '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">农业政策</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="szyw.html">时政要闻</a></li>'
        + '<li><a href="nyyw.html">农业要闻</a></li>'
        + '<li><a href="kjyw.html">科技要闻</a></li>'
        + '<li><a href="nsqx.html">农事气象</a></li>'
       /* + '<li><a href="jieshao.html">12316介绍</a>' +
        '</li>'*/
        + '</ul>'
        + '</li>'
        + '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">市场动态</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="jiage.html">价格行情</a></li>'
        + '<li><a href="gongying.html">供应信息</a></li>'
        + '<li><a href="qiugou.html">求购信息</a></li>'
        + '</ul>'
        + '</li>'
        + '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">益农服务</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="rxwd.html">热线问答</a></li>'
        + '<li><a href="zjsp.html">专家视频</a></li>'
        // + '<li><a href="zjpx.html">专家排行</a></li>'
        + '<li><a href="qbzj.html">全部专家</a></li>'
        + '</ul>'
        + '</li>'
        + '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">农业百科</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="zzjs.html">种植技术</a></li>'
        + '<li><a href="scyzjs.html">水产养殖技术</a></li>'
        + '<li><a href="xmsyjs.html">畜牧兽医技术</a></li>'
        + '<li><a href="njjs.html">农机技术</a></li>'
        // + '<li><a href="njsp.html">农技视频</a></li>'
        + '</ul>'
        + '</li>'
        /*+ '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">特色农业</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="ppml.html">品牌目录</a></li>'
        + '<li><a href="spybncp.html">三品一标农产品</a></li>'
        + '<li><a href="wszt.html">网上展厅</a></li>'
        + '<li><a href="xxny.html">休闲农业</a></li>'
        + '</ul>'
        + '</li>'*/
        + '<li class="more">'
        + '<a class="dropdown-toggle parent" data-toggle="" role="button" aria-haspopup="true" target="_self">'
        + '<span class="text">培训体验</span><i class="font"></i>'
        + '</a>'
        + '<ul class="menu-child">'
        + '<li><a href="nykj.html">农业科技</a></li>'
        + '<li><a href="jzpx.html">讲座培训</a></li>'
        + '<li><a href="whsh.html">文化生活</a></li>'
        + '</ul>'
        + '</li>'
        + '</ul>'
        + '</div></div></div></div>';
    window.onload = function (key){

        var user = localStorage.getItem('username');
        // var pwd = localStorage.getItem('password');
        if (user != null || undefined || '') {
            $('#tc').html('<span style="font-size: 15px">当前用户：</span>'+user).attr('href','javascript:').css({'cursor':'default','textDecoration':'none','fontSize':14,'color':'#000','marginLeft':-20});
            $('.separate').html('').css({'display':'inline-block','width': 13,'height': 12,'background':'url(picture/jiantou.png)','backgroundSize':13}).append(function () {
                return "<a href='personal.html' id='dropdown' style='display: none;'>个人中心</a>";
            }).wrap(function () {
                return "<div style='width: 20px;height: 20px;display: inline-block' id='box'></div>"
            });
            $('#box').hover(function () {
                $('.separate').css({'transform': 'rotate(180deg)'});
                $('#dropdown').css({'display':'block','width': 70,'height': 30,'background':'#333','borderRadius':3,'position': 'absolute','top':-35,'left':-29,'fontStyle':'normal','transform': 'rotate(180deg)','fontSize':15,'textAlign':'center','lineHeight':2,'color':'#fff'})
            },function(){
                $('.separate').css({'transform': 'rotate(0deg)'})
                $('#dropdown').css({'display':'none'})
            })
            $('#td').html('退出账号').attr('href','javascript:').css({'fontSize':14}).click(function (key) {
                localStorage.removeItem("username");
                window.localStorage.removeItem('token');
                location.reload();
            });
        }

        //搜索框
        $(".search-colour").click(function () {
            let val = $(".search-input").val();
            // alert(val)
            location.href = "./search.html?"+val
        })

    };
    target.before(html);

})();
