// ==UserScript==
// @name         Auto Load Layout Data (for Stock)
// @namespace    AlexCoding4Fun
// @version      1.0.4
// @description  A lazy script to auto load TradingView layout data
// @author       Alex Lin
// @match        https://histock.tw/stock/tv/*
// @downloadURL  https://raw.githubusercontent.com/chiapon/user-scripts/refs/heads/main/autoload-layout-stock.js
// @updateURL    https://raw.githubusercontent.com/chiapon/user-scripts/refs/heads/main/autoload-layout-stock.js
// @grant        none
// ==/UserScript==

let url = new URL(window.location.href);
let params = url.searchParams;
let symbol = params.get("no");

document.title = document.title + ' ' + symbol

const layoutData = {
    "layout": "s",
    "charts": [
        {
            "panes": [
                {
                    "sources": [
                        {
                            "type": "MainSeries",
                            "id": "_seriesId",
                            "zorder": 0,
                            "haStyle": {
                                "studyId": "BarSetHeikenAshi@tv-basicstudies-60"
                            },
                            "renkoStyle": {
                                "studyId": "BarSetRenko@tv-prostudies-73"
                            },
                            "pbStyle": {
                                "studyId": "BarSetPriceBreak@tv-prostudies-34"
                            },
                            "kagiStyle": {
                                "studyId": "BarSetKagi@tv-prostudies-73"
                            },
                            "pnfStyle": {
                                "studyId": "BarSetPnF@tv-prostudies-73"
                            },
                            "rangeStyle": {
                                "studyId": "BarSetRange@tv-basicstudies-72"
                            },
                            "volFootprintStyle": {
                                "studyId": "Footprint@tv-volumebyprice-104"
                            },
                            "tpoStyle": {
                                "studyId": "TPOPeriodic@tv-volumebyprice-104"
                            },
                            "svpStyle": {
                                "studyId": "VbPSessions@tv-volumebyprice-126"
                            },
                            "formattingDeps": {
                                "format": "price",
                                "pricescale": 100,
                                "minmov": 1,
                                "fractional": true,
                                "minmove2": 0
                            },
                            "state": {
                                "style": 1,
                                "esdShowDividends": true,
                                "esdShowSplits": true,
                                "esdShowEarnings": true,
                                "esdShowBreaks": false,
                                "esdFlagSize": 2,
                                "showContinuousContractSwitches": true,
                                "showContinuousContractSwitchesBreaks": false,
                                "showFuturesContractExpiration": true,
                                "showLastNews": true,
                                "showCountdown": false,
                                "bidAsk": {
                                    "visible": false,
                                    "lineStyle": 1,
                                    "lineWidth": 1,
                                    "bidLineColor": "#2962FF",
                                    "askLineColor": "#F7525F"
                                },
                                "prePostMarket": {
                                    "visible": true,
                                    "lineStyle": 1,
                                    "lineWidth": 1,
                                    "preMarketColor": "#FB8C00",
                                    "postMarketColor": "#2962FF"
                                },
                                "highLowAvgPrice": {
                                    "highLowPriceLinesVisible": false,
                                    "highLowPriceLabelsVisible": false,
                                    "averageClosePriceLineVisible": false,
                                    "averageClosePriceLabelVisible": false,
                                    "highLowPriceLinesColor": "",
                                    "highLowPriceLinesWidth": 1,
                                    "averagePriceLineColor": "",
                                    "averagePriceLineWidth": 1
                                },
                                "visible": true,
                                "showPriceLine": false,
                                "priceLineWidth": 1,
                                "priceLineColor": "",
                                "baseLineColor": "#B2B5BE",
                                "showPrevClosePriceLine": false,
                                "prevClosePriceLineWidth": 1,
                                "prevClosePriceLineColor": "#555555",
                                "minTick": "100",
                                "dividendsAdjustment": {},
                                "backAdjustment": false,
                                "settlementAsClose": true,
                                "sessionId": "regular",
                                "sessVis": false,
                                "statusViewStyle": {
                                    "fontSize": 16,
                                    "showExchange": true,
                                    "showInterval": true,
                                    "symbolTextSource": "description"
                                },
                                "candleStyle": {
                                    "upColor": "rgba(76, 175, 80, 0.8)",
                                    "downColor": "rgba(242, 54, 69, 0.8)",
                                    "drawWick": true,
                                    "drawBorder": false,
                                    "borderColor": "#378658",
                                    "borderUpColor": "#5b1a13",
                                    "borderDownColor": "#225437",
                                    "wickColor": "#737375",
                                    "wickUpColor": "rgba(76, 175, 80, 1)",
                                    "wickDownColor": "rgba(242, 54, 69, 1)",
                                    "barColorsOnPrevClose": false,
                                    "drawBody": true
                                },
                                "volCandlesStyle": {
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "drawWick": true,
                                    "drawBorder": true,
                                    "borderColor": "#378658",
                                    "borderUpColor": "#089981",
                                    "borderDownColor": "#F23645",
                                    "wickColor": "#737375",
                                    "wickUpColor": "#089981",
                                    "wickDownColor": "#F23645",
                                    "barColorsOnPrevClose": false,
                                    "drawBody": true
                                },
                                "hollowCandleStyle": {
                                    "upColor": "#d75442",
                                    "downColor": "#6ba583",
                                    "drawWick": true,
                                    "drawBorder": true,
                                    "borderColor": "#378658",
                                    "borderUpColor": "#5b1a13",
                                    "borderDownColor": "#225437",
                                    "wickColor": "#737375",
                                    "wickUpColor": "#089981",
                                    "wickDownColor": "#F23645",
                                    "drawBody": true
                                },
                                "haStyle": {
                                    "upColor": "#d75442",
                                    "downColor": "#6ba583",
                                    "drawWick": true,
                                    "drawBorder": true,
                                    "borderColor": "#378658",
                                    "borderUpColor": "#089981",
                                    "borderDownColor": "#F23645",
                                    "wickColor": "#737375",
                                    "wickUpColor": "#089981",
                                    "wickDownColor": "#F23645",
                                    "showRealLastPrice": false,
                                    "barColorsOnPrevClose": false,
                                    "inputs": {},
                                    "inputInfo": {},
                                    "drawBody": true
                                },
                                "barStyle": {
                                    "upColor": "#d75442",
                                    "downColor": "#6ba583",
                                    "barColorsOnPrevClose": false,
                                    "dontDrawOpen": false,
                                    "thinBars": true
                                },
                                "hiloStyle": {
                                    "color": "#2962FF",
                                    "showBorders": true,
                                    "borderColor": "#2962FF",
                                    "showLabels": true,
                                    "labelColor": "#2962FF",
                                    "drawBody": true
                                },
                                "columnStyle": {
                                    "upColor": "rgba(8, 153, 129, 0.5)",
                                    "downColor": "rgba(242, 54, 69, 0.5)",
                                    "barColorsOnPrevClose": true,
                                    "priceSource": "close"
                                },
                                "lineStyle": {
                                    "color": "#2962FF",
                                    "linestyle": 0,
                                    "linewidth": 2,
                                    "priceSource": "close"
                                },
                                "tpoStyle": {
                                    "inputs": {}
                                },
                                "svpStyle": {
                                    "inputs": {}
                                },
                                "lineWithMarkersStyle": {
                                    "color": "#2962FF",
                                    "linestyle": 0,
                                    "linewidth": 2,
                                    "priceSource": "close"
                                },
                                "steplineStyle": {
                                    "color": "#2962FF",
                                    "linestyle": 0,
                                    "linewidth": 2,
                                    "priceSource": "close"
                                },
                                "areaStyle": {
                                    "color1": "rgba(41, 98, 255, 0.28)",
                                    "color2": "#2962FF",
                                    "linecolor": "#2962FF",
                                    "linestyle": 0,
                                    "linewidth": 2,
                                    "priceSource": "close",
                                    "transparency": 100
                                },
                                "hlcAreaStyle": {
                                    "highLineColor": "#089981",
                                    "highLineStyle": 0,
                                    "highLineWidth": 2,
                                    "lowLineColor": "#F23645",
                                    "lowLineStyle": 0,
                                    "lowLineWidth": 2,
                                    "closeLineColor": "#868993",
                                    "closeLineStyle": 0,
                                    "closeLineWidth": 2,
                                    "highCloseFillColor": "rgba(8, 153, 129, 0.2)",
                                    "closeLowFillColor": "rgba(242, 54, 69, 0.2)"
                                },
                                "renkoStyle": {
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "borderUpColor": "#089981",
                                    "borderDownColor": "#F23645",
                                    "upColorProjection": "#a9dcc3",
                                    "downColorProjection": "#f5a6ae",
                                    "borderUpColorProjection": "#a9dcc3",
                                    "borderDownColorProjection": "#f5a6ae",
                                    "wickUpColor": "#089981",
                                    "wickDownColor": "#F23645",
                                    "inputs": {
                                        "source": "close",
                                        "sources": "Close",
                                        "boxSize": 3,
                                        "style": "ATR",
                                        "atrLength": 14,
                                        "percentageLTP": 1,
                                        "wicks": true
                                    },
                                    "inputInfo": {
                                        "source": {
                                            "name": "Source"
                                        },
                                        "sources": {
                                            "name": "Source"
                                        },
                                        "boxSize": {
                                            "name": "Box size"
                                        },
                                        "style": {
                                            "name": "Style"
                                        },
                                        "atrLength": {
                                            "name": "ATR length"
                                        },
                                        "percentageLTP": {
                                            "name": "Percentage"
                                        },
                                        "wicks": {
                                            "name": "Wicks"
                                        }
                                    }
                                },
                                "pbStyle": {
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "borderUpColor": "#089981",
                                    "borderDownColor": "#F23645",
                                    "upColorProjection": "#a9dcc3",
                                    "downColorProjection": "#f5a6ae",
                                    "borderUpColorProjection": "#a9dcc3",
                                    "borderDownColorProjection": "#f5a6ae",
                                    "inputs": {
                                        "source": "close",
                                        "lb": 3
                                    },
                                    "inputInfo": {
                                        "source": {
                                            "name": "Source"
                                        },
                                        "lb": {
                                            "name": "Number of line"
                                        }
                                    }
                                },
                                "kagiStyle": {
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "upColorProjection": "#a9dcc3",
                                    "downColorProjection": "#f5a6ae",
                                    "inputs": {
                                        "source": "close",
                                        "style": "ATR",
                                        "atrLength": 14,
                                        "percentageLTP": 1,
                                        "reversalAmount": 1
                                    },
                                    "inputInfo": {
                                        "source": {
                                            "name": "Source"
                                        },
                                        "style": {
                                            "name": "Style"
                                        },
                                        "atrLength": {
                                            "name": "ATR length"
                                        },
                                        "percentageLTP": {
                                            "name": "Percentage"
                                        },
                                        "reversalAmount": {
                                            "name": "Reversal amount"
                                        }
                                    }
                                },
                                "pnfStyle": {
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "upColorProjection": "#a9dcc3",
                                    "downColorProjection": "#f5a6ae",
                                    "inputs": {
                                        "sources": "Close",
                                        "reversalAmount": 3,
                                        "boxSize": 1,
                                        "style": "ATR",
                                        "atrLength": 14,
                                        "percentageLTP": 1,
                                        "oneStepBackBuilding": false
                                    },
                                    "inputInfo": {
                                        "sources": {
                                            "name": "Source"
                                        },
                                        "boxSize": {
                                            "name": "Box size"
                                        },
                                        "reversalAmount": {
                                            "name": "Reversal amount"
                                        },
                                        "style": {
                                            "name": "Style"
                                        },
                                        "atrLength": {
                                            "name": "ATR length"
                                        },
                                        "percentageLTP": {
                                            "name": "Percentage"
                                        },
                                        "oneStepBackBuilding": {
                                            "name": "One step back building"
                                        }
                                    }
                                },
                                "baselineStyle": {
                                    "baselineColor": "#758696",
                                    "topFillColor1": "rgba(8, 153, 129, 0.28)",
                                    "topFillColor2": "rgba(8, 153, 129, 0.05)",
                                    "bottomFillColor1": "rgba(242, 54, 69, 0.05)",
                                    "bottomFillColor2": "rgba(242, 54, 69, 0.28)",
                                    "topLineColor": "#089981",
                                    "bottomLineColor": "#F23645",
                                    "topLineWidth": 2,
                                    "bottomLineWidth": 2,
                                    "priceSource": "close",
                                    "transparency": 50,
                                    "baseLevelPercentage": 50
                                },
                                "rangeStyle": {
                                    "barStyle": 0,
                                    "upColor": "#089981",
                                    "downColor": "#F23645",
                                    "upColorProjection": "#a9dcc3",
                                    "downColorProjection": "#f5a6ae",
                                    "thinBars": true,
                                    "candlesUpColor": "#089981",
                                    "candlesDownColor": "#F23645",
                                    "candlesBorderUpColor": "#089981",
                                    "candlesBorderDownColor": "#F23645",
                                    "candlesWickUpColor": "#089981",
                                    "candlesWickDownColor": "#F23645",
                                    "inputs": {
                                        "range": 10,
                                        "phantomBars": false
                                    },
                                    "inputInfo": {
                                        "range": {
                                            "name": "Range"
                                        },
                                        "phantomBars": {
                                            "name": "Phantom bars"
                                        }
                                    }
                                },
                                "volFootprintStyle": {
                                    "inputs": {}
                                },
                                "symbol": symbol,
                                "timeframe": "",
                                "onWidget": false,
                                "interval": "1D",
                                "unitId": null,
                                "currencyId": null,
                                "showSessions": false,
                                "priceAxisProperties": {
                                    "autoScale": true,
                                    "autoScaleDisabled": false,
                                    "lockScale": false,
                                    "percentage": false,
                                    "percentageDisabled": false,
                                    "log": false,
                                    "logDisabled": false,
                                    "alignLabels": true,
                                    "isInverted": false,
                                    "indexedTo100": false
                                }
                            }
                        },
                        {
                            "type": "LineToolRay",
                            "id": "1hHhN9",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.4972)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "extendLeft": false,
                                "extendRight": true,
                                "leftEnd": 0,
                                "rightEnd": 0,
                                "showLabel": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "bottom",
                                "textcolor": "#2962FF",
                                "fontsize": 14,
                                "bold": false,
                                "italic": false,
                                "alwaysShowStats": false,
                                "showMiddlePoint": false,
                                "showPriceLabels": false,
                                "showPriceRange": false,
                                "showPercentPriceRange": false,
                                "showPipsPriceRange": false,
                                "showBarsRange": false,
                                "showDateTimeRange": false,
                                "showDistance": false,
                                "showAngle": false,
                                "statsPosition": 2,
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "9939",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1731891600,
                                    "offset": 0,
                                    "price": 157.5
                                },
                                {
                                    "time_t": 1738717200,
                                    "offset": 0,
                                    "price": 164
                                }
                            ],
                            "zorder": -55000,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "QwDQ7NQASBsN"
                        },
                        {
                            "type": "LineToolHorzLine",
                            "id": "CZeSeD",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "middle",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "9939",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1734397200,
                                    "offset": 0,
                                    "price": 142
                                }
                            ],
                            "zorder": -52500,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "wsgHq8qs3GHJ"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "fyY2mO",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5036)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "9939",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1731027600,
                                    "offset": 0,
                                    "price": 159
                                }
                            ],
                            "zorder": -51250,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "9WGKHoeC7fMK"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "KyAxPC",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5036)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "9939",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1715302800,
                                    "offset": 0,
                                    "price": 178.5
                                }
                            ],
                            "zorder": -50625,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "XZuzLGCtNn6h"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "hp2Kn2",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5036)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "9939",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1727226000,
                                    "offset": 0,
                                    "price": 174
                                }
                            ],
                            "zorder": -50313,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "7zg0LPG2mruU"
                        },
                        {
                            "type": "LineToolHorzLine",
                            "id": "RBEjmY",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "middle",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "0000",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1732842000,
                                    "offset": 0,
                                    "price": 22055.38
                                }
                            ],
                            "zorder": -50157,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "vSnYVipTxfNa"
                        },
                        {
                            "type": "LineToolHorzLine",
                            "id": "PvlWfT",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "middle",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": "0000",
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1729213200,
                                    "offset": 0,
                                    "price": 23713.7
                                }
                            ],
                            "zorder": -50079,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "GlJ9KkXvwIrA"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "KFK62e",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": symbol,
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1733792400,
                                    "offset": 0,
                                    "price": 11.84
                                }
                            ],
                            "zorder": -50040,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "OpriP09aEyTU"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "GXKy0q",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": symbol,
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1716166800,
                                    "offset": 0,
                                    "price": 12.4
                                }
                            ],
                            "zorder": -50020,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "Pcorakl508xl"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "3P9Pnx",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": symbol,
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1711674000,
                                    "offset": 0,
                                    "price": 12.93
                                }
                            ],
                            "zorder": -50010,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "NYVMQq4cUmnp"
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "a04Lx9",
                            "state": {
                                "linecolor": "rgba(41, 98, 255, 0.5)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "textcolor": "#2962FF",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "symbolStateVersion": 2,
                                "zOrderVersion": 2,
                                "visible": true,
                                "frozen": false,
                                "symbol": symbol,
                                "currencyId": null,
                                "unitId": null,
                                "title": "",
                                "text": "",
                                "interval": "1D",
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "points": [
                                {
                                    "time_t": 1692061200,
                                    "offset": 0,
                                    "price": 14.09
                                }
                            ],
                            "zorder": -50005,
                            "ownerSource": "_seriesId",
                            "isSelectionEnabled": true,
                            "userEditEnabled": true,
                            "linkKey": "1u60xoVnmZOo"
                        },
                        {
                            "type": "Study",
                            "id": "foAR6r",
                            "state": {
                                "inputs": {
                                    "length": 5,
                                    "source": "close",
                                    "offset": 0,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2196f3",
                                        "title": "plot_0"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#0496ff",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -10000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "length",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "source",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "offset",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0
                                        }
                                    },
                                    "inputs": {
                                        "symbol": "",
                                        "length": 9,
                                        "source": "close",
                                        "offset": 0,
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average",
                                "format": {
                                    "type": "inherit"
                                },
                                "symbolSource": {
                                    "type": "symbolInputSymbolSource",
                                    "inputId": "symbol"
                                },
                                "description_localized": "Moving Average",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "crzDP7",
                            "state": {
                                "inputs": {
                                    "length": 10,
                                    "source": "close",
                                    "offset": 0,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2157f3",
                                        "title": "plot_0"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#044bff",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -20000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "length",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "source",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "offset",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0
                                        }
                                    },
                                    "inputs": {
                                        "symbol": "",
                                        "length": 9,
                                        "source": "close",
                                        "offset": 0,
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average",
                                "format": {
                                    "type": "inherit"
                                },
                                "symbolSource": {
                                    "type": "symbolInputSymbolSource",
                                    "inputId": "symbol"
                                },
                                "description_localized": "Moving Average",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "OnapLy",
                            "state": {
                                "inputs": {
                                    "length": 20,
                                    "source": "close",
                                    "offset": 0,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2a21f3",
                                        "title": "plot_0"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#0904ff",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -30000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "length",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "source",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "offset",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0
                                        }
                                    },
                                    "inputs": {
                                        "symbol": "",
                                        "length": 9,
                                        "source": "close",
                                        "offset": 0,
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average",
                                "format": {
                                    "type": "inherit"
                                },
                                "symbolSource": {
                                    "type": "symbolInputSymbolSource",
                                    "inputId": "symbol"
                                },
                                "description_localized": "Moving Average",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "KxssJN",
                            "state": {
                                "inputs": {
                                    "length": 60,
                                    "source": "close",
                                    "offset": 0,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#6921f3",
                                        "title": "plot_0"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#5404ff",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -40000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "length",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "source",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "offset",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0
                                        }
                                    },
                                    "inputs": {
                                        "symbol": "",
                                        "length": 9,
                                        "source": "close",
                                        "offset": 0,
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average",
                                "format": {
                                    "type": "inherit"
                                },
                                "symbolSource": {
                                    "type": "symbolInputSymbolSource",
                                    "inputId": "symbol"
                                },
                                "description_localized": "Moving Average",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "CXWcPw",
                            "state": {
                                "inputs": {
                                    "in_0": 20,
                                    "in_1": 2
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#ff6d00",
                                        "title": "plot_0"
                                    },
                                    "plot_1": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(0, 0, 0, 0.2)",
                                        "title": "plot_1"
                                    },
                                    "plot_2": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(0, 0, 0, 0.2)",
                                        "title": "plot_2"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "rgba(33, 150, 243, 0.0955)",
                                        "transparency": 95,
                                        "visible": true
                                    }
                                },
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -50000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "length",
                                        "defval": 20,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "mult",
                                        "defval": 2,
                                        "type": "float",
                                        "min": 0.001,
                                        "max": 50,
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_1",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_2",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#FF6D00"
                                        },
                                        "plot_1": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "plot_2": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        }
                                    },
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#2196F3",
                                            "transparency": 95,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 20,
                                        "in_1": 2
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Median",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_1": {
                                        "title": "Upper",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_2": {
                                        "title": "Lower",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Bollinger Bands",
                                "shortDescription": "BB",
                                "is_price_study": true,
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "plot_1",
                                        "objBId": "plot_2",
                                        "type": "plot_plot",
                                        "title": "Plots Background"
                                    }
                                ],
                                "id": "Bollinger Bands@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Bollinger Bands",
                                "format": {
                                    "type": "inherit"
                                },
                                "description_localized": "布林帶",
                                "shortId": "Bollinger Bands",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Bollinger Bands@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "TNZvAh",
                            "state": {
                                "inputs": {
                                    "in_0": 60,
                                    "in_1": 130
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 4,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(233, 30, 99, 0.5)",
                                        "title": "plot_0"
                                    },
                                    "plot_1": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 4,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(67, 160, 71, 0.5)",
                                        "title": "plot_1"
                                    },
                                    "plot_2": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 4,
                                        "plottype": 6,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(41, 98, 255, 1)",
                                        "title": "plot_2"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -60000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Short",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "hideWhenPlotsHidden": [
                                            "plot_0",
                                            "plot_2"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "Long",
                                        "defval": 26,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "hideWhenPlotsHidden": [
                                            "plot_1",
                                            "plot_2"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_1",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_2",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#FF6D00"
                                        },
                                        "plot_1": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#43A047"
                                        },
                                        "plot_2": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 4,
                                            "plottype": 3,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 9,
                                        "in_1": 26
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Short",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_1": {
                                        "title": "Long",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_2": {
                                        "title": "Crosses",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "EMA Cross",
                                "shortDescription": "EMA Cross",
                                "is_price_study": true,
                                "id": "EMA Cross@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "EMA Cross",
                                "format": {
                                    "type": "inherit"
                                },
                                "description_localized": "EMA 交叉",
                                "shortId": "EMA Cross",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "EMA Cross@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        }
                    ],
                    "mainSourceId": "_seriesId",
                    "stretchFactor": 2827.1667492638467,
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "RXHaJLPmE7wi",
                                "m_priceRange": null,
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true,
                                "logFormula": {
                                    "logicalOffset": 6,
                                    "coordOffset": 0.000001
                                },
                                "hasCalculatedPriceRange": true
                            },
                            "sources": [
                                "1hHhN9",
                                "CZeSeD",
                                "fyY2mO",
                                "KyAxPC",
                                "hp2Kn2",
                                "RBEjmY",
                                "PvlWfT",
                                "KFK62e",
                                "GXKy0q",
                                "3P9Pnx",
                                "a04Lx9",
                                "_seriesId",
                                "foAR6r",
                                "crzDP7",
                                "OnapLy",
                                "KxssJN",
                                "CXWcPw",
                                "TNZvAh"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "priceScaleRatio": null,
                    "isCollapsed": false
                },
                {
                    "sources": [
                        {
                            "type": "study_Volume",
                            "id": "dIhoW4",
                            "state": {
                                "inputs": {
                                    "showMA": false,
                                    "volumeMA": "SMA",
                                    "length": 20,
                                    "col_prev_close": false,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "vol": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 50,
                                        "color": "#33cc33",
                                        "title": "vol"
                                    },
                                    "vol_ma": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2196f3",
                                        "title": "vol_ma"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2196f3",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {
                                    "volumePalette": {
                                        "colors": {
                                            "0": {
                                                "color": "rgba(242, 54, 69, 0.5)",
                                                "width": 1,
                                                "style": 0
                                            },
                                            "1": {
                                                "color": "rgba(76, 175, 80, 0.5)",
                                                "width": 1,
                                                "style": 0
                                            }
                                        }
                                    }
                                },
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -10000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {
                                    "volumePalette": {
                                        "colors": {
                                            "0": {
                                                "name": "Falling"
                                            },
                                            "1": {
                                                "name": "Growing"
                                            }
                                        }
                                    }
                                },
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "showMA",
                                        "name": "show MA",
                                        "defval": false,
                                        "type": "bool",
                                        "isHidden": true,
                                        "display": 0
                                    },
                                    {
                                        "id": "length",
                                        "name": "MA Length",
                                        "defval": 20,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "hideWhenPlotsHidden": [
                                            "vol_ma"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "volumeMA",
                                        "name": "Volume MA",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "volumeMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "defval": false,
                                        "id": "col_prev_close",
                                        "name": "Color based on previous close",
                                        "type": "bool",
                                        "display": 0
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "vol",
                                        "type": "line"
                                    },
                                    {
                                        "id": "volumePalette",
                                        "palette": "volumePalette",
                                        "target": "vol",
                                        "type": "colorer"
                                    },
                                    {
                                        "id": "vol_ma",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "vol": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 5,
                                            "trackPrice": false,
                                            "transparency": 50,
                                            "color": "#000080"
                                        },
                                        "vol_ma": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        }
                                    },
                                    "palettes": {
                                        "volumePalette": {
                                            "colors": {
                                                "0": {
                                                    "color": "#F7525F",
                                                    "width": 1,
                                                    "style": 0
                                                },
                                                "1": {
                                                    "color": "#22AB94",
                                                    "width": 1,
                                                    "style": 0
                                                }
                                            }
                                        }
                                    },
                                    "inputs": {
                                        "showMA": false,
                                        "volumeMA": "SMA",
                                        "length": 20,
                                        "col_prev_close": false,
                                        "symbol": "",
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "vol": {
                                        "title": "Volume",
                                        "histogramBase": 0
                                    },
                                    "vol_ma": {
                                        "title": "Volume MA",
                                        "histogramBase": 0
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0
                                    }
                                },
                                "description": "Volume",
                                "shortDescription": "Volume",
                                "is_price_study": false,
                                "id": "Volume@tv-basicstudies-1",
                                "format": {
                                    "type": "volume"
                                },
                                "description_localized": "成交量",
                                "shortId": "Volume",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Volume@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        }
                    ],
                    "mainSourceId": "dIhoW4",
                    "stretchFactor": 608.7408808668156,
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "0YBtKFXwBHMe",
                                "m_priceRange": null,
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true,
                                "logFormula": {
                                    "logicalOffset": 4,
                                    "coordOffset": 0.0001
                                },
                                "hasCalculatedPriceRange": true
                            },
                            "sources": [
                                "dIhoW4"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "priceScaleRatio": null,
                    "isCollapsed": false
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "g96nXH",
                            "state": {
                                "inputs": {
                                    "in_0": 14,
                                    "in_1": 3,
                                    "in_2": 3
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2196f3",
                                        "title": "plot_0"
                                    },
                                    "plot_1": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#ff6d00",
                                        "title": "plot_1"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 80
                                    },
                                    "1": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 20
                                    }
                                },
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#2196F3",
                                        "transparency": 90,
                                        "visible": true
                                    }
                                },
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -10000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "%K Length",
                                        "defval": 14,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "%K Smoothing",
                                        "defval": 1,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "%D Smoothing",
                                        "defval": 3,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_1",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "plot_1": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#FF6D00"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 80
                                        },
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 20
                                        }
                                    ],
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#2196F3",
                                            "transparency": 90,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 14,
                                        "in_1": 1,
                                        "in_2": 3
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "%K",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "zorder": 1.1
                                    },
                                    "plot_1": {
                                        "title": "%D",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "zorder": 1.11
                                    }
                                },
                                "description": "Stochastic",
                                "shortDescription": "Stoch",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "UpperLimit",
                                        "zorder": -1.1
                                    },
                                    {
                                        "id": "hline_1",
                                        "name": "LowerLimit",
                                        "zorder": -1.11
                                    }
                                ],
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background",
                                        "zorder": -2
                                    }
                                ],
                                "id": "Stochastic@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Stochastic",
                                "format": {
                                    "precision": 2,
                                    "type": "price"
                                },
                                "usePlotsZOrder": true,
                                "description_localized": "隨機指標",
                                "shortId": "Stochastic",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Stochastic@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "8YVjOJ",
                            "state": {
                                "inputs": {
                                    "length": 14,
                                    "smoothingLine": "SMA",
                                    "smoothingLength": 14
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#7e57c2",
                                        "title": "plot_0"
                                    },
                                    "smoothedMA": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#0496ff",
                                        "title": "smoothedMA"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 70,
                                        "zorder": -1.1
                                    },
                                    "1": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 50,
                                        "zorder": -1.11
                                    },
                                    "2": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 30,
                                        "zorder": -1.111
                                    }
                                },
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#7E57C2",
                                        "transparency": 90,
                                        "visible": true
                                    }
                                },
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -20000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "length",
                                        "name": "Length",
                                        "defval": 14,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLine",
                                        "name": "Smoothing Line",
                                        "defval": "SMA",
                                        "type": "text",
                                        "options": [
                                            "SMA",
                                            "EMA",
                                            "WMA"
                                        ],
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "smoothingLength",
                                        "name": "Smoothing Length",
                                        "defval": 14,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000,
                                        "hideWhenPlotsHidden": [
                                            "smoothedMA"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "smoothedMA",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#7E57C2"
                                        },
                                        "smoothedMA": {
                                            "display": 0,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 70,
                                            "zorder": -1.1
                                        },
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 50,
                                            "zorder": -1.11
                                        },
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 30,
                                            "zorder": -1.111
                                        }
                                    ],
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#7E57C2",
                                            "transparency": 90,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "length": 14,
                                        "smoothingLine": "SMA",
                                        "smoothingLength": 14
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "zorder": 1
                                    },
                                    "smoothedMA": {
                                        "title": "Smoothed MA",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "zorder": 2
                                    }
                                },
                                "description": "Relative Strength Index",
                                "shortDescription": "RSI",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "UpperLimit",
                                        "zorder": -1.1
                                    },
                                    {
                                        "id": "hline_2",
                                        "name": "MiddleLimit",
                                        "zorder": -1.11
                                    },
                                    {
                                        "id": "hline_1",
                                        "name": "LowerLimit",
                                        "zorder": -1.111
                                    }
                                ],
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background",
                                        "zorder": -2
                                    }
                                ],
                                "id": "Relative Strength Index@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Relative Strength Index",
                                "format": {
                                    "precision": 2,
                                    "type": "price"
                                },
                                "usePlotsZOrder": true,
                                "description_localized": "相對強弱指標",
                                "shortId": "Relative Strength Index",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Relative Strength Index@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        }
                    ],
                    "mainSourceId": "g96nXH",
                    "stretchFactor": 796.0632023503997,
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "vKdShJfGtB3J",
                                "m_priceRange": null,
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true,
                                "logFormula": {
                                    "logicalOffset": 4,
                                    "coordOffset": 0.0001
                                },
                                "hasCalculatedPriceRange": true
                            },
                            "sources": [
                                "g96nXH",
                                "8YVjOJ"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "priceScaleRatio": null,
                    "isCollapsed": false
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "Y7KW99",
                            "state": {
                                "inputs": {
                                    "in_0": 60,
                                    "in_1": 130,
                                    "in_3": "close",
                                    "in_2": 9,
                                    "symbol": ""
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#ff5252",
                                        "title": "plot_0"
                                    },
                                    "plot_1": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#2196f3",
                                        "title": "plot_1"
                                    },
                                    "plot_2": {
                                        "display": 0,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "#ff6d00",
                                        "title": "plot_2"
                                    }
                                },
                                "bands": {},
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {
                                    "palette_0": {
                                        "colors": {
                                            "0": {
                                                "color": "#22AB94",
                                                "width": 1,
                                                "style": 0
                                            },
                                            "1": {
                                                "color": "#ACE5DC",
                                                "width": 1,
                                                "style": 0
                                            },
                                            "2": {
                                                "color": "#FCCBCD",
                                                "width": 1,
                                                "style": 0
                                            },
                                            "3": {
                                                "color": "#FF5252",
                                                "width": 1,
                                                "style": 0
                                            }
                                        }
                                    }
                                },
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -10000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {
                                    "palette_0": {
                                        "colors": {
                                            "0": {
                                                "name": "Color 0"
                                            },
                                            "1": {
                                                "name": "Color 1"
                                            },
                                            "2": {
                                                "name": "Color 2"
                                            },
                                            "3": {
                                                "name": "Color 3"
                                            }
                                        }
                                    }
                                },
                                "inputs": [
                                    {
                                        "id": "symbol",
                                        "name": "Other Symbol",
                                        "defval": "",
                                        "type": "symbol",
                                        "optional": true,
                                        "isHidden": false,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_0",
                                        "name": "fastLength",
                                        "defval": 12,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "slowLength",
                                        "defval": 26,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_3",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "signalLength",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 50,
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_1",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_2",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_3",
                                        "palette": "palette_0",
                                        "target": "plot_0",
                                        "type": "colorer"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 5,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#FF5252"
                                        },
                                        "plot_1": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        },
                                        "plot_2": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#FF6D00"
                                        }
                                    },
                                    "palettes": {
                                        "palette_0": {
                                            "colors": {
                                                "0": {
                                                    "color": "#22AB94",
                                                    "width": 1,
                                                    "style": 0
                                                },
                                                "1": {
                                                    "color": "#ACE5DC",
                                                    "width": 1,
                                                    "style": 0
                                                },
                                                "2": {
                                                    "color": "#FCCBCD",
                                                    "width": 1,
                                                    "style": 0
                                                },
                                                "3": {
                                                    "color": "#FF5252",
                                                    "width": 1,
                                                    "style": 0
                                                }
                                            }
                                        }
                                    },
                                    "inputs": {
                                        "symbol": "",
                                        "in_0": 12,
                                        "in_1": 26,
                                        "in_3": "close",
                                        "in_2": 9
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Histogram",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_1": {
                                        "title": "MACD",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_2": {
                                        "title": "Signal",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "MACD",
                                "shortDescription": "MACD",
                                "is_price_study": false,
                                "id": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "MACD",
                                "format": {
                                    "type": "inherit"
                                },
                                "symbolSource": {
                                    "type": "symbolInputSymbolSource",
                                    "inputId": "symbol"
                                },
                                "description_localized": "平滑異同移動平均線(MACD)",
                                "shortId": "Moving Average Convergence/Divergence",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        }
                    ],
                    "mainSourceId": "Y7KW99",
                    "stretchFactor": 725.498824347389,
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "nOr8yhEb3w0Q",
                                "m_priceRange": null,
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true,
                                "logFormula": {
                                    "logicalOffset": 4,
                                    "coordOffset": 0.0001
                                },
                                "hasCalculatedPriceRange": true
                            },
                            "sources": [
                                "Y7KW99"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "priceScaleRatio": null,
                    "isCollapsed": false
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "tsyy67",
                            "state": {
                                "inputs": {
                                    "in_0": 30,
                                    "in_1": "close"
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(242, 54, 69, 0.5143)",
                                        "title": "plot_0"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 0
                                    }
                                },
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -10000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 10,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 0
                                        }
                                    ],
                                    "inputs": {
                                        "in_0": 10,
                                        "in_1": "close"
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Mom",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "isHidden": false,
                                        "zorder": 0
                                    }
                                },
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "Zero",
                                        "zorder": -1
                                    }
                                ],
                                "id": "Momentum@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Momentum",
                                "format": {
                                    "type": "inherit"
                                },
                                "usePlotsZOrder": true,
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        },
                        {
                            "type": "Study",
                            "id": "84OpdV",
                            "state": {
                                "inputs": {
                                    "in_0": 120,
                                    "in_1": "close"
                                },
                                "styles": {
                                    "plot_0": {
                                        "display": 15,
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 0,
                                        "color": "rgba(76, 175, 80, 0.5143)",
                                        "title": "plot_0"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#787B86",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 0
                                    }
                                },
                                "graphics": {},
                                "ohlcPlots": {},
                                "palettes": {},
                                "filledAreasStyle": {},
                                "filledAreas": {},
                                "visible": true,
                                "showLegendValues": true,
                                "showLabelsOnPriceScale": true,
                                "precision": "default",
                                "parentSources": {},
                                "intervalsVisibilities": {
                                    "ticks": true,
                                    "seconds": true,
                                    "secondsFrom": 1,
                                    "secondsTo": 59,
                                    "minutes": true,
                                    "minutesFrom": 1,
                                    "minutesTo": 59,
                                    "hours": true,
                                    "hoursFrom": 1,
                                    "hoursTo": 24,
                                    "days": true,
                                    "daysFrom": 1,
                                    "daysTo": 366,
                                    "weeks": true,
                                    "weeksFrom": 1,
                                    "weeksTo": 52,
                                    "months": true,
                                    "monthsFrom": 1,
                                    "monthsTo": 12,
                                    "ranges": true
                                }
                            },
                            "zorder": -20000,
                            "ownFirstValue": null,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 10,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000,
                                        "display": 15
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "Source",
                                        "defval": "close",
                                        "type": "source",
                                        "options": [
                                            "open",
                                            "high",
                                            "low",
                                            "close",
                                            "hl2",
                                            "hlc3",
                                            "ohlc4"
                                        ],
                                        "display": 15
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "display": 15,
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 0,
                                            "color": "#2196F3"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#787B86",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 0
                                        }
                                    ],
                                    "inputs": {
                                        "in_0": 10,
                                        "in_1": "close"
                                    }
                                },
                                "_metainfoVersion": 53,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Mom",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "isHidden": false,
                                        "zorder": 0
                                    }
                                },
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "Zero",
                                        "zorder": -1
                                    }
                                ],
                                "id": "Momentum@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Momentum",
                                "format": {
                                    "type": "inherit"
                                },
                                "usePlotsZOrder": true,
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": 1,
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "_serverMetaInfoVersion": 52
                            }
                        }
                    ],
                    "mainSourceId": "tsyy67",
                    "stretchFactor": 642.530343171549,
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "iS0L2O6mxvS0",
                                "m_priceRange": null,
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true,
                                "logFormula": {
                                    "logicalOffset": 4,
                                    "coordOffset": 0.0001
                                },
                                "hasCalculatedPriceRange": true
                            },
                            "sources": [
                                "tsyy67",
                                "84OpdV"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "priceScaleRatio": null,
                    "isCollapsed": false
                }
            ],
            "timeScale": {
                "m_barSpacing": 12.152024331354763,
                "m_rightOffset": 10,
                "rightOffsetPercentage": 5,
                "usePercentageRightOffset": false
            },
            "chartProperties": {
                "paneProperties": {
                    "backgroundType": "solid",
                    "background": "#ffffff",
                    "backgroundGradientStartColor": "#ffffff",
                    "backgroundGradientEndColor": "#ffffff",
                    "gridLinesMode": "both",
                    "vertGridProperties": {
                        "color": "rgba(42, 46, 57, 0.06)"
                    },
                    "horzGridProperties": {
                        "color": "rgba(42, 46, 57, 0.06)"
                    },
                    "crossHairProperties": {
                        "color": "#9598A1",
                        "style": 2,
                        "transparency": 0,
                        "width": 1
                    },
                    "topMargin": 10,
                    "bottomMargin": 10,
                    "axisProperties": {
                        "autoScale": true,
                        "autoScaleDisabled": false,
                        "lockScale": false,
                        "percentage": false,
                        "percentageDisabled": false,
                        "indexedTo100": false,
                        "log": false,
                        "logDisabled": false,
                        "alignLabels": true,
                        "isInverted": false
                    },
                    "legendProperties": {
                        "showStudyArguments": true,
                        "showStudyTitles": true,
                        "showStudyValues": true,
                        "showSeriesTitle": true,
                        "showSeriesOHLC": true,
                        "showLegend": true,
                        "showLastDayChange": false,
                        "showBarChange": true,
                        "showVolume": false,
                        "showBackground": true,
                        "showPriceSource": true,
                        "backgroundTransparency": 50,
                        "showLogo": true
                    },
                    "separatorColor": "#E0E3EB"
                },
                "scalesProperties": {
                    "backgroundColor": "#ffffff",
                    "lineColor": "rgba(42, 46, 57, 0)",
                    "textColor": "#131722",
                    "fontSize": 12,
                    "scaleSeriesOnly": false,
                    "showSeriesLastValue": true,
                    "seriesLastValueMode": 1,
                    "showSeriesPrevCloseValue": false,
                    "showStudyLastValue": false,
                    "showSymbolLabels": false,
                    "showStudyPlotLabels": false,
                    "showBidAskLabels": false,
                    "showPrePostMarketPriceLabel": true,
                    "showFundamentalNameLabel": false,
                    "showFundamentalLastValue": true,
                    "barSpacing": 6,
                    "axisHighlightColor": "rgba(41, 98, 255, 0.25)",
                    "axisLineToolLabelBackgroundColorCommon": "#2962FF",
                    "axisLineToolLabelBackgroundColorActive": "#143EB3",
                    "showPriceScaleCrosshairLabel": true,
                    "showTimeScaleCrosshairLabel": true,
                    "crosshairLabelBgColorLight": "#131722",
                    "crosshairLabelBgColorDark": "#363A45"
                },
                "chartEventsSourceProperties": {
                    "visible": true,
                    "futureOnly": true,
                    "breaks": {
                        "color": "#555555",
                        "visible": false,
                        "style": 2,
                        "width": 1
                    }
                },
                "tradingProperties": {
                    "showPositions": true,
                    "positionPL": {
                        "visibility": true,
                        "display": 0
                    },
                    "bracketsPL": {
                        "visibility": true,
                        "display": 0
                    },
                    "showOrders": true,
                    "showExecutions": true,
                    "showExecutionsLabels": false,
                    "showReverse": true,
                    "horizontalAlignment": 2,
                    "extendLeft": true,
                    "lineLength": 5,
                    "lineWidth": 1,
                    "lineStyle": 0
                },
                "priceScaleSelectionStrategyName": "auto"
            },
            "sessions": {
                "properties": {
                    "graphics": {
                        "backgrounds": {
                            "outOfSession": {
                                "color": "#2962FF",
                                "transparency": 92,
                                "visible": false
                            },
                            "preMarket": {
                                "color": "#FF9800",
                                "transparency": 92,
                                "visible": false
                            },
                            "postMarket": {
                                "color": "#2962FF",
                                "transparency": 92,
                                "visible": false
                            }
                        },
                        "vertlines": {
                            "sessBreaks": {
                                "color": "#4985e7",
                                "style": 2,
                                "visible": false,
                                "width": 1
                            }
                        }
                    }
                }
            },
            "version": 3,
            "timezone": "Asia/Taipei",
            "shouldBeSavedEvenIfHidden": true,
            "linkingGroup": null,
            "lineToolsGroups": {
                "groups": []
            },
            "chartId": "1"
        }
    ],
    "symbolLock": 0,
    "intervalLock": 0,
    "trackTimeLock": 0,
    "dateRangeLock": 0,
    "crosshairLock": 1,
    "layoutsSizes": {
        "s": [
            {
                "percent": 1
            }
        ]
    }
}

window.onload = (function() {
    console.log(window.tvWidget);
    window.tvWidget.load(layoutData);
});
