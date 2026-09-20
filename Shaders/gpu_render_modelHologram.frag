uniform sampler2D Palette;
#ifdef OPT_TRUE_COLOR
varying vec3 Frag_Color;
#else
varying int Frag_Color;
#endif

#ifdef OPT_BLOOM
#define Out_Color gl_FragColor
vec4 Out_Material;
#else
#define Out_Color gl_FragColor
#endif

void main()
{
	#ifdef OPT_TRUE_COLOR
		Out_Color.rgb = Frag_Color;
	#else
		Out_Color.rgb = texelFetch(Palette, ivec2(Frag_Color, 0), 0).rgb;
	#endif
	Out_Color.a = 1.0;

#ifdef OPT_BLOOM
	// Material (just emissive for now)
	Out_Material = vec4(0.0);
	Out_Material.x = 1.0;
#endif
}
