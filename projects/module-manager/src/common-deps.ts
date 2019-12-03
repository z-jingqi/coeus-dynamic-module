import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as manager from './public-api';

export const COMMON_DEPS = {
    '@angular/core': core,
    '@angular/common': common,
    '@angular/forms': forms,
    '@angular/router': router,
    'module-manager': manager,
    rxjs,
    tslib
};
