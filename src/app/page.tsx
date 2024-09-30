import Image from "next/image";

export default function Home() {
  return (
   <main className="flex flex-col items-center justify-between p-24 flex flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap">
        <Image
    src={require(`../../pictures/WhatsApp Image 2024-09-30 at 07.48.12_08c03812.jpg`)}
    alt="Picture of the author"
    width={1000}
    height={200}
    />
</main>
  );
}
