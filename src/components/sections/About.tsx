export default function About() {

    const aa = [
        {
            title: "Dando os melhores resultados"
        },
        {
            title: "Mantendo a melhor qualidade"
        },
        {
            title: "Proporcionando ótimos serviços"
        },
    ]

    return (
        <section className='cont section grid lg:grid-cols-2 gap-10' id="about">
            {/* <img src="./test.png" alt="" className="w-full" /> */}
            <div className="overflow-hidden text-gray-700 h-full">
                <div className="container lg:px-5 p-0 py-1 mx-auto h-full">
                    <div className="flex flex-wrap -m-1 md:-m-2 h-full">
                        <div className="flex flex-wrap w-[60%]">
                            <div className="w-full p-1 md:p-2"><img alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-sm"
                                src="https://st3.depositphotos.com/11668908/17823/i/450/depositphotos_178239042-stock-photo-building-workers-shell-building.jpg" /></div>
                        </div>
                        <div className="flex flex-wrap w-[40%]">
                            <div className="p-1 md:p-2"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-sm"
                                src="https://media.graphassets.com/oJECsewcRAenV8ey0hbj" /></div>
                            <div className="p-1 md:p-2"><img alt="gallery" className="block object-cover object-center w-full h-full rounded-sm"
                                src="https://media.graphassets.com/McmZoB4Saq77EFNDrVgP" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between space-y-6'>
                <div className="space-y-2">
                    <h2 className='sub-header'>Sobre Nós</h2>
                    <h3 className='sm:text-5xl text-3xl font-normal font-poppins tracking-tight'>Nossa missão é dar os melhores resultados</h3>
                    <p className='text-slate-500 text-justify lg:text-[0.9rem]'>Nossa missão é dar os melhores resultados para nossos clientes. Trabalhamos com eles do início ao fim e além, prestando serviços e suporte completos para que seus projetos de melhoria da casa sejam fáceis e sem estresse. Nosso objetivo é estabelecer relações de longo prazo com cada um de nossos clientes, fornecendo excelentes serviços e resultados de qualidade que excedam suas expectativas.</p>
                </div>

                <div>
                    <ul className="space-y-4">
                        {
                            aa.map((item, index) => {
                                return (
                                    <li key={index} className="flex space-x-5 text-base items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-full"
                                        >
                                            <path fill="#068bf9" d="M23.334 11.96a2.327 2.327 0 01-.393-2.727c.342-.64.366-1.401.064-2.062a2.323 2.323 0 00-1.601-1.302 2.324 2.324 0 01-1.803-2.081 2.327 2.327 0 00-3.112-1.999 2.325 2.325 0 01-2.642-.776 2.329 2.329 0 00-3.699 0 2.318 2.318 0 01-2.639.777 2.323 2.323 0 00-3.111 1.999A2.324 2.324 0 012.595 5.87a2.323 2.323 0 00-1.536 3.363c.479.897.32 2.001-.392 2.727a2.323 2.323 0 00.526 3.66 2.324 2.324 0 011.144 2.505 2.326 2.326 0 002.421 2.794 2.326 2.326 0 012.317 1.489 2.326 2.326 0 003.548 1.042 2.322 2.322 0 012.754 0 2.327 2.327 0 003.549-1.042 2.324 2.324 0 012.316-1.489 2.323 2.323 0 002.421-2.794 2.325 2.325 0 011.145-2.505 2.323 2.323 0 00.526-3.66zM10.75 17.39l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"></path>
                                        </svg>
                                        <p>{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="space-y-2 text-gray-500">
                    {/* <p>Ficou curioso e quer saber mais?</p> */}
                    <div className="flex w-full">
                        <div className="flex items-center bg-amber-500 !p-5">
                            <span className="material-icons text-[2.5rem] text-white">phone_enabled</span>
                        </div>
                        <div className="bg-blue-700 !p-5 lg:w-[50%] w-full space-y-1 text-white">
                            <p>Contate-nos agora</p>
                            <p>+55 (83) 99697-2099</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}