// /**
//  * Created by alan on 16/5  
// BUG: 
// 这次出现的一个最大问题就是关于"命名"的冲突,我把ul的id设为了和js文件一样的名字,导致了文件无法加载.
//  * 

function addLoadEvent(func)  {
    var oldonload = window.onload;                        //把所有 window.onload事件处理函数的值存入oldonload
            if(typeof window.onload != 'function'){      //如果这个处理函数上没有绑定任何函数,就把新函数给它
                window.onload = func;
            }else{
                window.onload = function(){              //如果绑定了,就把新函数追加到指令的末尾
                    oldonload();
                    func();
        }
    }

}

function insertAfter(newElements,targetElement) {  //参数为新元素和目标元素
    var parent =  targetElement.parentNode;        //把目标元素的parentNode属性值保存到parent中
    if(parent.lastChild = targetElement){          //如果最后一个元素就是目标元素,直接append在父元素后面
        parent.appendChild(newElements);
    }else{                                         //不是则插在兄弟元素的后边
        parent.insertBefore(newElements,targetElement.nextSibling);
    }

}
function preparePlaceholder(){

    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('ixp')) return false;   

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");     //添加img标签和属性
    placeholder.setAttribute("src","images/placeholder.png");
    placeholder.setAttribute("alt","my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("choose an image"); //添加p标签和属性
    description.appendChild(desctext);
    var gallery = document.getElementById("ixp");
    
    insertAfter(placeholder,gallery);
    insertAfter(description,gallery);
    
    

}


function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("ixp")) return false;

    var gallery = document.getElementById("ixp");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i < links.length;i++){
        links[i].onclick = function(){
            return showpic(this);
        }
        links[i].onkeypress = links[i].onclick;   //把所有的onclick的a都赋给了onpress
    }
}


function showpic(whichpic) {
    if(!document.getElementById("placeholder")) return true;//这个地方得注意,如果不支持js就让他能够点开链接直接看到照片
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);//重新把source里面的链接放入到src中
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    }else{
        var text = "";
    }
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
        
    }
    return false;
}

function search() {
    var ele = document.getElementById("ixp");
    alert(ele.innerHTML);
    // var xp = ele.childNodes;
    // document.write("xp");
    
}
addLoadEvent(search);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

    