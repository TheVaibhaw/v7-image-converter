"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Download, X, RefreshCw, CheckCircle, AlertCircle, FileImage } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SUPPORTED_FORMATS = ["png", "jpg", "webp", "gif", "avif", "tiff", "bmp"];

export default function ImageConverter() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [targetFormat, setTargetFormat] = useState("png");
    const [isConverting, setIsConverting] = useState(false);
    const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setConvertedUrl(null);
            setError(null);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".tiff", ".svg"]
        },
        multiple: false
    });

    const handleConvert = async () => {
        if (!file) return;

        setIsConverting(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("format", targetFormat);

        try {
            const response = await fetch("/api/convert", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Conversion failed");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setConvertedUrl(url);
        } catch (err: any) {
            setError(err.message || "Something went wrong during conversion.");
        } finally {
            setIsConverting(false);
        }
    };

    const reset = () => {
        if (preview) URL.revokeObjectURL(preview);
        if (convertedUrl) URL.revokeObjectURL(convertedUrl);
        setFile(null);
        setPreview(null);
        setConvertedUrl(null);
        setError(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
            >
                <div className="p-8 md:p-12">
                    {!file ? (
                        <div
                            {...getRootProps()}
                            className={`border-4 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${isDragActive ? "border-primary bg-primary/5 scale-[0.99]" : "border-border hover:border-primary/50"
                                }`}
                        >
                            <input {...getInputProps()} />
                            <div className="flex flex-col items-center">
                                <div className="bg-primary/10 p-5 rounded-full mb-6">
                                    <Upload className="w-12 h-12 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Drag & Drop Image</h3>
                                <p className="text-gray-500 mb-6">Or click to browse from your computer</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {SUPPORTED_FORMATS.map(fmt => (
                                        <span key={fmt} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <FileImage className="text-primary w-6 h-6" />
                                    <span className="font-semibold text-secondary truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <button onClick={reset} className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-border group">
                                    <img src={preview!} alt="Preview" className="w-full h-full object-contain" />
                                    <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Original: {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">Convert to:</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {SUPPORTED_FORMATS.map(fmt => (
                                                <button
                                                    key={fmt}
                                                    onClick={() => setTargetFormat(fmt)}
                                                    className={`py-2 px-3 rounded-lg text-sm font-bold uppercase transition-all ${targetFormat === fmt
                                                        ? "bg-primary text-white shadow-lg"
                                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {fmt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {!convertedUrl ? (
                                        <button
                                            onClick={handleConvert}
                                            disabled={isConverting}
                                            className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
                                        >
                                            {isConverting ? (
                                                <>
                                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                                    <span>Converting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <RefreshCw className="w-5 h-5" />
                                                    <span>Convert Now</span>
                                                </>
                                            )}
                                        </button>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                                                <CheckCircle className="text-green-500 w-6 h-6" />
                                                <span className="text-green-700 font-medium text-sm">Conversion Complete!</span>
                                            </div>
                                            <a
                                                href={convertedUrl}
                                                download={`v7_${Math.random().toString(36).substring(7)}.${targetFormat}`}
                                                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-secondary transition-all shadow-xl shadow-primary/20"
                                            >
                                                <Download className="w-5 h-5" />
                                                <span>Download Image</span>
                                            </a>
                                            <button
                                                onClick={reset}
                                                className="w-full py-3 border-2 border-border text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-all"
                                            >
                                                Convert another
                                            </button>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-sm font-medium">{error}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
