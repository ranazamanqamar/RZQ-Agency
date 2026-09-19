/** ISO country code → rectangular flag image (avoids Windows emoji letter codes like “US”). */
export function CountryFlag({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const cc = code.toLowerCase();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${cc}.png`}
      srcSet={`https://flagcdn.com/w80/${cc}.png 2x`}
      alt=""
      width={22}
      height={16}
      className={className ?? "h-4 w-[22px] rounded-[2px] object-cover"}
    />
  );
}
