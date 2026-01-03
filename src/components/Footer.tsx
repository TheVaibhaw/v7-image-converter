export default function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} v7 Image Converter. Built with ❤️ by <a href="https://vaibhawkumarparashar.in" target="_blank" className="text-primary font-bold hover:underline">Vaibhaw Kumar Parashar</a>.</p>
                </div>
            </div>
        </footer>
    );
}
