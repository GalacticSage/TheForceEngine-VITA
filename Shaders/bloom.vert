uniform vec4 ScaleOffset;
attribute vec2 vtx_pos;
attribute vec2 vtx_uv;

varying vec2 Frag_UV;

void main()
{
    Frag_UV = vec2(vtx_uv.x, 1.0 - vtx_uv.y);
    gl_Position = vec4(vtx_pos.xy * ScaleOffset.xy + ScaleOffset.zw, 0, 1);
}
