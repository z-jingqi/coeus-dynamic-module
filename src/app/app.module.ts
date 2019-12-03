import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ModuleManagerModule } from 'module-manager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleManagerModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
