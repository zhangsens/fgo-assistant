const config = require("./config.js");

const dom = {
    character: document.createElement("div"),
    frame: document.createElement("div"),
    inner: document.createElement("div"),
    saber: document.createElement("a"),
    archer: document.createElement("a"),
    lancer: document.createElement("a"),
    rider: document.createElement("a"),
    caster: document.createElement("a"),
    assassin: document.createElement("a"),
    berserker: document.createElement("a")
}

dom.character.className = "character";
dom.frame.className = "frame";
dom.inner.className = "inner";
dom.saber.className = "saber";
dom.saber.title = config.saber.title;
dom.saber.href = config.saber.href;
dom.archer.className = "archer";
dom.archer.title = config.archer.title;
dom.archer.href = config.archer.href;
dom.lancer.className = "lancer";
dom.lancer.title = config.lancer.title;
dom.lancer.href = config.lancer.href;
dom.rider.className = "rider";
dom.rider.title = config.rider.title;
dom.rider.href = config.rider.href;
dom.caster.className = "caster";
dom.caster.title = config.caster.title;
dom.caster.href = config.caster.href;
dom.assassin.className = "assassin";
dom.assassin.title = config.assassin.title;
dom.assassin.href = config.assassin.href;
dom.berserker.className = "berserker";
dom.berserker.title = config.berserker.title;
dom.berserker.href = config.berserker.href;

dom.frame.appendChild(dom.inner);

module.exports = dom;