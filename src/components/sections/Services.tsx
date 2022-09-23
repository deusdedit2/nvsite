
export default function Services() {

    const services = [
        {
            title: "Infraestrutura",
            description: "Nós oferecemos uma excelente infraestrutura civil para suprir todas as necessidades da sua obra.",
            icon: "foundation"
        },
        {
            title: "Mão de Obra",
            description: "Contamos com uma mão de obra altamente qualificada, obtendo resultados fiéis ao que foi proposto.",
            icon: "handyman"
        },
        {
            title: "Edificação",
            description: "Construimos edificações excepcionais, utlizando materiais de alta qualidade somados com uma equipe única",
            icon: "handyman"
        },
        {
            title: "Projetos",
            description: "Nossos projetos são únicos e cada um tem a sua particularidade. Venha realizar seu sonho.",
            icon: "favorite"
        },
    ]

    return (
        <section className='cont section' id="services">
            <h2 className='text-center sub-header'>Nossos Serviços</h2>
            <h2 className='section-header'>O que Fazemos</h2>

            <div className="grid lg:grid-cols-2 gap-y-10 pt-20 justify-items-center justify-between">

                {
                    services.map((item, count) => {
                        return (
                            <div className="flex justify-items-center h-fit space-x-5 border border-solid border-[#cacaca] p-3 rounded-lg items-center transition-all hover:scale-110" key={count}>

                                <div className="h-full">
                                    <div className="bg-blue-500 bg-opacity-80">
                                        <span className="material-icons px-3 py-3">{item.icon}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl">{item.title}</h3>
                                    <p className="mt-1 text-slate-400 lg:max-w-xs">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )

}