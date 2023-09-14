import {Outlet, Link} from 'react-router-dom'

function RosterCard({ name, title, image }) {

    const imageName = image.replace(".png", "");

    const linkURL = `/roster/${imageName}`

    return (
        <div className="mx-2 mt-6 flex flex-col self-start rounded-lg bg-white shadow-lg dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <Link to={linkURL}>
                <img
                    className="rounded-t-lg transition duration-300 ease-in-out hover:scale-105"
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${imageName}_0.jpg`}
                    alt={name}
                />
            </Link>
            
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {title}
                </p>
            </div>
            <Outlet/>
        </div>
    );
}

export default RosterCard;
