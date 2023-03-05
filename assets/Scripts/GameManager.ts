import { _decorator, Component, Node } from 'cc';
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

    start() {
        this.showMainPanel();
        GameManager.Instance = this;
    }


    showMainPanel() {
        this.detailPanel.node.active = false;
        this.blogPanel.node.active = false;
        this.mainPanel.node.active = true;
        this.menuPanel.node.active = true;
        console.log("main panel")
    }

    showBlogPanel() {
        this.detailPanel.node.active = false;
        this.mainPanel.node.active = false;
        this.blogPanel.node.active = true;
        this.menuPanel.node.active = true;
        console.log("blog panel")
    }

    showDetailPanel(conf) {
        this.blogPanel.node.active = false;
        this.mainPanel.node.active = false;
        this.menuPanel.node.active = false;
        this.detailPanel.node.active = true;
        console.log("detail panel")
        this.detailPanel.init(conf);
    }

    

    update(deltaTime: number) {
        
    }
}

