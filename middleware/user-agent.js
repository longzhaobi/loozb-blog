export default function (context) {
    const userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent;
    if (userAgent.indexOf('Trident') > -1) {
        //说明访问的是IE
        if (context.req.path.indexOf('nonsupport') === -1) {
            return context.redirect('/nonsupport')
        }
    }
}