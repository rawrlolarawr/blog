"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-mdx-remote/serialize"
const serialize_namespaceObject = require("next-mdx-remote/serialize");
;// CONCATENATED MODULE: external "next-mdx-remote"
const external_next_mdx_remote_namespaceObject = require("next-mdx-remote");
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(17);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
const external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_namespaceObject);
;// CONCATENATED MODULE: ./pages/[slug].js







const PostPage = ({ frontMatter: { title  } , mdxSource  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "post",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_namespaceObject.MDXRemote, {
                ...mdxSource,
                components: {
                    SyntaxHighlighter: (external_react_syntax_highlighter_default())
                }
            })
        ]
    }));
};
const getStaticPaths = async ()=>{
    const files = external_fs_default().readdirSync(external_path_default().join('posts'));
    const paths = files.map((filename)=>({
            params: {
                slug: filename.replace('.mdx', '')
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params: { slug  }  })=>{
    const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', slug + '.mdx'), 'utf-8');
    const { data: frontMatter , content  } = external_gray_matter_default()(markdownWithMeta);
    const mdxSource = await (0,serialize_namespaceObject.serialize)(content);
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    };
};
/* harmony default export */ const _slug_ = (PostPage);


/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

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
var __webpack_exports__ = (__webpack_exec__(691));
module.exports = __webpack_exports__;

})();