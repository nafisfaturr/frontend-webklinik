"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/booking/delete/[id]";
exports.ids = ["pages/api/booking/delete/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsUUFBUTtRQUNsQkUsT0FBT0YsU0FBUyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0Y7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdHVzLW5leHRqcy8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/booking/delete/[id].js":
/*!******************************************!*\
  !*** ./pages/api/booking/delete/[id].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nconst corsHeaders = {\n    \"Content-Type\": \"application/json\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Methods\": \"POST, OPTIONS\",\n    \"Access-Control-Allow-Headers\": \"Content-Type\"\n};\n// Main handler function\nasync function handler(req, res) {\n    const { method } = req;\n    // Handle CORS preflight request\n    if (method === \"OPTIONS\") {\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        res.setHeader(\"Access-Control-Allow-Methods\", \"POST, OPTIONS\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\");\n        return res.status(200).end();\n    }\n    // Ensure only POST requests are processed\n    if (method !== \"POST\") {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${method} Not Allowed`);\n    }\n    const { id } = req.query; // Assuming the ID is passed as a query parameter\n    try {\n        // Delete the booking by ID\n        const deletedBooking = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].booking.delete({\n            where: {\n                id: Number(id)\n            }\n        });\n        return res.status(200).json({\n            message: \"Booking deleted successfully\",\n            deletedBooking\n        });\n    } catch (error) {\n        console.error(\"Error deleting booking:\", error);\n        if (error.code === \"P2025\") {\n            return res.status(404).json({\n                error: \"Booking not found\"\n            });\n        }\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va2luZy9kZWxldGUvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjO0lBQ2hCLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQztBQUVBLHdCQUF3QjtBQUNULGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUVuQixnQ0FBZ0M7SUFDaEMsSUFBSUUsV0FBVyxXQUFXO1FBQ3RCRCxJQUFJRSxVQUFVLCtCQUErQjtRQUM3Q0YsSUFBSUUsVUFBVSxnQ0FBZ0M7UUFDOUNGLElBQUlFLFVBQVUsZ0NBQWdDO1FBQzlDLE9BQU9GLElBQUlHLE9BQU8sS0FBS0M7SUFDM0I7SUFFQSwwQ0FBMEM7SUFDMUMsSUFBSUgsV0FBVyxRQUFRO1FBQ25CRCxJQUFJRSxVQUFVLFNBQVM7WUFBQztTQUFPO1FBQy9CLE9BQU9GLElBQUlHLE9BQU8sS0FBS0MsSUFBSSxDQUFDLE9BQU8sRUFBRUgsT0FBTyxZQUFZLENBQUM7SUFDN0Q7SUFFQSxNQUFNLEVBQUVJLEVBQUUsRUFBRSxHQUFHTixJQUFJTyxPQUFPLGlEQUFpRDtJQUUzRSxJQUFJO1FBQ0EsMkJBQTJCO1FBQzNCLE1BQU1DLGlCQUFpQixNQUFNWCwwREFBY1ksQ0FBQ0MsT0FBTztZQUMvQ0MsT0FBTztnQkFBRUwsSUFBSU0sT0FBT047WUFBSTtRQUM1QjtRQUVBLE9BQU9MLElBQUlHLE9BQU8sS0FBS1MsS0FBSztZQUN4QkMsU0FBUztZQUNUTjtRQUNKO0lBQ0osRUFBRSxPQUFPTyxPQUFPO1FBQ1pDLFFBQVFELE1BQU0sMkJBQTJCQTtRQUV6QyxJQUFJQSxNQUFNRSxTQUFTLFNBQVM7WUFDeEIsT0FBT2hCLElBQUlHLE9BQU8sS0FBS1MsS0FBSztnQkFBRUUsT0FBTztZQUFvQjtRQUM3RDtRQUVBLE9BQU9kLElBQUlHLE9BQU8sS0FBS1MsS0FBSztZQUFFRSxPQUFPO1FBQXdCO0lBQ2pFLFNBQVU7UUFDTixNQUFNbEIsOERBQWtCcUI7SUFDNUI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdHVzLW5leHRqcy8uL3BhZ2VzL2FwaS9ib29raW5nL2RlbGV0ZS9baWRdLmpzPzFhMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwibGliL3ByaXNtYVwiO1xuXG5jb25zdCBjb3JzSGVhZGVycyA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCwgT1BUSU9OUycsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlJyxcbn07XG5cbi8vIE1haW4gaGFuZGxlciBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgICAvLyBIYW5kbGUgQ09SUyBwcmVmbGlnaHQgcmVxdWVzdFxuICAgIGlmIChtZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BPU1QsIE9QVElPTlMnKTtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgb25seSBQT1NUIHJlcXVlc3RzIGFyZSBwcm9jZXNzZWRcbiAgICBpZiAobWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5OyAvLyBBc3N1bWluZyB0aGUgSUQgaXMgcGFzc2VkIGFzIGEgcXVlcnkgcGFyYW1ldGVyXG5cbiAgICB0cnkge1xuICAgICAgICAvLyBEZWxldGUgdGhlIGJvb2tpbmcgYnkgSURcbiAgICAgICAgY29uc3QgZGVsZXRlZEJvb2tpbmcgPSBhd2FpdCBwcmlzbWEuYm9va2luZy5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZCkgfSwgLy8gQ29udmVydCBpZCB0byBudW1iZXIgaWYgbmVjZXNzYXJ5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnQm9va2luZyBkZWxldGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBkZWxldGVkQm9va2luZyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYm9va2luZzonLCBlcnJvcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDI1JykgeyAvLyBQcmlzbWEgZXJyb3IgY29kZSBmb3IgXCJSZWNvcmQgbm90IGZvdW5kXCJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnQm9va2luZyBub3QgZm91bmQnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiY29yc0hlYWRlcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZW5kIiwiaWQiLCJxdWVyeSIsImRlbGV0ZWRCb29raW5nIiwiYm9va2luZyIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJjb2RlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/booking/delete/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/booking/delete/[id].js"));
module.exports = __webpack_exports__;

})();