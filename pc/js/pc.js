//获取到每一个headerContent的Li每个a标签
window.onload = function () {
    // $li.click(function () {
    //     console.log($li.length);
    // })
    // for(var i=0;i<lis.length;i++){
    //     alert("Item "+i+": "+lis.item(i).innerHTML);
    // }
    // $($liArr).hover(
    //     function () {
    //         $(this).addClass("active");
    //     },
    //     function () {
    //         $(this).removeClass("active");
    //     }
    //
    // );
    //实现点击更新active高亮
    // var $liArr = $('#ClickF>li')
    // $liArr.click(function () {
    //     var liClick = this;
    //     //循环每个li
    //     $liArr.each(function () {
    //         this.className = this == liClick ? 'active' : ''
    //     })
    // })
    //实现点击每一个对应的li跳转到对应的页面
    //获取one
    // var $OneLi = $('.OneLi')
    // var $TwoLi = $('.TwoLi')
    // var $ThreeLi = $('.ThreeLi')
    // var $FourLi = $('.FourLi')
    // var $FiveLi = $('.FiveLi')
    // var head = $(".wrap>.header");
    // for (let i = 0 ; i < $liArr.length ; i ++){
    //     $($liArr[i]).click(function () {
    //
    //         if (i === 1){
    //             $TwoLi.css({top:-i*(document.documentElement.clientHeight-head.outerHeight())})
    //             $OneLi.css({opacity:0})
    //         }else if (i === 2){
    //             $ThreeLi.css({top:-i*(document.documentElement.clientHeight-head.outerHeight())})
    //             $TwoLi.css({opacity:0})
    //         }else if (i === 3){
    //             $FourLi.css({top:-i*(document.documentElement.clientHeight-head.outerHeight())})
    //             $ThreeLi.css({opacity:0})
    //         }else if (i === 4){
    //             $FiveLi.css({top:-i*(document.documentElement.clientHeight-head.outerHeight())})
    //             $FourLi.css({opacity:0})
    //         }
    //     })
    // }

    var nList = $('#ClickF>li')
    var pList = $('.content>.rightBallList>li')
    var cList = $('.content>.contentList')
    var head = $('.wrap>.header')
    var cLiNodes=$(".wrap .content .contentList>li");
    var now = 0;
    var index = 0;
    var timer = 0;
    var preIndex = 0;

    //同步主导航及侧边导航
    function move(index){
        $.each(nList, function(i) {
            $(nList[i]).attr("class","");
            console.log(index);// 设置头部导航的样式
        });
        $(nList[index]).addClass("active");
        $.each(pList, function(i) {
            $(pList[i]).attr("class","");    // 设置右侧导航的样式
        });
        $(pList[index]).addClass("active");
        $(cList).css({    					// 设置内容区中的li的移动
            top:-index*(document.documentElement.clientHeight-head.outerHeight())
        });
        // if(animations[index]&&animations[index]["in"]){   // 根据传过来的now 值 调用当前li对应的入场动画
        //     animations[index]["in"]();
        // }
        // if(animations[preIndex]&&animations[preIndex]["out"]){  // 前一个li调用出场动画
        //     animations[preIndex]["out"]();
        // }
    }
        headBind();
        function headBind(){
            $.each(nList, function(i){
                //  头部导航处理
                nList[i].index = i;			// 保存当前的i
                $(nList[i]).on("click",function(){
                    preIndex = now;
                    move(this.index);
                    now = this.index;     // 更新now
                })
            });
            $.each(pList, function(i){   // 右侧导航处理
                pList[i].index = i;      // 保存当前的i
                $(pList[i]).on('click', function(){
                    preIndex = now;
                    move(this.index);
                    now = this.index;   // 更新now
                })
            });
        }
    contentBind();
    //内容区的高度
    function contentBind(){
        // 设置内容区的高度   视口高度 - 头部的高度
        $(".wrap>.content").height(document.documentElement.clientHeight - head.outerHeight() + "px") ;

        // 循环遍历设置每个li的高度
        $.each( cLiNodes, function(i){
            $(cLiNodes[i]).height(document.documentElement.clientHeight - head.outerHeight() + "px");
        });
    }
    // if(animations[index]&&animations[index]["in"]){   // 根据传过来的now 值 调用当前li对应的入场动画
        //     animations[index]["in"]();
        // }
        // if(animations[preIndex]&&animations[preIndex]["out"]){  // 前一个li调用出场动画
        //     animations[preIndex]["out"]();
        // }
}
//通过点击li进行逻辑操作