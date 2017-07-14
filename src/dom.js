const config = require("./config.js");

const dom = {
    character: document.createElement("div"),
    frame: document.createElement("div"),
    inner: document.createElement("div"),
    talk: document.createElement("div"),
    next: document.createElement("div"),
    saber: document.createElement("a"),
    archer: document.createElement("a"),
    lancer: document.createElement("a"),
    rider: document.createElement("a"),
    caster: document.createElement("a"),
    assassin: document.createElement("a"),
    berserker: document.createElement("a")
}

dom.character.className = "character ";
dom.character.className += "zhende ";
dom.frame.className = "frame";
dom.inner.className = "inner";
dom.talk.className = "talk";
dom.next.className = "next";

dom.saber.className = "saber";
dom.saber.title = config.saber.title;
dom.saber.href = config.saber.href;
dom.saber.target = "_blank";

dom.archer.className = "archer";
dom.archer.title = config.archer.title;
dom.archer.href = config.archer.href;
dom.archer.target = "_blank";

dom.lancer.className = "lancer";
dom.lancer.title = config.lancer.title;
dom.lancer.href = config.lancer.href;
dom.lancer.target = "_blank";

dom.rider.className = "rider";
dom.rider.title = config.rider.title;
dom.rider.href = config.rider.href;
dom.rider.target = "_blank";

dom.caster.className = "caster";
dom.caster.title = config.caster.title;
dom.caster.href = config.caster.href;
dom.caster.target = "_blank";

dom.assassin.className = "assassin";
dom.assassin.title = config.assassin.title;
dom.assassin.href = config.assassin.href;
dom.assassin.target = "_blank";

dom.berserker.className = "berserker";
dom.berserker.title = config.berserker.title;
dom.berserker.href = config.berserker.href;
dom.berserker.target = "_blank";

dom.frame.appendChild(dom.inner);
dom.inner.appendChild(dom.talk);
dom.inner.appendChild(dom.next);

module.exports = dom;