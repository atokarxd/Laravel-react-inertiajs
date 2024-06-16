import OrangeSVG from '../../Image/orange-pic.svg'

export default function MainContent() {
    return(
        <>
            <div className="block bg-white dark:bg-slate-800 place-content-center w-full h-screen">
                <h1 className="title text-gray-500 dark:text-white">Welcome xy</h1>
                <img src={OrangeSVG} className="mx-auto" alt='Orange'></img>
            </div>
        </>
    )
}