export default function MainNews({ news }) {
    console.log('a', news)
    return (
        <div className="bg-hijau rounded-box h-1/2 mx-6 mb-4  w-full shadow-md rounded-md ">
            <h2 className="mt-6 font-semibold text-white text-center text-2xl">
                Berita Terkini
            </h2>

            <div className="carousel carousel-end w-full gap-2">
            {news.map((news) => (
                <div key={news.id} className="carousel-item card h-96 w-64 bg-base-100 shadow-xl m-auto mt-4">
                    <div className="arousel carousel-vertical">
                    <figure className="px-2 pt-4 carousel-item ">
                        <img
                            src={`/images/${news.image_path}`}
                            alt="Shoes"
                            className="rounded-xl h-32"
                        />
                    </figure>
                    <div className="card-body items-center text-center carousel-item">
                        <h2 className="card-title">{news.title}</h2>
                        <p>{ news.content}</p>
                        </div>
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
}
