uniform vec4 ScaleOffset;

attribute vec4 vtx_pos;
attribute vec4 vtx_uv;
attribute vec4 vtx_uv1;
attribute vec4 vtx_color;
#ifdef OPT_CURVE
	varying vec4 Frag_ControlAB;
	varying vec2 Frag_ControlC;
	varying vec4 Frag_Offsets;
#else
	varying float Frag_Width;
	varying vec4 Frag_UV;
#endif
varying vec2 Frag_Pos;
varying vec4 Frag_Color;

void main()
{
    vec2 pos = vtx_pos.xy * ScaleOffset.xy + ScaleOffset.zw;
#ifdef OPT_CURVE
	Frag_ControlAB = vtx_uv;
	Frag_ControlC = vtx_pos.zw;
	Frag_Offsets = vtx_uv1;
#else  // Normal Line
    Frag_Width = vtx_pos.z;
    Frag_UV = vtx_uv;
#endif
	Frag_Pos = vtx_pos.xy;
	Frag_Color = vtx_color;
    gl_Position = vec4(pos.xy, 0, 1);
}
