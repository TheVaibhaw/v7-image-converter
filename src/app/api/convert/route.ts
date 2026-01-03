import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export const runtime = 'nodejs'; // sharp requires nodejs runtime, not edge

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const targetFormat = formData.get("format") as string;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        if (!targetFormat) {
            return NextResponse.json({ error: "No target format specified" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        let transformer = sharp(buffer);

        // Dynamic conversion based on target format
        switch (targetFormat.toLowerCase()) {
            case "png":
                transformer = transformer.png();
                break;
            case "jpg":
            case "jpeg":
                transformer = transformer.jpeg({ quality: 90 });
                break;
            case "webp":
                transformer = transformer.webp({ quality: 85 });
                break;
            case "gif":
                transformer = transformer.gif();
                break;
            case "avif":
                transformer = transformer.avif({ quality: 50 });
                break;
            case "tiff":
                transformer = transformer.tiff();
                break;
            case "bmp":
                // sharp doesn't have direct .bmp() but we can use toFormat
                transformer = transformer.toFormat('bmp' as any);
                break;
            default:
                return NextResponse.json({ error: `Unsupported format: ${targetFormat}` }, { status: 400 });
        }

        const outputBuffer = await transformer.toBuffer();

        return new NextResponse(new Uint8Array(outputBuffer), {
            status: 200,
            headers: {
                "Content-Type": `image/${targetFormat}`,
                "Content-Disposition": `attachment; filename="converted.${targetFormat}"`,
                "Cache-Control": "no-store, max-age=0",
            },
        });
    } catch (error: any) {
        console.error("Conversion Error:", error);
        return NextResponse.json({ error: "Failed to convert image. Please ensure the file is a valid image." }, { status: 500 });
    }
}
