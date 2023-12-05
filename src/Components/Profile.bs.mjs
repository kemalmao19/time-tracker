// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as JsxRuntime from "react/jsx-runtime";

function Profile(props) {
  var timeChanger = props.timeChanger;
  return JsxRuntime.jsxs("section", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("img", {
                              className: "w-20 h-auto rounded-full border-2 border-white",
                              src: "/image-jeremy.png"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("p", {
                                      children: "Report for",
                                      className: "text-xl font-light text-[#aeb4f1]"
                                    }),
                                JsxRuntime.jsx("h1", {
                                      children: "Jeremy Robson",
                                      className: "text-4xl font-thin text-white"
                                    })
                              ],
                              className: "flex flex-col gap-3"
                            })
                      ],
                      className: "bg-[#5746EA] flex lg:flex-col lg:items-start items-center gap-10 p-10 rounded-2xl",
                      id: "user"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: "Daily",
                              className: "hover:text-white hover:text-lg cursor-pointer",
                              id: "card",
                              onClick: (function (param) {
                                  Curry._1(timeChanger, (function (param) {
                                          return /* Daily */0;
                                        }));
                                })
                            }),
                        JsxRuntime.jsx("div", {
                              children: "Weekly",
                              className: "hover:text-white hover:text-lg cursor-pointer",
                              id: "card",
                              onClick: (function (param) {
                                  Curry._1(timeChanger, (function (param) {
                                          return /* Weekly */1;
                                        }));
                                })
                            }),
                        JsxRuntime.jsx("div", {
                              children: "Monthly",
                              className: "hover:text-white hover:text-lg cursor-pointer",
                              id: "card",
                              onClick: (function (param) {
                                  Curry._1(timeChanger, (function (param) {
                                          return /* Monthly */2;
                                        }));
                                })
                            })
                      ],
                      className: "flex lg:flex-col justify-center items-center lg:items-start p-5 lg:p-10 gap-5 text-[#aeb4f1]",
                      id: "times"
                    })
              ],
              className: "bg-[#1D204B] rounded-2xl",
              id: "profile"
            });
}

var make = Profile;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
