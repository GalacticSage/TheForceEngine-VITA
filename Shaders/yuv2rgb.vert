uniform vec4 ScaleOffset;
// pic_height / frame_height: scales V so we only sample the valid
// picture rows and never touch the macroblock-alignment padding at
// the bottom of the texture2D(e.g. 1080/1088 for a 1920x1088 OGV).
uniform float UVScale;
attribute vec2 vtx_pos;
attribute vec2 vtx_uv;

varying vec2 Frag_UV;

void main()
{
    Frag_UV = vec2(vtx_uv.x, (1.0 - vtx_uv.y) * UVScale);
    gl_Position = vec4(vtx_pos.xy * ScaleOffset.xy + ScaleOffset.zw, 0, 1);
}
