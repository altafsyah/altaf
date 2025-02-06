export default function Corner() {
  return (
    <>
      <div className="absolute -right-5 -top-5 border-2 border-black bg-white p-5 rotate-6 group-hover:rotate-0 transition-transform"></div>
      <div className="absolute -right-5 -bottom-5 border-2 border-black bg-white p-5 rotate-12 group-hover:rotate-0 transition-transform"></div>
      <div className="absolute -left-5 -top-5 border-2 border-black bg-white p-5 rotate-12 group-hover:rotate-0 transition-transform"></div>
      <div className="absolute -left-5 -bottom-5 border-2 border-black bg-white p-5 rotate-2 group-hover:rotate-0 transition-transform"></div>
    </>
  );
}
