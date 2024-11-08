function Card({
  number,
  name,
  date
}: {
  number: string;
  name: string;
  date: string;
}) {
  const copyText = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = e.target as HTMLSpanElement;
    const text = target.innerText;
    navigator.clipboard.writeText(text);
    target.innerText = "Copied!";
    setTimeout(() => (target.innerText = text), 1500);
  };

  return (
    <div className="relative">
      <img className="h-max mx-auto" alt="card" src="/assets/card.png" />
      <div className="absolute w-[300px] top-[110px] left-[75px]">
        <span
          onClick={(e) => {
            copyText(e);
          }}
          className="text-white text-[28px] font-bold"
        >
          {number}
        </span>
        <div className="flex justify-between mt-5 text-white text-[18px] font-bold">
          <span
            onClick={(e) => {
              copyText(e);
            }}
          >
            {name}
          </span>
          <span
            onClick={(e) => {
              copyText(e);
            }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
