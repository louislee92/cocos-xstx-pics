import { _decorator, Component, Node, Label, NodeEventType } from 'cc';
import { BlogPanel } from './BlogPanel';
import { DetailPanel } from './DetailPanel';
import { MainPanel } from './MainPanel';
import { ManuPanel } from './ManuPanel';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    public static Instance: GameManager = null;

    // 主界面
    @property(MainPanel)
    public mainPanel : MainPanel;

    // 详情界面
    @property(DetailPanel)
    public detailPanel : DetailPanel;

    // 博客
    @property(BlogPanel)
    public blogPanel : BlogPanel;

    // 菜单
    @property(ManuPanel)
    public menuPanel: ManuPanel;

    // 标题文本
    @property(Label)
    public topTitle: Label;

    // 标题返回按钮
    @property(Component)
    public closeBtn: Component;

    start() {
        this.showMainPanel();
        GameManager.Instance = this;
        this.closeBtn.node.on(NodeEventType.TOUCH_END, e => this.showMainPanel())
    }


    showMainPanel() {
        this.detailPanel.node.active = false;
        this.blogPanel.node.active = false;
        this.mainPanel.node.active = true;
        this.menuPanel.node.active = true;
        console.log("main panel")
        // 设置标题
        this.topTitle.string = "图  鉴"
        this.closeBtn.node.active = false;
        // 设置菜单
        this.menuPanel.select(0);
    }

    showBlogPanel() {
        this.detailPanel.node.active = false;
        this.mainPanel.node.active = false;
        this.blogPanel.node.active = true;
        this.menuPanel.node.active = true;
        console.log("blog panel")
        this.topTitle.string = "资  讯"
        this.closeBtn.node.active = false;
        this.menuPanel.select(1);
    }

    showDetailPanel(conf) {
        this.blogPanel.node.active = false;
        this.mainPanel.node.active = false;
        this.menuPanel.node.active = false;
        this.detailPanel.node.active = true;
        console.log("detail panel")
        this.detailPanel.init(conf);
        this.topTitle.string = conf.name;
        this.closeBtn.node.active = true;
    }

    

    update(deltaTime: number) {
        
    }
}


