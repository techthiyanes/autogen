"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7945],{537:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var c=s(85893),i=s(11151);const t={sidebar_label:"redis_cache",title:"cache.redis_cache"},r=void 0,l={id:"reference/cache/redis_cache",title:"cache.redis_cache",description:"RedisCache",source:"@site/docs/reference/cache/redis_cache.md",sourceDirName:"reference/cache",slug:"/reference/cache/redis_cache",permalink:"/autogen/docs/reference/cache/redis_cache",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/cache/redis_cache.md",tags:[],version:"current",frontMatter:{sidebar_label:"redis_cache",title:"cache.redis_cache"},sidebar:"referenceSideBar",previous:{title:"in_memory_cache",permalink:"/autogen/docs/reference/cache/in_memory_cache"},next:{title:"base",permalink:"/autogen/docs/reference/coding/jupyter/base"}},d={},a=[{value:"RedisCache",id:"rediscache",level:2},{value:"__init__",id:"__init__",level:3},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"close",id:"close",level:3},{value:"__enter__",id:"__enter__",level:3},{value:"__exit__",id:"__exit__",level:3}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"rediscache",children:"RedisCache"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class RedisCache(AbstractCache)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Implementation of AbstractCache using the Redis database."}),"\n",(0,c.jsx)(n.p,{children:"This class provides a concrete implementation of the AbstractCache\ninterface using the Redis database for caching data."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"seed"})," ",(0,c.jsx)(n.em,{children:"Union[str, int]"})," - A seed or namespace used as a prefix for cache keys."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cache"})," ",(0,c.jsx)(n.em,{children:"redis.Redis"})," - The Redis client used for caching."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"init"}),"(self, seed, redis_url): Initializes the RedisCache with the given seed and Redis URL.\n_prefixed_key(self, key): Internal method to get a namespaced cache key.\nget(self, key, default=None): Retrieves an item from the cache.\nset(self, key, value): Sets an item in the cache."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"close(self)"})," - Closes the Redis client."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"__enter__(self)"})," - Context management entry.\n",(0,c.jsx)(n.strong,{children:"exit"}),"(self, exc_type, exc_value, traceback): Context management exit."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def __init__(seed: Union[str, int], redis_url: str)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Initialize the RedisCache instance."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"seed"})," ",(0,c.jsx)(n.em,{children:"Union[str, int]"})," - A seed or namespace for the cache. This is used as a prefix for all cache keys."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"redis_url"})," ",(0,c.jsx)(n.em,{children:"str"})," - The URL for the Redis server."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get(key: str, default: Optional[Any] = None) -> Optional[Any]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve an item from the Redis cache."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," ",(0,c.jsx)(n.em,{children:"str"})," - The key identifying the item in the cache."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default"})," ",(0,c.jsx)(n.em,{children:"optional"})," - The default value to return if the key is not found.\nDefaults to None."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"The deserialized value associated with the key if found, else the default value."}),"\n",(0,c.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def set(key: str, value: Any) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Set an item in the Redis cache."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," ",(0,c.jsx)(n.em,{children:"str"})," - The key under which the item is to be stored."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"value"})," - The value to be stored in the cache."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"The value is serialized using pickle before being stored in Redis."}),"\n",(0,c.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def close() -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Close the Redis client."}),"\n",(0,c.jsx)(n.p,{children:"Perform any necessary cleanup, such as closing network connections."}),"\n",(0,c.jsx)(n.h3,{id:"__enter__",children:"__enter__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def __enter__() -> Self\n"})}),"\n",(0,c.jsx)(n.p,{children:"Enter the runtime context related to the object."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"self"})," - The instance itself."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"__exit__",children:"__exit__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def __exit__(exc_type: Optional[Type[BaseException]],\n             exc_val: Optional[BaseException],\n             exc_tb: Optional[TracebackType]) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Exit the runtime context related to the object."}),"\n",(0,c.jsx)(n.p,{children:"Perform cleanup actions such as closing the Redis client."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"exc_type"})," - The exception type if an exception was raised in the context."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"exc_value"})," - The exception value if an exception was raised in the context."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"traceback"})," - The traceback if an exception was raised in the context."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var c=s(67294);const i={},t=c.createContext(i);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);