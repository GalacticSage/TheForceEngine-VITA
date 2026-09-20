#include "Shaders/grid.h"

uniform vec3 GridOpacitySubGrid;

varying vec2 Frag_UV;
varying vec3 Frag_Pos;
varying vec2 Frag_Dir;
varying vec3 View_Pos;
varying vec3 View_Up;
#define Out_Color gl_FragColor

void main()
{
	vec3 outColor = vec3(0.0);
	float outAlpha = 0.0;
	float gridOpacity = GridOpacitySubGrid.x;
	float gridSize    = GridOpacitySubGrid.y;

	float viewFalloff = computeViewFalloff(View_Pos, View_Up);
	drawFloorGridLevels(outColor, outAlpha, gridSize, Frag_UV.xy, viewFalloff, Frag_Pos);
	
    Out_Color.rgb = outColor * gridOpacity;
	Out_Color.a   = outAlpha * gridOpacity;
}
