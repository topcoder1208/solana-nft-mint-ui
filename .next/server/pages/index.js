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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noSSR = noSSR;\nexports[\"default\"] = dynamic;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === 'undefined';\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return(/*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack));\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === 'function') {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === 'object') {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    if (true) {\n        // Error if react root is not enabled and `suspense` option is set to true\n        if ( true && suspenseOptions.suspense) {\n            // TODO: add error doc when this feature is stable\n            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n        }\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === 'boolean') {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsYUFBYSxHQUFHRSxLQUFLO0FBQ3JCRixrQkFBZSxHQUFHSSxPQUFPO0FBQ3pCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQVk7U0FDbERELHNCQUFzQixDQUFDRyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDTixPQUFPLEVBQUVNLEdBQUc7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNFLFlBQVksR0FBRyxDQUFhLGVBQUssQ0FBVztTQUN6Q1QsS0FBSyxDQUFDVSxtQkFBbUIsRUFBRUMsZUFBZSxFQUFFLENBQUM7SUFDbEQsRUFBeUU7SUFDekUsTUFBTSxDQUFDQSxlQUFlLENBQUNDLE9BQU87SUFDOUIsTUFBTSxDQUFDRCxlQUFlLENBQUNFLE9BQU87SUFDOUIsRUFBb0Y7SUFDcEYsRUFBRSxHQUFHSixZQUFZLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUNDLG1CQUFtQixDQUFDQyxlQUFlO0lBQzlDLENBQUM7SUFDRCxLQUFLLENBQUNHLE9BQU8sR0FBR0gsZUFBZSxDQUFDSSxPQUFPO0lBQ3ZDLEVBQWdEO0lBQ2hELE1BQU0sS0FBSyxFQUFhLFlBQUNaLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZSxhQUFhLENBQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ3hERyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxTQUFTLEVBQUUsS0FBSztZ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LENBQUNBLGVBQWUsQ0FBQ3lCLEdBQUc7SUFDOUIsQ0FBQztJQUNELE1BQU0sQ0FBQ2IsVUFBVSxDQUFDWixlQUFlO0FBQ3JDLENBQUMsQ0FFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWludC11aS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzP2UyNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibm9TU1IiLCJkZWZhdWx0IiwiZHluYW1pYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CreateReactAppEntryPoint = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"src_App_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../App */ \"./src/App.tsx\"))\n, {\n    loadableGenerated: {\n        webpack: ()=>[\n                /*require.resolve*/(/*! ../App */ \"./src/App.tsx\")\n            ]\n        ,\n        modules: [\n            \"index.tsx -> \" + \"../App\"\n        ]\n    },\n    ssr: false\n});\nfunction App() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreateReactAppEntryPoint, {\n        __source: {\n            fileName: \"/home/wstar/Desktop/nft-mint-ui/src/pages/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 10\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUVsQyxLQUFLLENBQUNDLHdCQUF3QixHQUFHRCxtREFBTyxLQUFPRSx1SUFBZTs7Ozs7Ozs7Ozs7SUFDNURDLEdBQUcsRUFBRSxLQUFLOztTQUdIQyxHQUFHLEdBQUcsQ0FBQztJQUNkLE1BQU0sc0VBQUVILHdCQUF3Qjs7Ozs7Ozs7QUFDbEMsQ0FBQztBQUVELGlFQUFlRyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWludC11aS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBDcmVhdGVSZWFjdEFwcEVudHJ5UG9pbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vQXBwJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiA8Q3JlYXRlUmVhY3RBcHBFbnRyeVBvaW50IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIkNyZWF0ZVJlYWN0QXBwRW50cnlQb2ludCIsImltcG9ydCIsInNzciIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1taW50LXVpLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcz83M2Q0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@cloudflare/stream-react":
/*!*******************************************!*\
  !*** external "@cloudflare/stream-react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@cloudflare/stream-react");

/***/ }),

/***/ "@google/model-viewer/dist/model-viewer":
/*!*********************************************************!*\
  !*** external "@google/model-viewer/dist/model-viewer" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@google/model-viewer/dist/model-viewer");

/***/ }),

/***/ "@metaplex/arweave-cost":
/*!*****************************************!*\
  !*** external "@metaplex/arweave-cost" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@metaplex/arweave-cost");

/***/ }),

/***/ "@project-serum/serum/lib/token-instructions":
/*!**************************************************************!*\
  !*** external "@project-serum/serum/lib/token-instructions" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/serum/lib/token-instructions");

/***/ }),

/***/ "@solana/spl-token":
/*!************************************!*\
  !*** external "@solana/spl-token" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-token");

/***/ }),

/***/ "@solana/spl-token-registry":
/*!*********************************************!*\
  !*** external "@solana/spl-token-registry" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-token-registry");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/wallet-adapter-base");

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/wallet-adapter-react");

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/wallet-adapter-wallets");

/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "bn.js":
/*!************************!*\
  !*** external "bn.js" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("bn.js");

/***/ }),

/***/ "borsh":
/*!************************!*\
  !*** external "borsh" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("borsh");

/***/ }),

/***/ "bs58":
/*!***********************!*\
  !*** external "bs58" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("bs58");

/***/ }),

/***/ "buffer-layout":
/*!********************************!*\
  !*** external "buffer-layout" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer-layout");

/***/ }),

/***/ "canvas-confetti":
/*!**********************************!*\
  !*** external "canvas-confetti" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("canvas-confetti");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "jazzicon":
/*!***************************!*\
  !*** external "jazzicon" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("jazzicon");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("three");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();