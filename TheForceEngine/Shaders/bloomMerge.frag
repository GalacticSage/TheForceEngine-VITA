uniform sampler2D MergeCur;
uniform sampler2D MergePrev;
uniform float bloomSpread;

varying vec2 Frag_UV;
#define Out_Color gl_FragColor

void main()
{
    vec2 d = vec2(1.5) / vec2(textureSize(MergePrev, 0));
    vec3 b = texture2D(MergePrev, Frag_UV).rgb * 0.25;

    b += texture2D(MergePrev, Frag_UV + vec2(-d.x,  0.0)).rgb * 0.125;
    b += texture2D(MergePrev, Frag_UV + vec2( d.x,  0.0)).rgb * 0.125;
    b += texture2D(MergePrev, Frag_UV + vec2( 0.0, -d.y)).rgb * 0.125;
    b += texture2D(MergePrev, Frag_UV + vec2( 0.0,  d.y)).rgb * 0.125;

    b += texture2D(MergePrev, Frag_UV + vec2(-d.x, -d.y)).rgb * 0.0625;
    b += texture2D(MergePrev, Frag_UV + vec2( d.x, -d.y)).rgb * 0.0625;
    b += texture2D(MergePrev, Frag_UV + vec2(-d.x,  d.y)).rgb * 0.0625;
    b += texture2D(MergePrev, Frag_UV + vec2( d.x,  d.y)).rgb * 0.0625;

    Out_Color = vec4(mix(texture2D(MergeCur, Frag_UV).rgb, b, bloomSpread), 1.0);
}
