import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DetailPanel')
export class DetailPanel extends Component {
    start() {

    }

    init(conf) {
        // 展示配置
        console.log(conf)
    }

    update(deltaTime: number) {
        
    }
}


