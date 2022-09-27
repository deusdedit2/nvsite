export default function Footer() {

    return (
        <footer className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <p className="justify-center text-center text-gray-400">R. Desembabrgador Boto de Menezes, 424 / João Pessoa, PB</p>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://wa.me/+5583996972099/" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Whatsapp</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                        </svg>
                    </a>
                    <a href="mailto:nvconstrucoes172gmail.com" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor" viewBox="0 0 344 344">
                            <path
                                d="M0 49.809v248h344v-248H0m330 14v220H14v-220h316m-302 34l1.028 15.787L38 119.949l20 11.28 79 44.81 24 13.62 12 4.655 26-13.655 57-32.426 42-23.705 16.972-10.932L316 97.809l-103 58.28-28 15.87-13 6.066-13-6.215-28-15.851z"
                            ></path>
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © {new Date().getFullYear()} NV Construções. <br /> Todos os direitos reservados.
                </p>
            </div>
        </footer>

    )

}