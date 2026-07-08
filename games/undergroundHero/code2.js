gdjs.Starting_32pageCode = {};
gdjs.Starting_32pageCode.localVariables = [];
gdjs.Starting_32pageCode.idToCallbackMap = new Map();
gdjs.Starting_32pageCode.GDQuitObjects1_1final = [];

gdjs.Starting_32pageCode.GDStartObjects1_1final = [];

gdjs.Starting_32pageCode.GDNewSpriteObjects1= [];
gdjs.Starting_32pageCode.GDNewSpriteObjects2= [];
gdjs.Starting_32pageCode.GDStartObjects1= [];
gdjs.Starting_32pageCode.GDStartObjects2= [];
gdjs.Starting_32pageCode.GDQuitObjects1= [];
gdjs.Starting_32pageCode.GDQuitObjects2= [];
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects1= [];
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects2= [];
gdjs.Starting_32pageCode.GDLogoObjects1= [];
gdjs.Starting_32pageCode.GDLogoObjects2= [];
gdjs.Starting_32pageCode.GDTransitionObjects1= [];
gdjs.Starting_32pageCode.GDTransitionObjects2= [];
gdjs.Starting_32pageCode.GDPlayerObjects1= [];
gdjs.Starting_32pageCode.GDPlayerObjects2= [];
gdjs.Starting_32pageCode.GDNPCObjects1= [];
gdjs.Starting_32pageCode.GDNPCObjects2= [];
gdjs.Starting_32pageCode.GDNativeObjects1= [];
gdjs.Starting_32pageCode.GDNativeObjects2= [];
gdjs.Starting_32pageCode.GDTracyObjects1= [];
gdjs.Starting_32pageCode.GDTracyObjects2= [];
gdjs.Starting_32pageCode.GDTwiggyObjects1= [];
gdjs.Starting_32pageCode.GDTwiggyObjects2= [];


gdjs.Starting_32pageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "03cddacf48c19739f15660520e28550871b2008f033838e1e0a6f28391860ba4_Screen Saver.aac", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Starting_32pageCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Starting_32pageCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.Starting_32pageCode.GDQuitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Starting_32pageCode.GDQuitObjects1[k] = gdjs.Starting_32pageCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.Starting_32pageCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Starting_32pageCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Starting_32pageCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.Starting_32pageCode.GDStartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Starting_32pageCode.GDStartObjects1[k] = gdjs.Starting_32pageCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.Starting_32pageCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Hall (village)", false);
}
}

}


{

gdjs.Starting_32pageCode.GDQuitObjects1.length = 0;

gdjs.Starting_32pageCode.GDStartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Starting_32pageCode.GDQuitObjects1_1final.length = 0;
gdjs.Starting_32pageCode.GDStartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Starting_32pageCode.GDStartObjects2);
for (var i = 0, k = 0, l = gdjs.Starting_32pageCode.GDStartObjects2.length;i<l;++i) {
    if ( gdjs.Starting_32pageCode.GDStartObjects2[i].IsHovered(null) ) {
        isConditionTrue_1 = true;
        gdjs.Starting_32pageCode.GDStartObjects2[k] = gdjs.Starting_32pageCode.GDStartObjects2[i];
        ++k;
    }
}
gdjs.Starting_32pageCode.GDStartObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Starting_32pageCode.GDStartObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Starting_32pageCode.GDStartObjects1_1final.indexOf(gdjs.Starting_32pageCode.GDStartObjects2[j]) === -1 )
            gdjs.Starting_32pageCode.GDStartObjects1_1final.push(gdjs.Starting_32pageCode.GDStartObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Starting_32pageCode.GDQuitObjects2);
for (var i = 0, k = 0, l = gdjs.Starting_32pageCode.GDQuitObjects2.length;i<l;++i) {
    if ( gdjs.Starting_32pageCode.GDQuitObjects2[i].IsHovered(null) ) {
        isConditionTrue_1 = true;
        gdjs.Starting_32pageCode.GDQuitObjects2[k] = gdjs.Starting_32pageCode.GDQuitObjects2[i];
        ++k;
    }
}
gdjs.Starting_32pageCode.GDQuitObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Starting_32pageCode.GDQuitObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Starting_32pageCode.GDQuitObjects1_1final.indexOf(gdjs.Starting_32pageCode.GDQuitObjects2[j]) === -1 )
            gdjs.Starting_32pageCode.GDQuitObjects1_1final.push(gdjs.Starting_32pageCode.GDQuitObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Starting_32pageCode.GDQuitObjects1_1final, gdjs.Starting_32pageCode.GDQuitObjects1);
gdjs.copyArray(gdjs.Starting_32pageCode.GDStartObjects1_1final, gdjs.Starting_32pageCode.GDStartObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23977212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "a159d81bce5de5a151bbfe5ecd9b039caa44c40135493e528c5f234eab03799f_Run_03.wav", false, 30, 2);
}
}

}


};

gdjs.Starting_32pageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Starting_32pageCode.GDNewSpriteObjects1.length = 0;
gdjs.Starting_32pageCode.GDNewSpriteObjects2.length = 0;
gdjs.Starting_32pageCode.GDStartObjects1.length = 0;
gdjs.Starting_32pageCode.GDStartObjects2.length = 0;
gdjs.Starting_32pageCode.GDQuitObjects1.length = 0;
gdjs.Starting_32pageCode.GDQuitObjects2.length = 0;
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects1.length = 0;
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects2.length = 0;
gdjs.Starting_32pageCode.GDLogoObjects1.length = 0;
gdjs.Starting_32pageCode.GDLogoObjects2.length = 0;
gdjs.Starting_32pageCode.GDTransitionObjects1.length = 0;
gdjs.Starting_32pageCode.GDTransitionObjects2.length = 0;
gdjs.Starting_32pageCode.GDPlayerObjects1.length = 0;
gdjs.Starting_32pageCode.GDPlayerObjects2.length = 0;
gdjs.Starting_32pageCode.GDNPCObjects1.length = 0;
gdjs.Starting_32pageCode.GDNPCObjects2.length = 0;
gdjs.Starting_32pageCode.GDNativeObjects1.length = 0;
gdjs.Starting_32pageCode.GDNativeObjects2.length = 0;
gdjs.Starting_32pageCode.GDTracyObjects1.length = 0;
gdjs.Starting_32pageCode.GDTracyObjects2.length = 0;
gdjs.Starting_32pageCode.GDTwiggyObjects1.length = 0;
gdjs.Starting_32pageCode.GDTwiggyObjects2.length = 0;

gdjs.Starting_32pageCode.eventsList0(runtimeScene);
gdjs.Starting_32pageCode.GDNewSpriteObjects1.length = 0;
gdjs.Starting_32pageCode.GDNewSpriteObjects2.length = 0;
gdjs.Starting_32pageCode.GDStartObjects1.length = 0;
gdjs.Starting_32pageCode.GDStartObjects2.length = 0;
gdjs.Starting_32pageCode.GDQuitObjects1.length = 0;
gdjs.Starting_32pageCode.GDQuitObjects2.length = 0;
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects1.length = 0;
gdjs.Starting_32pageCode.GDBarbute_9595HelmObjects2.length = 0;
gdjs.Starting_32pageCode.GDLogoObjects1.length = 0;
gdjs.Starting_32pageCode.GDLogoObjects2.length = 0;
gdjs.Starting_32pageCode.GDTransitionObjects1.length = 0;
gdjs.Starting_32pageCode.GDTransitionObjects2.length = 0;
gdjs.Starting_32pageCode.GDPlayerObjects1.length = 0;
gdjs.Starting_32pageCode.GDPlayerObjects2.length = 0;
gdjs.Starting_32pageCode.GDNPCObjects1.length = 0;
gdjs.Starting_32pageCode.GDNPCObjects2.length = 0;
gdjs.Starting_32pageCode.GDNativeObjects1.length = 0;
gdjs.Starting_32pageCode.GDNativeObjects2.length = 0;
gdjs.Starting_32pageCode.GDTracyObjects1.length = 0;
gdjs.Starting_32pageCode.GDTracyObjects2.length = 0;
gdjs.Starting_32pageCode.GDTwiggyObjects1.length = 0;
gdjs.Starting_32pageCode.GDTwiggyObjects2.length = 0;


return;

}

gdjs['Starting_32pageCode'] = gdjs.Starting_32pageCode;
