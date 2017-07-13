const config = require("./config.js");
const dom = require("./dom")

class nav {

    constructor(opt) {

        console.log(arguments);
        const speed = 1;
        var animation;

        opt.ele.appendChild(dom.frame);
        opt.ele.appendChild(dom.character);

        dom.inner.innerHTML = this.Hello();

        dom.frame.onclick = function(e) {
            e.preventDefault();
            this.random();
        }.bind(this);

        dom.character.onmouseenter = function() {
            cancelAnimationFrame(animation);
            for (let i = 0; i < 7; i++) {
                dom.character.appendChild(fgo[i].servant);
                fgo[i].servant.style.opacity = 1;
            }
            requestAnimationFrame(float);
        };
        dom.character.onmouseleave = function() {
            for (let i = 0; i < 7; i++) {
                fgo[i].servant.style.opacity = 0;
            }
            //cancelAnimationFrame(animation);
        };


        var fgo = [];
        var servant = ["saber", "archer", "lancer", "rider", "caster", "assassin", "berserker"];
        for (let i = 0; i < 7; i++) {
            let data = {};
            data.name = servant[i]
            data.servant = dom[servant[i]];
            data.top = Math.random() * 300;
            data.left = Math.random() * 370;
            data.speed_x = Math.random() * 1 - 0.5;
            data.speed_y = Math.random() * 1 - 0.5;
            fgo.push(data);
        }
        var float = () => {
            for (let i = 0; i < 7; i++) {
                if (fgo[i].left + fgo[i].speed_x < 0 || fgo[i].left + fgo[i].speed_x > 300) {
                    fgo[i].speed_x = -fgo[i].speed_x;
                }
                if (fgo[i].top + fgo[i].speed_y < 0 || fgo[i].top + fgo[i].speed_y > 370) {
                    fgo[i].speed_y = -fgo[i].speed_y;
                }
                fgo[i].left += fgo[i].speed_x;
                fgo[i].top += fgo[i].speed_y;
                fgo[i].servant.style.top = fgo[i].top;
                fgo[i].servant.style.left = fgo[i].left;
            }
            animation = requestAnimationFrame(float);
        }


        for (let i = 0; i < 7; i++) {
            fgo[i].onmouseenter = function() {
                console.log(1);
                //cancelAnimationFrame(animation);
            };
            fgo[i].onmouseleave = function() {
                console.log(2);
                //animation = requestAnimationFrame(float);
            };
        }

    }

    Hello() {
        var _append = [`Hello!`, `Welcome to my home!`, `<a href=''></a>`];
        return _append.join("<br>");
    }

    today() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var _append = [`今天是 ${year} 年 ${month} 月 ${day} 号`, `今天的幻想乡也充满了和平呢`];
        return _append.join("<br>");
    }

    talk() {
        var talk_arr = [this.talk_1, this.talk_2];
        return talk_arr;
    }

    talk_1() {
        var _append = [`贞德强无敌`];
        return _append.join("<br>");
    }

    talk_2() {
        var _append = [`谁敢反对哈曼`, `就打爆他的狗头`];
        return _append.join("<br>");
    }

    random() {
        var event = Math.random() * (this.talk().length + 1);
        var _inner;
        switch (Math.round(event)) {
            case 0:
                _inner = this.Hello();
                break;
            case 1:
                _inner = this.today();
                break;
            default:
                console.log(Math.round(event) - 2);
                _inner = this.talk()[Math.round(event) - 2]();
                break;
        }
        dom.inner.innerHTML = `${_inner}<br>`;
    }
}

module.exports = nav;