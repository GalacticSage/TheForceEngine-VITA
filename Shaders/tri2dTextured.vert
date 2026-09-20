uniform vec4 ScaleOffset;
attribute vec2 vtx_pos;
attribute vec2 vtx_uv;
attribute vec4 vtx_color;
varying vec4 Frag_Color;
varying vec2 Frag_Uv;
void main()
{
    vec2 pos = vtx_pos.xy * ScaleOffset.xy + ScaleOffset.zw;
    Frag_Uv = vtx_uv;
    Frag_Color = vec4(vtx_color.rgb*vtx_color.a, vtx_color.a);
    gl_Position = vec4(pos.xy, 0, 1);
}