import Image from "./Image"


export default function WelcomePage() {

    const imgUrl: string = '/src/assets/images/gif/plant.gif'
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Image imgUrl={imgUrl} />
            <h1 className="text-7xl uppercase tracking-widest font-bold">Welcome</h1>
        </div>
    )
}