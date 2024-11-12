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
exports.id = "pages/api/status/delete/[id]";
exports.ids = ["pages/api/status/delete/[id]"];
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

/***/ "(api)/./pages/api/status/delete/[id].js":
/*!*****************************************!*\
  !*** ./pages/api/status/delete/[id].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nconst corsHeaders = {\n    \"Content-Type\": \"application/json\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Methods\": \"POST, OPTIONS\",\n    \"Access-Control-Allow-Headers\": \"Content-Type\"\n};\n// Main handler function\nasync function handler(req, res) {\n    // Handle OPTIONS request for CORS preflight\n    if (req.method === \"OPTIONS\") {\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        res.setHeader(\"Access-Control-Allow-Methods\", \"POST, OPTIONS\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\");\n        return res.status(200).end();\n    }\n    try {\n        if (req.method === \"POST\") {\n            const { id } = req.query; // Assuming the ID is passed in the request body\n            // Check if ID is provided\n            if (!id) {\n                return res.status(400).json({\n                    error: \"ID is required\"\n                });\n            }\n            // Delete the Status by ID\n            const deletedStatus = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Status.delete({\n                where: {\n                    id: Number(id)\n                }\n            });\n            res.status(200).json({\n                message: \"Status deleted successfully\",\n                deletedStatus\n            });\n        } else {\n            // Handle unsupported request methods\n            res.setHeader(\"Allow\", [\n                \"POST\"\n            ]);\n            res.status(405).end(`Method ${req.method} Not Allowed`);\n        }\n    } catch (error) {\n        console.error(\"Error deleting Status:\", error);\n        if (error.code === \"P2025\") {\n            return res.status(404).json({\n                error: \"Status not found\"\n            });\n        }\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdHVzL2RlbGV0ZS9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWM7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0FBQ3BDO0FBRUEsd0JBQXdCO0FBQ1QsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLDRDQUE0QztJQUM1QyxJQUFJRCxJQUFJRSxXQUFXLFdBQVc7UUFDMUJELElBQUlFLFVBQVUsK0JBQStCO1FBQzdDRixJQUFJRSxVQUFVLGdDQUFnQztRQUM5Q0YsSUFBSUUsVUFBVSxnQ0FBZ0M7UUFDOUMsT0FBT0YsSUFBSUcsT0FBTyxLQUFLQztJQUMzQjtJQUVBLElBQUk7UUFDQSxJQUFJTCxJQUFJRSxXQUFXLFFBQVE7WUFDdkIsTUFBTSxFQUFFSSxFQUFFLEVBQUUsR0FBR04sSUFBSU8sT0FBTyxnREFBZ0Q7WUFFMUUsMEJBQTBCO1lBQzFCLElBQUksQ0FBQ0QsSUFBSTtnQkFDTCxPQUFPTCxJQUFJRyxPQUFPLEtBQUtJLEtBQUs7b0JBQUVDLE9BQU87Z0JBQWlCO1lBQzFEO1lBRUEsMEJBQTBCO1lBQzFCLE1BQU1DLGdCQUFnQixNQUFNYix5REFBYWMsQ0FBQ0MsT0FBTztnQkFDN0NDLE9BQU87b0JBQUVQLElBQUlRLE9BQU9SO2dCQUFJO1lBQzVCO1lBRUFMLElBQUlHLE9BQU8sS0FBS0ksS0FBSztnQkFBRU8sU0FBUztnQkFBK0JMO1lBQWM7UUFDakYsT0FBTztZQUNILHFDQUFxQztZQUNyQ1QsSUFBSUUsVUFBVSxTQUFTO2dCQUFDO2FBQU87WUFDL0JGLElBQUlHLE9BQU8sS0FBS0MsSUFBSSxDQUFDLE9BQU8sRUFBRUwsSUFBSUUsT0FBTyxZQUFZLENBQUM7UUFDMUQ7SUFDSixFQUFFLE9BQU9PLE9BQU87UUFDWk8sUUFBUVAsTUFBTSwwQkFBMEJBO1FBRXhDLElBQUlBLE1BQU1RLFNBQVMsU0FBUztZQUN4QixPQUFPaEIsSUFBSUcsT0FBTyxLQUFLSSxLQUFLO2dCQUFFQyxPQUFPO1lBQW1CO1FBQzVEO1FBRUFSLElBQUlHLE9BQU8sS0FBS0ksS0FBSztZQUFFQyxPQUFPO1FBQXdCO0lBQzFELFNBQVU7UUFDTixNQUFNWiw4REFBa0JxQjtJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90dXMtbmV4dGpzLy4vcGFnZXMvYXBpL3N0YXR1cy9kZWxldGUvW2lkXS5qcz83NTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcImxpYi9wcmlzbWFcIjtcblxuY29uc3QgY29yc0hlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ1BPU1QsIE9QVElPTlMnLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXG59O1xuXG4vLyBNYWluIGhhbmRsZXIgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvLyBIYW5kbGUgT1BUSU9OUyByZXF1ZXN0IGZvciBDT1JTIHByZWZsaWdodFxuICAgIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQT1NULCBPUFRJT05TJyk7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlJyk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5OyAvLyBBc3N1bWluZyB0aGUgSUQgaXMgcGFzc2VkIGluIHRoZSByZXF1ZXN0IGJvZHlcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgSUQgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0lEIGlzIHJlcXVpcmVkJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBTdGF0dXMgYnkgSURcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRTdGF0dXMgPSBhd2FpdCBwcmlzbWEuU3RhdHVzLmRlbGV0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihpZCkgfSwgLy8gQ29udmVydCBpZCB0byBudW1iZXIgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnU3RhdHVzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JywgZGVsZXRlZFN0YXR1cyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB1bnN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIFN0YXR1czonLCBlcnJvcik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ1AyMDI1Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdTdGF0dXMgbm90IGZvdW5kJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiY29yc0hlYWRlcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZW5kIiwiaWQiLCJxdWVyeSIsImpzb24iLCJlcnJvciIsImRlbGV0ZWRTdGF0dXMiLCJTdGF0dXMiLCJkZWxldGUiLCJ3aGVyZSIsIk51bWJlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiY29kZSIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/status/delete/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/status/delete/[id].js"));
module.exports = __webpack_exports__;

})();