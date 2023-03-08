import { _decorator, Component, Node, find, instantiate, Label, NodeEventType, utils, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlogPanel')
export class BlogPanel extends Component {

    private container: Node;
    private template : Node;

    onLoad() {
        this.container = find("ScrollView/view/content", this.node);
        this.template = find("Node", this.node);
    }

    start() {
        this.template.active = false;
        this.addNode("获取更多现世通行官方动态", "");
        this.addNode("B站：", "https://space.bilibili.com/31437463");
        this.addNode("安卓APP下载：", "https://cowtransfer.com/s/6ca83bd6ff3b4b");
        this.addNode("安卓在线约战QQ群：", "819333537");
        this.addNode("社团官方QQ群：", "516825003");
        this.addNode("囧店通贩：", "https://item.taobao.com/item.htm?id=651108429543");
        
    }

    addNode(title, text) {
        let node = instantiate(this.template);
        let titleLabel = find("Title", node).getComponent(Label);
        let textLabel = find("Text", node).getComponent(Label);
        titleLabel.string = title;
        textLabel.string = text;
        node.active = true
        node.parent = this.container;
        node.on(NodeEventType.TOUCH_END, e => this.onClick(e, title, text));
    }

    onClick(e, title, text) {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            // console.log('复制---微信小游戏--cc.sys.platform=', cc.sys.platform);
            wx.setClipboardData({
                data: text, //公众号id
                success: function(res) {
                    console.log("success复制成功：" + text);
                    return true;
                    // wx.showToast({
                    //     title: '复制成功',
                    //    icon:"none",
                    //    mask:"true"//是否设置点击蒙版，防止点击穿透
                    //  })
                }
            });
        }
        
        
        // // 
        // this.webCopyString(text, flag => {
        //     console.log(text + "复制成功？" , flag);
        // })
        sys.openURL(text);
    }

     
 
    //复制到系统剪切板
    webCopyString(str: string, cb?: Function) {
 
        var input = str + '';
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        // el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
 
        const selection = getSelection()!;
        var originalRange = null;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
 
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) {
 
        }
 
        document.body.removeChild(el);
 
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
 
        cb && cb(success);
        if (success) {
            console.log("复制成功");
        }
        else {
            console.log("复制失败");
        }
        return success;
    }

    update(deltaTime: number) {
        
    }
}


