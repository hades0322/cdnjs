if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/color-harmony/color-harmony.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/color-harmony/color-harmony.js",
    code: []
};
_yuitest_coverage["build/color-harmony/color-harmony.js"].code=["YUI.add('color-harmony', function (Y, NAME) {","","/**","Color Harmony provides methods useful for color combination discovery.","","@module color","@submodule color-harmony","@class Harmony","@namespace Color","@since 3.6.1","*/","var HSL = 'hsl',","    RGB = 'rgb',","","    SPLIT_OFFSET = 30,","    ANALOGOUS_OFFSET = 10,","    TRIAD_OFFSET = 360/3,","    TETRAD_OFFSET = 360/6,","    SQUARE_OFFSET = 360/4 ,","","    DEF_COUNT = 5,","    DEF_OFFSET = 10,","","    Color = Y.Color,","","    Harmony = {","","        // Color Groups","        /**","        Returns an Array of two colors. The first color in the Array","          will be the color passed in. The second will be the","          complementary color of the color provided","        @public","        @method getComplementary","        @param {String} str","        @param {String} [to]","        @returns {Array}","        **/","        getComplementary: function(str, to) {","            var c = Harmony._start(str),","                c1 = c.concat();","","            to = to || Color.findType(str);","","            c1 = Harmony.getOffset(c1, {h: 180});","","            return [","                    Harmony._finish(c, to),","                    Harmony._finish(c1, to)","                ];","        },","","        /**","        Returns an Array of three colors. The first color in the Array","          will be the color passed in. The second two will be split","          complementary colors.","        @public","        @method getSplit","        @param {String} str","        @param {Number} [offset]","        @param {String} [to]","        @returns {String}","        **/","        getSplit: function(str, offset, to) {","            var c = Harmony._start(str),","                c1,","                c2;","","            offset = offset || SPLIT_OFFSET;","","            to = to || Color.findType(str);","","            c = Harmony.getOffset(c, {h: 180});","","            c1 = c.concat();","            c1 = Harmony.getOffset(c1, {h: offset});","","            c2 = c.concat();","            c2 = Harmony.getOffset(c2, {h: -offset});","","            // set base color back to original value","            c = Harmony.getOffset(c, {h: 180});","","            return [","                Harmony._finish(c, to),","                Harmony._finish(c1, to),","                Harmony._finish(c2, to)","            ];","        },","","        /**","        Returns an Array of five colors. The first color in the Array","          will be the color passed in. The remaining four will be","          analogous colors two in either direction from the initially","          provided color.","        @public","        @method getAnalogous","        @param {String} str","        @param {Number} [offset]","        @param {String} [to]","        @returns {String}","        **/","        getAnalogous: function(str, offset, to) {","            var c = Harmony._start(str),","                c1,","                c2,","                c3,","                c4;","","            offset = offset || ANALOGOUS_OFFSET;","            to = to || Color.findType(str);","","            c1 = c.concat();","            c1 = Harmony.getOffset(c1, {h: offset});","","            c2 = c1.concat();","            c2 = Harmony.getOffset(c2, {h: offset});","","            c3 = c.concat();","            c3 = Harmony.getOffset(c3, {h: -offset});","","            c4 = c3.concat();","            c4 = Harmony.getOffset(c4, {h: -offset});","","            return [","                Harmony._finish(c, to),","                Harmony._finish(c1, to),","                Harmony._finish(c2, to),","                Harmony._finish(c3, to),","                Harmony._finish(c4, to)","            ];","        },","","        /**","        Returns an Array of three colors. The first color in the Array","          will be the color passed in. The second two will be equidistant","          from the start color and each other.","        @public","        @method getTriad","        @param {String} str","        @param {String} [to]","        @returns {String}","        **/","        getTriad: function(str, to) {","            var c = Harmony._start(str),","                c1,","                c2;","","            to = to || Color.findType(str);","","            c1 = c.concat();","            c1 = Harmony.getOffset(c1, {h: TRIAD_OFFSET});","","            c2 = c1.concat();","            c2 = Harmony.getOffset(c2, {h: TRIAD_OFFSET});","","            return [","                Harmony._finish(c, to),","                Harmony._finish(c1, to),","                Harmony._finish(c2, to)","            ];","        },","","        /**","        Returns an Array of four colors. The first color in the Array","          will be the color passed in. The remaining three colors are","          equidistant offsets from the starting color and each other.","        @public","        @method getTetrad","        @param {String} str","        @param {Number} [offset]","        @param {String} [to]","        @returns {String}","        **/","        getTetrad: function(str, offset, to) {","            var c = Harmony._start(str),","                c1,","                c2,","                c3;","","            offset = offset || TETRAD_OFFSET;","            to = to || Color.findType(str);","","            c1 = c.concat();","            c1 = Harmony.getOffset(c1, {h: offset});","","            c2 = c.concat();","            c2 = Harmony.getOffset(c2, {h: 180});","","            c3 = c2.concat();","            c3 = Harmony.getOffset(c3, {h: offset});","","            return [","                Harmony._finish(c, to),","                Harmony._finish(c1, to),","                Harmony._finish(c2, to),","                Harmony._finish(c3, to)","            ];","        },","","        /**","        Returns an Array of four colors. The first color in the Array","          will be the color passed in. The remaining three colors are","          equidistant offsets from the starting color and each other.","        @public","        @method getSquare","        @param {String} str","        @param {String} [to]","        @returns {String}","        **/","        getSquare: function(str, to) {","            var c = Harmony._start(str),","                c1,","                c2,","                c3;","","            to = to || Color.findType(str);","","            c1 = c.concat();","            c1 = Harmony.getOffset(c1, {h: SQUARE_OFFSET});","","            c2 = c1.concat();","            c2 = Harmony.getOffset(c2, {h: SQUARE_OFFSET});","","            c3 = c2.concat();","            c3 = Harmony.getOffset(c3, {h: SQUARE_OFFSET});","","            return [","                Harmony._finish(c, to),","                Harmony._finish(c1, to),","                Harmony._finish(c2, to),","                Harmony._finish(c3, to)","            ];","        },","","        /**","        Calculates lightness offsets resulting in a monochromatic Array","          of values.","        @public","        @method getMonochrome","        @param {String} str","        @param {Number} [count]","        @param {String} [to]","        @returns {String}","        **/","        getMonochrome: function(str, count, to) {","            var c = Harmony._start(str),","                colors = [],","                i = 0,","                l,","                step,","                _c = c.concat();","","            count = count || DEF_COUNT;","            to = to || Color.findType(str);","","","            if (count < 2) {","                return str;","            }","","            step = 100 / (count - 1);","","            for (; i <= 100; i += step) {","                _c[2] = Math.max(Math.min(i, 100), 0);","                colors.push(_c.concat());","            }","","            l = colors.length;","","            for (i=0; i<l; i++) {","                colors[i] = Harmony._finish(colors[i], to);","            }","","            return colors;","        },","","        /**","        Creates an Array of similar colors. Returned Array is prepended","           with the color provided followed a number of colors decided","           by count","        @public","        @method getSimilar","        @param {String} str","        @param {Number} [offset]","        @param {Number} [count]","        @param {String} [to]","        @returns {String}","        **/","        getSimilar: function(str, offset, count, to) {","            var c = Harmony._start(str),","                colors = [c],","                slOffset,","                i = 0,","                l,","                o,","                _c = c.concat();","","            to = to || Color.findType(str);","            count = count || DEF_COUNT;","            offset = offset || DEF_OFFSET;","            slOffset = (offset > 100) ? 100 : offset;","","            for (; i < count; i++) {","                o = {","                    h: ( Math.random() * (offset * 2)) - offset,","                    s: ( Math.random() * (slOffset * 2)),","                    l: ( Math.random() * (slOffset * 2))","                };","                _c = Harmony.getOffset(_c, o);","                colors.push(_c.concat());","            }","","            l = colors.length;","","            for (i=0; i<l; i++) {","                colors[i] = Harmony._finish(colors[i], to);","            }","","            return colors;","        },","","        /**","        Adjusts the provided color by the offset(s) given. You may","          adjust hue, saturation, and/or luminance in one step.","        @public","        @method getOffset","        @param {String} str","        @param {Object} adjust","          @param {Number} [adjust.h]","          @param {Number} [adjust.s]","          @param {Number} [adjust.l]","        @param {String} [to]","        @returns {String}","        **/","        getOffset: function(str, adjust, to) {","            var started = Y.Lang.isArray(str),","                hsla,","                type;","","            if (!started) {","                hsla = Harmony._start(str);","                type = Color.findType(str);","            } else {","                hsla = str;","                type = 'hsl';","            }","","            to = to || type;","","            if (adjust.h) {","                hsla[0] = ((+hsla[0]) + adjust.h) % 360;","            }","","            if (adjust.s) {","                hsla[1] = Math.max(Math.min((+hsla[1]) + adjust.s, 100), 0);","            }","","            if (adjust.l) {","                hsla[2] = Math.max(Math.min((+hsla[2]) + adjust.l, 100), 0);","            }","","            if (!started) {","                return Harmony._finish(hsla, to);","            }","","            return hsla;","        },","","        /**","        Returns 0 - 1 percentage of brightness from `0` (black) being the","          darkest to `1` (white) being the brightest.","        @public","        @method getBrightness","        @param {String} str","        @returns {Number}","        **/","        getBrightness: function(str) {","            var c = Color.toArray(Color._convertTo(str, RGB)),","                r = c[0],","                g = c[1],","                b = c[2],","                weights = Y.Color._brightnessWeights;","","","            return (Math.sqrt(","                (r * r * weights.r) +","                (g * g * weights.g) +","                (b * b * weights.b)","            ) / 255);","        },","","        /**","        Returns a new color value with adjusted luminance so that the","          brightness of the return color matches the perceived brightness","          of the `match` color provided.","        @public","        @method getSimilarBrightness","        @param {String} str","        @param {String} match","        @param {String} [to]","        @returns {String}","        **/","        getSimilarBrightness: function(str, match, to){","            var c = Color.toArray(Color._convertTo(str, HSL)),","                b = Harmony.getBrightness(match);","","            to = to || Color.findType(str);","","            if (to === 'keyword') {","                to = 'hex';","            }","","            c[2] = Harmony._searchLuminanceForBrightness(c, b, 0, 100);","","            str = Color.fromArray(c, Y.Color.TYPES.HSLA);","","            return Color._convertTo(str, to);","        },","","        //--------------------","        // PRIVATE","        //--------------------","        /**","        Converts the provided color from additive to subtractive returning","          an Array of HSLA values","        @private","        @method _start","        @param {String} str","        @returns {Array}","        */","        _start: function(str) {","            var hsla = Color.toArray(Color._convertTo(str, HSL));","            hsla[0] = Harmony._toSubtractive(hsla[0]);","","            return hsla;","        },","","        /**","        Converts the provided HSLA values from subtractive to additive","          returning a converted color string","        @private","        @method _finish","        @param {Array} hsla","        @param {String} [to]","        @returns {String}","        */","        _finish: function(hsla, to) {","            hsla[0] = Harmony._toAdditive(hsla[0]);","            hsla = 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';","","            if (to === 'keyword') {","                to = 'hex';","            }","","            return Color._convertTo(hsla, to);","        },","","        /**","        Adjusts the hue degree from subtractive to additive","        @private","        @method _toAdditive","        @param {Number} hue","        @return {Number} Converted additive hue","        */","        _toAdditive: function(hue) {","            hue = Y.Color._constrainHue(hue);","","            if (hue <= 180) {","                hue /= 1.5;","            } else if (hue < 240) {","                hue = 120 + (hue - 180) * 2;","            }","","            return Y.Color._constrainHue(hue, 10);","        },","","        /**","        Adjusts the hue degree from additive to subtractive","        @private","        @method _toSubtractive","        @param {Number} hue","        @return {Number} Converted subtractive hue","        */","        _toSubtractive: function(hue) {","            hue = Y.Color._constrainHue(hue);","","            if (hue <= 120) {","                hue *= 1.5;","            } else if (hue < 240) {","                hue = 180 + (hue - 120) / 2;","            }","","            return Y.Color._constrainHue(hue, 10);","        },","","        /**","        Contrain the hue to a value between 0 and 360 for calculations","            and real color wheel value space. Provide a precision value","            to round return value to a decimal place","        @private","        @method _constrainHue","        @param {Number} hue","        @param {Number} [precision]","        @returns {Number} Constrained hue value","        **/","        _constrainHue: function(hue, precision) {","            while (hue < 0) {","                hue += 360;","            }","            hue %= 360;","","            if (precision) {","                hue = Math.round(hue * precision) / precision;","            }","","            return hue;","        },","","        /**","        Brightness weight factors for perceived brightness calculations","","        \"standard\" values are listed as R: 0.241, G: 0.691, B: 0.068","        These values were changed based on grey scale comparison of hsl","          to new hsl where brightness is said to be within plus or minus 0.01.","        @private","        @property _brightnessWeights","        */","        _brightnessWeights: {","            r: 0.221,","            g: 0.711,","            b: 0.068","        },","","        /**","        Calculates the luminance as a mid range between the min and max","          to match the brightness level provided","        @private","        @method _searchLuminanceForBrightness","        @param {Array} color HSLA values","        @param {Number} brightness Brightness to be matched","        @param {Number} min Minimum range for luminance","        @param {Number} max Maximum range for luminance","        @returns {Number} Found luminance to achieve requested brightness","        **/","        _searchLuminanceForBrightness: function(color, brightness, min, max) {","            var luminance = (max + min) / 2,","                b;","","            color[2] = luminance;","            b = Harmony.getBrightness(Color.fromArray(color, Y.Color.TYPES.HSL));","","            if (b + 0.01 > brightness && b - 0.01 < brightness) {","                return luminance;","            } else if (b > brightness) {","                return Harmony._searchLuminanceForBrightness(color, brightness, min, luminance);","            } else {","                return Harmony._searchLuminanceForBrightness(color, brightness, luminance, max);","            }","        }","    };","","Y.Color = Y.mix(Y.Color, Harmony);","","","}, '@VERSION@', {\"requires\": [\"color-hsl\"]});"];
_yuitest_coverage["build/color-harmony/color-harmony.js"].lines = {"1":0,"12":0,"40":0,"43":0,"45":0,"47":0,"65":0,"69":0,"71":0,"73":0,"75":0,"76":0,"78":0,"79":0,"82":0,"84":0,"104":0,"110":0,"111":0,"113":0,"114":0,"116":0,"117":0,"119":0,"120":0,"122":0,"123":0,"125":0,"145":0,"149":0,"151":0,"152":0,"154":0,"155":0,"157":0,"176":0,"181":0,"182":0,"184":0,"185":0,"187":0,"188":0,"190":0,"191":0,"193":0,"212":0,"217":0,"219":0,"220":0,"222":0,"223":0,"225":0,"226":0,"228":0,"247":0,"254":0,"255":0,"258":0,"259":0,"262":0,"264":0,"265":0,"266":0,"269":0,"271":0,"272":0,"275":0,"291":0,"299":0,"300":0,"301":0,"302":0,"304":0,"305":0,"310":0,"311":0,"314":0,"316":0,"317":0,"320":0,"337":0,"341":0,"342":0,"343":0,"345":0,"346":0,"349":0,"351":0,"352":0,"355":0,"356":0,"359":0,"360":0,"363":0,"364":0,"367":0,"379":0,"386":0,"405":0,"408":0,"410":0,"411":0,"414":0,"416":0,"418":0,"433":0,"434":0,"436":0,"449":0,"450":0,"452":0,"453":0,"456":0,"467":0,"469":0,"470":0,"471":0,"472":0,"475":0,"486":0,"488":0,"489":0,"490":0,"491":0,"494":0,"508":0,"509":0,"511":0,"513":0,"514":0,"517":0,"547":0,"550":0,"551":0,"553":0,"554":0,"555":0,"556":0,"558":0,"563":0};
_yuitest_coverage["build/color-harmony/color-harmony.js"].functions = {"getComplementary:39":0,"getSplit:64":0,"getAnalogous:103":0,"getTriad:144":0,"getTetrad:175":0,"getSquare:211":0,"getMonochrome:246":0,"getSimilar:290":0,"getOffset:336":0,"getBrightness:378":0,"getSimilarBrightness:404":0,"_start:432":0,"_finish:448":0,"_toAdditive:466":0,"_toSubtractive:485":0,"_constrainHue:507":0,"_searchLuminanceForBrightness:546":0,"(anonymous 1):1":0};
_yuitest_coverage["build/color-harmony/color-harmony.js"].coveredLines = 140;
_yuitest_coverage["build/color-harmony/color-harmony.js"].coveredFunctions = 18;
_yuitest_coverline("build/color-harmony/color-harmony.js", 1);
YUI.add('color-harmony', function (Y, NAME) {

/**
Color Harmony provides methods useful for color combination discovery.

@module color
@submodule color-harmony
@class Harmony
@namespace Color
@since 3.6.1
*/
_yuitest_coverfunc("build/color-harmony/color-harmony.js", "(anonymous 1)", 1);
_yuitest_coverline("build/color-harmony/color-harmony.js", 12);
var HSL = 'hsl',
    RGB = 'rgb',

    SPLIT_OFFSET = 30,
    ANALOGOUS_OFFSET = 10,
    TRIAD_OFFSET = 360/3,
    TETRAD_OFFSET = 360/6,
    SQUARE_OFFSET = 360/4 ,

    DEF_COUNT = 5,
    DEF_OFFSET = 10,

    Color = Y.Color,

    Harmony = {

        // Color Groups
        /**
        Returns an Array of two colors. The first color in the Array
          will be the color passed in. The second will be the
          complementary color of the color provided
        @public
        @method getComplementary
        @param {String} str
        @param {String} [to]
        @returns {Array}
        **/
        getComplementary: function(str, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getComplementary", 39);
_yuitest_coverline("build/color-harmony/color-harmony.js", 40);
var c = Harmony._start(str),
                c1 = c.concat();

            _yuitest_coverline("build/color-harmony/color-harmony.js", 43);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 45);
c1 = Harmony.getOffset(c1, {h: 180});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 47);
return [
                    Harmony._finish(c, to),
                    Harmony._finish(c1, to)
                ];
        },

        /**
        Returns an Array of three colors. The first color in the Array
          will be the color passed in. The second two will be split
          complementary colors.
        @public
        @method getSplit
        @param {String} str
        @param {Number} [offset]
        @param {String} [to]
        @returns {String}
        **/
        getSplit: function(str, offset, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getSplit", 64);
_yuitest_coverline("build/color-harmony/color-harmony.js", 65);
var c = Harmony._start(str),
                c1,
                c2;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 69);
offset = offset || SPLIT_OFFSET;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 71);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 73);
c = Harmony.getOffset(c, {h: 180});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 75);
c1 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 76);
c1 = Harmony.getOffset(c1, {h: offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 78);
c2 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 79);
c2 = Harmony.getOffset(c2, {h: -offset});

            // set base color back to original value
            _yuitest_coverline("build/color-harmony/color-harmony.js", 82);
c = Harmony.getOffset(c, {h: 180});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 84);
return [
                Harmony._finish(c, to),
                Harmony._finish(c1, to),
                Harmony._finish(c2, to)
            ];
        },

        /**
        Returns an Array of five colors. The first color in the Array
          will be the color passed in. The remaining four will be
          analogous colors two in either direction from the initially
          provided color.
        @public
        @method getAnalogous
        @param {String} str
        @param {Number} [offset]
        @param {String} [to]
        @returns {String}
        **/
        getAnalogous: function(str, offset, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getAnalogous", 103);
_yuitest_coverline("build/color-harmony/color-harmony.js", 104);
var c = Harmony._start(str),
                c1,
                c2,
                c3,
                c4;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 110);
offset = offset || ANALOGOUS_OFFSET;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 111);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 113);
c1 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 114);
c1 = Harmony.getOffset(c1, {h: offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 116);
c2 = c1.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 117);
c2 = Harmony.getOffset(c2, {h: offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 119);
c3 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 120);
c3 = Harmony.getOffset(c3, {h: -offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 122);
c4 = c3.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 123);
c4 = Harmony.getOffset(c4, {h: -offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 125);
return [
                Harmony._finish(c, to),
                Harmony._finish(c1, to),
                Harmony._finish(c2, to),
                Harmony._finish(c3, to),
                Harmony._finish(c4, to)
            ];
        },

        /**
        Returns an Array of three colors. The first color in the Array
          will be the color passed in. The second two will be equidistant
          from the start color and each other.
        @public
        @method getTriad
        @param {String} str
        @param {String} [to]
        @returns {String}
        **/
        getTriad: function(str, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getTriad", 144);
_yuitest_coverline("build/color-harmony/color-harmony.js", 145);
var c = Harmony._start(str),
                c1,
                c2;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 149);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 151);
c1 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 152);
c1 = Harmony.getOffset(c1, {h: TRIAD_OFFSET});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 154);
c2 = c1.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 155);
c2 = Harmony.getOffset(c2, {h: TRIAD_OFFSET});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 157);
return [
                Harmony._finish(c, to),
                Harmony._finish(c1, to),
                Harmony._finish(c2, to)
            ];
        },

        /**
        Returns an Array of four colors. The first color in the Array
          will be the color passed in. The remaining three colors are
          equidistant offsets from the starting color and each other.
        @public
        @method getTetrad
        @param {String} str
        @param {Number} [offset]
        @param {String} [to]
        @returns {String}
        **/
        getTetrad: function(str, offset, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getTetrad", 175);
_yuitest_coverline("build/color-harmony/color-harmony.js", 176);
var c = Harmony._start(str),
                c1,
                c2,
                c3;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 181);
offset = offset || TETRAD_OFFSET;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 182);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 184);
c1 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 185);
c1 = Harmony.getOffset(c1, {h: offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 187);
c2 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 188);
c2 = Harmony.getOffset(c2, {h: 180});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 190);
c3 = c2.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 191);
c3 = Harmony.getOffset(c3, {h: offset});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 193);
return [
                Harmony._finish(c, to),
                Harmony._finish(c1, to),
                Harmony._finish(c2, to),
                Harmony._finish(c3, to)
            ];
        },

        /**
        Returns an Array of four colors. The first color in the Array
          will be the color passed in. The remaining three colors are
          equidistant offsets from the starting color and each other.
        @public
        @method getSquare
        @param {String} str
        @param {String} [to]
        @returns {String}
        **/
        getSquare: function(str, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getSquare", 211);
_yuitest_coverline("build/color-harmony/color-harmony.js", 212);
var c = Harmony._start(str),
                c1,
                c2,
                c3;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 217);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 219);
c1 = c.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 220);
c1 = Harmony.getOffset(c1, {h: SQUARE_OFFSET});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 222);
c2 = c1.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 223);
c2 = Harmony.getOffset(c2, {h: SQUARE_OFFSET});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 225);
c3 = c2.concat();
            _yuitest_coverline("build/color-harmony/color-harmony.js", 226);
c3 = Harmony.getOffset(c3, {h: SQUARE_OFFSET});

            _yuitest_coverline("build/color-harmony/color-harmony.js", 228);
return [
                Harmony._finish(c, to),
                Harmony._finish(c1, to),
                Harmony._finish(c2, to),
                Harmony._finish(c3, to)
            ];
        },

        /**
        Calculates lightness offsets resulting in a monochromatic Array
          of values.
        @public
        @method getMonochrome
        @param {String} str
        @param {Number} [count]
        @param {String} [to]
        @returns {String}
        **/
        getMonochrome: function(str, count, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getMonochrome", 246);
_yuitest_coverline("build/color-harmony/color-harmony.js", 247);
var c = Harmony._start(str),
                colors = [],
                i = 0,
                l,
                step,
                _c = c.concat();

            _yuitest_coverline("build/color-harmony/color-harmony.js", 254);
count = count || DEF_COUNT;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 255);
to = to || Color.findType(str);


            _yuitest_coverline("build/color-harmony/color-harmony.js", 258);
if (count < 2) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 259);
return str;
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 262);
step = 100 / (count - 1);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 264);
for (; i <= 100; i += step) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 265);
_c[2] = Math.max(Math.min(i, 100), 0);
                _yuitest_coverline("build/color-harmony/color-harmony.js", 266);
colors.push(_c.concat());
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 269);
l = colors.length;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 271);
for (i=0; i<l; i++) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 272);
colors[i] = Harmony._finish(colors[i], to);
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 275);
return colors;
        },

        /**
        Creates an Array of similar colors. Returned Array is prepended
           with the color provided followed a number of colors decided
           by count
        @public
        @method getSimilar
        @param {String} str
        @param {Number} [offset]
        @param {Number} [count]
        @param {String} [to]
        @returns {String}
        **/
        getSimilar: function(str, offset, count, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getSimilar", 290);
_yuitest_coverline("build/color-harmony/color-harmony.js", 291);
var c = Harmony._start(str),
                colors = [c],
                slOffset,
                i = 0,
                l,
                o,
                _c = c.concat();

            _yuitest_coverline("build/color-harmony/color-harmony.js", 299);
to = to || Color.findType(str);
            _yuitest_coverline("build/color-harmony/color-harmony.js", 300);
count = count || DEF_COUNT;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 301);
offset = offset || DEF_OFFSET;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 302);
slOffset = (offset > 100) ? 100 : offset;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 304);
for (; i < count; i++) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 305);
o = {
                    h: ( Math.random() * (offset * 2)) - offset,
                    s: ( Math.random() * (slOffset * 2)),
                    l: ( Math.random() * (slOffset * 2))
                };
                _yuitest_coverline("build/color-harmony/color-harmony.js", 310);
_c = Harmony.getOffset(_c, o);
                _yuitest_coverline("build/color-harmony/color-harmony.js", 311);
colors.push(_c.concat());
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 314);
l = colors.length;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 316);
for (i=0; i<l; i++) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 317);
colors[i] = Harmony._finish(colors[i], to);
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 320);
return colors;
        },

        /**
        Adjusts the provided color by the offset(s) given. You may
          adjust hue, saturation, and/or luminance in one step.
        @public
        @method getOffset
        @param {String} str
        @param {Object} adjust
          @param {Number} [adjust.h]
          @param {Number} [adjust.s]
          @param {Number} [adjust.l]
        @param {String} [to]
        @returns {String}
        **/
        getOffset: function(str, adjust, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getOffset", 336);
_yuitest_coverline("build/color-harmony/color-harmony.js", 337);
var started = Y.Lang.isArray(str),
                hsla,
                type;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 341);
if (!started) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 342);
hsla = Harmony._start(str);
                _yuitest_coverline("build/color-harmony/color-harmony.js", 343);
type = Color.findType(str);
            } else {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 345);
hsla = str;
                _yuitest_coverline("build/color-harmony/color-harmony.js", 346);
type = 'hsl';
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 349);
to = to || type;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 351);
if (adjust.h) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 352);
hsla[0] = ((+hsla[0]) + adjust.h) % 360;
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 355);
if (adjust.s) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 356);
hsla[1] = Math.max(Math.min((+hsla[1]) + adjust.s, 100), 0);
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 359);
if (adjust.l) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 360);
hsla[2] = Math.max(Math.min((+hsla[2]) + adjust.l, 100), 0);
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 363);
if (!started) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 364);
return Harmony._finish(hsla, to);
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 367);
return hsla;
        },

        /**
        Returns 0 - 1 percentage of brightness from `0` (black) being the
          darkest to `1` (white) being the brightest.
        @public
        @method getBrightness
        @param {String} str
        @returns {Number}
        **/
        getBrightness: function(str) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getBrightness", 378);
_yuitest_coverline("build/color-harmony/color-harmony.js", 379);
var c = Color.toArray(Color._convertTo(str, RGB)),
                r = c[0],
                g = c[1],
                b = c[2],
                weights = Y.Color._brightnessWeights;


            _yuitest_coverline("build/color-harmony/color-harmony.js", 386);
return (Math.sqrt(
                (r * r * weights.r) +
                (g * g * weights.g) +
                (b * b * weights.b)
            ) / 255);
        },

        /**
        Returns a new color value with adjusted luminance so that the
          brightness of the return color matches the perceived brightness
          of the `match` color provided.
        @public
        @method getSimilarBrightness
        @param {String} str
        @param {String} match
        @param {String} [to]
        @returns {String}
        **/
        getSimilarBrightness: function(str, match, to){
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "getSimilarBrightness", 404);
_yuitest_coverline("build/color-harmony/color-harmony.js", 405);
var c = Color.toArray(Color._convertTo(str, HSL)),
                b = Harmony.getBrightness(match);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 408);
to = to || Color.findType(str);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 410);
if (to === 'keyword') {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 411);
to = 'hex';
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 414);
c[2] = Harmony._searchLuminanceForBrightness(c, b, 0, 100);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 416);
str = Color.fromArray(c, Y.Color.TYPES.HSLA);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 418);
return Color._convertTo(str, to);
        },

        //--------------------
        // PRIVATE
        //--------------------
        /**
        Converts the provided color from additive to subtractive returning
          an Array of HSLA values
        @private
        @method _start
        @param {String} str
        @returns {Array}
        */
        _start: function(str) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_start", 432);
_yuitest_coverline("build/color-harmony/color-harmony.js", 433);
var hsla = Color.toArray(Color._convertTo(str, HSL));
            _yuitest_coverline("build/color-harmony/color-harmony.js", 434);
hsla[0] = Harmony._toSubtractive(hsla[0]);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 436);
return hsla;
        },

        /**
        Converts the provided HSLA values from subtractive to additive
          returning a converted color string
        @private
        @method _finish
        @param {Array} hsla
        @param {String} [to]
        @returns {String}
        */
        _finish: function(hsla, to) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_finish", 448);
_yuitest_coverline("build/color-harmony/color-harmony.js", 449);
hsla[0] = Harmony._toAdditive(hsla[0]);
            _yuitest_coverline("build/color-harmony/color-harmony.js", 450);
hsla = 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';

            _yuitest_coverline("build/color-harmony/color-harmony.js", 452);
if (to === 'keyword') {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 453);
to = 'hex';
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 456);
return Color._convertTo(hsla, to);
        },

        /**
        Adjusts the hue degree from subtractive to additive
        @private
        @method _toAdditive
        @param {Number} hue
        @return {Number} Converted additive hue
        */
        _toAdditive: function(hue) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_toAdditive", 466);
_yuitest_coverline("build/color-harmony/color-harmony.js", 467);
hue = Y.Color._constrainHue(hue);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 469);
if (hue <= 180) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 470);
hue /= 1.5;
            } else {_yuitest_coverline("build/color-harmony/color-harmony.js", 471);
if (hue < 240) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 472);
hue = 120 + (hue - 180) * 2;
            }}

            _yuitest_coverline("build/color-harmony/color-harmony.js", 475);
return Y.Color._constrainHue(hue, 10);
        },

        /**
        Adjusts the hue degree from additive to subtractive
        @private
        @method _toSubtractive
        @param {Number} hue
        @return {Number} Converted subtractive hue
        */
        _toSubtractive: function(hue) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_toSubtractive", 485);
_yuitest_coverline("build/color-harmony/color-harmony.js", 486);
hue = Y.Color._constrainHue(hue);

            _yuitest_coverline("build/color-harmony/color-harmony.js", 488);
if (hue <= 120) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 489);
hue *= 1.5;
            } else {_yuitest_coverline("build/color-harmony/color-harmony.js", 490);
if (hue < 240) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 491);
hue = 180 + (hue - 120) / 2;
            }}

            _yuitest_coverline("build/color-harmony/color-harmony.js", 494);
return Y.Color._constrainHue(hue, 10);
        },

        /**
        Contrain the hue to a value between 0 and 360 for calculations
            and real color wheel value space. Provide a precision value
            to round return value to a decimal place
        @private
        @method _constrainHue
        @param {Number} hue
        @param {Number} [precision]
        @returns {Number} Constrained hue value
        **/
        _constrainHue: function(hue, precision) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_constrainHue", 507);
_yuitest_coverline("build/color-harmony/color-harmony.js", 508);
while (hue < 0) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 509);
hue += 360;
            }
            _yuitest_coverline("build/color-harmony/color-harmony.js", 511);
hue %= 360;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 513);
if (precision) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 514);
hue = Math.round(hue * precision) / precision;
            }

            _yuitest_coverline("build/color-harmony/color-harmony.js", 517);
return hue;
        },

        /**
        Brightness weight factors for perceived brightness calculations

        "standard" values are listed as R: 0.241, G: 0.691, B: 0.068
        These values were changed based on grey scale comparison of hsl
          to new hsl where brightness is said to be within plus or minus 0.01.
        @private
        @property _brightnessWeights
        */
        _brightnessWeights: {
            r: 0.221,
            g: 0.711,
            b: 0.068
        },

        /**
        Calculates the luminance as a mid range between the min and max
          to match the brightness level provided
        @private
        @method _searchLuminanceForBrightness
        @param {Array} color HSLA values
        @param {Number} brightness Brightness to be matched
        @param {Number} min Minimum range for luminance
        @param {Number} max Maximum range for luminance
        @returns {Number} Found luminance to achieve requested brightness
        **/
        _searchLuminanceForBrightness: function(color, brightness, min, max) {
            _yuitest_coverfunc("build/color-harmony/color-harmony.js", "_searchLuminanceForBrightness", 546);
_yuitest_coverline("build/color-harmony/color-harmony.js", 547);
var luminance = (max + min) / 2,
                b;

            _yuitest_coverline("build/color-harmony/color-harmony.js", 550);
color[2] = luminance;
            _yuitest_coverline("build/color-harmony/color-harmony.js", 551);
b = Harmony.getBrightness(Color.fromArray(color, Y.Color.TYPES.HSL));

            _yuitest_coverline("build/color-harmony/color-harmony.js", 553);
if (b + 0.01 > brightness && b - 0.01 < brightness) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 554);
return luminance;
            } else {_yuitest_coverline("build/color-harmony/color-harmony.js", 555);
if (b > brightness) {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 556);
return Harmony._searchLuminanceForBrightness(color, brightness, min, luminance);
            } else {
                _yuitest_coverline("build/color-harmony/color-harmony.js", 558);
return Harmony._searchLuminanceForBrightness(color, brightness, luminance, max);
            }}
        }
    };

_yuitest_coverline("build/color-harmony/color-harmony.js", 563);
Y.Color = Y.mix(Y.Color, Harmony);


}, '@VERSION@', {"requires": ["color-hsl"]});
