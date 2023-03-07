import { _decorator, Component, Node, resources, Prefab, instantiate, find, Label, Sprite, Color, NodeEventType, SpriteFrame} from 'cc';
const { ccclass, property} = _decorator;
import MainPanelConfig from './MainPanelConfig';

@ccclass('MainPanel')
export class MainPanel extends Component {

    @property(Prefab)
    public item : Prefab;

    start() {       
        let scrollViewContent = find("ScrollView/view/content", this.node);
        console.log(scrollViewContent);
        console.log(MainPanelConfig.CARD_LIST);
        let list = MainPanelConfig.CARD_LIST;
        for(let i = 0; i < list.length; i++) {
            let conf = list[i];
            let node = instantiate(this.item);
            this.setNodeItem(node, conf);
            node.parent = scrollViewContent;
            node.on(NodeEventType.TOUCH_END, e => this.nodeItemOnClick(e, conf))
        }
    }

    setNodeItem(node, conf) {
        let nameNode = find("Name", node);
        let descNode = find("Desc", node);
        let colorNode = find("Color", node);
        let colorTextNode = find("Color/Label", node);
        // let tipsNode = find("Tips", node);
        let tipsLabelNode = find("Tips/TipsLabel", node);
        let effectNode = find("Effect", node);
        let spriteNode = find("Sprite", node);

        nameNode.getComponent(Label).string = conf.name;
        descNode.getComponent(Label).string = conf.desc;
        colorNode.getComponent(Sprite).color = new Color().fromHEX(conf.color);
        colorTextNode.getComponent(Label).string = conf.colorText;
        if(conf.colorTextColor) colorTextNode.getComponent(Label).color = new Color().fromHEX(conf.colorTextColor);
        tipsLabelNode.getComponent(Label).string = conf.tips;
        effectNode.getComponent(Label).string = conf.effect;
        // let imageSrc = ;
        // 加载图片
        resources.load("images/card/" + conf.id + "/spriteFrame", SpriteFrame, (err, sp) => {
            if(err) {
                console.error(err);
                return;
            }
            spriteNode.getComponent(Sprite).spriteFrame = sp;
        })
    }

    nodeItemOnClick(e, conf) {
        console.log(e, conf)
    }

    update(deltaTime: number) {
        
    }
}


