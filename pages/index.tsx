import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Lottie } from '../components/Lottie';
import { Tabs } from '../components/Tabs';
import { WhatWeOffer } from '../sections/WhatWeOffer';

export default function Home() {
  return (
    <div className="">
      <div
        className="w-full h-[704px] bg-cover bg-bottom flex flex-col items-center relative"
        style={{
          backgroundImage: 'url(/main.jpg)',
        }}
      >
        <Header />
        <Container wide>
          <h1 className="title-1 mt-[82px]">
            TAILORED SOLUTIONS <br /> THAT SUIT YOUR NEEDS
          </h1>
          <div className="w-[138px] h-[4px] bg-secondary my-[44px]"></div>
          <Button>See what we offer</Button>
          <div className="overflow-hidden">
            <Lottie
              style={{ width: '578px' }}
              src="lottie/30286239-fb21-47f3-ab15-7495d639d72c.json"
              className="absolute left-[680px] bottom-[-320px]"
            />
            <Lottie
              style={{ width: '276px' }}
              src="lottie/355a04a6-668d-4fcc-aae2-d2af1451ba80.json"
              className="absolute left-[400px] bottom-[-190px]"
            />
            <Lottie
              style={{ width: '407px' }}
              src="lottie/6c9228ec-9c25-492d-9758-432393638219.json"
              className="absolute left-0 bottom-[-340px]"
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className="subtitle mt-[91px]">About us</div>
        <h2 className="title-2">WHY BLUEBIRD</h2>
        <p className="mb-[76px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
          <Button className="ml-[38px] mt-1">read more</Button>
        </p>
        <Tabs
          tabs={[
            {
              label: 'Boutique',
              content: (
                <>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </>
              ),
            },
            {
              label: 'Lean',
              content: (
                <>
                  {' '}
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum.
                </>
              ),
            },
            {
              label: 'Personal',
              content: (
                <>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </>
              ),
            },
          ]}
        />
        <picture className="mx-auto">
          <source srcSet="/home/swiggle.svg" type="image/svg+xml" />
          <img src="/home/swiggle.svg" alt="Swiggle" className="w-[813px] mt-[20px]" />
        </picture>
        <WhatWeOffer />
      </Container>
      <div className="bg-[#f1f1f1] pt-[72px]">
        <Container center>
          <h2 className="title-2">
            SOME OF THE PEOPLE WE???VE <span className="text-[#DA7D3B]">WORKED</span> WITH
          </h2>
          <div className="w-[138px] h-[4px] bg-secondary mt-[27px] mb-[64px]"></div>
          {/* <div className="mb-[76px] text-red-500">{twentytwoSeven}</div> */}
          <div
            className="w-[304px] h-[40px] bg-cover bg-bottom flex flex-col items-center relative bg-opacity-80 "
            style={{
              backgroundImage: 'url(/companies/22seven.svg)',
            }}
          ></div>
        </Container>
      </div>
      <div className="pt-[55px] pb-[100px] bg-primary shadow-[0px 9px 11px #00000029]">
        <Container>
          <div className="subtitle mt-[91px]">Case studies</div>
          <h2 className="title-2 alt">SEE OUR LATEST WORK</h2>
          <p className="alt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <div className="mt-[85px] flex space-x-[29px]">
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom relative"
              style={{
                backgroundImage: 'url(/case-studies/revio.png)',
              }}
            >
              <div className="bg-[#3D6895] inline-flex h-[59px] rounded-full items-center absolute bottom-0 left-0 mb-[13px]">
                <div className="bg-white h-full w-[59px] rounded-full"></div>
                <div className="text-[35px] leading-[43px] text-white font-medium px-4">REVIO</div>
              </div>
            </div>
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom"
              style={{
                backgroundImage: 'url(/case-studies/raubex.png)',
              }}
            ></div>
            <div
              className="w-[334px] h-[273px] bg-cover bg-bottom"
              style={{
                backgroundImage: 'url(/case-studies/aurora.png)',
              }}
            ></div>
          </div>
        </Container>
      </div>

      <div
        className="w-full bg-cover bg-bottom flex flex-col items-center relative pt-[60px] pb-[77px] bg-[#F1F1F1]"
        style={{
          backgroundImage: 'url(/secondary-overlay.png)',
        }}
      >
        <Container center>
          <h2 className="title-2 alt">HAVE A PROJECT IN MIND?</h2>
          <div className="-my-8">
            <Lottie src="lottie/8455f50a-6938-486b-b2bf-4f187cc737bf.json" />
          </div>
          <Button>Get in touch</Button>
        </Container>
      </div>
      <div className="bg-[#F1F1F1] pb-[54px]">
        <Container wide>
          <div className="mt-20 w-full bg-[#F1F1F1]">
            <div className="flex items-center w-full">
              <picture>
                <source srcSet="/home/logo.svg" type="image/svg+xml" />
                <img src="/home/logo.svg" alt="Bluebird" className="w-[121px] mx-10" />
              </picture>
              <div className="text-[18px] leading-[21px] ml-4">
                <div className="border-b-2 border-primary pb-6 mb-6 flex items-end">
                  <div>
                    <div className="font-semibold uppercase  mb-1">Find us at</div>
                    <div className="font-normal">
                      Fujairah Creative City Free Zone
                      <br /> Creative Tower
                      <br /> Fujairah
                      <br /> United Arab Emirates
                      <br /> PO Box 4422
                    </div>
                  </div>
                  <div className="text-highlight text-[22px] mx-10 font-bold mb-14">and</div>
                  <div className="font-normal">
                    Cedarwood House
                    <br /> Ballywoods Office Park
                    <br /> 33 Ballyclare Drive <br />
                    Bryanston, Johannesburg
                    <br />
                    South Africa
                    <br /> 2191
                  </div>
                </div>
                <div>
                  <div className="font-semibold uppercase  mb-1">Contact us</div>
                  <div className="font-normal">info@bluebird.dev</div>
                </div>
              </div>
              <div className="flex-1">
                <ol className="text-primary font-semibold text-[14px] leading-[20px] text-right uppercase">
                  <li>Home</li>
                  <li>Why bluebird</li>
                  <li>What we offer</li>
                  <li>Case studies</li>
                  <li>Quote calculator</li>
                  <li>Contact</li>
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
