uniform sampler2D Image;
uniform vec4 Tint;

varying vec2 Frag_UV;
#define Out_Color gl_FragColor

void main()
{
	vec4 color = texture2D(Image, Frag_UV) * Tint;
	Out_Color.rgb = color.rgb * vec3(color.a);
	Out_Color.a = color.a;
}
