import { metadata } from "../layout";
import { BackButton } from "./back-button";

export default function About() {
  return (
    <div className="flex flex-row min-h-screen min-w-screen justify-center">
      <div className="p-4 flex-1 max-w-screen-lg flex flex-col gap-4">
        <main className="flex-1 flex flex-col gap-2 items-start">
          <div className="flex flex-row gap-2 items-center">
            <BackButton>
              <p className="p-2 text-xl">{"<-"}</p>
            </BackButton>
            <h1 className="text-2xl">About</h1>
          </div>
          <div>
            <h2 className="text-xl">{metadata.title?.toString()}</h2>
            <p>{metadata.description}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
