
const COLOR_WHITE = "#ffffff";
const COLOR_BLACK = "#000000";
const COLOR_RED = "#c93756";
const COLOR_YELLOW = "#c89b40";
const COLOR_PURPLE = "#8d4bbb";
const COLOR_GREEN = "#057748";
const COLOR_BLUE = "#177cb0";

export default {
    CARD_LIST: [
        //-------------------   主卡
        {id: 'TX', name: '通行', color: COLOR_WHITE, colorText: '白', colorTextColor: '#000000', tips: '异变', desc: "结界异常事件", 
            effect: "通往现世的触发事件，必须使用【城管】抵消，否则出局",
            extra: [
                {
                    title: '抽到【通行】后要做的事情', 
                    desc: [
                        "（1）如果手中有可用【城管】（指处于非封印状态的城管），则将手中【城管】丢弃到废卡区，并将该【通行】按照自己意愿放至底牌区任意位置；",
                        "（2）如果手中没有可用【城管】，则自己出局，将手中卡牌丢弃至废卡区，同时将【通行】放至场外区"
                    ]
                },
                {
                    title: '一下子抽到多张【通行】怎么办', 
                    desc: [
                        "如果抽到的多张【通行】卡，则首先需要看自己有无可用【城管】，每张【城管】只能抵消一张通行。如果可用【城管】使用过后手中还有超过1张【通行】，则需要将其中1张放至场外区，剩余【通行】随机放入底牌区"
                    ]
                }
            ]
        },
        {id: 'CG', name: '城管', color: COLOR_RED, colorText: '红', tips: '解决', desc: "结界管理者",
            effect: "任何阶段抽到【通行】后，可抵消通行1次，并将【通行】随机放入底牌区",
            extra: [
                {
                    title: '什么情况下才能使用城管？',
                    desc: [
                        "满足以下所有条件时，才能使用城管",
                        "（1）当抽到【通行】时",
                        "（2）且【城管】卡没有被封印"
                    ]
                }
            ]
        },

        //-------------------    黄色
        {id: 'GJ', name: '攻击', color: COLOR_YELLOW, colorText: '黄', colorTextColor: '#ffffff', tips: '抽卡', desc: "摔跤友益",
            effect: "抽卡次数+1，转到指定1人的出牌阶段，并传递叠加次数",
        },
        {id: 'NZ', name: '逆转', color: COLOR_YELLOW, colorText: '黄', colorTextColor: '#ffffff', tips: '抽卡', desc: "逆袭天邪鬼",
            effect: "玩家轮流顺序反转，并传递抽卡次数至下位玩家",
        },
        {id: 'CD', name: '抽底', color: COLOR_YELLOW, colorText: '黄', colorTextColor: '#ffffff', tips: '抽卡', desc: "后户操作",
            effect: "抽卡阶段全部从底牌底部抽卡",
        },
        {id: 'JZ', name: '教主', color: COLOR_YELLOW, colorText: '黄', colorTextColor: '#ffffff', tips: '抽卡', desc: "信仰收集",
            effect: "指定1玩家上供1张手牌给我方",
        },
        {id: 'QY', name: '强欲', color: COLOR_YELLOW, colorText: '黄', colorTextColor: '#ffffff', tips: '抽卡', desc: "地狱女神",
            effect: "对自己，抽卡次数+3，可立即抽3张使用但不能传递，抽起前可传递抽卡次数",
        },

        //--------------------    蓝色
        {id: 'LG', name: '路过', color: COLOR_BLUE, colorText: '蓝', tips: '守策', desc: "无意识少女",
            effect: "我方抽卡次数-2，可叠加",
        },
        {id: 'YZ', name: '预知', color: COLOR_BLUE, colorText: '蓝', tips: '守策', desc: "读心少女觉",
            effect: "查看底牌顶部3张卡，或者查看指定1玩家的手牌",
        },
        {id: 'YL', name: '言灵', color: COLOR_BLUE, colorText: '蓝', tips: '守策', desc: "稀神探女",
            effect: "查看并改变底牌任意位置的1张卡牌的顺序",
        },
        {id: 'CP', name: '裁判', color: COLOR_BLUE, colorText: '蓝', tips: '守策', desc: "罪业否决",
            effect: "当自己或底牌受到功能卡影响时，可使用此卡无效，同时清空抽卡叠加效果回到默认",
        },


        //---------------------   黑色
        {id: 'MY', name: '梦魇', color: COLOR_BLACK, colorText: '黑', tips: '坑人', desc: "噩梦日记",
            effect: "指定1玩家，将其手牌打乱覆盖于桌面，其可随机使用，至抽卡阶段结束后方可拿起",
        },
        {id: 'SS', name: '收束', color: COLOR_BLACK, colorText: '黑', tips: '坑人', desc: "符卡技能",
            effect: "底牌中所有【通行】置顶",
        },
        {id: 'FY', name: '封印', color: COLOR_BLACK, colorText: '黑', tips: '坑人', desc: "符卡技能",
            effect: "指定1玩家，抽其2张手牌覆盖于桌上，禁止使用，在其抽卡阶段结束后解除效果",
        },
        {id: 'XJ', name: '隙间', color: COLOR_BLACK, colorText: '黑', tips: '坑人', desc: "神秘的搬运",
            effect: "将底牌中的【通行】向上或向下移动至少5，具体位置不可知",
        },

        
        //--------------------    紫色
        {id: 'CJ', name: '猜忌', color: COLOR_PURPLE, colorText: '紫', tips: '减牌', desc: "一切是谁的锅",
            effect: "出牌人回合内，全员无上限轮抽底牌，直至有人抽到【通行】为止",
        },
        {id: 'DT', name: '单挑', color: COLOR_PURPLE, colorText: '紫', tips: '减牌', desc: "天人挑衅",
            effect: "指定1玩家，从我方开始与其轮流弃1抽1，直至某方抽到【通行】或我方主动终止为止",
        },
        {id: 'HH', name: '挥霍', color: COLOR_PURPLE, colorText: '紫', tips: '减牌', desc: "瘟疫神",
            effect: "手牌大于3张的玩家需弃牌至3张",
        },
        {id: 'QT', name: '乞讨', color: COLOR_PURPLE, colorText: '紫', tips: '减牌', desc: "贫穷神",
            effect: "每位玩家可选择施舍给我方1张手牌，或者拒给。若全部据给，则指定1玩家，抢劫其1张手牌",
        },
        

        //----------------------    绿色
        
        {id: 'CL', name: '重连', color: COLOR_GREEN, colorText: '绿', tips: '机会', desc: "历史重置",
            effect: "混洗底牌，生效后此卡放入场外",
        },
        {id: 'CS', name: '重生', color: COLOR_GREEN, colorText: '绿', tips: '机会', desc: "因果重置",
            effect: "抽到该卡时随机复活1名已出局玩家，随机N张废卡为手牌，并将1张【通行】加入底牌切洗。生效后此卡入场外区",
        },
        {id: 'JY', name: '交易', color: COLOR_GREEN, colorText: '绿', tips: '机会', desc: "等量交换",
            effect: "指定1玩家交换2张手牌，手牌不足时等量手牌交换",
        },
    
        
        
        
    ]
}


