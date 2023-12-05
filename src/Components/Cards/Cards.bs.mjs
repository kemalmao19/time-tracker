// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Data from "../../Bindings/Data.bs.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as JsxRuntime from "react/jsx-runtime";

function Cards(props) {
  var time = props.time;
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsx("section", {
                    children: Belt_Array.mapWithIndex(Data.data, (function (i, activity) {
                            var matchCurrent = function (data) {
                              switch (data) {
                                case /* Daily */0 :
                                    return activity.timeframes.daily.current;
                                case /* Weekly */1 :
                                    return activity.timeframes.weekly.current;
                                case /* Monthly */2 :
                                    return activity.timeframes.monthly.current;
                                
                              }
                            };
                            var matchPrevious = function (data) {
                              switch (data) {
                                case /* Daily */0 :
                                    return activity.timeframes.daily.previous;
                                case /* Weekly */1 :
                                    return activity.timeframes.weekly.previous;
                                case /* Monthly */2 :
                                    return activity.timeframes.monthly.previous;
                                
                              }
                            };
                            var matchTime = function (data) {
                              switch (data) {
                                case /* Daily */0 :
                                    return "Day";
                                case /* Weekly */1 :
                                    return "Week";
                                case /* Monthly */2 :
                                    return "Month";
                                
                              }
                            };
                            return JsxRuntime.jsxs("div", {
                                        children: [
                                          JsxRuntime.jsx("div", {
                                                children: Data.activityIcon(activity.title),
                                                className: "relative h-10 overflow-hidden"
                                              }),
                                          JsxRuntime.jsxs("div", {
                                                children: [
                                                  JsxRuntime.jsxs("section", {
                                                        children: [
                                                          JsxRuntime.jsx("div", {
                                                                children: activity.title,
                                                                className: "text-white text-md font-normal"
                                                              }),
                                                          JsxRuntime.jsx("div", {
                                                                children: JsxRuntime.jsx("img", {
                                                                      src: "/icon-ellipsis.svg"
                                                                    })
                                                              })
                                                        ],
                                                        className: "flex items-center justify-between"
                                                      }),
                                                  JsxRuntime.jsxs("section", {
                                                        children: [
                                                          JsxRuntime.jsx("div", {
                                                                children: "" + String(matchCurrent(time)) + "hrs",
                                                                className: "text-white text-6xl font-light"
                                                              }),
                                                          JsxRuntime.jsx("div", {
                                                                children: "Last " + matchTime(time) + " - " + String(matchPrevious(time)) + "hrs"
                                                              })
                                                        ],
                                                        className: "text-[#aeb4f1] flex lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-5 rounded-2xl cursor-pointer"
                                                      })
                                                ],
                                                className: "relative flex flex-col bg-[#1D204B] hover:bg-[#34397B] transform-y transition-transform duration-300 hover:scale-y-105 rounded-t-2xl p-6 gap-5"
                                              })
                                        ],
                                        className: "flex flex-col " + Data.activityColor(activity.title) + " justify-between rounded-2xl"
                                      }, String(i));
                          })),
                    className: "grid lg:grid-cols-3 gap-5 mt-5 lg:mt-0",
                    id: "cards"
                  }),
              className: "col-span-2"
            });
}

var make = Cards;

export {
  make ,
}
/* Data Not a pure module */