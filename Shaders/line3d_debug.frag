varying vec4 Frag_Color;
#define Out_Color gl_FragColor
void main()
{
	Out_Color.rgb = Frag_Color.rgb * Frag_Color.a;
	Out_Color.a = Frag_Color.a;
}
