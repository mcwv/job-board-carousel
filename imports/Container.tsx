import svgPaths from "./svg-y7xnr3rcxi";

function Heading() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[35.6px] text-center text-white w-full">
        <p className="css-4hzbpn css-8zr56v leading-[40px]">All 10 Regions - Exact Design</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[15.1px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[24px]">{`Including new Scotland & Wales`}</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center pl-[27.7px] pr-[27.72px] py-0 relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[45px] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">{`BATTERSEA DOGS & CATS`}</p>
        <p className="css-8zr56v css-ew64yg">HOME</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[316.8599853515625px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Animal welfare charity</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[27.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">£30,255 – 37,732</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin />
      <Container7 />
    </div>
  );
}

function Component() {
  return (
    <div className="css-8zr56v flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Component 1">
      <div className="absolute inset-[0_-2.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4311 24">
          <g id="Component 1">
            <g id="Vector">
              <path d={svgPaths.p30598680} fill="black" />
              <path d={svgPaths.p13c6cd80} stroke="var(--stroke-0, white)" strokeWidth="3.2" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.p30598680} fill="black" />
              <path d={svgPaths.p13c6cd80} stroke="var(--stroke-0, #B22234)" strokeWidth="2.13333" />
            </g>
            <g id="Vector_3">
              <path d={svgPaths.p3b01280} fill="black" />
              <path d={svgPaths.p3c8690} stroke="var(--stroke-0, white)" strokeWidth="5.33333" />
            </g>
            <g id="Vector_4">
              <path d={svgPaths.p3b01280} fill="black" />
              <path d={svgPaths.p3c8690} stroke="var(--stroke-0, #B22234)" strokeWidth="3.2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#012169] content-stretch css-1lkilf css-gxdil1 flex-col h-[24px] items-start justify-center relative shrink-0 w-[32px] z-[2]" data-name="Background">
      <Component />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.7px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">London, Greater London</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container8 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#42424c] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-8zr56v css-ew64yg leading-[20px]">OFFICE</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container9 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-g0mm18 css-twuwr6 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[47.8px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.2px] uppercase">
        <p className="css-8zr56v css-ew64yg leading-[60px]">SOCIAL MEDIA OFFICER</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#2f3e73] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background4 />
      <Container10 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-0 right-[656px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0" data-name="Background+Shadow">
      <Background />
      <Background1 />
      <Background5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">BREWDOG</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[302.45001220703125px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Craft beer revolution</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[25.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">£35,000 - £42,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow2 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin1 />
      <Container17 />
    </div>
  );
}

function Component1() {
  return (
    <div className="css-8zr56v flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Component 1">
      <div className="absolute inset-[0_-1.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9541 24">
          <g id="Component 1">
            <g id="Vector">
              <path d={svgPaths.p1dffc100} fill="black" />
              <path d={svgPaths.p361de240} stroke="var(--stroke-0, white)" strokeWidth="2.13333" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#0065bd] content-stretch css-1lkilf css-gxdil1 flex-col h-[24px] items-start justify-center relative shrink-0 w-[32px] z-[2]" data-name="Background">
      <Component1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.7px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Edinburgh</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Background8 />
      <Container18 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#9ca3af] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-8zr56v css-ew64yg leading-[20px]">HYBRID</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container19 />
          <Background9 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center px-[76px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-20z74a css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[52px] not-italic relative shrink-0 text-[41.4px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.04px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">DIGITAL MARKETING</p>
        <p className="css-8zr56v css-ew64yg">MANAGER</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#5e4b8b] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background10 />
      <Container20 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-[656px] right-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0" data-name="Background+Shadow">
      <Background6 />
      <Background7 />
      <Background11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">BBC CYMRU WALES</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[172.8300018310547px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Broadcasting</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[25.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">£28,000 - £35,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow4 />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container21 />
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin2 />
      <Container27 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute css-2chd6x css-8zr56v left-1/2 size-[16px] top-1/2" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p21bd2a80} fill="var(--fill-0, #B22234)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Background+Border">
      <div className="css-8zr56v css-gxdil1 relative size-full">
        <div className="absolute bg-white bottom-1/2 css-8zr56v left-[3.13%] right-[3.13%] top-[4.17%]" data-name="Background" />
        <div className="absolute bg-[#00b140] bottom-[4.17%] css-8zr56v left-[3.13%] right-[3.13%] top-1/2" data-name="Background" />
        <Component2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid css-gs60ek inset-0 pointer-events-none" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Cardiff</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Container28 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#e5e7eb] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-8zr56v css-ew64yg leading-[20px]">REMOTE</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container29 />
          <Background14 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-g0mm18 css-twuwr6 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[47.6px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.2px] uppercase">
        <p className="css-8zr56v css-ew64yg leading-[60px]">MARKETING EXECUTIVE</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-[#b80f2e] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background15 />
      <Container30 />
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-0 right-[656px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[754px]" data-name="Background+Shadow">
      <Background12 />
      <Background13 />
      <Background16 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[35.9px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">CLIMATE CENTRAL</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[374.4700012207031px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Science-based climate news</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">$70,000 - $75,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow6 />
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container31 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin3 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col inset-0 items-start justify-center" data-name="Container">
      <div className="bg-[#b22234] css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-white css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-[#b22234] css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-white css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-[#b22234] css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-white css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
      <div className="bg-[#b22234] css-8zr56v flex-[1_0_0] min-h-px min-w-px w-full" data-name="Background" />
    </div>
  );
}

function Container39() {
  return (
    <div className="css-8zr56v css-gxdil1 h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Container">
      <Container38 />
      <div className="absolute bg-[#3c3b6e] bottom-[47%] css-8zr56v left-0 right-1/2 top-0" data-name="Background" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.3px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">United States</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#e5e7eb] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-8zr56v css-ew64yg leading-[20px]">REMOTE</p>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container41 />
          <Background19 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center px-[65.91px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-fcb6oo css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[45px] not-italic relative shrink-0 text-[35.9px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-0.9px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">{`SOCIAL MEDIA & DIGITAL`}</p>
        <p className="css-8zr56v css-ew64yg">CONTENT CREATOR</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading8 />
    </div>
  );
}

function Background21() {
  return (
    <div className="absolute bg-[#42424c] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background20 />
      <Container42 />
    </div>
  );
}

function BackgroundShadow7() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-[656px] right-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[754px]" data-name="Background+Shadow">
      <Background17 />
      <Background18 />
      <Background21 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[35.2px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">SCOUTS CANADA</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[388.8800048828125px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">{`Youth leadership & outdoors`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[25.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">$88,000 - $93,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow8() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow8 />
    </div>
  );
}

function Background22() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container43 />
      <Container45 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin4 />
      <Container49 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute css-2chd6x css-8zr56v left-1/2 size-[12px] top-1/2" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p1bfb2680} fill="var(--fill-0, #FF0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Background+Border">
      <div className="css-8zr56v css-gxdil1 relative size-full">
        <div className="absolute bg-[red] css-8zr56v inset-[4.17%_73.44%_4.17%_3.13%]" data-name="Background" />
        <div className="absolute bg-[red] css-8zr56v inset-[4.17%_3.13%_4.17%_73.44%]" data-name="Background" />
        <Component3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid css-gs60ek inset-0 pointer-events-none" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.4px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Canada</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <BackgroundBorder1 />
      <Container50 />
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#9ca3af] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-8zr56v css-ew64yg leading-[20px]">HYBRID</p>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container51 />
          <Background24 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[560px] px-[61.3px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-20z74a css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[52px] not-italic relative shrink-0 text-[41.4px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.04px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">{`DIR. OF MARKETING &`}</p>
        <p className="css-8zr56v css-ew64yg">COMMS</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading10 />
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-[#ec5151] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background25 />
      <Container52 />
    </div>
  );
}

function BackgroundShadow9() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-0 right-[656px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1508px]" data-name="Background+Shadow">
      <Background22 />
      <Background23 />
      <Background26 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[35.7px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">LACOSMÉTIQUE</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading11 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[417.6700134277344px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Cosmetics and beauty retailer</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[25.8px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">$58,000 - $73,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow10() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow10 />
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container53 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin5 />
      <Container59 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bottom-1/2 css-8zr56v left-0 right-1/2 top-0" data-name="Component 1">
      <div className="absolute inset-[0_0_0_-1.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1789 12">
          <g id="Component 1">
            <g id="Vector">
              <path d={svgPaths.p33d33f00} fill="black" />
              <path d={svgPaths.pcdd9c00} stroke="var(--stroke-0, white)" strokeWidth="0.8" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.p33d33f00} fill="black" />
              <path d={svgPaths.pcdd9c00} stroke="var(--stroke-0, #B22234)" strokeWidth="0.533333" />
            </g>
            <g id="Vector_3">
              <path d={svgPaths.p284fff00} fill="black" />
              <path d={svgPaths.p1856a060} stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
            </g>
            <g id="Vector_4">
              <path d={svgPaths.p284fff00} fill="black" />
              <path d={svgPaths.p1856a060} stroke="var(--stroke-0, #B22234)" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-[#012169] css-8zr56v css-gxdil1 h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Background">
      <Component4 />
      <div className="absolute bg-white bottom-[4px] css-8zr56v h-[4px] left-1/4 right-[62.5%]" data-name="Background" />
      <div className="absolute bg-white bottom-1/2 css-8zr56v right-[4px] top-[33.33%] w-[4px]" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.6px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Pyrmont, NSW</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Background29 />
      <Container60 />
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-[#42424c] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-8zr56v css-ew64yg leading-[20px]">OFFICE</p>
      </div>
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container61 />
          <Background30 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center pl-[39.23px] pr-[39.25px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-fcb6oo css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[45px] not-italic relative shrink-0 text-[35.9px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-0.9px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">{`ECOMMERCE & MARKETING`}</p>
        <p className="css-8zr56v css-ew64yg">COORDINATOR</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading12 />
    </div>
  );
}

function Background32() {
  return (
    <div className="absolute bg-[#147c80] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background31 />
      <Container62 />
    </div>
  );
}

function BackgroundShadow11() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-[656px] right-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1508px]" data-name="Background+Shadow">
      <Background27 />
      <Background28 />
      <Background32 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">MARIE FRANCE</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading13 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[504.0899963378906px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">{`Weight loss & body treatment clinic`}</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[27px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">PHP 80,000 - 100,000/mo</p>
      </div>
    </div>
  );
}

function BackgroundShadow12() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow12 />
    </div>
  );
}

function Background33() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container63 />
      <Container65 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background34() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin6 />
      <Container69 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute css-8zr56v css-lem4j5 left-[4px] size-[8px] top-1/2" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Component 1">
          <path d={svgPaths.p30ddb300} fill="var(--fill-0, #FCD116)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="css-8zr56v css-gxdil1 h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Container">
      <div className="absolute bg-[#0038a8] bottom-1/2 css-8zr56v left-0 right-0 top-0" data-name="Background" />
      <div className="absolute bg-[#ce1126] bottom-0 css-8zr56v left-0 right-0 top-1/2" data-name="Background" />
      <div className="absolute border-b-12 border-l-14 border-solid border-t-12 border-white css-8zr56v h-[24px] left-0 top-0 w-[14px]" data-name="Border" />
      <Component5 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[16.7px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Makati</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Background35() {
  return (
    <div className="bg-[#9ca3af] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-8zr56v css-ew64yg leading-[20px]">HYBRID</p>
      </div>
    </div>
  );
}

function Background36() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container72 />
          <Background35 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-g0mm18 css-twuwr6 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[47.8px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.2px] uppercase">
        <p className="css-8zr56v css-ew64yg leading-[60px]">BRAND MANAGER</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Background37() {
  return (
    <div className="absolute bg-[#c6488c] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background36 />
      <Container73 />
    </div>
  );
}

function BackgroundShadow13() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-0 right-[656px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[2262px]" data-name="Background+Shadow">
      <Background33 />
      <Background34 />
      <Background37 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[35.7px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">TECH SOLUTIONS INDIA</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[374.4700012207031px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">IT services and consulting</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[26.4px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">₹12,00,000 - ₹15,00,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow14() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow14 />
    </div>
  );
}

function Background38() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container74 />
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container79 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background39() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin7 />
      <Container80 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute css-2chd6x css-8zr56v left-1/2 size-[8px] top-1/2" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Component 1">
          <path d={svgPaths.pefbcb00} id="Vector" stroke="var(--stroke-0, #000080)" strokeWidth="0.333333" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="css-8zr56v css-gxdil1 h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Container">
      <div className="absolute bg-[#f93] css-8zr56v inset-[0_0_66.67%_0]" data-name="Background" />
      <div className="absolute bg-white css-8zr56v inset-[33.33%_0]" data-name="Background" />
      <div className="absolute bg-[#138808] css-8zr56v inset-[66.67%_0_0_0]" data-name="Background" />
      <Component6 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.7px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Bangalore</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Background40() {
  return (
    <div className="bg-[#e5e7eb] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-8zr56v css-ew64yg leading-[20px]">REMOTE</p>
      </div>
    </div>
  );
}

function Background41() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container83 />
          <Background40 />
        </div>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center px-[76px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-20z74a css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[52px] not-italic relative shrink-0 text-[41.4px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.04px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">DIGITAL MARKETING</p>
        <p className="css-8zr56v css-ew64yg">MANAGER</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading16 />
    </div>
  );
}

function Background42() {
  return (
    <div className="absolute bg-[#27ae60] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background41 />
      <Container84 />
    </div>
  );
}

function BackgroundShadow15() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-[656px] right-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[2262px]" data-name="Background+Shadow">
      <Background38 />
      <Background39 />
      <Background42 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">ZOMBIE WALK</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading17 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[216.0500030517578px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Halloween event</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[27.7px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">R12,000 - R15,000/mo</p>
      </div>
    </div>
  );
}

function BackgroundShadow16() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow16 />
    </div>
  );
}

function Background43() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container85 />
      <Container87 />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container90 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background44() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin8 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div className="css-8zr56v css-gxdil1 h-[24px] relative shrink-0 w-[32px] z-[2]" data-name="Container">
      <div className="absolute bg-[#e03c31] css-8zr56v inset-[0_0_66.67%_0]" data-name="Background" />
      <div className="absolute bg-[#001489] css-8zr56v inset-[66.67%_0_0_0]" data-name="Background" />
      <div className="absolute bg-white css-8zr56v inset-[33.33%_0]" data-name="Background" />
      <div className="absolute border-[#007749] border-b-12 border-l-12 border-solid border-t-12 css-8zr56v h-[24px] left-0 top-0 w-[12px]" data-name="Border" />
      <div className="absolute border-[#ffb81c] border-b-10 border-l-10 border-solid border-t-10 css-8zr56v h-[20px] left-0 top-0 w-[10px]" data-name="Border" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.4px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">South Africa</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Background45() {
  return (
    <div className="bg-[#e5e7eb] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-8zr56v css-ew64yg leading-[20px]">REMOTE</p>
      </div>
    </div>
  );
}

function Background46() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container94 />
          <Background45 />
        </div>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center pl-[113.05px] pr-[113.06px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-g0mm18 css-twuwr6 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[60px] not-italic relative shrink-0 text-[47.4px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.2px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">SOCIAL MEDIA</p>
        <p className="css-8zr56v css-ew64yg">MANAGER</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading18 />
    </div>
  );
}

function Background47() {
  return (
    <div className="absolute bg-[#e8b84d] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background46 />
      <Container95 />
    </div>
  );
}

function BackgroundShadow17() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-0 right-[656px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[3016px]" data-name="Background+Shadow">
      <Background43 />
      <Background44 />
      <Background47 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[36px] text-center uppercase">
        <p className="css-8zr56v css-ew64yg leading-[45px]">HEARD</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch css-1lkilf h-[60px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading19 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center min-w-[417.6700134277344px] relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[24px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[32px]">Financial management software</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch css-1lkilf h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[26.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[36px]">$150,000 - $170,000</p>
      </div>
    </div>
  );
}

function BackgroundShadow18() {
  return (
    <div className="bg-[#4a5568] content-stretch css-1lkilf flex-col items-start px-[32px] py-[16px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Container99 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch css-1lkilf h-[78px] items-center justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow18 />
    </div>
  );
}

function Background48() {
  return (
    <div className="absolute bg-white content-stretch css-1lkilf flex-col gap-[24px] items-start left-0 p-[48px] right-0 top-[280px]" data-name="Background">
      <Container96 />
      <Container98 />
      <Container100 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[23.6px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">link in the bio.</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container101 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5dade2] text-[17.2px] text-center w-full">
        <p className="css-4hzbpn css-8zr56v leading-[28px]">@samssocialmediaclub</p>
      </div>
    </div>
  );
}

function Background49() {
  return (
    <div className="absolute bg-[#f3f0eb] content-stretch css-1lkilf flex-col h-[120px] items-start justify-center left-0 p-[32px] right-0 top-[602px]" data-name="Background">
      <Margin9 />
      <Container102 />
    </div>
  );
}

function Component7() {
  return (
    <div className="css-8zr56v relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d={svgPaths.p2c061400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1a184d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
          <path d="M1.66667 10H18.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Background50() {
  return (
    <div className="content-stretch css-1lkilf css-jb2xst h-[24px] items-center justify-center relative rounded-[2px] shrink-0 w-[32px] z-[2]" data-name="Background">
      <Component7 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[17.4px]">
        <p className="css-8zr56v css-ew64yg leading-[28px]">Work from anywhere</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch css-1lkilf gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Background50 />
      <Container103 />
    </div>
  );
}

function Background51() {
  return (
    <div className="bg-[#e5e7eb] content-stretch css-1lkilf flex-col items-start px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-8zr56v css-ew64yg leading-[20px]">REMOTE</p>
      </div>
    </div>
  );
}

function Background52() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="css-1lkilf flex-row items-center size-full">
        <div className="content-stretch css-1lkilf items-center justify-between p-[16px] relative w-full">
          <Container104 />
          <Background51 />
        </div>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center px-[29.19px] py-0 relative shrink-0" data-name="Heading 1">
      <div className="css-1lkilf css-20z74a css-g0mm18 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[52px] not-italic relative shrink-0 text-[41.4px] text-center text-shadow-[0px_2px_8px_rgba(0,0,0,0.15)] text-white tracking-[-1.04px] uppercase">
        <p className="css-8zr56v css-ew64yg mb-0">SR GROWTH MARKETING</p>
        <p className="css-8zr56v css-ew64yg">MANAGER</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch css-1lkilf h-[140px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading20 />
    </div>
  );
}

function Background53() {
  return (
    <div className="absolute bg-[#7f95e4] content-stretch css-1lkilf flex-col h-[280px] items-start justify-between left-0 p-[32px] right-0 top-0" data-name="Background">
      <Background52 />
      <Container105 />
    </div>
  );
}

function BackgroundShadow19() {
  return (
    <div className="absolute bg-white css-8zr56v css-gxdil1 h-[722px] left-[656px] right-0 rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[3016px]" data-name="Background+Shadow">
      <Background48 />
      <Background49 />
      <Background53 />
    </div>
  );
}

function Container106() {
  return (
    <div className="css-8zr56v h-[3754px] relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
      <BackgroundShadow3 />
      <BackgroundShadow5 />
      <BackgroundShadow7 />
      <BackgroundShadow9 />
      <BackgroundShadow11 />
      <BackgroundShadow13 />
      <BackgroundShadow15 />
      <BackgroundShadow17 />
      <BackgroundShadow19 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch css-1lkilf flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-1lkilf css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[23.3px] text-center text-white w-full">
        <p className="css-4hzbpn css-8zr56v leading-[32px]">Complete Region Overview</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">UK</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12.6px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#2f3e73</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-0 right-[985.61px] top-0" data-name="Container">
      <div className="absolute bg-[#2f3e73] css-8hhw9a css-8zr56v left-1/2 rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">Scotland</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d8b4fe] text-[14px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">NEW</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[246.39px] right-[739.2px] top-0" data-name="Container">
      <div className="absolute bg-[#5e4b8b] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">Wales</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fca5a5] text-[14px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">NEW</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[492.8px] right-[492.81px] top-0" data-name="Container">
      <div className="absolute bg-[#b80f2e] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">US</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12.5px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#42424c</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[739.19px] right-[246.4px] top-0" data-name="Container">
      <div className="absolute bg-[#42424c] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.4px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">Canada</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13.7px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#ec5151</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[985.59px] right-[0.02px] top-0" data-name="Container">
      <div className="absolute bg-[#ec5151] css-8hhw9a css-8zr56v left-1/2 rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container119 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.5px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">Australia</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13.2px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#147c80</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-0 right-[985.61px] top-[132px]" data-name="Container">
      <div className="absolute bg-[#147c80] css-8hhw9a css-8zr56v left-1/2 rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">Philippines</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12.5px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#c6488c</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[246.39px] right-[739.2px] top-[132px]" data-name="Container">
      <div className="absolute bg-[#c6488c] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">India</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13.1px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#27ae60</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[492.8px] right-[492.81px] top-[132px]" data-name="Container">
      <div className="absolute bg-[#27ae60] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container128 />
      <Container129 />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">S. Africa</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12.6px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#e8b84d</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[739.19px] right-[246.4px] top-[132px]" data-name="Container">
      <div className="absolute bg-[#e8b84d] css-8hhw9a css-8zr56v left-[calc(50%-0.01px)] rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[72px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-center text-white">
        <p className="css-8zr56v css-ew64yg leading-[24px]">WFA</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch css-1lkilf flex-col items-center left-0 right-0 top-[96px]" data-name="Container">
      <div className="css-1lkilf css-g0mm18 css-skt1ck flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12.6px] text-center">
        <p className="css-8zr56v css-ew64yg leading-[20px]">#7f95e4</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute css-8zr56v h-[116px] left-[985.59px] right-[0.02px] top-[132px]" data-name="Container">
      <div className="absolute bg-[#7f95e4] css-8hhw9a css-8zr56v left-1/2 rounded-[8px] size-[64px] top-0" data-name="Background" />
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="css-8zr56v h-[248px] relative shrink-0 w-full" data-name="Container">
      <Container109 />
      <Container112 />
      <Container115 />
      <Container118 />
      <Container121 />
      <Container124 />
      <Container127 />
      <Container130 />
      <Container133 />
      <Container136 />
    </div>
  );
}

function Background54() {
  return (
    <div className="bg-[#2a2a2a] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch css-1lkilf flex-col gap-[24px] items-start pb-[32px] pt-[64px] px-[32px] relative w-full">
        <Heading21 />
        <Container137 />
      </div>
    </div>
  );
}

export default function Container138() {
  return (
    <div className="content-stretch css-1lkilf flex-col gap-[16px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container />
      <Container106 />
      <Background54 />
    </div>
  );
}