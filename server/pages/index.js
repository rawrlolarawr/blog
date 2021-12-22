"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(17);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./pages/index.js






function Home({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "BlogLolaBlog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Development blog for Lola Chaison"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "blog/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cardContainer",
                    children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: '/' + post.slug,
                                passHref: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "cardLink",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: post.frontMatter.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: post.frontMatter.description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: post.frontMatter.date
                                            })
                                        })
                                    ]
                                })
                            })
                        }, index)
                    )
                })
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const files = external_fs_default().readdirSync(external_path_default().join('posts'));
    const posts = files.map((filename)=>{
        const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', filename), 'utf-8');
        const { data: frontMatter  } = external_gray_matter_default()(markdownWithMeta);
        return {
            frontMatter,
            slug: filename.split('.')[0]
        };
    });
    return {
        props: {
            posts
        }
    };
};


/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(304)));
module.exports = __webpack_exports__;

})();