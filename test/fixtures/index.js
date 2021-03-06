import {AttrReflectionApp} from './attr-reflection-app';
import {BreakableApp} from './breakable-app';
import {ControlledApp} from './controlled-app';
import {CssNoShadowApp} from './css-no-shadow-app';
import {NestedApp, NestedChild} from './nested-app';
import {NestedPartialStateParent, NestedPartialStateChild} from './nested-partial-state-app';
import {ShadowDomApp} from './shadow-dom-app';
import {SimpleApp} from './simple-app';

customElements.define('attr-reflection-app', AttrReflectionApp);
customElements.define('breakable-app', BreakableApp);
customElements.define(`controlled-app`, ControlledApp);
customElements.define('css-no-shadow-app', CssNoShadowApp);
customElements.define('nested-app', NestedApp);
customElements.define('nested-child', NestedChild);
customElements.define(`nested-partial-state-parent`, NestedPartialStateParent);
customElements.define(`nested-partial-state-child`, NestedPartialStateChild);
customElements.define('shadow-dom-app', ShadowDomApp);
customElements.define('simple-app', SimpleApp);
