(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"gap":10,"definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_camera"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"mode":"push","transparencyActive":true,"class":"IconButton","maxWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"borderSize":0},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_camera"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingRight":0,"paddingLeft":0,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"right":"0.6%","minWidth":60,"borderSize":0,"data":{"name":"image button menu"}},{"hfovMin":"150%","thumbnailUrl":"media/panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"url":"media/panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_513B0633_5F11_CEC9_41CC_EE636494F7C5","this.overlay_51EA3F56_5F17_5D4A_41AE_65BB83141EEC"],"label":trans('panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107.label'),"id":"panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107","hfovMax":130,"class":"Panorama","data":{"label":"Salon"},"pitch":0,"hfov":360},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"borderSize":0},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowHorizontalLength":0,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"class":"ViewerArea","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"playbackBarHeadHeight":30,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadShadowVerticalLength":0,"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":1500,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_camera"},{"shadow":false,"borderRadius":0,"textDecoration":"none","width":280,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"maxHeight":50,"class":"Label","fontSize":30,"maxWidth":280,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":280,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"shadow":false,"borderRadius":0,"gap":10,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingBottom":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingRight":0,"paddingLeft":0,"top":"17.26%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":430,"creationPolicy":"inAdvance","layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"class":"Container","maxWidth":85,"minHeight":430,"right":"1.22%","minWidth":85,"borderSize":0,"data":{"name":"--SETTINGS"}},{"itemThumbnailShadowVerticalLength":3,"minWidth":20,"gap":10,"itemMode":"normal","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"rollOverItemLabelFontWeight":"normal","itemLabelFontFamily":"Arial","itemThumbnailShadowOpacity":0.54,"itemLabelHorizontalAlign":"center","paddingTop":10,"propagateClick":false,"itemThumbnailShadowHorizontalLength":3,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"horizontalAlign":"left","itemPaddingRight":3,"itemThumbnailBorderRadius":50,"paddingLeft":20,"itemPaddingLeft":3,"itemOpacity":1,"itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemHorizontalAlign":"center","itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemThumbnailWidth":75,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemThumbnailShadow":true,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowSpread":1,"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemLabelPosition":"bottom","itemPaddingBottom":3,"left":"0.01%","itemLabelGap":9,"itemLabelFontStyle":"normal","class":"ThumbnailList","minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"borderSize":0,"right":"0.12%","itemLabelTextDecoration":"none"},{"hfovMin":"120%","thumbnailUrl":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_50101F93_5F11_5DCA_41C5_391784EA5F16"],"label":trans('panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4.label'),"id":"panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4","hfovMax":130,"class":"Panorama","data":{"label":"Chambre"},"pitch":0,"hfov":360},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"borderSize":0},{"class":"PlayList","items":[{"camera":"this.panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_camera","media":"this.panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_camera","media":"this.panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_camera","media":"this.panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"class":"Image","left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"shadow":false,"borderRadius":0,"gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"top":"14%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"class":"Container","maxWidth":85,"minHeight":320,"right":"0%","minWidth":85,"borderSize":0,"data":{"name":"-button set"}},{"borderRadius":0,"gap":10,"width":110,"overflow":"visible","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":110,"creationPolicy":"inAdvance","layout":"horizontal","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","class":"Container","minHeight":1,"right":"0%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"button menu sup"}},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"mode":"push","transparencyActive":true,"class":"IconButton","maxWidth":60,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"borderSize":0},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_54CB7DB6_5F11_3DCB_4194_5F4ADD28A107"},{"class":"PanoramaPlayListItem","camera":"this.panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E"},{"class":"PanoramaPlayListItem","camera":"this.panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_542B390A_5F1F_C2DA_41C2_21EBC1D53BC4"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"hfovMin":"120%","thumbnailUrl":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_51E2C2C5_5F17_474E_41D0_E68545D154F4"],"label":trans('panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E.label'),"id":"panorama_54AD4A0C_5F1F_46DE_4153_D4C1A4DC0B0E","hfovMax":130,"class":"Panorama","data":{"label":"Salle a manger "},"pitch":0,"hfov":360},{"areas":["this.HotspotPanoramaOverlayArea_51B1F6F0_5F11_CF46_41D1_3E20DE091BE4"],"maps":[],"items":[{"horizontalAlign":"center","yaw":9.04,"image":"this.AnimatedImageResource_51C1F211_5F2E_C6C9_41B5_715CA111E7BA","rotationY":7.4,"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":7.83,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","hfov":8.49,"pitch":-3.11,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_513B0633_5F11_CEC9_41CC_EE636494F7C5"},{"areas":["this.HotspotPanoramaOverlayArea_5014CF7A_5F17_5D3A_41D6_B01509611D4B"],"maps":[],"items":[{"distance":100,"yaw":179.32,"image":"this.AnimatedImageResource_51C03212_5F2E_C6CA_41CA_1EEA306B3598","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.76,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","hfov":9.27,"pitch":-5.3,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_51EA3F56_5F17_5D4A_41AE_65BB83141EEC"},{"areas":["this.HotspotPanoramaOverlayArea_50097F98_5F11_5DC6_41B0_FE0312D35DD4"],"maps":[],"items":[{"distance":100,"yaw":21.6,"image":"this.AnimatedImageResource_51C0A213_5F2E_C6CA_41D6_3196524179DB","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":9.33,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","hfov":9.91,"pitch":-7.71,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_50101F93_5F11_5DCA_41C5_391784EA5F16"},{"areas":["this.HotspotPanoramaOverlayArea_51E1D2C9_5F17_4746_41C1_04C630B352A8"],"maps":[],"items":[{"horizontalAlign":"center","yaw":-18.63,"image":"this.AnimatedImageResource_51C07213_5F2E_C6CA_41AC_E2FA0E45B100","rotationY":4.9,"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":8.81,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","hfov":10.42,"pitch":-7.54,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_51E2C2C5_5F17_474E_41D0_E68545D154F4"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_51B1F6F0_5F11_CF46_41D1_3E20DE091BE4"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_505C933B_5F2F_453A_41D3_C4F9231F054A_0.png"}],"id":"AnimatedImageResource_51C1F211_5F2E_C6C9_41B5_715CA111E7BA"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5014CF7A_5F17_5D3A_41D6_B01509611D4B"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_505C933B_5F2F_453A_41D3_C4F9231F054A_0.png"}],"id":"AnimatedImageResource_51C03212_5F2E_C6CA_41CA_1EEA306B3598"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_50097F98_5F11_5DC6_41B0_FE0312D35DD4"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_505C933B_5F2F_453A_41D3_C4F9231F054A_0.png"}],"id":"AnimatedImageResource_51C0A213_5F2E_C6CA_41D6_3196524179DB"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_51E1D2C9_5F17_4746_41C1_04C630B352A8"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_505C933B_5F2F_453A_41D3_C4F9231F054A_0.png"}],"id":"AnimatedImageResource_51C07213_5F2E_C6CA_41AC_E2FA0E45B100"}],"width":"100%","borderRadius":0,"mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"defaultVRPointer":"gaze","paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"translate":TDV.Tour.Script.translate,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clone":TDV.Tour.Script.clone,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"init":TDV.Tour.Script.init,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaByName":TDV.Tour.Script.getMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"existsKey":TDV.Tour.Script.existsKey,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initQuiz":TDV.Tour.Script.initQuiz,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"registerKey":TDV.Tour.Script.registerKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"setValue":TDV.Tour.Script.setValue,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setLocale":TDV.Tour.Script.setLocale,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","class":"Player","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Jan 13 2025