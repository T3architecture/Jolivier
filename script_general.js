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
    var d = {"shadow":false,"definitions": [{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"shadow":false,"borderRadius":0,"width":80,"paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","horizontalAlign":"left","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"class":"Image","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"borderSize":0,"left":26.3,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"scaleMode":"fill"},{"itemThumbnailShadowVerticalLength":3,"borderRadius":5,"right":"0.12%","itemThumbnailShadowBlurRadius":8,"itemLabelFontFamily":"Arial","paddingTop":10,"itemLabelHorizontalAlign":"center","gap":10,"horizontalAlign":"left","paddingBottom":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","itemThumbnailShadow":true,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"itemOpacity":1,"itemPaddingRight":3,"itemThumbnailWidth":75,"paddingLeft":20,"itemPaddingLeft":3,"itemHorizontalAlign":"center","itemLabelFontWeight":"normal","paddingRight":20,"itemLabelFontSize":14,"bottom":"0.02%","itemThumbnailShadowHorizontalLength":3,"itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemBackgroundOpacity":0,"toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","verticalAlign":"top","itemLabelTextDecoration":"none","layout":"horizontal","itemPaddingTop":3,"class":"ThumbnailList","scrollBarVisible":"rollOver","rollOverItemBackgroundOpacity":0,"scrollBarWidth":10,"itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"selectedItemLabelFontColor":"#FFCC00","itemThumbnailOpacity":1,"itemThumbnailShadowSpread":1,"itemLabelPosition":"bottom","itemThumbnailShadowOpacity":0.54,"left":"0.01%","itemLabelGap":9,"selectedItemLabelFontWeight":"bold","itemLabelFontStyle":"normal","itemPaddingBottom":3,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"minWidth":20,"itemThumbnailBorderRadius":50,"borderSize":0,"rollOverItemLabelFontWeight":"normal","itemMode":"normal"},{"shadow":false,"borderRadius":0,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingRight":0,"paddingLeft":0,"top":"6.78%","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","class":"IconButton","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"maxWidth":60,"mode":"toggle","transparencyActive":true,"borderSize":0,"minHeight":60,"right":"0.6%","minWidth":60,"data":{"name":"image button menu"}},{"borderRadius":0,"shadow":false,"gap":3,"width":85,"paddingTop":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","overflow":"scroll","paddingRight":0,"paddingLeft":0,"top":"14%","contentOpaque":false,"scrollBarOpacity":0.5,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","class":"Container","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"maxWidth":85,"borderSize":0,"minHeight":320,"right":"0%","minWidth":85,"data":{"name":"-button set"}},{"borderRadius":0,"shadow":false,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingRight":0,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","class":"IconButton","maxHeight":60,"maxWidth":60,"mode":"toggle","transparencyActive":true,"borderSize":0,"minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60},{"hfovMin":"120%","class":"Panorama","thumbnailUrl":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_4F82FE50_5F28_5CB2_41A7_E6E17551078E"],"label":trans('panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8.label'),"id":"panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8","hfovMax":130,"data":{"label":"Chambre "},"pitch":0,"adjacentPanoramas":[{"distance":12.88,"yaw":22.03,"select":"this.overlay_4F82FE50_5F28_5CB2_41A7_E6E17551078E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E","data":{"overlayID":"overlay_4F82FE50_5F28_5CB2_41A7_E6E17551078E"},"backwardYaw":179.74,"class":"AdjacentPanorama"}],"hfov":360},{"hfovMin":"120%","class":"Panorama","thumbnailUrl":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_50D109C7_5F29_A79E_41CD_887E3CD40E39"],"label":trans('panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91.label'),"id":"panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91","hfovMax":130,"data":{"label":"Salle a manger "},"pitch":0,"adjacentPanoramas":[{"distance":16,"yaw":-19.18,"select":"this.overlay_50D109C7_5F29_A79E_41CD_887E3CD40E39.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E","data":{"overlayID":"overlay_50D109C7_5F29_A79E_41CD_887E3CD40E39"},"backwardYaw":7.85,"class":"AdjacentPanorama"}],"hfov":360},{"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_camera","hoverFactor":0,"class":"PanoramaCamera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_camera","media":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_camera","media":"this.panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_camera","media":"this.panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList"},{"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_camera","hoverFactor":0,"class":"PanoramaCamera"},{"borderRadius":0,"shadow":false,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingRight":0,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","class":"IconButton","maxHeight":60,"maxWidth":60,"mode":"toggle","transparencyActive":true,"borderSize":0,"minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60},{"borderRadius":0,"shadow":false,"textDecoration":"none","width":280,"paddingTop":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"backgroundOpacity":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"fontColor":"#FFFFFF","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"class":"Label","maxHeight":50,"maxWidth":280,"borderSize":0,"fontSize":30,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":280,"fontWeight":"bold","data":{"name":"Label28174"}},{"borderRadius":0,"shadow":false,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","class":"IconButton","maxHeight":60,"maxWidth":60,"mode":"push","transparencyActive":true,"borderSize":0,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"borderSize":0,"minHeight":50,"playbackBarHeadBorderRadius":0,"progressBottom":1,"playbackBarHeadHeight":30,"progressBarOpacity":1,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"paddingTop":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"progressBarBorderSize":0,"paddingBottom":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"subtitlesFontWeight":"normal","toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":1500,"playbackBarLeft":0,"class":"ViewerArea","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderColor":"#000000","toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"borderRadius":0,"shadow":false,"gap":10,"width":85,"paddingTop":0,"horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","overflow":"scroll","paddingRight":0,"paddingLeft":0,"top":"17.26%","contentOpaque":false,"scrollBarOpacity":0.5,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":430,"creationPolicy":"inAdvance","layout":"absolute","class":"Container","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"maxWidth":85,"borderSize":0,"minHeight":430,"right":"1.22%","minWidth":85,"data":{"name":"--SETTINGS"}},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_camera","media":"this.panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_camera","media":"this.panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8_camera","media":"this.panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8","class":"PanoramaPlayListItem"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"hfovMin":"150%","class":"Panorama","thumbnailUrl":"media/panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"url":"media/panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_519801CF_5F28_67AE_41C5_B84A74135ACF","this.overlay_5086B938_5F2B_A4F2_4183_8EDF0EF452F6"],"label":trans('panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E.label'),"id":"panorama_54A96002_5F28_6491_41D5_0C4E8EDE747E","hfovMax":130,"data":{"label":"Salon"},"pitch":0,"adjacentPanoramas":[{"distance":18.52,"yaw":7.85,"select":"this.overlay_519801CF_5F28_67AE_41C5_B84A74135ACF.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91","data":{"overlayID":"overlay_519801CF_5F28_67AE_41C5_B84A74135ACF"},"backwardYaw":-19.18,"class":"AdjacentPanorama"},{"distance":31.6,"yaw":179.74,"select":"this.overlay_5086B938_5F2B_A4F2_4183_8EDF0EF452F6.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_5405FE53_5F28_DCB6_41C6_439B9BC5FBF8","data":{"overlayID":"overlay_5086B938_5F2B_A4F2_4183_8EDF0EF452F6"},"backwardYaw":22.03,"class":"AdjacentPanorama"}],"hfov":360},{"borderRadius":0,"gap":10,"width":110,"paddingTop":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","overflow":"visible","paddingRight":0,"paddingLeft":0,"bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":110,"creationPolicy":"inAdvance","layout":"horizontal","class":"Container","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","borderSize":0,"minHeight":1,"right":"0%","minWidth":1,"shadow":false,"data":{"name":"button menu sup"}},{"borderRadius":0,"shadow":false,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingRight":0,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","class":"IconButton","maxHeight":60,"maxWidth":60,"mode":"toggle","transparencyActive":true,"borderSize":0,"minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60},{"borderRadius":0,"shadow":false,"width":60,"paddingTop":0,"horizontalAlign":"center","cursor":"hand","paddingBottom":0,"propagateClick":true,"backgroundOpacity":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","class":"IconButton","maxHeight":60,"maxWidth":60,"mode":"push","transparencyActive":true,"borderSize":0,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60},{"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_5442242D_5F28_AC92_419A_61FB0CEE1F91_camera","hoverFactor":0,"class":"PanoramaCamera"},{"areas":["this.HotspotPanoramaOverlayArea_4F823E54_5F28_5CB2_41C1_E1914B3E0AD2"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4D0018BF_5F38_65EE_41C9_48876C093760","distance":100,"yaw":22.03,"vfov":9.01,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","data":{"label":"Circle Arrow 03"},"horizontalAlign":"center","hfov":7.86,"pitch":-7.51,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_4F82FE50_5F28_5CB2_41A7_E6E17551078E"},{"areas":["this.HotspotPanoramaOverlayArea_50D1C9CB_5F29_A796_41A4_BEAA19275FEB"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4D0068BE_5F38_65EE_41C7_C80CA35F6B96","distance":100,"yaw":-19.18,"vfov":7.59,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","data":{"label":"Circle Arrow 03"},"horizontalAlign":"center","hfov":7.28,"pitch":-6.06,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_50D109C7_5F29_A79E_41CD_887E3CD40E39"},{"areas":["this.HotspotPanoramaOverlayArea_5003628D_5F28_6592_41C4_7F6CB4C25B82"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4D00B8BD_5F38_65F2_4136_375D7CFE02CE","distance":100,"yaw":7.85,"rotationY":4.45,"vfov":7.26,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","data":{"label":"Circle Arrow 03"},"horizontalAlign":"center","hfov":7.81,"pitch":-5.23,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_519801CF_5F28_67AE_41C5_B84A74135ACF"},{"areas":["this.HotspotPanoramaOverlayArea_50CA3963_5F2B_A496_41C8_AD67F2139F60"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4D0098BE_5F38_65EE_41D6_391EFDB48848","distance":100,"yaw":179.74,"vfov":6.59,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","data":{"label":"Circle Arrow 03"},"horizontalAlign":"center","hfov":6.19,"pitch":-3.07,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_5086B938_5F2B_A4F2_4183_8EDF0EF452F6"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_4F823E54_5F28_5CB2_41C1_E1914B3E0AD2"},{"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_4D0018BF_5F38_65EE_41C9_48876C093760","frameCount":24,"colCount":4,"levels":[{"height":1200,"width":800,"url":"media/res_4E7EC7BA_5F28_6BF6_41A9_EBF03019C821_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_50D1C9CB_5F29_A796_41A4_BEAA19275FEB"},{"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_4D0068BE_5F38_65EE_41C7_C80CA35F6B96","frameCount":24,"colCount":4,"levels":[{"height":1200,"width":800,"url":"media/res_4E7EC7BA_5F28_6BF6_41A9_EBF03019C821_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_5003628D_5F28_6592_41C4_7F6CB4C25B82"},{"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_4D00B8BD_5F38_65F2_4136_375D7CFE02CE","frameCount":24,"colCount":4,"levels":[{"height":1200,"width":800,"url":"media/res_4E7EC7BA_5F28_6BF6_41A9_EBF03019C821_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_50CA3963_5F2B_A496_41C8_AD67F2139F60"},{"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_4D0098BE_5F38_65EE_41D6_391EFDB48848","frameCount":24,"colCount":4,"levels":[{"height":1200,"width":800,"url":"media/res_4E7EC7BA_5F28_6BF6_41A9_EBF03019C821_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource"}],"width":"100%","paddingTop":0,"gap":10,"mediaActivationMode":"window","horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"defaultVRPointer":"gaze","backgroundOpacity":1,"scrollBarMargin":2,"id":"rootPlayer","overflow":"hidden","scripts":{"translate":TDV.Tour.Script.translate,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openLink":TDV.Tour.Script.openLink,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"registerKey":TDV.Tour.Script.registerKey,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"init":TDV.Tour.Script.init,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPixels":TDV.Tour.Script.getPixels,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showWindow":TDV.Tour.Script.showWindow,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour},"paddingRight":0,"paddingLeft":0,"mouseWheelEnabled":true,"vrPolyfillScale":1,"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","contentOpaque":false,"scrollBarOpacity":0.5,"borderRadius":0,"verticalAlign":"top","children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","desktopMipmappingEnabled":false,"backgroundColor":["#000000"],"layout":"absolute","class":"Player","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","borderSize":0,"minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"downloadEnabled":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Jan 13 2025