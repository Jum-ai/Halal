export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-black text-white-content p-10">
            <div className="text-white font-bold text-2xl mb-4">
                Penyelenggara Lomba
            </div>
            <div className="flex justify-center space-x-4 mb-4">
                <img
                    src={`/images/bankIndonesia.png`}
                    alt="Logo Bank Indonesia"
                    className="h-20 rounded-lg"
                />
                <img
                    src={`/images/AlhazenAcademy.png`}
                    alt="Logo Alhazen Academy"
                    className="h-20 rounded-lg"
                />
                <img
                    src={`/images/ISEF.png`}
                    alt="Logo ISEF"
                    className="h-20 rounded-lg"
                />
                <img
                    src={`/images/FestivalEkonomiSyariah.png`}
                    alt="Logo Festival Ekonomi Syariah"
                    className="h-20 rounded-lg"
                />
                <img
                    src={`/images/EkonomiSyariah.png`}
                    alt="Logo Ekonomi Syariah"
                    className="h-20 rounded-lg"
                />
            </div>
            <div className="text-center">
                <p className="text-white font-bold">
                    &copy; Jumain Zulkaidah || 2024
                </p>
            </div>
        </footer>
    );
}
