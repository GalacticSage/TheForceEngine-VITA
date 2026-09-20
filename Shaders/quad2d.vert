uniform vec4 ScaleOffset;
attribute vec2 vtx_pos;
attribute vec2 vtx_uv;
attribute vec4 vtx_color;
varying vec2 Frag_UV;
varying vec2 Frag_Pos;
varying vec4 Frag_Color;
void main()
{
    vec2 pos = vtx_pos.xy * ScaleOffset.xy + ScaleOffset.zw;
    Frag_Pos = vtx_pos.xy;
    Frag_UV = vtx_uv;
    Frag_Color = vtx_color;
    gl_Position = vec4(pos.xy, 0, 1);
}
