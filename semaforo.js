"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = void 0;
function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : "";
}
exports.updateLight = updateLight;
console.log(updateLight("red"));
