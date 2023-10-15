import { metadata } from "../layout";

export default function About() {
    return (
        <div className="flex flex-row min-h-screen min-w-screen justify-center">
            <div className='p-4 flex-1 max-w-screen-lg flex flex-col gap-4'>
                <main className='flex-1'>
                    <p>{metadata.title?.toString()}</p>
                    <p>{metadata.description}</p>
                </main>
            </div>
        </div>
    )
}