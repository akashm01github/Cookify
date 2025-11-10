export default function Footer() {
  return (
    <footer className="bg-[#D9CFC7] text-black py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-lg">
          © {new Date().getFullYear()} Akash Mukherjee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}