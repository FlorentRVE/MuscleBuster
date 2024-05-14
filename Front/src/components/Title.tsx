function Title({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center border-b-2 border-gray-400 py-10 w-[80%] mx-auto">
      <p className="text-5xl font-bold text-blue-950">{title}</p>
    </div>
  );
}

export default Title