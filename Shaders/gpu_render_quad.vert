uniform vec4 ScaleOffset;

attribute vec4 vtx_pos;
attribute vec4 vtx_color;

varying vec2 Frag_Uv;		// base uv coordinates (0 - 1)
varying vec4 Frag_TextureId_Color;

void main()
{
	Frag_Uv = vtx_pos.zw;
	Frag_TextureId_Color = vtx_color;

	vec2 pos = vtx_pos.xy*ScaleOffset.xy + ScaleOffset.zw;
	gl_Position = vec4(pos.xy, 0, 1);
}
