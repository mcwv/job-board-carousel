interface CountryFlagProps {
  countryCode: string;
}

export function CountryFlag({ countryCode }: CountryFlagProps) {
  const code = countryCode.toUpperCase();
  
  // Handle special case for WFA (Work From Anywhere)
  if (code === 'WFA') {
    return (
      <div className="w-6 h-4 flex items-center justify-center text-[18px] leading-none shrink-0">
        🌍
      </div>
    );
  }
  
  // Convert country code to flag emoji
  const getFlagEmoji = (code: string) => {
    const codePoints = code
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="w-6 h-4 flex items-center justify-center text-[18px] leading-none shrink-0">
      {getFlagEmoji(code)}
    </div>
  );
}