import Form from "./Form";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1 className="text-[48px] font-bold md:text-[100px] lg:text-[140px]">
        Coming Soon
      </h1>
      <span className="m-[16px] text-center text-base md:text-[28px]">
        Stay tuned for our launch. Please check back soon.
      </span>
      <Form>
        <div className="flex w-screen max-w-[600px] p-[36px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-grow rounded-l-lg p-[15px] text-[#000000] focus:outline-none"
            name="email"
          />
          <button
            className="group w-[100px] rounded-r-lg bg-black p-[15px] text-white"
            type="submit"
          >
            <span className="text-base transition-all group-active:text-sm">
              Notify Me
            </span>
          </button>
        </div>
      </Form>
    </main>
  );
}
