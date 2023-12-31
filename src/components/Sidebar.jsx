import { Link } from 'react-router-dom';
import logo from '../assets/task.png';
import useProyectos from '../hooks/useProyectos';
import useAuth from '../hooks/useAuth';
import LinksNavigation from './LinksNavigation';
import {
	HomeIcon,
	NuevoColaboradorIcon,
	NuevoProyectoIcon,
	ProyectosIcon,
} from './constants';

const Sidebar = () => {
	const { auth, cerrarSesionAuth } = useAuth();
	const { cerrarSesionProyecto } = useProyectos();

	// Cerrar sesión
	const handleCerrarSesion = () => {
		cerrarSesionAuth();
		cerrarSesionProyecto();
		localStorage.removeItem('token');
	};
	return (
		<>
			<aside className='flex flex-col sticky top-0 max-h-screen min-h-screen justify-between w-80 md:w-80 lg:w-80 px-10 py-8 bg-gray-200'>
				<Link to='/proyectos'>
					<img src={logo} alt='logo' className='w-20' />
				</Link>
				<div className=''>
					<p className='text-gray-900 text-xl block font-semibold'>
						Mi perfil
					</p>
					<Link
						to='/'
						className='flex text-gray-500 mt-2 font-semibold text-lg  hover:text-gray-900 transition duration-300'
					>
						Editar perfil
					</Link>
					<Link
						to='/'
						className='flex text-gray-500 mt-2 font-semibold text-lg  hover:text-gray-900 transition duration-300'
					>
						Cambiar contraseña
					</Link>
				</div>
				<div className=''>
					<p className='text-gray-900 text-xl block font-semibold'>
						Menu
					</p>

					<LinksNavigation
						styles={
							'flex items-center text-gray-500 mt-2 font-semibold text-lg hover:text-gray-900 transition duration-300'
						}
						text={'Inicio'}
						ruta={'/proyectos'}
						id={''}
						svg={<HomeIcon />}
						link={true}
					/>

					<LinksNavigation
						styles={
							'flex items-center text-gray-500 mt-2 font-semibold text-lg hover:text-gray-900 transition duration-300'
						}
						text={'Proyectos'}
						ruta={'/proyectos'}
						id={''}
						svg={<ProyectosIcon />}
						link={true}
					/>
					<LinksNavigation
						styles={
							'flex items-center text-gray-500 mt-2 font-semibold text-lg hover:text-gray-900 transition duration-300'
						}
						text={'Nuevo Proyecto'}
						ruta={'/proyectos/crear-proyecto'}
						id={''}
						svg={<NuevoProyectoIcon />}
						link={true}
					/>
					<LinksNavigation
						styles={
							'flex items-center gap-2 text-gray-500 mt-2 font-semibold text-lg hover:text-gray-900 transition duration-300'
						}
						text={'Nuevo Colaborador'}
						ruta={`/proyectos/nuevo-colaborador`}
						id={''}
						svg={<NuevoColaboradorIcon />}
						link={true}
					/>
				</div>
				<div className=''>
					<p className='text-gray-900 text-xl block font-semibold'>
						Favoritos
					</p>
					<Link
						to='/'
						className='flex text-gray-500 mt-2 font-semibold text-lg  hover:text-gray-900 transition duration-300'
					>
						Ejemplo 1
					</Link>
					<Link
						to='/'
						className='flex text-gray-500 mt-2 font-semibold text-lg  hover:text-gray-900 transition duration-300'
					>
						Ejemplo 2
					</Link>
				</div>
				<button
					type='button'
					className='flex w-full justify-center items-center gap-2 justify-items-center text-white text-sm font-bold uppercase bg-slate-900 p-3 rounded-md hover:bg-rose-700 transition duration-300'
					onClick={handleCerrarSesion}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-4 h-4'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
						/>
					</svg>
					Cerrar Sesión
				</button>
			</aside>
		</>
	);
};

export default Sidebar;
