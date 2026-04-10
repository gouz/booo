#!/usr/bin/env bun
// @bun
var B2=Object.create;var{getPrototypeOf:l2,defineProperty:C0,getOwnPropertyNames:n2}=Object;var o2=Object.prototype.hasOwnProperty;function k2(F){return this[F]}var b2,D2,j0=(F,s,p)=>{var a=F!=null&&typeof F==="object";if(a){var c=s?b2??=new WeakMap:D2??=new WeakMap,m=c.get(F);if(m)return m}p=F!=null?B2(l2(F)):{};let B=s||!F||!F.__esModule?C0(p,"default",{value:F,enumerable:!0}):p;for(let f of n2(F))if(!o2.call(B,f))C0(B,f,{get:k2.bind(F,f),enumerable:!0});if(a)c.set(F,B);return B};var h2=(F,s)=>()=>(s||F((s={exports:{}}).exports,s),s.exports);var B0=h2((o1,M0)=>{var f0={to(F,s){if(!s)return`\x1B[${F+1}G`;return`\x1B[${s+1};${F+1}H`},move(F,s){let p="";if(F<0)p+=`\x1B[${-F}D`;else if(F>0)p+=`\x1B[${F}C`;if(s<0)p+=`\x1B[${-s}A`;else if(s>0)p+=`\x1B[${s}B`;return p},up:(F=1)=>`\x1B[${F}A`,down:(F=1)=>`\x1B[${F}B`,forward:(F=1)=>`\x1B[${F}C`,backward:(F=1)=>`\x1B[${F}D`,nextLine:(F=1)=>"\x1B[E".repeat(F),prevLine:(F=1)=>"\x1B[F".repeat(F),left:"\x1B[G",hide:"\x1B[?25l",show:"\x1B[?25h",save:"\x1B7",restore:"\x1B8"},Q2={up:(F=1)=>"\x1B[S".repeat(F),down:(F=1)=>"\x1B[T".repeat(F)},K2={screen:"\x1B[2J",up:(F=1)=>"\x1B[1J".repeat(F),down:(F=1)=>"\x1B[J".repeat(F),line:"\x1B[2K",lineEnd:"\x1B[K",lineStart:"\x1B[1K",lines(F){let s="";for(let p=0;p<F;p++)s+=this.line+(p<F-1?f0.up():"");if(F)s+=f0.left;return s}};M0.exports={cursor:f0,scroll:Q2,erase:K2,beep:"\x07"}});class N{#F;#B="";#s="0.0.1";#p={help:{short:"h",description:"show help",type:"boolean"},version:{short:"v",description:"show version",type:"boolean"}};#m={};#a=[];#c=[];#f=async()=>{};#n="";constructor(F,s="",p=""){this.#F=F,this.#B=s,this.#s=p}set name(F){this.#F=F}get name(){return this.#F}set description(F){this.#B=F}get description(){return this.#B}set version(F){this.#s=F}get version(){return this.#s}#l(F){return`\x1B[3m${F}\x1B[0m`}#o(){return`
\x1B[1;36m${this.#n}${this.#F}\x1B[0m ${this.#s}
${this.#l(this.description)}
`}#k(){return`
Usage: ${this.#n}${this.#F} [options] [arguments]

`}#b(){let F="";if(this.#c.length){let s=Math.max(...this.#c.map((p)=>p.name.length))+2;F=this.#c.map((p)=>`  \x1B[1m${p.name.padEnd(s)}\x1B[0m ${this.#l(p.description)}
`).join("")}return F!==""?`\x1B[4mSubcommands:\x1B[0m
${F}
`:""}#D(F){let[s,p]=Object.entries(F).at(0)??[];if(s&&p){let a=typeof p.short<"u"?`-${p.short}, `:"",c=p.type==="boolean"?"":" <param>";return`${a}--${s}${c}`}return""}#A(){let F=[...Object.entries(this.#p),...Object.entries(this.#m)].filter(([a,c])=>typeof c.long>"u"),s=Math.max(...F.map(([a,c])=>this.#D({[a]:c}).length))+1,p=F.map(([a,c])=>[`  \x1B[1m${this.#D({[a]:c}).padEnd(s)}\x1B[0m`,this.#l(c.description??""),` ${typeof c.default<"u"?`(default: ${c.default})`:""}`,`
`].join(" ")).join("");return p!==""?`\x1B[4mOptions:\x1B[0m
${p}
`:""}#h(){let F="";if(this.#a.length){let s=Math.max(...this.#a.map((p)=>p.name.length))+1;F=this.#a.map((p)=>`  \x1B[1m${p.name.padEnd(s)}\x1B[0m ${this.#l(p.description??"")}
`).join("")}return F!==""?`\x1B[4mArguments:\x1B[0m
${F}
`:""}#y(){return`
You can generate a completion script for your CLI by running:
\x1B[3m$ ${this.#F} generate-completion\x1B[0m
    `}help(){console.log(this.#o()+this.#k()+this.#b()+this.#A()+this.#h()+this.#y())}addOptions(F={}){return Object.entries(F).forEach(([s,p],a)=>{if(this.#p={...this.#p,[s]:p},typeof p?.short<"u")this.#p={...this.#p,[p.short]:{...p,long:s}}}),this}addGlobalOptions(F={}){return Object.entries(F).forEach(([s,p],a)=>{if(this.#m={...this.#m,[s]:p},typeof p?.short<"u")this.#m={...this.#m,[p.short]:{...p,long:s}}}),this}addArguments(F){return this.#a.push(...F),this}addSubcommands(F){return this.#c.push(...F),this}action(F){return this.#f=F,this}#C(F,s,p){if(s.includes("=")){let[a,c]=s.substring(1).split("=",2);p[this.#p[a]?.long??""]=c}else{let a=s.substring(1).split("");a.forEach((c,m)=>{if(this.#p[c]?.type!=="boolean")if(m===a.length-1)if(!F[1]?.startsWith("-"))p[this.#p[c]?.long??""]=F[1]??this.#p[c]?.default,F.shift();else p[this.#p[c]?.long??""]=this.#p[c]?.default;else p[this.#p[c]?.long??""]=this.#p[c]?.default;else p[this.#p[c].long??""]=!0})}F.shift()}#j(F,s,p){let a=s.substring(2);if(a.includes("=")){let[c,m]=a.split("=",2);p[c]=m}else if(this.#p[a]?.type!=="boolean")if(F.length===1)p[a]=this.#p[a]?.default;else p[a]=F[1],F.shift();else p[a]=!0;F.shift()}#$(F){let s={},p=[];while(F.length){let a=F[0]??"";if(/^-[a-z=]+$/.exec(a))this.#C(F,a,s);else if(a.startsWith("--"))this.#j(F,a,s);else p.push(F.shift()??"")}return{options:s,args:p}}#q(F){let s={};return this.#a.forEach((p,a)=>{if(F.length)s[p.name]=F.shift()}),s}getGenerationCompletionLine(){return[...new Set([...this.#c.map((F)=>F.name),...Object.keys({...this.#p,...this.#m}).map((F)=>`--${F}`),...Object.values({...this.#p,...this.#m}).map((F)=>F.short??"").filter((F)=>F!=="").map((F)=>`-${F}`)])].join(" ")}#z(){let F=`
#/usr/bin/env bash
_${this.#F}_completions()
{
    local cur prev

    cur=\${COMP_WORDS[COMP_CWORD]}
    prev=\${COMP_WORDS[COMP_CWORD-1]}

    case \${COMP_CWORD} in
        1)
            COMPREPLY=($(compgen -W "${this.getGenerationCompletionLine()}" -- \${cur}))
            ;;
        2)
            case \${prev} in
                ${this.#c.map((s)=>`
                ${s.name})
                    COMPREPLY=($(compgen -W "${s.getGenerationCompletionLine()}" -- \${cur}))
                    ;;
                `).join(`
`)}
            esac
            ;;
        *)
            COMPREPLY=()
            ;;
    esac
}
complete -F _${this.#F}_completions ${this.#F}
`;console.log(`Copy this into ~/.clipse.${this.#F}.bash`),console.log(F),console.log(`Then execute: source ~/.clipse.${this.#F}.bash`)}async ready(F=[],s=""){if(this.#n=s,F.length===0&&s==="")F.push(...process.argv.slice(2));let p={};if(Object.entries(this.#p).forEach(([a,c],m)=>{if(typeof c.long>"u"&&(typeof c.optional>"u"||!c.optional)&&!["help","version"].includes(a))p[a]=c.default??(c.type==="boolean"?!1:"")}),F.length){if(F[0]==="-h"||F[0]==="--help")this.help(),process.exit(0);if(F[0]==="-v"||F[0]==="--version")console.log(this.#s),process.exit(0);let a=this.#c.filter((c)=>c.name===F[0]).shift();if(a)F.shift(),a.addOptions(this.#m),a.ready(F,`${this.#n}${this.#F} `);else{if(F[0]==="generate-completion")this.#z(),process.exit(0);let c=this.#$([...F]),m={...p,...c.options},B=this.#q([...c.args]);await this.#f(B,m)}}else await this.#f({},p)}}var L={name:"booo",author:"Sylvain Gougouzian",main:"bin/index.js",version:"0.0.1",bin:{booo:"./bin/index.js"},repository:{type:"git",url:"git+https://github.com/gouz/booo.git"},devDependencies:{"@types/bun":"latest"},peerDependencies:{typescript:"6.0.2"},dependencies:{"@clack/prompts":"^1.2.0",clipse:"^0.0.15"},scripts:{make:"bun build src/index.ts --outdir bin --minify --target bun","make:exe":"bun build src/index.ts --outfile exe/booo --compile --minify",dev:"bun src/index.ts"}};async function F0(F){let{log:s}=console;try{let p=await fetch("https://api.github.com/repos/gouz/booo/releases/latest",{signal:AbortSignal.timeout(2000)});if(p.ok){let a=await p.json();if(a.tag_name!==F)s(`SliDesk is out of date! Please update to ${a.tag_name}`)}}catch(p){}}import{styleText as U0}from"util";import{stdout as k0,stdin as W0}from"process";import*as P from"readline";import J2 from"readline";var $0=(F)=>{return F===161||F===164||F===167||F===168||F===170||F===173||F===174||F>=176&&F<=180||F>=182&&F<=186||F>=188&&F<=191||F===198||F===208||F===215||F===216||F>=222&&F<=225||F===230||F>=232&&F<=234||F===236||F===237||F===240||F===242||F===243||F>=247&&F<=250||F===252||F===254||F===257||F===273||F===275||F===283||F===294||F===295||F===299||F>=305&&F<=307||F===312||F>=319&&F<=322||F===324||F>=328&&F<=331||F===333||F===338||F===339||F===358||F===359||F===363||F===462||F===464||F===466||F===468||F===470||F===472||F===474||F===476||F===593||F===609||F===708||F===711||F>=713&&F<=715||F===717||F===720||F>=728&&F<=731||F===733||F===735||F>=768&&F<=879||F>=913&&F<=929||F>=931&&F<=937||F>=945&&F<=961||F>=963&&F<=969||F===1025||F>=1040&&F<=1103||F===1105||F===8208||F>=8211&&F<=8214||F===8216||F===8217||F===8220||F===8221||F>=8224&&F<=8226||F>=8228&&F<=8231||F===8240||F===8242||F===8243||F===8245||F===8251||F===8254||F===8308||F===8319||F>=8321&&F<=8324||F===8364||F===8451||F===8453||F===8457||F===8467||F===8470||F===8481||F===8482||F===8486||F===8491||F===8531||F===8532||F>=8539&&F<=8542||F>=8544&&F<=8555||F>=8560&&F<=8569||F===8585||F>=8592&&F<=8601||F===8632||F===8633||F===8658||F===8660||F===8679||F===8704||F===8706||F===8707||F===8711||F===8712||F===8715||F===8719||F===8721||F===8725||F===8730||F>=8733&&F<=8736||F===8739||F===8741||F>=8743&&F<=8748||F===8750||F>=8756&&F<=8759||F===8764||F===8765||F===8776||F===8780||F===8786||F===8800||F===8801||F>=8804&&F<=8807||F===8810||F===8811||F===8814||F===8815||F===8834||F===8835||F===8838||F===8839||F===8853||F===8857||F===8869||F===8895||F===8978||F>=9312&&F<=9449||F>=9451&&F<=9547||F>=9552&&F<=9587||F>=9600&&F<=9615||F>=9618&&F<=9621||F===9632||F===9633||F>=9635&&F<=9641||F===9650||F===9651||F===9654||F===9655||F===9660||F===9661||F===9664||F===9665||F>=9670&&F<=9672||F===9675||F>=9678&&F<=9681||F>=9698&&F<=9701||F===9711||F===9733||F===9734||F===9737||F===9742||F===9743||F===9756||F===9758||F===9792||F===9794||F===9824||F===9825||F>=9827&&F<=9829||F>=9831&&F<=9834||F===9836||F===9837||F===9839||F===9886||F===9887||F===9919||F>=9926&&F<=9933||F>=9935&&F<=9939||F>=9941&&F<=9953||F===9955||F===9960||F===9961||F>=9963&&F<=9969||F===9972||F>=9974&&F<=9977||F===9979||F===9980||F===9982||F===9983||F===10045||F>=10102&&F<=10111||F>=11094&&F<=11097||F>=12872&&F<=12879||F>=57344&&F<=63743||F>=65024&&F<=65039||F===65533||F>=127232&&F<=127242||F>=127248&&F<=127277||F>=127280&&F<=127337||F>=127344&&F<=127373||F===127375||F===127376||F>=127387&&F<=127404||F>=917760&&F<=917999||F>=983040&&F<=1048573||F>=1048576&&F<=1114109},q0=(F)=>{return F===12288||F>=65281&&F<=65376||F>=65504&&F<=65510},z0=(F)=>{return F>=4352&&F<=4447||F===8986||F===8987||F===9001||F===9002||F>=9193&&F<=9196||F===9200||F===9203||F===9725||F===9726||F===9748||F===9749||F>=9800&&F<=9811||F===9855||F===9875||F===9889||F===9898||F===9899||F===9917||F===9918||F===9924||F===9925||F===9934||F===9940||F===9962||F===9970||F===9971||F===9973||F===9978||F===9981||F===9989||F===9994||F===9995||F===10024||F===10060||F===10062||F>=10067&&F<=10069||F===10071||F>=10133&&F<=10135||F===10160||F===10175||F===11035||F===11036||F===11088||F===11093||F>=11904&&F<=11929||F>=11931&&F<=12019||F>=12032&&F<=12245||F>=12272&&F<=12287||F>=12289&&F<=12350||F>=12353&&F<=12438||F>=12441&&F<=12543||F>=12549&&F<=12591||F>=12593&&F<=12686||F>=12688&&F<=12771||F>=12783&&F<=12830||F>=12832&&F<=12871||F>=12880&&F<=19903||F>=19968&&F<=42124||F>=42128&&F<=42182||F>=43360&&F<=43388||F>=44032&&F<=55203||F>=63744&&F<=64255||F>=65040&&F<=65049||F>=65072&&F<=65106||F>=65108&&F<=65126||F>=65128&&F<=65131||F>=94176&&F<=94180||F===94192||F===94193||F>=94208&&F<=100343||F>=100352&&F<=101589||F>=101632&&F<=101640||F>=110576&&F<=110579||F>=110581&&F<=110587||F===110589||F===110590||F>=110592&&F<=110882||F===110898||F>=110928&&F<=110930||F===110933||F>=110948&&F<=110951||F>=110960&&F<=111355||F===126980||F===127183||F===127374||F>=127377&&F<=127386||F>=127488&&F<=127490||F>=127504&&F<=127547||F>=127552&&F<=127560||F===127568||F===127569||F>=127584&&F<=127589||F>=127744&&F<=127776||F>=127789&&F<=127797||F>=127799&&F<=127868||F>=127870&&F<=127891||F>=127904&&F<=127946||F>=127951&&F<=127955||F>=127968&&F<=127984||F===127988||F>=127992&&F<=128062||F===128064||F>=128066&&F<=128252||F>=128255&&F<=128317||F>=128331&&F<=128334||F>=128336&&F<=128359||F===128378||F===128405||F===128406||F===128420||F>=128507&&F<=128591||F>=128640&&F<=128709||F===128716||F>=128720&&F<=128722||F>=128725&&F<=128727||F>=128732&&F<=128735||F===128747||F===128748||F>=128756&&F<=128764||F>=128992&&F<=129003||F===129008||F>=129292&&F<=129338||F>=129340&&F<=129349||F>=129351&&F<=129535||F>=129648&&F<=129660||F>=129664&&F<=129672||F>=129680&&F<=129725||F>=129727&&F<=129733||F>=129742&&F<=129755||F>=129760&&F<=129768||F>=129776&&F<=129784||F>=131072&&F<=196605||F>=196608&&F<=262141};var s0=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,T=/[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y,_=/\t{1,1000}/y,p0=/[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu,d=/(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y,y2=/\p{M}+/gu,C2={limit:1/0,ellipsis:""},S0=(F,s={},p={})=>{let a=s.limit??1/0,c=s.ellipsis??"",m=s?.ellipsisWidth??(c?S0(c,C2,p).width:0),B=p.ansiWidth??0,f=p.controlWidth??0,n=p.tabWidth??8,h=p.ambiguousWidth??1,q=p.emojiWidth??2,D=p.fullWidthWidth??2,k=p.regularWidth??1,y=p.wideWidth??2,l=0,o=0,g=F.length,K=0,J=!1,z=g,Z=Math.max(0,a-m),S=0,M=0,C=0,j=0;F:while(!0){if(M>S||o>=g&&o>l){let R=F.slice(S,M)||F.slice(l,o);K=0;for(let H of R.replaceAll(y2,"")){let u=H.codePointAt(0)||0;if(q0(u))j=D;else if(z0(u))j=y;else if(h!==k&&$0(u))j=h;else j=k;if(C+j>Z)z=Math.min(z,Math.max(S,l)+K);if(C+j>a){J=!0;break F}K+=H.length,C+=j}S=M=0}if(o>=g)break;if(d.lastIndex=o,d.test(F)){if(K=d.lastIndex-o,j=K*k,C+j>Z)z=Math.min(z,o+Math.floor((Z-C)/k));if(C+j>a){J=!0;break}C+=j,S=l,M=o,o=l=d.lastIndex;continue}if(s0.lastIndex=o,s0.test(F)){if(C+B>Z)z=Math.min(z,o);if(C+B>a){J=!0;break}C+=B,S=l,M=o,o=l=s0.lastIndex;continue}if(T.lastIndex=o,T.test(F)){if(K=T.lastIndex-o,j=K*f,C+j>Z)z=Math.min(z,o+Math.floor((Z-C)/f));if(C+j>a){J=!0;break}C+=j,S=l,M=o,o=l=T.lastIndex;continue}if(_.lastIndex=o,_.test(F)){if(K=_.lastIndex-o,j=K*n,C+j>Z)z=Math.min(z,o+Math.floor((Z-C)/n));if(C+j>a){J=!0;break}C+=j,S=l,M=o,o=l=_.lastIndex;continue}if(p0.lastIndex=o,p0.test(F)){if(C+q>Z)z=Math.min(z,o);if(C+q>a){J=!0;break}C+=q,S=l,M=o,o=l=p0.lastIndex;continue}o+=1}return{width:J?Z:C,index:J?z:g,truncated:J,ellipsed:J&&a>=m}},Y0=S0;var j2={limit:1/0,ellipsis:"",ellipsisWidth:0},$2=(F,s={})=>{return Y0(F,j2,s).width},U=$2;var I="\x1B",X0="\x9B",q2=39,c0="\x07",e0="[",z2="]",O0="m",m0=`${z2}8;;`,Z0=new RegExp(`(?:\\${e0}(?<code>\\d+)m|\\${m0}(?<uri>.*)${c0})`,"y"),Q0=(F)=>{if(F>=30&&F<=37)return 39;if(F>=90&&F<=97)return 39;if(F>=40&&F<=47)return 49;if(F>=100&&F<=107)return 49;if(F===1||F===2)return 22;if(F===3)return 23;if(F===4)return 24;if(F===7)return 27;if(F===8)return 28;if(F===9)return 29;if(F===0)return 0;return},K0=(F)=>`${I}${e0}${F}${O0}`,J0=(F)=>`${I}${m0}${F}${c0}`,a0=(F,s,p)=>{let a=s[Symbol.iterator](),c=!1,m=!1,B=F.at(-1),f=B===void 0?0:U(B),n=a.next(),h=a.next(),q=0;while(!n.done){let D=n.value,k=U(D);if(f+k<=p)F[F.length-1]+=D;else F.push(D),f=0;if(D===I||D===X0)c=!0,m=s.startsWith(m0,q+1);if(c){if(m){if(D===c0)c=!1,m=!1}else if(D===O0)c=!1}else if(f+=k,f===p&&!h.done)F.push(""),f=0;n=h,h=a.next(),q+=D.length}if(B=F.at(-1),!f&&B!==void 0&&B.length&&F.length>1)F[F.length-2]+=F.pop()},S2=(F)=>{let s=F.split(" "),p=s.length;while(p){if(U(s[p-1]))break;p--}if(p===s.length)return F;return s.slice(0,p).join(" ")+s.slice(p).join("")},Y2=(F,s,p={})=>{if(p.trim!==!1&&F.trim()==="")return"";let a="",c,m,B=F.split(" "),f=[""],n=0;for(let D=0;D<B.length;D++){let k=B[D];if(p.trim!==!1){let l=f.at(-1)??"",o=l.trimStart();if(l.length!==o.length)f[f.length-1]=o,n=U(o)}if(D!==0){if(n>=s&&(p.wordWrap===!1||p.trim===!1))f.push(""),n=0;if(n||p.trim===!1)f[f.length-1]+=" ",n++}let y=U(k);if(p.hard&&y>s){let l=s-n,o=1+Math.floor((y-l-1)/s);if(Math.floor((y-1)/s)<o)f.push("");a0(f,k,s),n=U(f.at(-1)??"");continue}if(n+y>s&&n&&y){if(p.wordWrap===!1&&n<s){a0(f,k,s),n=U(f.at(-1)??"");continue}f.push(""),n=0}if(n+y>s&&p.wordWrap===!1){a0(f,k,s),n=U(f.at(-1)??"");continue}f[f.length-1]+=k,n+=y}if(p.trim!==!1)f=f.map((D)=>S2(D));let h=f.join(`
`),q=!1;for(let D=0;D<h.length;D++){let k=h[D];if(a+=k,!q)q=k>="\uD800"&&k<="\uDBFF";else continue;if(k===I||k===X0){Z0.lastIndex=D+1;let l=Z0.exec(h)?.groups;if(l?.code!==void 0){let o=Number.parseFloat(l.code);c=o===q2?void 0:o}else if(l?.uri!==void 0)m=l.uri.length===0?void 0:l.uri}if(h[D+1]===`
`){if(m)a+=J0("");let y=c?Q0(c):void 0;if(c&&y)a+=K0(y)}else if(k===`
`){if(c&&Q0(c))a+=K0(c);if(m)a+=J0(m)}}return a},Z2=/\r?\n/;function v(F,s,p){return String(F).normalize().split(Z2).map((a)=>Y2(a,s,p)).join(`
`)}var Y=j0(B0(),1);import{ReadStream as g0}from"tty";function n0(F,s,p){if(!p.some((B)=>!B.disabled))return F;let a=F+s,c=Math.max(p.length-1,0),m=a<0?c:a>c?0:a;return p[m].disabled?n0(m,s<0?-1:1,p):m}var X2=["up","down","left","right","space","enter","cancel"],e2=["January","February","March","April","May","June","July","August","September","October","November","December"],Q={actions:new Set(X2),aliases:new Map([["k","up"],["j","down"],["h","left"],["l","right"],["\x03","cancel"],["escape","cancel"]]),messages:{cancel:"Canceled",error:"Something went wrong"},withGuide:!0,date:{monthNames:[...e2],messages:{required:"Please enter a valid date",invalidMonth:"There are only 12 months in a year",invalidDay:(F,s)=>`There are only ${F} days in ${s}`,afterMin:(F)=>`Date must be on or after ${F.toISOString().slice(0,10)}`,beforeMax:(F)=>`Date must be on or before ${F.toISOString().slice(0,10)}`}}};function b0(F,s){if(typeof F=="string")return Q.aliases.get(F)===s;for(let p of F)if(p!==void 0&&b0(p,s))return!0;return!1}function O2(F,s){if(F===s)return;let p=F.split(`
`),a=s.split(`
`),c=Math.max(p.length,a.length),m=[];for(let B=0;B<c;B++)p[B]!==a[B]&&m.push(B);return{lines:m,numLinesBefore:p.length,numLinesAfter:a.length,numLines:c}}var M2=globalThis.process.platform.startsWith("win"),G0=Symbol("clack:cancel");function w(F,s){let p=F;p.isTTY&&p.setRawMode(s)}function v0({input:F=W0,output:s=k0,overwrite:p=!0,hideCursor:a=!0}={}){let c=P.createInterface({input:F,output:s,prompt:"",tabSize:1});P.emitKeypressEvents(F,c),F instanceof g0&&F.isTTY&&F.setRawMode(!0);let m=(B,{name:f,sequence:n})=>{let h=String(B);if(b0([h,f,n],"cancel")){a&&s.write(Y.cursor.show),process.exit(0);return}if(!p)return;P.moveCursor(s,f==="return"?0:-1,f==="return"?-1:0,()=>{P.clearLine(s,1,()=>{F.once("keypress",m)})})};return a&&s.write(Y.cursor.hide),F.once("keypress",m),()=>{F.off("keypress",m),a&&s.write(Y.cursor.show),F instanceof g0&&F.isTTY&&!M2&&F.setRawMode(!1),c.terminal=!1,c.close()}}var D0=(F)=>("columns"in F)&&typeof F.columns=="number"?F.columns:80,H0=(F)=>("rows"in F)&&typeof F.rows=="number"?F.rows:20;function u0(F,s,p,a=p){let c=D0(F??k0);return v(s,c-p.length,{hard:!0,trim:!1}).split(`
`).map((m,B)=>`${B===0?a:p}${m}`).join(`
`)}var t=class{input;output;_abortSignal;rl;opts;_render;_track=!1;_prevFrame="";_subscribers=new Map;_cursor=0;state="initial";error="";value;userInput="";constructor(F,s=!0){let{input:p=W0,output:a=k0,render:c,signal:m,...B}=F;this.opts=B,this.onKeypress=this.onKeypress.bind(this),this.close=this.close.bind(this),this.render=this.render.bind(this),this._render=c.bind(this),this._track=s,this._abortSignal=m,this.input=p,this.output=a}unsubscribe(){this._subscribers.clear()}setSubscriber(F,s){let p=this._subscribers.get(F)??[];p.push(s),this._subscribers.set(F,p)}on(F,s){this.setSubscriber(F,{cb:s})}once(F,s){this.setSubscriber(F,{cb:s,once:!0})}emit(F,...s){let p=this._subscribers.get(F)??[],a=[];for(let c of p)c.cb(...s),c.once&&a.push(()=>p.splice(p.indexOf(c),1));for(let c of a)c()}prompt(){return new Promise((F)=>{if(this._abortSignal){if(this._abortSignal.aborted)return this.state="cancel",this.close(),F(G0);this._abortSignal.addEventListener("abort",()=>{this.state="cancel",this.close()},{once:!0})}this.rl=J2.createInterface({input:this.input,tabSize:2,prompt:"",escapeCodeTimeout:50,terminal:!0}),this.rl.prompt(),this.opts.initialUserInput!==void 0&&this._setUserInput(this.opts.initialUserInput,!0),this.input.on("keypress",this.onKeypress),w(this.input,!0),this.output.on("resize",this.render),this.render(),this.once("submit",()=>{this.output.write(Y.cursor.show),this.output.off("resize",this.render),w(this.input,!1),F(this.value)}),this.once("cancel",()=>{this.output.write(Y.cursor.show),this.output.off("resize",this.render),w(this.input,!1),F(G0)})})}_isActionKey(F,s){return F==="\t"}_setValue(F){this.value=F,this.emit("value",this.value)}_setUserInput(F,s){this.userInput=F??"",this.emit("userInput",this.userInput),s&&this._track&&this.rl&&(this.rl.write(this.userInput),this._cursor=this.rl.cursor)}_clearUserInput(){this.rl?.write(null,{ctrl:!0,name:"u"}),this._setUserInput("")}onKeypress(F,s){if(this._track&&s.name!=="return"&&(s.name&&this._isActionKey(F,s)&&this.rl?.write(null,{ctrl:!0,name:"h"}),this._cursor=this.rl?.cursor??0,this._setUserInput(this.rl?.line)),this.state==="error"&&(this.state="active"),s?.name&&(!this._track&&Q.aliases.has(s.name)&&this.emit("cursor",Q.aliases.get(s.name)),Q.actions.has(s.name)&&this.emit("cursor",s.name)),F&&(F.toLowerCase()==="y"||F.toLowerCase()==="n")&&this.emit("confirm",F.toLowerCase()==="y"),this.emit("key",F?.toLowerCase(),s),s?.name==="return"){if(this.opts.validate){let p=this.opts.validate(this.value);p&&(this.error=p instanceof Error?p.message:p,this.state="error",this.rl?.write(this.userInput))}this.state!=="error"&&(this.state="submit")}b0([F,s?.name,s?.sequence],"cancel")&&(this.state="cancel"),(this.state==="submit"||this.state==="cancel")&&this.emit("finalize"),this.render(),(this.state==="submit"||this.state==="cancel")&&this.close()}close(){this.input.unpipe(),this.input.removeListener("keypress",this.onKeypress),this.output.write(`
`),w(this.input,!1),this.rl?.close(),this.rl=void 0,this.emit(`${this.state}`,this.value),this.unsubscribe()}restoreCursor(){let F=v(this._prevFrame,process.stdout.columns,{hard:!0,trim:!1}).split(`
`).length-1;this.output.write(Y.cursor.move(-999,F*-1))}render(){let F=v(this._render(this)??"",process.stdout.columns,{hard:!0,trim:!1});if(F!==this._prevFrame){if(this.state==="initial")this.output.write(Y.cursor.hide);else{let s=O2(this._prevFrame,F),p=H0(this.output);if(this.restoreCursor(),s){let a=Math.max(0,s.numLinesAfter-p),c=Math.max(0,s.numLinesBefore-p),m=s.lines.find((B)=>B>=a);if(m===void 0){this._prevFrame=F;return}if(s.lines.length===1){this.output.write(Y.cursor.move(0,m-c)),this.output.write(Y.erase.lines(1));let B=F.split(`
`);this.output.write(B[m]),this._prevFrame=F,this.output.write(Y.cursor.move(0,B.length-m-1));return}else if(s.lines.length>1){if(a<c)m=a;else{let f=m-c;f>0&&this.output.write(Y.cursor.move(0,f))}this.output.write(Y.erase.down());let B=F.split(`
`).slice(m);this.output.write(B.join(`
`)),this._prevFrame=F;return}}this.output.write(Y.erase.down())}this.output.write(F),this.state==="initial"&&(this.state="active"),this._prevFrame=F}}};function U2(F,s){if(F===void 0||s.length===0)return 0;let p=s.findIndex((a)=>a.value===F);return p!==-1?p:0}function g2(F,s){return(s.label??String(s.value)).toLowerCase().includes(F.toLowerCase())}function G2(F,s){if(s)return F?s:s[0]}var V2=class extends t{filteredOptions;multiple;isNavigating=!1;selectedValues=[];focusedValue;#F=0;#B="";#s;#p;#m;get cursor(){return this.#F}get userInputWithCursor(){if(!this.userInput)return U0(["inverse","hidden"],"_");if(this._cursor>=this.userInput.length)return`${this.userInput}\u2588`;let F=this.userInput.slice(0,this._cursor),[s,...p]=this.userInput.slice(this._cursor);return`${F}${U0("inverse",s)}${p.join("")}`}get options(){return typeof this.#p=="function"?this.#p():this.#p}constructor(F){super(F),this.#p=F.options,this.#m=F.placeholder;let s=this.options;this.filteredOptions=[...s],this.multiple=F.multiple===!0,this.#s=typeof F.options=="function"?F.filter:F.filter??g2;let p;if(F.initialValue&&Array.isArray(F.initialValue)?this.multiple?p=F.initialValue:p=F.initialValue.slice(0,1):!this.multiple&&this.options.length>0&&(p=[this.options[0].value]),p)for(let a of p){let c=s.findIndex((m)=>m.value===a);c!==-1&&(this.toggleSelected(a),this.#F=c)}this.focusedValue=this.options[this.#F]?.value,this.on("key",(a,c)=>this.#a(a,c)),this.on("userInput",(a)=>this.#c(a))}_isActionKey(F,s){return F==="\t"||this.multiple&&this.isNavigating&&s.name==="space"&&F!==void 0&&F!==""}#a(F,s){let p=s.name==="up",a=s.name==="down",c=s.name==="return",m=this.userInput===""||this.userInput==="\t",B=this.#m,f=this.options,n=B!==void 0&&B!==""&&f.some((h)=>!h.disabled&&(this.#s?this.#s(B,h):!0));if(s.name==="tab"&&m&&n){this.userInput==="\t"&&this._clearUserInput(),this._setUserInput(B,!0),this.isNavigating=!1;return}p||a?(this.#F=n0(this.#F,p?-1:1,this.filteredOptions),this.focusedValue=this.filteredOptions[this.#F]?.value,this.multiple||(this.selectedValues=[this.focusedValue]),this.isNavigating=!0):c?this.value=G2(this.multiple,this.selectedValues):this.multiple?this.focusedValue!==void 0&&(s.name==="tab"||this.isNavigating&&s.name==="space")?this.toggleSelected(this.focusedValue):this.isNavigating=!1:(this.focusedValue&&(this.selectedValues=[this.focusedValue]),this.isNavigating=!1)}deselectAll(){this.selectedValues=[]}toggleSelected(F){this.filteredOptions.length!==0&&(this.multiple?this.selectedValues.includes(F)?this.selectedValues=this.selectedValues.filter((s)=>s!==F):this.selectedValues=[...this.selectedValues,F]:this.selectedValues=[F])}#c(F){if(F!==this.#B){this.#B=F;let s=this.options;F&&this.#s?this.filteredOptions=s.filter((c)=>this.#s?.(F,c)):this.filteredOptions=[...s];let p=U2(this.focusedValue,this.filteredOptions);this.#F=n0(p,0,this.filteredOptions);let a=this.filteredOptions[this.#F];a&&!a.disabled?this.focusedValue=a.value:this.focusedValue=void 0,this.multiple||(this.focusedValue!==void 0?this.toggleSelected(this.focusedValue):this.deselectAll())}}};class h0 extends t{get cursor(){return this.value?0:1}get _value(){return this.cursor===0}constructor(F){super(F,!1),this.value=!!F.initialValue,this.on("userInput",()=>{this.value=this._value}),this.on("confirm",(s)=>{this.output.write(Y.cursor.move(0,-1)),this.value=s,this.state="submit",this.close()}),this.on("cursor",()=>{this.value=!this.value})}}var P2={Y:{type:"year",len:4},M:{type:"month",len:2},D:{type:"day",len:2}};function V0(F){return[...F].map((s)=>P2[s])}function W2(F){let s=new Intl.DateTimeFormat(F,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2000,0,15)),p=[],a="/";for(let c of s)c.type==="literal"?a=c.value.trim()||c.value:(c.type==="year"||c.type==="month"||c.type==="day")&&p.push({type:c.type,len:c.type==="year"?4:2});return{segments:p,separator:a}}function l0(F){return Number.parseInt((F||"0").replace(/_/g,"0"),10)||0}function r(F){return{year:l0(F.year),month:l0(F.month),day:l0(F.day)}}function o0(F,s){return new Date(F||2001,s||1,0).getDate()}function i0(F){let{year:s,month:p,day:a}=r(F);if(!s||s<0||s>9999||!p||p<1||p>12||!a||a<1)return;let c=new Date(Date.UTC(s,p-1,a));if(!(c.getUTCFullYear()!==s||c.getUTCMonth()!==p-1||c.getUTCDate()!==a))return{year:s,month:p,day:a}}function P0(F){let s=i0(F);return s?new Date(Date.UTC(s.year,s.month-1,s.day)):void 0}function v2(F,s,p,a){let c=p?{year:p.getUTCFullYear(),month:p.getUTCMonth()+1,day:p.getUTCDate()}:null,m=a?{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate()}:null;return F==="year"?{min:c?.year??1,max:m?.year??9999}:F==="month"?{min:c&&s.year===c.year?c.month:1,max:m&&s.year===m.year?m.month:12}:{min:c&&s.year===c.year&&s.month===c.month?c.day:1,max:m&&s.year===m.year&&s.month===m.month?m.day:o0(s.year,s.month)}}class N0 extends t{#F;#B;#s;#p;#m;#a={segmentIndex:0,positionInSegment:0};#c=!0;#f=null;inlineError="";get segmentCursor(){return{...this.#a}}get segmentValues(){return{...this.#s}}get segments(){return this.#F}get separator(){return this.#B}get formattedValue(){return this.#n(this.#s)}#n(F){return this.#F.map((s)=>F[s.type]).join(this.#B)}#l(){this._setUserInput(this.#n(this.#s)),this._setValue(P0(this.#s)??void 0)}constructor(F){let s=F.format?{segments:V0(F.format),separator:F.separator??"/"}:W2(F.locale),p=F.separator??s.separator,a=F.format?V0(F.format):s.segments,c=F.initialValue??F.defaultValue,m=c?{year:String(c.getUTCFullYear()).padStart(4,"0"),month:String(c.getUTCMonth()+1).padStart(2,"0"),day:String(c.getUTCDate()).padStart(2,"0")}:{year:"____",month:"__",day:"__"},B=a.map((f)=>m[f.type]).join(p);super({...F,initialUserInput:B},!1),this.#F=a,this.#B=p,this.#s=m,this.#p=F.minDate,this.#m=F.maxDate,this.#l(),this.on("cursor",(f)=>this.#D(f)),this.on("key",(f,n)=>this.#A(f,n)),this.on("finalize",()=>this.#y(F))}#o(){let F=Math.max(0,Math.min(this.#a.segmentIndex,this.#F.length-1)),s=this.#F[F];if(s)return this.#a.positionInSegment=Math.max(0,Math.min(this.#a.positionInSegment,s.len-1)),{segment:s,index:F}}#k(F){this.inlineError="",this.#f=null;let s=this.#o();s&&(this.#a.segmentIndex=Math.max(0,Math.min(this.#F.length-1,s.index+F)),this.#a.positionInSegment=0,this.#c=!0)}#b(F){let s=this.#o();if(!s)return;let{segment:p}=s,a=this.#s[p.type],c=!a||a.replace(/_/g,"")==="",m=Number.parseInt((a||"0").replace(/_/g,"0"),10)||0,B=v2(p.type,r(this.#s),this.#p,this.#m),f;c?f=F===1?B.min:B.max:f=Math.max(Math.min(B.max,m+F),B.min),this.#s={...this.#s,[p.type]:f.toString().padStart(p.len,"0")},this.#c=!0,this.#f=null,this.#l()}#D(F){if(F)switch(F){case"right":return this.#k(1);case"left":return this.#k(-1);case"up":return this.#b(1);case"down":return this.#b(-1)}}#A(F,s){if(s?.name==="backspace"||s?.sequence==="\x7F"||s?.sequence==="\b"||F==="\x7F"||F==="\b"){this.inlineError="";let p=this.#o();if(!p)return;if(!this.#s[p.segment.type].replace(/_/g,"")){this.#k(-1);return}this.#s[p.segment.type]="_".repeat(p.segment.len),this.#c=!0,this.#a.positionInSegment=0,this.#l();return}if(s?.name==="tab"){this.inlineError="";let p=this.#o();if(!p)return;let a=s.shift?-1:1,c=p.index+a;c>=0&&c<this.#F.length&&(this.#a.segmentIndex=c,this.#a.positionInSegment=0,this.#c=!0);return}if(F&&/^[0-9]$/.test(F)){let p=this.#o();if(!p)return;let{segment:a}=p,c=!this.#s[a.type].replace(/_/g,"");if(this.#c&&this.#f!==null&&!c){let k=this.#f+F,y={...this.#s,[a.type]:k},l=this.#h(y,a);if(l){this.inlineError=l,this.#f=null,this.#c=!1;return}this.inlineError="",this.#s[a.type]=k,this.#f=null,this.#c=!1,this.#l(),p.index<this.#F.length-1&&(this.#a.segmentIndex=p.index+1,this.#a.positionInSegment=0,this.#c=!0);return}this.#c&&!c&&(this.#s[a.type]="_".repeat(a.len),this.#a.positionInSegment=0),this.#c=!1,this.#f=null;let m=this.#s[a.type],B=m.indexOf("_"),f=B>=0?B:Math.min(this.#a.positionInSegment,a.len-1);if(f<0||f>=a.len)return;let n=m.slice(0,f)+F+m.slice(f+1),h=!1;if(f===0&&m==="__"&&(a.type==="month"||a.type==="day")){let k=Number.parseInt(F,10);n=`0${F}`,h=k<=(a.type==="month"?1:2)}if(a.type==="year"&&(n=(m.replace(/_/g,"")+F).padStart(a.len,"_")),!n.includes("_")){let k={...this.#s,[a.type]:n},y=this.#h(k,a);if(y){this.inlineError=y;return}}this.inlineError="",this.#s[a.type]=n;let q=n.includes("_")?void 0:i0(this.#s);if(q){let{year:k,month:y}=q,l=o0(k,y);this.#s={year:String(Math.max(0,Math.min(9999,k))).padStart(4,"0"),month:String(Math.max(1,Math.min(12,y))).padStart(2,"0"),day:String(Math.max(1,Math.min(l,q.day))).padStart(2,"0")}}this.#l();let D=n.indexOf("_");h?(this.#c=!0,this.#f=F):D>=0?this.#a.positionInSegment=D:B>=0&&p.index<this.#F.length-1?(this.#a.segmentIndex=p.index+1,this.#a.positionInSegment=0,this.#c=!0):this.#a.positionInSegment=Math.min(f+1,a.len-1)}}#h(F,s){let{month:p,day:a}=r(F);if(s.type==="month"&&(p<0||p>12))return Q.date.messages.invalidMonth;if(s.type==="day"&&(a<0||a>31))return Q.date.messages.invalidDay(31,"any month")}#y(F){let{year:s,month:p,day:a}=r(this.#s);if(s&&p&&a){let c=o0(s,p);this.#s={...this.#s,day:String(Math.min(a,c)).padStart(2,"0")}}this.value=P0(this.#s)??F.defaultValue??void 0}}class E0 extends t{options;cursor=0;#F;getGroupItems(F){return this.options.filter((s)=>s.group===F)}isGroupSelected(F){let s=this.getGroupItems(F),p=this.value;return p===void 0?!1:s.every((a)=>p.includes(a.value))}toggleValue(){let F=this.options[this.cursor];if(this.value===void 0&&(this.value=[]),F.group===!0){let s=F.value,p=this.getGroupItems(s);this.isGroupSelected(s)?this.value=this.value.filter((a)=>p.findIndex((c)=>c.value===a)===-1):this.value=[...this.value,...p.map((a)=>a.value)],this.value=Array.from(new Set(this.value))}else{let s=this.value.includes(F.value);this.value=s?this.value.filter((p)=>p!==F.value):[...this.value,F.value]}}constructor(F){super(F,!1);let{options:s}=F;this.#F=F.selectableGroups!==!1,this.options=Object.entries(s).flatMap(([p,a])=>[{value:p,group:!0,label:p},...a.map((c)=>({...c,group:p}))]),this.value=[...F.initialValues??[]],this.cursor=Math.max(this.options.findIndex(({value:p})=>p===F.cursorAt),this.#F?0:1),this.on("cursor",(p)=>{switch(p){case"left":case"up":{this.cursor=this.cursor===0?this.options.length-1:this.cursor-1;let a=this.options[this.cursor]?.group===!0;!this.#F&&a&&(this.cursor=this.cursor===0?this.options.length-1:this.cursor-1);break}case"down":case"right":{this.cursor=this.cursor===this.options.length-1?0:this.cursor+1;let a=this.options[this.cursor]?.group===!0;!this.#F&&a&&(this.cursor=this.cursor===this.options.length-1?0:this.cursor+1);break}case"space":this.toggleValue();break}})}}import{styleText as b,stripVTControlCharacters as J1}from"util";import O from"process";var E=j0(B0(),1);function u2(){return O.platform!=="win32"?O.env.TERM!=="linux":!!O.env.CI||!!O.env.WT_SESSION||!!O.env.TERMINUS_SUBLIME||O.env.ConEmuTask==="{cmd::Cmder}"||O.env.TERM_PROGRAM==="Terminus-Sublime"||O.env.TERM_PROGRAM==="vscode"||O.env.TERM==="xterm-256color"||O.env.TERM==="alacritty"||O.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}var A0=u2(),i2=()=>process.env.CI==="true";var A=(F,s)=>A0?F:s,N2=A("\u25C6","*"),L0=A("\u25A0","x"),T0=A("\u25B2","x"),y0=A("\u25C7","o"),E2=A("\u250C","T"),e=A("\u2502","|"),_0=A("\u2514","\u2014"),M1=A("\u2510","T"),U1=A("\u2518","\u2014"),R0=A("\u25CF",">"),x0=A("\u25CB"," "),g1=A("\u25FB","[\u2022]"),G1=A("\u25FC","[+]"),V1=A("\u25FB","[ ]"),P1=A("\u25AA","\u2022"),W1=A("\u2500","-"),v1=A("\u256E","+"),H1=A("\u251C","+"),u1=A("\u256F","+"),i1=A("\u2570","+"),N1=A("\u256D","+"),R2=A("\u25CF","\u2022"),x2=A("\u25C6","*"),L2=A("\u25B2","!"),T2=A("\u25A0","x"),_2=(F)=>{switch(F){case"initial":case"active":return b("cyan",N2);case"cancel":return b("red",L0);case"error":return b("yellow",T0);case"submit":return b("green",y0)}};var d0=(F)=>{let s=F.active??"Yes",p=F.inactive??"No";return new h0({active:s,inactive:p,signal:F.signal,input:F.input,output:F.output,initialValue:F.initialValue??!0,render(){let a=F.withGuide??Q.withGuide,c=`${_2(this.state)}  `,m=a?`${b("gray",e)}  `:"",B=u0(F.output,F.message,m,c),f=`${a?`${b("gray",e)}
`:""}${B}
`,n=this.value?s:p;switch(this.state){case"submit":{let h=a?`${b("gray",e)}  `:"";return`${f}${h}${b("dim",n)}`}case"cancel":{let h=a?`${b("gray",e)}  `:"";return`${f}${h}${b(["strikethrough","dim"],n)}${a?`
${b("gray",e)}`:""}`}default:{let h=a?`${b("cyan",e)}  `:"",q=a?b("cyan",_0):"";return`${f}${h}${this.value?`${b("green",R0)} ${s}`:`${b("dim",x0)} ${b("dim",s)}`}${F.vertical?a?`
${b("cyan",e)}  `:`
`:` ${b("dim","/")} `}${this.value?`${b("dim",x0)} ${b("dim",p)}`:`${b("green",R0)} ${p}`}
${q}
`}}}}).prompt()};var W={message:(F=[],{symbol:s=b("gray",e),secondarySymbol:p=b("gray",e),output:a=process.stdout,spacing:c=1,withGuide:m}={})=>{let B=[],f=m??Q.withGuide,n=f?p:"",h=f?`${s}  `:"",q=f?`${p}  `:"";for(let k=0;k<c;k++)B.push(n);let D=Array.isArray(F)?F:F.split(`
`);if(D.length>0){let[k,...y]=D;k.length>0?B.push(`${h}${k}`):B.push(f?s:"");for(let l of y)l.length>0?B.push(`${q}${l}`):B.push(f?p:"")}a.write(`${B.join(`
`)}
`)},info:(F,s)=>{W.message(F,{...s,symbol:b("blue",R2)})},success:(F,s)=>{W.message(F,{...s,symbol:b("green",x2)})},step:(F,s)=>{W.message(F,{...s,symbol:b("green",y0)})},warn:(F,s)=>{W.message(F,{...s,symbol:b("yellow",L2)})},warning:(F,s)=>{W.warn(F,s)},error:(F,s)=>{W.message(F,{...s,symbol:b("red",T2)})}};var I0=(F="",s)=>{let p=s?.output??process.stdout,a=s?.withGuide??Q.withGuide?`${b("gray",E2)}  `:"";p.write(`${a}${F}
`)},w0=(F="",s)=>{let p=s?.output??process.stdout,a=s?.withGuide??Q.withGuide?`${b("gray",e)}
${b("gray",_0)}  `:"";p.write(`${a}${F}

`)};var d2=(F)=>b("magenta",F),r0=({indicator:F="dots",onCancel:s,output:p=process.stdout,cancelMessage:a,errorMessage:c,frames:m=A0?["\u25D2","\u25D0","\u25D3","\u25D1"]:["\u2022","o","O","0"],delay:B=A0?80:120,signal:f,...n}={})=>{let h=i2(),q,D,k=!1,y=!1,l="",o,g=performance.now(),K=D0(p),J=n?.styleFrame??d2,z=($)=>{let X=$>1?c??Q.messages.error:a??Q.messages.cancel;y=$===1,k&&(i(X,$),y&&typeof s=="function"&&s())},Z=()=>z(2),S=()=>z(1),M=()=>{process.on("uncaughtExceptionMonitor",Z),process.on("unhandledRejection",Z),process.on("SIGINT",S),process.on("SIGTERM",S),process.on("exit",z),f&&f.addEventListener("abort",S)},C=()=>{process.removeListener("uncaughtExceptionMonitor",Z),process.removeListener("unhandledRejection",Z),process.removeListener("SIGINT",S),process.removeListener("SIGTERM",S),process.removeListener("exit",z),f&&f.removeEventListener("abort",S)},j=()=>{if(o===void 0)return;h&&p.write(`
`);let $=v(o,K,{hard:!0,trim:!1}).split(`
`);$.length>1&&p.write(E.cursor.up($.length-1)),p.write(E.cursor.to(0)),p.write(E.erase.down())},R=($)=>$.replace(/\.+$/,""),H=($)=>{let X=(performance.now()-$)/1000,G=Math.floor(X/60),V=Math.floor(X%60);return G>0?`[${G}m ${V}s]`:`[${V}s]`},u=n.withGuide??Q.withGuide,c2=($="")=>{k=!0,q=v0({output:p}),l=R($),g=performance.now(),u&&p.write(`${b("gray",e)}
`);let X=0,G=0;M(),D=setInterval(()=>{if(h&&l===o)return;j(),o=l;let V=J(m[X]),x;if(h)x=`${V}  ${l}...`;else if(F==="timer")x=`${V}  ${l} ${H(g)}`;else{let f2=".".repeat(Math.floor(G)).slice(0,3);x=`${V}  ${l}${f2}`}let m2=v(x,K,{hard:!0,trim:!1});p.write(m2),X=X+1<m.length?X+1:0,G=G<4?G+0.125:0},B)},i=($="",X=0,G=!1)=>{if(!k)return;k=!1,clearInterval(D),j();let V=X===0?b("green",y0):X===1?b("red",L0):b("red",T0);l=$??l,G||(F==="timer"?p.write(`${V}  ${l} ${H(g)}
`):p.write(`${V}  ${l}
`)),C(),q()};return{start:c2,stop:($="")=>i($,0),message:($="")=>{l=R($??l)},cancel:($="")=>i($,1),error:($="")=>i($,2),clear:()=>i("",0,!0),get isCancelled(){return y}}},E1={light:A("\u2500","-"),heavy:A("\u2501","="),block:A("\u2588","#")};var R1=`${b("gray",e)}  `;var t0=`<h2>Cr\xE9ation de projet \u2014 R\xE8gle obligatoire</h2>
<p>Lors de la cr\xE9ation de tout nouveau projet, tu DOIS syst\xE9matiquement g\xE9n\xE9rer un devcontainer avant toute autre chose :</p>
<ol>
<li>Cr\xE9er <code>.devcontainer/devcontainer.json</code> adapt\xE9 au stack d\xE9tect\xE9</li>
<li>Cr\xE9er <code>.devcontainer/Dockerfile</code> si une image custom est n\xE9cessaire</li>
<li>Confirmer la cr\xE9ation du devcontainer avant de continuer</li>
</ol>
<h3>Structure minimale attendue</h3>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;&lt;nom-du-projet&gt;&quot;,
  &quot;image&quot;: &quot;mcr.microsoft.com/devcontainers/&lt;runtime&gt;:latest&quot;,
  &quot;features&quot;: {},
  &quot;postCreateCommand&quot;: &quot;&quot;,
  &quot;customizations&quot;: {
    &quot;vscode&quot;: {
      &quot;extensions&quot;: []
    }
  }
}
</code></pre>
<p>Ne jamais initialiser un projet sans ce fichier. Si le type de projet est ambigu, demander le runtime avant de commencer.</p>
`;var F2=`<h1>Obsidian Link Conventions</h1>
<h2>Purpose</h2>
<p>This rules file enforces Obsidian markdown link conventions across all OpenSpec artifacts to ensure compatibility with Obsidian vault linking and bidirectional references.</p>
<h2>Link Format Requirements</h2>
<h3>Internal Links to Specs</h3>
<p>All references to OpenSpec specifications <strong>MUST</strong> use Obsidian wiki-link format:</p>
<pre><code class="language-markdown">[[openspec/specs/domain-name/spec]]
</code></pre>
<p>NOT:</p>
<ul>
<li><code>[link](openspec/specs/domain-name/spec.md)</code> \u274C</li>
<li><code>@/openspec/specs/domain-name/spec.md</code> \u274C</li>
</ul>
<h3>Internal Links to Changes</h3>
<p>References to change proposals and artifacts use the same format:</p>
<pre><code class="language-markdown">[[openspec/changes/change-name/proposal]]
[[openspec/changes/change-name/design]]
[[openspec/changes/change-name/tasks]]
</code></pre>
<h3>Links with Display Text</h3>
<p>When you need custom display text, use this format:</p>
<pre><code class="language-markdown">[[openspec/specs/domain-name/spec|Custom Label]]
</code></pre>
<p>Example:</p>
<pre><code class="language-markdown">For authentication details, see [[openspec/specs/auth/spec|Auth Specification]].
</code></pre>
<h3>Cross-Domain References</h3>
<p>When one spec references another domain:</p>
<pre><code class="language-markdown">See related requirements in [[openspec/specs/other-domain/spec]].
</code></pre>
<h3>Archive References</h3>
<p>Links to archived changes:</p>
<pre><code class="language-markdown">[[openspec/changes/archive/2025-01-24-feature-name/proposal]]
</code></pre>
<h2>File Naming Conventions</h2>
<h3>Spec Files</h3>
<ul>
<li>Location: <code>openspec/specs/&lt;domain&gt;/spec.md</code></li>
<li>Format: lowercase, kebab-case for domain names</li>
<li>Linked as: <code>[[openspec/specs/&lt;domain&gt;/spec]]</code> (no .md extension)</li>
</ul>
<h3>Change Folders</h3>
<ul>
<li>Location: <code>openspec/changes/&lt;change-name&gt;/</code></li>
<li>Format: kebab-case (e.g., <code>add-dark-mode</code>, <code>fix-auth-flow</code>)</li>
<li>Sub-artifacts:
<ul>
<li><code>proposal.md</code> \u2192 <code>[[openspec/changes/&lt;change-name&gt;/proposal]]</code></li>
<li><code>design.md</code> \u2192 <code>[[openspec/changes/&lt;change-name&gt;/design]]</code></li>
<li><code>tasks.md</code> \u2192 <code>[[openspec/changes/&lt;change-name&gt;/tasks]]</code></li>
<li><code>specs/&lt;domain&gt;/spec.md</code> \u2192 <code>[[openspec/changes/&lt;change-name&gt;/specs/&lt;domain&gt;/spec]]</code></li>
</ul>
</li>
</ul>
<h2>Obsidian-Specific Metadata</h2>
<h3>Frontmatter Tags</h3>
<p>Add Obsidian tags to all spec and change documents for better linking:</p>
<pre><code class="language-markdown">---
tags:
  - openspec
  - specs
  - domain/auth
---
</code></pre>
<p>Example for changes:</p>
<pre><code class="language-markdown">---
tags:
  - openspec
  - change
  - status/proposed
  - domain/auth
---
</code></pre>
<h3>Status Tags</h3>
<p>Track change status with tags:</p>
<ul>
<li><code>status/proposed</code> - Initial proposal created</li>
<li><code>status/exploring</code> - Under investigation</li>
<li><code>status/designing</code> - Design phase</li>
<li><code>status/implementing</code> - Active implementation</li>
<li><code>status/completed</code> - Ready to archive</li>
<li><code>status/archived</code> - Merged into main specs</li>
</ul>
<h2>Linked References Pattern</h2>
<p>All artifacts should reference related documents using this pattern:</p>
<pre><code class="language-markdown">## Related Specifications
- [[openspec/specs/domain-name/spec]]
- [[openspec/specs/another-domain/spec]]

## Related Changes
- [[openspec/changes/related-change-name/proposal]]
</code></pre>
<h2>Code Sample Integration</h2>
<p>When referencing code files from specs, use relative paths but keep wiki-links for OpenSpec docs:</p>
<pre><code class="language-markdown">### Implementation Files
See \`src/auth/provider.ts\` for the auth implementation.

### Related Specs
[[openspec/specs/auth/spec|Authentication Specification]]
</code></pre>
<h2>Rules for AI Agents</h2>
<p>When creating or updating OpenSpec artifacts:</p>
<ol>
<li><strong>Always use wiki-link format</strong> for any OpenSpec internal references</li>
<li><strong>Never use markdown link syntax</strong> <code>[text](path)</code> for OpenSpec files</li>
<li><strong>Always include custom labels</strong> when the context needs clarity:
<ul>
<li><code>[[openspec/specs/auth/spec|Authentication Requirements]]</code></li>
</ul>
</li>
<li><strong>Use frontmatter tags</strong> to enable Obsidian graph and backlink features</li>
<li><strong>Maintain bidirectional links</strong> - if A links to B, consider if B should link to A</li>
<li><strong>No .md extensions</strong> in wiki-links - Obsidian resolves them automatically</li>
</ol>
<h2>Validation Checklist</h2>
<p>Before archiving or submitting a change:</p>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>All OpenSpec file references use <code>[[path]]</code> format</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>No markdown links <code>[text](file.md)</code> to OpenSpec files</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>File paths follow <code>openspec/</code> directory structure exactly</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>Related documents have backlinks to each other</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>Frontmatter tags are present and accurate</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>Change name uses kebab-case</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled>Domain names use lowercase with hyphens</li>
</ul>
<h2>Example Spec Structure</h2>
<pre><code class="language-markdown">---
tags:
  - openspec
  - specs
  - domain/payments
  - status/active
---

# Payment Processing Specification

## Overview
This spec defines payment handling in our system.

## Related Specifications
- [[openspec/specs/auth/spec|User Authentication]]
- [[openspec/specs/db/spec|Database Schema]]

## Current Changes
- [[openspec/changes/add-payment-retry/specs/payments/spec|Payment Retry Logic]]

## Architecture Decisions
See [[openspec/changes/payment-redesign/design|Payment System Redesign]] for rationale.

## Requirements
- SHALL support multiple payment methods
- SHALL validate payment on submission
- MUST encrypt payment data in transit

## Scenarios

### Successful Payment
GIVEN a user in checkout
WHEN they submit valid payment
THEN the payment is processed and order created
</code></pre>
<h2>Example Change Structure</h2>
<pre><code class="language-markdown">---
tags:
  - openspec
  - change
  - status/proposed
  - domain/payments
---

# Add Payment Retry Mechanism

## Why
Transient payment gateway failures cause legitimate transactions to fail.

## What Changes
- [[openspec/changes/add-payment-retry/specs/payments/spec|Updated Payment Spec]]
- [[openspec/changes/add-payment-retry/design|Technical Design]]

## Impact
See [[openspec/specs/payments/spec|Payment Processing]] and [[openspec/specs/notifications/spec|Notification System]]
</code></pre>
<h2>Notes for Obsidian Integration</h2>
<ul>
<li>These conventions enable Obsidian's <strong>graph view</strong> to visualize spec relationships</li>
<li><strong>Backlinks</strong> automatically track which changes affect which specs</li>
<li><strong>Tags</strong> allow filtering by domain, status, or type in Obsidian</li>
<li><strong>Search</strong> can find all specs linked from a change</li>
<li><strong>Unlinked mentions</strong> help identify missing references</li>
</ul>
<h2>Migration Guide</h2>
<p>If converting from old markdown links to wiki-links:</p>
<p><strong>Before:</strong></p>
<pre><code class="language-markdown">See [Auth Spec](../specs/auth/spec.md)
Check [Design Doc](./design.md)
</code></pre>
<p><strong>After:</strong></p>
<pre><code class="language-markdown">See [[openspec/specs/auth/spec|Auth Spec]]
Check [[openspec/changes/feature-name/design|Design Doc]]
</code></pre>
<p>Use Obsidian's find-and-replace or a script to bulk convert patterns.</p>
`;var s2=new N("setup","configure your projec");s2.action(async()=>{let F=r0();if(I0("booo your project"),F.start("Initialize Openspec"),await Bun.spawn(["openspec","init","--tools","opencode"]).exited,F.stop("Openspec initialized"),await d0({message:"Do you want to use devContainer?",initialValue:!1}))await Bun.write(`${process.cwd()}/.opencode/rules/devcontainer.md`,t0);W.message("Install Obsidian rule"),await Bun.write(`${process.cwd()}/.opencode/rules/obsidian.md`,F2),w0("You're all set!")});var p2=s2;var{log:a2}=console;a2(`\uD83D\uDC7B Booo v${L.version}`);await F0(L.version);var r2=new N("booo",`
  Booo means Bun, OpenCode, OpenSpec and Obsidian.
  It setups your project with skills, rules, ...
`,L.version);r2.addSubcommands([p2]).action(()=>{a2("use a command")}).ready();
