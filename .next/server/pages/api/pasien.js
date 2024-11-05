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
exports.id = "pages/api/pasien";
exports.ids = ["pages/api/pasien"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/pasien/index.js":
/*!***********************************!*\
  !*** ./pages/api/pasien/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/patients.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const pasienList = await prisma.pasien.findMany();\n            res.status(200).json(pasienList);\n        } catch (error) {\n            res.status(500).json({\n                error: \"Failed to fetch data\"\n            });\n        } finally{\n            await prisma.$disconnect(); // Ensures the database connection is closed\n        }\n    } else if (req.method === \"POST\") {\n        try {\n            const data = await req.json();\n            const { nama, nomor_telepon, alamat } = data; // Fields for patient creation\n            if (!nama || !nomor_telepon || !alamat) {\n                return res.status(400).json({\n                    error: \"All fields are required\"\n                });\n            }\n            const newPasien = await prisma.pasien.create({\n                data: {\n                    nama,\n                    nomor_telepon,\n                    alamat\n                }\n            });\n            return res.status(201).json(newPasien);\n        } catch (error) {\n            console.error(\"Error creating Pasien:\", error);\n            return res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        } finally{\n            await prisma.$disconnect();\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFzaWVuL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QjtBQUNzQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsV0FBVyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxhQUFhLE1BQU1MLE9BQU9NLE9BQU9DO1lBQ3ZDSixJQUFJSyxPQUFPLEtBQUtDLEtBQUtKO1FBQ3pCLEVBQUUsT0FBT0ssT0FBTztZQUNaUCxJQUFJSyxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLE9BQU87WUFBdUI7UUFDekQsU0FBVTtZQUNOLE1BQU1WLE9BQU9XLGVBQWUsNENBQTRDO1FBQzVFO0lBQ0osT0FBTyxJQUFJVCxJQUFJRSxXQUFXLFFBQVE7UUFDOUIsSUFBSTtZQUNBLE1BQU1RLE9BQU8sTUFBTVYsSUFBSU87WUFFdkIsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsTUFBTSxFQUFFLEdBQUdILE1BQU0sOEJBQThCO1lBQzVFLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxpQkFBaUIsQ0FBQ0MsUUFBUTtnQkFDcEMsT0FBT1osSUFBSUssT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxPQUFPO2dCQUEwQjtZQUNuRTtZQUVBLE1BQU1NLFlBQVksTUFBTWhCLE9BQU9NLE9BQU9XLE9BQU87Z0JBQ3pDTCxNQUFNO29CQUNGQztvQkFDQUM7b0JBQ0FDO2dCQUNKO1lBQ0o7WUFFQSxPQUFPWixJQUFJSyxPQUFPLEtBQUtDLEtBQUtPO1FBQ2hDLEVBQUUsT0FBT04sT0FBTztZQUNaUSxRQUFRUixNQUFNLDBCQUEwQkE7WUFDeEMsT0FBT1AsSUFBSUssT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPO1lBQXdCO1FBQ2pFLFNBQVU7WUFDTixNQUFNVixPQUFPVztRQUNqQjtJQUNKLE9BQU87UUFDSFIsSUFBSWdCLFVBQVUsU0FBUztZQUFDO1lBQU87U0FBTztRQUN0Q2hCLElBQUlLLE9BQU8sS0FBS1ksSUFBSSxDQUFDLE9BQU8sRUFBRWxCLElBQUlFLE9BQU8sWUFBWSxDQUFDO0lBQzFEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3R1cy1uZXh0anMvLi9wYWdlcy9hcGkvcGFzaWVuL2luZGV4LmpzP2Y4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3BhdGllbnRzLmpzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFzaWVuTGlzdCA9IGF3YWl0IHByaXNtYS5wYXNpZW4uZmluZE1hbnkoKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBhc2llbkxpc3QpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyB9KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpOyAvLyBFbnN1cmVzIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCB7IG5hbWEsIG5vbW9yX3RlbGVwb24sIGFsYW1hdCB9ID0gZGF0YTsgLy8gRmllbGRzIGZvciBwYXRpZW50IGNyZWF0aW9uXG4gICAgICAgICAgICBpZiAoIW5hbWEgfHwgIW5vbW9yX3RlbGVwb24gfHwgIWFsYW1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdQYXNpZW4gPSBhd2FpdCBwcmlzbWEucGFzaWVuLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuYW1hLFxuICAgICAgICAgICAgICAgICAgICBub21vcl90ZWxlcG9uLFxuICAgICAgICAgICAgICAgICAgICBhbGFtYXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3UGFzaWVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIFBhc2llbjonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwYXNpZW5MaXN0IiwicGFzaWVuIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCIsImRhdGEiLCJuYW1hIiwibm9tb3JfdGVsZXBvbiIsImFsYW1hdCIsIm5ld1Bhc2llbiIsImNyZWF0ZSIsImNvbnNvbGUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/pasien/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pasien/index.js"));
module.exports = __webpack_exports__;

})();