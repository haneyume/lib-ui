import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var QuickForm = function (_a) {
    var properties = _a.properties, onSubmit = _a.onSubmit;
    var _b = useTranslation(), t = _b.t; _b.i18n;
    var _c = useForm(), register = _c.register, handleSubmit = _c.handleSubmit, _d = _c.formState, errors = _d.errors; _d.isValid;
    return (jsxs("form", __assign({ onSubmit: handleSubmit(onSubmit) }, { children: [Object.entries(properties).map(function (_a) {
                var key = _a[0], props = _a[1];
                // @ts-ignore
                var err = !!errors[key];
                return (jsxs("div", { children: [jsx("label", __assign({ htmlFor: key }, { children: t(key) }), void 0), jsx("input", __assign({ type: props.type, placeholder: props.placeholder ? t(props.placeholder) : undefined }, register(key, { required: props.required })), void 0), err && jsx("span", { children: t('This field is required') }, void 0)] }, key));
            }), jsx("input", { type: "submit", value: t('Login').toString() }, void 0)] }), void 0));
};

export { QuickForm };
