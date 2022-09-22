export default function About() {

    return (
        <section className='cont section grid lg:grid-cols-2 gap-10' id="about">
            <div>
                <img src="./test.png" alt="" className="w-full" />
            </div>

            <div className='space-y-2'>
                <h2 className='sub-header'>Sobre Nós</h2>
                <h3 className='sm:text-5xl text-3xl font-normal font-poppins tracking-tight'>Nossa missão é dar os melhores resultados</h3>
                <p className='text-slate-500 text-justify'>Nossa missão é dar os melhores resultados para nossos clientes. Trabalhamos com eles do início ao fim e além, prestando serviços e suporte completos para que seus projetos de melhoria da casa sejam fáceis e sem estresse. Nosso objetivo é estabelecer relações de longo prazo com cada um de nossos clientes, fornecendo excelentes serviços e resultados de qualidade que excedam suas expectativas.</p>
            </div>
        </section>
    )
}