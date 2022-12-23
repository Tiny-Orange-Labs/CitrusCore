var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { client } from '../data/misc';
import toast from '../misc/toast';
import { localized, msg } from '@lit/localize';
import { capitalize } from '../utilities/text/text';
let LoginLayout = class LoginLayout extends LitElement {
    constructor() {
        super();
    }
    createRenderRoot() {
        return this; // prevents creating a shadow root
    }
    async #sendRequest(username, password) {
        const request = await fetch('/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: {
                    username,
                    password,
                },
                client,
            }),
        });
        const json = await request.json();
        if (!json.auth) {
            return toast('danger', msg('Wrong Password or Username'), msg('Your Username or Password is wrong'));
        }
        console.log(json);
    }
    async #loginClick() {
        const unsernameInput = this.querySelector('#username');
        const username = (unsernameInput?.value || '').toLocaleLowerCase().trim();
        const passwordInput = this.querySelector('#password');
        const password = passwordInput?.value || '';
        if (username !== '' && password !== '') {
            return this.#sendRequest(username, password);
        }
        else {
            toast('warning', msg('Credentials are Empty'), msg('Please fill in Username and Password'));
        }
    }
    render() {
        return html `<div></div>
            <div class="flex flex-col justify-center gap-2">
                <div>
                    <p class="text-2xl">Login</p>
                    <p>Your Account</p>
                </div>

                <sl-input id="username" label="${capitalize(msg('username'))}:" autofocus>
                    <sl-icon name="person-circle" placeholder="Max Musterman" slot="prefix"></sl-icon>
                </sl-input>
                <sl-input
                    id="password"
                    label="${capitalize(msg('password'))}:"
                    placeholder="*****"
                    type="password"
                    password-toggle
                >
                    <sl-icon name="unlock" slot="prefix"></sl-icon>
                </sl-input>

                <div class="flex items-center justify-between">
                    <sl-button @click="${this.#loginClick}">Login</sl-button>
                    <span class="cursor-pointer">Forget Password</span>
                </div>
            </div>`;
    }
};
LoginLayout = __decorate([
    localized(),
    customElement('login-layout')
], LoginLayout);
export default LoginLayout;