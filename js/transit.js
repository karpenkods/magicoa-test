var getParameterByName = function (e) {
  e = e.replace(/[\[\]]/g, "\\$&");
  var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(
    window.location.href
  );
  return t && t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "";
};
$(document).ready(function () {
  var e,
    t,
    n,
    a,
    o,
    r,
    c,
    i,
    d,
    s,
    p = getParameterByName("tm_ym_id"),
    m = getParameterByName("tm_tm_id"),
    l = getParameterByName("tm_vk_id"),
    g = getParameterByName("tm_ga_id"),
    u = getParameterByName("tm_fb_id"),
    f = getParameterByName("tm_tt_id");
  f.length &&
    (console.log("tm_tt_id", f),
    (e = f),
    (function (t, n, a) {
      t.TiktokAnalyticsObject = a;
      var o = (t[a] = t[a] || []);
      (o.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
      ]),
        (o.setAndDefer = function (e, t) {
          e[t] = function () {
            e.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        });
      for (var r = 0; r < o.methods.length; r++) o.setAndDefer(o, o.methods[r]);
      (o.instance = function (e) {
        for (var t = o._i[e] || [], n = 0; n < o.methods.length; n++)
          o.setAndDefer(t, o.methods[n]);
        return t;
      }),
        (o.load = function (e, t) {
          var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
          (o._i = o._i || {}),
            (o._i[e] = []),
            (o._i[e]._u = n),
            (o._t = o._t || {}),
            (o._t[e] = +new Date()),
            (o._o = o._o || {}),
            (o._o[e] = t || {});
          var r = document.createElement("script");
          (r.type = "text/javascript"),
            (r.async = !0),
            (r.src = n + "?sdkid=" + e + "&lib=" + a);
          var c = document.getElementsByTagName("script")[0];
          c.parentNode.insertBefore(r, c);
        }),
        o.load(e),
        o.page();
    })(window, document, "ttq")),
    l.length &&
      (console.log("tm_vk_id", l),
      (function (e) {
        var t = document.head,
          n = document.createElement("script");
        n.append(
          "!function(){var\nt=document.createElement('script');t.type='text/javascript',t.async=!0,t.\nsrc='https://vk.com/js/api/openapi.js?161',t.onload=function()\n{VK.Retargeting.Init('" +
            e +
            "'),VK.Retargeting.Hit()},document.head.appendChild(t)}();\n"
        );
        var a = document.createElement("noscript");
        a.append(
          "<img src='https://vk.com/rtrg?p=" +
            e +
            "' style='position: fixed; left:-999px;' alt=''>"
        ),
          t.prepend(n),
          t.prepend(a);
      })(l)),
    g.length &&
      (console.log("tm_ga_id", g),
      (function (e) {
        var t = document.head,
          n = document.createElement("script");
        n.src = "https://www.googletagmanager.com/gtag/js?id='" + e + "'";
        var a = document.createElement("script");
        a.append(
          "window.dataLayer = window.dataLayer || []; \n   function gtag(){dataLayer.push(arguments);} \n   gtag('js', new Date()); \n   gtag('config', '" +
            e +
            "'); \n"
        ),
          t.prepend(a),
          t.prepend(n);
      })(g)),
    m.length &&
      (console.log("tm_tm_id", m),
      (function (e, t) {
        (window._tmr || (window._tmr = [])).push({
          id: t,
          type: "pageView",
          start: new Date().getTime(),
        }),
          (function (e, t, n) {
            if (!e.getElementById(n)) {
              var a = e.createElement("script");
              (a.type = "text/javascript"),
                (a.async = !0),
                (a.id = n),
                (a.src =
                  ("https:" == e.location.protocol ? "https:" : "http:") +
                  "//top-fwz1.mail.ru/js/code.js");
              var o = function () {
                var t = e.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(a, t);
              };
              "[object Opera]" == t.opera
                ? e.addEventListener("DOMContentLoaded", o, !1)
                : o();
            }
          })(document, window, "topmailru-code");
        var n = e.createElement("img"),
          a = e.createElement("div"),
          o = e.createElement("noscript");
        (n.src = "//top-fwz1.mail.ru/counter?id=" + t + ";js=na"),
          (n.style = "border:0;"),
          (n.height = 1),
          (n.width = 1),
          (a.style = "position:absolute;left:-10000px;"),
          a.appendChild(n),
          o.appendChild(a),
          e.body.appendChild(o);
      })(document, m)),
    u.length &&
      (console.log("tm_fb_id", u),
      (t = u),
      (n = "PageView"),
      (a = window),
      (o = document),
      (r = "script"),
      a.fbq ||
        ((c = a.fbq =
          function () {
            c.callMethod
              ? c.callMethod.apply(c, arguments)
              : c.queue.push(arguments);
          }),
        a._fbq || (a._fbq = c),
        (c.push = c),
        (c.loaded = !0),
        (c.version = "2.0"),
        (c.queue = []),
        ((i = o.createElement(r)).async = !0),
        (i.src = "https://connect.facebook.net/en_US/fbevents.js"),
        (d = o.getElementsByTagName(r)[0]).parentNode.insertBefore(i, d)),
      fbq("init", t),
      fbq("track", n)),
    p.length &&
      (console.log("tm_ym_id", p),
      (s = p),
      (function (e, t, n, a) {
        (t[n] = t[n] || []).push(function () {
          try {
            t.yacounter[s] = new Ya.Metrika({
              id: a,
              clickmap: !0,
              trackLinks: !0,
              accurateTrackBounce: !0,
              webvisor: !0,
            });
          } catch (e) {}
        });
        var o = e.getElementsByTagName("script")[0],
          r = e.createElement("script"),
          c = function () {
            o.parentNode.insertBefore(r, o);
          };
        (r.type = "text/javascript"),
          (r.async = !0),
          (r.src = "https://mc.yandex.ru/metrika/watch.js"),
          "[object Opera]" == t.opera
            ? e.addEventListener("DOMContentLoaded", c, !1)
            : c();
      })(document, window, "yandex_metrika_callbacks", s));
});
