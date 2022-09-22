
export default function Services() {

    const services = [
        {
            title: "cuu"
        },
        {
            title: "cuu"
        },
        {
            title: "cuu"
        },
        {
            title: "cuu"
        },
    ]

    return (
        <div className='cont py-20'>
            <h2 className='text-center font-medium text-blue-500'>Nossos Serviços</h2>
            <h2 className='text-center text-5xl capitalize mt-4 font-medium'>O que Fazemos</h2>

            <div className="grid lg:grid-cols-2 gap-y-10 py-20 justify-items-center justify-between">

                {/* <div className="flex justify-items-center h-fit gap-5">

                    <div>
                        <div className="bg-blue-500 bg-opacity-80">
                            <span className="material-icons px-3 py-3">handyman</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl">Infraestrutura</h3>
                        <p className="mt-3 text-slate-400 lg:max-w-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci exercitationem a modi quisquam</p>
                    </div>
                </div>

                <div className="flex justify-items-center h-fit gap-5">

                    <div>
                        <div className="bg-blue-500 bg-opacity-80">
                            <span className="material-icons px-3 py-3">handyman</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl">Infraestrutura</h3>
                        <p className="mt-3 text-slate-400 lg:max-w-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci exercitationem a modi quisquam</p>
                    </div>
                </div> */}


                {
                    services.map((item, count) => {
                        return (
                            <div className="flex justify-items-center h-fit gap-5" key={count}>

                                <div className="h-full">
                                    <div className="bg-blue-500 bg-opacity-80">
                                        <span className="material-icons px-3 py-3">handyman</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl">Infraestrutura</h3>
                                    <p className="mt-3 text-slate-400 lg:max-w-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci exercitationem a modi quisquam</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )

}