System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/index.js": [
      "lib/scripts/index.js"
    ],
    "build/login.js": [
      "lib/scripts/login.jsx!github:floatdrop/plugin-jsx@1.1.0.js",
      "npm:react@0.13.3.js",
      "npm:react@0.13.3/react.js",
      "npm:react@0.13.3/lib/React.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "npm:react@0.13.3/lib/EventPluginUtils.js",
      "npm:react@0.13.3/lib/ReactChildren.js",
      "npm:react@0.13.3/lib/ReactComponent.js",
      "npm:react@0.13.3/lib/ReactClass.js",
      "npm:react@0.13.3/lib/ReactContext.js",
      "npm:react@0.13.3/lib/ReactCurrentOwner.js",
      "npm:react@0.13.3/lib/ReactElement.js",
      "npm:react@0.13.3/lib/ReactElementValidator.js",
      "npm:react@0.13.3/lib/ReactDOM.js",
      "npm:react@0.13.3/lib/ReactDOMTextComponent.js",
      "npm:react@0.13.3/lib/ReactDefaultInjection.js",
      "npm:react@0.13.3/lib/ReactInstanceHandles.js",
      "npm:react@0.13.3/lib/ReactPerf.js",
      "npm:react@0.13.3/lib/ReactMount.js",
      "npm:react@0.13.3/lib/ReactPropTypes.js",
      "npm:react@0.13.3/lib/ReactReconciler.js",
      "npm:react@0.13.3/lib/ReactServerRendering.js",
      "npm:react@0.13.3/lib/Object.assign.js",
      "npm:react@0.13.3/lib/findDOMNode.js",
      "npm:react@0.13.3/lib/onlyChild.js",
      "npm:react@0.13.3/lib/ExecutionEnvironment.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:react@0.13.3/lib/EventConstants.js",
      "npm:react@0.13.3/lib/invariant.js",
      "npm:react@0.13.3/lib/PooledClass.js",
      "npm:react@0.13.3/lib/traverseAllChildren.js",
      "npm:react@0.13.3/lib/ReactFragment.js",
      "npm:react@0.13.3/lib/warning.js",
      "npm:react@0.13.3/lib/ReactUpdateQueue.js",
      "npm:react@0.13.3/lib/ReactErrorUtils.js",
      "npm:react@0.13.3/lib/ReactInstanceMap.js",
      "npm:react@0.13.3/lib/ReactLifeCycle.js",
      "npm:react@0.13.3/lib/ReactPropTypeLocations.js",
      "npm:react@0.13.3/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.13.3/lib/keyMirror.js",
      "npm:react@0.13.3/lib/keyOf.js",
      "npm:react@0.13.3/lib/emptyObject.js",
      "npm:react@0.13.3/lib/ReactNativeComponent.js",
      "npm:react@0.13.3/lib/getIteratorFn.js",
      "npm:react@0.13.3/lib/mapObject.js",
      "npm:react@0.13.3/lib/DOMPropertyOperations.js",
      "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.13.3/lib/ReactDOMComponent.js",
      "npm:react@0.13.3/lib/escapeTextContentForBrowser.js",
      "npm:react@0.13.3/lib/BeforeInputEventPlugin.js",
      "npm:react@0.13.3/lib/ChangeEventPlugin.js",
      "npm:react@0.13.3/lib/ClientReactRootIndex.js",
      "npm:react@0.13.3/lib/DefaultEventPluginOrder.js",
      "npm:react@0.13.3/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.13.3/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.13.3/lib/MobileSafariClickEventPlugin.js",
      "npm:react@0.13.3/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.13.3/lib/ReactDOMButton.js",
      "npm:react@0.13.3/lib/ReactDOMForm.js",
      "npm:react@0.13.3/lib/ReactDOMImg.js",
      "npm:react@0.13.3/lib/ReactDOMIframe.js",
      "npm:react@0.13.3/lib/ReactDOMInput.js",
      "npm:react@0.13.3/lib/ReactDOMIDOperations.js",
      "npm:react@0.13.3/lib/ReactDOMOption.js",
      "npm:react@0.13.3/lib/ReactDOMSelect.js",
      "npm:react@0.13.3/lib/ReactDOMTextarea.js",
      "npm:react@0.13.3/lib/ReactEventListener.js",
      "npm:react@0.13.3/lib/ReactInjection.js",
      "npm:react@0.13.3/lib/ReactReconcileTransaction.js",
      "npm:react@0.13.3/lib/SelectEventPlugin.js",
      "npm:react@0.13.3/lib/ServerReactRootIndex.js",
      "npm:react@0.13.3/lib/SimpleEventPlugin.js",
      "npm:react@0.13.3/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.13.3/lib/createFullPageComponent.js",
      "npm:react@0.13.3/lib/ReactDefaultPerf.js",
      "npm:react@0.13.3/lib/ReactRootIndex.js",
      "npm:react@0.13.3/lib/DOMProperty.js",
      "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.13.3/lib/ReactEmptyComponent.js",
      "npm:react@0.13.3/lib/ReactMarkupChecksum.js",
      "npm:react@0.13.3/lib/ReactUpdates.js",
      "npm:react@0.13.3/lib/containsNode.js",
      "npm:react@0.13.3/lib/getReactRootElementInContainer.js",
      "npm:react@0.13.3/lib/instantiateReactComponent.js",
      "npm:react@0.13.3/lib/setInnerHTML.js",
      "npm:react@0.13.3/lib/shouldUpdateReactComponent.js",
      "npm:react@0.13.3/lib/emptyFunction.js",
      "npm:react@0.13.3/lib/ReactRef.js",
      "npm:react@0.13.3/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.13.3/lib/isNode.js",
      "npm:process@0.10.1.js",
      "npm:react@0.13.3/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.13.3/lib/CSSPropertyOperations.js",
      "npm:react@0.13.3/lib/isEventSupported.js",
      "npm:react@0.13.3/lib/EventPropagators.js",
      "npm:react@0.13.3/lib/ReactMultiChild.js",
      "npm:react@0.13.3/lib/FallbackCompositionState.js",
      "npm:react@0.13.3/lib/SyntheticCompositionEvent.js",
      "npm:react@0.13.3/lib/SyntheticInputEvent.js",
      "npm:react@0.13.3/lib/EventPluginHub.js",
      "npm:react@0.13.3/lib/SyntheticEvent.js",
      "npm:react@0.13.3/lib/isTextInputElement.js",
      "npm:react@0.13.3/lib/SyntheticMouseEvent.js",
      "npm:react@0.13.3/lib/Transaction.js",
      "npm:react@0.13.3/lib/AutoFocusMixin.js",
      "npm:react@0.13.3/lib/LocalEventTrapMixin.js",
      "npm:react@0.13.3/lib/LinkedValueUtils.js",
      "npm:react@0.13.3/lib/DOMChildrenOperations.js",
      "npm:react@0.13.3/lib/EventListener.js",
      "npm:react@0.13.3/lib/getEventTarget.js",
      "npm:react@0.13.3/lib/getUnboundedScrollPosition.js",
      "npm:react@0.13.3/lib/ReactComponentEnvironment.js",
      "npm:react@0.13.3/lib/CallbackQueue.js",
      "npm:react@0.13.3/lib/ReactInputSelection.js",
      "npm:react@0.13.3/lib/ReactPutListenerQueue.js",
      "npm:react@0.13.3/lib/getActiveElement.js",
      "npm:react@0.13.3/lib/shallowEqual.js",
      "npm:react@0.13.3/lib/SyntheticClipboardEvent.js",
      "npm:react@0.13.3/lib/SyntheticFocusEvent.js",
      "npm:react@0.13.3/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.13.3/lib/SyntheticDragEvent.js",
      "npm:react@0.13.3/lib/SyntheticTouchEvent.js",
      "npm:react@0.13.3/lib/SyntheticUIEvent.js",
      "npm:react@0.13.3/lib/SyntheticWheelEvent.js",
      "npm:react@0.13.3/lib/getEventCharCode.js",
      "npm:react@0.13.3/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.13.3/lib/performanceNow.js",
      "npm:react@0.13.3/lib/EventPluginRegistry.js",
      "npm:react@0.13.3/lib/ReactEventEmitterMixin.js",
      "npm:react@0.13.3/lib/ViewportMetrics.js",
      "npm:react@0.13.3/lib/adler32.js",
      "npm:react@0.13.3/lib/isTextNode.js",
      "npm:react@0.13.3/lib/ReactCompositeComponent.js",
      "npm:react@0.13.3/lib/ReactOwner.js",
      "npm:process@0.10.1/browser.js",
      "npm:react@0.13.3/lib/camelizeStyleName.js",
      "npm:react@0.13.3/lib/dangerousStyleValue.js",
      "npm:react@0.13.3/lib/CSSProperty.js",
      "npm:react@0.13.3/lib/memoizeStringOnly.js",
      "npm:react@0.13.3/lib/hyphenateStyleName.js",
      "npm:react@0.13.3/lib/accumulateInto.js",
      "npm:react@0.13.3/lib/forEachAccumulated.js",
      "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.13.3/lib/ReactChildReconciler.js",
      "npm:react@0.13.3/lib/getTextContentAccessor.js",
      "npm:react@0.13.3/lib/getEventModifierState.js",
      "npm:react@0.13.3/lib/focusNode.js",
      "npm:react@0.13.3/lib/Danger.js",
      "npm:react@0.13.3/lib/ReactDOMSelection.js",
      "npm:react@0.13.3/lib/setTextContent.js",
      "npm:react@0.13.3/lib/getEventKey.js",
      "npm:react@0.13.3/lib/performance.js",
      "npm:react@0.13.3/lib/camelize.js",
      "npm:react@0.13.3/lib/hyphenate.js",
      "npm:react@0.13.3/lib/flattenChildren.js",
      "npm:react@0.13.3/lib/getMarkupWrap.js",
      "npm:react@0.13.3/lib/createNodesFromMarkup.js",
      "npm:react@0.13.3/lib/getNodeForCharacterOffset.js",
      "npm:react@0.13.3/lib/createArrayFromMixed.js",
      "npm:react@0.13.3/lib/toArray.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.1.1",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "react": "npm:react@0.13.3",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.8.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:browserify-aes@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.3": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "iconv-lite": "npm:iconv-lite@0.4.11",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.10.32",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "browserify-sign": "npm:browserify-sign@3.0.3",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.6.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.0",
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.3",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.32": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.11",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
