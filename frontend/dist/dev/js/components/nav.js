var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { navElements } from '../data/nav';
let MainNav = class MainNav extends LitElement {
    #activeClass = 'nav-elem-active';
    constructor() {
        super();
    }
    createRenderRoot() {
        return this; // prevents creating a shadow root
    }
    #click(event) {
        const target = event.target;
        const parent = target.parentNode;
        const isNav = target.classList.contains('nav-element');
        const element = isNav ? target : parent;
        const active = document.querySelector(`.${this.#activeClass}`);
        const isFooterElement = element.getAttribute('isNavFooter') === 'true';
        const clickViewEvent = new CustomEvent('viewSwitch', {
            detail: {
                name: element.getAttribute('name'),
            },
        });
        if (active) {
            active.classList.remove(this.#activeClass);
        }
        if (!isFooterElement) {
            element.classList.add(this.#activeClass);
        }
        return this.dispatchEvent(clickViewEvent);
    }
    #renderNavLogoBar() {
        return html `<header class="nav-header">
            <i class="fa fa-solid fa-2x fa-fw fa-bars hamburger-menu"></i>
            <img class="nav-logo" src="./assets/img/logos/${navElements.logo.src}" />
        </header>`;
    }
    #renderNavFooter() {
        const hasFooter = !!navElements.items.find(elem => elem.isNavFooter);
        if (!hasFooter) {
            return;
        }
        return html `<footer class="nav-footer">
            <img src="./assets/img/fallbacks/avatar.png" />
            <div name="profile" isNavFooter="true">
                <span>User Name</span>
                <small @click="${this.#click}" class="view-profile">View Profile</small>
            </div>
        </footer>`;
    }
    #renderNavItems() {
        const activeView = localStorage.getItem('active-view');
        return repeat(navElements.items, (elem) => {
            const [first, ...rest] = elem.name;
            const classes = activeView === elem.name ? this.#activeClass : '';
            if (!elem.viewable) {
                return;
            }
            return html `<div @click="${this.#click}" class="nav-element ${classes}" name="${elem.name}">
                <i class="fa-solid fa-${elem.icon} fa-fw mr-2"></i>
                <span>${first.toLocaleUpperCase()}${rest.join('')}</span>
            </div>`;
        });
    }
    render() {
        const navLogoBar = this.#renderNavLogoBar();
        const bottom = this.#renderNavFooter();
        const elements = this.#renderNavItems();
        return html `${navLogoBar}${elements}${bottom}`;
    }
};
MainNav = __decorate([
    customElement('main-nav')
], MainNav);
export default MainNav;