nova_xhtml = (document.doctype ? (document.doctype.publicId.search(/xhtml/i) != -1) : false);
nova_cl_tag = nova_xhtml ? ' />' : '>';
nova_ua = navigator.userAgent;
nova_ver = (nova_ua.indexOf('MSIE') > 0) ? parseFloat(nova_ua.substr(nova_ua.indexOf('MSIE') + 5)) : parseFloat(navigator.appVersion);
nova_win = (navigator.platform.indexOf('Win') > -1);
var nova_ie = (document.defaultCharset && document.getElementById && !window.home);
if (typeof (nova_df) !== 'function') {
    nova_df = function (v) {
        if (navigator.plugins && navigator.plugins.length) {
            var plugin = navigator.plugins["Shockwave Flash"];
            if (plugin == undefined) {
                return false;
            }
            var ver = navigator.plugins["Shockwave Flash"].description.split(' ')[2];
            return (Number(ver) >= Number(v))
        } else if (nova_ie && typeof (ActiveXObject) == "function") {
            try {
                var flash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + v);
                return true;
            } catch (e) {
                return false;
            }
        }
        return true;
    }
}
nova_flsh = nova_df(nova_fv);
if (nova_flsh) {
    var nova_x, nova_y;
    if (self.innerHeight) {
        nova_x = self.innerWidth;
        nova_y = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        nova_x = document.documentElement.clientWidth;
        nova_y = document.documentElement.clientHeight;
    } else if (document.body) {
        nova_x = document.body.clientWidth;
        nova_y = document.body.clientHeight;
    }
    if (nova_top == 0) {
        f_top = 0;
    } else if (nova_top == 1) {
        f_top = (nova_y - nova_fbh) / 2;
    } else if (nova_top == 2) {
        f_top = (nova_y - nova_fbh);
    } else if (nova_top <= 0) {
        f_top = ((nova_y - nova_fbh) + nova_top);
    } else {
        f_top = nova_top;
    }
    if (nova_left == 0) {
        f_left = 0;
    } else if (nova_left == 1) {
        f_left = (nova_x - nova_fbw) / 2;
    } else if (nova_left == 2) {
        f_left = (nova_x - nova_fbw);
    } else if (nova_left <= 0) {
        f_left = ((nova_x - nova_fbw) + nova_left);
    } else {
        f_left = nova_left;
    }
    nova_wmode = (nova_fbt != 0) ? 'transparent' : 'window';
    nova_fl0 = '<object id="nova_floaterAd" name="nova_floaterAd" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + nova_fv + ',0,0,0" width="' + nova_fbw + '" height="' + nova_fbh + '"><param name="allowScriptAccess" value="always" /><param name="movie" value="' + nova_fbf + '?w=' + nova_fbw + '&h=' + nova_fbh + '&' + nova_clickparam + '=' + nova_ct + '"' + nova_cl_tag + '<param name="flashVars" value="videoPath=' + nova_video + '&w=' + nova_fbw + '&h=' + nova_fbh + '&' + nova_clickparam + '=' + nova_ct + '"' + nova_cl_tag + '<param name="loop" value="false"' + nova_cl_tag + '<param name="wmode" value="' + nova_wmode + '"' + nova_cl_tag + '<param name="menu" value="false"' + nova_cl_tag + '<param name="quality" value="high"' + nova_cl_tag + '<embed name="nova_floaterAd" src="' + nova_fbf + '?w=' + nova_fbw + '&h=' + nova_fbh + '&' + nova_clickparam + '=' + nova_ct + '" flashVars="videoPath=' + nova_video + '&w=' + nova_fbw + '&h=' + nova_fbh + '&' + nova_clickparam + '=' + nova_ct + '" loop="false" wmode="' + nova_wmode + '" menu="false" quality="high" width="' + nova_fbw + '" height="' + nova_fbh + '" type="application/x-shockwave-flash" allowScriptAccess="always" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>';;
    nova_b0 = '<div id="nova_floater" style="position:absolute;visibility:hidden;z-index:' + nova_zindex + ';left:' + f_left + 'px; top:' + f_top + 'px;">' + nova_fl0 + '</div>';
    nova_b1 = '<div id="nova_floater_wraper" onclick = nova_bgbutton(); style="position:fixed;visibility:hidden;z-index:' + (nova_zindex - 1) + ';left:0; top:0;width:100%;height:100%;background-image:url(' + nova_bg + ');display:block;cursor:default;">' + nova_b0 + '</div>';
    if (nova_duration != 0 && nova_duration != '') {
        setTimeout('onFinishedPlaying()', nova_duration * 1000);
    }

    function onFinishedPlaying() {
        nova_close();
        nova_selects('visible');
    }

    function nova_show() {
        if (nova_delay == 0 && nova_ie) {
            setTimeout(nova_attach, 50);
        } else {
            setTimeout(nova_attach, nova_delay * 1000);
        }
    }

    function nova_attach() {
        var x = document.createElement('div');
        x.innerHTML = nova_b1;
        document.body.appendChild(x);
        nova_selects('hidden');
    }

    function nova_selects(mode) {
        var s = document.getElementsByTagName('select');
        for (i = 0; i < s.length; i++) {
            s[i].style.visibility = mode;
        }
    }

    function nova_close() {
        if (!document.getElementById) return;
        var h = document.getElementById('nova_floater_wraper');
        var d = document.getElementById('nova_floater');
        h.removeChild(d);
        if (h) h.style.visibility = 'hidden';
    }

    function nova_bgbutton() {
        if (nova_bgclose == 1) {
            onFinishedPlaying()
        }
    }
    var DomLoaded = {
        onload: [],
        loaded: function () {
            if (arguments.callee.done) return;
            arguments.callee.done = true;
            for (i = 0; i < DomLoaded.onload.length; i++) DomLoaded.onload[i]();
        },
        load: function (fireThis) {
            this.onload.push(fireThis);
            if (document.addEventListener)
                document.addEventListener("DOMContentLoaded", DomLoaded.loaded, null);
            if (/KHTML|WebKit/i.test(navigator.userAgent)) {
                var _timer = setInterval(function () {
                    if (/loaded|complete/.test(document.readyState)) {
                        clearInterval(_timer);
                        delete _timer;
                        DomLoaded.loaded();
                    }
                }, 10);
            }
            window.onload = DomLoaded.loaded;
        }
    };
    DomLoaded.load(nova_show);
}
