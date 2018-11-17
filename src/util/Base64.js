export default class Base64 {

    static getMimeType(urlBase64) {
        let result = urlBase64.split(';');
        return result[0].split(':')[1];
    }

    static toFile(urlBase64) {
        let mimeType = this.getMimeType(urlBase64);
        let ext = mimeType.split('/')[1];
        let filename = `file${Date.now()}.${ext}`;

        return fetch(urlBase64)
            .then(res => { return res.arrayBuffer(); })
            .then(buffer => { return new File([buffer], filename, { type: mimeType }); });
    }

}