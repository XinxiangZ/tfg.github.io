import './polyfills.server.mjs';
import{A as c,B as K,C as J,D as A,E,F,G as w,H as k,J as pe,O as ge,Q as me,R as ye,S as Q,U as ve,V as _e,W as Ce,X as Ve,_ as De,a as ue,b as de,c as ce,d as N,e as D,ea as be,f as W,g as $,h as v,i as b,j as P,k as q,l as h,m as he,n as z,o as Z,p as M,q as f,r as a,s as X,t as g,u as fe,v as Y,w as u,x as l,y as _,z as m}from"./chunk-FHN3NJQL.mjs";import{a as p,b as y}from"./chunk-VVCT4QZE.mjs";var Oe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(X),a(Z))},e.\u0275dir=h({type:e});let t=e;return t})(),Ne=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=z(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[g]});let t=e;return t})(),te=new v(""),it={provide:te,useExisting:D(()=>ie),multi:!0},ie=(()=>{let e=class e extends Ne{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=z(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&m("change",function(s){return o.onChange(s.target.checked)})("blur",function(){return o.onTouched()})},features:[w([it]),g]});let t=e;return t})(),nt={provide:te,useExisting:D(()=>H),multi:!0};function rt(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ot=new v(""),H=(()=>{let e=class e extends Oe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!rt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(X),a(Z),a(ot,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[w([nt]),g]});let t=e;return t})();var Pe=new v(""),ke=new v("");function Te(t){return t!=null}function Ge(t){return pe(t)?ue(t):t}function je(t){let e={};return t.forEach(n=>{e=n!=null?p(p({},e),n):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(n=>n(t))}function st(t){return!t.validate}function Be(t){return t.map(e=>st(e)?e:n=>e.validate(n))}function at(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){return je(Re(n,e))}}function ne(t){return t!=null?at(Be(t)):null}function lt(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){let i=Re(n,e).map(Ge);return ce(i).pipe(de(je))}}function re(t){return t!=null?lt(Be(t)):null}function Me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function ee(t){return t?Array.isArray(t)?t:[t]:[]}function G(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ae(t,e){let n=ee(e);return ee(t).forEach(r=>{G(n,r)||n.push(r)}),n}function Ee(t,e){return ee(e).filter(n=>!G(t,n))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=re(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},V=class extends j{get formDirective(){return null}get path(){return null}},O=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Jt=y(p({},ct),{"[class.ng-submitted]":"isSubmitted"}),Ue=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(O,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[g]});let t=e;return t})(),He=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(V,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Y("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[g]});let t=e;return t})();var I="VALID",T="INVALID",C="PENDING",S="DISABLED";function Le(t){return(L(t)?t.validators:t)||null}function ht(t){return Array.isArray(t)?ne(t):t||null}function We(t,e){return(L(e)?e.asyncValidators:t)||null}function ft(t){return Array.isArray(t)?re(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function pt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function gt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var B=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===T}get pending(){return this.status==C}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(y(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(y(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let n=Ge(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(T)?T:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}},U=class extends B{constructor(e,n,i){super(Le(n),We(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){gt(this,!0,e),Object.keys(e).forEach(i=>{pt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var oe=new v("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function mt(t,e){return[...e.path,t]}function $e(t,e,n=se){qe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),vt(t,e),Ct(t,e),_t(t,e),yt(t,e)}function Fe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function yt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function qe(t,e){let n=ut(t);e.validator!==null?t.setValidators(Me(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=dt(t);e.asyncValidator!==null?t.setAsyncValidators(Me(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Fe(e._rawValidators,r),Fe(e._rawAsyncValidators,r)}function vt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ze(t,e)})}function _t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ze(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ze(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ct(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Vt(t,e){t==null,qe(t,e)}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===Ne}function Mt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function At(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===H?n=o:bt(o)?i=o:r=o}),r||i||n||null}var Et={provide:V,useExisting:D(()=>ae)},x=Promise.resolve(),ae=(()=>{let e=class e extends V{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new M,this.form=new U({},ne(i),re(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){x.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),$e(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){x.then(()=>{let r=this._findContainer(i.path),o=new U({});Vt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){x.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Mt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Pe,10),a(ke,10),a(oe,8))},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&m("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[b.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[w([Et]),g]});let t=e;return t})();function we(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ft=class extends B{constructor(e=null,n,i){super(Le(n),We(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt={provide:O,useExisting:D(()=>le)},Se=Promise.resolve(),le=(()=>{let e=class e extends O{constructor(i,r,o,d,s,tt){super(),this._changeDetectorRef=s,this.callSetDisabledState=tt,this.control=new Ft,this._registered=!1,this.name="",this.update=new M,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=At(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Dt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$e(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Se.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&me(r);Se.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?mt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(V,9),a(Pe,10),a(ke,10),a(te,10),a(ge,8),a(oe,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"],options:[b.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[w([wt]),g,he]});let t=e;return t})(),Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var It=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=q({type:e}),e.\u0275inj=$({});let t=e;return t})();var Xe=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:oe,useValue:i.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=q({type:e}),e.\u0275inj=$({imports:[It]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(i){this.http=i,this.textInput="",this.selectedOptionSintactica=!1,this.selectedOptionLexica=!1,this.selectedOptionResumen=!1,this.respuesta="",this.respuesta2="",this.respuesta3="",this.letterCount=0,this.isLimitReached=!1}submitForm(){console.log(this.textInput),console.log(this.selectedOptionSintactica),console.log(this.selectedOptionLexica),console.log(this.selectedOptionResumen),this.http.post("http://127.0.0.1:5000/api",{textInput:this.textInput,selectedOptionSintactica:this.selectedOptionSintactica,selectedOptionLexica:this.selectedOptionLexica,selectedOptionResumen:this.selectedOptionResumen}).subscribe(i=>{this.respuesta=i.generated_text,i.num_res==1?(this.respuesta2="",this.respuesta3=""):i.num_res==2?(this.respuesta2=i.text_1,this.respuesta3=""):i.num_res==3&&(this.respuesta2=i.text_1,this.respuesta3=i.text_2)})}countWords(){this.letterCount=this.textInput.length,this.isLimitReached=this.letterCount>5e3}};e.\u0275fac=function(r){return new(r||e)(a(ve))},e.\u0275cmp=P({type:e,selectors:[["app-formulario"]],standalone:!0,features:[k],decls:38,vars:9,consts:[[1,"topbar"],["id","barra"],["href","https://www.ucm.es/","title","Universidad Complutense de Madrid"],["src","https://biblioteca.ucm.es/data/cont/docs/60-2016-09-20-Marca%20UCM%20Secundaria%20logo%20negro%20RGB.jpg","alt","ucm","title","Universidad Complutense de Madrid",2,"width","20%","height","20%","margin","2%"],["href","https://informatica.ucm.es/","title","Facultad de Inform\xE1tica de Universidad Complutense de Madrid"],["src","https://informatica.ucm.es/data/cont/media/www/pag-78821/escudofdigrande.png","alt","ucm","title","Facultad de Inform\xE1tica","align","right",2,"width","5%","height","5%","margin","2%"],[1,"container"],[1,"input-area"],[2,"margin-bottom","5px"],[3,"ngSubmit"],["type","checkbox","name","option1",3,"ngModelChange","ngModel"],["type","checkbox","name","option2",3,"ngModelChange","ngModel"],["type","checkbox","name","option3",3,"ngModelChange","ngModel"],[1,"textarea-container"],["type","text","placeholder","Introducir texto para simplificar...","name","inputext",3,"ngModelChange","input","ngModel","disabled"],[1,"word-count"],["type","submit"],[1,"output-area"],["id","translated-text","readonly","",2,"margin-top","3.5%","background-color","#f5f5f5"]],template:function(r,o){r&1&&(u(0,"div",0),_(1,"div",1),u(2,"a",2),_(3,"img",3),l(),u(4,"a",4),_(5,"img",5),l()(),u(6,"header")(7,"h1"),c(8,"Sistema de simplificaci\xF3n de textos en espa\xF1ol"),l()(),u(9,"div",6)(10,"div",7)(11,"h3",8),c(12,"Texto a simplificar"),l(),u(13,"form",9),m("ngSubmit",function(){return o.submitForm()}),u(14,"label")(15,"input",10),F("ngModelChange",function(s){return E(o.selectedOptionSintactica,s)||(o.selectedOptionSintactica=s),s}),l(),c(16," Sint\xE1ctica "),l(),u(17,"label")(18,"input",11),F("ngModelChange",function(s){return E(o.selectedOptionLexica,s)||(o.selectedOptionLexica=s),s}),l(),c(19," L\xE9xica "),l(),u(20,"label")(21,"input",12),F("ngModelChange",function(s){return E(o.selectedOptionResumen,s)||(o.selectedOptionResumen=s),s}),l(),c(22," Resumen "),l(),u(23,"div",13)(24,"textarea",14),F("ngModelChange",function(s){return E(o.textInput,s)||(o.textInput=s),s}),m("input",function(){return o.countWords()}),l(),u(25,"div",15),c(26),l()(),u(27,"button",16),c(28,"Simplificar"),l()(),u(29,"p"),c(30),l(),u(31,"p"),c(32),l()(),u(33,"div",17)(34,"h3",8),c(35,"Texto simplificado"),l(),u(36,"textarea",18),c(37),l()()()),r&2&&(f(15),A("ngModel",o.selectedOptionSintactica),f(3),A("ngModel",o.selectedOptionLexica),f(3),A("ngModel",o.selectedOptionResumen),f(3),A("ngModel",o.textInput),fe("disabled",o.isLimitReached),f(2),J("",o.letterCount," / 5000"),f(4),K(o.respuesta2),f(2),K(o.respuesta3),f(5),J("",o.respuesta,">"))},dependencies:[Xe,Ze,H,ie,Ue,He,le,ae,_e],styles:["body[_ngcontent-%COMP%]{font-family:Quattrocento-Sans;margin:0;padding:0;background-color:#fff}.center[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:50%}#topbar[_ngcontent-%COMP%]{margin:0;padding:0;border:1px solid #ddd}#barra[_ngcontent-%COMP%]{position:fixed;box-shadow:0 0 16px #454545;top:0;height:20px;width:100%;padding:0;margin:0;background-color:#d9dadb;background-color:#454545;font-family:NotoSans;font-size:.75em}.container[_ngcontent-%COMP%]{max-width:90%;margin:20px auto;background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 0 10px #0000001a;display:flex;justify-content:space-between;flex-flow:row nowrap}header[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{margin:0;padding:0}main[_ngcontent-%COMP%]{margin-top:20px}.input-area[_ngcontent-%COMP%], .output-area[_ngcontent-%COMP%]{width:45%;padding:15px;border-radius:5px}.textarea-container[_ngcontent-%COMP%]{position:relative}textarea[_ngcontent-%COMP%]{width:95%;border:1px solid #ccc;resize:vertical;height:150px;padding:10px;border-radius:5px}.word-count[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:10px;background-color:#fffc;padding:3px 8px;border-radius:5px}button[_ngcontent-%COMP%]{background:#818181;background-image:linear-gradient(to top,#454545,#818181);border:0;display:inline-table;margin-top:1%;cursor:pointer;color:#fff;box-shadow:0 1px 1px #555 inset;padding:.3em .9em;font-size:100%;box-sizing:border-box;border-radius:5px;font-weight:400;text-decoration:none}button[_ngcontent-%COMP%]:hover{background-color:#818181}button[_ngcontent-%COMP%]:focus{outline:none}"]}),e.\u0275prov=W({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ke=(()=>{let e=class e{constructor(){this.title="Simplificaci\xF3n"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=P({type:e,selectors:[["app-root"]],standalone:!0,features:[k],decls:1,vars:0,template:function(r,o){r&1&&_(0,"app-formulario")},dependencies:[Ye]});let t=e;return t})();var Je=[];var Qe={providers:[be(Je),Ve()]};var xt={providers:[De()]},et=ye(Qe,xt);var Ot=()=>Ce(Ke,et),_i=Ot;export{_i as a};