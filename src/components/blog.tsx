import { Link } from "react-router-dom";
import Profile from "./profile";
import { BsEyeFill } from "react-icons/bs";

export default function Blog() {
    return (
        <div className="w-full flex flex-wrap items-center justify-between gap-10">
            {
                ["1", "2"].map((_, idx) => <Card key={idx} />)
            }
        </div>
    )
}


const Card = () => {
    return (
        <div className="max-w-[32rem] space-y-3 rounded-lg px-4 py-6 bg-white shadow-lg">
            <img src="/public/instructors.png" alt="" />
            <h2 className="font-semibold text-xl">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
            <Profile dropdown={false} />
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <div className="flex justify-between">
                <Link to="#" className="underline text-gray-500 underline-offset-4">Read more</Link>
                <div className="flex items-center justify-center gap-2">
                    <BsEyeFill className="text-teal-500" />
                    <span className="text-gray-600">251,232</span>
                </div>
            </div>
        </div>
    )
}