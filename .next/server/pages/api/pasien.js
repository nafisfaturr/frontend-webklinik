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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/patients.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const pasienList = await prisma.pasien.findMany();\n            res.status(200).json(pasienList);\n        } catch (error) {\n            res.status(500).json({\n                error: \"Failed to fetch data\"\n            });\n        } finally{\n            await prisma.$disconnect(); // Ensures the database connection is closed\n        }\n    } else if (req.method === \"POST\") {\n        try {\n            const data = await req.body;\n            const { nama, nomor_telepon, alamat } = data; // Fields for patient creation\n            if (!nama || !nomor_telepon || !alamat) {\n                return res.status(400).json({\n                    error: \"All fields are required\"\n                });\n            }\n            const newPasien = await prisma.pasien.create({\n                data: {\n                    nama,\n                    nomor_telepon: nomor_telepon,\n                    alamat\n                }\n            });\n            return res.status(201).json(newPasien);\n        } catch (error) {\n            console.error(\"Error creating Pasien:\", error);\n            return res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        } finally{\n            await prisma.$disconnect();\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFzaWVuL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QjtBQUNzQjtBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUVoQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsV0FBVyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxhQUFhLE1BQU1MLE9BQU9NLE9BQU9DO1lBQ3ZDSixJQUFJSyxPQUFPLEtBQUtDLEtBQUtKO1FBQ3pCLEVBQUUsT0FBT0ssT0FBTztZQUNaUCxJQUFJSyxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLE9BQU87WUFBdUI7UUFDekQsU0FBVTtZQUNOLE1BQU1WLE9BQU9XLGVBQWUsNENBQTRDO1FBQzVFO0lBQ0osT0FBTyxJQUFJVCxJQUFJRSxXQUFXLFFBQVE7UUFDOUIsSUFBSTtZQUNBLE1BQU1RLE9BQU8sTUFBTVYsSUFBSVc7WUFFdkIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsTUFBTSxFQUFFLEdBQUdKLE1BQU0sOEJBQThCO1lBQzVFLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxpQkFBaUIsQ0FBQ0MsUUFBUTtnQkFDcEMsT0FBT2IsSUFBSUssT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxPQUFPO2dCQUEwQjtZQUNuRTtZQUVBLE1BQU1PLFlBQVksTUFBTWpCLE9BQU9NLE9BQU9ZLE9BQU87Z0JBQ3pDTixNQUFNO29CQUNGRTtvQkFDQUMsZUFBZUE7b0JBQ2ZDO2dCQUNKO1lBQ0o7WUFFQSxPQUFPYixJQUFJSyxPQUFPLEtBQUtDLEtBQUtRO1FBQ2hDLEVBQUUsT0FBT1AsT0FBTztZQUNaUyxRQUFRVCxNQUFNLDBCQUEwQkE7WUFDeEMsT0FBT1AsSUFBSUssT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPO1lBQXdCO1FBQ2pFLFNBQVU7WUFDTixNQUFNVixPQUFPVztRQUNqQjtJQUNKLE9BQU87UUFDSFIsSUFBSWlCLFVBQVUsU0FBUztZQUFDO1lBQU87U0FBTztRQUN0Q2pCLElBQUlLLE9BQU8sS0FBS2EsSUFBSSxDQUFDLE9BQU8sRUFBRW5CLElBQUlFLE9BQU8sWUFBWSxDQUFDO0lBQzFEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3R1cy1uZXh0anMvLi9wYWdlcy9hcGkvcGFzaWVuL2luZGV4LmpzP2Y4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3BhdGllbnRzLmpzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFzaWVuTGlzdCA9IGF3YWl0IHByaXNtYS5wYXNpZW4uZmluZE1hbnkoKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBhc2llbkxpc3QpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyB9KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpOyAvLyBFbnN1cmVzIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuYm9keTtcblxuICAgICAgICAgICAgY29uc3QgeyBuYW1hLCBub21vcl90ZWxlcG9uLCBhbGFtYXQgfSA9IGRhdGE7IC8vIEZpZWxkcyBmb3IgcGF0aWVudCBjcmVhdGlvblxuICAgICAgICAgICAgaWYgKCFuYW1hIHx8ICFub21vcl90ZWxlcG9uIHx8ICFhbGFtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3UGFzaWVuID0gYXdhaXQgcHJpc21hLnBhc2llbi5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtYSxcbiAgICAgICAgICAgICAgICAgICAgbm9tb3JfdGVsZXBvbjogbm9tb3JfdGVsZXBvbixcbiAgICAgICAgICAgICAgICAgICAgYWxhbWF0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1Bhc2llbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBQYXNpZW46JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BPU1QnXSk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicGFzaWVuTGlzdCIsInBhc2llbiIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiLCJkYXRhIiwiYm9keSIsIm5hbWEiLCJub21vcl90ZWxlcG9uIiwiYWxhbWF0IiwibmV3UGFzaWVuIiwiY3JlYXRlIiwiY29uc29sZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pasien/index.js\n");

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