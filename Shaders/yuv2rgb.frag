// BT.601 YCbCr -> RGB for Theora video frames.
uniform sampler2D TexY;
uniform sampler2D TexCb;
uniform sampler2D TexCr;

varying vec2 Frag_UV;
#define Out_Color gl_FragColor

void main()
{
    float y  = texture2D(TexY,  Frag_UV).r;
    float cb = texture2D(TexCb, Frag_UV).r - 0.5;
    float cr = texture2D(TexCr, Frag_UV).r - 0.5;

    // Rescale Y from studio range [16..235] to [0..1].
    y = (y - 16.0 / 255.0) * (255.0 / 219.0);

    vec3 rgb;
    rgb.r = y + 1.596 * cr;
    rgb.g = y - 0.391 * cb - 0.813 * cr;
    rgb.b = y + 2.018 * cb;

    Out_Color = vec4(clamp(rgb, 0.0, 1.0), 1.0);
}
