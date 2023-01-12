(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))p(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function b(){}function U(e){return e()}function B(){return Object.create(null)}function I(e){e.forEach(U)}function z(e){return typeof e=="function"}function Z(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function nn(e){return Object.keys(e).length===0}function en(e,n){e.appendChild(n)}function tn(e,n,o){e.insertBefore(n,o||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function on(e,n,o,p){return e.addEventListener(n,o,p),()=>e.removeEventListener(n,o,p)}function $(e,n,o){o==null?e.removeAttribute(n):e.getAttribute(n)!==o&&e.setAttribute(n,o)}function rn(e){return Array.from(e.childNodes)}let F;function E(e){F=e}const g=[],D=[],A=[],q=[],an=Promise.resolve();let L=!1;function cn(){L||(L=!0,an.then(O))}function T(e){A.push(e)}const S=new Set;let k=0;function O(){if(k!==0)return;const e=F;do{try{for(;k<g.length;){const n=g[k];k++,E(n),sn(n.$$)}}catch(n){throw g.length=0,k=0,n}for(E(null),g.length=0,k=0;D.length;)D.pop()();for(let n=0;n<A.length;n+=1){const o=A[n];S.has(o)||(S.add(o),o())}A.length=0}while(g.length);for(;q.length;)q.pop()();L=!1,S.clear(),E(e)}function sn(e){if(e.fragment!==null){e.update(),I(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(T)}}const pn=new Set;function ln(e,n){e&&e.i&&(pn.delete(e),e.i(n))}function fn(e,n,o,p){const{fragment:a,after_update:r}=e.$$;a&&a.m(n,o),p||T(()=>{const f=e.$$.on_mount.map(U).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...f):I(f),e.$$.on_mount=[]}),r.forEach(T)}function xn(e,n){const o=e.$$;o.fragment!==null&&(I(o.on_destroy),o.fragment&&o.fragment.d(n),o.on_destroy=o.fragment=null,o.ctx=[])}function un(e,n){e.$$.dirty[0]===-1&&(g.push(e),cn(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function dn(e,n,o,p,a,r,f,_=[-1]){const y=F;E(e);const i=e.$$={fragment:null,ctx:[],props:r,update:b,not_equal:a,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(y?y.$$.context:[])),callbacks:B(),dirty:_,skip_bound:!1,root:n.target||y.$$.root};f&&f(i.root);let w=!1;if(i.ctx=o?o(e,n.props||{},(x,v,...l)=>{const d=l.length?l[0]:v;return i.ctx&&a(i.ctx[x],i.ctx[x]=d)&&(!i.skip_bound&&i.bound[x]&&i.bound[x](d),w&&un(e,x)),v}):[],i.update(),w=!0,I(i.before_update),i.fragment=p?p(i.ctx):!1,n.target){if(n.hydrate){const x=rn(n.target);i.fragment&&i.fragment.l(x),x.forEach(Y)}else i.fragment&&i.fragment.c();n.intro&&ln(e.$$.fragment),fn(e,n.target,n.anchor,n.customElement),O()}E(y)}class yn{$destroy(){xn(this,1),this.$destroy=b}$on(n,o){if(!z(o))return b;const p=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return p.push(o),()=>{const a=p.indexOf(o);a!==-1&&p.splice(a,1)}}$set(n){this.$$set&&!nn(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const vn=`attribute vec2 aVertexPosition;

void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);
    
}`,mn=`precision lowp float;

#define ITER 1

#define PI 3.1415926535897932
#define E 2.71828182845904523536028
#define xEq p.x
#define yEq p.y
#define iterEq work

uniform int time;
uniform highp vec2 resolution;
uniform highp vec2 posDilation;
uniform highp vec2 posTranslation;

uniform sampler2D uSampler;

uniform highp vec2 mouse;
uniform highp vec2 mouseDilation;

vec3 map( vec2 a, vec2 old);
vec3 aces(vec3 x);
vec2 sqr( vec2 a);

float cosh( float a);
float sinh( float a);
vec2 cosh( vec2 a);
vec2 sinh( vec2 a);
vec2 isin( vec2 a);
vec2 icos( vec2 a);

float factorial( float a);  
vec2 gamma( vec2 a);

vec2 ex( vec2 a);
vec2 reciprocal( vec2 a);
vec2 ln( vec2 a);
vec2 pwr( vec2 a, float exponent);
vec2 pwr( vec2 a, vec2 exponent);
vec2 pwr( float a , vec2 exponent);

float atan2( vec2 a);
vec3 hsv2rgb( vec3 c);

void main() {

    float time = float(time);
    vec2 m = (mouse/resolution)*2.0 - 1.0;
    m *= 2.0;

    highp vec2 p = (gl_FragCoord.xy/resolution)*2.0 - 2.0;
    p.x *= resolution.x/resolution.y;
    p *= posDilation;
    p += posTranslation;
    

    highp vec2 old = p;
    // m = old; //mandelbrotify

    float alter = 0.1*length(posDilation);
    m += alter * vec2(sin(time/1000.), cos(time/1000.));
    float a = m.x;
    float b = m.y;//mix(-1.0, 1.0, 0.7+sin(time)/1.0);

    
    highp vec2 work = p;


    float t = 0.0;
    float v = 0.1;

    float fITER;

    vec3 col = vec3(a, b, 1.);

    for (int i = 0; i <= ITER; i++){

        // work.x = xEq;
        // work.y = yEq;
        // p = iterEq;

        // henon map
        // work.x = 1.0 - a*(p.x*p.x) + p.y;
        // work.y = b*p.x;

        // work.x = p.y;
        // work.y = -b*p.x+a*p.y-(p.y*p.y*p.y);

        // gingerbread man 
        // work.x = b-p.y + a*abs(p.x);
        // work.y = p.x;

        // van de pol
        // work.x = p.y;
        // work.y = a*(1.0 - p.x*p.x)*p.y - p.x;

        // work.y = (p.y+abs(p.x))/2.;
        // work.x = p.x + work.y +a*p.x*(p.x-2.0) +b*p.x*p.y;

        // ikeda
        // work.x = 1.0+a*(p.x*cos(t) - p.y*sin(t)); 
        // work.y = b*(p.x*sin(t) + p.y*cos(t));
        //  t = 0.4 - 6.0/(1.0+(p.x*p.x)+(p.y*p.y));


        // zaslavskii
        // t = (1.0-exp(-b))/b;
        // work.x = mod((p.x + v*(1.0+t*p.y)+ a*v*t*cos(2.0*3.14*p.x)), 1.0);
        // work.y = exp(-b)*(p.y + a*cos(2.0*3.14*p.x));

        // work.x = p.x + p.y + (a/6.28)*sin(6.28*b*p.x);
        // work.y = work.x -p.x;
        // p = mod(work, 1.);
        
        // work.x = a*pow(sqrt(p.x), (1.0/3.0)) + pow((p.y), 1.0/4.0); // muht wth
        // work.y = b*(p.x*p.x)+p.y;

        // work.x = p.x*abs(sin(p.x)) + p.y*a*(1.0/(p.x*p.x+1.0+a));
        // work.y = p.x*p.y*b*3.0 + pow((b/(cos(p.y)*cos(p.y))), 2.0);

        // work.y = p.y + a*p.y + b*p.x*(p.x-1.0) + p.x*p.y;
        // work.x = work.y + p.x;

        // work.x = (p.x*p.x) - (p.y*p.y) -old.x- a*p.x - b*p.y;
        // work.y = 2.0*abs(p.x*p.y) - old.y- a*p.x + b*p.y;

        // work.x = sin(cos(a-(p.x*p.x)))/(p.y*p.y)-(b*b*b);
        // work.y = tan(work.x + 1.0);

        // work.x = p.y + a*(1.0 -b*p.y*p.y)*p.y + t*p.x + ( (2.0* (1.0 - t) * p.x*p.x ) /(1.0 + p.x * p.x));
        // work.y = -p.x + t*work.x + ( (2.0* (1.0 - t) * work.x*work.x ) /(1.0 + work.x * work.x));
        
        // mandel/julia/burning ship
        // p = abs(p);
        // work = (sqr(p)) + old;

        // lew et. al
        // work.x = a - p.x*p.y - b*p.x;
        // work.y = p.x*p.y - p.y;

        //gumowski-mira ?
        // t = p.x;
        // work.x += b*p.y +v;
        // v = a*p.x + (1.-a)*2.*p.x*p.x/(1.+p.x*p.x);
        // work.y += v-t;

        //clifford attractor
        // work.x = sin(a*p.y) + cos(b*p.x);
        // work.y = sin(b*p.x) + cos(b*p.y);

        // work.x += (p.x + 2.*p.y)/4.;
        // work.y += (-3.0*p.x + -2.0*p.y)/4.;

        // work.x = a*(sin(p.y*b)+mix(a,b,0.5)*cos(b*p.x)) + (1.-a)*(p.y+b*p.x/abs(p.x)*sqrt(abs(a*p.x - b)));
        // work.x = a*(sin(p.x*b)+a*cos(b*p.y)) + (1.-a)*(b-p.x);

        // work.x = p.x-a*sin(p.y+tan(b*p.y));
        // work.y = p.y-a*sin(p.x+tan(b*p.x));
            
        // work = sqr( (sqr(p*a) + (old-1.0) )/(2.0*p + (old -2.0)) );
        
        // work.x = b*p.y+t;
        // t = a*work.x+(1.-a)*2.*work.x*work.x/(1.+work.x*work.x);
        // work.y = t-p.x;

        // work.x = p.y-1.-sqrt(abs(b*p.x-1.-v))*sign(p.x-1.);
        // work.y = a-p.x-1.;
        
        // work.x = p.x-(a*p.x*t)+(a*p.y*t);
        // work.y = p.y+(b*p.x*t)+(p.y*t)-(v*p.x*t);
        // v = v + (0.01*v*t)+(p.x*p.y*0.01);

        //gaussian map
        // work = ex(a*-sqr(p))+b;

        //complex e^z
        // work = ex(p)+m;

        // mandelbox
        // float r = length(p);
        // if (p.x > 1.0) work.x =  b * (2.0 - work.x);
        // else if (p.x < -1.0) work.x = b * (-2.0 - work.x);

        // if (p.y > 1.0) work.y = b * (2.0 - work.y);
        // else if (p.y < -1.0) work.y = b * (-2.0 - work.y);

        // if(r<t) { 
        //     work.x=work.x/(t*t); 
        //     work.y=work.y/(t*t);
        // }
        // else if(r<1.0){
        //     work.x=work.x/(r*r);
        //     work.y=work.y/(r*r);
        // }

        // // //+
        // work.x *= a;
        // work.y *= a;

        // work = pwr(m-old, p);
        
        // work = sinh(m-p);

        //to do work on this bitch it collatz
        // work = .25*(2.+a*2.*p-(b+5.*p)*(0.5*(cosh(p*PI))) );
        
        // work = abs(p)/(p.x*p.x+p.y*p.y) - abs(m);

        // folded idk
        // work = abs(sqr(p)) +m;

        // work = pwr(a*p,p+b);
        // work = (p*p) + m;
        // work = (exp(p)+exp(-p))/2.;

        //f(x)= x^5 - 1
        //f'(x) 5x^4
        // work = p - pwr(p,a)/(pwr(p, 2.)-2.);

        // work = pwr(p,pwr(p,pwr(a+p,b+p)));

        // work.x += p.y-1.-sqrt(abs(b*p.x-1.-b))*sign(p.x-1.);
        // work.y += a-p.x-1.;

        // work += mod(work, vec2(mod(p.x, p.y), mod(p.y, p.x)))+m;

        // p = mix(work, vec2(0.), 1.-distance(work, old));
        // p = abs(work);
        // p = mod(vec2(1.,1.), p);
        // p = fract(work);

        // work.x = p.x/(a-p.y);
        // work.y = p.y/(b-p.x);
        
        // work = pwr(1.-sinh(p), m);

        // p += old; 
        // work = pwr(float(i), p);
        // work.y *= -1.;
        // work /= length(work)*length(work);
        // p += work;

        // vec3 f = col;
        // col.x += f.y*(f.z - 1. + f.x*f.x) + p.x*f.x;
        // col.y += f.x*(3.*f.z + 1. - f.x*f.x) +p.x*f.y;
        // col.z += -2.*f.z*(p.y +f.x*f.y);

        // // grid
        // float width = 0.001;
        // vec2 test = abs((mod(work+0.5, 1.0))-0.5);
        // if(test.x < width || test.y < width){
        //     gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        //     return;
        // }

        // work.x = p.x-1.0;
        
        // color origin red
        if(length(work - vec2(0.0, 0.0)) < 0.01){
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            return;
        }

        // inf blue
        if(length(work) > 1000.0){
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
            return;
        }
        
        // line green doesnt work
        if(length(abs(work+ vec2(1.0, 1.0))) < 0.01){
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
            return;
        }
        
        // optimised
        if(length(p - work) < 0.01){
            p = work;
            break;
        } else if ( length(work) > 1000.){
            p = vec2(0.);
            //p =work;
            break;
        }

        p = work;
        
    
    }

gl_FragColor = vec4(map(p, old), 1.0);
} 

vec3 map(vec2 a, vec2 old){

    // a = a-old;
    float gamma = 0.8;
    float avg = length(a);
    a = vec2(avg);
    // return pow(vec3(avg), vec3(1. / gamma));
    //return vec3(a.x/avg, a.y/avg, mix(a.x, a.y, 0.3)/avg);

    //nice old dude shading
    // return vec3(a.x, a.y, mix(a.x, a.y, 0.2));
    // if(old.x > 0.0)
        return aces(pow(vec3(a.x, a.y, mix(a.x, a.y, 0.2)), vec3(1. / gamma)));
    // return pow(vec3(a.x, a.y, mix(a.x, a.y, 0.2)), vec3(1. / gamma));

    // a = mix(a, old, di.stance(a, old));

    // float phi = atan(old.y-a.y, old.x-a.x);
    // float h = mod(phi+PI, 2.*PI)/(2.*PI);
    // float h = phi;//(phi+PI)/(PI*4.);
    // float v = ((1.)-length(a));
    // // if(v > 0.0)
    // //     v = darkness;

    // vec3 rgb = hsv2rgb(vec3(h, 1.0, 1.0));
    // return rgb;
    // return aces(pow(rgb, vec3(1. / gamma)));
}

vec3 aces(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

float cosh( float a){
    return 0.5*(exp(a)+exp(-a));
}

float sinh( float a){
    return 0.5*(exp(a)-exp(-a));
}

vec2 cosh( vec2 a){
    return vec2(cosh(a.x)*cos(a.y), sinh(a.x)*sin(a.y));
}

vec2 sinh( vec2 a){
    return vec2(sinh(a.x)*cos(a.y), cosh(a.x)*sin(a.y));
}

vec2 isin( vec2 a){
    return sinh(a);
}

vec2 icos( vec2 a){
    return cosh(a);
}

// vec2 gamma( vec2 a, vec2 go){

//     vec2 y;
//     if(a.x > 0.5){
        
//         a = go;
//         a.x -= 1.;
//         vec2 x = vec2(0.99999999999980993, 1.);

//         x += 676.5203681218851 / vec2(a.x+1., a.y+1.);
//         x += -1259.1392167224028 / vec2(a.x+2., a.y+1.);
//         x += 771.32342877765313 / vec2(a.x+3., a.y+1.);
//         x += -176.61502916214059 / vec2(a.x+4., a.y+1.);
//         x += 12.507343278686905 / vec2(a.x+5., a.y+1.);
//         x += -0.13857109526572012 / vec2(a.x+6., a.y+1.);
//         x += 9.9843695780195716e-6 / vec2(a.x+7., a.y+1.);
//         x += 1.5056327351493116e-7 / vec2(a.x+8., a.y+1.);

//         float t = a.x + 7.5;
//         y = sqrt(2.*PI) * pwr(t, vec2(a.x+0.5, a.y))* exp(-t) * x;

    

//         if(abs(y.y) <= 1e-07){
//             y = vec2(y.x, 0.);
//         }
//         return y;

//     }else {
//          y = PI / (sin(PI*a) * gamma(vec2(1.-a.x, a.y)), );
//     }
// }

float factorial( float a){
    // int sum = 1;
    // for(int t = a;t>1;t--)
    //     sum *= t;
    // return sum;

    return sqrt(2.*PI*a)*pow(a/E, a);
}

vec2 gamma( vec2 a){
    a.x -= 1.;
    const int i = 10;
    float fi = float(i);

    vec2 sum = vec2(0.);

    for(int k = 1; k < i; k++){

        float fk = float(k);

        float fact = float(factorial(fk-1.));
        fact = pow(-1., (fk-1.))/fact;
        fact *= pow(-fk+fi, fk-0.5)*exp(-fk+fi);

        vec2 n = vec2(a.x+fk, a.y);
        //fact/n
        float conj2 = n.x*n.x + n.y*n.y;
        sum += vec2(fact*n.x/conj2, -fact*n.y/conj2);
    }
    return sum;
    sum += sqrt(2.*PI);

    sum *= pwr(a+fi, vec2(a.x+0.5, a.y))*ex(vec2(-a.x-fi, a.y));
    return sum;

}

vec2 sqr( vec2 a ){
    float x = a.x*a.x - a.y*a.y;
    float y = 2.0 *(a.y*a.x);
    return vec2(x, y);
}

vec2 ex( vec2 a ){
    float x = exp(a.x)*cos(a.y);
    float y = exp(a.x)*sin(a.y);
    return vec2(x, y);
}

vec2 reciprocal( vec2 a){

    float dis = a.x*a.x+a.y*a.y;
    return vec2(a.x/dis, -a.y/dis);
}

vec2 ln( vec2 a ){
    float x = 0.5*log(length(a));
    float y = atan2(a);
    return vec2(x, y);
}

float atan2(vec2 v){
    if(abs(v.x) > abs(v.y))
        return (PI/2.0 - atan(v.x,v.y));
    else
        return atan(v.y,v.x);
}

vec2 pwr( vec2 a, float exponent){
    
    vec2 polar = vec2(length(a), atan2(a));
    polar = vec2(pow(polar.x, exponent), polar.y*exponent);

    a = vec2(polar.x*cos(polar.y), polar.x*sin(polar.y));
    return a;
}

vec2 pwr( vec2 a, vec2 exponent){

    float arg = atan2(a);
    float eugh = a.x*a.x+a.y*a.y;
    float mult = pow(eugh, exponent.x/2.)*exp(-exponent.y*arg);
    float angle = exponent.x*arg+0.5*exponent.y*log(eugh);

    return mult*vec2(cos(angle), sin(angle));
}

vec2 pwr( float a , vec2 exponent){

    float la = log(a);
    float re = cos(exponent.y*la);
    float im = sin(exponent.y*la);

    return pow(a, exponent.x)*vec2(re, im);
}

vec3 hsv2rgb(vec3 c) {
    c = clamp(c, 0., 1.);
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`;function wn(e){let n,o,p,a;return{c(){n=C("body"),o=C("div"),o.innerHTML='<canvas id="soft" class="svelte-1u6orgu"></canvas>',$(o,"id","glContainer"),$(o,"class","svelte-1u6orgu"),$(n,"class","svelte-1u6orgu")},m(r,f){tn(r,n,f),en(n,o),p||(a=on(o,"load",e[0]()),p=!0)},p:b,i:b,o:b,d(r){r&&Y(n),p=!1,a()}}}var hn=30;function kn(e){var n,o={};function p(t){n=t.getContext("experimental-webgl"),n.viewportWidth=t.width,n.viewportHeight=t.height}function a(t,s){let u="",m;if(s=="shader-fs"?(u=mn,m=t.createShader(t.FRAGMENT_SHADER)):s=="shader-vs"&&(u=vn,m=t.createShader(t.VERTEX_SHADER)),t.shaderSource(m,u),t.compileShader(m),!t.getShaderParameter(m,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(m));return m}var r,f,_,y,i=[0,0],w,x=[0,0],v,l=[0,0],d,c=[1,1];function H(){var t=a(n,"shader-fs"),s=a(n,"shader-vs");r=n.createProgram(),n.attachShader(r,s),n.attachShader(r,t),n.linkProgram(r),n.getProgramParameter(r,n.LINK_STATUS)||alert("Could not initialise shaders"),n.useProgram(r);var u=n.createTexture();n.bindTexture(n.TEXTURE_2D,u),y=n.getUniformLocation(r,"resolution"),n.uniform2f(y,i[0],i[1]),_=n.getUniformLocation(r,"time"),n.uniform1i(_,Date.now()),w=n.getUniformLocation(r,"mouse"),n.uniform2f(w,x[0],x[1]),f=n.getAttribLocation(r,"aVertexPosition"),n.enableVertexAttribArray(f),d=n.getUniformLocation(r,"posDilation"),n.uniform2f(d,c[0],c[1]),v=n.getUniformLocation(r,"posTranslation"),n.uniform2f(v,l[0],l[1])}var h;function M(){h=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,h);var t=[1,1,-1,1,1,-1,-1,-1];n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW),h.itemSize=2,h.numItems=4}function W(){n.viewport(0,0,n.viewportWidth,n.viewportHeight),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.bindBuffer(n.ARRAY_BUFFER,h),n.vertexAttribPointer(f,h.itemSize,n.FLOAT,!1,0,0);var t=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.deleteBuffer(t),n.uniform1i(_,window.performance.now())}function N(){var t=document.getElementById("soft"),s=document.getElementById("glContainer");window.addEventListener("resize",j,!1),document.addEventListener("mousedown",K,!1),document.addEventListener("mouseup",V,!1),document.addEventListener("mousemove",X,!1),document.addEventListener("keydown",J,!1),document.addEventListener("keyup",Q,!1),document.addEventListener("wheel",G,!1),t.width=s.clientWidth*2,t.height=s.clientHeight*2,t.style.width=i[0]=s.clientWidth,t.style.height=i[1]=s.clientHeight,p(t),H(),M(),setInterval(W,1e3/hn)}function j(t){var s=document.getElementById("soft"),u=document.getElementById("glContainer");s.width=u.clientWidth*2,s.height=u.clientHeight*2,s.style.width=i[0]=u.clientWidth,s.style.height=i[1]=u.clientHeight,n.uniform2f(y,i[0],i[1])}var P,R=!1;function K(t){P=[t.clientX,t.clientY],R=!0}function V(t){R=!1}function X(t){if(o[16]||(x[0]=t.clientX,x[1]=t.clientY,n.uniform2f(w,x[0],x[1])),R){let s={x:t.clientX-P[0],y:-(t.clientY-P[1])};l[0]-=c[0]*.005*s.x,l[1]-=c[1]*.005*s.y,n.uniform2f(v,l[0],l[1]),P=[t.clientX,t.clientY]}}function G(t){t.preventDefault(),t.returnValue=!1,t.deltaY!=0&&(c[0]+=c[0]*.005*t.deltaY,c[1]+=c[1]*.005*t.deltaY,l[0]-=c[0]*.005*t.deltaX,l[1]-=c[1]*.005*t.deltaY,n.uniform2f(d,c[0],c[1]),n.uniform2f(v,l[0],l[1]))}function J(t){var s=2;o[t.keyCode]=!0,t.keyCode==187&&(c[0]/=s,c[1]/=s,n.uniform2f(d,c[0],c[1])),t.keyCode==189&&(c[0]*=s,c[1]*=s,n.uniform2f(d,c[0],c[1])),t.keyCode==82&&(c=[1,1],l=[0,0],n.uniform2f(d,c[0],c[1]),n.uniform2f(v,l[0],l[1]))}function Q(t){o[t.keyCode]=!1}return[N]}class gn extends yn{constructor(n){super(),dn(this,n,kn,wn,Z,{},null,[-1,-1])}}new gn({target:document.getElementById("app")});
