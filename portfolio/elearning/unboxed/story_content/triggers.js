function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XJ95xi8ekN":
        Script1();
        break;
      case "6Gv544ZhZSW":
        Script2();
        break;
      case "5WW1CE2Kip1":
        Script3();
        break;
      case "63J7FoxS2Ji":
        Script4();
        break;
      case "6qLV4v4Lzqn":
        Script5();
        break;
      case "64Yw9ngmsoM":
        Script6();
        break;
      case "5YbasVd5bgK":
        Script7();
        break;
      case "5dGNHpdcuz3":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5Vl8SmYJtsF');
const duration = 750;
const easing = 'ease-out';
const id = '61itfPFwRzJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5gHO5ro6toW');
const duration = 750;
const easing = 'ease-out';
const id = '61itfPFwRzJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
