import Format from './../util/Format';
import CameraController from './CameraController';
import MicrophoneController from './MicrophoneController';
import DocumentPreviewController from './DocumentPreviewController';
import ContactsController from './ContactsController';
import Firebase from './../util/Firebase';
import User from './../model/User';
import Chat from './../model/Chat';
import Message from './../model/Message';
import Base64 from '../util/Base64';
import Upload from '../util/Upload';

export default class WhatsAppController {

    constructor() {
        this._active = true;
        this._firebase = new Firebase();
        this.initAuth();
        this.elementsPrototype();
        this.loadElements();
        this.initEvents();
        this.checkNotifications();
    }

    checkNotifications() {
        if (typeof Notification === 'function') {
            if (Notification.permission !== 'granted') {
                this.el.alertNotificationPermission.show();
            }
            else {
                this.el.alertNotificationPermission.hide();
            }

            this.el.alertNotificationPermission.on('click', e => {
                Notification.requestPermission(permission => {
                    if (permission === 'granted') {
                        this.el.alertNotificationPermission.hide();


                    }
                });
            });
        }
    }

    notification(data) {
        if (Notification.permission === 'granted' && !this._active) {
            let n = new Notification(this._contactActive.name, {
                icon: this._contactActive.photo,
                body: data.content
            });

            let sound = new Audio('./audio/alert.mp3');
            sound.currentTime = 0;
            sound.play();

            //Close notification after 3 seconds.
            setTimeout(() => {
                if (n) n.close();
            }, 3000);
        }
    }

    initAuth() {
        this._firebase.initAuth().then(response => {
            this._user = new User(response.user.email);

            this._user.on('datachange', data => {
                document.querySelector('title').innerHTML = data.name + ' - WhatsApp';

                this.el.inputNamePanelEditProfile.innerHTML = data.name;

                if (data.photo) {
                    let photo = this.el.imgPanelEditProfile;
                    photo.src = data.photo;
                    photo.show();

                    this.el.imgDefaultPanelEditProfile.hide();
                    let photoMini = this.el.myPhoto.querySelector('img');
                    photoMini.src = data.photo;
                    photoMini.show();
                }

                this.initContacts();

            });

            this._user.name = response.user.displayName;
            this._user.email = response.user.email;
            this._user.photo = response.user.photoURL;

            this._user.save().then(() => {
                this.el.appContent.css({
                    display: 'flex'
                });
            });

        }).catch(err => {
            console.error(err);
        });
    }

    initContacts() {
        //Element to copy each time that add a chat
        var contactItem = document.getElementById('contact-item');

        this._user.on('contactschange', docs => {
            this.el.contactsMessagesList.innerHTML = '';

            docs.forEach(doc => {
                let contact = doc.data();
                let div = contactItem.cloneNode(true);

                //Change the contact-item to new contact
                if (contact.photo) {
                    let img = div.querySelector('.photo');
                    img.src = contact.photo;
                    img.show();
                }

                let name = div.querySelector('._1wjpf');
                name.innerHTML = contact.name;

                let messageTime = div.querySelector('._3T2VG');
                messageTime.innerHTML = Format.timeStampToTime(contact.lastMessageTime);

                let lastMessage = div.querySelector('._3NFp9');
                lastMessage.innerHTML = contact.lastMessage;

                div.on('click', e => {
                    this.setActiveChat(contact);
                });

                this.el.contactsMessagesList.appendChild(div);
            });
        });

        this._user.getContacts();
    }

    elementsPrototype() {
        Element.prototype.hide = function () {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function () {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggleClass = function () {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.toggle = function () {
            this.classList.contains('open') ? this.classList.remove('open') : this.classList.add('open');
            return this;
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);
        }

        HTMLFormElement.prototype.getForm = function () {
            return new FormData(this);
        }

        HTMLFormElement.prototype.toJSON = function () {
            let json = {};

            this.getForm().forEach((value, key) => {
                json[key] = value;
            });

            return json;
        }
    }

    loadElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element;
        });
    }

    initEvents() {
        window.addEventListener('focus', e => {
            this._active = true;
        });

        window.addEventListener('blur', e => {
            this._active = false;
        });

        this.el.inputSearchContacts.on('keyup', e => {
            if (this.el.inputSearchContacts.value.length > 0) {
                this.el.inputSearchContactsPlaceholder.hide();
            }
            else {
                this.el.inputSearchContactsPlaceholder.show();
            }

            this._user.getContacts(this.el.inputSearchContacts.value);
        });

        this.el.myPhoto.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 300);
        });

        this.el.btnNewContact.on('click', e => {
            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 300);
        });

        this.el.btnClosePanelEditProfile.on('click', e => {
            this.el.panelEditProfile.show();
            this.el.panelEditProfile.removeClass('open');
        });

        this.el.btnClosePanelAddContact.on('click', e => {
            this.el.panelAddContact.removeClass('open');
        });

        this.el.photoContainerEditProfile.on('click', e => {
            this.el.inputProfilePhoto.click();
        });

        this.el.inputProfilePhoto.on('change', e => {
            if (this.el.inputProfilePhoto.files.length > 0) {
                let file = this.el.inputProfilePhoto.files[0];
                Upload.send(file, this._user.email).then(uploadTask => {
                    uploadTask.ref.getDownloadURL().then(downloadURL => {
                        this._user.photo = downloadURL;
                        this._user.save().then(() => {
                            this.el.btnClosePanelEditProfile.click();
                        });
                    });
                });
            }
        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();
            }
        });

        this.el.btnSavePanelEditProfile.on('click', e => {
            this.el.btnSavePanelEditProfile.disabled = true;
            this._user.name = this.el.inputNamePanelEditProfile.innerHTML;
            this._user.save().then(() => {
                this.el.btnSavePanelEditProfile.disabled = false;
            });
        });

        this.el.formPanelAddContact.on('submit', e => {
            e.preventDefault();
            let formData = new FormData(this.el.formPanelAddContact);

            //Verify if the new contact exists.
            let contact = new User(formData.get('email'));

            contact.on('datachange', data => {
                if (data.name) {
                    Chat.createIfNotExists(this._user.email, contact.email).then(chat => {
                        contact.chatId = chat.id;
                        this._user.chatId = chat.id;

                        contact.addContact(this._user);

                        this._user.addContact(contact).then(() => {
                            this.el.btnClosePanelAddContact.click();
                        }).catch(err => {
                            console.error(err);
                        });
                    });
                }
                else {
                    console.error('Usuário não encontrado!');
                }
            });
        });

        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {
            item.on('click', e => {
                this.el.home.hide();
                this.el.main.css({
                    display: 'flex'
                });
            })
        });

        this.el.btnAttach.on('click', e => {
            e.stopPropagation();
            this.el.menuAttach.addClass('open');
            document.addEventListener('click', this.closeMenuAttach.bind(this));
        });

        this.el.btnAttachPhoto.on('click', e => {
            this.el.inputPhoto.click();
        });

        this.el.inputPhoto.on('change', e => {
            [...this.el.inputPhoto.files].forEach(file => {
                Message.sendImage(this._contactActive.chatId, this._user.email, file);
            });
        });

        this.el.btnAttachCamera.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelCamera.addClass('open');
            this.el.panelCamera.css({
                height: 'calc(100% - 120px)'
            });

            this._camera = new CameraController(this.el.videoCamera);
        });

        this.el.btnClosePanelCamera.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();
            this._camera.stop();
        });

        this.el.btnTakePicture.on('click', e => {
            let dataUrl = this._camera.takePicture();
            this.el.pictureCamera.src = dataUrl;
            this.el.pictureCamera.show();
            this.el.videoCamera.hide();
            this.el.btnReshootPanelCamera.show();
            this.el.containerTakePicture.hide();
            this.el.containerSendPicture.show();
        });

        this.el.btnSendPicture.on('click', e => {
            this.el.btnSendPicture.disabled = true;

            let result = this.el.pictureCamera.src.split(';');

            let mimeType = result[0].split(':')[1];
            let ext = mimeType.split('/')[1];
            let filename = `camera${Date.now()}.${ext}`;

            //Image flip
            let picture = new Image();
            picture.src = this.el.pictureCamera.src;
            picture.onload = e => {
                let canvas = document.createElement('canvas');
                let context = canvas.getContext('2d');

                canvas.width = picture.width;
                canvas.height = picture.height;

                context.translate(picture.width, 0);
                context.scale(-1, 1);

                context.drawImage(picture, 0, 0, canvas.width, canvas.height);

                fetch(canvas.toDataURL(mimeType))
                    .then(res => { return res.arrayBuffer(); })
                    .then(buffer => { return new File([buffer], filename, { type: mimeType }); })
                    .then(file => {
                        Message.sendImage(this._contactActive.chatId, this._user.email, file);
                        this.el.btnSendPicture.disabled = false;
                        this.closeAllMainPanel();
                        this._camera.stop();
                        this.el.btnReshootPanelCamera.hide();
                        this.el.pictureCamera.hide();
                        this.el.videoCamera.show();
                        this.el.containerSendPicture.hide();
                        this.el.containerTakePicture.show();
                        this.el.panelMessagesContainer.show();
                    });
            }
        });

        this.el.btnReshootPanelCamera.on('click', e => {
            this.el.pictureCamera.hide();
            this.el.videoCamera.show();
            this.el.btnReshootPanelCamera.hide();
            this.el.containerTakePicture.show();
            this.el.containerSendPicture.hide();
        });

        this.el.btnAttachDocument.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelDocumentPreview.addClass('open');
            this.el.panelDocumentPreview.css({
                height: 'calc(100% - 120px)'
            });

            this.el.inputDocument.click();
        });

        this.el.inputDocument.on('change', e => {
            if (this.el.inputDocument.files.length) {
                this.el.panelDocumentPreview.css({
                    height: '1%'
                });

                let file = this.el.inputDocument.files[0];
                this._documentPreviewController = new DocumentPreviewController(file);
                this._documentPreviewController.getPreviewData().then(result => {
                    this.el.imgPanelDocumentPreview.src = result.src;
                    this.el.infoPanelDocumentPreview.innerHTML = result.info;
                    this.el.imagePanelDocumentPreview.show();
                    this.el.filePanelDocumentPreview.hide();

                    this.el.panelDocumentPreview.css({
                        height: 'calc(100% - 120px)'
                    });
                }).catch(err => {
                    this.el.panelDocumentPreview.css({
                        height: 'calc(100% - 120px)'
                    });

                    this.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-generic';
                    this.el.fileNamePanelDocumentPreview.innerHTML = file.name;
                    this.el.imgPanelDocumentPreview.hide();
                    this.el.filePanelDocumentPreview.show();
                });
            }
        });

        this.el.btnClosePanelDocumentPreview.on('click', e => {
            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();
        });

        this.el.btnSendDocument.on('click', e => {
            let file = this.el.inputDocument.files[0];
            let base64 = this.el.imgPanelDocumentPreview.src;

            if (file.type === 'application/pdf') {
                Base64.toFile(base64).then(filePreview => {
                    Message.sendDocument(this._contactActive.chatId, this._user.email, file, filePreview, this.el.infoPanelDocumentPreview.innerHTML);
                });
            }
            else {
                Message.sendDocument(this._contactActive.chatId, this._user.email, file);
            }

            this.el.btnClosePanelDocumentPreview.click();
        });

        this.el.btnAttachContact.on('click', e => {
            this._contactsController = new ContactsController(this.el.modalContacts, this._user);

            this._contactsController.on('select', contact => {
                Message.sendContact(this._contactActive.chatId, this._user.email, contact);
            });

            this._contactsController.open();
        });

        this.el.btnCloseModalContacts.on('click', e => {
            this._contactsController.close();
        });

        this.el.btnSendMicrophone.on('click', e => {
            this.el.recordMicrophone.show();
            this.el.btnSendMicrophone.hide();

            this._microphoneController = new MicrophoneController();

            this._microphoneController.on('ready', audio => {
                this._microphoneController.startRecorder();
            });

            this._microphoneController.on('recordTime', timer => {
                this.el.recordMicrophoneTimer.innerHTML = Format.toTime(timer);
            });
        });

        this.el.btnCancelMicrophone.on('click', e => {
            this._microphoneController.stopRecorder();
            this.closeRecordMicrophone();
        });

        this.el.btnFinishMicrophone.on('click', e => {
            this._microphoneController.on('recorder', (file, metadata) => {
                Message.sendAudio(this._contactActive.chatId, this._user.email, file, metadata, this._user.photo);
            });

            this._microphoneController.stopRecorder();
            this.closeRecordMicrophone();
        });

        this.el.inputText.on('keypress', e => {
            if (e.key === 'Enter' && !e.ctrlKey) {
                e.preventDefault();
                this.el.btnSend.click();
            }
        });

        this.el.inputText.on('keyup', e => {
            if (this.el.inputText.innerHTML.length) {
                this.el.inputPlaceholder.hide();
                this.el.btnSendMicrophone.hide();
                this.el.btnSend.show();
            }
            else {
                this.el.inputPlaceholder.show();
                this.el.btnSendMicrophone.show();
                this.el.btnSend.hide();
            }
        });

        this.el.btnSend.on('click', e => {
            Message.send(this._contactActive.chatId, this._user.email, 'text', this.el.inputText.innerHTML);

            this.el.inputText.innerHTML = '';
            this.el.panelEmojis.removeClass('open');
        });

        this.el.btnEmojis.on('click', e => {
            this.el.panelEmojis.toggle();
        });

        this.el.panelEmojis.querySelectorAll('.emojik').forEach(emoji => {
            emoji.on('click', e => {
                let img = this.el.imgEmojiDefault.cloneNode();

                img.style.cssText = emoji.style.cssText;
                img.dataset.unicode = emoji.dataset.unicode;
                img.alt = emoji.dataset.unicode;

                emoji.classList.forEach(name => {
                    img.classList.add(name);
                });

                let cursor = window.getSelection();

                if (!cursor.focusNode || cursor.focusNode.id !== 'input-text') {
                    this.el.inputText.focus();
                    cursor = window.getSelection();
                }

                let range = document.createRange();
                range = cursor.getRangeAt(0);
                range.deleteContents();

                let frag = document.createDocumentFragment();
                frag.appendChild(img);

                range.insertNode(frag);
                range.setStartAfter(img);

                this.el.inputText.dispatchEvent(new Event('keyup'));
            });
        });
    }

    setActiveChat(contact) {

        //Turn off the last active contact snapshot.
        if (this._contactActive) {
            Message.getRef(this._contactActive.chatId).onSnapshot(() => { });
        }

        this._contactActive = contact;

        this.el.activeName.innerHTML = contact.name;
        this.el.activeStatus.innerHTML = contact.status;
        if (contact.photo) {
            let img = this.el.activePhoto;
            img.src = contact.photo;
            img.show();
        }

        this.el.home.hide();
        this.el.main.css({
            display: 'flex'
        });

        this.el.panelMessagesContainer.innerHTML = '<br/>';

        this._messagesReceived = [];

        Message.getRef(this._contactActive.chatId).orderBy('timeStamp').onSnapshot(docs => {
            //Verify the scroll behaviors
            let scrollTop = this.el.panelMessagesContainer.scrollTop;
            let scrollTopMax = this.el.panelMessagesContainer.scrollHeight - this.el.panelMessagesContainer.offsetHeight;
            let autoScroll = (scrollTop >= scrollTopMax);

            docs.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;

                let message = new Message();
                message.fromJSON(data);

                let me = (data.from === this._user.email);

                if (!me && this._messagesReceived.filter(id => id === data.id).length === 0) {
                    this.notification(data);
                    this._messagesReceived.push(data.id);
                }

                let view = message.getViewElement(me);

                if (!this.el.panelMessagesContainer.querySelector('#_' + data.id)) {

                    //Message read
                    if (!me) {
                        doc.ref.set({
                            status: 'read'
                        }, {
                                merge: true
                            });
                    }

                    this.el.panelMessagesContainer.appendChild(view);
                }
                else {
                    let parent = this.el.panelMessagesContainer.querySelector('#_' + data.id).parentNode;
                    parent.replaceChild(view, this.el.panelMessagesContainer.querySelector('#_' + data.id));
                }

                if (this.el.panelMessagesContainer.querySelector('#_' + data.id) && me) {
                    let msgEl = this.el.panelMessagesContainer.querySelector('#_' + data.id);
                    msgEl.querySelector('.message-status').innerHTML = message.getStatusViewElement().outerHTML;
                }

                if (message.type === 'contact') {
                    view.querySelector('.btn-message-send').on('click', e => {
                        Chat.createIfNotExists(this._user.email, message.content.email).then(chat => {
                            let contact = new User(message.content.email);

                            contact.on('datachange', data => {
                                contact.chatId = chat.id;
                                this._user.addContact(contact);
                                this._user.chatId = chat.id;

                                contact.addContact(this._user);

                                this._user.addContact(contact);
                                this.setActiveChat(contact);
                            });
                        });
                    });
                }
            });

            if (autoScroll) {
                this.el.panelMessagesContainer.scrollTop = this.el.panelMessagesContainer.scrollHeight - this.el.panelMessagesContainer.offsetHeight;
            }
            else {
                this.el.panelMessagesContainer.scrollTop = scrollTop;
            }
        });
    }

    closeRecordMicrophone() {
        this.el.recordMicrophone.hide();
        this.el.btnSendMicrophone.show();
    }

    closeAllMainPanel() {
        this.el.panelMessagesContainer.hide();
        this.el.panelDocumentPreview.removeClass('open');
        this.el.panelCamera.removeClass('open');
    }

    closeMenuAttach(e) {
        document.removeEventListener('click', this.closeMenuAttach);
        this.el.menuAttach.removeClass('open');
    }

    closeAllLeftPanel() {
        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();
    }

}
