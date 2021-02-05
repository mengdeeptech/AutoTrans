// ==UserScript==
// @name         英文网页中英双语对照自动翻译
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  国外英文网页,双语对照自动翻译，彩云小译自动翻译英文页面!English web pages, Chinese English automatic translation by Caiyun smart translation！
// @author       JasonHuang
// @license    GPL-3.0-only
// @create     2020-12-22
// @include http://*
// @include https://*
// @exclude    *://*.google*/*
// @exclude    *://*.github*/*
// @exclude    *://*gov.cn/*
// @exclude    *://*edu.cn/*
// @exclude    *://*.cn/*
// @exclude    *://*.baidu.com/*
// @exclude    *://*.qq.com/*
// @exclude    *://*.bilibili.com/*
// @exclude    *://*.jianshu.com/*
// @exclude    *://*sspai.com/*
// @exclude    *://*cnki.net/*
// @exclude    *://*.160.com/*
// @exclude    *://*.huaweicloud.com/*
// @exclude    *://*ikeepstudying.com/*
// @exclude    *://*.ifdream.net/*
// @exclude    *://*.topthink.com/*
// @exclude /(^[^:\/#\?]*:\/\/([^#\?\/]*\.)?github\.com(:[0-9]{1,5})?\/.*$)/
// @exclude    *://*.wordpress.org/zh*
// @exclude    https://developer.wordpress.org/reference/*
// @exclude    *://*.oceanengine.com/*
// @exclude    *://*.lusongsong.com/*
// @exclude    *://*.cambridge.org/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @run-at       document-body
// @grant    unsafeWindow
// @note    2021-02-05-V1.0.2 新增用户反馈取消部分v1.0.2自动翻译功能
// @note    2020-12-22-V1.0.1 去除google/github网站自动翻译功能
// @note    2020-12-22-V1.0.0 完成英文网站自动双语翻译功能
// ==/UserScript==

/*下面是从彩云小译插件copy的js代码 */
$(document).ready(function(){
  $("html:lang(en)").show(function(){
  	!function (e) {
	function t(r) {
		if (n[r])
			return n[r].exports;
		var i = n[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return e[r].call(i.exports, i, i.exports, t),
		i.loaded = !0,
		i.exports
	}
	var n = {};
	return t.m = e,
	t.c = n,
	t.p = "",
	t(0)
}
([function (e, exports, t) {
			!function () {
				function e() {
					try {
						var e = document.querySelectorAll(".cyxy-target-popup");
						if (e && e.length > 0)
							return;
						F.preload([P.XIAOYI_DEFAULT_URL, P.FAVOR_IMG_URL, P.CHECKED_IMG_URL, P.LEFT_SLIDE_URL, P.RIGHT_SLIDE_URL]),
						p(),
						o(),
						u(),
						r(),
						setTimeout(function () {
							n(),
							setInterval(function () {
								n()
							}, 3e3)
						}, 9e3)
					} catch (e) {
						console.error(e)
					}
				}
				function n() {
					document.URL.indexOf("slack.com") >= 0 || location.origin + location.pathname != be && (console.log("url changed!!!"), s(), be = location.origin + location.pathname)
				}
				function r() {
					var e = document.createElement("iframe");
					e.src = ("https:" == document.location.protocol ? "https://" : "http://") + "caiyunapp.com/xiaoyi/web_translate_data_stat.html",
					e.setAttribute("style", "display: none;"),
					document.body.appendChild(e);
					var t = t || [];
					window._vds = t,
					function () {
						t.push(["setAccountId", "d8ab7616d8a24605b6bd7635943734a7"]),
						function () {
							var e = document.createElement("script");
							e.type = "text/javascript",
							e.async = !0,
							e.src = ("https:" == document.location.protocol ? "https://" : "http://") + "dn-growing.qbox.me/vds.js";
							var t = document.getElementsByTagName("script")[0];
							t.parentNode.insertBefore(e, t)
						}
						()
					}
					()
				}
				function i() {
					var e = ["interpreter.caiyunai.com", "cdn.caiyunapp.com", "interpreter-staging.caiyunai.com"],
					t = "web";
					return e.indexOf(location.host) >= 0 ? (t = "share", U("a").on("click", function (e) {
							this.href && "#" != this.getAttribute("href")[0] && (e.preventDefault(), window.open(P.LNADING_URL + "?targetUrl=" + encodeURIComponent(this.href)))
						})) : k() && window.js ? t = "android" : L() ? (Se = window.cyUserData ? window.cyUserData : U("#cy-ios-user").text(), t = Se ? "ios" : "web") : t = "web",
					t
				}
				function o() {
					if ("share" == Ee)
						(new I).get(function (e, t) {
							ge = e,
							s()
						});
					else if ("android" == Ee)
						try {
							var e = JSON.parse(window.js.getUserData());
							me = e.device_id,
							e.user && (xe = {
									username: e.user.username || "",
									_id: e.user._id || "",
									avatar_url: e.user.avatar_url || P.DEFAULT_AVATAR_URL
								}, Ae = e.user._id || ""),
							s()
						} catch (e) {
							console.error(e),
							D.open({
								content: te + e,
								skin: "msg",
								time: 5
							})
						}
					else if ("ios" == Ee)
						try {
							var e = JSON.parse(decodeURIComponent(Se));
							me = e.device_id || "",
							ve = e.lang || "zh",
							e.user && (xe = {
									username: e.user.username || "",
									_id: e.user._id || "",
									avatar_url: e.user.avatar_url || P.DEFAULT_AVATAR_URL
								}, Ae = e.user._id || ""),
							s()
						} catch (e) {
							console.error(e),
							D.open({
								content: te + e,
								skin: "msg",
								time: 5
							})
						}
					else
						B.testCookie(function (e) {
							e ? (Ae = e._id, a(Ae, function (e) {
									xe = e,
									e && !e.avatar_url && (xe.avatar_url = P.DEFAULT_AVATAR_URL),
									s()
								})) : (new I).get(function (e, t) {
								ge = e,
								s()
							})
						})
				}
				function a(e, t) {
					var n = O(),
					r = P.TRS_URL + "/v1/user/" + e;
					n.open("POST", r, !0),
					n.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
					n.timeout = 3e4,
					n.setRequestHeader("content-type", "application/json"),
					n.onload = function (e) {
						var n = JSON.parse(this.responseText);
						0 == n.rc ? t(n.user) : D.open({
							content: ne,
							skin: "msg",
							time: 3
						})
					},
					n.send(JSON.stringify({
							user_id: Ae,
							page_id: ye,
							url: document.URL
						}))
				}
				function s() {
					var e = O(),
					t = P.TRS_URL + "/v1/page/auth";
					e.open("POST", t, !0),
					e.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
					e.timeout = 3e3,
					e.setRequestHeader("content-type", "application/json"),
					e.onerror = function (t) {
						throw console.error(e, t),
						D.open({
							content: $,
							skin: "msg",
							time: 3
						}),
						new Error("PageAuth Error", t)
					},
					e.onload = function (e) {
						var t = JSON.parse(this.responseText),
						n = t.auth_type;
						0 == t.rc ? n >= 0 && ("android" == Ee ? window.js.showSpendCMoney(V, "") : "ios" == Ee ? window.webkit.messageHandlers.showSpendCMoney.postMessage({
								title1: V,
								title2: ""
							}) : D.open({
								className: H,
								content: V,
								skin: "msg",
								time: 2.3
							}), ye = t.page_id, x(), setTimeout(function () {
								c()
							}, 4e3), "android" == Ee ? window.js.cancelLoading() : "ios" == Ee && window.webkit.messageHandlers.removeLoadingView.postMessage()) : n == -1 ? "android" == Ee ? window.js.showLoginDialog(z) : "ios" == Ee ? window.webkit.messageHandlers.showLoginDialog.postMessage({
							title: z
						}) : D.open({
							content: z,
							btn: ["登录", "取消"],
							yes: function (e) {
								D.close(e),
								window.open(P.LOGIN_URL, "_blank")
							}
						}) : n == -101 && ("android" == Ee ? window.js.showOpeningVIPDialog(J) : "ios" == Ee ? window.webkit.messageHandlers.showOpeningVIPDialog.postMessage({
								title: J
							}) : D.open({
								content: J,
								btn: ["成为VIP", "取消"],
								yes: function (e) {
									B.alipayForOneMonthRedeem(Ae, function (e) {
										0 == e.rc && e.alipay.notify_url ? window.open(e.alipay.notify_url, "_blank") : D.open({
											content: ee,
											skin: "msg",
											time: 3
										})
									}),
									D.close(e)
								}
							}))
					},
					e.send(JSON.stringify({
							user_id: Ae,
							browser_id: ge,
							device_id: me,
							url: document.URL,
							title: document.title
						}))
				}
				function u() {
					if (!(location.host.indexOf("bing.com") >= 0 || location.host.indexOf("wx.qq.com") >= 0 || location.host.indexOf("slack.com") >= 0)) {
						var e = document.createElement("div");
						e.className = "cyxy-footer " + H,
						e.innerHTML = "<p class='cyxy-footer-p'>本网页由彩云小译<font id='cyxy-footer-translator'></font>翻译<p/>",
						"share" == Ee && (e.innerHTML = "<p class='cyxy-footer-p'>原网页由彩云小译<font id='cyxy-footer-translator'></font>翻译<p/>"),
						document.body.appendChild(e)
					}
				}
				function l() {
					var e = U("#cyxy-footer-translator").text(),
					t = "",
					n = "",
					r = "、";
					e.indexOf(xe.username) < 0 && (e || (r = "", t = "和", n = "共同"), U("#cyxy-footer-translator").text(t + xe.username + r + e + n))
				}
				function c(e) {
					var t = O(),
					n = P.TRS_URL + "/v1/page/" + ye + "/author";
					t.open("POST", n, !0),
					t.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
					t.timeout = 5e3,
					t.setRequestHeader("content-type", "application/json"),
					t.onload = function (e) {
						var t = JSON.parse(this.responseText);
						if (0 == t.rc) {
							var n = t.user_list,
							r = n.length,
							i = "",
							o = "",
							a = "";
							n.forEach(function (e, t) {
								if (e.username && "彩云小译" != e.username) {
									var n = "、";
									o = "和",
									a = "共同",
									i = i + e.username + n
								}
							}),
							i = i.substr(0, i.length - 1),
							r > 9 && (i += "等"),
							U("#cyxy-footer-translator").text(o + i + a);
							var s = (U(".cyxy-footer-p").text(), 9e3);
							"和" == o && U(".cyxy-footer").show(),
							"share" == Ee && (U(".cyxy-footer").show(), U(".cyxy-footer").click(function () {
									location.href = P.DOWNLOAD_URL
								}), s = 3e4),
							setTimeout(function () {
								U(".cyxy-footer").css({
									opacity: .88
								}),
								U(".cyxy-footer").hide()
							}, s)
						}
					},
					t.onerror = function (e) {
						throw console.error(e),
						new Error("fetchPageTranslator Error", e)
					},
					t.send(JSON.stringify({
							user_id: Ae
						}))
				}
				function p() {
					function e() {
						var e = parseInt(U("#cyxy-popup-favour-num").text()) + 1;
						U("#cyxy-popup-favour-num").text(e),
						M.data("comment", "like");
						var t = M.data("targetInfo");
						t && (t.rate.LIKE = e, M.data("targetInfo", t));
						var n = M.data("targetList"),
						r = M.data("index");
						n && n.length > 0 && r >= 0 && (n[r].rate.lIKE = e, M.data("targetList", n))
					}
					function t() {
						U("#cyxy-popup-oppose-num").text(parseInt(U("#cyxy-popup-oppose-num").text()) + 1),
						M.data("comment", "unlike")
					}
					var n = document.createElement("div");
					n.className = "cyxy-target-popup " + H,
					n.innerHTML = '<div style="margin: auto"><img id="cyxy-popup-left-slide" src="https://caiyunapp.com/imgs/webtrs/left-slide.png"> <div id="cyxy-popup-userinfo"><img id="cyxy-popup-avatar" src="https://caiyunapp.com/imgs/xiaoyilogo.jpg"> <div id="cyxy-popup-name-time"> <span id="cyxy-popup-name">彩云小译</span> <span id="cyxy-popup-time">刚刚</span></div></div><div id="cyxy-popup-favour"><img id="cyxy-popup-favour-img" src="https://caiyunapp.com/images/favour.png"><span id="cyxy-popup-favour-num">0</span></div><img id="cyxy-popup-right-slide" src="https://caiyunapp.com/imgs/webtrs/right-slide.png"></div>',
					document.body.appendChild(n),
					U(".cyxy-target-popup").hide(),
					U("#cyxy-popup-left-slide").hide(),
					U("#cyxy-popup-right-slide").hide(),
					U(".cyxy-target-popup").click(function () {}),
					U(document).mouseup(function (e) {
						var t = U(".cyxy-target-popup");
						t.is(e.target) || 0 !== t.has(e.target).length || U("#cyxy-popup-favour").hasClass("commit") || t.hide()
					}),
					U("#cyxy-popup-left-slide").click(function () {
						h();
						var e = M.data("targetList"),
						t = M.data("index");
						if (!isNaN(t)) {
							t--,
							t <= 0 && (t = 0, U("#cyxy-popup-left-slide").hide()),
							U("#cyxy-popup-right-slide").show();
							var n = e[t];
							M.data("targetInfo", n),
							M[0].sentence_id = n.id,
							M.data("comment", ""),
							M.text(n.content),
							U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL),
							U("#cyxy-popup-avatar").attr("src", n.user.avatar_url),
							U("#cyxy-popup-name").text(n.user.username),
							U("#cyxy-popup-time").text(F.getDateDiff(n.updated_at)),
							U("#cyxy-popup-favour-num").text(n.rate.LIKE || 0),
							U("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0),
							M.data("index", t)
						}
					}),
					U("#cyxy-popup-right-slide").click(function () {
						h();
						var e = M.data("targetList"),
						t = M.data("index");
						if (!isNaN(t)) {
							t++,
							t >= e.length - 1 && U("#cyxy-popup-right-slide").hide(),
							t > 0 && U("#cyxy-popup-left-slide").show();
							var n = e[t];
							M.text(n.content),
							M.data("targetInfo", n),
							M[0].sentence_id = n.id,
							M.data("comment", ""),
							U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL),
							U("#cyxy-popup-avatar").attr("src", n.user.avatar_url),
							U("#cyxy-popup-name").text(n.user.username),
							U("#cyxy-popup-time").text(F.getDateDiff(n.updated_at)),
							U("#cyxy-popup-favour-num").text(n.rate.LIKE || 0),
							U("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0),
							M.data("index", t)
						}
					}),
					U("#cyxy-popup-favour").click(function () {
						if (U("#cyxy-popup-favour").hasClass("commit"))
							d(1);
						else {
							var t = M[0].sentence_id;
							t ? y(t, "POINT_LIKE_SENTENCE", e) : g(M.data("source_text"), M.data("xiaoyiText"), "", function (n) {
								n && 0 == n.rc && (t = n.sentence_id, M[0].sentence_id = t, y(t, "POINT_LIKE_SENTENCE", e))
							}, P.XIAOYI_USERID)
						}
					}),
					U("#cyxy-popup-oppose").click(function () {
						var e = M.data("comment"),
						n = M.data("sentence_id");
						e ? "like" == e ? y(n, "POINT_CANCEL_LIKE_SENTENCE", function () {
							U("#cyxy-popup-favour-num").text(parseInt(U("#cyxy-popup-favour-num").text()) - 1),
							U("#cyxy-popup-favour-img").css("height", "18px"),
							M.data("comment", "cancel")
						}) : "unlike" == e ? y(n, "POINT_CANCEL_LIKE_SENTENCE", function () {
							U("#cyxy-popup-oppose-num").text(parseInt(U("#cyxy-popup-oppose-num").text()) - 1),
							M.data("comment", "cancel"),
							U("#cyxy-popup-oppose-img").css("height", "18px")
						}) : "cancel" == e && y(n, "POINT_UNLIKE_SENTENCE", t) : n ? y(n, "POINT_UNLIKE_SENTENCE", t) : g(M.data("source_text"), M.data("before"), "", function (e) {
							e && 0 == e.rc && (n = e.sentence_id, M[0].sentence_id = n, y(n, "POINT_UNLIKE_SENTENCE", t))
						}, P.XIAOYI_USERID)
					})
				}
				function d(e) {
					function t(e) {
						if (U("#cyxy-popup-favour").removeClass("commit"), e && 0 == e.rc) {
							M[0].sentence_id = e.sentence_id,
							U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL),
							U("#cyxy-popup-favour-num").text(U("cyxy-popup-favour-num").text() || 0),
							M.data("before", M.text());
							var t = {
								id: e.sentence_id,
								content: M.text(),
								updated_at: Date.now(),
								user: {
									id: Ae,
									avatar_url: xe.avatar_url,
									username: xe.username
								},
								rate: {
									LIKE: U("cyxy-popup-favour-num").text(),
									UNLIKE: 0
								}
							};
							M.data("targetInfo", t);
							var n = M.data("targetList");
							n && n.length > 0 && M.data("targetList", n.concat(t)),
							l(),
							"android" == Ee ? window.js.showEditSuccess(K, W + e.point.total_point) : "ios" == Ee ? window.webkit.messageHandlers.showEditSuccess.postMessage({
								title1: K,
								title2: W + e.point.total_point
							}) : D.open({
								content: K + W + e.point.total_point,
								skin: "msg",
								time: 3
							})
						} else
							console.error(e), D.open({
								content: oe,
								skin: "msg",
								time: 3
							})
					}
					Ae && (M.data("before") !== M.text() ? M.data("user_s_id") ? m(M.data("source_text"), M.data("user_s_id"), M.text(), function (e) {
							if (U("#cyxy-popup-favour").removeClass("commit"), e && 0 == e.rc) {
								U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL);
								var t = M.data("targetList"),
								n = M.data("user_index"),
								r = 0;
								M.data("targetInfo") && (r = M.data("targetInfo").rate.LIKE),
								t && t.length > 0 && n >= 0 && (t[n].content = M.text(), t[n].rate.lIKE = r, M.data("targetList", t)),
								U("#cyxy-popup-favour-num").text(r || 0),
								M.data("targetInfo", {
									id: e.sentence_id,
									content: M.text(),
									updated_at: Date.now(),
									user: {
										id: Ae,
										avatar_url: xe.avatar_url,
										username: xe.username
									},
									rate: {
										LIKE: r,
										UNLIKE: 0
									}
								}),
								M.data("before", M.text()),
								D.open({
									content: re,
									skin: "msg",
									time: 2
								})
							} else
								console.error(e), D.open({
									content: oe,
									skin: "msg",
									time: 3
								})
						}) : g(M.data("source_text"), M.text(), "", t) : 1 == e && (U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL), U("#cyxy-popup-favour-num").text(U("cyxy-popup-favour-num").text() || 0), D.open({
								content: ie,
								skin: "msg",
								time: 2
							}))),
					setTimeout(function () {
						U("#cyxy-popup-favour").removeClass("commit")
					}, 2e3)
				}
				function f() {
					null !== Ce && clearTimeout(Ce),
					Ce = setTimeout(function () {
							U(".cyxy-target-popup").hide()
						}, 3e3)
				}
				function h() {
					null !== Ce && clearTimeout(Ce)
				}
				function g(e, t, n, r, i) {
					if (!Re) {
						var o = O(),
						a = P.TRS_URL + "/v1/page/" + ye + "/sentence",
						s = Ae;
						i && (s = i),
						Re = !0,
						o.open("POST", a, !0),
						o.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
						o.timeout = 5e3,
						o.setRequestHeader("content-type", "application/json"),
						o.onload = function (e) {
							Re = !1;
							var t = JSON.parse(this.responseText);
							r(t)
						},
						o.onerror = function (e) {
							throw Re = !1,
							D.open({
								content: oe,
								skin: "msg",
								time: 3
							}),
							console.error(e),
							new Error("commitPageSentence Error", e)
						},
						o.send(JSON.stringify({
								user_id: s,
								page_id: ye,
								source: e,
								target: t,
								trans_type: "en2zh",
								action: n || ""
							}))
					}
				}
				function m(e, t, n, r) {
					if (!Re) {
						var i = O(),
						o = P.TRS_URL + "/v1/page/" + ye + "/sentence/" + t;
						Re = !0,
						i.open("POST", o, !0),
						i.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
						i.timeout = 5e3,
						i.setRequestHeader("content-type", "application/json"),
						i.onload = function (e) {
							Re = !1;
							var t = JSON.parse(this.responseText);
							r(t)
						},
						i.onerror = function (e) {
							throw Re = !1,
							D.open({
								content: oe,
								skin: "msg",
								time: 3
							}),
							console.error(e),
							r(),
							new Error("commentPageSentence Error", e)
						},
						i.send(JSON.stringify({
								source: e,
								target: n,
								user_id: Ae,
								sentence_id: t,
								trans_type: "en2zh"
							}))
					}
				}
				function y(e, t, n, r) {
					if (!Re) {
						var i = O();
						Re = !0,
						t = t.toUpperCase();
						var o = P.TRS_URL + "/v1/page/" + ye + "/sentence/" + e + "/comment";
						i.open("POST", o, !0),
						i.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
						i.timeout = 3e3,
						i.setRequestHeader("content-type", "application/json"),
						i.onload = function (e) {
							Re = !1;
							var t = JSON.parse(this.responseText);
							0 == t.rc ? (D.open({
									content: ae,
									skin: "msg",
									time: 2
								}), n()) : t.rc == -1 ? D.open({
								content: se,
								skin: "msg",
								time: 2
							}) : D.open({
								content: oe,
								skin: "msg",
								time: 3
							})
						},
						i.onerror = function (e) {
							throw Re = !1,
							D.open({
								content: oe,
								skin: "msg",
								time: 3
							}),
							console.error(e),
							new Error("commentPageSentence Error", e)
						},
						f(),
						i.send(JSON.stringify({
								user_id: Ae,
								sentence_id: e,
								trans_type: "en2zh",
								action: t
							}))
					}
				}
				function v() {
					_e || (_e = !0, D.open({
							className: H,
							content: "想修改译文成为共同译者吗？<br>快来下载「彩云小译」吧！",
							btn: ["立即下载", "取消"],
							yes: function (e) {
								D.close(e),
								window.open(DOWNLOAD_URL, "_blank")
							},
							end: function () {
								setTimeout(function () {
									_e = !1
								}, 500)
							}
						}))
				}
				function x() {
					function e(n) {
						if (!(U(n).is(":hidden") || "SCRIPT" == n.nodeName || "LINK" == n.nodeName || "STYLE" == n.nodeName || "CODE" == n.nodeName || "NOSCRIPT" == n.nodeName || "CITE" == n.nodeName || n.classList && (n.classList.contains(H) || n.classList.contains(G) || n.classList.contains("qq_face") || n.classList.contains("msg_input_wrapper") || n.classList.contains("prettyprint") || n.classList.contains("PROGRAMLISTING"))))
							for (var r = n.childNodes, i = 0, o = r.length; i < o; i++) {
								var a = r[i];
								if (a && (!a.classList || !a.classList.contains(H) && !a.classList.contains(G)))
									if (a.classList && (a.classList.contains("js_message_plain") || a.classList.contains("message_body")))
										U(r[i]).children("." + G).length > 0 || (t(a), u.push(a));
									else if ("PRE" != a.nodeName)
										if ("P" != a.nodeName) {
											if (w(a)) {
												if (a.nodeName.indexOf("H") >= 0 && ("H1" == a.nodeName || "H2" == a.nodeName || "H3" == a.nodeName || "H4" == a.nodeName || "H5" == a.nodeName || "H6" == a.nodeName) && !(a.firstElementChild && ("SPAN" == a.firstElementChild.nodeName || "SPAN" == a.lastElementChild.nodeName || "A" == a.firstElementChild.nodeName || "A" == a.lastElementChild.nodeName) || a.parentElement && "A" == a.parentElement.nodeName)) {
													C(a, H),
													l.push(a);
													continue
												}
												if (!("SPAN" != a.nodeName && "LABEL" != a.nodeName && "LI" != a.nodeName || a.firstElementChild && "STRONG" != a.firstElementChild.nodeName)) {
													C(a, H),
													p.push(a);
													continue
												}
												if ("A" == a.nodeName && (!a.firstElementChild || "STRONG" == a.firstElementChild.nodeName)) {
													C(a, H),
													c.push(a);
													continue
												}
											}
											a.nodeType === Node.TEXT_NODE && T(a) ? (C(a.parentElement, H), m.push(a)) : a.nodeType === Node.ELEMENT_NODE && e(a)
										} else
											C(a, H), s.push(a)
							}
					}
					function t(e) {
						var t = document.createElement("font");
						C(t, G),
						e.appendChild(t)
					}
					function n() {
						for (var e = [], t = [], n = [], i = [], o = [], a = [], d = 0, f = l.length; d < f; d++)
							R(l[d]) && (e = e.concat(l.splice(d, 1)), d--);
						for (var d = 0, f = s.length; d < f; d++)
							R(s[d]) && (t = t.concat(s.splice(d, 1)), d--);
						u.length > 0 && (n = n.concat(u.splice(0, u.length)), r(n, "pre"));
						for (var d = 0, f = c.length; d < f; d++)
							R(c[d]) && (i = i.concat(c.splice(d, 1)), d--);
						for (var d = 0, f = p.length; d < f; d++)
							R(p[d]) && (o = o.concat(p.splice(d, 1)), d--);
						for (var d = 0, f = m.length; d < f; d++)
							_(m[d]) && (a = a.concat(m.splice(d, 1)), d--);
						var h = e.length + t.length + i.length + o.length,
						g = l.length + s.length + c.length + p.length,
						y = h / (h + g).toFixed(2) * 100;
						isNaN(y) && (y = 0),
						r(e, "h"),
						r(t, "p"),
						r(i, "a"),
						r(o, "span"),
						r(a, "text"),
						A(y)
					}
					function r(e, t) {
						for (var n = [], r = [], o = [], a = [], s = [], u = [], l = [], c = [], p = [], d = 0, f = e.length; d < f; d++) {
							var h = e[d],
							g = h.innerText;
							if ("text" == t && (g = h.nodeValue), g = g.trim()) {
								var m = F.detectLang(g),
								y = g.length;
								if ("jp" == m)
									y > 30 ? l.push(h) : y > 8 ? c.push(h) : p.push(h);
								else if ("zh" == m)
									y > 30 ? s.push(h) : y > 8 ? a.push(h) : u.push(h);
								else {
									var v = g.split(" ").length;
									v > 30 ? o.push(h) : v > 6 ? r.push(h) : n.push(h)
								}
							}
						}
						n.sort(function (e, n) {
							var r = e.innerText,
							i = n.innerText;
							return "text" == t && (r = e.nodeValue, i = n.nodeValue),
							r.trim().split(" ").length - i.trim().split(" ").length
						}),
						i(n, t, 50, "en2zh"),
						i(r, t, 10, "en2zh"),
						i(o, t, 2, "en2zh"),
						i(u, t, 50, "zh2en"),
						i(a, t, 10, "zh2en"),
						i(s, t, 2, "zh2en"),
						i(p, t, 50, "ja2zh"),
						i(c, t, 20, "ja2zh"),
						i(l, t, 2, "ja2zh")
					}
					function i(e, t, n, r) {
						var i = 25;
						for (n && (i = n); e.length > 0; ) {
							var a = e.splice(0, i);
							o(a, t, r)
						}
					}
					function o(e, t, n) {
						function r() {
							console.log("translate retry:", e),
							setTimeout(function () {
								o(e, t, n)
							}, 15e3)
						}
						for (var i = [], a = 0, s = e.length; a < s; a++) {
							var u = e[a].innerText;
							"text" == t && (u = e[a].nodeValue),
							i.push(E(u))
						}
						if (!(i.length <= 0)) {
							var l = "en2zh",
							c = P.TRS_URL + "/v1/page/translator";
							"ja2zh" == n ? (l = "ja2zh", c = P.TRS_URL + "/v1/page/translator") : "zh2en" == n && (l = "zh2en", c = P.TRS_URL + "/v1/page/translator");
							var p = O();
							p.open("POST", c, !0),
							p.setRequestHeader("content-type", "application/json"),
							p.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
							p.timeout = 27e3,
							p.ontimeout = function (r) {
								console.warn("timeout: ", r),
								D.open({
									content: Z,
									skin: "msg",
									time: 2
								}),
								o(e, t, n)
							},
							p.onerror = function (e) {
								throw r(),
								console.error(p, e),
								new Error("Translate Error", e)
							},
							p.onload = function (n) {
								var r = JSON.parse(p.responseText);
								if (r && 0 == r.rc) {
									var o = r.target;
									if (i.length != o.length)
										throw new Error("sources targets length error");
									for (var a = 0, s = e.length; a < s; a++) {
										var u = e[a],
										l = "";
										if (o[a] && o[a].target && (l = o[a].target.trim(), i[a].trim().toLowerCase() !== l.toLowerCase())) {
											var c = 0;
											o[a].sentence_id && (c = o[a].sentence_id);
											var d = o[a].count || 0;
											if ("p" == t) {
												var f = u.cloneNode(!0);
												if (f.innerText = l, f.contentEditable = !0, C(f, G), f.sentence_id = c, f.source_text = E(u.innerText), d > 1) {
													var h = document.createElement("span");
													h.className = q,
													h.innerText = "(" + d + ")",
													f.appendChild(h)
												}
												u.parentNode.insertBefore(f, u.nextSibling)
											} else if ("pre" == t) {
												var f = U(u).children("." + G)[0];
												if ("" != f.innerText)
													continue;
												l = S(l),
												l.length > 4 && (f.contentEditable = !0),
												f.sentence_id = c,
												f.source_text = E(u.innerText),
												f.innerText = " " + l
											} else if ("h" == t) {
												l = S(l);
												var f = u.cloneNode(!0);
												if (f.innerText = l, f.contentEditable = !0, f.sentence_id = c, f.source_text = E(u.innerText), C(f, G), d > 1) {
													var h = document.createElement("span");
													h.className = q,
													h.innerText = "(" + d + ")",
													f.appendChild(h)
												}
												u.parentNode.insertBefore(f, u.nextSibling)
											} else if ("a" == t || "span" == t) {
												if (l = S(l), i[a].trim().toLowerCase() === l.toLowerCase())
													continue;
												var g = document.createElement("font");
												if (C(g, G), l.length > 4 && "span" == t && (g.contentEditable = !0), g.sentence_id = c, g.source_text = E(u.innerText), d > 1) {
													var h = document.createElement("span");
													h.className = q,
													h.innerText = "(" + d + ")",
													g.appendChild(h)
												}
												g.innerText = " " + l,
												u.appendChild(g)
											} else {
												if (l = S(l), i[a].trim().toLowerCase() === l.toLowerCase())
													continue;
												var g = document.createElement("font");
												if (C(g, G), l.length > 4 && "A" != u.parentNode.nodeName && (g.contentEditable = !0), g.sentence_id = c, g.source_text = E(u.nodeValue), d > 1) {
													var h = document.createElement("span");
													h.className = q,
													h.innerText = "(" + d + ")",
													g.appendChild(h)
												}
												g.innerText = " " + l,
												u.parentNode.insertBefore(g, u.nextSibling)
											}
											C(u, j)
										}
									}
								} else
									console.error(r, e)
							},
							p.send(JSON.stringify({
									source: i,
									trans_type: l,
									request_id: Ae || me || ge || "web-translate",
									url: document.URL,
									page_id: ye,
									replaced: !0,
									cached: P.CACHED
								}))
						}
					}
					var a = document.querySelectorAll("." + H);
					if (!(a && a.length > 3)) {
						var s = [],
						u = [],
						l = [],
						c = [],
						p = [],
						g = (Date.now(), null),
						m = [];
						we = setInterval(function () {
								e(document.body),
								n()
							}, Te),
						A(20),
						e(document.body),
						A(40),
						n(),
						A(80),
						window.onscroll = function (t) {
							null !== g && clearTimeout(g),
							g = setTimeout(function () {
									e(document.body),
									n(),
									U(window).scrollTop() + U(window).height() >= U(document).height() && (U(".cyxy-footer").show(), setTimeout(function () {
											U(".cyxy-footer").hide()
										}, 7500))
								}, 200)
						},
						setTimeout(function () {}, 500);
						U("body").on("click", "." + G + "[contenteditable]", function () {
							if (!U("#cyxy-popup-favour").hasClass("commit")) {
								M = U(this),
								M.data("source_text") || M.data("source_text", this.source_text),
								U(this).find("." + q).remove();
								var e = this.sentence_id;
								if (h(), !Ae) {
									if ("share" == Ee)
										return v(), U(this);
									if ("android" == Ee)
										return window.js.showLoginDialog(Q), U(this);
									if ("ios" == Ee)
										return window.webkit.messageHandlers.showLoginDialog.postMessage({
											title: Q
										}), U(this);
									B.testCookie(function (e) {
										return e ? (Ae = e._id, void(xe = {
													username: e.name || "***",
													_id: e._id,
													avatar_url: e.avatar || P.DEFAULT_AVATAR_URL
												})) : (D.open({
												content: Y,
												btn: [de, fe],
												yes: function (e) {
													D.close(e),
													window.open(P.LOGIN_URL, "_blank")
												}
											}), U(this))
									})
								}
								e ? B.fetchPageSentenceTargetList(e, Ae, ye, function (e) {
									if (0 == e.rc) {
										var t,
										n = e.sentence;
										if (n && n.length > 0) {
											M.data("index", 0),
											U("#cyxy-popup-left-slide").hide(),
											M.data("targetList", n);
											for (var r = 0, i = n.length; r < i; r++)
												n[r] && (n[r].user && Ae == n[r].user.id && (M.data("user_s_id", n[r].id), M.data("user_index", r)), n[r].invalid && (n.splice(r, 1), r--));
											n.length > 1 && U("#cyxy-popup-right-slide").show()
										}
										t = n[0],
										M.data("targetInfo") && M.data("targetInfo").user.id != t.user.id && (t = M.data("targetInfo"), M.data("index", -1)),
										U("#cyxy-popup-avatar").attr("src", t.user.avatar_url),
										U("#cyxy-popup-name").text(t.user.username),
										U("#cyxy-popup-time").text(F.getDateDiff(t.updated_at)),
										U("#cyxy-popup-favour-num").text(t.rate.LIKE || 0),
										U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL),
										U("#cyxy-popup-oppose-num").text(t.rate.UNLIKE || 0)
									}
								}) : (M.data("targetList", []), U("#cyxy-popup-left-slide").hide(), U("#cyxy-popup-right-slide").hide(), U("#cyxy-popup-avatar").attr("src", P.XIAOYI_DEFAULT_URL), U("#cyxy-popup-name").text(ue), U("#cyxy-popup-time").text(le), U("#cyxy-popup-favour-num").text("0"), U("#cyxy-popup-favour-img").attr("src", P.FAVOR_IMG_URL), U(this).data("xiaoyiText", U(this).text()));
								for (var t = this, n = t.offsetTop + t.offsetHeight + 5, r = t.offsetLeft; t.offsetParent; )
									t = t.offsetParent, n += t.offsetTop, r += t.offsetLeft;
								return r > window.innerWidth / 3 && (r = .25 * window.innerWidth),
								U(".cyxy-target-popup").css({
									top: n,
									left: r
								}),
								U(".cyxy-target-popup").show(),
								U(this).data("before", U(this).text()),
								U(this)
							}
						}).on("paste input", "." + G + "[contenteditable]", function () {
							if (!U("#cyxy-popup-favour").hasClass("commit"))
								return U(this).data("before") !== U(this).text() && (M.data("status", "edit"), U("#cyxy-popup-avatar").attr("src", xe.avatar_url), U("#cyxy-popup-name").text(xe.username), U("#cyxy-popup-time").text(pe), U("#cyxy-popup-favour-num").text(ce), U("#cyxy-popup-favour-img").attr("src", P.CHECKED_IMG_URL), U("#cyxy-popup-favour").addClass("commit"), U("#cyxy-popup-oppose-num").text("0")), U(this)
						}).on("blur focusout", "." + G + "[contenteditable]", function () {
							return d(),
							f(),
							U(this)
						})
					}
				}
				function A(e) {
					"android" == Ee && window.js.changeProgress(e)
				}
				function b(e) {
					return !!e.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi)
				}
				function w(e) {
					return e.innerText && e.innerText.trim().length > 1 && e.innerText.length < 2048 && isNaN(e.innerText) && !b(e.innerText)
				}
				function T(e) {
					if (e.nodeValue) {
						var t = e.nodeValue.trim();
						return t.length > 1 && e.nodeValue.length < 2048 && isNaN(t) && !b(t)
					}
					return !1
				}
				function E(e) {
					return e.trim().replace("\n", "").replace("<br>", "").replace("&nbsp;", "")
				}
				function S(e) {
					var t = e[e.length - 1];
					return "." != t && "。" != t && "！" != t || (e = e.substr(0, e.length - 1).trim()),
					e
				}
				function C(e, t) {
					var n = e.className || "";
					if ("String" != typeof n || n.indexOf(t) === -1) {
						var r = "" != n ? " " : "",
						i = n + r + t;
						e.className = i
					}
				}
				function R(e) {
					if (e) {
						for (var t = e.offsetTop || 0, n = e.offsetLeft || 0; e.offsetParent; )
							e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft;
						return t < window.pageYOffset + window.innerHeight * X
					}
				}
				function _(e) {
					if (e && e.parentElement) {
						for (var t = e.parentElement, n = t.offsetTop || 0, r = t.offsetLeft || 0; t.offsetParent; )
							t = t.offsetParent, n += t.offsetTop, r += t.offsetLeft;
						return n < window.pageYOffset + window.innerHeight * X && r < window.pageXOffset + window.innerWidth
					}
				}
				function k() {
					return he.indexOf("Android") > 0
				}
				function L() {
					return /(iPhone|iPad|iPod)/i.test(he)
				}
				function O() {
					for (var e = [function () {
								return new XMLHttpRequest
							}, function () {
								return new ActiveXObject("Msxml2.XMLHTTP")
							}, function () {
								return new ActiveXObject("Msxml3.XMLHTTP")
							}, function () {
								return new ActiveXObject("Microsoft.XMLHTTP")
							}
						], t = !1, n = 0; n < e.length; n++) {
						try {
							t = e[n]()
						} catch (e) {
							continue
						}
						break
					}
					return t
				}
				var N = document.querySelectorAll(".cyxy-target-popup");
				if (!(N && N.length > 0)) {
					var M,
					Raven = t(1),
					I = t(8),
					D = (t(9), t(14)),
					B = t(15),
					P = t(16),
					F = t(17),
					U = t(18),
					H = "cyxy-trs-source",
					j = "cyxy-trs-source-ted",
					G = "cyxy-trs-target",
					q = "cyxy-target-count",
					X = 2.2,
					V = "小译火力全开！LingoCloud, FIRE!",
					K = "",
					W = "+30 彩云朵！现有：",
					z = "限免次数已不足，成为小译注册用户，畅享更多阅读次数！现在注册还送彩云朵哟~",
					J = "诶呦喂~彩云朵不足！修订译文或点击赞、分享赚取彩云朵，或购买VIP畅享无限阅读次数",
					Q = "您还没有登录，是否登录编辑译文？",
					Y = "您还没有登录，是否登录编辑译文？如果已经登录，请刷新页面重试哦",
					Z = "翻译请求超时，可能是服务器太繁忙了，小译正在重试...",
					$ = "抱歉，网页认证有误，请刷新重试",
					ee = "抱歉，网络请求有误，请刷新重试",
					te = "抱歉，本地数据获取异常，请刷新重试",
					ne = "抱歉，获取用户信息失败，请刷新重试",
					re = "修改译文成功",
					ie = "译文未修改",
					oe = "提交有误",
					ae = "感谢点赞，+5 彩云朵！",
					se = "已经赞过啦",
					ue = "彩云小译",
					le = "刚刚",
					ce = "提交",
					pe = "现在",
					de = "登录",
					fe = "取消",
					he = navigator.userAgent,
					ge = "",
					me = "",
					ye = 0,
					ve = "",
					xe = {},
					Ae = "",
					be = location.origin + location.pathname,
					we = null,
					Te = 2300;
					(location.host.indexOf("youtube.com") >= 0 || location.host.indexOf("wx.qq.com") >= 0 || location.host.indexOf("slack.com") >= 0) && (Te = 1e3),
					"local" != P.ENV && Raven.config("https://c49231b0334e4624b8941767b8f6bfa4@sentry.in.caiyunapp.com/22", {
						release: P.VERSION,
						environment: P.ENV,
						sampleRate: 1
					}).install();
					var Ee = i();
					Raven.context(function () {
						e()
					});
					var Se,
					Ce = null,
					Re = !1,
					_e = !1,
					ke = new Date;
					window.cyPageMark = function () {
						var e = F.wordStatistics(document.body),
						t = Math.round(((new Date).getTime() - ke.getTime()) / 1e3),
						n = (1.6 * e.en_words + e.zh_chars) / 9,
						r = t / n;
						r >= 1 && (r = 1),
						B.pageMark({
							time: t,
							chars: Math.round(e.chars * r),
							en_words: Math.round(e.en_words * r),
							zh_chars: Math.round(e.zh_chars * r)
						}, Ae, ye, function (e) {})
					},
					window.onbeforeunload = function () {
						cyPageMark(),
						console.log(location.href)
					}
				}
			}
			()
		}, function (e, exports, t) {
			(function (n) {
				"use strict";
				var r = t(2),
				i = "undefined" != typeof window ? window : "undefined" != typeof n ? n : "undefined" != typeof self ? self : {},
				o = i.Raven,
				Raven = new r;
				Raven.noConflict = function () {
					return i.Raven = o,
					Raven
				},
				Raven.afterLoad(),
				e.exports = Raven
			}).call(exports, function () {
				return this
			}
				())
		}, function (e, exports, t) {
			(function (n) {
				"use strict";
				function r() {
					return +new Date
				}
				function i(e, t) {
					return a(t) ? function (n) {
						return t(n, e)
					}
					 : t
				}
				function Raven() {
					this._hasJSON = !("object" != typeof JSON || !JSON.stringify),
					this._hasDocument = !o(I),
					this._hasNavigator = !o(D),
					this._lastCapturedException = null,
					this._lastData = null,
					this._lastEventId = null,
					this._globalServer = null,
					this._globalKey = null,
					this._globalProject = null,
					this._globalContext = {},
					this._globalOptions = {
						logger: "javascript",
						ignoreErrors: [],
						ignoreUrls: [],
						whitelistUrls: [],
						includePaths: [],
						crossOrigin: "anonymous",
						collectWindowErrors: !0,
						maxMessageLength: 0,
						maxUrlLength: 250,
						stackTraceLimit: 50,
						autoBreadcrumbs: !0,
						instrument: !0,
						sampleRate: 1
					},
					this._ignoreOnError = 0,
					this._isRavenInstalled = !1,
					this._originalErrorStackTraceLimit = Error.stackTraceLimit,
					this._originalConsole = M.console || {},
					this._originalConsoleMethods = {},
					this._plugins = [],
					this._startTime = r(),
					this._wrappedBuiltIns = [],
					this._breadcrumbs = [],
					this._lastCapturedEvent = null,
					this._keypressTimeout,
					this._location = M.location,
					this._lastHref = this._location && this._location.href,
					this._resetBackoff();
					for (var e in this._originalConsole)
						this._originalConsoleMethods[e] = this._originalConsole[e]
				}
				function o(e) {
					return void 0 === e
				}
				function a(e) {
					return "function" == typeof e
				}
				function s(e) {
					return "[object String]" === B.toString.call(e)
				}
				function u(e) {
					for (var t in e)
						return !1;
					return !0
				}
				function l(e, t) {
					var n,
					r;
					if (o(e.length))
						for (n in e)
							f(e, n) && t.call(null, n, e[n]);
					else if (r = e.length)
						for (n = 0; n < r; n++)
							t.call(null, n, e[n])
				}
				function c(e, t) {
					return t ? (l(t, function (t, n) {
							e[t] = n
						}), e) : e
				}
				function p(e) {
					return !!Object.isFrozen && Object.isFrozen(e)
				}
				function d(e, t) {
					return !t || e.length <= t ? e : e.substr(0, t) + "…"
				}
				function f(e, t) {
					return B.hasOwnProperty.call(e, t)
				}
				function h(e) {
					for (var t, n = [], r = 0, i = e.length; r < i; r++)
						t = e[r], s(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
					return new RegExp(n.join("|"), "i")
				}
				function g(e) {
					var t = [];
					return l(e, function (e, n) {
						t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
					}),
					t.join("&")
				}
				function m(e) {
					var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
					if (!t)
						return {};
					var n = t[6] || "",
					r = t[8] || "";
					return {
						protocol: t[2],
						host: t[4],
						path: t[5],
						relative: t[5] + n + r
					}
				}
				function y() {
					var e = M.crypto || M.msCrypto;
					if (!o(e) && e.getRandomValues) {
						var t = new Uint16Array(8);
						e.getRandomValues(t),
						t[3] = 4095 & t[3] | 16384,
						t[4] = 16383 & t[4] | 32768;
						var n = function (e) {
							for (var t = e.toString(16); t.length < 4; )
								t = "0" + t;
							return t
						};
						return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
					}
					return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
						var t = 16 * Math.random() | 0,
						n = "x" === e ? t : 3 & t | 8;
						return n.toString(16)
					})
				}
				function v(e) {
					for (var t, n = 5, r = 80, i = [], o = 0, a = 0, s = " > ", u = s.length; e && o++ < n && (t = x(e), !("html" === t || o > 1 && a + i.length * u + t.length >= r)); )
						i.push(t), a += t.length, e = e.parentNode;
					return i.reverse().join(s)
				}
				function x(e) {
					var t,
					n,
					r,
					i,
					o,
					a = [];
					if (!e || !e.tagName)
						return "";
					if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), t = e.className, t && s(t))
						for (n = t.split(/\s+/), o = 0; o < n.length; o++)
							a.push("." + n[o]);
					var u = ["type", "name", "title", "alt"];
					for (o = 0; o < u.length; o++)
						r = u[o], i = e.getAttribute(r), i && a.push("[" + r + '="' + i + '"]');
					return a.join("")
				}
				function A(e, t) {
					return !!(!!e ^ !!t)
				}
				function b(e, t) {
					return !A(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && w(e.stacktrace, t.stacktrace))
				}
				function w(e, t) {
					if (A(e, t))
						return !1;
					var n = e.frames,
					r = t.frames;
					if (n.length !== r.length)
						return !1;
					for (var i, o, a = 0; a < n.length; a++)
						if (i = n[a], o = r[a], i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function  !== o.function )return !1;
							return !0
		}
		function T(e, t, n, r) {
			var i = e[t];
			e[t] = n(i),
			r && r.push([e, t, i])
		}
		var E = t(3),
		S = t(5),
		C = t(6),
		R = t(4),
		_ = R.isError,
		k = R.isObject,
		L = t(7).wrapMethod,
		O = "source protocol user pass host port path".split(" "),
		N = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
		M = "undefined" != typeof window ? window : "undefined" != typeof n ? n : "undefined" != typeof self ? self : {},
		I = M.document,
		D = M.navigator;
		Raven.prototype = {
			VERSION: "3.17.0",
			debug: !1,
			TraceKit: E,
			config: function (e, t) {
				var n = this;
				if (n._globalServer)
					return this._logDebug("error", "Error: Raven has already been configured") , n;
					if (!e)
						return n;
					var r = n._globalOptions;
					t && l(t, function (e, t) {
						"tags" === e || "extra" === e || "user" === e ? n._globalContext[e] = t : r[e] = t
					}),
					n.setDSN(e),
					r.ignoreErrors.push(/^Script error\.?$/),
					r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
					r.ignoreErrors = h(r.ignoreErrors),
					r.ignoreUrls = !!r.ignoreUrls.length && h(r.ignoreUrls),
					r.whitelistUrls = !!r.whitelistUrls.length && h(r.whitelistUrls),
					r.includePaths = h(r.includePaths),
					r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
					var i = {
						xhr: !0,
						console: !0,
						dom: !0,
						location: !0
					},
					o = r.autoBreadcrumbs;
					"[object Object]" === {}
					.toString.call(o) ? o = c(i, o) : o !== !1 && (o = i),
					r.autoBreadcrumbs = o;
					var a = {
						tryCatch: !0
					},
					s = r.instrument;
					return "[object Object]" === {}
					.toString.call(s) ? s = c(a, s) : s !== !1 && (s = a),
					r.instrument = s,
					E.collectWindowErrors = !!r.collectWindowErrors,
					n
				},
				install: function () {
					var e = this;
					return e.isSetup() && !e._isRavenInstalled && (E.report.subscribe(function () {
							e._handleOnErrorStackInfo.apply(e, arguments)
						}), e._globalOptions.instrument && e._globalOptions.instrument.tryCatch && e._instrumentTryCatch(), e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(), e._drainPlugins(), e._isRavenInstalled = !0),
					Error.stackTraceLimit = e._globalOptions.stackTraceLimit,
					this
				},
				setDSN: function (e) {
					var t = this,
					n = t._parseDSN(e),
					r = n.path.lastIndexOf("/"),
					i = n.path.substr(1, r);
					t._dsn = e,
					t._globalKey = n.user,
					t._globalSecret = n.pass && n.pass.substr(1),
					t._globalProject = n.path.substr(r + 1),
					t._globalServer = t._getGlobalServer(n),
					t._globalEndpoint = t._globalServer + "/" + i + "api/" + t._globalProject + "/store/",
					this._resetBackoff()
				},
				context: function (e, t, n) {
					return a(e) && (n = t || [], t = e, e = void 0),
					this.wrap(e, t).apply(this, n)
				},
				wrap: function (e, t, n) {
					function r() {
						var r = [],
						o = arguments.length,
						s = !e || e && e.deep !== !1;
						for (n && a(n) && n.apply(this, arguments); o--; )
							r[o] = s ? i.wrap(e, arguments[o]) : arguments[o];
						try {
							return t.apply(this, r)
						} catch (t) {
							throw i._ignoreNextOnError(),
							i.captureException(t, e),
							t
						}
					}
					var i = this;
					if (o(t) && !a(e))
						return e;
					if (a(e) && (t = e, e = void 0), !a(t))
						return t;
					try {
						if (t.__raven__)
							return t;
						if (t.__raven_wrapper__)
							return t.__raven_wrapper__
					} catch (e) {
						return t
					}
					for (var s in t)
						f(t, s) && (r[s] = t[s]);
					return r.prototype = t.prototype,
					t.__raven_wrapper__ = r,
					r.__raven__ = !0,
					r.__inner__ = t,
					r
				},
				uninstall: function () {
					return E.report.uninstall(),
					this._restoreBuiltIns(),
					Error.stackTraceLimit = this._originalErrorStackTraceLimit,
					this._isRavenInstalled = !1,
					this
				},
				captureException: function (e, t) {
					if (!_(e))
						return this.captureMessage(e, c({
								trimHeadFrames: 1,
								stacktrace: !0
							}, t));
					this._lastCapturedException = e;
					try {
						var n = E.computeStackTrace(e);
						this._handleStackInfo(n, t)
					} catch (t) {
						if (e !== t)
							throw t
					}
					return this
				},
				captureMessage: function (e, t) {
					if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
						t = t || {};
						var n = c({
								message: e + ""
							}, t);
						if (this._globalOptions.stacktrace || t && t.stacktrace) {
							var r;
							try {
								throw new Error(e)
							} catch (e) {
								r = e
							}
							r.name = null,
							t = c({
									fingerprint: e,
									trimHeadFrames: (t.trimHeadFrames || 0) + 1
								}, t);
							var i = E.computeStackTrace(r),
							o = this._prepareFrames(i, t);
							n.stacktrace = {
								frames: o.reverse()
							}
						}
						return this._send(n),
						this
					}
				},
				captureBreadcrumb: function (e) {
					var t = c({
							timestamp: r() / 1e3
						}, e);
					if (a(this._globalOptions.breadcrumbCallback)) {
						var n = this._globalOptions.breadcrumbCallback(t);
						if (k(n) && !u(n))
							t = n;
						else if (n === !1)
							return this
					}
					return this._breadcrumbs.push(t),
					this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
					this
				},
				addPlugin: function (e) {
					var t = [].slice.call(arguments, 1);
					return this._plugins.push([e, t]),
					this._isRavenInstalled && this._drainPlugins(),
					this
				},
				setUserContext: function (e) {
					return this._globalContext.user = e,
					this
				},
				setExtraContext: function (e) {
					return this._mergeContext("extra", e),
					this
				},
				setTagsContext: function (e) {
					return this._mergeContext("tags", e),
					this
				},
				clearContext: function () {
					return this._globalContext = {},
					this
				},
				getContext: function () {
					return JSON.parse(S(this._globalContext))
				},
				setEnvironment: function (e) {
					return this._globalOptions.environment = e,
					this
				},
				setRelease: function (e) {
					return this._globalOptions.release = e,
					this
				},
				setDataCallback: function (e) {
					var t = this._globalOptions.dataCallback;
					return this._globalOptions.dataCallback = i(t, e),
					this
				},
				setBreadcrumbCallback: function (e) {
					var t = this._globalOptions.breadcrumbCallback;
					return this._globalOptions.breadcrumbCallback = i(t, e),
					this
				},
				setShouldSendCallback: function (e) {
					var t = this._globalOptions.shouldSendCallback;
					return this._globalOptions.shouldSendCallback = i(t, e),
					this
				},
				setTransport: function (e) {
					return this._globalOptions.transport = e,
					this
				},
				lastException: function () {
					return this._lastCapturedException
				},
				lastEventId: function () {
					return this._lastEventId
				},
				isSetup: function () {
					return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
				},
				afterLoad: function () {
					var e = M.RavenConfig;
					e && this.config(e.dsn, e.config).install()
				},
				showReportDialog: function (e) {
					if (I) {
						e = e || {};
						var t = e.eventId || this.lastEventId();
						if (!t)
							throw new C("Missing eventId");
						var n = e.dsn || this._dsn;
						if (!n)
							throw new C("Missing DSN");
						var r = encodeURIComponent,
						i = "";
						i += "?eventId=" + r(t),
						i += "&dsn=" + r(n);
						var o = e.user || this._globalContext.user;
						o && (o.name && (i += "&name=" + r(o.name)), o.email && (i += "&email=" + r(o.email)));
						var a = this._getGlobalServer(this._parseDSN(n)),
						s = I.createElement("script");
						s.async = !0,
						s.src = a + "/api/embed/error-page/" + i,
						(I.head || I.body).appendChild(s)
					}
				},
				_ignoreNextOnError: function () {
					var e = this;
					this._ignoreOnError += 1,
					setTimeout(function () {
						e._ignoreOnError -= 1
					})
				},
				_triggerEvent: function (e, t) {
					var n,
					r;
					if (this._hasDocument) {
						t = t || {},
						e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1),
						I.createEvent ? (n = I.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = I.createEventObject(), n.eventType = e);
						for (r in t)
							f(t, r) && (n[r] = t[r]);
						if (I.createEvent)
							I.dispatchEvent(n);
						else
							try {
								I.fireEvent("on" + n.eventType.toLowerCase(), n)
							} catch (e) {}
					}
				},
				_breadcrumbEventHandler: function (e) {
					var t = this;
					return function (n) {
						if (t._keypressTimeout = null, t._lastCapturedEvent !== n) {
							t._lastCapturedEvent = n;
							var r;
							try {
								r = v(n.target)
							} catch (e) {
								r = "<unknown>"
							}
							t.captureBreadcrumb({
								category: "ui." + e,
								message: r
							})
						}
					}
				},
				_keypressEventHandler: function () {
					var e = this,
					t = 1e3;
					return function (n) {
						var r;
						try {
							r = n.target
						} catch (e) {
							return
						}
						var i = r && r.tagName;
						if (i && ("INPUT" === i || "TEXTAREA" === i || r.isContentEditable)) {
							var o = e._keypressTimeout;
							o || e._breadcrumbEventHandler("input")(n),
							clearTimeout(o),
							e._keypressTimeout = setTimeout(function () {
									e._keypressTimeout = null
								}, t)
						}
					}
				},
				_captureUrlChange: function (e, t) {
					var n = m(this._location.href),
					r = m(t),
					i = m(e);
					this._lastHref = t,
					n.protocol === r.protocol && n.host === r.host && (t = r.relative),
					n.protocol === i.protocol && n.host === i.host && (e = i.relative),
					this.captureBreadcrumb({
						category: "navigation",
						data: {
							to: t,
							from: e
						}
					})
				},
				_instrumentTryCatch: function () {
					function e(e) {
						return function (t, r) {
							for (var i = new Array(arguments.length), o = 0; o < i.length; ++o)
								i[o] = arguments[o];
							var s = i[0];
							return a(s) && (i[0] = n.wrap(s)),
							e.apply ? e.apply(this, i) : e(i[0], i[1])
						}
					}
					function t(e) {
						var t = M[e] && M[e].prototype;
						t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (T(t, "addEventListener", function (t) {
								return function (r, o, a, s) {
									try {
										o && o.handleEvent && (o.handleEvent = n.wrap(o.handleEvent))
									} catch (e) {}
									var u,
									l,
									c;
									return i && i.dom && ("EventTarget" === e || "Node" === e) && (l = n._breadcrumbEventHandler("click"), c = n._keypressEventHandler(), u = function (e) {
										if (e) {
											var t;
											try {
												t = e.type
											} catch (e) {
												return
											}
											return "click" === t ? l(e) : "keypress" === t ? c(e) : void 0
										}
									}),
									t.call(this, r, n.wrap(o, void 0, u), a, s)
								}
							}, r), T(t, "removeEventListener", function (e) {
								return function (t, n, r, i) {
									try {
										n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
									} catch (e) {}
									return e.call(this, t, n, r, i)
								}
							}, r))
					}
					var n = this,
					r = n._wrappedBuiltIns,
					i = this._globalOptions.autoBreadcrumbs;
					T(M, "setTimeout", e, r),
					T(M, "setInterval", e, r),
					M.requestAnimationFrame && T(M, "requestAnimationFrame", function (e) {
						return function (t) {
							return e(n.wrap(t))
						}
					}, r);
					for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], s = 0; s < o.length; s++)
						t(o[s])
				},
				_instrumentBreadcrumbs: function () {
					function e(e, n) {
						e in n && a(n[e]) && T(n, e, function (e) {
							return t.wrap(e)
						})
					}
					var t = this,
					n = this._globalOptions.autoBreadcrumbs,
					r = t._wrappedBuiltIns;
					if (n.xhr && "XMLHttpRequest" in M) {
						var i = XMLHttpRequest.prototype;
						T(i, "open", function (e) {
							return function (n, r) {
								return s(r) && r.indexOf(t._globalKey) === -1 && (this.__raven_xhr = {
										method: n,
										url: r,
										status_code: null
									}),
								e.apply(this, arguments)
							}
						}, r),
						T(i, "send", function (n) {
							return function (r) {
								function i() {
									if (o.__raven_xhr && (1 === o.readyState || 4 === o.readyState)) {
										try {
											o.__raven_xhr.status_code = o.status
										} catch (e) {}
										t.captureBreadcrumb({
											type: "http",
											category: "xhr",
											data: o.__raven_xhr
										})
									}
								}
								for (var o = this, s = ["onload", "onerror", "onprogress"], u = 0; u < s.length; u++)
									e(s[u], o);
								return "onreadystatechange" in o && a(o.onreadystatechange) ? T(o, "onreadystatechange", function (e) {
									return t.wrap(e, void 0, i)
								}) : o.onreadystatechange = i,
								n.apply(this, arguments)
							}
						}, r)
					}
					n.xhr && "fetch" in M && T(M, "fetch", function (e) {
						return function (n, r) {
							for (var i = new Array(arguments.length), o = 0; o < i.length; ++o)
								i[o] = arguments[o];
							var a,
							s = i[0],
							u = "GET";
							"string" == typeof s ? a = s : (a = s.url, s.method && (u = s.method)),
							i[1] && i[1].method && (u = i[1].method);
							var l = {
								method: u,
								url: a,
								status_code: null
							};
							return t.captureBreadcrumb({
								type: "http",
								category: "fetch",
								data: l
							}),
							e.apply(this, i).then(function (e) {
								return l.status_code = e.status,
								e
							})
						}
					}, r),
					n.dom && this._hasDocument && (I.addEventListener ? (I.addEventListener("click", t._breadcrumbEventHandler("click"), !1), I.addEventListener("keypress", t._keypressEventHandler(), !1)) : (I.attachEvent("onclick", t._breadcrumbEventHandler("click")), I.attachEvent("onkeypress", t._keypressEventHandler())));
					var o = M.chrome,
					u = o && o.app && o.app.runtime,
					c = !u && M.history && history.pushState;
					if (n.location && c) {
						var p = M.onpopstate;
						M.onpopstate = function () {
							var e = t._location.href;
							if (t._captureUrlChange(t._lastHref, e), p)
								return p.apply(this, arguments)
						},
						T(history, "pushState", function (e) {
							return function () {
								var n = arguments.length > 2 ? arguments[2] : void 0;
								return n && t._captureUrlChange(t._lastHref, n + ""),
								e.apply(this, arguments)
							}
						}, r)
					}
					if (n.console && "console" in M && console.log) {
						var d = function (e, n) {
							t.captureBreadcrumb({
								message: e,
								level: n.level,
								category: "console"
							})
						};
						l(["debug", "info", "warn", "error", "log"], function (e, t) {
							L(console, t, d)
						})
					}
				},
				_restoreBuiltIns: function () {
					for (var e; this._wrappedBuiltIns.length; ) {
						e = this._wrappedBuiltIns.shift();
						var t = e[0],
						n = e[1],
						r = e[2];
						t[n] = r
					}
				},
				_drainPlugins: function () {
					var e = this;
					l(this._plugins, function (t, n) {
						var r = n[0],
						i = n[1];
						r.apply(e, [e].concat(i))
					})
				},
				_parseDSN: function (e) {
					var t = N.exec(e),
					n = {},
					r = 7;
					try {
						for (; r--; )
							n[O[r]] = t[r] || ""
					} catch (t) {
						throw new C("Invalid DSN: " + e)
					}
					if (n.pass && !this._globalOptions.allowSecretKey)
						throw new C("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
					return n
				},
				_getGlobalServer: function (e) {
					var t = "//" + e.host + (e.port ? ":" + e.port : "");
					return e.protocol && (t = e.protocol + ":" + t),
					t
				},
				_handleOnErrorStackInfo: function () {
					this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
				},
				_handleStackInfo: function (e, t) {
					var n = this._prepareFrames(e, t);
					this._triggerEvent("handle", {
						stackInfo: e,
						options: t
					}),
					this._processException(e.name, e.message, e.url, e.lineno, n, t)
				},
				_prepareFrames: function (e, t) {
					var n = this,
					r = [];
					if (e.stack && e.stack.length && (l(e.stack, function (e, t) {
								var i = n._normalizeFrame(t);
								i && r.push(i)
							}), t && t.trimHeadFrames))
						for (var i = 0; i < t.trimHeadFrames && i < r.length; i++)
							r[i].in_app = !1;
					return r = r.slice(0, this._globalOptions.stackTraceLimit)
				},
				_normalizeFrame: function (e) {
					if (e.url) {
						var t = {
							filename: e.url,
							lineno: e.line,
							colno: e.column,
							function : e.func || "?"
					};
					return t.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(t.filename) || /(Raven|TraceKit)\./.test(t.function ) || /raven\.(min\.)?js$/.test(t.filename)), t
				}
			},
			_processException: function (e, t, n, r, i, o) {
				var a;
				if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) && (t += "", i && i.length ? (n = i[0].filename || n, i.reverse(), a = {
								frames: i
							}) : n && (a = {
								frames: [{
										filename: n,
										lineno: r,
										in_app: !0
									}
								]
							}), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
					var s = c({
							exception: {
								values: [{
										type: e,
										value: t,
										stacktrace: a
									}
								]
							},
							culprit: n
						}, o);
					this._send(s)
				}
			},
			_trimPacket: function (e) {
				var t = this._globalOptions.maxMessageLength;
				if (e.message && (e.message = d(e.message, t)), e.exception) {
					var n = e.exception.values[0];
					n.value = d(n.value, t)
				}
				var r = e.request;
				return r && (r.url && (r.url = d(r.url, this._globalOptions.maxUrlLength)), r.Referer && (r.Referer = d(r.Referer, this._globalOptions.maxUrlLength))),
				e.breadcrumbs && e.breadcrumbs.values && this._trimBreadcrumbs(e.breadcrumbs),
				e
			},
			_trimBreadcrumbs: function (e) {
				for (var t, n, r, i = ["to", "from", "url"], o = 0; o < e.values.length; ++o)
					if (n = e.values[o], n.hasOwnProperty("data") && k(n.data) && !p(n.data)) {
						r = c({}, n.data);
						for (var a = 0; a < i.length; ++a)
							t = i[a], r.hasOwnProperty(t) && (r[t] = d(r[t], this._globalOptions.maxUrlLength));
						e.values[o].data = r
					}
			},
			_getHttpData: function () {
				if (this._hasNavigator || this._hasDocument) {
					var e = {};
					return this._hasNavigator && D.userAgent && (e.headers = {
							"User-Agent": navigator.userAgent
						}),
					this._hasDocument && (I.location && I.location.href && (e.url = I.location.href), I.referrer && (e.headers || (e.headers = {}), e.headers.Referer = I.referrer)),
					e
				}
			},
			_resetBackoff: function () {
				this._backoffDuration = 0,
				this._backoffStart = null
			},
			_shouldBackoff: function () {
				return this._backoffDuration && r() - this._backoffStart < this._backoffDuration
			},
			_isRepeatData: function (e) {
				var t = this._lastData;
				return !(!t || e.message !== t.message || e.culprit !== t.culprit) && (e.stacktrace || t.stacktrace ? w(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || b(e.exception, t.exception))
			},
			_setBackoffState: function (e) {
				if (!this._shouldBackoff()) {
					var t = e.status;
					if (400 === t || 401 === t || 429 === t) {
						var n;
						try {
							n = e.getResponseHeader("Retry-After"),
							n = 1e3 * parseInt(n, 10)
						} catch (e) {}
						this._backoffDuration = n ? n : 2 * this._backoffDuration || 1e3,
						this._backoffStart = r()
					}
				}
			},
			_send: function (e) {
				var t = this._globalOptions,
				n = {
					project: this._globalProject,
					logger: t.logger,
					platform: "javascript"
				},
				i = this._getHttpData();
				if (i && (n.request = i), e.trimHeadFrames && delete e.trimHeadFrames, e = c(n, e), e.tags = c(c({}, this._globalContext.tags), e.tags), e.extra = c(c({}, this._globalContext.extra), e.extra), e.extra["session:duration"] = r() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {
							values: [].slice.call(this._breadcrumbs, 0)
						}), u(e.tags) && delete e.tags, this._globalContext.user && (e.user = this._globalContext.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), a(t.dataCallback) && (e = t.dataCallback(e) || e), e && !u(e) && (!a(t.shouldSendCallback) || t.shouldSendCallback(e)))
					return this._shouldBackoff() ? void this._logDebug("warn", "Raven dropped error due to backoff: ", e) : void("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this._sendProcessedPayload(e) : this._sendProcessedPayload(e))
			},
			_getUuid: function () {
				return y()
			},
			_sendProcessedPayload: function (e, t) {
				var n = this,
				r = this._globalOptions;
				if (this.isSetup()) {
					if (this._lastEventId = e.event_id || (e.event_id = this._getUuid()), e = this._trimPacket(e), !this._globalOptions.allowDuplicates && this._isRepeatData(e))
						return void this._logDebug("warn", "Raven dropped repeat event: ", e);
					this._lastData = e,
					this._logDebug("debug", "Raven about to send:", e);
					var i = {
						sentry_version: "7",
						sentry_client: "raven-js/" + this.VERSION,
						sentry_key: this._globalKey
					};
					this._globalSecret && (i.sentry_secret = this._globalSecret);
					var o = e.exception && e.exception.values[0];
					this.captureBreadcrumb({
						category: "sentry",
						message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
						event_id: e.event_id,
						level: e.level || "error"
					});
					var a = this._globalEndpoint;
					(r.transport || this._makeRequest).call(this, {
						url: a,
						auth: i,
						data: e,
						options: r,
						onSuccess: function () {
							n._resetBackoff(),
							n._triggerEvent("success", {
								data: e,
								src: a
							}),
							t && t()
						},
						onError: function (r) {
							n._logDebug("error", "Raven transport failed to send: ", r),
							r.request && n._setBackoffState(r.request),
							n._triggerEvent("failure", {
								data: e,
								src: a
							}),
							r = r || new Error("Raven send failed (no additional details provided)"),
							t && t(r)
						}
					})
				}
			},
			_makeRequest: function (e) {
				var t = new XMLHttpRequest,
				n = "withCredentials" in t || "undefined" != typeof XDomainRequest;
				if (n) {
					var r = e.url;
					"withCredentials" in t ? t.onreadystatechange = function () {
						if (4 === t.readyState)
							if (200 === t.status)
								e.onSuccess && e.onSuccess();
							else if (e.onError) {
								var n = new Error("Sentry error code: " + t.status);
								n.request = t,
								e.onError(n)
							}
					}
					 : (t = new XDomainRequest, r = r.replace(/^https?:/, ""), e.onSuccess && (t.onload = e.onSuccess), e.onError && (t.onerror = function () {
							var n = new Error("Sentry error code: XDomainRequest");
							n.request = t,
							e.onError(n)
						})),
					t.open("POST", r + "?" + g(e.auth)),
					t.send(S(e.data))
				}
			},
			_logDebug: function (e) {
				this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
			},
			_mergeContext: function (e, t) {
				o(t) ? delete this._globalContext[e] : this._globalContext[e] = c(this._globalContext[e] || {}, t)
			}
		};
		var B = Object.prototype;
		"undefined" != typeof __DEV__ && __DEV__ && (Raven.utils = {
				isUndefined: o,
				isFunction: a,
				isString: s,
				isObject: k,
				isEmptyObject: u,
				isError: _,
				each: l,
				objectMerge: c,
				truncate: d,
				hasKey: f,
				joinRegExp: h,
				urlencode: g,
				uuid4: y,
				htmlTreeAsString: v,
				htmlElementAsString: x,
				parseUrl: m,
				fill: T
			}),
		Raven.prototype.setUser = Raven.prototype.setUserContext,
		Raven.prototype.setReleaseContext = Raven.prototype.setRelease,
		e.exports = Raven
	}).call(exports, function () {
		return this
	}
		())
}, function (e, exports, t) {
	(function (n) {
		"use strict";
		function r() {
			return "undefined" == typeof document || "undefined" == typeof document.location ? "" : document.location.href
		}
		var i = t(4),
		o = {
			collectWindowErrors: !0,
			debug: !1
		},
		a = "undefined" != typeof window ? window : "undefined" != typeof n ? n : "undefined" != typeof self ? self : {},
		s = [].slice,
		u = "?",
		l = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
		o.report = function () {
			function e(e) {
				d(),
				v.push(e)
			}
			function t(e) {
				for (var t = v.length - 1; t >= 0; --t)
					v[t] === e && v.splice(t, 1)
			}
			function n() {
				f(),
				v = []
			}
			function c(e, t) {
				var n = null;
				if (!t || o.collectWindowErrors) {
					for (var r in v)
						if (v.hasOwnProperty(r))
							try {
								v[r].apply(null, [e].concat(s.call(arguments, 2)))
							} catch (e) {
								n = e
							}
					if (n)
						throw n
				}
			}
			function p(e, t, n, a, s) {
				var p = null;
				if (b)
					o.computeStackTrace.augmentStackTraceWithInitialElement(b, t, n, e), h();
				else if (s && i.isError(s))
					p = o.computeStackTrace(s), c(p, !0);
				else {
					var d,
					f = {
						url: t,
						line: n,
						column: a
					},
					g = void 0,
					y = e;
					if ("[object String]" === {}
						.toString.call(e)) {
						var d = e.match(l);
						d && (g = d[1], y = d[2])
					}
					f.func = u,
					p = {
						name: g,
						message: y,
						url: r(),
						stack: [f]
					},
					c(p, !0)
				}
				return !!m && m.apply(this, arguments)
			}
			function d() {
				y || (m = a.onerror, a.onerror = p, y = !0)
			}
			function f() {
				y && (a.onerror = m, y = !1, m = void 0)
			}
			function h() {
				var e = b,
				t = x;
				x = null,
				b = null,
				A = null,
				c.apply(null, [e, !1].concat(t))
			}
			function g(e, t) {
				var n = s.call(arguments, 1);
				if (b) {
					if (A === e)
						return;
					h()
				}
				var r = o.computeStackTrace(e);
				if (b = r, A = e, x = n, setTimeout(function () {
						A === e && h()
					}, r.incomplete ? 2e3 : 0), t !== !1)
					throw e
			}
			var m,
			y,
			v = [],
			x = null,
			A = null,
			b = null;
			return g.subscribe = e,
			g.unsubscribe = t,
			g.uninstall = n,
			g
		}
		(),
		o.computeStackTrace = function () {
			function e(e) {
				if ("undefined" != typeof e.stack && e.stack) {
					for (var t, n, i, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, p = e.stack.split("\n"), d = [], f = (/^(.*) is undefined$/.exec(e.message), 0), h = p.length; f < h; ++f) {
						if (n = o.exec(p[f])) {
							var g = n[2] && 0 === n[2].indexOf("native"),
							m = n[2] && 0 === n[2].indexOf("eval");
							m && (t = c.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]),
							i = {
								url: g ? null : n[2],
								func: n[1] || u,
								args: g ? [n[2]] : [],
								line: n[3] ? +n[3] : null,
								column: n[4] ? +n[4] : null
							}
						} else if (n = s.exec(p[f]))
							i = {
								url: n[2],
								func: n[1] || u,
								args: [],
								line: +n[3],
								column: n[4] ? +n[4] : null
							};
						else {
							if (!(n = a.exec(p[f])))
								continue;
							var m = n[3] && n[3].indexOf(" > eval") > -1;
							m && (t = l.exec(n[3])) ? (n[3] = t[1], n[4] = t[2], n[5] = null) : 0 !== f || n[5] || "undefined" == typeof e.columnNumber || (d[0].column = e.columnNumber + 1),
							i = {
								url: n[3],
								func: n[1] || u,
								args: n[2] ? n[2].split(",") : [],
								line: n[4] ? +n[4] : null,
								column: n[5] ? +n[5] : null
							}
						}
						!i.func && i.line && (i.func = u),
						d.push(i)
					}
					return d.length ? {
						name: e.name,
						message: e.message,
						url: r(),
						stack: d
					}
					 : null
				}
			}
			function t(e, t, n, r) {
				var i = {
					url: t,
					line: n
				};
				if (i.url && i.line) {
					if (e.incomplete = !1, i.func || (i.func = u), e.stack.length > 0 && e.stack[0].url === i.url) {
						if (e.stack[0].line === i.line)
							return !1;
						if (!e.stack[0].line && e.stack[0].func === i.func)
							return e.stack[0].line = i.line, !1
					}
					return e.stack.unshift(i),
					e.partial = !0,
					!0
				}
				return e.incomplete = !0,
				!1
			}
			function n(e, a) {
				for (var s, l, c = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, p = [], d = {}, f = !1, h = n.caller; h && !f; h = h.caller)
					if (h !== i && h !== o.report) {
						if (l = {
								url: null,
								func: u,
								line: null,
								column: null
							}, h.name ? l.func = h.name : (s = c.exec(h.toString())) && (l.func = s[1]), "undefined" == typeof l.func)
							try {
								l.func = s.input.substring(0, s.input.indexOf("{"))
							} catch (e) {}
						d["" + h] ? f = !0 : d["" + h] = !0,
						p.push(l)
					}
				a && p.splice(0, a);
				var g = {
					name: e.name,
					message: e.message,
					url: r(),
					stack: p
				};
				return t(g, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
				g
			}
			function i(t, i) {
				var a = null;
				i = null == i ? 0 : +i;
				try {
					if (a = e(t))
						return a
				} catch (e) {
					if (o.debug)
						throw e
				}
				try {
					if (a = n(t, i + 1))
						return a
				} catch (e) {
					if (o.debug)
						throw e
				}
				return {
					name: t.name,
					message: t.message,
					url: r()
				}
			}
			return i.augmentStackTraceWithInitialElement = t,
			i.computeStackTraceFromStackProp = e,
			i
		}
		(),
		e.exports = o
	}).call(exports, function () {
		return this
	}
		())
}, function (e, exports) {
	"use strict";
	function t(e) {
		return "object" == typeof e && null !== e
	}
	function n(e) {
		switch ({}
			.toString.call(e)) {
		case "[object Error]":
			return !0;
		case "[object Exception]":
			return !0;
		case "[object DOMException]":
			return !0;
		default:
			return e instanceof Error
		}
	}
	function r(e) {
		function t(t, n) {
			var r = e(t) || t;
			return n ? n(r) || r : r
		}
		return t
	}
	e.exports = {
		isObject: t,
		isError: n,
		wrappedCallback: r
	}
}, function (e, exports) {
	"use strict";
	function t(e, t) {
		for (var n = 0; n < e.length; ++n)
			if (e[n] === t)
				return n;
		return -1
	}
	function n(e, t, n, i) {
		return JSON.stringify(e, r(t, i), n)
	}
	function r(e, n) {
		var r = [],
		i = [];
		return null == n && (n = function (e, n) {
			return r[0] === n ? "[Circular ~]" : "[Circular ~." + i.slice(0, t(r, n)).join(".") + "]"
		}),
		function (o, a) {
			if (r.length > 0) {
				var s = t(r, this);
				~s ? r.splice(s + 1) : r.push(this),
				~s ? i.splice(s, 1 / 0, o) : i.push(o),
				~t(r, a) && (a = n.call(this, o, a))
			} else
				r.push(a);
			return null == e ? a : e.call(this, o, a)
		}
	}
	exports = e.exports = n,
	exports.getSerialize = r
}, function (e, exports) {
	"use strict";
	function t(e) {
		this.name = "RavenConfigError",
		this.message = e
	}
	t.prototype = new Error,
	t.prototype.constructor = t,
	e.exports = t
}, function (e, exports) {
	"use strict";
	var t = function (e, t, n) {
		var r = e[t],
		i = e;
		if (t in e) {
			var o = "warn" === t ? "warning" : t;
			e[t] = function () {
				var e = [].slice.call(arguments),
				t = "" + e.join(" "),
				a = {
					level: o,
					logger: "console",
					extra: {
						arguments: e
					}
				};
				n && n(t, a),
				r && Function.prototype.apply.call(r, i, e)
			}
		}
	};
	e.exports = {
		wrapMethod: t
	}
}, function (e, exports, t) {
	var n,
	r;
	!function (i, o, a) {
		"use strict";
		n = a,
		r = "function" == typeof n ? n.call(exports, t, exports, e) : n,
		!(void 0 !== r && (e.exports = r))
	}
	("Fingerprint2", this, function () {
		"use strict";
		var e = function (t) {
			if (!(this instanceof e))
				return new e(t);
			var n = {
				swfContainerId: "fingerprintjs2",
				swfPath: "flash/compiled/FontList.swf",
				detectScreenOrientation: !0,
				sortPluginsFor: [/palemoon/i],
				userDefinedFonts: []
			};
			this.options = this.extend(t, n),
			this.nativeForEach = Array.prototype.forEach,
			this.nativeMap = Array.prototype.map
		};
		return e.prototype = {
			extend: function (e, t) {
				if (null == e)
					return t;
				for (var n in e)
					null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
				return t
			},
			get: function (e) {
				var t = [];
				t = this.userAgentKey(t),
				t = this.languageKey(t),
				t = this.colorDepthKey(t),
				t = this.pixelRatioKey(t),
				t = this.hardwareConcurrencyKey(t),
				t = this.screenResolutionKey(t),
				t = this.availableScreenResolutionKey(t),
				t = this.timezoneOffsetKey(t),
				t = this.sessionStorageKey(t),
				t = this.localStorageKey(t),
				t = this.indexedDbKey(t),
				t = this.addBehaviorKey(t),
				t = this.openDatabaseKey(t),
				t = this.cpuClassKey(t),
				t = this.platformKey(t),
				t = this.doNotTrackKey(t),
				t = this.pluginsKey(t),
				t = this.canvasKey(t),
				t = this.webglKey(t),
				t = this.adBlockKey(t),
				t = this.hasLiedLanguagesKey(t),
				t = this.hasLiedResolutionKey(t),
				t = this.hasLiedOsKey(t),
				t = this.hasLiedBrowserKey(t),
				t = this.touchSupportKey(t),
				t = this.customEntropyFunction(t);
				var n = this;
				this.fontsKey(t, function (t) {
					var r = [];
					n.each(t, function (e) {
						var t = e.value;
						"undefined" != typeof e.value.join && (t = e.value.join(";")),
						r.push(t)
					});
					var i = n.x64hash128(r.join("~~~"), 31);
					return e(i, t)
				})
			},
			customEntropyFunction: function (e) {
				return "function" == typeof this.options.customFunction && e.push({
					key: "custom",
					value: this.options.customFunction()
				}),
				e
			},
			userAgentKey: function (e) {
				return this.options.excludeUserAgent || e.push({
					key: "user_agent",
					value: this.getUserAgent()
				}),
				e
			},
			getUserAgent: function () {
				return navigator.userAgent
			},
			languageKey: function (e) {
				return this.options.excludeLanguage || e.push({
					key: "language",
					value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
				}),
				e
			},
			colorDepthKey: function (e) {
				return this.options.excludeColorDepth || e.push({
					key: "color_depth",
					value: screen.colorDepth || -1
				}),
				e
			},
			pixelRatioKey: function (e) {
				return this.options.excludePixelRatio || e.push({
					key: "pixel_ratio",
					value: this.getPixelRatio()
				}),
				e
			},
			getPixelRatio: function () {
				return window.devicePixelRatio || ""
			},
			screenResolutionKey: function (e) {
				return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
			},
			getScreenResolution: function (e) {
				var t;
				return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height],
				"undefined" != typeof t && e.push({
					key: "resolution",
					value: t
				}),
				e
			},
			availableScreenResolutionKey: function (e) {
				return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
			},
			getAvailableScreenResolution: function (e) {
				var t;
				return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]),
				"undefined" != typeof t && e.push({
					key: "available_resolution",
					value: t
				}),
				e
			},
			timezoneOffsetKey: function (e) {
				return this.options.excludeTimezoneOffset || e.push({
					key: "timezone_offset",
					value: (new Date).getTimezoneOffset()
				}),
				e
			},
			sessionStorageKey: function (e) {
				return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
					key: "session_storage",
					value: 1
				}),
				e
			},
			localStorageKey: function (e) {
				return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
					key: "local_storage",
					value: 1
				}),
				e
			},
			indexedDbKey: function (e) {
				return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
					key: "indexed_db",
					value: 1
				}),
				e
			},
			addBehaviorKey: function (e) {
				return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
					key: "add_behavior",
					value: 1
				}),
				e
			},
			openDatabaseKey: function (e) {
				return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
					key: "open_database",
					value: 1
				}),
				e
			},
			cpuClassKey: function (e) {
				return this.options.excludeCpuClass || e.push({
					key: "cpu_class",
					value: this.getNavigatorCpuClass()
				}),
				e
			},
			platformKey: function (e) {
				return this.options.excludePlatform || e.push({
					key: "navigator_platform",
					value: this.getNavigatorPlatform()
				}),
				e
			},
			doNotTrackKey: function (e) {
				return this.options.excludeDoNotTrack || e.push({
					key: "do_not_track",
					value: this.getDoNotTrack()
				}),
				e
			},
			canvasKey: function (e) {
				return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
					key: "canvas",
					value: this.getCanvasFp()
				}),
				e
			},
			webglKey: function (e) {
				return this.options.excludeWebGL ? e : this.isWebGlSupported() ? (e.push({
						key: "webgl",
						value: this.getWebglFp()
					}), e) : e
			},
			adBlockKey: function (e) {
				return this.options.excludeAdBlock || e.push({
					key: "adblock",
					value: this.getAdBlock()
				}),
				e
			},
			hasLiedLanguagesKey: function (e) {
				return this.options.excludeHasLiedLanguages || e.push({
					key: "has_lied_languages",
					value: this.getHasLiedLanguages()
				}),
				e
			},
			hasLiedResolutionKey: function (e) {
				return this.options.excludeHasLiedResolution || e.push({
					key: "has_lied_resolution",
					value: this.getHasLiedResolution()
				}),
				e
			},
			hasLiedOsKey: function (e) {
				return this.options.excludeHasLiedOs || e.push({
					key: "has_lied_os",
					value: this.getHasLiedOs()
				}),
				e
			},
			hasLiedBrowserKey: function (e) {
				return this.options.excludeHasLiedBrowser || e.push({
					key: "has_lied_browser",
					value: this.getHasLiedBrowser()
				}),
				e
			},
			fontsKey: function (e, t) {
				return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
			},
			flashFontsKey: function (e, t) {
				return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function (n) {
					e.push({
						key: "swf_fonts",
						value: n.join(";")
					}),
					t(e)
				}) : t(e)
			},
			jsFontsKey: function (e, t) {
				var n = this;
				return setTimeout(function () {
					var r = ["monospace", "sans-serif", "serif"],
					i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
					o = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
					n.options.extendedJsFonts && (i = i.concat(o)),
					i = i.concat(n.options.userDefinedFonts);
					var a = "mmmmmmmmmmlli",
					s = "72px",
					u = document.getElementsByTagName("body")[0],
					l = document.createElement("div"),
					c = document.createElement("div"),
					p = {},
					d = {},
					f = function () {
						var e = document.createElement("span");
						return e.style.position = "absolute",
						e.style.left = "-9999px",
						e.style.fontSize = s,
						e.style.lineHeight = "normal",
						e.innerHTML = a,
						e
					},
					h = function (e, t) {
						var n = f();
						return n.style.fontFamily = "'" + e + "'," + t,
						n
					},
					g = function () {
						for (var e = [], t = 0, n = r.length; t < n; t++) {
							var i = f();
							i.style.fontFamily = r[t],
							l.appendChild(i),
							e.push(i)
						}
						return e
					},
					m = function () {
						for (var e = {}, t = 0, n = i.length; t < n; t++) {
							for (var o = [], a = 0, s = r.length; a < s; a++) {
								var u = h(i[t], r[a]);
								c.appendChild(u),
								o.push(u)
							}
							e[i[t]] = o
						}
						return e
					},
					y = function (e) {
						for (var t = !1, n = 0; n < r.length; n++)
							if (t = e[n].offsetWidth !== p[r[n]] || e[n].offsetHeight !== d[r[n]])
								return t;
						return t
					},
					v = g();
					u.appendChild(l);
					for (var x = 0, A = r.length; x < A; x++)
						p[r[x]] = v[x].offsetWidth, d[r[x]] = v[x].offsetHeight;
					var b = m();
					u.appendChild(c);
					for (var w = [], T = 0, E = i.length; T < E; T++)
						y(b[i[T]]) && w.push(i[T]);
					u.removeChild(c),
					u.removeChild(l),
					e.push({
						key: "js_fonts",
						value: w
					}),
					t(e)
				}, 1)
			},
			pluginsKey: function (e) {
				return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.push({
						key: "ie_plugins",
						value: this.getIEPlugins()
					}) : e.push({
						key: "regular_plugins",
						value: this.getRegularPlugins()
					})),
				e
			},
			getRegularPlugins: function () {
				for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++)
					e.push(navigator.plugins[t]);
				return this.pluginsShouldBeSorted() && (e = e.sort(function (e, t) {
							return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
						})),
				this.map(e, function (e) {
					var t = this.map(e, function (e) {
							return [e.type, e.suffixes].join("~")
						}).join(",");
					return [e.name, e.description, t].join("::")
				}, this)
			},
			getIEPlugins: function () {
				var e = [];
				if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
					var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
					e = this.map(t, function (e) {
							try {
								return new ActiveXObject(e),
								e
							} catch (e) {
								return null
							}
						})
				}
				return navigator.plugins && (e = e.concat(this.getRegularPlugins())),
				e
			},
			pluginsShouldBeSorted: function () {
				for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
					var r = this.options.sortPluginsFor[t];
					if (navigator.userAgent.match(r)) {
						e = !0;
						break
					}
				}
				return e
			},
			touchSupportKey: function (e) {
				return this.options.excludeTouchSupport || e.push({
					key: "touch_support",
					value: this.getTouchSupport()
				}),
				e
			},
			hardwareConcurrencyKey: function (e) {
				return this.options.excludeHardwareConcurrency || e.push({
					key: "hardware_concurrency",
					value: this.getHardwareConcurrency()
				}),
				e
			},
			hasSessionStorage: function () {
				try {
					return !!window.sessionStorage
				} catch (e) {
					return !0
				}
			},
			hasLocalStorage: function () {
				try {
					return !!window.localStorage
				} catch (e) {
					return !0
				}
			},
			hasIndexedDB: function () {
				try {
					return !!window.indexedDB
				} catch (e) {
					return !0
				}
			},
			getHardwareConcurrency: function () {
				return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
			},
			getNavigatorCpuClass: function () {
				return navigator.cpuClass ? navigator.cpuClass : "unknown"
			},
			getNavigatorPlatform: function () {
				return navigator.platform ? navigator.platform : "unknown"
			},
			getDoNotTrack: function () {
				return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
			},
			getTouchSupport: function () {
				var e = 0,
				t = !1;
				"undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
				try {
					document.createEvent("TouchEvent"),
					t = !0
				} catch (e) {}
				var n = "ontouchstart" in window;
				return [e, t, n]
			},
			getCanvasFp: function () {
				var e = [],
				t = document.createElement("canvas");
				t.width = 2e3,
				t.height = 200,
				t.style.display = "inline";
				var n = t.getContext("2d");
				return n.rect(0, 0, 10, 10),
				n.rect(2, 2, 6, 6),
				e.push("canvas winding:" + (n.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
				n.textBaseline = "alphabetic",
				n.fillStyle = "#f60",
				n.fillRect(125, 1, 62, 20),
				n.fillStyle = "#069",
				this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123",
				n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
				n.fillStyle = "rgba(102, 204, 0, 0.2)",
				n.font = "18pt Arial",
				n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
				n.globalCompositeOperation = "multiply",
				n.fillStyle = "rgb(255,0,255)",
				n.beginPath(),
				n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
				n.closePath(),
				n.fill(),
				n.fillStyle = "rgb(0,255,255)",
				n.beginPath(),
				n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
				n.closePath(),
				n.fill(),
				n.fillStyle = "rgb(255,255,0)",
				n.beginPath(),
				n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
				n.closePath(),
				n.fill(),
				n.fillStyle = "rgb(255,0,255)",
				n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
				n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
				n.fill("evenodd"),
				e.push("canvas fp:" + t.toDataURL()),
				e.join("~")
			},
			getWebglFp: function () {
				var e,
				t = function (t) {
					return e.clearColor(0, 0, 0, 1),
					e.enable(e.DEPTH_TEST),
					e.depthFunc(e.LEQUAL),
					e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
					"[" + t[0] + ", " + t[1] + "]"
				},
				n = function (e) {
					var t,
					n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
					return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
				};
				if (e = this.getWebglCanvas(), !e)
					return null;
				var r = [],
				i = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
				o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
				a = e.createBuffer();
				e.bindBuffer(e.ARRAY_BUFFER, a);
				var s = new Float32Array([ - .2,  - .9, 0, .4,  - .26, 0, 0, .732134444, 0]);
				e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW),
				a.itemSize = 3,
				a.numItems = 3;
				var u = e.createProgram(),
				l = e.createShader(e.VERTEX_SHADER);
				e.shaderSource(l, i),
				e.compileShader(l);
				var c = e.createShader(e.FRAGMENT_SHADER);
				e.shaderSource(c, o),
				e.compileShader(c),
				e.attachShader(u, l),
				e.attachShader(u, c),
				e.linkProgram(u),
				e.useProgram(u),
				u.vertexPosAttrib = e.getAttribLocation(u, "attrVertex"),
				u.offsetUniform = e.getUniformLocation(u, "uniformOffset"),
				e.enableVertexAttribArray(u.vertexPosArray),
				e.vertexAttribPointer(u.vertexPosAttrib, a.itemSize, e.FLOAT, !1, 0, 0),
				e.uniform2f(u.offsetUniform, 1, 1),
				e.drawArrays(e.TRIANGLE_STRIP, 0, a.numItems),
				null != e.canvas && r.push(e.canvas.toDataURL()),
				r.push("extensions:" + e.getSupportedExtensions().join(";")),
				r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
				r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
				r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
				r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
				r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
				r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
				r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
				r.push("webgl max anisotropy:" + n(e)),
				r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
				r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
				r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
				r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
				r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
				r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
				r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
				r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
				r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
				r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
				r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
				r.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
				r.push("webgl renderer:" + e.getParameter(e.RENDERER)),
				r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
				r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
				r.push("webgl vendor:" + e.getParameter(e.VENDOR)),
				r.push("webgl version:" + e.getParameter(e.VERSION));
				try {
					var p = e.getExtension("WEBGL_debug_renderer_info");
					p && (r.push("webgl unmasked vendor:" + e.getParameter(p.UNMASKED_VENDOR_WEBGL)), r.push("webgl unmasked renderer:" + e.getParameter(p.UNMASKED_RENDERER_WEBGL)))
				} catch (e) {}
				return e.getShaderPrecisionFormat ? (r.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), r.join("~")) : r.join("~")
			},
			getAdBlock: function () {
				var e = document.createElement("div");
				e.innerHTML = "&nbsp;",
				e.className = "adsbox";
				var t = !1;
				try {
					document.body.appendChild(e),
					t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
					document.body.removeChild(e)
				} catch (e) {
					t = !1
				}
				return t
			},
			getHasLiedLanguages: function () {
				if ("undefined" != typeof navigator.languages)
					try {
						var e = navigator.languages[0].substr(0, 2);
						if (e !== navigator.language.substr(0, 2))
							return !0
					} catch (e) {
						return !0
					}
				return !1
			},
			getHasLiedResolution: function () {
				return screen.width < screen.availWidth || screen.height < screen.availHeight
			},
			getHasLiedOs: function () {
				var e,
				t = navigator.userAgent.toLowerCase(),
				n = navigator.oscpu,
				r = navigator.platform.toLowerCase();
				e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
				var i;
				if (i = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, i && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
					return !0;
				if ("undefined" != typeof n) {
					if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
						return !0;
					if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
						return !0;
					if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
						return !0;
					if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== e)
						return !0
				}
				return r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || 0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== e || "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e
			},
			getHasLiedBrowser: function () {
				var e,
				t = navigator.userAgent.toLowerCase(),
				n = navigator.productSub;
				if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other", ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== n)
					return !0;
				var r = eval.toString().length;
				if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e)
					return !0;
				if (39 === r && "Internet Explorer" !== e && "Other" !== e)
					return !0;
				if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e)
					return !0;
				var i;
				try {
					throw "a"
				} catch (e) {
					try {
						e.toSource(),
						i = !0
					} catch (e) {
						i = !1
					}
				}
				return !(!i || "Firefox" === e || "Other" === e)
			},
			isCanvasSupported: function () {
				var e = document.createElement("canvas");
				return !(!e.getContext || !e.getContext("2d"))
			},
			isWebGlSupported: function () {
				if (!this.isCanvasSupported())
					return !1;
				var e,
				t = document.createElement("canvas");
				try {
					e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
				} catch (t) {
					e = !1
				}
				return !!window.WebGLRenderingContext && !!e
			},
			isIE: function () {
				return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
			},
			hasSwfObjectLoaded: function () {
				return "undefined" != typeof window.swfobject
			},
			hasMinFlashInstalled: function () {
				return swfobject.hasFlashPlayerVersion("9.0.0")
			},
			addFlashDivNode: function () {
				var e = document.createElement("div");
				e.setAttribute("id", this.options.swfContainerId),
				document.body.appendChild(e)
			},
			loadSwfAndDetectFonts: function (e) {
				var t = "___fp_swf_loaded";
				window[t] = function (t) {
					e(t)
				};
				var n = this.options.swfContainerId;
				this.addFlashDivNode();
				var r = {
					onReady: t
				},
				i = {
					allowScriptAccess: "always",
					menu: "false"
				};
				swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, r, i, {})
			},
			getWebglCanvas: function () {
				var e = document.createElement("canvas"),
				t = null;
				try {
					t = e.getContext("webgl") || e.getContext("experimental-webgl")
				} catch (e) {}
				return t || (t = null),
				t
			},
			each: function (e, t, n) {
				if (null !== e)
					if (this.nativeForEach && e.forEach === this.nativeForEach)
						e.forEach(t, n);
					else if (e.length === +e.length) {
						for (var r = 0, i = e.length; r < i; r++)
							if (t.call(n, e[r], r, e) === {})
								return
					} else
						for (var o in e)
							if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {})
								return
			},
			map: function (e, t, n) {
				var r = [];
				return null == e ? r : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function (e, i, o) {
						r[r.length] = t.call(n, e, i, o)
					}), r)
			},
			x64Add: function (e, t) {
				e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
				t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
				var n = [0, 0, 0, 0];
				return n[3] += e[3] + t[3],
				n[2] += n[3] >>> 16,
				n[3] &= 65535,
				n[2] += e[2] + t[2],
				n[1] += n[2] >>> 16,
				n[2] &= 65535,
				n[1] += e[1] + t[1],
				n[0] += n[1] >>> 16,
				n[1] &= 65535,
				n[0] += e[0] + t[0],
				n[0] &= 65535,
				[n[0] << 16 | n[1], n[2] << 16 | n[3]]
			},
			x64Multiply: function (e, t) {
				e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
				t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
				var n = [0, 0, 0, 0];
				return n[3] += e[3] * t[3],
				n[2] += n[3] >>> 16,
				n[3] &= 65535,
				n[2] += e[2] * t[3],
				n[1] += n[2] >>> 16,
				n[2] &= 65535,
				n[2] += e[3] * t[2],
				n[1] += n[2] >>> 16,
				n[2] &= 65535,
				n[1] += e[1] * t[3],
				n[0] += n[1] >>> 16,
				n[1] &= 65535,
				n[1] += e[2] * t[2],
				n[0] += n[1] >>> 16,
				n[1] &= 65535,
				n[1] += e[3] * t[1],
				n[0] += n[1] >>> 16,
				n[1] &= 65535,
				n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
				n[0] &= 65535,
				[n[0] << 16 | n[1], n[2] << 16 | n[3]]
			},
			x64Rotl: function (e, t) {
				return t %= 64,
				32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
			},
			x64LeftShift: function (e, t) {
				return t %= 64,
				0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
			},
			x64Xor: function (e, t) {
				return [e[0] ^ t[0], e[1] ^ t[1]]
			},
			x64Fmix: function (e) {
				return e = this.x64Xor(e, [0, e[0] >>> 1]),
				e = this.x64Multiply(e, [4283543511, 3981806797]),
				e = this.x64Xor(e, [0, e[0] >>> 1]),
				e = this.x64Multiply(e, [3301882366, 444984403]),
				e = this.x64Xor(e, [0, e[0] >>> 1])
			},
			x64hash128: function (e, t) {
				e = e || "",
				t = t || 0;
				for (var n = e.length % 16, r = e.length - n, i = [0, t], o = [0, t], a = [0, 0], s = [0, 0], u = [2277735313, 289559509], l = [1291169091, 658871167], c = 0; c < r; c += 16)
					a = [255 & e.charCodeAt(c + 4) | (255 & e.charCodeAt(c + 5)) << 8 | (255 & e.charCodeAt(c + 6)) << 16 | (255 & e.charCodeAt(c + 7)) << 24, 255 & e.charCodeAt(c) | (255 & e.charCodeAt(c + 1)) << 8 | (255 & e.charCodeAt(c + 2)) << 16 | (255 & e.charCodeAt(c + 3)) << 24], s = [255 & e.charCodeAt(c + 12) | (255 & e.charCodeAt(c + 13)) << 8 | (255 & e.charCodeAt(c + 14)) << 16 | (255 & e.charCodeAt(c + 15)) << 24, 255 & e.charCodeAt(c + 8) | (255 & e.charCodeAt(c + 9)) << 8 | (255 & e.charCodeAt(c + 10)) << 16 | (255 & e.charCodeAt(c + 11)) << 24], a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, l), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, l), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), o = this.x64Xor(o, s), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
				switch (a = [0, 0], s = [0, 0], n) {
				case 15:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 14)], 48));
				case 14:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 13)], 40));
				case 13:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 12)], 32));
				case 12:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 11)], 24));
				case 11:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 10)], 16));
				case 10:
					s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(c + 9)], 8));
				case 9:
					s = this.x64Xor(s, [0, e.charCodeAt(c + 8)]),
					s = this.x64Multiply(s, l),
					s = this.x64Rotl(s, 33),
					s = this.x64Multiply(s, u),
					o = this.x64Xor(o, s);
				case 8:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 7)], 56));
				case 7:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 6)], 48));
				case 6:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 5)], 40));
				case 5:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 4)], 32));
				case 4:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 3)], 24));
				case 3:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 2)], 16));
				case 2:
					a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(c + 1)], 8));
				case 1:
					a = this.x64Xor(a, [0, e.charCodeAt(c)]),
					a = this.x64Multiply(a, u),
					a = this.x64Rotl(a, 31),
					a = this.x64Multiply(a, l),
					i = this.x64Xor(i, a)
				}
				return i = this.x64Xor(i, [0, e.length]),
				o = this.x64Xor(o, [0, e.length]),
				i = this.x64Add(i, o),
				o = this.x64Add(o, i),
				i = this.x64Fmix(i),
				o = this.x64Fmix(o),
				i = this.x64Add(i, o),
				o = this.x64Add(o, i),
				("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
			}
		},
		e.VERSION = "1.5.1",
		e
	})
}, function (e, exports, t) {
	var n = t(10);
	"string" == typeof n && (n = [[e.id, n, ""]]);
	var r,
	i = {
		hmr: !0
	};
	i.transform = r;
	t(12)(n, i);
	n.locals && (e.exports = n.locals)
}, function (e, exports, t) {
	exports = e.exports = t(11)(void 0),
	exports.push([e.id, '[contenteditable=true]:active,[contenteditable=true]:focus{outline:thin solid #00b977;background-color:rgba(0,185,119,.05)}.cyxy-target-popup{padding:1.3rem 12px;position:absolute;display:-webkit-flex;display:inline-flex;flex-direction:row;overflow:scroll;vertical-align:middle;z-index:199099;top:1px;left:1px;background:#fff;opacity:.98;height:auto;width:auto;border:1px solid #e6e6e6;box-shadow:0 0 8px 0 rgba(0,0,0,.13);border-radius:5px}@media (max-width:468px){.cyxy-target-popup{left:10%}}#cyxy-popup-left-slide{margin-right:14px}#cyxy-popup-left-slide,#cyxy-popup-right-slide{height:22px;display:inline;vertical-align:middle;cursor:pointer}#cyxy-popup-right-slide{margin-left:0}#cyxy-popup-userinfo{display:inline}.cyxy-target-count{display:inline;vertical-align:middle;font-size:10px}#cyxy-popup-avatar{display:inline;height:32px;vertical-align:middle;border-radius:16px}#cyxy-popup-name-time{display:-webkit-flex;display:inline-flex;flex-direction:column;vertical-align:middle;text-align:left;margin-left:6px}#cyxy-popup-name{font-size:14px;color:#333;height:18px;overflow:hidden;max-width:84px}#cyxy-popup-time{font-size:12px;margin-top:4px;color:#999}.cyxy-footer{display:none;position:fixed;bottom:0;padding:0;left:0;right:0;margin:auto;opacity:.9;border:1px solid #e6e6e6;box-shadow:0 0 8px 0 rgba(0,0,0,.13);border-radius:2px;z-index:201712;text-align:center}.cyxy-footer-p{padding:14px 0;margin:0;font-size:14px;color:#333;background:#fff;text-align:center;line-height:1.6;font-weight:200}#cyxy-popup-favour{text-align:center;display:inline;margin-right:20px;margin-left:46px;cursor:pointer}#cyxy-popup-oppose{text-align:center;display:inline;cursor:pointer}#cyxy-popup-favour-img{display:inline;height:20px;vertical-align:middle}#cyxy-popup-oppose-img{display:inline;height:18px;vertical-align:middle}#cyxy-popup-favour-num,#cyxy-popup-oppose-num{font-size:14px;margin-left:4px;color:#999}@media (max-width:320px){#cyxy-popup-favour{margin-right:.8rem;margin-left:1.5rem}#cyxy-popup-left-slide{margin-right:.8rem}#cyxy-popup-right-slide{margin-left:1rem}}.layui-m-layer{position:relative;z-index:19891014}.layui-m-layer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.layui-m-layermain,.layui-m-layershade{position:fixed;left:0;top:0;width:100%;height:100%}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;text-align:left;background-color:#fff;font-size:14px;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.1);pointer-events:auto;-webkit-overflow-scrolling:touch;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.2s;animation-duration:.2s}@-webkit-keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}@-webkit-keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.layui-m-anim-up{-webkit-animation-name:layui-m-anim-up;animation-name:layui-m-anim-up}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:640px}.layui-m-layer1 .layui-m-layerchild{border:none;border-radius:0}.layui-m-layer2 .layui-m-layerchild{width:auto;max-width:260px;min-width:40px;border:none;background:0 0;box-shadow:none;color:#fff}.layui-m-layerchild h3{padding:0 10px;height:60px;line-height:60px;font-size:16px;font-weight:400;border-radius:5px 5px 0 0;text-align:center}.layui-m-layerbtn span,.layui-m-layerchild h3{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.layui-m-layercont{padding:50px 30px;line-height:22px;text-align:center}.layui-m-layer1 .layui-m-layercont{padding:0;text-align:left}.layui-m-layer2 .layui-m-layercont{text-align:center;padding:0;line-height:0}.layui-m-layer2 .layui-m-layercont i{width:25px;height:25px;margin-left:8px;display:inline-block;background-color:#fff;border-radius:100%;-webkit-animation:layui-m-anim-loading 1.4s infinite ease-in-out;animation:layui-m-anim-loading 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;text-align:center;border-radius:0 0 5px 5px}.layui-m-layer2 .layui-m-layercont p{margin-top:20px}@-webkit-keyframes layui-m-anim-loading{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes layui-m-anim-loading{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.layui-m-layer2 .layui-m-layercont i:first-child{margin-left:0;-webkit-animation-delay:-.32s;animation-delay:-.32s}.layui-m-layer2 .layui-m-layercont i.layui-m-layerload{-webkit-animation-delay:-.16s;animation-delay:-.16s}.layui-m-layer2 .layui-m-layercont>div{line-height:22px;padding-top:7px;margin-bottom:20px;font-size:14px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;line-height:50px;font-size:0;border-top:1px solid #d0d0d0;background-color:#f2f2f2}.layui-m-layerbtn span{display:block;-moz-box-flex:1;box-flex:1;-webkit-box-flex:1;font-size:14px;cursor:pointer}.layui-m-layerbtn span[yes]{color:#40affe}.layui-m-layerbtn span[no]{border-right:1px solid #d0d0d0;border-radius:0 0 0 5px}.layui-m-layerbtn span:active{background-color:#f6f6f6}.layui-m-layerend{position:absolute;right:7px;top:10px;width:30px;height:30px;border:0;font-weight:400;background:0 0;cursor:pointer;-webkit-appearance:none;font-size:30px}.layui-m-layerend:after,.layui-m-layerend:before{position:absolute;left:5px;top:15px;content:"";width:18px;height:1px;background-color:#999;transform:rotate(45deg);-webkit-transform:rotate(45deg);border-radius:3px}.layui-m-layerend:after{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}body .layui-m-layer .layui-m-layer-footer{position:fixed;width:95%;max-width:100%;margin:0 auto;left:0;right:0;bottom:10px;background:0 0}.layui-m-layer-footer .layui-m-layercont{padding:20px;border-radius:5px 5px 0 0;background-color:hsla(0,0%,100%,.8)}.layui-m-layer-footer .layui-m-layerbtn{display:block;height:auto;background:0 0;border-top:none}.layui-m-layer-footer .layui-m-layerbtn span{background-color:hsla(0,0%,100%,.8)}.layui-m-layer-footer .layui-m-layerbtn span[no]{color:#fd482c;border-top:1px solid #c2c2c2;border-radius:0 0 5px 5px}.layui-m-layer-footer .layui-m-layerbtn span[yes]{margin-top:10px;border-radius:5px}body .layui-m-layer .layui-m-layer-msg{width:auto;max-width:90%;margin:0 auto;bottom:-150px;background-color:rgba(0,0,0,.7);color:#fff}.layui-m-layer-msg .layui-m-layercont{padding:10px 20px}', ""])
}, function (e, exports) {
	function t(e, t) {
		var r = e[1] || "",
		i = e[3];
		if (!i)
			return r;
		if (t && "function" == typeof btoa) {
			var o = n(i),
			a = i.sources.map(function (e) {
					return "/*# sourceURL=" + i.sourceRoot + e + " */"
				});
			return [r].concat(a).concat([o]).join("\n")
		}
		return [r].join("\n")
	}
	function n(e) {
		var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
		n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
		return "/*# " + n + " */"
	}
	e.exports = function (e) {
		var n = [];
		return n.toString = function () {
			return this.map(function (n) {
				var r = t(n, e);
				return n[2] ? "@media " + n[2] + "{" + r + "}" : r
			}).join("")
		},
		n.i = function (e, t) {
			"string" == typeof e && (e = [[null, e, ""]]);
			for (var r = {}, i = 0; i < this.length; i++) {
				var o = this[i][0];
				"number" == typeof o && (r[o] = !0)
			}
			for (i = 0; i < e.length; i++) {
				var a = e[i];
				"number" == typeof a[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), n.push(a))
			}
		},
		n
	}
}, function (e, exports, t) {
	function n(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
			i = f[r.id];
			if (i) {
				i.refs++;
				for (var o = 0; o < i.parts.length; o++)
					i.parts[o](r.parts[o]);
				for (; o < r.parts.length; o++)
					i.parts.push(l(r.parts[o], t))
			} else {
				for (var a = [], o = 0; o < r.parts.length; o++)
					a.push(l(r.parts[o], t));
				f[r.id] = {
					id: r.id,
					refs: 1,
					parts: a
				}
			}
		}
	}
	function r(e, t) {
		for (var n = [], r = {}, i = 0; i < e.length; i++) {
			var o = e[i],
			a = t.base ? o[0] + t.base : o[0],
			s = o[1],
			u = o[2],
			l = o[3],
			c = {
				css: s,
				media: u,
				sourceMap: l
			};
			r[a] ? r[a].parts.push(c) : n.push(r[a] = {
					id: a,
					parts: [c]
				})
		}
		return n
	}
	function i(e, t) {
		var n = m(e.insertInto);
		if (!n)
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var r = x[x.length - 1];
		if ("top" === e.insertAt)
			r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
		else if ("bottom" === e.insertAt)
			n.appendChild(t);
		else {
			if ("object" != typeof e.insertAt || !e.insertAt.before)
				throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
			var i = m(e.insertInto + " " + e.insertAt.before);
			n.insertBefore(t, i)
		}
	}
	function o(e) {
		if (null === e.parentNode)
			return !1;
		e.parentNode.removeChild(e);
		var t = x.indexOf(e);
		t >= 0 && x.splice(t, 1)
	}
	function a(e) {
		var t = document.createElement("style");
		return e.attrs.type = "text/css",
		u(t, e.attrs),
		i(e, t),
		t
	}
	function s(e) {
		var t = document.createElement("link");
		return e.attrs.type = "text/css",
		e.attrs.rel = "stylesheet",
		u(t, e.attrs),
		i(e, t),
		t
	}
	function u(e, t) {
		Object.keys(t).forEach(function (n) {
			e.setAttribute(n, t[n])
		})
	}
	function l(e, t) {
		var n,
		r,
		i,
		u;
		if (t.transform && e.css) {
			if (u = t.transform(e.css), !u)
				return function () {};
			e.css = u
		}
		if (t.singleton) {
			var l = v++;
			n = y || (y = a(t)),
			r = c.bind(null, n, l, !1),
			i = c.bind(null, n, l, !0)
		} else
			e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), r = d.bind(null, n, t), i = function () {
				o(n),
				n.href && URL.revokeObjectURL(n.href)
			}) : (n = a(t), r = p.bind(null, n), i = function () {
				o(n)
			});
		return r(e),
		function (t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
					return;
				r(e = t)
			} else
				i()
		}
	}
	function c(e, t, n, r) {
		var i = n ? "" : r.css;
		if (e.styleSheet)
			e.styleSheet.cssText = b(t, i);
		else {
			var o = document.createTextNode(i),
			a = e.childNodes;
			a[t] && e.removeChild(a[t]),
			a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
		}
	}
	function p(e, t) {
		var n = t.css,
		r = t.media;
		if (r && e.setAttribute("media", r), e.styleSheet)
			e.styleSheet.cssText = n;
		else {
			for (; e.firstChild; )
				e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(n))
		}
	}
	function d(e, t, n) {
		var r = n.css,
		i = n.sourceMap,
		o = void 0 === t.convertToAbsoluteUrls && i;
		(t.convertToAbsoluteUrls || o) && (r = A(r)),
		i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
		var a = new Blob([r], {
				type: "text/css"
			}),
		s = e.href;
		e.href = URL.createObjectURL(a),
		s && URL.revokeObjectURL(s)
	}
	var f = {},
	h = function (e) {
		var t;
		return function () {
			return "undefined" == typeof t && (t = e.apply(this, arguments)),
			t
		}
	},
	g = h(function () {
			return window && document && document.all && !window.atob
		}),
	m = function (e) {
		var t = {};
		return function (n) {
			if ("undefined" == typeof t[n]) {
				var r = e.call(this, n);
				if (r instanceof window.HTMLIFrameElement)
					try {
						r = r.contentDocument.head
					} catch (e) {
						r = null
					}
				t[n] = r
			}
			return t[n]
		}
	}
	(function (e) {
		return document.querySelector(e)
	}),
	y = null,
	v = 0,
	x = [],
	A = t(13);
	e.exports = function (e, t) {
		t = t || {},
		t.attrs = "object" == typeof t.attrs ? t.attrs : {},
		t.singleton || (t.singleton = g()),
		t.insertInto || (t.insertInto = "head"),
		t.insertAt || (t.insertAt = "bottom");
		var i = r(e, t);
		return n(i, t),
		function (e) {
			for (var o = [], a = 0; a < i.length; a++) {
				var s = i[a],
				u = f[s.id];
				u.refs--,
				o.push(u)
			}
			if (e) {
				var l = r(e, t);
				n(l, t)
			}
			for (var a = 0; a < o.length; a++) {
				var u = o[a];
				if (0 === u.refs) {
					for (var c = 0; c < u.parts.length; c++)
						u.parts[c]();
					delete f[u.id]
				}
			}
		}
	};
	var b = function () {
		var e = [];
		return function (t, n) {
			return e[t] = n,
			e.filter(Boolean).join("\n")
		}
	}
	()
}, function (e, exports) {
	e.exports = function (e) {
		var t = "undefined" != typeof window && window.location;
		if (!t)
			throw new Error("fixUrls requires window.location");
		if (!e || "string" != typeof e)
			return e;
		var n = t.protocol + "//" + t.host,
		r = n + t.pathname.replace(/\/[^\/]*$/, "/"),
		i = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
				var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
						return t
					}).replace(/^'(.*)'$/, function (e, t) {
						return t
					});
				if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))
					return e;
				var o;
				return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
				"url(" + JSON.stringify(o) + ")"
			});
		return i
	}
}, function (e, exports, t) {
	var n;
	!function (r) {
		"use strict";
		var i = document,
		o = "querySelectorAll",
		a = "getElementsByClassName",
		s = function (e) {
			return i[o](e)
		},
		u = {
			type: 0,
			shade: !0,
			shadeClose: !0,
			fixed: !0,
			anim: "scale"
		},
		l = {
			extend: function (e) {
				var t = JSON.parse(JSON.stringify(u));
				for (var n in e)
					t[n] = e[n];
				return t
			},
			timer: {},
			end: {}
		};
		l.touch = function (e, t) {
			e.addEventListener("click", function (e) {
				t.call(this, e)
			}, !1)
		};
		var c = 0,
		p = ["layui-m-layer"],
		d = function (e) {
			var t = this;
			t.config = l.extend(e),
			t.view()
		};
		d.prototype.view = function () {
			var e = this,
			t = e.config,
			n = i.createElement("div");
			e.id = n.id = p[0] + c,
			n.setAttribute("class", p[0] + " " + p[0] + (t.type || 0)),
			n.setAttribute("index", c);
			var r = function () {
				var e = "object" == typeof t.title;
				return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + "</h3>" : ""
			}
			(),
			o = function () {
				"string" == typeof t.btn && (t.btn = [t.btn]);
				var e,
				n = (t.btn || []).length;
				return 0 !== n && t.btn ? (e = '<span yes type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span no type="0">' + t.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
			}
			();
			if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top : 100, t.style = t.style || "", t.style += " top:" + (i.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (t.content || "") + "</p>"), t.skin && (t.anim = "up"), "msg" === t.skin && (t.shade = !1), n.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (t.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (t.skin ? "layui-m-layer-" + t.skin + " " : "") + (t.className ? t.className : "") + " " + (t.anim ? "layui-m-anim-" + t.anim : "") + '" ' + (t.style ? 'style="' + t.style + '"' : "") + ">" + r + '<div class="layui-m-layercont">' + t.content + "</div>" + o + "</div></div></div>", !t.type || 2 === t.type) {
				var u = i[a](p[0] + t.type),
				l = u.length;
				l >= 1 && layer.close(u[0].getAttribute("index"))
			}
			document.body.appendChild(n);
			var d = e.elem = s("#" + e.id)[0];
			t.success && t.success(d),
			e.index = c++,
			e.action(t, d)
		},
		d.prototype.action = function (e, t) {
			var n = this;
			e.time && (l.timer[n.index] = setTimeout(function () {
						layer.close(n.index)
					}, 1e3 * e.time));
			var r = function () {
				var t = this.getAttribute("type");
				0 == t ? (e.no && e.no(), layer.close(n.index)) : e.yes ? e.yes(n.index) : layer.close(n.index)
			};
			if (e.btn)
				for (var i = t[a]("layui-m-layerbtn")[0].children, o = i.length, s = 0; o > s; s++)
					l.touch(i[s], r);
			if (e.shade && e.shadeClose) {
				var u = t[a]("layui-m-layershade")[0];
				l.touch(u, function () {
					layer.close(n.index, e.end)
				})
			}
			e.end && (l.end[n.index] = e.end)
		},
		r.layer = {
			v: "2.0",
			index: c,
			open: function (e) {
				var t = new d(e || {});
				return t.index
			},
			close: function (e) {
				var t = s("#" + p[0] + e)[0];
				t && (t.innerHTML = "", i.body.removeChild(t), clearTimeout(l.timer[e]), delete l.timer[e], "function" == typeof l.end[e] && l.end[e](), delete l.end[e])
			},
			closeAll: function () {
				for (var e = i[a](p[0]), t = 0, n = e.length; n > t; t++)
					layer.close(0 | e[0].getAttribute("index"))
			}
		},
		n = function () {
			return layer
		}
		.call(exports, t, exports, e),
		!(void 0 !== n && (e.exports = n))
	}
	(window)
}, function (e, exports, t) {
	function n() {
		for (var e = [function () {
					return new XMLHttpRequest
				}, function () {
					return new ActiveXObject("Msxml2.XMLHTTP")
				}, function () {
					return new ActiveXObject("Msxml3.XMLHTTP")
				}, function () {
					return new ActiveXObject("Microsoft.XMLHTTP")
				}
			], t = !1, n = 0; n < e.length; n++) {
			try {
				t = e[n]()
			} catch (e) {
				continue
			}
			break
		}
		return t.onerror = function (e) {
			throw console.error(t, e),
			i.open({
				content: r.NETWORK_ERROR_MSG,
				skin: "msg",
				time: 3
			}),
			new Error("XHR.onerror", e)
		},
		t
	}
	var r = t(16),
	i = t(14);
	e.exports.testCookie = function (e) {
		var t = n(),
		o = r.BIZ_URL + "/test_cookies";
		t.open("GET", o, !0),
		t.withCredentials = !0,
		t.setRequestHeader("content-type", "application/json"),
		t.timeout = 3e3,
		t.onerror = function (e) {
			throw console.error(t, e),
			i.open({
				content: r.NETWORK_ERROR_MSG,
				skin: "msg",
				time: 3
			}),
			new Error("testCookie", e)
		},
		t.onload = function (t) {
			var n = JSON.parse(this.responseText);
			"ok" == n.status && n.cookies && n.cookies.cy_user ? e(JSON.parse(decodeURIComponent(n.cookies.cy_user))) : e()
		},
		t.send()
	},
	e.exports.alipayForOneMonthRedeem = function (e, t) {
		var i = n(),
		o = r.TRS_URL + "/v1/user/redeem";
		i.open("POST", o, !0),
		i.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
		i.timeout = 5e3,
		i.setRequestHeader("content-type", "application/json"),
		i.onload = function (e) {
			var n = JSON.parse(this.responseText);
			t(n)
		},
		i.send(JSON.stringify({
				user_id: e,
				product_id: 16,
				os_type: "web",
				version: "1.0.3",
				timestamp: 0,
				pay_channel: "alipay"
			}))
	},
	exports.fetchPageSentenceTargetList = function (e, t, i, o) {
		var a = n(),
		s = r.TRS_URL + "/v1/page/sentence";
		a.open("POST", s, !0),
		a.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
		a.timeout = 5e3,
		a.setRequestHeader("content-type", "application/json"),
		a.onload = function (e) {
			var t = JSON.parse(this.responseText);
			o(t)
		},
		a.send(JSON.stringify({
				user_id: t,
				page_id: i,
				sentence_id: e,
				trans_type: "en2zh"
			}))
	},
	exports.updatePageSentence = function (e, t, o, a) {
		if (!xhrLoading) {
			var s = n(),
			u = r.TRS_URL + "/v1/page/" + pageId + "/sentence/" + t;
			xhrLoading = !0,
			s.open("POST", u, !0),
			s.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
			s.timeout = 5e3,
			s.setRequestHeader("content-type", "application/json"),
			s.onload = function (e) {
				xhrLoading = !1;
				var t = JSON.parse(this.responseText);
				a(t)
			},
			s.onerror = function (e) {
				throw xhrLoading = !1,
				i.open({
					content: UPDATE_TARGET_ERROR,
					skin: "msg",
					time: 3
				}),
				console.error(e),
				a(),
				new Error("commentPageSentence Error", e)
			},
			s.send(JSON.stringify({
					source: e,
					target: o,
					user_id: userId,
					sentence_id: t,
					trans_type: "en2zh"
				}))
		}
	},
	exports.commitPageSentence = function (e, t, o, a, s) {
		if (!xhrLoading) {
			var u = n(),
			l = r.TRS_URL + "/v1/page/" + pageId + "/sentence",
			c = userId;
			s && (c = s),
			xhrLoading = !0,
			u.open("POST", l, !0),
			u.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
			u.timeout = 5e3,
			u.setRequestHeader("content-type", "application/json"),
			u.onload = function (e) {
				xhrLoading = !1;
				var t = JSON.parse(this.responseText);
				a(t)
			},
			u.onerror = function (e) {
				throw xhrLoading = !1,
				i.open({
					content: UPDATE_TARGET_ERROR,
					skin: "msg",
					time: 3
				}),
				console.error(e),
				new Error("commitPageSentence Error", e)
			},
			u.send(JSON.stringify({
					user_id: c,
					page_id: pageId,
					source: e,
					target: t,
					trans_type: "en2zh",
					action: o || ""
				}))
		}
	},
	exports.commitPageSentence = function (e, t, o, a, s) {
		if (!xhrLoading) {
			var u = n(),
			l = r.TRS_URL + "/v1/page/" + pageId + "/sentence",
			c = userId;
			s && (c = s),
			xhrLoading = !0,
			u.open("POST", l, !0),
			u.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
			u.timeout = 5e3,
			u.setRequestHeader("content-type", "application/json"),
			u.onload = function (e) {
				xhrLoading = !1;
				var t = JSON.parse(this.responseText);
				a(t)
			},
			u.onerror = function (e) {
				throw xhrLoading = !1,
				i.open({
					content: UPDATE_TARGET_ERROR,
					skin: "msg",
					time: 3
				}),
				console.error(e),
				new Error("commitPageSentence Error", e)
			},
			u.send(JSON.stringify({
					user_id: c,
					page_id: pageId,
					source: e,
					target: t,
					trans_type: "en2zh",
					action: o || ""
				}))
		}
	},
	exports.commentPageSentence = function (e, t, o) {
		if (!xhrLoading) {
			var a = n();
			xhrLoading = !0,
			t = t.toUpperCase();
			var s = r.TRS_URL + "/v1/page/" + pageId + "/sentence/" + e + "/comment";
			a.open("POST", s, !0),
			a.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
			a.timeout = 3e3,
			a.setRequestHeader("content-type", "application/json"),
			a.onload = function (e) {
				xhrLoading = !1;
				var t = JSON.parse(this.responseText);
				o(t)
			},
			a.onerror = function (e) {
				throw xhrLoading = !1,
				i.open({
					content: UPDATE_TARGET_ERROR,
					skin: "msg",
					time: 3
				}),
				console.error(e),
				new Error("commentPageSentence Error", e)
			},
			setTimeoutHidePopupview(),
			a.send(JSON.stringify({
					user_id: userId,
					sentence_id: e,
					trans_type: "en2zh",
					action: t
				}))
		}
	},
	exports.pageAuth = function (e, t, o, a) {
		var s = n(),
		u = r.TRS_URL + "/v1/page/auth";
		s.open("POST", u, !0),
		s.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
		s.timeout = 3e3,
		s.setRequestHeader("content-type", "application/json"),
		s.onerror = function (e) {
			throw console.error(s, e),
			i.open({
				content: r.PAGE_AUTH_ERROR_MSG,
				skin: "msg",
				time: 3
			}),
			new Error("PageAuth Error", e)
		},
		s.onload = function (e) {
			var t = JSON.parse(this.responseText);
			a(t)
		},
		s.send(JSON.stringify({
				user_id: e,
				browser_id: t,
				device_id: o,
				url: document.URL,
				title: document.title
			}))
	},
	exports.fetchPageTranslator = function (e, t, i) {
		var o = n(),
		a = r.TRS_URL + "/v1/page/" + e + "/author";
		o.open("POST", a, !0),
		o.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
		o.timeout = 5e3,
		o.setRequestHeader("content-type", "application/json"),
		o.onload = function (e) {
			var t = JSON.parse(this.responseText);
			i(t)
		},
		o.onerror = function (e) {
			throw console.error(e),
			new Error("fetchPageTranslator Error", e)
		},
		o.send(JSON.stringify({
				user_id: t
			}))
	},
	exports.pageMark = function (e, t, i, o) {
		var a = n(),
		s = r.TRS_URL + "/v1/page/mark";
		a.open("POST", s, !0),
		a.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
		a.timeout = 3e4,
		a.setRequestHeader("content-type", "application/json"),
		a.onload = function (e) {
			var t = JSON.parse(this.responseText);
			o(t)
		},
		a.send(JSON.stringify({
				user_id: t,
				page_id: i,
				reading_chars: e.chars,
				reading_en_words: e.en_words,
				reading_zh_chars: e.zh_chars,
				reading_time: e.time
			}))
	}
}, function (e, exports) {
	var t = "prd",
	n = "1.1.0",
	r = "",
	i = "",
	o = "",
	a = "https://caiyunapp.com/user/login/",
	s = !0;
	"prd" == t ? (r = "https://api.interpreter.caiyunai.com", i = "https://biz.caiyunapp.com", a = "https://www.caiyunapp.com/user/login/", o = "5a096eec830f7876a48aac47", s = !0) : "staging" == t ? (r = "https://api-staging.interpreter.caiyunai.com", i = "https://biz-staging.caiyunapp.com", a = "http://staging.caiyunapp.com/user/login/", o = "5a096eec830f7876a48aac47", s = !0) : "test" == t && (r = "https://api-staging.interpreter.caiyunai.com", i = "http://luo.user.caiyunapp.com:88", a = "http://staging.caiyunapp.com/user/login/", o = "59fad5be1d28d263ea346f39", s = !1),
	e.exports = {
		ENV: t,
		VERSION: n,
		TRS_URL: r,
		BIZ_URL: i,
		LOGIN_URL: a,
		XIAOYI_USERID: o,
		CACHED: s,
		DOWNLOAD_URL: "http://a.app.qq.com/o/simple.jsp?pkgname=com.caiyuninterpreter.activity",
		LNADING_URL: "http://caiyunapp.com/xiaoyi/landing.html",
		NETWORK_ERROR_MSG: "抱歉，网络请求有误，请刷新重试 ",
		PAGE_AUTH_ERROR_MSG: "抱歉，网页认证有误，请刷新重试",
		DEFAULT_AVATAR_URL: "data:image/png;base64,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",
		XIAOYI_DEFAULT_URL: "data:image/jpeg;base64,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",
		LEFT_SLIDE_URL: "data:image/png;base64,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",
		RIGHT_SLIDE_URL: "data:image/png;base64,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",
		CHECKED_IMG_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOtSURBVHhe7ZpraxNBFIbX++UHiXe03kVU1IqKYFVURIoWzZlUKREpUkSsiqiIN1RE6gUp2sxskfrJT/4Yr2i1Ws+ZOWvT5HSlmKTJ7DzwEsK+7M55c3ayl4kCgUAgEAgEAoHa0dc6I+ovzOdvGYaC0PAw0upttgNxQdyLjBplxdG7jnm8NUMUCtOx+LslQbCgGPUVZrMrA4xG0/C0uF0ZxF89Z6fnUBBG3SorvkQwHOncVnZ7jA0CbsghkDCIImxjt8fYUwOuySGgtPqB2s5uj3FzxBUxBJKGn9gVO9jtOUb1VgQwppEozrey03M0XBICSDSCc8ROdnqOhgtCAIlG8NTYxU7PMdAjBJBoBIPaw07PMaq7rPhSYUeovez0HK3OlRVfKgqijZ2eo6FQVnyJ4Bdu389OzzHQJYeA0uo36gA7PSdWp8UQSBSEgYPs9BytlBgCyXYEHGKn52g4JYZAch1xhJ2eY1RHRQCJXEccZafnaDghhkCyHaGOsdNztGrnguUgaHvVKaot+Ass4G+NAf3iaUHE6jg7q0ic34iTzzAe4EPDBEKT4URBkOjUqToxrMOdfx87CAYSw0LeOjXQ32NaEDSZVh2jWvAX+Fp2IBdIMb+IXfWFrhxTO0KdZGeV0fBaPCDJnTKL2Vkf6F6C7imk8Tjl2FkD6PWahjfCQVnwsW6BGNiHx6S7TGEcKLryrDkUiIFBcQBWGIjpXMLu2kDPG9KCMNDJzjrgOsTIA7H6FA2qpeyuLnF+N+4/pSPgDDvrCL2A1UqLA3KqfiD0cDa9I7rYOQUMFebiAIrywFAaPkfF3DJ2/x/0uD41CHWWnVNIPQKhN1n0RkvaP4ke5TUMA+1zcEAD4kBJWn3Bz+Xsnhz0bpOudqX9OnWzs4GgNQsGXgmDZdmLtckFEuc2pwah1Xl2NiAUiIZ+ceBWGEhRrWB3Ojq3Kb0joIedDYzrkJdyASQMROdWslvGwIbUIOhNWNPgOuSFWIiVPWVa2D0enV+P28ZuBCsEF9nZRLgOeSYXRMJA4twqdjtMfi2G+E32o+glcdPy/vAsnOSeioVZ0RySX229GtZwxwg+q17ra2qGCjOx0D6hOBbNIXgJnRaEhst2QYkX0HpKA0/EQv8puOpPEAlugeljueAJRGusvAsiwXaIelRRtCi47m8QCS6QB5XFl0irm/4HkWBPGXVfDIIWpGYmiATXIePXZtMS5cwFkTBusTrcyW4QCS6QNvsZCAQCgUAgkHmi6A/+bsV/gdPAhwAAAABJRU5ErkJggg==",
		FAVOR_IMG_URL: "data:image/png;base64,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"
	}
}, function (e, exports) {
	exports.levenshteinDistance = function (e, t) {
		if (0 == e.length)
			return t.length;
		if (0 == t.length)
			return e.length;
		var n,
		r = [];
		for (n = 0; n <= t.length; n++)
			r[n] = [n];
		var i;
		for (i = 0; i <= e.length; i++)
			r[0][i] = i;
		for (n = 1; n <= t.length; n++)
			for (i = 1; i <= e.length; i++)
				t.charAt(n - 1) == e.charAt(i - 1) ? r[n][i] = r[n - 1][i - 1] : r[n][i] = Math.min(r[n - 1][i - 1] + 1, Math.min(r[n][i - 1] + 1, r[n - 1][i] + 1));
		return r[t.length][e.length]
	},
	exports.getDateDiff = function (e) {
		"string" == typeof e && (e = new Date(e).getTime());
		var t = 6e4,
		n = 60 * t,
		r = 24 * n,
		i = 30 * r,
		o = (new Date).getTime(),
		a = o - 1e3 * e,
		s = "刚刚";
		if (a < 0)
			return s;
		var u = a / i,
		l = a / (7 * r),
		c = a / r,
		p = a / n,
		d = a / t;
		return s = u >= 1 ? "" + parseInt(u) + "月前" : l >= 1 ? "" + parseInt(l) + "周前" : c >= 1 ? "" + parseInt(c) + "天前" : p >= 1 ? "" + parseInt(p) + "小时前" : d >= 1 ? "" + parseInt(d) + "分钟前" : "刚刚"
	},
	exports.isURL = function (e) {
		return !!e.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi)
	},
	exports.detectLang = function (e) {
		if ("string" != typeof e)
			return "en";
		var t = "en",
		n = e.match(/[\u4e00-\u9fa5]/g) || [],
		r = n.length / e.length,
		i = /[\u3020-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31F0-\u31FF]/g,
		o = e.match(i) || [],
		a = o.length / e.length;
		return a > .12 ? t = "jp" : r > .24 && (t = "zh"),
		t
	},
	exports.preload = function (e) {
		for (var t = 0, n = e; t < n; t++)
			(new Image).src = e[t]
	},
	exports.uuid = function () {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
			var t = 16 * Math.random() | 0,
			n = "x" == e ? t : 3 & t | 8;
			return n.toString(16)
		})
	},
	exports.wordStatistics = function (e) {
		for (var t = e.innerText.replace(/\r\n/g, "\n"), n = t.replace(/\n/g, ""), r = t.match(/[\u4e00-\u9fa5]/g) || [], i = t.match(/\b\w+\b/g) || [], o = t.match(/\b\d+\b/g) || [], a = (n.match(/[|\~|\`|\!|\@|\#|\jq|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g) || [], 0), s = 0; s < n.length; s++) {
			var u = n.charAt(s);
			u.match(/[^\x00-\xff]/) && a++
		}
		for (var l = n.match(/[A-Za-z]/g) || [], c = (l.length, n.match(/[0-9]/g) || []), p = (c.length, 0), d = t.split("\n"), s = 0; s < d.length; s++)
			d[s].length > 0 && p++;
		return {
			chars: n.length,
			en_words: i.length - o.length,
			zh_chars: r.length
		}
	}
}, function (e, exports, t) {
	var n,
	r;
	/*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
	!function (t, n) {
		"use strict";
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
			if (!e.document)
				throw new Error("jQuery requires a window with a document");
			return n(e)
		}
		 : n(t)
	}
	("undefined" != typeof window ? window : this, function (t, i) {
		"use strict";
		function o(e, t) {
			t = t || oe;
			var n = t.createElement("script");
			n.text = e,
			t.head.appendChild(n).parentNode.removeChild(n)
		}
		function a(e) {
			var t = !!e && "length" in e && e.length,
			n = jQuery.type(e);
			return "function" !== n && !jQuery.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}
		function s(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		function u(e, t, n) {
			return jQuery.isFunction(t) ? jQuery.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			}) : t.nodeType ? jQuery.grep(e, function (e) {
				return e === t !== n
			}) : "string" != typeof t ? jQuery.grep(e, function (e) {
				return ce.call(t, e) > -1 !== n
			}) : Re.test(t) ? jQuery.filter(t, e, n) : (t = jQuery.filter(t, e), jQuery.grep(e, function (e) {
					return ce.call(t, e) > -1 !== n && 1 === e.nodeType
				}))
		}
		function l(e, t) {
			for (; (e = e[t]) && 1 !== e.nodeType; );
			return e
		}
		function c(e) {
			var t = {};
			return jQuery.each(e.match(Me) || [], function (e, n) {
				t[n] = !0
			}),
			t
		}
		function p(e) {
			return e
		}
		function d(e) {
			throw e
		}
		function f(e, t, n, r) {
			var i;
			try {
				e && jQuery.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && jQuery.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
			} catch (e) {
				n.apply(void 0, [e])
			}
		}
		function h() {
			oe.removeEventListener("DOMContentLoaded", h),
			t.removeEventListener("load", h),
			jQuery.ready()
		}
		function g() {
			this.expando = jQuery.expando + g.uid++
		}
		function m(e) {
			return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
		}
		function y(e, t, n) {
			var r;
			if (void 0 === n && 1 === e.nodeType)
				if (r = "data-" + t.replace(je, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = m(n)
					} catch (e) {}
					Ue.set(e, t, n)
				} else
					n = void 0;
			return n
		}
		function v(e, t, n, r) {
			var i,
			o = 1,
			a = 20,
			s = r ? function () {
				return r.cur()
			}
			 : function () {
				return jQuery.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"),
			c = (jQuery.cssNumber[t] || "px" !== l && +u) && qe.exec(jQuery.css(e, t));
			if (c && c[3] !== l) {
				l = l || c[3],
				n = n || [],
				c = +u || 1;
				do
					o = o || ".5", c /= o, jQuery.style(e, t, c + l);
				while (o !== (o = s() / u) && 1 !== o && --a)
			}
			return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
			i
		}
		function x(e) {
			var t,
			n = e.ownerDocument,
			r = e.nodeName,
			i = We[r];
			return i ? i : (t = n.body.appendChild(n.createElement(r)), i = jQuery.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), We[r] = i, i)
		}
		function A(e, t) {
			for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
				r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ve(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
			for (o = 0; o < a; o++)
				null != i[o] && (e[o].style.display = i[o]);
			return e
		}
		function b(e, t) {
			var n;
			return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
			void 0 === t || t && s(e, t) ? jQuery.merge([e], n) : n
		}
		function w(e, t) {
			for (var n = 0, r = e.length; n < r; n++)
				Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
		}
		function T(e, t, n, r, i) {
			for (var o, a, s, u, l, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
				if (o = e[f], o || 0 === o)
					if ("object" === jQuery.type(o))
						jQuery.merge(d, o.nodeType ? [o] : o);
					else if (Ze.test(o)) {
						for (a = a || p.appendChild(t.createElement("div")), s = (Je.exec(o) || ["", ""])[1].toLowerCase(), u = Ye[s] || Ye._default, a.innerHTML = u[1] + jQuery.htmlPrefilter(o) + u[2], c = u[0]; c--; )
							a = a.lastChild;
						jQuery.merge(d, a.childNodes),
						a = p.firstChild,
						a.textContent = ""
					} else
						d.push(t.createTextNode(o));
			for (p.textContent = "", f = 0; o = d[f++]; )
				if (r && jQuery.inArray(o, r) > -1)
					i && i.push(o);
				else if (l = jQuery.contains(o.ownerDocument, o), a = b(p.appendChild(o), "script"), l && w(a), n)
					for (c = 0; o = a[c++]; )
						Qe.test(o.type || "") && n.push(o);
			return p
		}
		function E() {
			return !0
		}
		function S() {
			return !1
		}
		function C() {
			try {
				return oe.activeElement
			} catch (e) {}
		}
		function R(e, t, n, r, i, o) {
			var a,
			s;
			if ("object" == typeof t) {
				"string" != typeof n && (r = r || n, n = void 0);
				for (s in t)
					R(e, s, n, r, t[s], o);
				return e
			}
			if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)
				i = S;
			else if (!i)
				return e;
			return 1 === o && (a = i, i = function (e) {
				return jQuery().off(e),
				a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = jQuery.guid++)),
			e.each(function () {
				jQuery.event.add(this, t, i, r, n)
			})
		}
		function _(e, t) {
			return s(e, "table") && s(11 !== t.nodeType ? t : t.firstChild, "tr") ? jQuery(">tbody", e)[0] || e : e
		}
		function k(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
			e
		}
		function L(e) {
			var t = at.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"),
			e
		}
		function O(e, t) {
			var n,
			r,
			i,
			o,
			a,
			s,
			u,
			l;
			if (1 === t.nodeType) {
				if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), l = o.events)) {
					delete a.handle,
					a.events = {};
					for (i in l)
						for (n = 0, r = l[i].length; n < r; n++)
							jQuery.event.add(t, i, l[i][n])
				}
				Ue.hasData(e) && (s = Ue.access(e), u = jQuery.extend({}, s), Ue.set(t, u))
			}
		}
		function N(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}
		function M(e, t, n, r) {
			t = ue.apply([], t);
			var i,
			a,
			s,
			u,
			l,
			c,
			p = 0,
			d = e.length,
			f = d - 1,
			h = t[0],
			g = jQuery.isFunction(h);
			if (g || d > 1 && "string" == typeof h && !me.checkClone && ot.test(h))
				return e.each(function (i) {
					var o = e.eq(i);
					g && (t[0] = h.call(this, i, o.html())),
					M(o, t, n, r)
				});
			if (d && (i = T(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
				for (s = jQuery.map(b(i, "script"), k), u = s.length; p < d; p++)
					l = i, p !== f && (l = jQuery.clone(l, !0, !0), u && jQuery.merge(s, b(l, "script"))), n.call(e[p], l, p);
				if (u)
					for (c = s[s.length - 1].ownerDocument, jQuery.map(s, L), p = 0; p < u; p++)
						l = s[p], Qe.test(l.type || "") && !Fe.access(l, "globalEval") && jQuery.contains(c, l) && (l.src ? jQuery._evalUrl && jQuery._evalUrl(l.src) : o(l.textContent.replace(st, ""), c))
			}
			return e
		}
		function I(e, t, n) {
			for (var r, i = t ? jQuery.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
				n || 1 !== r.nodeType || jQuery.cleanData(b(r)), r.parentNode && (n && jQuery.contains(r.ownerDocument, r) && w(b(r, "script")), r.parentNode.removeChild(r));
			return e
		}
		function D(e, t, n) {
			var r,
			i,
			o,
			a,
			s = e.style;
			return n = n || ct(e),
			n && (a = n.getPropertyValue(t) || n[t], "" !== a || jQuery.contains(e.ownerDocument, e) || (a = jQuery.style(e, t)), !me.pixelMarginRight() && lt.test(a) && ut.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
			void 0 !== a ? a + "" : a
		}
		function B(e, t) {
			return {
				get: function () {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}
		function P(e) {
			if (e in mt)
				return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; )
				if (e = gt[n] + t, e in mt)
					return e
		}
		function F(e) {
			var t = jQuery.cssProps[e];
			return t || (t = jQuery.cssProps[e] = P(e) || e),
			t
		}
		function U(e, t, n) {
			var r = qe.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
		}
		function H(e, t, n, r, i) {
			var o,
			a = 0;
			for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
				"margin" === n && (a += jQuery.css(e, n + Xe[o], !0, i)), r ? ("content" === n && (a -= jQuery.css(e, "padding" + Xe[o], !0, i)), "margin" !== n && (a -= jQuery.css(e, "border" + Xe[o] + "Width", !0, i))) : (a += jQuery.css(e, "padding" + Xe[o], !0, i), "padding" !== n && (a += jQuery.css(e, "border" + Xe[o] + "Width", !0, i)));
			return a
		}
		function j(e, t, n) {
			var r,
			i = ct(e),
			o = D(e, t, i),
			a = "border-box" === jQuery.css(e, "boxSizing", !1, i);
			return lt.test(o) ? o : (r = a && (me.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + H(e, t, n || (a ? "border" : "content"), r, i) + "px")
		}
		function G(e, t, n, r, i) {
			return new G.prototype.init(e, t, n, r, i)
		}
		function q() {
			vt && (oe.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(q) : t.setTimeout(q, jQuery.fx.interval), jQuery.fx.tick())
		}
		function X() {
			return t.setTimeout(function () {
				yt = void 0
			}),
			yt = jQuery.now()
		}
		function V(e, t) {
			var n,
			r = 0,
			i = {
				height: e
			};
			for (t = t ? 1 : 0; r < 4; r += 2 - t)
				n = Xe[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e),
			i
		}
		function K(e, t, n) {
			for (var r, i = (J.tweeners[t] || []).concat(J.tweeners["*"]), o = 0, a = i.length; o < a; o++)
				if (r = i[o].call(n, t, e))
					return r
		}
		function W(e, t, n) {
			var r,
			i,
			o,
			a,
			s,
			u,
			l,
			c,
			p = "width" in t || "height" in t,
			d = this,
			f = {},
			h = e.style,
			g = e.nodeType && Ve(e),
			m = Fe.get(e, "fxshow");
			n.queue || (a = jQuery._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
					a.unqueued || s()
				}), a.unqueued++, d.always(function () {
					d.always(function () {
						a.unqueued--,
						jQuery.queue(e, "fx").length || a.empty.fire()
					})
				}));
			for (r in t)
				if (i = t[r], xt.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !m || void 0 === m[r])
							continue;
						g = !0
					}
					f[r] = m && m[r] || jQuery.style(e, r)
				}
			if (u = !jQuery.isEmptyObject(t), u || !jQuery.isEmptyObject(f)) {
				p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = m && m.display, null == l && (l = Fe.get(e, "display")), c = jQuery.css(e, "display"), "none" === c && (l ? c = l : (A([e], !0), l = e.style.display || l, c = jQuery.css(e, "display"), A([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === jQuery.css(e, "float") && (u || (d.done(function () {
								h.display = l
							}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")),
				n.overflow && (h.overflow = "hidden", d.always(function () {
						h.overflow = n.overflow[0],
						h.overflowX = n.overflow[1],
						h.overflowY = n.overflow[2]
					})),
				u = !1;
				for (r in f)
					u || (m ? "hidden" in m && (g = m.hidden) : m = Fe.access(e, "fxshow", {
								display: l
							}), o && (m.hidden = !g), g && A([e], !0), d.done(function () {
							g || A([e]),
							Fe.remove(e, "fxshow");
							for (r in f)
								jQuery.style(e, r, f[r])
						})), u = K(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
			}
		}
		function z(e, t) {
			var n,
			r,
			i,
			o,
			a;
			for (n in e)
				if (r = jQuery.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = jQuery.cssHooks[r], a && "expand" in a) {
					o = a.expand(o),
					delete e[r];
					for (n in o)
						n in e || (e[n] = o[n], t[n] = i)
				} else
					t[r] = i
		}
		function J(e, t, n) {
			var r,
			i,
			o = 0,
			a = J.prefilters.length,
			s = jQuery.Deferred().always(function () {
					delete u.elem
				}),
			u = function () {
				if (i)
					return !1;
				for (var t = yt || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
					l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]),
				o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
					elem: e,
					props: jQuery.extend({}, t),
					opts: jQuery.extend(!0, {
						specialEasing: {},
						easing: jQuery.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: yt || X(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var r = jQuery.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r),
						r
					},
					stop: function (t) {
						var n = 0,
						r = t ? l.tweens.length : 0;
						if (i)
							return this;
						for (i = !0; n < r; n++)
							l.tweens[n].run(1);
						return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
						this
					}
				}),
			c = l.props;
			for (z(c, l.opts.specialEasing); o < a; o++)
				if (r = J.prefilters[o].call(l, e, c, l.opts))
					return jQuery.isFunction(r.stop) && (jQuery._queueHooks(l.elem, l.opts.queue).stop = jQuery.proxy(r.stop, r)), r;
			return jQuery.map(c, K, l),
			jQuery.isFunction(l.opts.start) && l.opts.start.call(e, l),
			l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
			jQuery.fx.timer(jQuery.extend(u, {
					elem: e,
					anim: l,
					queue: l.opts.queue
				})),
			l
		}
		function Q(e) {
			var t = e.match(Me) || [];
			return t.join(" ")
		}
		function Y(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}
		function Z(e, t, n, r) {
			var i;
			if (Array.isArray(t))
				jQuery.each(t, function (t, i) {
					n || Lt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
				});
			else if (n || "object" !== jQuery.type(t))
				r(e, t);
			else
				for (i in t)
					Z(e + "[" + i + "]", t[i], n, r)
		}
		function $(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r,
				i = 0,
				o = t.toLowerCase().match(Me) || [];
				if (jQuery.isFunction(n))
					for (; r = o[i++]; )
						"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}
		function ee(e, t, n, r) {
			function i(s) {
				var u;
				return o[s] = !0,
				jQuery.each(e[s] || [], function (e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
				}),
				u
			}
			var o = {},
			a = e === Gt;
			return i(t.dataTypes[0]) || !o["*"] && i("*")
		}
		function te(e, t) {
			var n,
			r,
			i = jQuery.ajaxSettings.flatOptions || {};
			for (n in t)
				void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
			return r && jQuery.extend(!0, e, r),
			e
		}
		function ne(e, t, n) {
			for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
				u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r)
				for (i in s)
					if (s[i] && s[i].test(r)) {
						u.unshift(i);
						break
					}
			if (u[0]in n)
				o = u[0];
			else {
				for (i in n) {
					if (!u[0] || e.converters[i + " " + u[0]]) {
						o = i;
						break
					}
					a || (a = i)
				}
				o = o || a
			}
			if (o)
				return o !== u[0] && u.unshift(o), n[o]
		}
		function re(e, t, n, r) {
			var i,
			o,
			a,
			s,
			u,
			l = {},
			c = e.dataTypes.slice();
			if (c[1])
				for (a in e.converters)
					l[a.toLowerCase()] = e.converters[a];
			for (o = c.shift(); o; )
				if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
					if ("*" === o)
						o = u;
					else if ("*" !== u && u !== o) {
						if (a = l[u + " " + o] || l["* " + o], !a)
							for (i in l)
								if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
									break
								}
						if (a !== !0)
							if (a && e.throws)
								t = a(t);
							else
								try {
									t = a(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + u + " to " + o
									}
								}
					}
			return {
				state: "success",
				data: t
			}
		}
		var ie = [],
		oe = t.document,
		ae = Object.getPrototypeOf,
		se = ie.slice,
		ue = ie.concat,
		le = ie.push,
		ce = ie.indexOf,
		pe = {},
		de = pe.toString,
		fe = pe.hasOwnProperty,
		he = fe.toString,
		ge = he.call(Object),
		me = {},
		ye = "3.2.1",
		jQuery = function (e, t) {
			return new jQuery.fn.init(e, t)
		},
		ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		xe = /^-ms-/,
		Ae = /-([a-z])/g,
		be = function (e, t) {
			return t.toUpperCase()
		};
		jQuery.fn = jQuery.prototype = {
			jquery: ye,
			constructor: jQuery,
			length: 0,
			toArray: function () {
				return se.call(this)
			},
			get: function (e) {
				return null == e ? se.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e) {
				var t = jQuery.merge(this.constructor(), e);
				return t.prevObject = this,
				t
			},
			each: function (e) {
				return jQuery.each(this, e)
			},
			map: function (e) {
				return this.pushStack(jQuery.map(this, function (t, n) {
						return e.call(t, n, t)
					}))
			},
			slice: function () {
				return this.pushStack(se.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
				n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: le,
			sort: ie.sort,
			splice: ie.splice
		},
		jQuery.extend = jQuery.fn.extend = function () {
			var e,
			t,
			n,
			r,
			i,
			o,
			a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || jQuery.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
				if (null != (e = arguments[s]))
					for (t in e)
						n = a[t], r = e[t], a !== r && (l && r && (jQuery.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && jQuery.isPlainObject(n) ? n : {}, a[t] = jQuery.extend(l, o, r)) : void 0 !== r && (a[t] = r));
			return a
		},
		jQuery.extend({
			expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === jQuery.type(e)
			},
			isWindow: function (e) {
				return null != e && e === e.window
			},
			isNumeric: function (e) {
				var t = jQuery.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			},
			isPlainObject: function (e) {
				var t,
				n;
				return !(!e || "[object Object]" !== de.call(e)) && (!(t = ae(e)) || (n = fe.call(t, "constructor") && t.constructor, "function" == typeof n && he.call(n) === ge))
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e)
					return !1;
				return !0
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object" : typeof e
			},
			globalEval: function (e) {
				o(e)
			},
			camelCase: function (e) {
				return e.replace(xe, "ms-").replace(Ae, be)
			},
			each: function (e, t) {
				var n,
				r = 0;
				if (a(e))
					for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
				else
					for (r in e)
						if (t.call(e[r], r, e[r]) === !1)
							break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(ve, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (a(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)),
				n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : ce.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++)
					e[i++] = t[r];
				return e.length = i,
				e
			},
			grep: function (e, t, n) {
				for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
					r = !t(e[o], o), r !== s && i.push(e[o]);
				return i
			},
			map: function (e, t, n) {
				var r,
				i,
				o = 0,
				s = [];
				if (a(e))
					for (r = e.length; o < r; o++)
						i = t(e[o], o, n), null != i && s.push(i);
				else
					for (o in e)
						i = t(e[o], o, n), null != i && s.push(i);
				return ue.apply([], s)
			},
			guid: 1,
			proxy: function (e, t) {
				var n,
				r,
				i;
				if ("string" == typeof t && (n = e[t], t = e, e = n), jQuery.isFunction(e))
					return r = se.call(arguments, 2), i = function () {
						return e.apply(t || this, r.concat(se.call(arguments)))
					},
				i.guid = e.guid = e.guid || jQuery.guid++,
				i
			},
			now: Date.now,
			support: me
		}),
		"function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = ie[Symbol.iterator]),
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			pe["[object " + t + "]"] = t.toLowerCase()
		});
		var we = /*!
			 * Sizzle CSS Selector Engine v2.3.3
			 * https://sizzlejs.com/
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license
			 * http://jquery.org/license
			 *
			 * Date: 2016-08-08
			 */
		function (e) {
			function t(e, t, n, r) {
				var i,
				o,
				a,
				s,
				u,
				l,
				c,
				d = t && t.ownerDocument,
				h = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
					return n;
				if (!r && ((t ? t.ownerDocument || t : j) !== M && N(t), t = t || M, D)) {
					if (11 !== h && (u = ye.exec(e)))
						if (i = u[1]) {
							if (9 === h) {
								if (!(a = t.getElementById(i)))
									return n;
								if (a.id === i)
									return n.push(a), n
							} else if (d && (a = d.getElementById(i)) && U(t, a) && a.id === i)
								return n.push(a), n
						} else {
							if (u[2])
								return Z.apply(n, t.getElementsByTagName(e)), n;
							if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
								return Z.apply(n, t.getElementsByClassName(i)), n
						}
					if (w.qsa && !K[e + " "] && (!B || !B.test(e))) {
						if (1 !== h)
							d = t, c = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = H), l = C(e), o = l.length; o--; )
								l[o] = "#" + s + " " + f(l[o]);
							c = l.join(","),
							d = ve.test(e) && p(t.parentNode) || t
						}
						if (c)
							try {
								return Z.apply(n, d.querySelectorAll(c)),
								n
							} catch (e) {}
						finally {
							s === H && t.removeAttribute("id")
						}
					}
				}
				return _(e.replace(se, "$1"), t, n, r)
			}
			function n() {
				function e(n, r) {
					return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
					e[n + " "] = r
				}
				var t = [];
				return e
			}
			function r(e) {
				return e[H] = !0,
				e
			}
			function i(e) {
				var t = M.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				}
				finally {
					t.parentNode && t.parentNode.removeChild(t),
					t = null
				}
			}
			function o(e, t) {
				for (var n = e.split("|"), r = n.length; r--; )
					T.attrHandle[n[r]] = t
			}
			function a(e, t) {
				var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (r)
					return r;
				if (n)
					for (; n = n.nextSibling; )
						if (n === t)
							return -1;
				return e ? 1 : -1
			}
			function s(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}
			function u(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}
			function l(e) {
				return function (t) {
					return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
				}
			}
			function c(e) {
				return r(function (t) {
					return t = +t,
					r(function (n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--; )
							n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			function p(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			function d() {}
			function f(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++)
					r += e[t].value;
				return r
			}
			function h(e, t, n) {
				var r = t.dir,
				i = t.next,
				o = i || r,
				a = n && "parentNode" === o,
				s = q++;
				return t.first ? function (t, n, i) {
					for (; t = t[r]; )
						if (1 === t.nodeType || a)
							return e(t, n, i);
					return !1
				}
				 : function (t, n, u) {
					var l,
					c,
					p,
					d = [G, s];
					if (u) {
						for (; t = t[r]; )
							if ((1 === t.nodeType || a) && e(t, n, u))
								return !0
					} else
						for (; t = t[r]; )
							if (1 === t.nodeType || a)
								if (p = t[H] || (t[H] = {}), c = p[t.uniqueID] || (p[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
									t = t[r] || t;
								else {
									if ((l = c[o]) && l[0] === G && l[1] === s)
										return d[2] = l[2];
									if (c[o] = d, d[2] = e(t, n, u))
										return !0
								}
					return !1
				}
			}
			function g(e) {
				return e.length > 1 ? function (t, n, r) {
					for (var i = e.length; i--; )
						if (!e[i](t, n, r))
							return !1;
					return !0
				}
				 : e[0]
			}
			function m(e, n, r) {
				for (var i = 0, o = n.length; i < o; i++)
					t(e, n[i], r);
				return r
			}
			function y(e, t, n, r, i) {
				for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
					(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
				return a
			}
			function v(e, t, n, i, o, a) {
				return i && !i[H] && (i = v(i)),
				o && !o[H] && (o = v(o, a)),
				r(function (r, a, s, u) {
					var l,
					c,
					p,
					d = [],
					f = [],
					h = a.length,
					g = r || m(t || "*", s.nodeType ? [s] : s, []),
					v = !e || !r && t ? g : y(g, d, e, s, u),
					x = n ? o || (r ? e : h || i) ? [] : a : v;
					if (n && n(v, x, s, u), i)
						for (l = y(x, f), i(l, [], s, u), c = l.length; c--; )
							(p = l[c]) && (x[f[c]] = !(v[f[c]] = p));
					if (r) {
						if (o || e) {
							if (o) {
								for (l = [], c = x.length; c--; )
									(p = x[c]) && l.push(v[c] = p);
								o(null, x = [], l, u)
							}
							for (c = x.length; c--; )
								(p = x[c]) && (l = o ? ee(r, p) : d[c]) > -1 && (r[l] = !(a[l] = p))
						}
					} else
						x = y(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x)
				})
			}
			function x(e) {
				for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = h(function (e) {
							return e === t
						}, a, !0), l = h(function (e) {
							return ee(t, e) > -1
						}, a, !0), c = [function (e, n, r) {
							var i = !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
							return t = null,
							i
						}
					]; s < i; s++)
					if (n = T.relative[e[s].type])
						c = [h(g(c), n)];
					else {
						if (n = T.filter[e[s].type].apply(null, e[s].matches), n[H]) {
							for (r = ++s; r < i && !T.relative[e[r].type]; r++);
							return v(s > 1 && g(c), s > 1 && f(e.slice(0, s - 1).concat({
										value: " " === e[s - 2].type ? "*" : ""
									})).replace(se, "$1"), n, s < r && x(e.slice(s, r)), r < i && x(e = e.slice(r)), r < i && f(e))
						}
						c.push(n)
					}
				return g(c)
			}
			function A(e, n) {
				var i = n.length > 0,
				o = e.length > 0,
				a = function (r, a, s, u, l) {
					var c,
					p,
					d,
					f = 0,
					h = "0",
					g = r && [],
					m = [],
					v = k,
					x = r || o && T.find.TAG("*", l),
					A = G += null == v ? 1 : Math.random() || .1,
					b = x.length;
					for (l && (k = a === M || a || l); h !== b && null != (c = x[h]); h++) {
						if (o && c) {
							for (p = 0, a || c.ownerDocument === M || (N(c), s = !D); d = e[p++]; )
								if (d(c, a || M, s)) {
									u.push(c);
									break
								}
							l && (G = A)
						}
						i && ((c = !d && c) && f--, r && g.push(c))
					}
					if (f += h, i && h !== f) {
						for (p = 0; d = n[p++]; )
							d(g, m, a, s);
						if (r) {
							if (f > 0)
								for (; h--; )
									g[h] || m[h] || (m[h] = Q.call(u));
							m = y(m)
						}
						Z.apply(u, m),
						l && !r && m.length > 0 && f + n.length > 1 && t.uniqueSort(u)
					}
					return l && (G = A, k = v),
					g
				};
				return i ? r(a) : a
			}
			var b,
			w,
			T,
			E,
			S,
			C,
			R,
			_,
			k,
			L,
			O,
			N,
			M,
			I,
			D,
			B,
			P,
			F,
			U,
			H = "sizzle" + 1 * new Date,
			j = e.document,
			G = 0,
			q = 0,
			X = n(),
			V = n(),
			K = n(),
			W = function (e, t) {
				return e === t && (O = !0),
				0
			},
			z = {}
			.hasOwnProperty,
			J = [],
			Q = J.pop,
			Y = J.push,
			Z = J.push,
			$ = J.slice,
			ee = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t)
						return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
			oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ue = new RegExp("^" + ne + "*," + ne + "*"),
			le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			pe = new RegExp(oe),
			de = new RegExp("^" + re + "$"),
			fe = {
				ID: new RegExp("^#(" + re + ")"),
				CLASS: new RegExp("^\\.(" + re + ")"),
				TAG: new RegExp("^(" + re + "|[*])"),
				ATTR: new RegExp("^" + ie),
				PSEUDO: new RegExp("^" + oe),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			he = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ve = /[+~]/,
			xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			Ae = function (e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			we = function (e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			Te = function () {
				N()
			},
			Ee = h(function (e) {
					return e.disabled === !0 && ("form" in e || "label" in e)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				Z.apply(J = $.call(j.childNodes), j.childNodes),
				J[j.childNodes.length].nodeType
			} catch (e) {
				Z = {
					apply: J.length ? function (e, t) {
						Y.apply(e, $.call(t))
					}
					 : function (e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++]; );
						e.length = n - 1
					}
				}
			}
			w = t.support = {},
			S = t.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			},
			N = t.setDocument = function (e) {
				var t,
				n,
				r = e ? e.ownerDocument || e : j;
				return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, I = M.documentElement, D = !S(M), j !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function (e) {
							return e.className = "i",
							!e.getAttribute("className")
						}), w.getElementsByTagName = i(function (e) {
							return e.appendChild(M.createComment("")),
							!e.getElementsByTagName("*").length
						}), w.getElementsByClassName = me.test(M.getElementsByClassName), w.getById = i(function (e) {
							return I.appendChild(e).id = H,
							!M.getElementsByName || !M.getElementsByName(H).length
						}), w.getById ? (T.filter.ID = function (e) {
						var t = e.replace(xe, Ae);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}, T.find.ID = function (e, t) {
						if ("undefined" != typeof t.getElementById && D) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (T.filter.ID = function (e) {
						var t = e.replace(xe, Ae);
						return function (e) {
							var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}, T.find.ID = function (e, t) {
						if ("undefined" != typeof t.getElementById && D) {
							var n,
							r,
							i,
							o = t.getElementById(e);
							if (o) {
								if (n = o.getAttributeNode("id"), n && n.value === e)
									return [o];
								for (i = t.getElementsByName(e), r = 0; o = i[r++]; )
									if (n = o.getAttributeNode("id"), n && n.value === e)
										return [o]
							}
							return []
						}
					}), T.find.TAG = w.getElementsByTagName ? function (e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
				}
					 : function (e, t) {
					var n,
					r = [],
					i = 0,
					o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++]; )
							1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, T.find.CLASS = w.getElementsByClassName && function (e, t) {
					if ("undefined" != typeof t.getElementsByClassName && D)
						return t.getElementsByClassName(e)
				}, P = [], B = [], (w.qsa = me.test(M.querySelectorAll)) && (i(function (e) {
							I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
							e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"),
							e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"),
							e.querySelectorAll("[id~=" + H + "-]").length || B.push("~="),
							e.querySelectorAll(":checked").length || B.push(":checked"),
							e.querySelectorAll("a#" + H + "+*").length || B.push(".#.+[+~]")
						}), i(function (e) {
							e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = M.createElement("input");
							t.setAttribute("type", "hidden"),
							e.appendChild(t).setAttribute("name", "D"),
							e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="),
							2 !== e.querySelectorAll(":enabled").length && B.push(":enabled", ":disabled"),
							I.appendChild(e).disabled = !0,
							2 !== e.querySelectorAll(":disabled").length && B.push(":enabled", ":disabled"),
							e.querySelectorAll("*,:x"),
							B.push(",.*:")
						})), (w.matchesSelector = me.test(F = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function (e) {
						w.disconnectedMatch = F.call(e, "*"),
						F.call(e, "[s!='']:x"),
						P.push("!=", oe)
					}), B = B.length && new RegExp(B.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(I.compareDocumentPosition), U = t || me.test(I.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				}
					 : function (e, t) {
					if (t)
						for (; t = t.parentNode; )
							if (t === e)
								return !0;
					return !1
				}, W = t ? function (e, t) {
					if (e === t)
						return O = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === j && U(j, e) ? -1 : t === M || t.ownerDocument === j && U(j, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
				}
					 : function (e, t) {
					if (e === t)
						return O = !0, 0;
					var n,
					r = 0,
					i = e.parentNode,
					o = t.parentNode,
					s = [e],
					u = [t];
					if (!i || !o)
						return e === M ? -1 : t === M ? 1 : i ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
					if (i === o)
						return a(e, t);
					for (n = e; n = n.parentNode; )
						s.unshift(n);
					for (n = t; n = n.parentNode; )
						u.unshift(n);
					for (; s[r] === u[r]; )
						r++;
					return r ? a(s[r], u[r]) : s[r] === j ? -1 : u[r] === j ? 1 : 0
				}, M) : M
			},
			t.matches = function (e, n) {
				return t(e, null, null, n)
			},
			t.matchesSelector = function (e, n) {
				if ((e.ownerDocument || e) !== M && N(e), n = n.replace(ce, "='$1']"), w.matchesSelector && D && !K[n + " "] && (!P || !P.test(n)) && (!B || !B.test(n)))
					try {
						var r = F.call(e, n);
						if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
							return r
					} catch (e) {}
				return t(n, M, null, [e]).length > 0
			},
			t.contains = function (e, t) {
				return (e.ownerDocument || e) !== M && N(e),
				U(e, t)
			},
			t.attr = function (e, t) {
				(e.ownerDocument || e) !== M && N(e);
				var n = T.attrHandle[t.toLowerCase()],
				r = n && z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
				return void 0 !== r ? r : w.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			},
			t.escape = function (e) {
				return (e + "").replace(be, we)
			},
			t.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			},
			t.uniqueSort = function (e) {
				var t,
				n = [],
				r = 0,
				i = 0;
				if (O = !w.detectDuplicates, L = !w.sortStable && e.slice(0), e.sort(W), O) {
					for (; t = e[i++]; )
						t === e[i] && (r = n.push(i));
					for (; r--; )
						e.splice(n[r], 1)
				}
				return L = null,
				e
			},
			E = t.getText = function (e) {
				var t,
				n = "",
				r = 0,
				i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent)
							return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling)
							n += E(e)
					} else if (3 === i || 4 === i)
						return e.nodeValue
				} else
					for (; t = e[r++]; )
						n += E(t);
				return n
			},
			T = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: fe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(xe, Ae),
						e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ae),
						"~=" === e[2] && (e[3] = " " + e[3] + " "),
						e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(),
						"nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] =  + (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =  + (e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
						e
					},
					PSEUDO: function (e) {
						var t,
						n = !e[6] && e[2];
						return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(xe, Ae).toLowerCase();
						return "*" === e ? function () {
							return !0
						}
						 : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = X[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && X(e, function (e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, n, r) {
						return function (i) {
							var o = t.attr(i, e);
							return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function (e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
						return 1 === r && 0 === i ? function (e) {
							return !!e.parentNode
						}
						 : function (t, n, u) {
							var l,
							c,
							p,
							d,
							f,
							h,
							g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							y = s && t.nodeName.toLowerCase(),
							v = !u && !s,
							x = !1;
							if (m) {
								if (o) {
									for (; g; ) {
										for (d = t; d = d[g]; )
											if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
												return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && v) {
									for (d = m, p = d[H] || (d[H] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), l = c[e] || [], f = l[0] === G && l[1], x = f && l[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (x = f = 0) || h.pop(); )
										if (1 === d.nodeType && ++x && d === t) {
											c[e] = [G, f, x];
											break
										}
								} else if (v && (d = t, p = d[H] || (d[H] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), l = c[e] || [], f = l[0] === G && l[1], x = f), x === !1)
									for (; (d = ++f && d && d[g] || (x = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (p = d[H] || (d[H] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [G, x]), d !== t)); );
								return x -= i,
								x === r || x % r === 0 && x / r >= 0
							}
						}
					},
					PSEUDO: function (e, n) {
						var i,
						o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
								for (var r, i = o(e, n), a = i.length; a--; )
									r = ee(e, i[a]), e[r] = !(t[r] = i[a])
							}) : function (e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function (e) {
						var t = [],
						n = [],
						i = R(e.replace(se, "$1"));
						return i[H] ? r(function (e, t, n, r) {
							for (var o, a = i(e, null, r, []), s = e.length; s--; )
								(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function (e, r, o) {
							return t[0] = e,
							i(t, null, o, n),
							t[0] = null,
							!n.pop()
						}
					}),
					has: r(function (e) {
						return function (n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function (e) {
						return e = e.replace(xe, Ae),
						function (t) {
							return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
						}
					}),
					lang: r(function (e) {
						return de.test(e || "") || t.error("unsupported lang: " + e),
						e = e.replace(xe, Ae).toLowerCase(),
						function (t) {
							var n;
							do
								if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
									return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === I
					},
					focus: function (e) {
						return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: l(!1),
					disabled: l(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex,
						e.selected === !0
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6)
								return !1;
						return !0
					},
					parent: function (e) {
						return !T.pseudos.empty(e)
					},
					header: function (e) {
						return ge.test(e.nodeName)
					},
					input: function (e) {
						return he.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: c(function () {
						return [0]
					}),
					last: c(function (e, t) {
						return [t - 1]
					}),
					eq: c(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: c(function (e, t) {
						for (var n = 0; n < t; n += 2)
							e.push(n);
						return e
					}),
					odd: c(function (e, t) {
						for (var n = 1; n < t; n += 2)
							e.push(n);
						return e
					}),
					lt: c(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; --r >= 0; )
							e.push(r);
						return e
					}),
					gt: c(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; )
							e.push(r);
						return e
					})
				}
			},
			T.pseudos.nth = T.pseudos.eq;
			for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			})
				T.pseudos[b] = s(b);
			for (b in {
				submit: !0,
				reset: !0
			})
				T.pseudos[b] = u(b);
			return d.prototype = T.filters = T.pseudos,
			T.setFilters = new d,
			C = t.tokenize = function (e, n) {
				var r,
				i,
				o,
				a,
				s,
				u,
				l,
				c = V[e + " "];
				if (c)
					return n ? 0 : c.slice(0);
				for (s = e, u = [], l = T.preFilter; s; ) {
					r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
					r = !1,
					(i = le.exec(s)) && (r = i.shift(), o.push({
							value: r,
							type: i[0].replace(se, " ")
						}), s = s.slice(r.length));
					for (a in T.filter)
						!(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
								value: r,
								type: a,
								matches: i
							}), s = s.slice(r.length));
					if (!r)
						break
				}
				return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
			},
			R = t.compile = function (e, t) {
				var n,
				r = [],
				i = [],
				o = K[e + " "];
				if (!o) {
					for (t || (t = C(e)), n = t.length; n--; )
						o = x(t[n]), o[H] ? r.push(o) : i.push(o);
					o = K(e, A(i, r)),
					o.selector = e
				}
				return o
			},
			_ = t.select = function (e, t, n, r) {
				var i,
				o,
				a,
				s,
				u,
				l = "function" == typeof e && e,
				c = !r && C(e = l.selector || e);
				if (n = n || [], 1 === c.length) {
					if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && D && T.relative[o[1].type]) {
						if (t = (T.find.ID(a.matches[0].replace(xe, Ae), t) || [])[0], !t)
							return n;
						l && (t = t.parentNode),
						e = e.slice(o.shift().value.length)
					}
					for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]); )
						if ((u = T.find[s]) && (r = u(a.matches[0].replace(xe, Ae), ve.test(o[0].type) && p(t.parentNode) || t))) {
							if (o.splice(i, 1), e = r.length && f(o), !e)
								return Z.apply(n, r), n;
							break
						}
				}
				return (l || R(e, c))(r, t, !D, n, !t || ve.test(e) && p(t.parentNode) || t),
				n
			},
			w.sortStable = H.split("").sort(W).join("") === H,
			w.detectDuplicates = !!O,
			N(),
			w.sortDetached = i(function (e) {
					return 1 & e.compareDocumentPosition(M.createElement("fieldset"))
				}),
			i(function (e) {
				return e.innerHTML = "<a href='#'></a>",
				"#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function (e, t, n) {
				if (!n)
					return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}),
			w.attributes && i(function (e) {
				return e.innerHTML = "<input/>",
				e.firstChild.setAttribute("value", ""),
				"" === e.firstChild.getAttribute("value")
			}) || o("value", function (e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase())
					return e.defaultValue
			}),
			i(function (e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function (e, t, n) {
				var r;
				if (!n)
					return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}),
			t
		}
		(t);
		jQuery.find = we,
		jQuery.expr = we.selectors,
		jQuery.expr[":"] = jQuery.expr.pseudos,
		jQuery.uniqueSort = jQuery.unique = we.uniqueSort,
		jQuery.text = we.getText,
		jQuery.isXMLDoc = we.isXML,
		jQuery.contains = we.contains,
		jQuery.escapeSelector = we.escape;
		var Te = function (e, t, n) {
			for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
					if (i && jQuery(e).is(n))
						break;
					r.push(e)
				}
			return r
		},
		Ee = function (e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Se = jQuery.expr.match.needsContext,
		Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Re = /^.[^:#\[\.,]*$/;
		jQuery.filter = function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === r.nodeType ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
					return 1 === e.nodeType
				}))
		},
		jQuery.fn.extend({
			find: function (e) {
				var t,
				n,
				r = this.length,
				i = this;
				if ("string" != typeof e)
					return this.pushStack(jQuery(e).filter(function () {
							for (t = 0; t < r; t++)
								if (jQuery.contains(i[t], this))
									return !0
						}));
				for (n = this.pushStack([]), t = 0; t < r; t++)
					jQuery.find(e, i[t], n);
				return r > 1 ? jQuery.uniqueSort(n) : n
			},
			filter: function (e) {
				return this.pushStack(u(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(u(this, e || [], !0))
			},
			is: function (e) {
				return !!u(this, "string" == typeof e && Se.test(e) ? jQuery(e) : e || [], !1).length
			}
		});
		var _e,
		ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		Le = jQuery.fn.init = function (e, t, n) {
			var r,
			i;
			if (!e)
				return this;
			if (n = n || _e, "string" == typeof e) {
				if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !r || !r[1] && t)
					return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), Ce.test(r[1]) && jQuery.isPlainObject(t))
						for (r in t)
							jQuery.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = oe.getElementById(r[2]),
				i && (this[0] = i, this.length = 1),
				this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(jQuery) : jQuery.makeArray(e, this)
		};
		Le.prototype = jQuery.fn,
		_e = jQuery(oe);
		var Oe = /^(?:parents|prev(?:Until|All))/,
		Ne = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
		jQuery.fn.extend({
			has: function (e) {
				var t = jQuery(e, this),
				n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (jQuery.contains(this, t[e]))
							return !0
				})
			},
			closest: function (e, t) {
				var n,
				r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && jQuery(e);
				if (!Se.test(e))
					for (; r < i; r++)
						for (n = this[r]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
								o.push(n);
								break
							}
				return this.pushStack(o.length > 1 ? jQuery.uniqueSort(o) : o)
			},
			index: function (e) {
				return e ? "string" == typeof e ? ce.call(jQuery(e), this[0]) : ce.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}),
		jQuery.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return Te(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return Te(e, "parentNode", n)
			},
			next: function (e) {
				return l(e, "nextSibling")
			},
			prev: function (e) {
				return l(e, "previousSibling")
			},
			nextAll: function (e) {
				return Te(e, "nextSibling")
			},
			prevAll: function (e) {
				return Te(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return Te(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return Te(e, "previousSibling", n)
			},
			siblings: function (e) {
				return Ee((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return Ee(e.firstChild)
			},
			contents: function (e) {
				return s(e, "iframe") ? e.contentDocument : (s(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes))
			}
		}, function (e, t) {
			jQuery.fn[e] = function (n, r) {
				var i = jQuery.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n),
				r && "string" == typeof r && (i = jQuery.filter(r, i)),
				this.length > 1 && (Ne[e] || jQuery.uniqueSort(i), Oe.test(e) && i.reverse()),
				this.pushStack(i)
			}
		});
		var Me = /[^\x20\t\r\n\f]+/g;
		jQuery.Callbacks = function (e) {
			e = "string" == typeof e ? c(e) : jQuery.extend({}, e);
			var t,
			n,
			r,
			i,
			o = [],
			a = [],
			s = -1,
			u = function () {
				for (i = i || e.once, r = t = !0; a.length; s = -1)
					for (n = a.shift(); ++s < o.length; )
						o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
				e.memory || (n = !1),
				t = !1,
				i && (o = n ? [] : "")
			},
			l = {
				add: function () {
					return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
						jQuery.each(n, function (n, r) {
							jQuery.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== jQuery.type(r) && t(r)
						})
					}
						(arguments), n && !t && u()),
					this
				},
				remove: function () {
					return jQuery.each(arguments, function (e, t) {
						for (var n; (n = jQuery.inArray(t, o, n)) > -1; )
							o.splice(n, 1), n <= s && s--
					}),
					this
				},
				has: function (e) {
					return e ? jQuery.inArray(e, o) > -1 : o.length > 0
				},
				empty: function () {
					return o && (o = []),
					this
				},
				disable: function () {
					return i = a = [],
					o = n = "",
					this
				},
				disabled: function () {
					return !o
				},
				lock: function () {
					return i = a = [],
					n || t || (o = n = ""),
					this
				},
				locked: function () {
					return !!i
				},
				fireWith: function (e, n) {
					return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()),
					this
				},
				fire: function () {
					return l.fireWith(this, arguments),
					this
				},
				fired: function () {
					return !!r
				}
			};
			return l
		},
		jQuery.extend({
			Deferred: function (e) {
				var n = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				r = "pending",
				i = {
					state: function () {
						return r
					},
					always: function () {
						return o.done(arguments).fail(arguments),
						this
					},
					catch : function (e) {
						return i.then(null, e)
					},
				pipe: function () {
					var e = arguments;
					return jQuery.Deferred(function (t) {
						jQuery.each(n, function (n, r) {
							var i = jQuery.isFunction(e[r[4]]) && e[r[4]];
							o[r[1]](function () {
								var e = i && i.apply(this, arguments);
								e && jQuery.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				then: function (e, r, i) {
					function o(e, n, r, i) {
						return function () {
							var s = this,
							u = arguments,
							l = function () {
								var t,
								l;
								if (!(e < a)) {
									if (t = r.apply(s, u), t === n.promise())
										throw new TypeError("Thenable self-resolution");
										l = t && ("object" == typeof t || "function" == typeof t) && t.then,
										jQuery.isFunction(l) ? i ? l.call(t, o(a, n, p, i), o(a, n, d, i)) : (a++, l.call(t, o(a, n, p, i), o(a, n, d, i), o(a, n, p, n.notifyWith))) : (r !== p && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
									}
								},
								c = i ? l : function () {
									try {
										l()
									} catch (t) {
										jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(t, c.stackTrace),
										e + 1 >= a && (r !== d && (s = void 0, u = [t]), n.rejectWith(s, u))
									}
								};
								e ? c() : (jQuery.Deferred.getStackHook && (c.stackTrace = jQuery.Deferred.getStackHook()), t.setTimeout(c))
							}
						}
						var a = 0;
						return jQuery.Deferred(function (t) {
							n[0][3].add(o(0, t, jQuery.isFunction(i) ? i : p, t.notifyWith)),
							n[1][3].add(o(0, t, jQuery.isFunction(e) ? e : p)),
							n[2][3].add(o(0, t, jQuery.isFunction(r) ? r : d))
						}).promise()
					},
					promise: function (e) {
						return null != e ? jQuery.extend(e, i) : i
					}
				},
				o = {};
				return jQuery.each(n, function (e, t) {
					var a = t[2],
					s = t[5];
					i[t[1]] = a.add,
					s && a.add(function () {
						r = s
					}, n[3 - e][2].disable, n[0][2].lock),
					a.add(t[3].fire),
					o[t[0]] = function () {
						return o[t[0] + "With"](this === o ? void 0 : this, arguments),
						this
					},
					o[t[0] + "With"] = a.fireWith
				}),
				i.promise(o),
				e && e.call(o, o),
				o
			},
			when: function (e) {
				var t = arguments.length,
				n = t,
				r = Array(n),
				i = se.call(arguments),
				o = jQuery.Deferred(),
				a = function (e) {
					return function (n) {
						r[e] = this,
						i[e] = arguments.length > 1 ? se.call(arguments) : n,
						--t || o.resolveWith(r, i)
					}
				};
				if (t <= 1 && (f(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || jQuery.isFunction(i[n] && i[n].then)))
					return o.then();
				for (; n--; )
					f(i[n], a(n), o.reject);
				return o.promise()
			}
		});
		var Ie = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		jQuery.Deferred.exceptionHook = function (e, n) {
			t.console && t.console.warn && e && Ie.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
		},
		jQuery.readyException = function (e) {
			t.setTimeout(function () {
				throw e
			})
		};
		var De = jQuery.Deferred();
		jQuery.fn.ready = function (e) {
			return De.then(e).catch (function (e) {
				jQuery.readyException(e)
			}) , this
		},
		jQuery.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(e === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, e !== !0 && --jQuery.readyWait > 0 || De.resolveWith(oe, [jQuery]))
			}
		}),
		jQuery.ready.then = De.then,
		"complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? t.setTimeout(jQuery.ready) : (oe.addEventListener("DOMContentLoaded", h), t.addEventListener("load", h));
		var Be = function (e, t, n, r, i, o, a) {
			var s = 0,
			u = e.length,
			l = null == n;
			if ("object" === jQuery.type(n)) {
				i = !0;
				for (s in n)
					Be(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, jQuery.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
							return l.call(jQuery(e), n)
						})), t))
				for (; s < u; s++)
					t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		Pe = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
		g.uid = 1,
		g.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || (t = {}, Pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
								value: t,
								configurable: !0
							}))),
				t
			},
			set: function (e, t, n) {
				var r,
				i = this.cache(e);
				if ("string" == typeof t)
					i[jQuery.camelCase(t)] = n;
				else
					for (r in t)
						i[jQuery.camelCase(r)] = t[r];
				return i
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][jQuery.camelCase(t)]
			},
			access: function (e, t, n) {
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n,
				r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						Array.isArray(t) ? t = t.map(jQuery.camelCase) : (t = jQuery.camelCase(t), t = t in r ? [t] : t.match(Me) || []),
						n = t.length;
						for (; n--; )
							delete r[t[n]]
					}
					(void 0 === t || jQuery.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !jQuery.isEmptyObject(t)
			}
		};
		var Fe = new g,
		Ue = new g,
		He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		je = /[A-Z]/g;
		jQuery.extend({
			hasData: function (e) {
				return Ue.hasData(e) || Fe.hasData(e)
			},
			data: function (e, t, n) {
				return Ue.access(e, t, n)
			},
			removeData: function (e, t) {
				Ue.remove(e, t)
			},
			_data: function (e, t, n) {
				return Fe.access(e, t, n)
			},
			_removeData: function (e, t) {
				Fe.remove(e, t)
			}
		}),
		jQuery.fn.extend({
			data: function (e, t) {
				var n,
				r,
				i,
				o = this[0],
				a = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (i = Ue.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
						for (n = a.length; n--; )
							a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = jQuery.camelCase(r.slice(5)), y(o, r, i[r])));
						Fe.set(o, "hasDataAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function () {
					Ue.set(this, e)
				}) : Be(this, function (t) {
					var n;
					if (o && void 0 === t) {
						if (n = Ue.get(o, e), void 0 !== n)
							return n;
						if (n = y(o, e), void 0 !== n)
							return n
					} else
						this.each(function () {
							Ue.set(this, e, t)
						})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e) {
				return this.each(function () {
					Ue.remove(this, e)
				})
			}
		}),
		jQuery.extend({
			queue: function (e, t, n) {
				var r;
				if (e)
					return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = jQuery.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = jQuery._queueHooks(e, t),
				a = function () {
					jQuery.dequeue(e, t)
				};
				"inprogress" === i && (i = n.shift(), r--),
				i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
				!r && o && o.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return Fe.get(e, n) || Fe.access(e, n, {
					empty: jQuery.Callbacks("once memory").add(function () {
						Fe.remove(e, [t + "queue", n])
					})
				})
			}
		}),
		jQuery.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--),
				arguments.length < n ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = jQuery.queue(this, e, t);
					jQuery._queueHooks(this, e),
					"fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					jQuery.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n,
				r = 1,
				i = jQuery.Deferred(),
				o = this,
				a = this.length,
				s = function () {
					--r || i.resolveWith(o, [o])
				};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
					n = Fe.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(),
				i.promise(t)
			}
		});
		var Ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		qe = new RegExp("^(?:([+-])=|)(" + Ge + ")([a-z%]*)$", "i"),
		Xe = ["Top", "Right", "Bottom", "Left"],
		Ve = function (e, t) {
			return e = t || e,
			"none" === e.style.display || "" === e.style.display && jQuery.contains(e.ownerDocument, e) && "none" === jQuery.css(e, "display")
		},
		Ke = function (e, t, n, r) {
			var i,
			o,
			a = {};
			for (o in t)
				a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t)
				e.style[o] = a[o];
			return i
		},
		We = {};
		jQuery.fn.extend({
			show: function () {
				return A(this, !0)
			},
			hide: function () {
				return A(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					Ve(this) ? jQuery(this).show() : jQuery(this).hide()
				})
			}
		});
		var ze = /^(?:checkbox|radio)$/i,
		Je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Qe = /^$|\/(?:java|ecma)script/i,
		Ye = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
		Ye.optgroup = Ye.option,
		Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
		Ye.th = Ye.td;
		var Ze = /<|&#?\w+;/;
		!function () {
			var e = oe.createDocumentFragment(),
			t = e.appendChild(oe.createElement("div")),
			n = oe.createElement("input");
			n.setAttribute("type", "radio"),
			n.setAttribute("checked", "checked"),
			n.setAttribute("name", "t"),
			t.appendChild(n),
			me.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
			t.innerHTML = "<textarea>x</textarea>",
			me.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}
		();
		var $e = oe.documentElement,
		et = /^key/,
		tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		nt = /^([^.]*)(?:\.(.+)|)/;
		jQuery.event = {
			global: {},
			add: function (e, t, n, r, i) {
				var o,
				a,
				s,
				u,
				l,
				c,
				p,
				d,
				f,
				h,
				g,
				m = Fe.get(e);
				if (m)
					for (n.handler && (o = n, n = o.handler, i = o.selector), i && jQuery.find.matchesSelector($e, i), n.guid || (n.guid = jQuery.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
							return "undefined" != typeof jQuery && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(Me) || [""], l = t.length; l--; )
						s = nt.exec(t[l]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (p = jQuery.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = jQuery.event.special[f] || {}, c = jQuery.extend({
									type: f,
									origType: g,
									data: r,
									handler: n,
									guid: n.guid,
									selector: i,
									needsContext: i && jQuery.expr.match.needsContext.test(i),
									namespace: h.join(".")
								}, o), (d = u[f]) || (d = u[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), jQuery.event.global[f] = !0)
			},
			remove: function (e, t, n, r, i) {
				var o,
				a,
				s,
				u,
				l,
				c,
				p,
				d,
				f,
				h,
				g,
				m = Fe.hasData(e) && Fe.get(e);
				if (m && (u = m.events)) {
					for (t = (t || "").match(Me) || [""], l = t.length; l--; )
						if (s = nt.exec(t[l]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
							for (p = jQuery.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
								c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
							a && !d.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || jQuery.removeEvent(e, f, m.handle), delete u[f])
						} else
							for (f in u)
								jQuery.event.remove(e, f + t[l], n, r, !0);
					jQuery.isEmptyObject(u) && Fe.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				var t,
				n,
				r,
				i,
				o,
				a,
				s = jQuery.event.fix(e),
				u = new Array(arguments.length),
				l = (Fe.get(this, "events") || {})[s.type] || [],
				c = jQuery.event.special[s.type] || {};
				for (u[0] = s, t = 1; t < arguments.length; t++)
					u[t] = arguments[t];
				if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
					for (a = jQuery.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
						for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
							s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((jQuery.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
					return c.postDispatch && c.postDispatch.call(this, s),
					s.result
				}
			},
			handlers: function (e, t) {
				var n,
				r,
				i,
				o,
				a,
				s = [],
				u = t.delegateCount,
				l = e.target;
				if (u && l.nodeType && !("click" === e.type && e.button >= 1))
					for (; l !== this; l = l.parentNode || this)
						if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
							for (o = [], a = {}, n = 0; n < u; n++)
								r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? jQuery(i, this).index(l) > -1 : jQuery.find(i, this, null, [l]).length), a[i] && o.push(r);
							o.length && s.push({
								elem: l,
								handlers: o
							})
						}
				return l = this,
				u < t.length && s.push({
					elem: l,
					handlers: t.slice(u)
				}),
				s
			},
			addProp: function (e, t) {
				Object.defineProperty(jQuery.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: jQuery.isFunction(t) ? function () {
						if (this.originalEvent)
							return t(this.originalEvent)
					}
					 : function () {
						if (this.originalEvent)
							return this.originalEvent[e]
					},
					set: function (t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function (e) {
				return e[jQuery.expando] ? e : new jQuery.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== C() && this.focus)
							return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === C() && this.blur)
							return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && s(this, "input"))
							return this.click(), !1
					},
					_default: function (e) {
						return s(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		},
		jQuery.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		},
		jQuery.Event = function (e, t) {
			return this instanceof jQuery.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? E : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(e, t)
		},
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: S,
			isPropagationStopped: S,
			isImmediatePropagationStopped: S,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = E,
				e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = E,
				e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = E,
				e && !this.isSimulated && e.stopImmediatePropagation(),
				this.stopPropagation()
			}
		},
		jQuery.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (e) {
				var t = e.button;
				return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, jQuery.event.addProp),
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			jQuery.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n,
					r = this,
					i = e.relatedTarget,
					o = e.handleObj;
					return i && (i === r || jQuery.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
					n
				}
			}
		}),
		jQuery.fn.extend({
			on: function (e, t, n, r) {
				return R(this, e, t, n, r)
			},
			one: function (e, t, n, r) {
				return R(this, e, t, n, r, 1)
			},
			off: function (e, t, n) {
				var r,
				i;
				if (e && e.preventDefault && e.handleObj)
					return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e)
						this.off(i, t, e[i]);
					return this
				}
				return t !== !1 && "function" != typeof t || (n = t, t = void 0),
				n === !1 && (n = S),
				this.each(function () {
					jQuery.event.remove(this, e, n, t)
				})
			}
		});
		var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		it = /<script|<style|<link/i,
		ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
		at = /^true\/(.*)/,
		st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		jQuery.extend({
			htmlPrefilter: function (e) {
				return e.replace(rt, "<$1></$2>")
			},
			clone: function (e, t, n) {
				var r,
				i,
				o,
				a,
				s = e.cloneNode(!0),
				u = jQuery.contains(e.ownerDocument, e);
				if (!(me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || jQuery.isXMLDoc(e)))
					for (a = b(s), o = b(e), r = 0, i = o.length; r < i; r++)
						N(o[r], a[r]);
				if (t)
					if (n)
						for (o = o || b(e), a = a || b(s), r = 0, i = o.length; r < i; r++)
							O(o[r], a[r]);
					else
						O(e, s);
				return a = b(s, "script"),
				a.length > 0 && w(a, !u && b(e, "script")),
				s
			},
			cleanData: function (e) {
				for (var t, n, r, i = jQuery.event.special, o = 0; void 0 !== (n = e[o]); o++)
					if (Pe(n)) {
						if (t = n[Fe.expando]) {
							if (t.events)
								for (r in t.events)
									i[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
							n[Fe.expando] = void 0
						}
						n[Ue.expando] && (n[Ue.expando] = void 0)
					}
			}
		}),
		jQuery.fn.extend({
			detach: function (e) {
				return I(this, e, !0)
			},
			remove: function (e) {
				return I(this, e)
			},
			text: function (e) {
				return Be(this, function (e) {
					return void 0 === e ? jQuery.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return M(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = _(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function () {
				return M(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = _(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return M(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return M(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType && (jQuery.cleanData(b(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e,
				t = null == t ? e : t,
				this.map(function () {
					return jQuery.clone(this, e, t)
				})
			},
			html: function (e) {
				return Be(this, function (e) {
					var t = this[0] || {},
					n = 0,
					r = this.length;
					if (void 0 === e && 1 === t.nodeType)
						return t.innerHTML;
					if ("string" == typeof e && !it.test(e) && !Ye[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = jQuery.htmlPrefilter(e);
						try {
							for (; n < r; n++)
								t = this[n] || {},
							1 === t.nodeType && (jQuery.cleanData(b(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return M(this, arguments, function (t) {
					var n = this.parentNode;
					jQuery.inArray(this, e) < 0 && (jQuery.cleanData(b(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}),
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			jQuery.fn[e] = function (e) {
				for (var n, r = [], i = jQuery(e), o = i.length - 1, a = 0; a <= o; a++)
					n = a === o ? this : this.clone(!0), jQuery(i[a])[t](n), le.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var ut = /^margin/,
		lt = new RegExp("^(" + Ge + ")(?!px)[a-z%]+$", "i"),
		ct = function (e) {
			var n = e.ownerDocument.defaultView;
			return n && n.opener || (n = t),
			n.getComputedStyle(e)
		};
		!function () {
			function e() {
				if (s) {
					s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
					s.innerHTML = "",
					$e.appendChild(a);
					var e = t.getComputedStyle(s);
					n = "1%" !== e.top,
					o = "2px" === e.marginLeft,
					r = "4px" === e.width,
					s.style.marginRight = "50%",
					i = "4px" === e.marginRight,
					$e.removeChild(a),
					s = null
				}
			}
			var n,
			r,
			i,
			o,
			a = oe.createElement("div"),
			s = oe.createElement("div");
			s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), jQuery.extend(me, {
					pixelPosition: function () {
						return e(),
						n
					},
					boxSizingReliable: function () {
						return e(),
						r
					},
					pixelMarginRight: function () {
						return e(),
						i
					},
					reliableMarginLeft: function () {
						return e(),
						o
					}
				}))
		}
		();
		var pt = /^(none|table(?!-c[ea]).+)/,
		dt = /^--/,
		ft = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ht = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		gt = ["Webkit", "Moz", "ms"],
		mt = oe.createElement("div").style;
		jQuery.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = D(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: "cssFloat"
			},
			style: function (e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i,
					o,
					a,
					s = jQuery.camelCase(t),
					u = dt.test(t),
					l = e.style;
					return u || (t = F(s)),
					a = jQuery.cssHooks[t] || jQuery.cssHooks[s],
					void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = qe.exec(n)) && i[1] && (n = v(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (jQuery.cssNumber[s] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)), void 0)
				}
			},
			css: function (e, t, n, r) {
				var i,
				o,
				a,
				s = jQuery.camelCase(t),
				u = dt.test(t);
				return u || (t = F(s)),
				a = jQuery.cssHooks[t] || jQuery.cssHooks[s],
				a && "get" in a && (i = a.get(e, !0, n)),
				void 0 === i && (i = D(e, t, r)),
				"normal" === i && t in ht && (i = ht[t]),
				"" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
			}
		}),
		jQuery.each(["height", "width"], function (e, t) {
			jQuery.cssHooks[t] = {
				get: function (e, n, r) {
					if (n)
						return !pt.test(jQuery.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, r) : Ke(e, ft, function () {
							return j(e, t, r)
						})
				},
				set: function (e, n, r) {
					var i,
					o = r && ct(e),
					a = r && H(e, t, r, "border-box" === jQuery.css(e, "boxSizing", !1, o), o);
					return a && (i = qe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = jQuery.css(e, t)),
					U(e, n, a)
				}
			}
		}),
		jQuery.cssHooks.marginLeft = B(me.reliableMarginLeft, function (e, t) {
				if (t)
					return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
							marginLeft: 0
						}, function () {
							return e.getBoundingClientRect().left
						})) + "px"
			}),
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			jQuery.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
						i[e + Xe[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			},
			ut.test(e) || (jQuery.cssHooks[e + t].set = U)
		}),
		jQuery.fn.extend({
			css: function (e, t) {
				return Be(this, function (e, t, n) {
					var r,
					i,
					o = {},
					a = 0;
					if (Array.isArray(t)) {
						for (r = ct(e), i = t.length; a < i; a++)
							o[t[a]] = jQuery.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}),
		jQuery.Tween = G,
		G.prototype = {
			constructor: G,
			init: function (e, t, n, r, i, o) {
				this.elem = e,
				this.prop = n,
				this.easing = i || jQuery.easing._default,
				this.options = t,
				this.start = this.now = this.cur(),
				this.end = r,
				this.unit = o || (jQuery.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = G.propHooks[this.prop];
				return e && e.get ? e.get(this) : G.propHooks._default.get(this)
			},
			run: function (e) {
				var t,
				n = G.propHooks[this.prop];
				return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
				this.now = (this.end - this.start) * t + this.start,
				this.options.step && this.options.step.call(this.elem, this.now, this),
				n && n.set ? n.set(this) : G.propHooks._default.set(this),
				this
			}
		},
		G.prototype.init.prototype = G.prototype,
		G.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = jQuery.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function (e) {
					jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[jQuery.cssProps[e.prop]] && !jQuery.cssHooks[e.prop] ? e.elem[e.prop] = e.now : jQuery.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		},
		G.propHooks.scrollTop = G.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		},
		jQuery.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		},
		jQuery.fx = G.prototype.init,
		jQuery.fx.step = {};
		var yt,
		vt,
		xt = /^(?:toggle|show|hide)$/,
		At = /queueHooks$/;
		jQuery.Animation = jQuery.extend(J, {
				tweeners: {
					"*": [function (e, t) {
							var n = this.createTween(e, t);
							return v(n.elem, e, qe.exec(t), n),
							n
						}
					]
				},
				tweener: function (e, t) {
					jQuery.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Me);
					for (var n, r = 0, i = e.length; r < i; r++)
						n = e[r], J.tweeners[n] = J.tweeners[n] || [], J.tweeners[n].unshift(t)
				},
				prefilters: [W],
				prefilter: function (e, t) {
					t ? J.prefilters.unshift(e) : J.prefilters.push(e)
				}
			}),
		jQuery.speed = function (e, t, n) {
			var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
				complete: n || !n && t || jQuery.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !jQuery.isFunction(t) && t
			};
			return jQuery.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in jQuery.fx.speeds ? r.duration = jQuery.fx.speeds[r.duration] : r.duration = jQuery.fx.speeds._default),
			null != r.queue && r.queue !== !0 || (r.queue = "fx"),
			r.old = r.complete,
			r.complete = function () {
				jQuery.isFunction(r.old) && r.old.call(this),
				r.queue && jQuery.dequeue(this, r.queue)
			},
			r
		},
		jQuery.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(Ve).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function (e, t, n, r) {
				var i = jQuery.isEmptyObject(e),
				o = jQuery.speed(t, n, r),
				a = function () {
					var t = J(this, jQuery.extend({}, e), o);
					(i || Fe.get(this, "finish")) && t.stop(!0)
				};
				return a.finish = a,
				i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function (e, t, n) {
				var r = function (e) {
					var t = e.stop;
					delete e.stop,
					t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0),
				t && e !== !1 && this.queue(e || "fx", []),
				this.each(function () {
					var t = !0,
					i = null != e && e + "queueHooks",
					o = jQuery.timers,
					a = Fe.get(this);
					if (i)
						a[i] && a[i].stop && r(a[i]);
					else
						for (i in a)
							a[i] && a[i].stop && At.test(i) && r(a[i]);
					for (i = o.length; i--; )
						o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					!t && n || jQuery.dequeue(this, e)
				})
			},
			finish: function (e) {
				return e !== !1 && (e = e || "fx"),
				this.each(function () {
					var t,
					n = Fe.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = jQuery.timers,
					a = r ? r.length : 0;
					for (n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
						o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; t < a; t++)
						r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}),
		jQuery.each(["toggle", "show", "hide"], function (e, t) {
			var n = jQuery.fn[t];
			jQuery.fn[t] = function (e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i)
			}
		}),
		jQuery.each({
			slideDown: V("show"),
			slideUp: V("hide"),
			slideToggle: V("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			jQuery.fn[e] = function (e, n, r) {
				return this.animate(t, e, n, r)
			}
		}),
		jQuery.timers = [],
		jQuery.fx.tick = function () {
			var e,
			t = 0,
			n = jQuery.timers;
			for (yt = jQuery.now(); t < n.length; t++)
				e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || jQuery.fx.stop(),
			yt = void 0
		},
		jQuery.fx.timer = function (e) {
			jQuery.timers.push(e),
			jQuery.fx.start()
		},
		jQuery.fx.interval = 13,
		jQuery.fx.start = function () {
			vt || (vt = !0, q())
		},
		jQuery.fx.stop = function () {
			vt = null
		},
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		},
		jQuery.fn.delay = function (e, n) {
			return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e,
			n = n || "fx",
			this.queue(n, function (n, r) {
				var i = t.setTimeout(n, e);
				r.stop = function () {
					t.clearTimeout(i)
				}
			})
		},
		function () {
			var e = oe.createElement("input"),
			t = oe.createElement("select"),
			n = t.appendChild(oe.createElement("option"));
			e.type = "checkbox",
			me.checkOn = "" !== e.value,
			me.optSelected = n.selected,
			e = oe.createElement("input"),
			e.value = "t",
			e.type = "radio",
			me.radioValue = "t" === e.value
		}
		();
		var bt,
		wt = jQuery.expr.attrHandle;
		jQuery.fn.extend({
			attr: function (e, t) {
				return Be(this, jQuery.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					jQuery.removeAttr(this, e)
				})
			}
		}),
		jQuery.extend({
			attr: function (e, t, n) {
				var r,
				i,
				o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return "undefined" == typeof e.getAttribute ? jQuery.prop(e, t, n) : (1 === o && jQuery.isXMLDoc(e) || (i = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void jQuery.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = jQuery.find.attr(e, t), null == r ? void 0 : r))
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!me.radioValue && "radio" === t && s(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t),
							n && (e.value = n),
							t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n,
				r = 0,
				i = t && t.match(Me);
				if (i && 1 === e.nodeType)
					for (; n = i[r++]; )
						e.removeAttribute(n)
			}
		}),
		bt = {
			set: function (e, t, n) {
				return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n),
				n
			}
		},
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = wt[t] || jQuery.find.attr;
			wt[t] = function (e, t, r) {
				var i,
				o,
				a = t.toLowerCase();
				return r || (o = wt[a], wt[a] = i, i = null != n(e, t, r) ? a : null, wt[a] = o),
				i
			}
		});
		var Tt = /^(?:input|select|textarea|button)$/i,
		Et = /^(?:a|area)$/i;
		jQuery.fn.extend({
			prop: function (e, t) {
				return Be(this, jQuery.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[jQuery.propFix[e] || e]
				})
			}
		}),
		jQuery.extend({
			prop: function (e, t, n) {
				var r,
				i,
				o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return 1 === o && jQuery.isXMLDoc(e) || (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = jQuery.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for : "htmlFor", class: "className"
		}
	}),
	me.optSelected || (jQuery.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex,
				null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}),
	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this
	}),
	jQuery.fn.extend({
		addClass: function (e) {
			var t,
			n,
			r,
			i,
			o,
			a,
			s,
			u = 0;
			if (jQuery.isFunction(e))
				return this.each(function (t) {
					jQuery(this).addClass(e.call(this, t, Y(this)))
				});
				if ("string" == typeof e && e)
					for (t = e.match(Me) || []; n = this[u++]; )
						if (i = Y(n), r = 1 === n.nodeType && " " + Q(i) + " ") {
							for (a = 0; o = t[a++]; )
								r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							s = Q(r),
							i !== s && n.setAttribute("class", s)
						}
				return this
			},
			removeClass: function (e) {
				var t,
				n,
				r,
				i,
				o,
				a,
				s,
				u = 0;
				if (jQuery.isFunction(e))
					return this.each(function (t) {
						jQuery(this).removeClass(e.call(this, t, Y(this)))
					});
				if (!arguments.length)
					return this.attr("class", "");
				if ("string" == typeof e && e)
					for (t = e.match(Me) || []; n = this[u++]; )
						if (i = Y(n), r = 1 === n.nodeType && " " + Q(i) + " ") {
							for (a = 0; o = t[a++]; )
								for (; r.indexOf(" " + o + " ") > -1; )
									r = r.replace(" " + o + " ", " ");
							s = Q(r),
							i !== s && n.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function (n) {
					jQuery(this).toggleClass(e.call(this, n, Y(this), t), t)
				}) : this.each(function () {
					var t,
					r,
					i,
					o;
					if ("string" === n)
						for (r = 0, i = jQuery(this), o = e.match(Me) || []; t = o[r++]; )
							i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
					else
						void 0 !== e && "boolean" !== n || (t = Y(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Fe.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t,
				n,
				r = 0;
				for (t = " " + e + " "; n = this[r++]; )
					if (1 === n.nodeType && (" " + Q(Y(n)) + " ").indexOf(t) > -1)
						return !0;
				return !1
			}
		});
		var St = /\r/g;
		jQuery.fn.extend({
			val: function (e) {
				var t,
				n,
				r,
				i = this[0]; {
					if (arguments.length)
						return r = jQuery.isFunction(e), this.each(function (n) {
							var i;
							1 === this.nodeType && (i = r ? e.call(this, n, jQuery(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = jQuery.map(i, function (e) {
												return null == e ? "" : e + ""
											})), t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
						});
					if (i)
						return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
				}
			}
		}),
		jQuery.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = jQuery.find.attr(e, "value");
						return null != t ? t : Q(jQuery.text(e))
					}
				},
				select: {
					get: function (e) {
						var t,
						n,
						r,
						i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						u = a ? null : [],
						l = a ? o + 1 : i.length;
						for (r = o < 0 ? l : a ? o : 0; r < l; r++)
							if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !s(n.parentNode, "optgroup"))) {
								if (t = jQuery(n).val(), a)
									return t;
								u.push(t)
							}
						return u
					},
					set: function (e, t) {
						for (var n, r, i = e.options, o = jQuery.makeArray(t), a = i.length; a--; )
							r = i[a], (r.selected = jQuery.inArray(jQuery.valHooks.option.get(r), o) > -1) && (n = !0);
						return n || (e.selectedIndex = -1),
						o
					}
				}
			}
		}),
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t))
						return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1
				}
			},
			me.checkOn || (jQuery.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var Ct = /^(?:focusinfocus|focusoutblur)$/;
		jQuery.extend(jQuery.event, {
			trigger: function (e, n, r, i) {
				var o,
				a,
				s,
				u,
				l,
				c,
				p,
				d = [r || oe],
				f = fe.call(e, "type") ? e.type : e,
				h = fe.call(e, "namespace") ? e.namespace.split(".") : [];
				if (a = s = r = r || oe, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(f + jQuery.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, e = e[jQuery.expando] ? e : new jQuery.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : jQuery.makeArray(n, [e]), p = jQuery.event.special[f] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
					if (!i && !p.noBubble && !jQuery.isWindow(r)) {
						for (u = p.delegateType || f, Ct.test(u + f) || (a = a.parentNode); a; a = a.parentNode)
							d.push(a), s = a;
						s === (r.ownerDocument || oe) && d.push(s.defaultView || s.parentWindow || t)
					}
					for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
						e.type = o > 1 ? u : p.bindType || f, c = (Fe.get(a, "events") || {})[e.type] && Fe.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Pe(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
					return e.type = f,
					i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Pe(r) || l && jQuery.isFunction(r[f]) && !jQuery.isWindow(r) && (s = r[l], s && (r[l] = null), jQuery.event.triggered = f, r[f](), jQuery.event.triggered = void 0, s && (r[l] = s)),
					e.result
				}
			},
			simulate: function (e, t, n) {
				var r = jQuery.extend(new jQuery.Event, n, {
						type: e,
						isSimulated: !0
					});
				jQuery.event.trigger(r, null, t)
			}
		}),
		jQuery.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					jQuery.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n)
					return jQuery.event.trigger(e, t, n, !0)
			}
		}),
		jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
			jQuery.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}),
		jQuery.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}),
		me.focusin = "onfocusin" in t,
		me.focusin || jQuery.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				jQuery.event.simulate(t, e.target, jQuery.event.fix(e))
			};
			jQuery.event.special[t] = {
				setup: function () {
					var r = this.ownerDocument || this,
					i = Fe.access(r, t);
					i || r.addEventListener(e, n, !0),
					Fe.access(r, t, (i || 0) + 1)
				},
				teardown: function () {
					var r = this.ownerDocument || this,
					i = Fe.access(r, t) - 1;
					i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
				}
			}
		});
		var Rt = t.location,
		_t = jQuery.now(),
		kt = /\?/;
		jQuery.parseXML = function (e) {
			var n;
			if (!e || "string" != typeof e)
				return null;
			try {
				n = (new t.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + e),
			n
		};
		var Lt = /\[\]$/,
		Ot = /\r?\n/g,
		Nt = /^(?:submit|button|image|reset|file)$/i,
		Mt = /^(?:input|select|textarea|keygen)/i;
		jQuery.param = function (e, t) {
			var n,
			r = [],
			i = function (e, t) {
				var n = jQuery.isFunction(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
			if (Array.isArray(e) || e.jquery && !jQuery.isPlainObject(e))
				jQuery.each(e, function () {
					i(this.name, this.value)
				});
			else
				for (n in e)
					Z(n, e[n], t, i);
			return r.join("&")
		},
		jQuery.fn.extend({
			serialize: function () {
				return jQuery.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = jQuery.prop(this, "elements");
					return e ? jQuery.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !jQuery(this).is(":disabled") && Mt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ze.test(e))
				}).map(function (e, t) {
					var n = jQuery(this).val();
					return null == n ? null : Array.isArray(n) ? jQuery.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Ot, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Ot, "\r\n")
					}
				}).get()
			}
		});
		var It = /%20/g,
		Dt = /#.*$/,
		Bt = /([?&])_=[^&]*/,
		Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ut = /^(?:GET|HEAD)$/,
		Ht = /^\/\//,
		jt = {},
		Gt = {},
		qt = "*/".concat("*"),
		Xt = oe.createElement("a");
		Xt.href = Rt.href,
		jQuery.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Rt.href,
				type: "GET",
				isLocal: Ft.test(Rt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": qt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": jQuery.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? te(te(e, jQuery.ajaxSettings), t) : te(jQuery.ajaxSettings, e)
			},
			ajaxPrefilter: $(jt),
			ajaxTransport: $(Gt),
			ajax: function (e, n) {
				function r(e, n, r, s) {
					var l,
					d,
					f,
					A,
					b,
					w = n;
					c || (c = !0, u && t.clearTimeout(u), i = void 0, a = s || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, r && (A = ne(h, T, r)), A = re(h, A, T, l), l ? (h.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (jQuery.lastModified[o] = b), b = T.getResponseHeader("etag"), b && (jQuery.etag[o] = b)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = A.state, d = A.data, f = A.error, l = !f)) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || w) + "", l ? y.resolveWith(g, [d, w, T]) : y.rejectWith(g, [T, w, f]), T.statusCode(x), x = void 0, p && m.trigger(l ? "ajaxSuccess" : "ajaxError", [T, h, l ? d : f]), v.fireWith(g, [T, w]), p && (m.trigger("ajaxComplete", [T, h]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (n = e, e = void 0),
				n = n || {};
				var i,
				o,
				a,
				s,
				u,
				l,
				c,
				p,
				d,
				f,
				h = jQuery.ajaxSetup({}, n),
				g = h.context || h,
				m = h.context && (g.nodeType || g.jquery) ? jQuery(g) : jQuery.event,
				y = jQuery.Deferred(),
				v = jQuery.Callbacks("once memory"),
				x = h.statusCode || {},
				A = {},
				b = {},
				w = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (c) {
							if (!s)
								for (s = {}; t = Pt.exec(a); )
									s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return c ? a : null
					},
					setRequestHeader: function (e, t) {
						return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, A[e] = t),
						this
					},
					overrideMimeType: function (e) {
						return null == c && (h.mimeType = e),
						this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (c)
								T.always(e[T.status]);
							else
								for (t in e)
									x[t] = [x[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || w;
						return i && i.abort(t),
						r(0, t),
						this
					}
				};
				if (y.promise(T), h.url = ((e || h.url || Rt.href) + "").replace(Ht, Rt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Me) || [""], null == h.crossDomain) {
					l = oe.createElement("a");
					try {
						l.href = h.url,
						l.href = l.href,
						h.crossDomain = Xt.protocol + "//" + Xt.host != l.protocol + "//" + l.host
					} catch (e) {
						h.crossDomain = !0
					}
				}
				if (h.data && h.processData && "string" != typeof h.data && (h.data = jQuery.param(h.data, h.traditional)), ee(jt, h, n, T), c)
					return T;
				p = jQuery.event && h.global,
				p && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"),
				h.type = h.type.toUpperCase(),
				h.hasContent = !Ut.test(h.type),
				o = h.url.replace(Dt, ""),
				h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+")) : (f = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Bt, "$1"), f = (kt.test(o) ? "&" : "?") + "_=" + _t++ + f), h.url = o + f),
				h.ifModified && (jQuery.lastModified[o] && T.setRequestHeader("If-Modified-Since", jQuery.lastModified[o]), jQuery.etag[o] && T.setRequestHeader("If-None-Match", jQuery.etag[o])),
				(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType),
				T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
				for (d in h.headers)
					T.setRequestHeader(d, h.headers[d]);
				if (h.beforeSend && (h.beforeSend.call(g, T, h) === !1 || c))
					return T.abort();
				if (w = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), i = ee(Gt, h, n, T)) {
					if (T.readyState = 1,
						p && m.trigger("ajaxSend", [T, h]), c)
						return T;
					h.async && h.timeout > 0 && (u = t.setTimeout(function () {
								T.abort("timeout")
							}, h.timeout));
					try {
						c = !1,
						i.send(A, r)
					} catch (e) {
						if (c)
							throw e;
						r(-1, e)
					}
				} else
					r(-1, "No Transport");
				return T
			},
			getJSON: function (e, t, n) {
				return jQuery.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return jQuery.get(e, void 0, t, "script")
			}
		}),
		jQuery.each(["get", "post"], function (e, t) {
			jQuery[t] = function (e, n, r, i) {
				return jQuery.isFunction(n) && (i = i || r, r = n, n = void 0),
				jQuery.ajax(jQuery.extend({
						url: e,
						type: t,
						dataType: i,
						data: n,
						success: r
					}, jQuery.isPlainObject(e) && e))
			}
		}),
		jQuery._evalUrl = function (e) {
			return jQuery.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		},
		jQuery.fn.extend({
			wrapAll: function (e) {
				var t;
				return this[0] && (jQuery.isFunction(e) && (e = e.call(this[0])), t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
						for (var e = this; e.firstElementChild; )
							e = e.firstElementChild;
						return e
					}).append(this)),
				this
			},
			wrapInner: function (e) {
				return jQuery.isFunction(e) ? this.each(function (t) {
					jQuery(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = jQuery(this),
					n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = jQuery.isFunction(e);
				return this.each(function (n) {
					jQuery(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function (e) {
				return this.parent(e).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes)
				}),
				this
			}
		}),
		jQuery.expr.pseudos.hidden = function (e) {
			return !jQuery.expr.pseudos.visible(e)
		},
		jQuery.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		},
		jQuery.ajaxSettings.xhr = function () {
			try {
				return new t.XMLHttpRequest
			} catch (e) {}
		};
		var Vt = {
			0: 200,
			1223: 204
		},
		Kt = jQuery.ajaxSettings.xhr();
		me.cors = !!Kt && "withCredentials" in Kt,
		me.ajax = Kt = !!Kt,
		jQuery.ajaxTransport(function (e) {
			var n,
			r;
			if (me.cors || Kt && !e.crossDomain)
				return {
					send: function (i, o) {
						var a,
						s = e.xhr();
						if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for (a in e.xhrFields)
								s[a] = e.xhrFields[a];
						e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
						e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
						for (a in i)
							s.setRequestHeader(a, i[a]);
						n = function (e) {
							return function () {
								n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
										binary: s.response
									}
										 : {
										text: s.responseText
									}, s.getAllResponseHeaders()))
							}
						},
						s.onload = n(),
						r = s.onerror = n("error"),
						void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
							4 === s.readyState && t.setTimeout(function () {
								n && r()
							})
						},
						n = n("abort");
						try {
							s.send(e.hasContent && e.data || null)
						} catch (e) {
							if (n)
								throw e
						}
					},
					abort: function () {
						n && n()
					}
				}
		}),
		jQuery.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}),
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return jQuery.globalEval(e),
					e
				}
			}
		}),
		jQuery.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1),
			e.crossDomain && (e.type = "GET")
		}),
		jQuery.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t,
				n;
				return {
					send: function (r, i) {
						t = jQuery("<script>").prop({
								charset: e.scriptCharset,
								src: e.url
							}).on("load error", n = function (e) {
								t.remove(),
								n = null,
								e && i("error" === e.type ? 404 : 200, e.type)
							}),
						oe.head.appendChild(t[0])
					},
					abort: function () {
						n && n()
					}
				}
			}
		});
		var Wt = [],
		zt = /(=)\?(?=&|$)|\?\?/;
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Wt.pop() || jQuery.expando + "_" + _t++;
				return this[e] = !0,
				e
			}
		}),
		jQuery.ajaxPrefilter("json jsonp", function (e, n, r) {
			var i,
			o,
			a,
			s = e.jsonp !== !1 && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
			if (s || "jsonp" === e.dataTypes[0])
				return i = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(zt, "$1" + i) : e.jsonp !== !1 && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
					return a || jQuery.error(i + " was not called"),
					a[0]
				},
			e.dataTypes[0] = "json",
			o = t[i],
			t[i] = function () {
				a = arguments
			},
			r.always(function () {
				void 0 === o ? jQuery(t).removeProp(i) : t[i] = o,
				e[i] && (e.jsonpCallback = n.jsonpCallback, Wt.push(i)),
				a && jQuery.isFunction(o) && o(a[0]),
				a = o = void 0
			}),
			"script"
		}),
		me.createHTMLDocument = function () {
			var e = oe.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>",
			2 === e.childNodes.length
		}
		(),
		jQuery.parseHTML = function (e, t, n) {
			if ("string" != typeof e)
				return [];
			"boolean" == typeof t && (n = t, t = !1);
			var r,
			i,
			o;
			return t || (me.createHTMLDocument ? (t = oe.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = oe.location.href, t.head.appendChild(r)) : t = oe),
			i = Ce.exec(e),
			o = !n && [],
			i ? [t.createElement(i[1])] : (i = T([e], t, o), o && o.length && jQuery(o).remove(), jQuery.merge([], i.childNodes))
		},
		jQuery.fn.load = function (e, t, n) {
			var r,
			i,
			o,
			a = this,
			s = e.indexOf(" ");
			return s > -1 && (r = Q(e.slice(s)), e = e.slice(0, s)),
			jQuery.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
			a.length > 0 && jQuery.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				o = arguments,
				a.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
			}).always(n && function (e, t) {
				a.each(function () {
					n.apply(this, o || [e.responseText, t, e])
				})
			}),
			this
		},
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			jQuery.fn[t] = function (e) {
				return this.on(t, e)
			}
		}),
		jQuery.expr.pseudos.animated = function (e) {
			return jQuery.grep(jQuery.timers, function (t) {
				return e === t.elem
			}).length
		},
		jQuery.offset = {
			setOffset: function (e, t, n) {
				var r,
				i,
				o,
				a,
				s,
				u,
				l,
				c = jQuery.css(e, "position"),
				p = jQuery(e),
				d = {};
				"static" === c && (e.style.position = "relative"),
				s = p.offset(),
				o = jQuery.css(e, "top"),
				u = jQuery.css(e, "left"),
				l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
				l ? (r = p.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
				jQuery.isFunction(t) && (t = t.call(e, n, jQuery.extend({}, s))),
				null != t.top && (d.top = t.top - s.top + a),
				null != t.left && (d.left = t.left - s.left + i),
				"using" in t ? t.using.call(e, d) : p.css(d)
			}
		},
		jQuery.fn.extend({
			offset: function (e) {
				if (arguments.length)
					return void 0 === e ? this : this.each(function (t) {
						jQuery.offset.setOffset(this, e, t)
					});
				var t,
				n,
				r,
				i,
				o = this[0];
				if (o)
					return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
						top: r.top + i.pageYOffset - n.clientTop,
						left: r.left + i.pageXOffset - n.clientLeft
					}) : {
						top: 0,
						left: 0
					}
			},
			position: function () {
				if (this[0]) {
					var e,
					t,
					n = this[0],
					r = {
						top: 0,
						left: 0
					};
					return "fixed" === jQuery.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), s(e[0], "html") || (r = e.offset()), r = {
								top: r.top + jQuery.css(e[0], "borderTopWidth", !0),
								left: r.left + jQuery.css(e[0], "borderLeftWidth", !0)
							}), {
						top: t.top - r.top - jQuery.css(n, "marginTop", !0),
						left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position"); )
						e = e.offsetParent;
					return e || $e
				})
			}
		}),
		jQuery.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = "pageYOffset" === t;
			jQuery.fn[e] = function (r) {
				return Be(this, function (e, r, i) {
					var o;
					return jQuery.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
					void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
				}, e, r, arguments.length)
			}
		}),
		jQuery.each(["top", "left"], function (e, t) {
			jQuery.cssHooks[t] = B(me.pixelPosition, function (e, n) {
					if (n)
						return n = D(e, t), lt.test(n) ? jQuery(e).position()[t] + "px" : n
				})
		}),
		jQuery.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			jQuery.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, r) {
				jQuery.fn[r] = function (i, o) {
					var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (i === !0 || o === !0 ? "margin" : "border");
					return Be(this, function (t, n, i) {
						var o;
						return jQuery.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? jQuery.css(t, n, s) : jQuery.style(t, n, i, s)
					}, t, a ? i : void 0, a)
				}
			})
		}),
		jQuery.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}),
		jQuery.holdReady = function (e) {
			e ? jQuery.readyWait++ : jQuery.ready(!0)
		},
		jQuery.isArray = Array.isArray,
		jQuery.parseJSON = JSON.parse,
		jQuery.nodeName = s,
		n = [],
		r = function () {
			return jQuery
		}
		.apply(exports, n),
		!(void 0 !== r && (e.exports = r));
		var Jt = t.jQuery,
		Qt = t.$;
		return jQuery.noConflict = function (e) {
			return t.$ === jQuery && (t.$ = Qt),
			e && t.jQuery === jQuery && (t.jQuery = Jt),
			jQuery
		},
		i || (t.jQuery = t.$ = jQuery),
		jQuery
	})
}
]);

  });
});