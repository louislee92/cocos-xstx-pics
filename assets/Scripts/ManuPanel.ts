import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ManuPanel')
export class ManuPanel extends Component {

    @property(Sprite)
    public sprite0: Sprite;

    @property(Label)
    public label0: Label;
    
    @property(Sprite)
    public sprite1: Sprite;

    @property(Label)
    public label1: Label;
    

    spriteNormalColor = "#B4B4B4";
    spriteActiveColor = "#ffffff";

    labelNormalColor = "#B4B4B4";
    labelActiveColor = "#FFFFFF";

    start() {

    }

    select(index) {
        this.sprite0.color = new Color().fromHEX(this.spriteNormalColor);
        this.label0.color = new Color().fromHEX(this.labelNormalColor);
        this.sprite1.color = new Color().fromHEX(this.spriteNormalColor);
        this.label1.color = new Color().fromHEX(this.labelNormalColor);

        if(index == 0) {
            this.sprite0.color = new Color().fromHEX(this.spriteActiveColor);
            this.label0.color = new Color().fromHEX(this.labelActiveColor);
        } else if(index == 1) {
            this.sprite1.color = new Color().fromHEX(this.spriteActiveColor);
            this.label1.color = new Color().fromHEX(this.labelActiveColor);
        }
    }

    update(deltaTime: number) {
        
    }
}


