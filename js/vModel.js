"use strict";
var m = function (e) {

    // e.prototype.
    const EL = document.querySelector(e.el);
    const nodes = EL.childNodes;

    for (let index = 0; index < nodes.length; index++) {
        // const element = nodes[index];
        if (nodes[index].nodeName == "#text") {

            let ret = assignment(nodes[index], 0, e);
            nodes[index].nodeValue = ret;

            // console.log(ret,'-------0')
        } else {
            let ret = assignment(nodes[index], 1, e);
            nodes[index].innerText = ret;
            // console.log(ret,'-------1')

        }
    }

    function assignment(a, b, c) {

        a = b > 0 ? a.innerText : a.nodeValue;
        if (a.includes("{{")) {
            let variable = a.split("{{")[1].split("}}")[0].trim();
            // return variable
            if (variable.includes("(")) {
                // console.log(variable)
                let fun = variable.slice(0, variable.indexOf("("))
                let funcall = variable.slice(variable.indexOf("(") + 1, variable.length - 2)
                // console.log("-----------",fun,)
                return c.data[fun](funcall);
            } else {
                // console.log( c.data[variable],variable )
                return c.data[variable];
            }

        }
    }

}

var mvv = new m({
    el: "#m",
    data: {
        a: 1,
        b: 2,
        c: function (a) {
            return 33
        },
        e: { 1: 1 },
        f: [1, 2, 3],
        g: true
    }
})