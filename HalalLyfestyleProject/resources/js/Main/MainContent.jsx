export default function MainContent( {ustadzList} ) {
    return (
        <div className="h-auto mx-6 my-4 bg-base-100 w-full shadow-md rounded-md">
            <div className="card text-center">
                <h1 className="mt-4 leading-tight text-2xl font-semibold text-hijau">
                    Selamat Bergabung Dengan
                </h1>
                <span className="my-4 font-black text-texthijau text-6xl">
                    Halal Lifestyle
                </span>

                <p className="mx-20 text-lg font-semibold">
                    Di era digital saat ini, di mana penggunaan internet dan
                    media sosial sangat bebas, dibutuhkan sebuah platform yang
                    dapat digunakan dengan layak oleh seorang Muslim yang taat.
                    Halal Lifestyle Web dirancang untuk menjadi ruang yang aman
                    dan terpercaya bagi umat Muslim, dengan mengedepankan
                    prinsip keamanan, privasi, dan kepatuhan terhadap syariat.
                </p>
            </div>
            <div className="mt-8 text-xl text-center font-semibold w-full mb-8 text-hijau">
                <h1>Dapatkan Edukasi Langsung dari Ulama</h1>
                <div className="w-5/6 mx-auto carousel carousel-end gap-4">
                    {ustadzList.map((ustadzList) => (
                    <div key={ustadzList.id} className="carousel-item mt-4  flex items-center card bg-base-100 w-40 shadow-xl">
                        <div className="mt-3 avatar">
                            <div className="w-24 rounded-xl">
                                <img src={`/images/${ustadzList.gambar}`} />
                            </div>
                        </div>
                        <div className="py-5">
                            <h2 className="text-hijau">{ustadzList.nama}</h2>
                        </div>
                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
