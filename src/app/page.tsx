import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/84df573b-fe5f-44ed-b4e3-b88f87be0312-z3jdec.jfif",
    "https://utfs.io/f/734131f1-1d42-426b-8898-7144aadb5537-uofko.jpg",
    "https://utfs.io/f/1b7d8c16-9223-463c-ad63-a3917b0cbaad-gxepqe.jpg",
    "https://utfs.io/f/d5406e00-2b10-4cbf-93b1-9ba4b3bf8cc2-m1eaom.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
  return (
    <main>
            <div className = "flex flex-wrap gap-4">{
                [...mockImages, ...mockImages, ...mockImages].map((images) => (
                <div key={images.id} className="w-48">
                        <img src={images.url}/>
                </div>
                ))}
            </div>
    </main>
  );
}
