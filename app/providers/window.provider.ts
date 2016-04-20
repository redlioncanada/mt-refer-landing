import {provide} from 'angular2/core';
export const WindowProvider = provide(Window, { useValue: window });