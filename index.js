var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$$",
                end: "$$"
            },
            process: function(blk) {
                //console.log(katex.version)
                var tex = blk.body;
                //console.log(tex);

                var isInline = !(tex[0] == "\n" | tex[0] == '\r');
                var output = katex.renderToString(tex, {displayMode: !isInline});

                return output;
            }
        }
    }
};
