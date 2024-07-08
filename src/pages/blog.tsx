import Blog from "@components/blog";
import BlogTypes from "@components/blog-type";
import LinkButton from "@components/ui/link-button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BlogPage() {
    return (
        <>
            <section className="mt-[72px] border bg-sky-100">
                <div className="max-w-screen-xl lg:max-w-6xl mx-auto px-6 flex flex-wrap py-8 space-y-2 lg:gap-10 lg:py-12">
                    <img src="/public/instructors.png" alt={"title"} className="flex lg:hidden" />
                    <div className="space-y-4 flex-1 lg:space-y-6">
                        <span>By Themadbrains in <span className="text-teal-500">inspiration</span></span>
                        <h2 className="text-blue-960 text-2xl font-semibold !leading-snug lg:text-4xl xl:text-[2.5rem]">Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
                        <p className="text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <LinkButton href="#">Start learning now</LinkButton>
                    </div>
                    <img src="/public/instructors.png" alt={"title"} className="hidden lg:flex w-1/2" />
                </div>
            </section>
            <section className="max-w-screen-xl lg:max-w-6xl mx-auto px-6 flex flex-wrap py-6 lg:py-14 space-y-6">
                <p className="font-bold text-xl">Reading blog list</p>
                <BlogTypes />
            </section >
            <section className="bg-sky-100 py-16">
                <div className="max-w-screen-xl lg:max-w-6xl mx-auto px-6 flex flex-wrap my-6 space-y-6">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-bold text-xl">Related Post</p>
                        <span className="text-teal-500 font-medium">See all</span>
                    </div>
                    <Blog />
                </div>
            </section>
        </>
    )
}
