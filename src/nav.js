const config = require("./config.js");
const dom = require("./dom");
const talk = require("./talk");

class nav {

    constructor(opt) {

        console.log(arguments);
        const speed = 1;
        var animation;
        var index = 0;

        opt.ele.appendChild(dom.frame);
        opt.ele.appendChild(dom.character);

        //dom.talk.innerHTML = talk.Hello();
        this.game(talk.Hello(), 0);

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
            fgo[i].servant.onmouseenter = function() {
                cancelAnimationFrame(animation);
            };
            fgo[i].servant.onmouseleave = function() {
                cancelAnimationFrame(animation);
                animation = requestAnimationFrame(float);
            };
        }

    }

    random() {
        var event = Math.random() * (talk.talk.length + 2);
        var _inner;
        switch (Math.floor(event)) {
            case 0:
                _inner = talk.Hello();
                break;
            case 1:
                _inner = talk.today();
                break;
            default:
                _inner = talk[talk.talk[Math.round(event) - 2]]();
                break;
        }
        this.game(`${_inner}`, 0);
    }

    game(text, index) {
        dom.talk.innerHTML = text.substr(0, index);
        if (index < text.length) {
            index++;
            requestAnimationFrame(this.game.bind(this, text, index));
        }
    }
}

module.exports = nav;