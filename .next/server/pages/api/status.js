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
exports.id = "pages/api/status";
exports.ids = ["pages/api/status"];
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

/***/ "(api)/./pages/api/status/index.js":
/*!***********************************!*\
  !*** ./pages/api/status/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nconst corsHeaders = {\n    \"Content-Type\": \"application/json\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Methods\": \"GET, POST, OPTIONS\",\n    \"Access-Control-Allow-Headers\": \"Content-Type\"\n};\n// Main handler function\nasync function handler(req, res) {\n    const { method } = req;\n    // Handle CORS preflight request\n    if (method === \"OPTIONS\") {\n        res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n        res.setHeader(\"Access-Control-Allow-Methods\", \"GET, POST, OPTIONS\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\");\n        return res.status(200).end();\n    }\n    try {\n        if (method === \"GET\") {\n            // Handler for GET request to retrieve all statuses\n            const statusList = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].status.findMany({\n                include: {\n                    bookings: true\n                }\n            });\n            return res.status(200).json(statusList);\n        } else if (method === \"POST\") {\n            // Handler for POST request to create a new status\n            const data = await req.body;\n            // Validate required fields\n            const { nama } = data;\n            if (!nama) {\n                return res.status(400).json({\n                    error: 'Field \"nama\" is required'\n                });\n            }\n            // Create a new status\n            const newStatus = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].status.create({\n                data: {\n                    nama\n                }\n            });\n            return res.status(201).json(newStatus);\n        } else {\n            // Method not allowed\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\"\n            ]);\n            return res.status(405).end(`Method ${method} Not Allowed`);\n        }\n    } catch (error) {\n        console.error(\"Error handling request:\", error);\n        return res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    } finally{\n        await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdHVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWM7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0FBQ3BDO0FBRUEsd0JBQXdCO0FBQ1QsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGO0lBRW5CLGdDQUFnQztJQUNoQyxJQUFJRSxXQUFXLFdBQVc7UUFDdEJELElBQUlFLFVBQVUsK0JBQStCO1FBQzdDRixJQUFJRSxVQUFVLGdDQUFnQztRQUM5Q0YsSUFBSUUsVUFBVSxnQ0FBZ0M7UUFDOUMsT0FBT0YsSUFBSUcsT0FBTyxLQUFLQztJQUMzQjtJQUVBLElBQUk7UUFDQSxJQUFJSCxXQUFXLE9BQU87WUFDbEIsbURBQW1EO1lBQ25ELE1BQU1JLGFBQWEsTUFBTVQseURBQWFPLENBQUNHLFNBQVM7Z0JBQzVDQyxTQUFTO29CQUNMQyxVQUFVO2dCQUNkO1lBQ0o7WUFFQSxPQUFPUixJQUFJRyxPQUFPLEtBQUtNLEtBQUtKO1FBQ2hDLE9BQU8sSUFBSUosV0FBVyxRQUFRO1lBQzFCLGtEQUFrRDtZQUNsRCxNQUFNUyxPQUFPLE1BQU1YLElBQUlZO1lBRXZCLDJCQUEyQjtZQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRjtZQUNqQixJQUFJLENBQUNFLE1BQU07Z0JBQ1AsT0FBT1osSUFBSUcsT0FBTyxLQUFLTSxLQUFLO29CQUFFSSxPQUFPO2dCQUEyQjtZQUNwRTtZQUVBLHNCQUFzQjtZQUN0QixNQUFNQyxZQUFZLE1BQU1sQix5REFBYU8sQ0FBQ1ksT0FBTztnQkFDekNMLE1BQU07b0JBQUVFO2dCQUFLO1lBQ2pCO1lBRUEsT0FBT1osSUFBSUcsT0FBTyxLQUFLTSxLQUFLSztRQUNoQyxPQUFPO1lBQ0gscUJBQXFCO1lBQ3JCZCxJQUFJRSxVQUFVLFNBQVM7Z0JBQUM7Z0JBQU87YUFBTztZQUN0QyxPQUFPRixJQUFJRyxPQUFPLEtBQUtDLElBQUksQ0FBQyxPQUFPLEVBQUVILE9BQU8sWUFBWSxDQUFDO1FBQzdEO0lBQ0osRUFBRSxPQUFPWSxPQUFPO1FBQ1pHLFFBQVFILE1BQU0sMkJBQTJCQTtRQUN6QyxPQUFPYixJQUFJRyxPQUFPLEtBQUtNLEtBQUs7WUFBRUksT0FBTztRQUF3QjtJQUNqRSxTQUFVO1FBQ04sTUFBTWpCLDhEQUFrQnFCO0lBQzVCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3R1cy1uZXh0anMvLi9wYWdlcy9hcGkvc3RhdHVzL2luZGV4LmpzPzkxYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwibGliL3ByaXNtYVwiO1xuXG5jb25zdCBjb3JzSGVhZGVycyA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULCBQT1NULCBPUFRJT05TJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxufTtcblxuLy8gTWFpbiBoYW5kbGVyIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICAgIC8vIEhhbmRsZSBDT1JTIHByZWZsaWdodCByZXF1ZXN0XG4gICAgaWYgKG1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TJyk7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlJyk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZXIgZm9yIEdFVCByZXF1ZXN0IHRvIHJldHJpZXZlIGFsbCBzdGF0dXNlc1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzTGlzdCA9IGF3YWl0IHByaXNtYS5zdGF0dXMuZmluZE1hbnkoe1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ3M6IHRydWUsIC8vIE9wdGlvbmFsbHkgaW5jbHVkZSByZWxhdGVkIEJvb2tpbmcgaW5mb3JtYXRpb24gaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oc3RhdHVzTGlzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZXIgZm9yIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgYSBuZXcgc3RhdHVzXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmJvZHk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgeyBuYW1hIH0gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKCFuYW1hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdGaWVsZCBcIm5hbWFcIiBpcyByZXF1aXJlZCcgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzdGF0dXNcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXR1cyA9IGF3YWl0IHByaXNtYS5zdGF0dXMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWEgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3U3RhdHVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1ldGhvZCBub3QgYWxsb3dlZFxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQT1NUJ10pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIHJlcXVlc3Q6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjb3JzSGVhZGVycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJlbmQiLCJzdGF0dXNMaXN0IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiYm9va2luZ3MiLCJqc29uIiwiZGF0YSIsImJvZHkiLCJuYW1hIiwiZXJyb3IiLCJuZXdTdGF0dXMiLCJjcmVhdGUiLCJjb25zb2xlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/status/index.js"));
module.exports = __webpack_exports__;

})();