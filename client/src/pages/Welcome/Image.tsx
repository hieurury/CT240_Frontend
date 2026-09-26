
export default function Image({ imgUrl }: { imgUrl: string }) {

    return (
        <div>
            <img src={imgUrl} alt="" />
        </div>
    )
}