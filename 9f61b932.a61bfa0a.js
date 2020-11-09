(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(82)),a={id:"session_storage",title:"Session Storage"},s={unversionedId:"configuration/session_storage",id:"configuration/session_storage",isDocsHomePage:!1,title:"Session Storage",description:"Sessions allow a user's authentication to be tracked between multiple HTTP",source:"@site/docs/configuration/sessions.md",slug:"/configuration/session_storage",permalink:"/oauth2-proxy/docs/next/configuration/session_storage",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/sessions.md",version:"current",sidebar:"docs",previous:{title:"OAuth Provider Configuration",permalink:"/oauth2-proxy/docs/next/configuration/oauth_provider"},next:{title:"TLS Configuration",permalink:"/oauth2-proxy/docs/next/configuration/tls"}},c=[{value:"Cookie Storage",id:"cookie-storage",children:[]},{value:"Redis Storage",id:"redis-storage",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sessions allow a user's authentication to be tracked between multiple HTTP\nrequests to a service."),Object(o.b)("p",null,"The OAuth2 Proxy uses a Cookie to track user sessions and will store the session\ndata in one of the available session storage backends."),Object(o.b)("p",null,"At present the available backends are (as passed to ",Object(o.b)("inlineCode",{parentName:"p"},"--session-store-type"),"):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#cookie-storage"}),"cookie")," (default)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#redis-storage"}),"redis"))),Object(o.b)("h3",{id:"cookie-storage"},"Cookie Storage"),Object(o.b)("p",null,"The Cookie storage backend is the default backend implementation and has\nbeen used in the OAuth2 Proxy historically."),Object(o.b)("p",null,"With the Cookie storage backend, all session information is stored in client\nside cookies and transferred with each and every request."),Object(o.b)("p",null,"The following should be known when using this implementation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Since all state is stored client side, this storage backend means that the OAuth2 Proxy is completely stateless"),Object(o.b)("li",{parentName:"ul"},"Cookies are signed server side to prevent modification client-side"),Object(o.b)("li",{parentName:"ul"},"It is mandatory to set a ",Object(o.b)("inlineCode",{parentName:"li"},"cookie-secret")," which will ensure data is encrypted within the cookie data."),Object(o.b)("li",{parentName:"ul"},"Since multiple requests can be made concurrently to the OAuth2 Proxy, this session implementation\ncannot lock sessions and while updating and refreshing sessions, there can be conflicts which force\nusers to re-authenticate")),Object(o.b)("h3",{id:"redis-storage"},"Redis Storage"),Object(o.b)("p",null,"The Redis Storage backend stores sessions, encrypted, in redis. Instead sending all the information\nback the the client for storage, as in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#cookie-storage"}),"Cookie storage"),", a ticket is sent back\nto the user as the cookie value instead."),Object(o.b)("p",null,"A ticket is composed as the following:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"{CookieName}-{ticketID}.{secret}")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"CookieName")," is the OAuth2 cookie name (_oauth2_proxy by default)"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"ticketID")," is a 128 bit random number, hex-encoded"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"secret")," is a 128 bit random number, base64url encoded (no padding). The secret is unique for every session."),Object(o.b)("li",{parentName:"ul"},"The pair of ",Object(o.b)("inlineCode",{parentName:"li"},"{CookieName}-{ticketID}")," comprises a ticket handle, and thus, the redis key\nto which the session is stored. The encoded session is encrypted with the secret and stored\nin redis via the ",Object(o.b)("inlineCode",{parentName:"li"},"SETEX")," command.")),Object(o.b)("p",null,"Encrypting every session uniquely protects the refresh/access/id tokens stored in the session from\ndisclosure."),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"When using the redis store, specify ",Object(o.b)("inlineCode",{parentName:"p"},"--session-store-type=redis")," as well as the Redis connection URL, via\n",Object(o.b)("inlineCode",{parentName:"p"},"--redis-connection-url=redis://host[:port][/db-number]"),"."),Object(o.b)("p",null,"You may also configure the store for Redis Sentinel. In this case, you will want to use the\n",Object(o.b)("inlineCode",{parentName:"p"},"--redis-use-sentinel=true")," flag, as well as configure the flags ",Object(o.b)("inlineCode",{parentName:"p"},"--redis-sentinel-master-name"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"--redis-sentinel-connection-urls")," appropriately."),Object(o.b)("p",null,"Redis Cluster is available to be the backend store as well. To leverage it, you will need to set the\n",Object(o.b)("inlineCode",{parentName:"p"},"--redis-use-cluster=true")," flag, and configure the flags ",Object(o.b)("inlineCode",{parentName:"p"},"--redis-cluster-connection-urls")," appropriately."),Object(o.b)("p",null,"Note that flags ",Object(o.b)("inlineCode",{parentName:"p"},"--redis-use-sentinel=true")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--redis-use-cluster=true")," are mutually exclusive."))}u.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,h=b["".concat(a,".").concat(p)]||b[p]||d[p]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);