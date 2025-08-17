// import React from 'react'

// Icons from lucided-react
import { Star, Circle, Square, Triangle, Hexagon, Award, Trophy, Target, Bot, Filter } from 'lucide-react';

// Modules by contents
const modulos = [
    {
        id: 'adicao',
        titulo: 'Lições sobre Estatística e Probabilidade',
        aulas: [
            {
                id: 'aula-1',
                titulo: 'Estatística',
                nivel: 'Médio',
                progresso: '90% concluído - Estatística descritiva',
            },
            {
                id: 'aula-2',
                titulo: 'Probabilidade',
                nivel: 'Moderado',
                progresso: '40% concluído - Probabilidade condicional',
            },
        ],
    },
    {
        id: 'subtracao',
        titulo: 'Lições sobre Medidas de Dispersão',
        aulas: [
            {
                id: 'aula-3',
                titulo: 'Variância',
                nivel: 'Fácil',
                progresso: '75% concluído - Medidas de dispersão absoluta e relativa',
            },
            {
                id: 'aula-4',
                titulo: 'Desvio padrão',
                nivel: 'Difícil',
                progresso: '52% concluído - O desvio padrão amostral',
            },
        ],
    },
];

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] p-4 md:p-6">

            <div className="max-w-6xl mx-auto mb-8">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 py-8">
                    <div>
                        <h1 className="text-4xl md:text-3xl font-bold text-eel mb-0 font-rounded">
                            Matematicando
                        </h1>
                        <p className="text-lg text-wolf font-medium"> Escolha sua próxima aventura! </p>
                    </div>

                    {/* Use State */}
                    <div className="flex items-center gap-4">
                        <div className="bg-[#222831] rounded-full px-6 py-3">
                            <div className="flex items-center gap-2">
                                <Trophy className='w-5 h-5 text-white' />
                                <span className="font-bold text-white">
                                    1,250 XP
                                </span>
                            </div>
                        </div>

                        <div className="bg-[#F9F9FF] rounded-full px-6 py-3">
                            <div className="flex items-center gap-2">
                                <Award className='w-5 h-5 text-[#222831]' />
                                <span className="font-bold text-[#222831]">
                                    Level 8
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mascot Placeholder */}
                <div className='bg-[#222831] rounded-2xl p-6 mb-8 border-2 border-macaw-200'>
                    <div className="flex items-center gap-4">
                        <div className='w-16 h-16 bg-macaw-200 rounded-full flex items-center justify-center'>
                            <Bot className='w-8 h-8 text-[#F9F9FF]' />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#F9F9FF] font-rounded mb-0">
                                Conheça o MathAI!
                            </h3>
                            <p className="text-[#F9F9FF]">
                                Conheça o Seu Assistente Virtual do Matematicando!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Topics List */}
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-4">
                        <div className='bg-[#fafafa] flex items-center justify-end px-0 py-2 rounded-2xl mb-8'>
                            <div className='bg-[#222831] px-6 py-2 flex items-center rounded-full cursor-pointer'>
                                <span className='text-lg font-light text-[#fafafa]'> Filtrar por tópico </span>
                                <Filter className='w-4 h-4 text-[#fafafa] ml-2' />
                            </div>
                        </div>

                        {/* Modules */}
                        {modulos.map((modulo) => (
                            <div key={modulo.id} className='grid space-y-4'>

                                {/* Título do módulo */}
                                <h2 className="text-2xl font-semibold text-[#222831] mb-4">
                                    {modulo.titulo}
                                </h2>

                                {/* Grid de aulas */}
                                <div className="max-auto">
                                    {modulo.aulas.map((aula) => (
                                        
                                        <div key={aula.id}>
                                            <div className='grid grid-cols-[300px_auto_auto] bg-[#222831] mb-6 rounded-2xl px-6 py-4 flex items-center max-auto'>

                                                <div className='flex flex-col items-start'>
                                                    <h3 className="text-xl font-bold text-[#fafafa]"> {aula.titulo} </h3>
                                                    <p className="text-lg text-gray-400 mt-2">
                                                        Nível {aula.nivel}
                                                    </p>
                                                </div>

                                                <div className="progress flex items-center">
                                                    <h3 className="text-xl font-light text-[#fafafa]"> {aula.progresso} </h3>
                                                </div>
                                                
                                                <div className='flex items-center justify-end'>
                                                    <button className="bg-[#222831] text-white text-lg px-4 py-2 rounded-full hover:bg-[#fafafa] hover:text-black transition cursor-pointer">
                                                        Acessar Atividade
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
