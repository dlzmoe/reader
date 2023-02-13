(function () {

  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {

    handleFontSize();

  } else {

    if (document.addEventListener) {

      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);

    } else if (document.attachEvent) {

      document.attachEvent("WeixinJSBridgeReady", handleFontSize);

      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);

    }

  }

  function handleFontSize() {

    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });

    WeixinJSBridge.on('menu:setfont', function () {

      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });

    });

  }

})();
