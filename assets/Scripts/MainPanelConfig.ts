
const COLOR_WHITE = "#ffffff";
const COLOR_RED = "#ff0000";

export default {
    CARD_LIST: [
        {id: 'TX', name: '通行', color: COLOR_WHITE, colorText: '白', colorTextColor: '#000000', tips: '异变', desc: "结界异常事件", 
            effect: "通往现世的触发事件，必须使用【城管】抵消，否则出局",
        },
        {id: 'CG', name: '城管', color: COLOR_RED, colorText: '红', tips: '解决', desc: "结界管理者",
            effect: "任何阶段抽到【通行】后，可抵消通行1次，并将【通行】随机放入底牌区",
        },
        
    ]
}


