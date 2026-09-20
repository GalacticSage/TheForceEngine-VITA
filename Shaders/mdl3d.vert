uniform vec3 CameraPos;
uniform mat3 CameraView;
uniform mat4 CameraProj;

uniform vec3 ObjPos;
uniform mat3 ObjTransform;

attribute vec3 vtx_pos;
attribute vec2 vtx_uv;
attribute vec4 vtx_color;

varying vec4 Frag_Color;
varying vec2 Frag_Uv;
varying vec3 Frag_Pos;

void main()
{
	vec3 wpos = vtx_pos * ObjTransform + ObjPos;
    vec3 vpos = (wpos - CameraPos) * CameraView;
	
	gl_Position = vec4(vpos, 1.0) * CameraProj;

	Frag_Color = vtx_color;
	Frag_Uv = vtx_uv;
	Frag_Pos = wpos;
}
