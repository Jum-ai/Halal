export default function HadistEducation({Datahadist}) {
    const hadists = Array.isArray(Datahadist) ? Datahadist : [];

    console.log("Data hadist:", hadists);

    return (
        <div className="bg-white rounded-box h-96 mx-6 mb-4  w-full shadow-md rounded-md flex flex-col items-center">
            <h2 className="mt-6 font-semibold text-texthijau text-center text-2xl">
                Hadist Pilihan
            </h2>
            <div className="carousel carousel-end w-2/3 gap-2 m-auto mt-4">
            {hadists.map((hadist) => (
                <div key={hadist.id} className="carousel-item w-full h-72 bg-base-100 flex flex-col">
                    <p className="arabic-text rtl text-right">{hadist.arabic_text}</p>
                    <p><span className="font-semibold">Artinya : </span>{hadist.translation}. ({hadist.source})</p>
                    <div className="mt-1">
                        <p><span className="font-semibold">Penjelasan : </span>{ hadist.explanation }</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
