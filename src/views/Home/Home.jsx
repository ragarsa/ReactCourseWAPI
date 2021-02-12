import { Link } from 'react-router-dom'
import './homeStyle.css'

export default function Home() {
    return (
        <div>
            <header className='header-container'>
                <img src="https://talent-network.org/comunidades/wp-content/uploads/2019/06/TN-comunidades-Actosoft.png" alt="Actosoft-Logo" />
            </header>

            <div className='container-content'>
                <h3 className='descritpion-container'>
                    Este fue un proyecto realizado para el curso de React Frontend importado
                    por Actosoft
            </h3>

            </div>
            <div className='link-container'>
                <Link to='/movies'>
                    <div className='btn btn-enter'>
                        <span>
                            Entrar a películas
                    </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}