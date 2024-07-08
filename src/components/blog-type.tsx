import LinkButton from "./ui/link-button";

const types = ["UX/UI", "React", "PHP", "JavaScript", "PHP", "JavaScript"]

interface BlogTypes {
}

export default function BlogTypes({ }: BlogTypes) {
    return (
        <div className="w-full grid grid-cols-[repeat(auto-fill,15rem)] justify-center lg:justify-between items-center gap-6">
            {
                types.map((name) => <BlogType name={name} key={name} />)
            }
        </div>
    )
}


const BlogType = ({ name }: { name: string }) => {
    return (
        <div className="relative lg:max-w-60 lg:h-60 overflow-hidden rounded-md">
            <img src="/public/students.png" alt="" className="object-cover h-full w-full" />
            <div className="absolute flex flex-col items-center justify-end top-0 bottom-0 right-0 left-0 bg-black/30">
                <LinkButton href="#" className="w-2/3 text-center font-bold text-md text-black bg-white/60 py-1.5">{name}</LinkButton>
            </div>
        </div>
    )
}

export { BlogType }
