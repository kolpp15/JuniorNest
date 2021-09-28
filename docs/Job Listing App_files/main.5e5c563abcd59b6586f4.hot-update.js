webpackHotUpdate("main",{

/***/ "./src/components/Job/UserApplyJob.js":
/*!********************************************!*\
  !*** ./src/components/Job/UserApplyJob.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _JobQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobQuestion */ "./src/components/Job/JobQuestion.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Firebase/config */ "./src/Firebase/config.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
var _jsxFileName = "/Users/ericmendes/lighthouse/project/juniorNest/src/components/Job/UserApplyJob.js";






const initState = {
  cover_letter: "",
  // we have to add this // webdeveloper
  status: "Open",
  apply_date: "",
  job_post_id: "",
  user_id: "GMtfe81Z9fbhkBCXKGpM",
  questions_answers: {}
};
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [applyDetails, setApplyDetails] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState);
  const [jobInfo, setJobInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const params = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useParams"])();

  const fetchUniqueJobDetails = async inputId => {
    const jobInfo = _Firebase_config__WEBPACK_IMPORTED_MODULE_4__["firestore"].collection("job_posts").doc(inputId.jobId);
    const doc = await jobInfo.get();
    const tempJob = doc.data();
    setJobInfo(tempJob);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUniqueJobDetails(params);
  }, []);
  let answerStorage = {};
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_5__["useAlert"])();

  const handleChange = e => {
    e.persist();

    if (e.target.name.includes("questions")) {
      answerStorage = e.target.value;
      setApplyDetails(oldState => ({ ...oldState,
        ...answerStorage
      }));
    } else {
      setApplyDetails(oldState => ({ ...oldState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    let answersObj = {};

    if (applyDetails.length === "") {
      alert.error("MFK !");
    }

    for (const answer in applyDetails) {
      if (answer.includes("answer")) {
        answersObj[answer] = applyDetails[answer];
        delete applyDetails[answer];
      }
    }

    delete answersObj.questions_answers;
    applyDetails.questions_answers = answersObj;
    await props.postApplication(applyDetails);
    setLoading(false);
    alert.success("Success alert!");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Submit Application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Please answer all the questions the employer is asking")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, jobInfo.questions && Object.values(jobInfo.questions).map((question, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      pb: 5,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FilledInput"], {
      onChange: handleChange,
      name: `answer${i}` // value={userDetails.description}
      ,
      fullWidth: true,
      multiline: true,
      rows: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FilledInput"], {
    onChange: handleChange,
    name: "cover_letter" // value={userDetails.description}
    ,
    placeholder: "Coverletter",
    fullWidth: true,
    multiline: true,
    rows: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: props.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleSubmit,
    variant: "contained",
    disableElevation: true,
    color: "primary",
    disabled: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    color: "secondary",
    size: 22,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }) : "Apply Job")));
});

/***/ })

})
//# sourceMappingURL=main.5e5c563abcd59b6586f4.hot-update.js.map