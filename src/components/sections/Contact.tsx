export default function Contact() {

    return (
        <section className='cont section' id="contact">

            <div className="grid lg:grid-cols-2 lg:space-x-7 space-y-2 bg-gray-100 p-3">
                <div>
                    <h2 className='sub-header !text-left'>Contate-Nos</h2>
                    {/* <h2 className='section-header !text-left'>Fale Conosco</h2> */}

                    <form className="w-full mt-6">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                                    Nome
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all duration-[.5s]" id="grid-name" type="text" placeholder="João" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all duration-[.5s]" id="grid-email" type="email" placeholder="joaodasilva@gmail.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-assunto">
                                    Assunto
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all duration-[.5s]" id="grid-assunto" type="text" placeholder="Orçamento" />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-assunto">
                                    Mensagem
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-colors duration-[.5s] resize-none scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent hover:scrollbar-thumb-slate-500" placeholder="Olá, gostaria de fazer um orçamento..."  name="mensagem" cols={30} rows={5}></textarea>
                                {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all duration-[.5s]" id="grid-assunto" type="text" placeholder="Orçamento" /> */}
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <button className="bg-blue-500 text-white font-medium p-2 w-full hover:bg-blue-700 transition-colors duration-[.5s]">Enviar Mensagem</button>
                            </div>
                        </div>

                    </form>

                </div>


                <div>
                    <img className="h-full" src="./test.png" alt="" />
                </div>
            </div>


        </section>
    )
}