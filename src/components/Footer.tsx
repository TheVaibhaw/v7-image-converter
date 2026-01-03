export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">v7 Image Converter</h3>
                        <p className="text-gray-400 text-sm">
                            The fastest way to convert your images between any format. Privacy-focused, secure, and completely free.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Supported Formats</h4>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>JPG, PNG, WEBP</li>
                            <li>GIF, BMP, TIFF</li>
                            <li>SVG and more</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="https://vaibhawkumarparashar.in" className="hover:text-white transition-colors">Author Website</a></li>
                            <li><a href="https://github.com/TheVaibhaw" className="hover:text-white transition-colors">GitHub Profile</a></li>
                            <li><a href="mailto:contact@vaibhawkumarparashar.in" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} v7 Image Converter. Built with ❤️ by Vaibhaw Kumar Parashar.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>Privacy First</span>
                        <span>No Server Storage</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
