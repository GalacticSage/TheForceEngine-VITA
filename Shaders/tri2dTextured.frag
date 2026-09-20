uniform sampler2D image;
uniform int isTextured;
varying vec2 Frag_Uv;
varying vec4 Frag_Color;
#define Out_Color gl_FragColor
void main()
{
    Out_Color = Frag_Color;
	if (int(isTextured) == int(1))
	{
		vec4 texColor = texture2D(image, Frag_Uv);
		Out_Color *= texColor;
		Out_Color.rgb *= texColor.a;
	}
}
