"use strict";
function onTapInput() {
    var _a;
    var input = (_a = document.getElementById("input-data")) === null || _a === void 0 ? void 0 : _a.value;
    var elm = document.getElementById("result");
    if (elm) {
        elm.innerHTML = convert(input);
    }
}
function convert(src) {
    var tmp = src.replace(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g, function (result) {
        return result + createColorSample(result);
    });
    return tmp.replace(/(\n\r|\n|\r)/g, "<br>");
}
function createColorSample(color) {
    return "<div class='color-sample' style='background-color:" + color + ";'>　</div>";
}
