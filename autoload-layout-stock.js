// ==UserScript==
// @name         Auto Load Layout Data (for Stock)
// @namespace    AlexCoding4Fun
// @version      1.0.0
// @description  A lazy script to auto load TradingView layout data
// @author       Alex Lin
// @match        https://histock.tw/stock/tv/tvchart.aspx
// @downloadURL  https://raw.githubusercontent.com/chiapon/user-scripts/refs/heads/main/autoload-layout-stock.js
// @updateURL    https://raw.githubusercontent.com/chiapon/user-scripts/refs/heads/main/autoload-layout-stock.js
// @grant        none
// ==/UserScript==

const layoutData = {
    "layout": "s",
    "charts": [
        {
            "panes": [
                {
                    "sources": [
                        {
                            "type": "MainSeries",
                            "id": "J2MJNl",
                            "state": {
                                "style": 1,
                                "esdShowDividends": true,
                                "esdShowSplits": true,
                                "esdShowEarnings": true,
                                "esdShowBreaks": false,
                                "esdBreaksStyle": {
                                    "color": "rgba( 235, 77, 92, 1)",
                                    "style": 2,
                                    "width": 1
                                },
                                "esdFlagSize": 2,
                                "showCountdown": false,
                                "showInDataWindow": true,
                                "visible": true,
                                "showPriceLine": false,
                                "priceLineWidth": 1,
                                "priceLineColor": "",
                                "baseLineColor": "#B2B5BE",
                                "showPrevClosePriceLine": false,
                                "prevClosePriceLineWidth": 1,
                                "prevClosePriceLineColor": "rgba( 85, 85, 85, 1)",
                                "minTick": "100",
                                "extendedHours": false,
                                "sessVis": false,
                                "statusViewStyle": {
                                    "fontSize": 16,
                                    "showExchange": true,
                                    "showInterval": true,
                                    "symbolTextSource": "description"
                                },
                                "candleStyle": {
                                    "upColor": "rgba(106, 168, 79, 1)",
                                    "downColor": "rgba(204, 0, 0, 1)",
                                    "drawWick": true,
                                    "drawBorder": false,
                                    "borderColor": "#378658",
                                    "borderUpColor": "rgba(56, 118, 29, 1)",
                                    "borderDownColor": "rgba(204, 0, 0, 1)",
                                    "wickColor": "#737375",
                                    "wickUpColor": "rgba(106, 168, 79, 1)",
                                    "wickDownColor": "rgba(204, 0, 0, 1)",
                                    "barColorsOnPrevClose": false
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
                                    "wickUpColor": "#26a69a",
                                    "wickDownColor": "#ef5350"
                                },
                                "haStyle": {
                                    "upColor": "#d75442",
                                    "downColor": "#6ba583",
                                    "drawWick": true,
                                    "drawBorder": true,
                                    "borderColor": "rgba( 55, 134, 88, 1)",
                                    "borderUpColor": "#26a69a",
                                    "borderDownColor": "#ef5350",
                                    "wickColor": "rgba( 115, 115, 117, 1)",
                                    "wickUpColor": "#26a69a",
                                    "wickDownColor": "#ef5350",
                                    "showRealLastPrice": false,
                                    "barColorsOnPrevClose": false,
                                    "inputs": {},
                                    "inputInfo": {}
                                },
                                "barStyle": {
                                    "upColor": "#d75442",
                                    "downColor": "#6ba583",
                                    "barColorsOnPrevClose": false,
                                    "dontDrawOpen": false,
                                    "thinBars": true
                                },
                                "hiloStyle": {
                                    "color": "#2196f3",
                                    "showBorders": true,
                                    "borderColor": "#2196f3",
                                    "showLabels": true,
                                    "labelColor": "#2196f3",
                                    "fontSize": 7
                                },
                                "lineStyle": {
                                    "color": "#2196f3",
                                    "linestyle": 0,
                                    "linewidth": 3,
                                    "priceSource": "close",
                                    "styleType": 2
                                },
                                "areaStyle": {
                                    "color1": "rgba(33, 150, 243, 0.05)",
                                    "color2": "rgba(33, 150, 243, 0.05)",
                                    "linecolor": "#2196f3",
                                    "linestyle": 0,
                                    "linewidth": 3,
                                    "priceSource": "close",
                                    "transparency": 95
                                },
                                "renkoStyle": {
                                    "upColor": "#26a69a",
                                    "downColor": "#ef5350",
                                    "borderUpColor": "#26a69a",
                                    "borderDownColor": "#ef5350",
                                    "upColorProjection": "rgba( 169, 220, 195, 1)",
                                    "downColorProjection": "rgba( 245, 166, 174, 1)",
                                    "borderUpColorProjection": "rgba( 169, 220, 195, 1)",
                                    "borderDownColorProjection": "rgba( 245, 166, 174, 1)",
                                    "wickUpColor": "#26a69a",
                                    "wickDownColor": "#ef5350",
                                    "inputs": {
                                        "source": "close",
                                        "boxSize": 3,
                                        "style": "ATR",
                                        "atrLength": 14,
                                        "wicks": true
                                    },
                                    "inputInfo": {
                                        "source": {
                                            "name": "Source"
                                        },
                                        "boxSize": {
                                            "name": "Box size"
                                        },
                                        "style": {
                                            "name": "Style"
                                        },
                                        "atrLength": {
                                            "name": "ATR Length"
                                        },
                                        "wicks": {
                                            "name": "Wicks"
                                        }
                                    }
                                },
                                "pbStyle": {
                                    "upColor": "#26a69a",
                                    "downColor": "#ef5350",
                                    "borderUpColor": "#26a69a",
                                    "borderDownColor": "#ef5350",
                                    "upColorProjection": "rgba( 169, 220, 195, 1)",
                                    "downColorProjection": "rgba( 245, 166, 174, 1)",
                                    "borderUpColorProjection": "rgba( 169, 220, 195, 1)",
                                    "borderDownColorProjection": "rgba( 245, 166, 174, 1)",
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
                                    "upColor": "#26a69a",
                                    "downColor": "#ef5350",
                                    "upColorProjection": "rgba( 169, 220, 195, 1)",
                                    "downColorProjection": "rgba( 245, 166, 174, 1)",
                                    "inputs": {
                                        "source": "close",
                                        "style": "ATR",
                                        "atrLength": 14,
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
                                            "name": "ATR Length"
                                        },
                                        "reversalAmount": {
                                            "name": "Reversal amount"
                                        }
                                    }
                                },
                                "pnfStyle": {
                                    "upColor": "#26a69a",
                                    "downColor": "#ef5350",
                                    "upColorProjection": "rgba( 169, 220, 195, 1)",
                                    "downColorProjection": "rgba( 245, 166, 174, 1)",
                                    "inputs": {
                                        "sources": "Close",
                                        "reversalAmount": 3,
                                        "boxSize": 1,
                                        "style": "ATR",
                                        "atrLength": 14
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
                                            "name": "ATR Length"
                                        }
                                    }
                                },
                                "baselineStyle": {
                                    "baselineColor": "rgba( 117, 134, 150, 1)",
                                    "topFillColor1": "rgba( 38, 166, 154, 0.05)",
                                    "topFillColor2": "rgba( 38, 166, 154, 0.05)",
                                    "bottomFillColor1": "rgba( 239, 83, 80, 0.05)",
                                    "bottomFillColor2": "rgba( 239, 83, 80, 0.05)",
                                    "topLineColor": "rgba( 38, 166, 154, 1)",
                                    "bottomLineColor": "rgba( 239, 83, 80, 1)",
                                    "topLineWidth": 3,
                                    "bottomLineWidth": 3,
                                    "priceSource": "close",
                                    "transparency": 50,
                                    "baseLevelPercentage": 50
                                },
                                "rangeStyle": {
                                    "upColor": "#26a69a",
                                    "downColor": "#ef5350",
                                    "thinBars": true,
                                    "upColorProjection": "rgba( 169, 220, 195, 1)",
                                    "downColorProjection": "rgba( 245, 166, 174, 1)",
                                    "inputs": {
                                        "range": 10,
                                        "phantomBars": false
                                    },
                                    "inputInfo": {
                                        "range": {
                                            "name": "Range"
                                        },
                                        "phantomBars": {
                                            "name": "Phantom Bars"
                                        }
                                    }
                                },
                                "symbol": "0000",
                                "shortName": "加權指數(0000)",
                                "timeframe": "",
                                "onWidget": false,
                                "interval": "D",
                                "showSessions": false,
                                "dividendsAdjustment": {},
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
                            },
                            "zorder": 12,
                            "haStyle": {
                                "studyId": "BarSetHeikenAshi@tv-basicstudies-60"
                            },
                            "renkoStyle": {
                                "studyId": "BarSetRenko@tv-prostudies-15"
                            },
                            "pbStyle": {
                                "studyId": "BarSetPriceBreak@tv-prostudies-15"
                            },
                            "kagiStyle": {
                                "studyId": "BarSetKagi@tv-prostudies-15"
                            },
                            "pnfStyle": {
                                "studyId": "BarSetPnF@tv-prostudies-15"
                            },
                            "rangeStyle": {
                                "studyId": "BarSetRange@tv-basicstudies-72"
                            }
                        },
                        {
                            "type": "Study",
                            "id": "U1G4pH",
                            "state": {
                                "styles": {
                                    "vol": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 65,
                                        "visible": true,
                                        "color": "#33cc33",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Volume"
                                    },
                                    "vol_ma": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 4,
                                        "trackPrice": false,
                                        "transparency": 65,
                                        "visible": false,
                                        "color": "#0496ff",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Volume MA"
                                    }
                                },
                                "palettes": {
                                    "volumePalette": {
                                        "colors": {
                                            "0": {
                                                "color": "rgba(76, 175, 80, 0.5013)",
                                                "width": 1,
                                                "style": 0,
                                                "name": "Falling"
                                            },
                                            "1": {
                                                "color": "rgba(244, 67, 54, 0.5013)",
                                                "width": 1,
                                                "style": 0,
                                                "name": "Growing"
                                            }
                                        }
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "showMA": false,
                                    "maLength": 20
                                },
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "vol",
                                        "type": "line"
                                    },
                                    "1": {
                                        "id": "volumePalette",
                                        "palette": "volumePalette",
                                        "target": "vol",
                                        "type": "colorer"
                                    },
                                    "2": {
                                        "id": "vol_ma",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "transparency": 65,
                                "description": "Volume",
                                "shortDescription": "Volume",
                                "is_price_study": false,
                                "id": "Volume@tv-basicstudies",
                                "description_localized": "成交量",
                                "shortId": "Volume",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Volume@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "name": "Volume@tv-basicstudies",
                                "format": {
                                    "type": "volume"
                                },
                                "matchPriority": 2,
                                "matchIndex": 4
                            },
                            "zorder": 11,
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
                                        "id": "showMA",
                                        "name": "show MA",
                                        "defval": false,
                                        "type": "bool"
                                    },
                                    {
                                        "id": "maLength",
                                        "name": "MA Length",
                                        "defval": 20,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "vol": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 5,
                                            "trackPrice": false,
                                            "transparency": 65,
                                            "visible": true,
                                            "color": "#000080"
                                        },
                                        "vol_ma": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 4,
                                            "trackPrice": false,
                                            "transparency": 65,
                                            "visible": false,
                                            "color": "#0496FF"
                                        }
                                    },
                                    "palettes": {
                                        "volumePalette": {
                                            "colors": {
                                                "0": {
                                                    "color": "#eb4d5c",
                                                    "width": 1,
                                                    "style": 0
                                                },
                                                "1": {
                                                    "color": "#53b987",
                                                    "width": 1,
                                                    "style": 0
                                                }
                                            }
                                        }
                                    },
                                    "inputs": {
                                        "showMA": false,
                                        "maLength": 20
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "transparency": 65,
                                "styles": {
                                    "vol": {
                                        "title": "Volume",
                                        "histogramBase": 0
                                    },
                                    "vol_ma": {
                                        "title": "Volume MA",
                                        "histogramBase": 0
                                    }
                                },
                                "description": "Volume",
                                "shortDescription": "Volume",
                                "is_price_study": false,
                                "id": "Volume@tv-basicstudies-1",
                                "description_localized": "成交量",
                                "shortId": "Volume",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Volume@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "name": "Volume@tv-basicstudies",
                                "format": {
                                    "type": "volume"
                                },
                                "matchPriority": 2,
                                "matchIndex": 4
                            }
                        },
                        {
                            "type": "Study",
                            "id": "UKUx8W",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": false,
                                        "color": "#ff0000",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Median"
                                    },
                                    "plot_1": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(0, 0, 255, 0.2022)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Upper"
                                    },
                                    "plot_2": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(0, 0, 255, 0.2022)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Lower"
                                    }
                                },
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#000080",
                                        "transparency": 90,
                                        "visible": true
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 20,
                                    "in_1": 2
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    "1": {
                                        "id": "plot_1",
                                        "type": "line"
                                    },
                                    "2": {
                                        "id": "plot_2",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Bollinger Bands",
                                "shortDescription": "BB",
                                "is_price_study": true,
                                "filledAreas": {
                                    "0": {
                                        "id": "fill_0",
                                        "objAId": "plot_1",
                                        "objBId": "plot_2",
                                        "type": "plot_plot",
                                        "title": "Plots Background"
                                    }
                                },
                                "id": "Bollinger Bands@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Bollinger Bands@tv-basicstudies",
                                "description_localized": "布林線",
                                "shortId": "Bollinger Bands",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Bollinger Bands@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -9,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "length",
                                        "defval": 20,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "mult",
                                        "defval": 2,
                                        "type": "float",
                                        "min": 0.001,
                                        "max": 50
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#FF0000"
                                        },
                                        "plot_1": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        },
                                        "plot_2": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        }
                                    },
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#000080",
                                            "transparency": 90,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 20,
                                        "in_1": 2
                                    }
                                },
                                "_metainfoVersion": 47,
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
                                "name": "Bollinger Bands@tv-basicstudies",
                                "description_localized": "布林線",
                                "shortId": "Bollinger Bands",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Bollinger Bands@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "LineToolRay",
                            "id": "XzSiqG",
                            "state": {
                                "intervalsVisibilities": {
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
                                    "months": true,
                                    "ranges": true
                                },
                                "clonable": true,
                                "linecolor": "rgba(60, 120, 216, 0.33)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "extendLeft": false,
                                "extendRight": true,
                                "leftEnd": 0,
                                "rightEnd": 0,
                                "font": "Verdana",
                                "textcolor": "rgba( 21, 119, 96, 1)",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "alwaysShowStats": false,
                                "showMiddlePoint": false,
                                "showPriceRange": false,
                                "showBarsRange": false,
                                "showDateTimeRange": false,
                                "showDistance": false,
                                "showAngle": false,
                                "statsPosition": 2,
                                "frozen": false,
                                "visible": true,
                                "symbol": "上市:台積電(2330)",
                                "interval": "D",
                                "lastUpdateTime": 0,
                                "_isActualInterval": true,
                                "fixedSize": true
                            },
                            "points": [
                                {
                                    "time_t": 1722819600,
                                    "offset": 0,
                                    "price": 813
                                },
                                {
                                    "time_t": 1730422800,
                                    "offset": 0,
                                    "price": 996
                                }
                            ],
                            "zorder": -1,
                            "linkKey": "3U75L3WTCEuv",
                            "ownerSource": "J2MJNl"
                        },
                        {
                            "type": "Study",
                            "id": "vDJQjT",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(0, 0, 0, 1)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 5,
                                    "in_1": "close",
                                    "in_2": 0
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            },
                            "zorder": -10,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
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
                                        ]
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 9,
                                        "in_1": "close",
                                        "in_2": 0
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "Study",
                            "id": "KSRDOj",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(244, 67, 54, 1)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 10,
                                    "in_1": "close",
                                    "in_2": 0
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            },
                            "zorder": -11,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
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
                                        ]
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 9,
                                        "in_1": "close",
                                        "in_2": 0
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "Study",
                            "id": "C0ry9l",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(255, 152, 0, 1)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 20,
                                    "in_1": "close",
                                    "in_2": 0
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            },
                            "zorder": -12,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
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
                                        ]
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 9,
                                        "in_1": "close",
                                        "in_2": 0
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "Study",
                            "id": "eC4HNJ",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(33, 150, 243, 1)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 60,
                                    "in_1": "close",
                                    "in_2": 0
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            },
                            "zorder": -13,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
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
                                        ]
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "Offset",
                                        "defval": 0,
                                        "type": "integer",
                                        "min": -10000,
                                        "max": 10000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 9,
                                        "in_1": "close",
                                        "in_2": 0
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Moving Average",
                                "shortDescription": "MA",
                                "is_price_study": true,
                                "id": "Moving Average@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Moving Average@tv-basicstudies",
                                "description_localized": "移動平均",
                                "shortId": "Moving Average",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 3,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "LineToolHorzRay",
                            "id": "XHLpUE",
                            "state": {
                                "intervalsVisibilities": {
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
                                    "months": true,
                                    "ranges": true
                                },
                                "clonable": true,
                                "linecolor": "rgba(60, 120, 216, 0.33)",
                                "linewidth": 4,
                                "linestyle": 0,
                                "showPrice": true,
                                "showLabel": false,
                                "font": "Verdana",
                                "textcolor": "rgba( 21, 119, 96, 1)",
                                "fontsize": 12,
                                "bold": false,
                                "italic": false,
                                "horzLabelsAlign": "center",
                                "vertLabelsAlign": "top",
                                "frozen": false,
                                "visible": true,
                                "text": "",
                                "symbol": "上市:台積電(2330)",
                                "interval": "D",
                                "lastUpdateTime": 0,
                                "_isActualInterval": true,
                                "fixedSize": true
                            },
                            "points": [
                                {
                                    "time_t": 1720659600,
                                    "offset": 0,
                                    "price": 1080
                                }
                            ],
                            "zorder": 1,
                            "linkKey": "7uX2JIA9cYU1",
                            "ownerSource": "J2MJNl"
                        },
                        {
                            "type": "study_ScriptWithDataOffset",
                            "id": "txVFLZ",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 2,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(156, 39, 176, 0.6497)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    },
                                    "plot_1": {
                                        "visible": true,
                                        "color": "#0496ff",
                                        "linestyle": 0,
                                        "linewidth": 2,
                                        "plottype": "dataoffset",
                                        "histogramBase": 0,
                                        "transparency": 50,
                                        "trackPrice": false,
                                        "joinPoints": false,
                                        "title": "plot_1"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 5,
                                    "in_1": 10
                                },
                                "color": "rgba( 86, 135, 29, 1)",
                                "linewidth": 2,
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": false,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    "1": {
                                        "id": "plot_1",
                                        "target": "plot_0",
                                        "type": "dataoffset"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Zig Zag",
                                "shortDescription": "ZigZag",
                                "is_price_study": true,
                                "classId": "ScriptWithDataOffset",
                                "id": "ZigZag@tv-basicstudies",
                                "description_localized": "拋物線轉向",
                                "shortId": "ZigZag",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "ZigZag@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "name": "ZigZag@tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -14,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "deviation",
                                        "defval": 5,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 100
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "depth",
                                        "defval": 10,
                                        "type": "integer",
                                        "min": 2,
                                        "max": 1000
                                    }
                                ],
                                "plots": [
                                    {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    {
                                        "id": "plot_1",
                                        "target": "plot_0",
                                        "type": "dataoffset"
                                    }
                                ],
                                "graphics": {},
                                "defaults": {
                                    "styles": {
                                        "plot_0": {
                                            "linestyle": 0,
                                            "linewidth": 2,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#008000"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 5,
                                        "in_1": 10
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Zig Zag",
                                "shortDescription": "ZigZag",
                                "is_price_study": true,
                                "classId": "ScriptWithDataOffset",
                                "id": "ZigZag@tv-basicstudies-1",
                                "description_localized": "拋物線轉向",
                                "shortId": "ZigZag",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "ZigZag@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "name": "ZigZag@tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                }
                            }
                        }
                    ],
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "kxJByIz82S8i",
                                "m_priceRange": {
                                    "m_maxValue": 25224.088077151315,
                                    "m_minValue": 19662.74
                                },
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_height": 512,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true
                            },
                            "sources": [
                                "J2MJNl",
                                "UKUx8W",
                                "XzSiqG",
                                "vDJQjT",
                                "KSRDOj",
                                "C0ry9l",
                                "eC4HNJ",
                                "XHLpUE",
                                "txVFLZ"
                            ]
                        }
                    ],
                    "overlayPriceScales": {
                        "U1G4pH": {
                            "id": "YjTPHGHCzPeJ",
                            "m_priceRange": {
                                "m_maxValue": 6421,
                                "m_minValue": 0
                            },
                            "m_isAutoScale": true,
                            "m_isPercentage": false,
                            "m_isIndexedTo100": false,
                            "m_isLog": false,
                            "m_isLockScale": false,
                            "m_isInverted": false,
                            "m_height": 512,
                            "m_topMargin": 0.75,
                            "m_bottomMargin": 0,
                            "alignLabels": true
                        }
                    },
                    "stretchFactor": 3561.9679276297607,
                    "mainSourceId": "J2MJNl",
                    "priceScaleRatio": null
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "dXDNEk",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(244, 67, 54, 0.5091)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Mom",
                                        "isHidden": false
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 30,
                                    "in_1": "close"
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "id": "Momentum@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Momentum@tv-basicstudies",
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -1,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 10,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                        ]
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#808000"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 10,
                                        "in_1": "close"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Mom",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "isHidden": false
                                    }
                                },
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "id": "Momentum@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Momentum@tv-basicstudies",
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "Study",
                            "id": "CjrjJf",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(76, 175, 80, 0.5282)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Mom",
                                        "isHidden": false
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 120,
                                    "in_1": "close"
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "id": "Momentum@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Momentum@tv-basicstudies",
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -2,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 10,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                        ]
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#808000"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 10,
                                        "in_1": "close"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Mom",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "isHidden": false
                                    }
                                },
                                "description": "Momentum",
                                "shortDescription": "Mom",
                                "is_price_study": false,
                                "id": "Momentum@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Momentum@tv-basicstudies",
                                "description_localized": "動量",
                                "shortId": "Momentum",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Momentum@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            }
                        }
                    ],
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "iVyMPa1QA4gt",
                                "m_priceRange": {
                                    "m_maxValue": 6854.539999999997,
                                    "m_minValue": -3575.2199999999975
                                },
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_height": 88,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true
                            },
                            "sources": [
                                "dXDNEk",
                                "CjrjJf"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "stretchFactor": 612.7392843370667,
                    "mainSourceId": "dXDNEk",
                    "priceScaleRatio": null
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "cvmyGV",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 5,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "#ff0000",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Histogram"
                                    },
                                    "plot_1": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "#0000ff",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "MACD"
                                    },
                                    "plot_2": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "#ff0000",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Signal"
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 12,
                                    "in_1": 26,
                                    "in_3": "close",
                                    "in_2": 9
                                },
                                "palettes": {},
                                "bands": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    "1": {
                                        "id": "plot_1",
                                        "type": "line"
                                    },
                                    "2": {
                                        "id": "plot_2",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "MACD",
                                "shortDescription": "MACD",
                                "is_price_study": false,
                                "id": "Moving Average Convergence/Divergence@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Moving Average Convergence/Divergence@tv-basicstudies",
                                "description_localized": "MACD 平滑異同移動平均線",
                                "shortId": "Moving Average Convergence/Divergence",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -1,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "fastLength",
                                        "defval": 12,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "slowLength",
                                        "defval": 26,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                        ]
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "signalLength",
                                        "defval": 9,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 50
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 1,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#FF0000"
                                        },
                                        "plot_1": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        },
                                        "plot_2": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#FF0000"
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 12,
                                        "in_1": 26,
                                        "in_3": "close",
                                        "in_2": 9
                                    }
                                },
                                "_metainfoVersion": 47,
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
                                "name": "Moving Average Convergence/Divergence@tv-basicstudies",
                                "description_localized": "MACD 平滑異同移動平均線",
                                "shortId": "Moving Average Convergence/Divergence",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            }
                        }
                    ],
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "6oWDtjVUaVhz",
                                "m_priceRange": {
                                    "m_maxValue": 571.4744116575021,
                                    "m_minValue": -553.6193135242938
                                },
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_height": 90,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true
                            },
                            "sources": [
                                "cvmyGV"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "stretchFactor": 626.1540888944737,
                    "mainSourceId": "cvmyGV",
                    "priceScaleRatio": null
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "KYWQiE",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(156, 39, 176, 0.8355)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 70,
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    "1": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 30,
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                },
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#800080",
                                        "transparency": 90,
                                        "visible": true
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 14
                                },
                                "palettes": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Relative Strength Index",
                                "shortDescription": "RSI",
                                "is_price_study": false,
                                "filledAreas": {
                                    "0": {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                },
                                "id": "Relative Strength Index@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Relative Strength Index@tv-basicstudies",
                                "description_localized": "相對強弱指標",
                                "shortId": "Relative Strength Index",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Relative Strength Index@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -1,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "Length",
                                        "defval": 14,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#800080"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 70
                                        },
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 30
                                        }
                                    ],
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#800080",
                                            "transparency": 90,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 14
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Relative Strength Index",
                                "shortDescription": "RSI",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    {
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                ],
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                ],
                                "id": "Relative Strength Index@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Relative Strength Index@tv-basicstudies",
                                "description_localized": "相對強弱指標",
                                "shortId": "Relative Strength Index",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Relative Strength Index@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            }
                        },
                        {
                            "type": "Study",
                            "id": "rJjLy3",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "#0000ff",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "%K"
                                    },
                                    "plot_1": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "#ff0000",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "%D"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 80,
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    "1": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 20,
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                },
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#800080",
                                        "transparency": 75,
                                        "visible": true
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 14,
                                    "in_1": 3,
                                    "in_2": 3
                                },
                                "palettes": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    },
                                    "1": {
                                        "id": "plot_1",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Stochastic",
                                "shortDescription": "Stoch",
                                "is_price_study": false,
                                "filledAreas": {
                                    "0": {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                },
                                "id": "Stochastic@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Stochastic@tv-basicstudies",
                                "description_localized": "KD 隨機指標",
                                "shortId": "Stochastic",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Stochastic@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 1,
                                "matchIndex": 1
                            },
                            "zorder": -2,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "length",
                                        "defval": 14,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
                                    },
                                    {
                                        "id": "in_1",
                                        "name": "smoothK",
                                        "defval": 1,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
                                    },
                                    {
                                        "id": "in_2",
                                        "name": "smoothD",
                                        "defval": 3,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 10000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#0000FF"
                                        },
                                        "plot_1": {
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#FF0000"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 80
                                        },
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 20
                                        }
                                    ],
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#800080",
                                            "transparency": 75,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 14,
                                        "in_1": 1,
                                        "in_2": 3
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "%K",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    },
                                    "plot_1": {
                                        "title": "%D",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Stochastic",
                                "shortDescription": "Stoch",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    {
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                ],
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                ],
                                "id": "Stochastic@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Stochastic@tv-basicstudies",
                                "description_localized": "KD 隨機指標",
                                "shortId": "Stochastic",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Stochastic@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                }
                            }
                        }
                    ],
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "LqBxjvIcZ52K",
                                "m_priceRange": {
                                    "m_maxValue": 97.96958855326977,
                                    "m_minValue": 6.577997343930608
                                },
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_height": 93,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true
                            },
                            "sources": [
                                "KYWQiE",
                                "rJjLy3"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "stretchFactor": 645.084645084645,
                    "mainSourceId": "KYWQiE",
                    "priceScaleRatio": null
                },
                {
                    "sources": [
                        {
                            "type": "Study",
                            "id": "UvmUyc",
                            "state": {
                                "styles": {
                                    "plot_0": {
                                        "linestyle": 0,
                                        "linewidth": 1,
                                        "plottype": 0,
                                        "trackPrice": false,
                                        "transparency": 35,
                                        "visible": true,
                                        "color": "rgba(244, 143, 177, 1)",
                                        "histogramBase": 0,
                                        "joinPoints": false,
                                        "title": "Plot"
                                    }
                                },
                                "bands": {
                                    "0": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": 100,
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    "1": {
                                        "color": "#808080",
                                        "linestyle": 2,
                                        "linewidth": 1,
                                        "visible": true,
                                        "value": -100,
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                },
                                "filledAreasStyle": {
                                    "fill_0": {
                                        "color": "#808000",
                                        "transparency": 90,
                                        "visible": true
                                    }
                                },
                                "precision": "default",
                                "inputs": {
                                    "in_0": 14
                                },
                                "palettes": {},
                                "area": {},
                                "graphics": {},
                                "showInDataWindow": true,
                                "visible": true,
                                "showStudyArguments": true,
                                "plots": {
                                    "0": {
                                        "id": "plot_0",
                                        "type": "line"
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "description": "Commodity Channel Index",
                                "shortDescription": "CCI",
                                "is_price_study": false,
                                "filledAreas": {
                                    "0": {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                },
                                "id": "Commodity Channel Index@tv-basicstudies",
                                "scriptIdPart": "",
                                "name": "Commodity Channel Index@tv-basicstudies",
                                "description_localized": "順勢指標",
                                "shortId": "Commodity Channel Index",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Commodity Channel Index@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                },
                                "matchPriority": 2,
                                "matchIndex": 0
                            },
                            "zorder": -1,
                            "metaInfo": {
                                "palettes": {},
                                "inputs": [
                                    {
                                        "id": "in_0",
                                        "name": "length",
                                        "defval": 20,
                                        "type": "integer",
                                        "min": 1,
                                        "max": 2000
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
                                            "linestyle": 0,
                                            "linewidth": 1,
                                            "plottype": 0,
                                            "trackPrice": false,
                                            "transparency": 35,
                                            "visible": true,
                                            "color": "#808000"
                                        }
                                    },
                                    "bands": [
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": 100
                                        },
                                        {
                                            "color": "#808080",
                                            "linestyle": 2,
                                            "linewidth": 1,
                                            "visible": true,
                                            "value": -100
                                        }
                                    ],
                                    "filledAreasStyle": {
                                        "fill_0": {
                                            "color": "#808000",
                                            "transparency": 90,
                                            "visible": true
                                        }
                                    },
                                    "inputs": {
                                        "in_0": 20
                                    }
                                },
                                "_metainfoVersion": 47,
                                "isTVScript": false,
                                "isTVScriptStub": false,
                                "is_hidden_study": false,
                                "styles": {
                                    "plot_0": {
                                        "title": "Plot",
                                        "histogramBase": 0,
                                        "joinPoints": false
                                    }
                                },
                                "description": "Commodity Channel Index",
                                "shortDescription": "CCI",
                                "is_price_study": false,
                                "bands": [
                                    {
                                        "id": "hline_0",
                                        "name": "UpperLimit"
                                    },
                                    {
                                        "id": "hline_1",
                                        "name": "LowerLimit"
                                    }
                                ],
                                "filledAreas": [
                                    {
                                        "id": "fill_0",
                                        "objAId": "hline_0",
                                        "objBId": "hline_1",
                                        "type": "hline_hline",
                                        "title": "Hlines Background"
                                    }
                                ],
                                "id": "Commodity Channel Index@tv-basicstudies-1",
                                "scriptIdPart": "",
                                "name": "Commodity Channel Index@tv-basicstudies",
                                "description_localized": "順勢指標",
                                "shortId": "Commodity Channel Index",
                                "packageId": "tv-basicstudies",
                                "version": "1",
                                "fullId": "Commodity Channel Index@tv-basicstudies-1",
                                "productId": "tv-basicstudies",
                                "format": {
                                    "type": "price",
                                    "precision": 4
                                }
                            }
                        }
                    ],
                    "leftAxisesState": [],
                    "rightAxisesState": [
                        {
                            "state": {
                                "id": "iBbwhzkEMsS3",
                                "m_priceRange": {
                                    "m_maxValue": 182.59499292783073,
                                    "m_minValue": -407.1309226951134
                                },
                                "m_isAutoScale": true,
                                "m_isPercentage": false,
                                "m_isIndexedTo100": false,
                                "m_isLog": false,
                                "m_isLockScale": false,
                                "m_isInverted": false,
                                "m_height": 80,
                                "m_topMargin": 0.1,
                                "m_bottomMargin": 0.1,
                                "alignLabels": true
                            },
                            "sources": [
                                "UvmUyc"
                            ]
                        }
                    ],
                    "overlayPriceScales": {},
                    "stretchFactor": 554.054054054054,
                    "mainSourceId": "UvmUyc",
                    "priceScaleRatio": null
                }
            ],
            "timeScale": {
                "m_barSpacing": 10.355173947755246,
                "m_rightOffset": 10
            },
            "chartProperties": {
                "paneProperties": {
                    "background": "#ffffff",
                    "gridProperties": {
                        "color": "#e1ecf2",
                        "style": 0
                    },
                    "vertGridProperties": {
                        "color": "#e1ecf2",
                        "style": 0
                    },
                    "horzGridProperties": {
                        "color": "#e1ecf2",
                        "style": 0
                    },
                    "crossHairProperties": {
                        "color": "rgba(117, 134, 150, 1)",
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
                        "showLegend": false,
                        "showBarChange": true,
                        "showOnlyPriceSource": true
                    },
                    "rightOffset": {}
                },
                "scalesProperties": {
                    "backgroundColor": "#ffffff",
                    "lineColor": "#50535E",
                    "textColor": "#50535E",
                    "fontSize": 11,
                    "scaleSeriesOnly": false,
                    "showSeriesLastValue": true,
                    "seriesLastValueMode": 1,
                    "showSeriesPrevCloseValue": false,
                    "showStudyLastValue": false,
                    "showSymbolLabels": false,
                    "showStudyPlotLabels": false,
                    "barSpacing": 6
                },
                "chartEventsSourceProperties": {
                    "visible": true,
                    "futureOnly": true,
                    "breaks": {
                        "color": "rgba(85, 85, 85, 1)",
                        "visible": false,
                        "style": 2,
                        "width": 1
                    }
                },
                "priceScaleSelectionStrategyName": "auto"
            },
            "version": 2,
            "timezone": "Asia/Taipei",
            "sessions": {
                "properties": {
                    "graphics": {
                        "backgrounds": {
                            "inSession": {
                                "color": "#6fa8dc",
                                "transparency": 60,
                                "visible": false
                            },
                            "outOfSession": {
                                "color": "#ffe599",
                                "transparency": 60,
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
            }
        }
    ]
}

window.onload = (function() {
    console.log(window.tvWidget);
    window.tvWidget.load(layoutData);
});

