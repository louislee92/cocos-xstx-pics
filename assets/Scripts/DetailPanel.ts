import { _decorator, Component, Node, Sprite, find, resources, SpriteFrame, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DetailPanel')
export class DetailPanel extends Component {

    private sprite : Sprite;
    private labelParent : Node;
    private labelTemp : Node;

    private INDEX_ARR = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十']

    onLoad() {
        this.sprite = find("ScrollView/view/content/Sprite", this.node).getComponent(Sprite);
        this.labelParent = find("ScrollView/view/content/Node", this.node);
        this.labelTemp = find("ScrollView/view/content/Label", this.node);
        console.log(this.labelParent, this.labelTemp)
    }

    init(conf) {
        // 展示配置
        console.log(conf)
        // 设置图片
        resources.load("images/card/" + conf.id + "/spriteFrame", SpriteFrame, (err, sp) => {
            this.sprite.spriteFrame = sp;
        });
        // 清空文本
        this.labelParent.removeAllChildren();
        // 添加基础
        this.addPara("名称：" + conf.name)
        this.addPara("颜色：" + conf.colorText);
        this.addPara("分类：" + conf.tips);
        this.addPara("作用：" + conf.desc);
        this.addPara("效果：" + conf.effect);
        // 添加额外文本
        if(conf.extra && conf.extra.length > 0) {
            this.addTitle("用法参考")
            for(let i = 0; i < conf.extra.length; i++) {
                let temp = conf.extra[i];
                this.addSubTitle(this.INDEX_ARR[i] + '、' + temp.title);
                if(Array.isArray(temp.desc)) {
                    temp.desc.forEach(element => {
                        this.addPara(element);
                    });
                } else this.addPara(temp.desc);
            }
        }
    }

    addTitle(text) {
        this.addLabel(text, {
            fontSize: 30,
            bold: true,
        })
    }

    addSubTitle(text) {
        this.addLabel(text, {
            fontSize: 20,
            bold: true,
        })
    }

    addPara(text) {
        this.addLabel(text, {
            fontSize: 20
        })
    }

    addLabel(text, style) {
        let node = instantiate(this.labelTemp);
        let curLabel = node.getComponent(Label);
        curLabel.string = text;
        if(style.fontSize) curLabel.fontSize = style.fontSize;
        if(style.bold) curLabel.isBold = true;
        node.active = true;
        node.parent = this.labelParent;
    }

    update(deltaTime: number) {
        
    }
}


