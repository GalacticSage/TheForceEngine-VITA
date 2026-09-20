uniform vec3 CameraPos;
uniform mat3 CameraView;
uniform mat4 CameraProj;

attribute vec3 vtx_pos;
attribute vec2 vtx_uv;
attribute vec2 vtx_uv1;
attribute vec2 vtx_uv2;
attribute vec4 vtx_color;
varying vec4 Frag_Color;
varying vec2 Frag_Uv;
varying vec2 Frag_Uv1;
varying vec2 Frag_Uv2;
varying vec3 Frag_Pos;
void main()
{
    vec3 vpos = (vtx_pos - CameraPos) * CameraView;
	
	gl_Position = vec4(vpos, 1.0) * CameraProj;
	Frag_Color = vtx_color;
	Frag_Uv = vtx_uv;
	Frag_Uv1 = vtx_uv1;
	Frag_Uv2 = vtx_uv2;
	Frag_Pos = vpos;
}
