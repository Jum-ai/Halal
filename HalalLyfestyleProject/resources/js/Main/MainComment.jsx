export default function Comment() {
    return (
        <div className="bg-white rounded-box h-96 mx-6 mb-4  w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Komentar Teratas
            </h2>
            <div className="carousel carousel-end w-full gap-2">
                <div className="carousel-item w-2/3 h-72 bg-base-100 m-auto mt-4">
                    <p>
                        Semua bahan dan proses yang digunakan dalam pembuatan
                        produk makanan harus halal, termasuk bahan tambahan
                        makanan dan alat masak.
                    </p>
                    <div className="card-body items-center text-center">
                        <p>Jumjum</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
