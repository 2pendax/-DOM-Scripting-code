/**
 * Created by alan on 16/5/29.
 */
function addLodeEvent(func) {
    var oldonload = window.onload;
    if( typeof oldonload  != "function" ) {
        window.onload = func;
    }else 
        window.onload = function(){
            oldonload();
            func();
        }
}

function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode)return false;
    var links = document.getElementsByTagName("a");    //获取文档中的所有的链接
    var akeys = new Array();

    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];  //遍历链接
        if (!current_link.getAttribute("accesskey"))continue; //如果获取不了access的值,继续循环.
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue; //取得链接文本
        akeys[key] = text;
    }
    var list = document.createElement("ul");//创建列表
    for (key in akeys) {                     //遍历访问键
        var text = akeys[key];
        var str = key + ":" + text;
        //创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Aceesskey");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLodeEvent(displayAccessKeys);
    
    

    
    
