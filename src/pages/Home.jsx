export default function Home() {
  return (
    <div className="space-y-6">
      <section className="text-center">
        <h2 className="text-4xl font-bold">Meet Ryan Alexandar</h2>
        <p className="mt-2">Car salesman & entrepreneur in Hawaii.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="/images/ryan-karaoke.jpg"
          alt="Ryan singing karaoke"
          className="rounded-lg shadow"
        />
        <img
          src="/images/ryan-blowhole.jpg"
          alt="Ryan at the blow hole"
          className="rounded-lg shadow"
        />
      </section>
    </div>
  );
}

