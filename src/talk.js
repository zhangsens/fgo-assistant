const talk = {
    talk: ["talk_1", "talk_2", "talk_3", "talk_4", "talk_5"],
    Hello: function() {
        var _append = [`Servant，Ruler——`, `贞德，能够与您见面真是太好了`];
        return _append.join("<br>");
    },
    today: function() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var _append = [`今天是 ${year} 年 ${month} 月 ${day} 号`, `今天的幻想乡也充满了和平呢`];
        return _append.join("<br>");
    },
    talk_1: function() {
        var _append = [`贞德强无敌`];
        return _append.join("<br>");
    },
    talk_2: function() {
        var _append = [`谁敢反对哈曼`, `就打爆他的狗头`];
        return _append.join("<br>");
    },
    talk_3: function() {
        var _append = [`選り取りみどりっぽい？`];
        return _append.join("<br>");
    },
    talk_4: function() {
        var _append = [`ソロモンの悪夢、`, `見せてあげる！`];
        return _append.join("<br>");
    },
    talk_5: function() {
        var _append = [`词穷`, `想不出来了`];
        return _append.join("<br>");
    },
    talk_6: function() {
        var _append = [];
        return _append.join("<br>");
    }
}

module.exports = talk;