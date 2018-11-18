import Model from './Model';
import Firebase from '../util/Firebase';
import Format from '../util/Format';
import Upload from '../util/Upload';

export default class Message extends Model {

    constructor() {
        super();
    }

    get id() {
        return this._data.id;
    }

    set id(value) {
        return this._data.id = value;
    }

    get content() {
        return this._data.content;
    }

    set content(value) {
        return this._data.content = value;
    }

    get type() {
        return this._data.type;
    }

    set type(value) {
        return this._data.type = value;
    }

    get timeStamp() {
        return this._data.timeStamp;
    }

    set timeStamp(value) {
        return this._data.timeStamp = value;
    }

    get status() {
        return this._data.status;
    }

    set status(value) {
        return this._data.status = value;
    }

    get status() {
        return this._data.status;
    }

    set status(value) {
        return this._data.status = value;
    }

    get preview() {
        return this._data.preview;
    }

    set preview(value) {
        return this._data.preview = value;
    }

    get info() {
        return this._data.info;
    }

    set info(value) {
        return this._data.info = value;
    }

    get fileType() {
        return this._data.fileType;
    }

    set fileType(value) {
        return this._data.fileType = value;
    }

    get fileName() {
        return this._data.fileName;
    }

    set fileName(value) {
        return this._data.fileName = value;
    }

    get size() {
        return this._data.size;
    }

    set size(value) {
        return this._data.size = value;
    }

    get from() {
        return this._data.from;
    }

    set from(value) {
        return this._data.from = value;
    }

    get photo() {
        return this._data.photo;
    }

    set photo(value) {
        return this._data.photo = value;
    }

    get duration() {
        return this._data.duration;
    }

    set duration(value) {
        return this._data.duration = value;
    }

    getViewElement(me = true) {

        let div = document.createElement('div');

        div.id = `_${this.id}`;

        div.className = 'message';

        switch (this.type) {
            case 'contact':
                div.innerHTML = `
                    <div class="_3_7SH kNKwo tail">
                        <span class="tail-container"></span>
                        <span class="tail-container highlight"></span>
                        <div class="_1YNgi copyable-text">
                            <div class="_3DZ69" role="button">
                                <div class="_20hTB">
                                    <div class="_1WliW" style="height: 49px; width: 49px;">
                                        <img src="#" class="Qgzj8 gqwaM photo-contact-sended" style="display:none">
                                        <div class="_3ZW2E">
                                            <span data-icon="default-user">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                                                    <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                                                    <g fill="#FFF">
                                                        <path d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="_1lC8v">
                                    <div dir="ltr" class="_3gkvk selectable-text invisible-space copyable-text">${this.content.name}</div>
                                </div>
                                <div class="_3a5-b">
                                    <div class="_1DZAH" role="button">
                                        <span class="message-time">${Format.timeStampToTime(this.timeStamp)}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="_6qEXM">
                                <div class="btn-message-send" role="button">Enviar mensagem</div>
                            </div>
                        </div>
                    </div>
                `;

                if (this.content.photo) {
                    let img = div.querySelector('.photo-contact-sended');
                    img.src = this.content.photo;
                    img.show();
                }

                break;
            case 'image':
                div.innerHTML = `
                    <div class="_3_7SH _3qMSo">
                        <div class="KYpDv">
                            <div>
                                <div class="_3v3PK" style="width: 330px; height: 330px;">
                                    <div class="_34Olu">
                                        <div class="_2BzIU">
                                            <div class="_2X3l6">
                                                <svg class="_1UDDE" width="50" height="50" viewBox="0 0 43 43">
                                                    <circle class="_3GbTq _2wGBy" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                                </svg>
                                            </div>
                                            <div class="_1l3ap">
                                                <span data-icon="media-disabled" class="">
                                                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
                                                        <path fill="#FFF" fill-opacity=".4" d="M29.377 16.099l-1.475-1.475L22 20.525l-5.901-5.901-1.476 1.475L20.525 22l-5.901 5.901 1.476 1.475 5.9-5.901 5.901 5.901 1.475-1.475L23.475 22l5.902-5.901z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="${this.content}" class="_1JVSX message-photo" style="width: 100%; display:none">
                                    <div class="_1i3Za"></div>
                                </div>
                                <div class="_2TvOE">
                                    <div class="_1DZAH text-white" role="button">
                                        <span class="message-time">${Format.timeStampToTime(this.timeStamp)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_3S8Q-" role="button">
                            <span data-icon="forward-chat">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                                    <path fill="#FFF" d="M14.2 9.5V6.1l5.9 5.9-5.9 6v-3.5c-4.2 0-7.2 1.4-9.3 4.3.8-4.2 3.4-8.4 9.3-9.3z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                `;

                div.querySelector('.message-photo').on('load', e => {
                    div.querySelector('.message-photo').show();
                    div.querySelector('._34Olu').hide();
                    div.querySelector('._3v3PK').css({
                        height: 'auto'
                    });
                });

                break;
            case 'document':
                div.innerHTML = `
                    <div class="_3_7SH _1ZPgd">
                        <div class="_1fnMt _2CORf">
                            <a class="_1vKRe" href="#">
                                <div class="_2jTyA" style="background-image: url(${this.preview})"></div>
                                <div class="_12xX7">
                                    <div class="_3eW69">
                                        <div class="JdzFp message-file-icon icon-doc-pdf"></div>
                                    </div>
                                    <div class="nxILt">
                                        <span dir="auto" class="message-filename">${this.fileName}</span>
                                    </div>
                                    <div class="_17viz">
                                        <span data-icon="audio-download" class="message-file-download">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34">
                                                <path fill="#263238" fill-opacity=".5" d="M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2m0-1C8.2 1 1 8.2 1 17s7.2 16 16 16 16-7.2 16-16S25.8 1 17 1z"></path>
                                                <path fill="#263238" fill-opacity=".5" d="M22.4 17.5h-3.2v-6.8c0-.4-.3-.7-.7-.7h-3.2c-.4 0-.7.3-.7.7v6.8h-3.2c-.6 0-.8.4-.4.8l5 5.3c.5.7 1 .5 1.5 0l5-5.3c.7-.5.5-.8-.1-.8z"></path>
                                            </svg>
                                        </span>
                                        <div class="_3SUnz message-file-load" style="display:none">
                                            <svg class="_1UDDE" width="32" height="32" viewBox="0 0 43 43">
                                                <circle class="_3GbTq _37WZ9" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="_3cMIj">
                                <span class="PyPig message-file-info">${this.info}</span>
                                <span class="PyPig message-file-type">${this.fileType}</span>
                                <span class="PyPig message-file-size">${this.size}</span>
                            </div>
                            <div class="_3Lj_s">
                                <div class="_1DZAH" role="button">
                                    <span class="message-time">${Format.timeStampToTime(this.timeStamp)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                div.on('click', e => {
                    window.open(this.content);
                });

                break;
            case 'audio':
                div.innerHTML = `
                    <div class="_3_7SH _17oKL">
                        <div class="_2N_Df LKbsn">
                            <div class="_2jfIu">
                                <div class="_2cfqh">
                                    <div class="_1QMEq _1kZiz fS1bA">
                                        <div class="E5U9C">
                                            <svg class="_1UDDE audio-load" width="34" height="34" viewBox="0 0 43 43">
                                                <circle class="_3GbTq _37WZ9" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                            </svg>
                                            <button class="_2pQE3 audio-play" style="display:none">
                                                <span data-icon="audio-play">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34">
                                                        <path fill="#263238" fill-opacity=".5" d="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <button class="_2pQE3 audio-pause" style="display:none">
                                                <span data-icon="audio-pause">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34">
                                                        <path fill="#263238" fill-opacity=".5" d="M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div class="_1_Gu6">
                                            <div class="message-audio-duration">0:00</div>
                                            <div class="_1sLSi">
                                                <span class="nDKsM" style="width: 0%;"></span>
                                                <input type="range" min="0" max="100" class="_3geJ8" value="0" kl_vkbd_parsed="true">
                                                <audio src="${this.content}" preload="auto"></audio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="_1mbqw">
                                    <div class="QnDup">
                                        <span data-icon="ptt-out-blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 26" width="19" height="26">
                                                <path fill="#DDF6C9" d="M9.217 24.401c-1.158 0-2.1-.941-2.1-2.1v-2.366c-2.646-.848-4.652-3.146-5.061-5.958l-.052-.357-.003-.081a2.023 2.023 0 0 1 .571-1.492c.39-.404.939-.637 1.507-.637h.3c.254 0 .498.044.724.125v-6.27A4.27 4.27 0 0 1 9.367 1a4.27 4.27 0 0 1 4.265 4.265v6.271c.226-.081.469-.125.723-.125h.3c.564 0 1.112.233 1.501.64s.597.963.571 1.526c0 .005.001.124-.08.6-.47 2.703-2.459 4.917-5.029 5.748v2.378c0 1.158-.942 2.1-2.1 2.1h-.301v-.002z"></path>
                                                <path fill="#03A9F4" d="M9.367 15.668a2.765 2.765 0 0 0 2.765-2.765V5.265a2.765 2.765 0 0 0-5.529 0v7.638a2.764 2.764 0 0 0 2.764 2.765zm5.288-2.758h-.3a.64.64 0 0 0-.631.598l-.059.285a4.397 4.397 0 0 1-4.298 3.505 4.397 4.397 0 0 1-4.304-3.531l-.055-.277a.628.628 0 0 0-.629-.579h-.3a.563.563 0 0 0-.579.573l.04.278a5.894 5.894 0 0 0 5.076 4.978v3.562c0 .33.27.6.6.6h.3c.33 0 .6-.27.6-.6V18.73c2.557-.33 4.613-2.286 5.051-4.809.057-.328.061-.411.061-.411a.57.57 0 0 0-.573-.6z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="_2fuJy">
                                    <div class="_1WliW" style="height: 55px; width: 55px;">
                                        <img src="#" class="Qgzj8 gqwaM message-photo" style="display:none">
                                        <div class="_3ZW2E">
                                            <span data-icon="default-user">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                                                    <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                                                    <g fill="#FFF">
                                                        <path d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_27K_5">
                                <div class="_1DZAH" role="button">
                                    <span class="message-time">${Format.timeStampToTime(this.timeStamp)}</span>
                                </div>
                            </div>
                        </div>

                        <div class="_3S8Q-" role="button">
                            <span data-icon="forward-chat">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                                    <path fill="#FFF" d="M14.2 9.5V6.1l5.9 5.9-5.9 6v-3.5c-4.2 0-7.2 1.4-9.3 4.3.8-4.2 3.4-8.4 9.3-9.3z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                `;

                if (this.photo) {
                    let img = div.querySelector('.message-photo');
                    img.src = this.photo;
                    img.show();
                }

                let audioEl = div.querySelector('audio');
                let loadEl = div.querySelector('.audio-load');
                let btnPlay = div.querySelector('.audio-play');
                let btnPause = div.querySelector('.audio-pause');
                let inputRange = div.querySelector('[type=range]');
                let audioDuration = div.querySelector('.message-audio-duration');

                audioEl.onloadeddata = e => {
                    loadEl.hide();
                    btnPlay.show();
                };

                audioEl.onplay = e => {
                    btnPlay.hide();
                    btnPause.show();
                };

                audioEl.onpause = e => {
                    audioDuration.innerHTML = Format.toTime(this.duration * 1000);
                    btnPlay.show();
                    btnPause.hide();
                };

                audioEl.ontimeupdate = e => {
                    btnPause.hide();
                    btnPlay.hide();

                    audioDuration.innerHTML = Format.toTime(audioEl.currentTime * 1000);
                    inputRange.value = audioEl.currentTime * 100 / this.duration;

                    if(audioEl.paused) {
                        btnPlay.show();
                    }
                    else {
                        btnPause.show();
                    }
                };

                audioEl.onended = e => {
                    audioEl.currentTime = 0;
                };

                btnPlay.on('click', e => {
                    audioEl.play();
                });

                btnPause.on('click', e => {
                    audioEl.pause();
                });

                inputRange.on('change', e => {
                    audioEl.currentTime = (inputRange.value * this.duration) / 100;
                });

                break;

            default:
                div.innerHTML = `
                    <div class="font-style _3DFk6 tail">
                        <span class="tail-container"></span>
                        <span class="tail-container highlight"></span>
                        <div class="Tkt2p">
                            <div class="_3zb-j ZhF0n">
                                <span dir="ltr" class="selectable-text invisible-space message-text">${this.content}</span>
                            </div>
                            <div class="_2f-RV">
                                <div class="_1DZAH">
                                    <span class="message-time">${Format.timeStampToTime(this.timeStamp)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        }

        let className = 'message-in';

        if (me) {
            className = 'message-out';
            div.querySelector('.message-time').parentElement.appendChild(this.getStatusViewElement());
        }

        div.firstElementChild.classList.add(className);

        return div;
    }

    static upload(file, from) {
        return Upload.send(file, from);
    }

    static sendDocument(chatId, from, file, filePreview, info) {
        return Message.send(chatId, from, 'document', '').then(msgRef => {
            Message.upload(file, from).then(uploadTask => {
                uploadTask.ref.getDownloadURL().then(downloadURL => {
                    let downloadFile = downloadURL;

                    if (filePreview) {
                        Message.upload(filePreview, from).then(uploadTask2 => {
                            uploadTask2.ref.getDownloadURL().then(downloadURL2 => {
                                let downloadPreview = downloadURL2;

                                msgRef.set({
                                    content: downloadFile,
                                    preview: downloadPreview,
                                    fileName: file.name,
                                    size: file.size,
                                    fileType: file.type,
                                    status: 'sent',
                                    info
                                }, {
                                        merge: true
                                    });
                            });
                        });
                    }
                    else {
                        msgRef.set({
                            content: downloadFile,
                            fileName: file.name,
                            size: file.size,
                            fileType: file.type,
                            status: 'send'
                        }, {
                                merge: true
                            });
                    }
                });
            });
        });
    }

    static sendImage(chatId, from, file) {
        return new Promise((s, f) => {
            Message.upload(file, from).then(uploadTask => {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    Message.send(chatId, from, 'image', downloadURL).then(() => {
                        s();
                    });
                });
            });
        });
    }

    static send(chatId, from, type, content) {
        return new Promise((s, f) => {
            Message.getRef(chatId).add({
                content,
                timeStamp: new Date(),
                status: 'wait',
                type,
                from
            }).then(result => {
                let docRef = result.parent.doc(result.id);

                docRef.set({
                    status: 'sent'
                },
                    {
                        merge: true
                    }).then(() => {
                        s(docRef);
                    });
            });
        });
    }

    static sendAudio(chatId, from, file, metadata, photo) {
        return Message.send(chatId, from, 'audio', '').then(msgRef => {
            Message.upload(file, from).then(uploadTask => {
                uploadTask.ref.getDownloadURL().then(downloadURL => {
                    msgRef.set({
                        content: downloadURL,
                        size: file.size,
                        fileType: file.type,
                        status: 'sent',
                        photo,
                        duration: metadata.duration
                    }, {
                            merge: true
                        });
                });
            });
        });
    }

    static sendContact(chatId, from, contact) {
        return Message.send(chatId, from, 'contact', contact);
    }

    static getRef(chatId) {
        return Firebase.db().collection('chats').doc(chatId).collection('messages');
    }

    getStatusViewElement() {
        let div = document.createElement('div');

        div.className = 'message-status';

        switch (this.status) {
            case 'wait':
                div.innerHTML = `
                    <span data-icon="msg-time">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                            <path fill="#859479" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path>
                        </svg>
                    </span>
                `;
                break;
            case 'sent':
                div.innerHTML = `
                    <span data-icon="msg-check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                            <path fill="#859479" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                        </svg>
                    </span>
                `;
                break;
            case 'received':
                div.innerHTML = `
                    <span data-icon="msg-dblcheck">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                            <path fill="#92A58C" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                        </svg>
                    </span>
                `;
                break;
            case 'read':
                div.innerHTML = `
                    <span data-icon="msg-dblcheck-ack">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                            <path fill="#4FC3F7" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                        </svg>
                    </span>
                `;
                break;
        }

        return div;
    }
}