#include "Shaders/grid.h"

uniform sampler2D image;
varying vec4 Frag_Color;
varying vec2 Frag_Uv;
varying vec2 Frag_Uv1;
varying vec3 Frag_Pos;
varying float Frag_GridHeight;
#define Out_Color gl_FragColor

void main()
{
	vec3 viewNormal = computeViewNormal(Frag_Pos);
	float viewFalloff = computeViewFalloff(Frag_Pos, viewNormal);
	float heightScale = max(0.0, -Frag_GridHeight*8.0);
	if (heightScale > 0) { heightScale = min(1.0, 1.0 / heightScale); }
	else { heightScale = 1.0; }

	vec4 texelColor = texture2D(image, Frag_Uv1);
	if (texelColor.a < 0.5 || Frag_Uv1.x < 0.0 || Frag_Uv1.x >= 1.0 || Frag_Uv1.y < 0.0 || Frag_Uv1.y >= 1.0) { discard; }

	vec3 baseColor = Frag_Color.rgb * texelColor.rgb;
	vec3 outColor = vec3(0.0);
	float outAlpha = 0.0;
	drawFloorGridLevels(outColor, outAlpha, 0.5,  Frag_Uv.xy, viewFalloff, Frag_Pos);
	outColor = baseColor + outColor * heightScale;

    Out_Color = vec4(outColor * Frag_Color.a, Frag_Color.a);
}
