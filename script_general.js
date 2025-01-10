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
    var d = {"shadow":false,"gap":10,"definitions": [{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_camera","media":"this.panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_camera","media":"this.panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_camera","media":"this.panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hfovMin":"150%","thumbnailUrl":"media/panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"url":"media/panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_54F885B3_47B0_2C86_41C5_7191D635F531","this.overlay_54FC4647_47B0_EF8E_41C4_77E91F0FDE6C"],"label":trans('panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D.label'),"id":"panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D","hfovMax":130,"class":"Panorama","data":{"label":"Salon"},"pitch":0,"hfov":360},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"top":"14%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"class":"Container","maxWidth":85,"minHeight":320,"right":"0%","minWidth":85,"borderSize":0,"data":{"name":"-button set"}},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowVerticalLength":1,"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"playbackBarHeadHeight":30,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":1500,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"playbackBarHeadShadowVerticalLength":0,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_camera"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"borderSize":0},{"hfovMin":"120%","thumbnailUrl":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_54A145B3_47D0_2C87_41CD_43545C04C59E"],"label":trans('panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B.label'),"id":"panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B","hfovMax":130,"class":"Panorama","data":{"label":"Salle a manger"},"pitch":0,"hfov":360},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"mode":"push","transparencyActive":true,"class":"IconButton","maxWidth":60,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingRight":0,"paddingLeft":0,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"right":"0.6%","minWidth":60,"borderSize":0,"data":{"name":"image button menu"}},{"borderRadius":0,"gap":10,"width":110,"overflow":"visible","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":110,"creationPolicy":"inAdvance","layout":"horizontal","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","class":"Container","minHeight":1,"right":"0%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"button menu sup"}},{"thumbnailUrl":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_t.jpg","partial":false,"label":trans('panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A.label'),"hfovMin":"120%","hfovMax":130,"class":"Panorama","frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"hfov":360,"pitch":0,"data":{"label":"Chambre"},"id":"panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","maxWidth":60,"minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"borderSize":0},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D_camera","media":"this.panorama_4F2FBD9D_45B0_5C82_41BA_3B3B7E4C654D"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_camera","media":"this.panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_camera","media":"this.panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"gap":10,"right":"0.12%","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"itemLabelTextDecoration":"none","itemLabelFontFamily":"Arial","itemLabelHorizontalAlign":"center","itemThumbnailShadowHorizontalLength":3,"paddingTop":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"horizontalAlign":"left","itemPaddingRight":3,"itemThumbnailWidth":75,"paddingLeft":20,"itemPaddingLeft":3,"itemOpacity":1,"itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemHorizontalAlign":"center","itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemThumbnailShadow":true,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowVerticalLength":3,"itemThumbnailOpacity":1,"itemThumbnailShadowSpread":1,"itemLabelPosition":"bottom","itemThumbnailShadowOpacity":0.54,"left":"0.01%","itemLabelGap":9,"selectedItemLabelFontWeight":"bold","itemLabelFontStyle":"normal","itemPaddingBottom":3,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"minWidth":20,"itemThumbnailBorderRadius":50,"class":"ThumbnailList","borderSize":0,"rollOverItemLabelFontWeight":"normal","itemMode":"normal"},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_4EC788ED_45D0_2482_41B5_C66885D08B1A_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_4E8719B2_45CF_E486_41CA_89F3A8B7334B_camera"},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"class":"Image","left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"shadow":false,"borderRadius":0,"textDecoration":"none","width":280,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"maxHeight":50,"class":"Label","fontSize":30,"maxWidth":280,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":280,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"mode":"push","transparencyActive":true,"class":"IconButton","maxWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"gap":10,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingBottom":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingRight":0,"paddingLeft":0,"top":"17.26%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":430,"creationPolicy":"inAdvance","layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"class":"Container","maxWidth":85,"minHeight":430,"right":"1.22%","minWidth":85,"borderSize":0,"data":{"name":"--SETTINGS"}},{"areas":["this.HotspotPanoramaOverlayArea_540715B8_47B0_2C82_41AE_EFADFEC0C7EA"],"maps":[],"items":[{"image":"this.AnimatedImageResource_528FB1EC_45F0_6789_41BF_B1287BB96B0E","distance":100,"rotationX":-4.62,"rotationY":16.09,"vfov":6.93,"yaw":8.43,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Circle Arrow 04"},"verticalAlign":"middle","hfov":10.2,"pitch":-3.13,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 04"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_54F885B3_47B0_2C86_41C5_7191D635F531"},{"areas":["this.HotspotPanoramaOverlayArea_5428366D_47B0_EF82_41C5_735EB41C90F9"],"maps":[],"items":[{"image":"this.AnimatedImageResource_528F91EC_45F0_6789_41C7_99FF74C463C6","distance":100,"yaw":-161.29,"rotationY":15.64,"vfov":7.49,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Circle Arrow 04"},"verticalAlign":"middle","hfov":9.47,"pitch":22.65,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 04"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_54FC4647_47B0_EF8E_41C4_77E91F0FDE6C"},{"areas":["this.HotspotPanoramaOverlayArea_54D9E5B8_47D0_2C81_41D1_492F084F4821"],"maps":[],"items":[{"image":"this.AnimatedImageResource_528FD1ED_45F0_678B_41D3_39ECC3D5D1D4","distance":100,"yaw":-18.2,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.43,"data":{"label":"Circle Arrow 04"},"verticalAlign":"middle","hfov":8.06,"pitch":-4.21,"scaleMode":"fit_inside"}],"data":{"label":"Circle Arrow 04"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_54A145B3_47D0_2C87_41CD_43545C04C59E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_540715B8_47B0_2C82_41AE_EFADFEC0C7EA"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_547201F6_47D0_248E_41B4_888FEF1A413F_0.png"}],"id":"AnimatedImageResource_528FB1EC_45F0_6789_41BF_B1287BB96B0E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5428366D_47B0_EF82_41C5_735EB41C90F9"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_547201F6_47D0_248E_41B4_888FEF1A413F_0.png"}],"id":"AnimatedImageResource_528F91EC_45F0_6789_41C7_99FF74C463C6"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_54D9E5B8_47D0_2C81_41D1_492F084F4821"},{"rowCount":6,"frameDuration":41,"frameCount":24,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_547201F6_47D0_248E_41B4_888FEF1A413F_0.png"}],"id":"AnimatedImageResource_528FD1ED_45F0_678B_41D3_39ECC3D5D1D4"}],"width":"100%","borderRadius":0,"mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"defaultVRPointer":"gaze","paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initQuiz":TDV.Tour.Script.initQuiz,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMainViewer":TDV.Tour.Script.getMainViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"shareSocial":TDV.Tour.Script.shareSocial,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setLocale":TDV.Tour.Script.setLocale,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setValue":TDV.Tour.Script.setValue,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cloneCamera":TDV.Tour.Script.cloneCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isPanorama":TDV.Tour.Script.isPanorama,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","class":"Player","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Fri Jan 10 2025