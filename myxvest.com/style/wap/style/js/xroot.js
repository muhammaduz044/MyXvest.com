var Default = "{xroot: {name: 'XRoot', description: 'XRoot from Xvest', home_page: 'http://myxvest.ru/', active: 0, active_themes: ['Default', 'Dim', 'Dark']}}";
var Dim = "{xroot: {name: 'XRoot', description: 'XRoot from Xvest', home_page: 'http://myxvest.ru/', active: 1, active_themes: ['Default', 'Dim', 'Dark']}}";
var Dark = "{xroot: {name: 'XRoot', description: 'XRoot from Xvest', home_page: 'http://myxvest.ru/', active: 2, active_themes: ['Default', 'Dim', 'Dark']}}";
var XRootStorage = localStorage._app_xvest_xroot;

$('[app-xroot-manager]').click(function () {
    if (XRootStorage == Dark) {
        setCookie('XRSID', md5('XRoot Dark'), 10000, '/', '.xvest.ru');
    } else if (XRootStorage == Dim) {
        setCookie('XRSID', md5('XRoot Dim'), 10000, '/', '.xvest.ru');
    } else {
        setCookie('XRSID', md5('XRoot Default'), 10000, '/', '.xvest.ru');
    }
});

if (XRootStorage == Dark) {
    $('[app-xroot-active]').attr('app-xroot-active', 'dark');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DarkActive.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dim.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Default.svg');
} else if (XRootStorage == Dim) {
    $('[app-xroot-active]').attr('app-xroot-active', 'dim');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dark.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DimActive.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Default.svg');
} else {
    $('[app-xroot-active]').attr('app-xroot-active', 'default');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dark.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dim.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DefaultActive.svg');
}

$('[app-xroot-id="appThemeDefault"]').click(function () {
    $('[app-xroot-active]').attr('app-xroot-active', 'default');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dark.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dim.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DefaultActive.svg');
    localStorage._app_xvest_xroot = Default;
});

$('[app-xroot-id="appThemeDim"]').click(function () {
    $('[app-xroot-active]').attr('app-xroot-active', 'dim');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dark.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DimActive.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Default.svg');
    localStorage._app_xvest_xroot = Dim;
});

$('[app-xroot-id="appThemeDark"]').click(function () {
    $('[app-xroot-active]').attr('app-xroot-active', 'dark');
    $('[app-xroot-id="appDarkThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/DarkActive.svg');
    $('[app-xroot-id="appDimThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Dim.svg');
    $('[app-xroot-id="appDefaultThemeIcon"]').attr('src', 'https://myxvest.ru/style/wap/style/image/svg/Default.svg');
    localStorage._app_xvest_xroot = Dark;
});