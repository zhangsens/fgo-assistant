const talk = {
    talk: ["talk_1", "talk_2", "talk_3", "talk_4", "talk_5", "talk_6", "talk_7", "talk_8"],
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
        var _append = [`如果不战斗就不能前进的话`, `就一举歼灭敌方吧！`];
        return _append.join("<br>");
    },
    talk_2: function() {
        var _append = [`Master`, `也差不多该出门了`, `要不然可没法成为出色的Master哦`];
        return _append.join("<br>");
    },
    talk_3: function() {
        var _append = [`嗯嗯，我的确是属于你的英灵`, `尽我最大努力保护你`, `指引你是我的职责`];
        return _append.join("<br>");
    },
    talk_4: function() {
        var _append = [`我的旗帜`, `请保护我的同胞们！`];
        return _append.join("<br>");
    },
    talk_5: function() {
        var _append = [`今天是Master的生日`, `请收下这束花吧`];
        return _append.join("<br>");
    },
    talk_6: function() {
        var _append = [`本来…`, `我是不喜欢战争的`, `但是…`, `我也不是那种畏惧浴血奋战的胆小鬼`];
        return _append.join("<br>");
    },
    talk_7: function() {
        var _append = [`身为英灵,身为Master`, `从今往后我们也一起努力吧`];
        return _append.join("<br>");
    },
    talk_8: function() {
        var _append = [`无论何时，我都将与你在一起。`, `苦难也好，悲伤也好，`, `只要你在我身边，我都能跨越。`, `来，我们一起加油吧！`];
        return _append.join("<br>");
    },
    talk_heizhende: function() {
        var _append = [`Servant·Avenger，回应召唤而来…`, `怎么了，你那表情？`, `拿着吧，这是契约书`];
        return _append.join("<br>");
    }
}

module.exports = talk;