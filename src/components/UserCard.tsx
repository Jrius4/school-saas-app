import Image from "next/image";
// TODO: STOP AT 37.04
const UserCard = ({type}:{type:string})=>{
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1">
            <div>
                <span>202/25</span>
                <Image src="/more.png" alt="" width={20} height={20}/>
                <span>{type}</span>
            </div>
        </div>
    )
}

export default UserCard;